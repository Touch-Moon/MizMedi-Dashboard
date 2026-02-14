import React from "react";
import Navigation from "./components/Navigation";
import { WelcomeCard } from "./components/WelcomeCard";
import { MedicationCard } from "./components/MedicationCard";
import { AppointmentCard } from "./components/AppointmentCard";
import { CalendarCard } from "./components/CalendarCard";
import { EmbryoCard } from "./components/EmbryoCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { Footer } from "./components/Footer";

import "./App.scss";

export default function App() {
  const medications = [
    { name: "크렌신", dosage: "40mg", color: "bg-pink-400" },
    { name: "레트로졸", dosage: "40mg", color: "bg-green-400" },
    { name: "약물명", dosage: "40mg", color: "bg-blue-400" }
  ];

  return (
    <div className="app">
      <Navigation />
      <div className="app__content">
        <div className="app__container">
          <div className="app__grid">
            {/* First Column - 3/12 */}
            <div className="app__col app__col--span-3">
              <WelcomeCard
                userName="홍길동"
                hospitalName="미즈메디병원"
                departmentName="아이드림센터"
              />
            </div>

            {/* Second Column - 5/12 */}
            <div className="app__col app__col--span-5">
              <CalendarCard />

              <EmbryoCard />

              <TestimonialCard
                title="감사합니다"
                content="이유진 선생님, 감사합니다. 몇 번의 시도 끝에 포기하고 지내다가 시도차가 할 수..."
              />
            </div>

            {/* Third Column - 4/12 */}
            <div className="app__col app__col--span-4">
              <MedicationCard medications={medications} />

              <AppointmentCard
                date="2026.02.24(화)"
                time="14:20"
                department="산부인과"
                doctorName="Dr. 김상신"
              />

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
