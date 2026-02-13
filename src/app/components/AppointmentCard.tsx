import React from "react";
import { Plus, User } from "lucide-react";

interface AppointmentCardProps {
  date: string;
  time: string;
  department: string;
  doctorName: string;
  doctorImage?: string;
}

export function AppointmentCard({ date, time, department, doctorName }: AppointmentCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-[8px] p-6 border border-[#d3d3d3] dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#007A8C] dark:text-[#4DB8CC]">다가오는 진료 예약</h3>
        <button className="text-gray-400 dark:text-gray-500 flex items-center gap-1 transition-colors duration-400 hover:text-gray-600 dark:hover:text-gray-300">
          전체보기 <Plus size={16} />
        </button>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#000] dark:text-gray-300 font-medium mb-1">
            {date} {time}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-1">{department}</p>
          <p className="font-bold text-[#000] dark:text-gray-200">{doctorName}</p>
        </div>
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center">
          <User className="w-10 h-10 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </div>
  );
}