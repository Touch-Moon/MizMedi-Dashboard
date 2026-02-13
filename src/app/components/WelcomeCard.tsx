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
      <button className="bg-[#07394A] hover:bg-[#007A8C] dark:bg-[#4DB8CC] dark:hover:bg-[#007A8C] text-white px-8 py-4 rounded w-full transition-colors duration-400">
        온라인 예약
      </button>
    </div>
  );
}