import React from "react";
import { Plus } from "lucide-react";

interface TestimonialCardProps {
  title: string;
  content: string;
}

export default function TestimonialCard({ title, content }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-[8px] p-6 border border-[#d3d3d3] dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#007A8C] dark:text-[#4DB8CC]">{title}</h3>
        <button className="text-gray-400 dark:text-gray-500 flex items-center gap-1 transition-colors duration-400 hover:text-gray-600 dark:hover:text-gray-300">
          전체보기 <Plus size={16} />
        </button>
      </div>
      <p className="text-[#000] dark:text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
}