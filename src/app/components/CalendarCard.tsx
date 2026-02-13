import React from "react";
import { Plus } from "lucide-react";

import "./CalendarCard.scss";

interface CalendarDay {
  date: number;
  dots?: ("pink" | "green" | "blue")[];
}

export function CalendarCard() {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const calendarDays: (CalendarDay | null)[] = [
    null,
    { date: 2 },
    { date: 3 },
    { date: 4, dots: ["pink", "green"] },
    { date: 5, dots: ["pink", "green"] },
    { date: 6, dots: ["pink", "green"] },
    { date: 7, dots: ["pink", "green"] },
    { date: 8, dots: ["pink", "green"] },
    { date: 9 },
    { date: 10 },
    { date: 11 },
    { date: 12 },
    { date: 13 },
    { date: 14 },
    { date: 15 },
    { date: 16 },
    { date: 17 },
    { date: 18 },
    { date: 19 },
    { date: 20 },
    { date: 21 },
    { date: 22 },
    { date: 23 },
    { date: 24 },
    { date: 25 },
    { date: 26 },
    { date: 27 },
    { date: 28 },
  ];

  return (
    <div className="calendar-card">
      <div className="calendar-card__header">
        <h2 className="calendar-card__title">2026.02</h2>
        <button type="button" className="calendar-card__link">
          전체보기 <Plus size={16} />
        </button>
      </div>

      <div className="calendar-card__weekdays">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-card__weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-card__grid">
        {calendarDays.map((day, index) => (
          <div key={index} className="calendar-card__day">
            {day && (
              <>
                <span className="calendar-card__date">{day.date}</span>
                {day.dots && day.dots.length > 0 && (
                  <div className="calendar-card__dots">
                    {day.dots.map((modifier, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`calendar-card__dot calendar-card__dot--${modifier}`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="calendar-card__footer" />
    </div>
  );
}
