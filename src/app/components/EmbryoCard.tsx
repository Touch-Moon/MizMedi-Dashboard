import React from "react";

export function EmbryoCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-[8px] p-6 border border-[#d3d3d3] dark:border-gray-700 flex flex-col items-center justify-center text-center min-h-[200px]">
      <div className="mb-4">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="35" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300 dark:text-gray-600"/>
          <path d="M40 20 Q50 25 50 35 Q50 45 40 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300 dark:text-gray-600"/>
          <path d="M40 20 Q30 25 30 35 Q30 45 40 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300 dark:text-gray-600"/>
          <circle cx="40" cy="35" r="8" fill="currentColor" className="text-gray-200 dark:text-gray-700"/>
          <path d="M35 55 Q40 60 45 55" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="text-gray-300 dark:text-gray-600"/>
        </svg>
      </div>
      <p className="text-[#000] dark:text-gray-300 font-medium">
        배아의 발달 상태를<br />확인해보세요.
      </p>
    </div>
  );
}