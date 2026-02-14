import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  addDays,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
} from "date-fns";
import { ko } from "date-fns/locale";

import "./CalendarCard.scss";

export type ViewMode = "day" | "week" | "month" | "full";

export interface ScheduleItem {
  id: string;
  title: string;
  time?: string;
  dot?: "pink" | "green" | "blue";
}

// 스케줄 데이터: 날짜 키(YYYY-MM-DD) -> 스케줄 목록
const MOCK_SCHEDULES: Record<string, ScheduleItem[]> = {
  "2026-02-04": [
    { id: "1", title: "산부인과 정기검진", time: "10:00", dot: "pink" },
    { id: "2", title: "약 복용 체크", time: "20:00", dot: "green" },
  ],
  "2026-02-05": [
    { id: "3", title: "배란일 검사", time: "09:30", dot: "blue" },
  ],
  "2026-02-06": [
    { id: "4", title: "상담 예약", time: "14:00", dot: "pink" },
    { id: "5", title: "약 복용", time: "20:00", dot: "green" },
  ],
  "2026-02-07": [{ id: "6", title: "초음파 검사", time: "11:00", dot: "blue" }],
  "2026-02-08": [
    { id: "7", title: "혈액검사", time: "08:00", dot: "pink" },
  ],
  "2026-02-24": [
    { id: "8", title: "산부인과 예약", time: "14:20", dot: "green" },
  ],
};

const DAYS_OF_WEEK = ["월", "화", "수", "목", "금", "토", "일"];

function getSchedulesForDate(date: Date): ScheduleItem[] {
  const key = format(date, "yyyy-MM-dd");
  return MOCK_SCHEDULES[key] ?? [];
}

function getDotsForDate(date: Date): ("pink" | "green" | "blue")[] {
  const items = getSchedulesForDate(date);
  const dots = items.map((s) => s.dot).filter(Boolean) as ("pink" | "green" | "blue")[];
  return [...new Set(dots)];
}

type FullScheduleRow = { dateKey: string; dateLabel: string; item: ScheduleItem };

/** 최근 스케줄이 최상단 (날짜 내림차순) */
function getAllSchedulesSorted(): FullScheduleRow[] {
  const rows: FullScheduleRow[] = [];
  const keys = Object.keys(MOCK_SCHEDULES).sort((a, b) => b.localeCompare(a));
  for (const dateKey of keys) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const dateLabel = format(new Date(y, m - 1, d), "yyyy년 M월 d일", { locale: ko });
    const items = MOCK_SCHEDULES[dateKey] ?? [];
    for (const item of items) {
      rows.push({ dateKey, dateLabel, item });
    }
  }
  return rows;
}

const LIST_COUNT_OPTIONS = [5, 10, 20, 50] as const;

