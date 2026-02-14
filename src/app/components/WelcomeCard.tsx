import React from "react";
import { Button } from "./ui/button";

interface WelcomeCardProps {
  userName: string;
  hospitalName: string;
  departmentName: string;
}

export function WelcomeCard({ userName, hospitalName, departmentName }: WelcomeCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-[8px] p-6 border border-[#d3d3d3] dark:border-gray-700">
      <h2 className="mb-3 text-[#007A8C] dark:text-[#4DB8CC]">{userName}님,</h2>
      <p className="text-[#000] dark:text-gray-300 mb-4">
        {hospitalName} {departmentName}에 오신것을 환영합니다.
      </p>
      <button className="bg-[#07394A] hover:bg-[#007A8C] dark:bg-[#4DB8CC] dark:hover:bg-[#007A8C] text-white px-8 py-4 rounded w-full transition-colors duration-400 inline-flex items-center justify-center gap-2">
        <svg
          className="w-6 h-6"
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
    </div>
  );
}
