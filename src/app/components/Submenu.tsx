import React from "react";

import "./Submenu.scss";

const MENU_ITEMS = ["My 아이드림 홈", "오늘의 배아", "다이어리"];

export default function Submenu() {
  return (
    <div className="submenu" aria-label="서브 메뉴">
      <div className="submenu__container">
        <nav className="submenu__nav" aria-label="서브 메뉴 항목">
          {MENU_ITEMS.map((label) => (
            <button key={label} className="submenu__item" type="button">
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
