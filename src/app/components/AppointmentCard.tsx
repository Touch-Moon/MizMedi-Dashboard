import React from "react";
import { Plus, User } from "lucide-react";

import "./AppointmentCard.scss";

interface AppointmentCardProps {
  date: string;
  time: string;
  department: string;
  doctorName: string;
  doctorImage?: string;
}

export default function AppointmentCard({ date, time, department, doctorName }: AppointmentCardProps) {
  return (
    <div className="appointment-card">
      <div className="appointment-card__header">
        <h3 className="appointment-card__title">다가오는 진료 예약</h3>
        <button className="appointment-card__action" type="button">
          전체보기 <Plus size={16} />
        </button>
      </div>

      <div className="appointment-card__body">
        <div className="appointment-card__info">
          <p className="appointment-card__date">
            {date} {time}
          </p>
          <p className="appointment-card__department">{department}</p>
          <p className="appointment-card__doctor">{doctorName}</p>
        </div>
        <div className="appointment-card__avatar">
          <User className="appointment-card__avatar-icon" />
        </div>
      </div>
    </div>
  );
}