export default function CalendarCard() {
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 1, 1));
  const [hoveredDateKey, setHoveredDateKey] = useState<string | null>(null);
  const [listCount, setListCount] = useState(10);

  const fullScheduleList = useMemo(() => getAllSchedulesSorted(), []);
  const displayedList = useMemo(
    () => fullScheduleList.slice(0, listCount),
    [fullScheduleList, listCount]
  );

  const goPrev = () => {
    if (viewMode === "day") setCurrentDate((d) => subDays(d, 1));
    else if (viewMode === "week") setCurrentDate((d) => subWeeks(d, 1));
    else setCurrentDate((d) => subMonths(d, 1));
  };

  const goNext = () => {
    if (viewMode === "day") setCurrentDate((d) => addDays(d, 1));
    else if (viewMode === "week") setCurrentDate((d) => addWeeks(d, 1));
    else setCurrentDate((d) => addMonths(d, 1));
  };

  const goToDate = (date: Date) => {
    setCurrentDate(date);
    setViewMode("day");
  };

  const handleDayKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    date: Date,
    hasSchedule: boolean
  ) => {
    if (!hasSchedule) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToDate(date);
    }
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const monthGridDays = useMemo(() => {
    const days: Date[] = [];
    let d = calendarStart;
    while (d <= calendarEnd) {
      days.push(d);
      d = addDays(d, 1);
    }
    return days;
  }, [calendarStart, calendarEnd]);

  const weekRangeDays = useMemo(() => {
    const start = startOfWeek(currentDate, { weekStartsOn: 1 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [currentDate]);

  const dayViewSchedules = useMemo(
    () => getSchedulesForDate(currentDate),
    [currentDate]
  );

  const titleLabel =
    viewMode === "full"
      ? "전체 일정"
      : viewMode === "day"
        ? format(currentDate, "yyyy년 M월 d일", { locale: ko })
        : viewMode === "week"
          ? `${format(weekRangeDays[0], "M/d", { locale: ko })} ~ ${format(weekRangeDays[6], "M/d", { locale: ko })}`
          : format(currentDate, "yyyy년 M월", { locale: ko });

  return (
    <div className="calendar-card">
      <div className="calendar-card__header">
        {viewMode !== "full" && (
          <div className="calendar-card__nav-row">
            <button
              type="button"
              className="calendar-card__nav-btn"
              onClick={goPrev}
              aria-label={viewMode === "day" ? "이전 날" : viewMode === "week" ? "이전 주" : "이전 달"}
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="calendar-card__title">{titleLabel}</h2>
            <button
              type="button"
              className="calendar-card__nav-btn"
              onClick={goNext}
              aria-label={viewMode === "day" ? "다음 날" : viewMode === "week" ? "다음 주" : "다음 달"}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
        {viewMode === "full" && <h2 className="calendar-card__title">{titleLabel}</h2>}
        <div className="calendar-card__header-right">
          <div className="calendar-card__view-toggle">
            {(["month", "week", "day", "full"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                className={`calendar-card__view-btn ${viewMode === mode ? "calendar-card__view-btn--active" : ""}`}
                onClick={() => setViewMode(mode)}
              >
                {mode === "month" ? "월" : mode === "week" ? "주" : mode === "day" ? "일" : "전체"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewMode === "full" && (
        <div className="calendar-card__full-list">
          <div className="calendar-card__full-list-control">
            <label className="calendar-card__full-list-label">
              표시 건수
              <select
                className="calendar-card__full-list-select"
                value={listCount}
                onChange={(e) => setListCount(Number(e.target.value))}
              >
                {LIST_COUNT_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}건
                  </option>
                ))}
              </select>
            </label>
            <span className="calendar-card__full-list-total">
              전체 {fullScheduleList.length}건
            </span>
          </div>
          {fullScheduleList.length === 0 ? (
            <p className="calendar-card__full-list-empty">등록된 일정이 없습니다.</p>
          ) : (
            <ul className="calendar-card__full-list-ul">
              {displayedList.map(({ dateKey, dateLabel, item }) => (
                <li key={`${dateKey}-${item.id}`} className="calendar-card__full-list-item">
                  <button
                    type="button"
                    className="calendar-card__full-list-button"
                    onClick={() => {
                      const [y, m, d] = dateKey.split("-").map(Number);
                      goToDate(new Date(y, m - 1, d));
                    }}
                    aria-label={`${dateLabel} 일정 보기`}
                  >
                    <span className="calendar-card__full-list-date">{dateLabel}</span>
                    <span className="calendar-card__full-list-content">
                      {item.time && <span className="calendar-card__full-list-time">{item.time}</span>}
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {viewMode === "month" && (
        <>
          <div className="calendar-card__weekdays">
            {DAYS_OF_WEEK.map((day, i) => (
              <div key={i} className="calendar-card__weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-card__grid">
            {monthGridDays.map((day) => {
              const dateKey = format(day, "yyyy-MM-dd");
              const schedules = getSchedulesForDate(day);
              const dots = getDotsForDate(day);
              const hasSchedule = schedules.length > 0;
              const isHovered = hoveredDateKey === dateKey;

              return (
                <div
                  key={dateKey}
                  className={`calendar-card__day ${!isSameMonth(day, currentDate) ? "calendar-card__day--other" : ""} ${isToday(day) ? "calendar-card__day--today" : ""} ${hasSchedule ? "calendar-card__day--has-schedule" : ""}`}
                  onMouseEnter={() => hasSchedule && setHoveredDateKey(dateKey)}
                  onMouseLeave={() => setHoveredDateKey(null)}
                  onClick={() => hasSchedule && goToDate(day)}
                  onKeyDown={(event) => handleDayKeyDown(event, day, hasSchedule)}
                  role={hasSchedule ? "button" : undefined}
                  tabIndex={hasSchedule ? 0 : -1}
                  aria-label={
                    hasSchedule
                      ? `${format(day, "M월 d일", { locale: ko })} 일정 보기`
                      : undefined
                  }
                >
                  <span className="calendar-card__date">{format(day, "d")}</span>
                  {dots.length > 0 && (
                    <div className="calendar-card__dots">
                      {dots.map((modifier, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`calendar-card__dot calendar-card__dot--${modifier}`}
                        />
                      ))}
                    </div>
                  )}
                  {hasSchedule && isHovered && (
                    <div className="calendar-card__tooltip">
                      <div className="calendar-card__tooltip-title">
                        {format(day, "M월 d일", { locale: ko })}
                      </div>
                      {schedules.map((s) => (
                        <div key={s.id} className="calendar-card__tooltip-item">
                          {s.time && <span className="calendar-card__tooltip-time">{s.time}</span>}
                          <span>{s.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {viewMode === "week" && (
        <div className="calendar-card__week-view">
          {weekRangeDays.map((day) => {
            const schedules = getSchedulesForDate(day);
            return (
              <div key={day.toISOString()} className="calendar-card__week-day">
                <div className="calendar-card__week-day-header">
                  <span className="calendar-card__week-day-name">
                    {format(day, "EEE", { locale: ko })}
                  </span>
                  <span className={`calendar-card__week-day-num ${isToday(day) ? "calendar-card__week-day-num--today" : ""}`}>
                    {format(day, "d")}
                  </span>
                </div>
                <div className="calendar-card__week-day-schedules">
                  {schedules.length === 0 ? (
                    <span className="calendar-card__week-day-empty">일정 없음</span>
                  ) : (
                    schedules.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className="calendar-card__schedule-item"
                        onClick={() => goToDate(day)}
                        aria-label={`${format(day, "M월 d일", { locale: ko })} 일정 보기`}
                      >
                        {s.time && <span className="calendar-card__schedule-time">{s.time}</span>}
                        <span>{s.title}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {viewMode === "day" && (
        <div className="calendar-card__day-view">
          {dayViewSchedules.length === 0 ? (
            <p className="calendar-card__day-empty">이 날 등록된 스케줄이 없습니다.</p>
          ) : (
            <ul className="calendar-card__schedule-list">
              {dayViewSchedules.map((s) => (
                <li key={s.id} className="calendar-card__schedule-list-item">
                  {s.time && <span className="calendar-card__schedule-time">{s.time}</span>}
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="calendar-card__footer" />
    </div>
  );
}
