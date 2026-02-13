import React from "react";
import { Plus } from "lucide-react";

interface Medication {
  name: string;
  dosage: string;
  color: string;
}

interface MedicationCardProps {
  medications: Medication[];
}

export function MedicationCard({ medications }: MedicationCardProps) {
  const categories = [
    { label: "주사", color: "bg-pink-400" },
    { label: "경구약", color: "bg-green-400" },
    { label: "질정", color: "bg-blue-400" },
    { label: "시술", color: "bg-yellow-400" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[8px] p-6 border border-[#d3d3d3] dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#007A8C] dark:text-[#4DB8CC]">오늘의 약과 주사</h3>
        <button className="text-gray-400 dark:text-gray-500 flex items-center gap-1 transition-colors duration-400 hover:text-gray-600 dark:hover:text-gray-300">
          전체보기 <Plus size={16} />
        </button>
      </div>
      
      <div className="space-y-3 mb-4">
        {medications.map((med, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${med.color}`}></div>
            <span className="text-[#000] dark:text-gray-300">{med.name} {med.dosage}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        {categories.map((cat, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
            <span className="text-[#000] dark:text-gray-300">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}