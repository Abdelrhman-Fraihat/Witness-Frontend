import React, { useState } from "react";
import "../Style/pages/CrimeDetails.css";
import Layout from "../Componants/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";
import Book from "../Style/assets/Book.jpg";

const crimes = [
  {
    id: 1,
    title: "قصف حي سكني في غزة",
    description: "استهداف مباشر لمنازل المدنيين دون سابق انذار",
    date: "2023-10-25",
    location: "غزة",

    longDescription:
      "في مساء يوم الثلاثاء، 17 أكتوبر 2023، تعرض مستشفى المعمداني في غزة لقصف جوي وحشي، مما أسفر عن استشهاد المئات من المدنيين، غالبيتهم من النساء والأطفال، الذين كانوا يلتمسون الأمان داخل المستشفى. كانت هذه المؤسسة الطبية تأوي الآلاف من النازحين الفارين من القصف المستمر في أنحاء القطاع. الهجوم أسفر عن دمار واسع في المبنى واندلاع حرائق كبيرة، مما أدى إلى كارثة إنسانية مروعة. هذا العمل يمثل انتهاكًا صارخًا للقانون الدولي الإنساني الذي يحمي المنشآت الطبية والمدنيين في أوقات النزاع. شهادات من الناجين تفيد بأن القصف كان مفاجئاً وبلا سابق إنذار، حيث تحولت ساحة المستشفى ومبانيه إلى ركام في غضون لحظات. فرق الإسعاف والدفاع المدني واجهت صعوبة بالغة في الوصول إلى الموقع بسبب استمرار القصف والدمار الواسع، مما أدى إلى تفاقم الأوضاع الإنسانية. وقد أدانت منظمات حقوق الإنسان الدولية بشدة هذا الهجوم، مطالبة بتحقيق فوري ومحاسبة المسؤولين عن هذه الجريمة الشنيعة. يعتبر استهداف المستشفيات والمرافق الطبية جريمة حرب بموجب اتفاقيات جنيف.",
    images: [
      "../Style/assets/Book.jpg",
      "/images/crimes/1-2.jpg",
      "/images/crimes/1-3.jpg",
    ],
    reporter: "أحمد منصور",
    stateOfReport: "موثق",
  },
  {
    id: 2,
    title: "استهداف مستشفى",
    description: "قصف منشأة طبية اثناء تواجد المرضى",
    date: "2023-10-28",
    location: "غزة",
  },
  {
    id: 3,
    title: "قتل اطفال",
    description: "استهداف أطفال اثناء لعبهم",
    date: "2023-10-30",
    location: "خان يونس",
  },
  {
    id: 4,
    title: "قصف مدرسة",
    description: "استهداف مدرسة تؤوي نازحين",
    date: "2023-11-01",
    location: "رفح",
  },
  {
    id: 5,
    title: "تدمير بنية تحتية",
    description: "قصف شبكات المياه والكهرباء",
    date: "2023-11-02",
    location: "غزة",
  },
  {
    id: 6,
    title: "استهداف طواقم إسعاف",
    description: "قصف سيارات إسعاف أثناء عملها",
    date: "2023-11-03",
    location: "غزة",
  },
  {
    id: 7,
    title: "قصف حي سكني في غزة",
    description: "استهداف مباشر لمنازل المدنيين دون سابق انذار",
    date: "2023-10-25",
    location: "غزة",
  },
  {
    id: 8,
    title: "استهداف مستشفى",
    description: "قصف منشأة طبية اثناء تواجد المرضى",
    date: "2023-10-28",
    location: "غزة",
  },
  {
    id: 9,
    title: "قتل اطفال",
    description: "استهداف أطفال اثناء لعبهم",
    date: "2023-10-30",
    location: "خان يونس",
  },
  {
    id: 10,
    title: "قصف مدرسة",
    description: "استهداف مدرسة تؤوي نازحين",
    date: "2023-11-01",
    location: "رفح",
  },
  {
    id: 11,
    title: "تدمير بنية تحتية",
    description: "قصف شبكات المياه والكهرباء",
    date: "2023-11-02",
    location: "غزة",
  },
  {
    id: 12,
    title: "استهداف طواقم إسعاف",
    description: "قصف سيارات إسعاف أثناء عملها",
    date: "2023-11-03",
    location: "غزة",
  },
  {
    id: 13,
    title: "قصف حي سكني في غزة",
    description: "استهداف مباشر لمنازل المدنيين دون سابق انذار",
    date: "2023-10-25",
    location: "غزة",
  },
  {
    id: 14,
    title: "استهداف مستشفى",
    description: "قصف منشأة طبية اثناء تواجد المرضى",
    date: "2023-10-28",
    location: "غزة",
  },
  {
    id: 15,
    title: "قتل اطفال",
    description: "استهداف أطفال اثناء لعبهم",
    date: "2023-10-30",
    location: "خان يونس",
  },
  {
    id: 16,
    title: "قصف مدرسة",
    description: "استهداف مدرسة تؤوي نازحين",
    date: "2023-11-01",
    location: "رفح",
  },
  {
    id: 17,
    title: "تدمير بنية تحتية",
    description: "قصف شبكات المياه والكهرباء",
    date: "2023-11-02",
    location: "غزة",
  },
  {
    id: 18,
    title: "استهداف طواقم إسعاف",
    description: "قصف سيارات إسعاف أثناء عملها",
    date: "2023-11-03",
    location: "غزة",
  },
  {
    id: 19,
    title: "قصف حي سكني في غزة",
    description: "استهداف مباشر لمنازل المدنيين دون سابق انذار",
    date: "2023-10-25",
    location: "غزة",
  },
  {
    id: 20,
    title: "استهداف مستشفى",
    description: "قصف منشأة طبية اثناء تواجد المرضى",
    date: "2023-10-28",
    location: "غزة",
  },
  {
    id: 21,
    title: "قتل اطفال",
    description: "استهداف أطفال اثناء لعبهم",
    date: "2023-10-30",
    location: "خان يونس",
  },
  {
    id: 22,
    title: "قصف مدرسة",
    description: "استهداف مدرسة تؤوي نازحين",
    date: "2023-11-01",
    location: "رفح",
  },
  {
    id: 23,
    title: "تدمير بنية تحتية",
    description: "قصف شبكات المياه والكهرباء",
    date: "2023-11-02",
    location: "غزة",
  },
  {
    id: 24,
    title: "استهداف طواقم إسعاف",
    description: "قصف سيارات إسعاف أثناء عملها",
    date: "2023-11-03",
    location: "غزة",
  },
];

