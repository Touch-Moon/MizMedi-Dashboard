import React from "react";
import "./WelcomeCard.scss";

interface WelcomeCardProps {
  userName: string;
  hospitalName: string;
  departmentName: string;
  onEditProfile?: () => void;
  onLogout?: () => void;
  onOnlineReservation?: () => void;
}

export default function WelcomeCard({
  userName,
  hospitalName,
  departmentName,
  onEditProfile,
  onLogout,
  onOnlineReservation,
}: WelcomeCardProps) {
  const handleEditProfile = () => {
    if (onEditProfile) return onEditProfile();
    console.log("프로필 설정");
  };

  const handleLogout = () => {
    if (onLogout) return onLogout();
    console.log("로그아웃");
  };

  const handleOnlineReservation = () => {
    if (onOnlineReservation) return onOnlineReservation();
    console.log("온라인 예약");
  };

  return (
    <section className="welcome-card" aria-label="회원 프로필">
      <div className="welcome-card__header">
        <h2 className="welcome-card__name">{userName}님,</h2>

        <div className="welcome-card__header-actions" aria-label="프로필 액션">
          <div className="welcome-card__menu">
            <button
              type="button"
              className="welcome-card__menu-btn"
              aria-label="프로필 메뉴"
              aria-haspopup="menu"
            >
              <svg className="welcome-card__menu-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 4.2C10.663 4.2 11.2 3.663 11.2 3C11.2 2.337 10.663 1.8 10 1.8C9.337 1.8 8.8 2.337 8.8 3C8.8 3.663 9.337 4.2 10 4.2Z"
                  fill="currentColor"
                />
                <path
                  d="M10 11.2C10.663 11.2 11.2 10.663 11.2 10C11.2 9.337 10.663 8.8 10 8.8C9.337 8.8 8.8 9.337 8.8 10C8.8 10.663 9.337 11.2 10 11.2Z"
                  fill="currentColor"
                />
                <path
                  d="M10 18.2C10.663 18.2 11.2 17.663 11.2 17C11.2 16.337 10.663 15.8 10 15.8C9.337 15.8 8.8 16.337 8.8 17C8.8 17.663 9.337 18.2 10 18.2Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="welcome-card__menu-list" role="menu" aria-label="프로필 메뉴">
              <button
                type="button"
                className="welcome-card__menu-item"
                role="menuitem"
                onClick={handleEditProfile}
              >
                프로필 설정
              </button>
              <button
                type="button"
                className="welcome-card__menu-item"
                role="menuitem"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="welcome-card__message">
        {hospitalName} {departmentName}에 오신것을 환영합니다.
      </p>

      <button
        type="button"
        className="welcome-card__reserve-btn"
        onClick={handleOnlineReservation}
      >
        <svg
          className="welcome-card__reserve-icon"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 3V6M14 3V6M3 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        온라인 예약
      </button>
    </section>
  );
}