function CrimeDeatails() {
  const { id } = useParams();
  const crime = crimes.find((c) => String(c.id) === String(id));
  return (
    <>
      <div className="cd-page">
        <div className="cd-container">
          <div className="cd-wrapper">
            {/* ===== Title ===== */}
            <h1 className="cd-title">{crime.title}</h1>

            {/* ===== Info Section ===== */}
            <div className="cd-info-bar">
              <div className="cd-info-item">
                <span className="cd-label">التاريخ</span>
                <span className="cd-value">{crime.date}</span>
              </div>

              <div className="cd-info-item">
                <span className="cd-label">الموقع</span>
                <span className="cd-value">{crime.location}</span>
              </div>

              <div className="cd-info-item">
                <span className="cd-label">حالة التقرير</span>
                <span className="cd-value cd-state">{crime.stateOfReport}</span>
              </div>

              <div className="cd-info-item">
                <span className="cd-label">المراسل</span>
                <span className="cd-value">{crime.reporter}</span>
              </div>
            </div>

            {/* ===== Details ===== */}
            <div className="cd-details-card">
              <h3 className="cd-section-title">تفاصيل الجريمة</h3>
              <p className="cd-details-text">{crime.longDescription}</p>
            </div>

            {/* ===== Images ===== */}
            <div className="cd-images-card">
              <h3 className="cd-section-title">صور وتوضيحات</h3>

              <div className="cd-images-grid">
                {crime.images.map((img, index) => (
                  <div className="cd-img-box" key={index}>
                    <img className="cd-img" src={Book} alt={`crime-${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrimeDeatails;
