import React, { useState } from "react";
import CrimesFilter from "../Componants/CrimesFilter";
import MyPagination from "../Componants/Pagination";
import "../Style/pages/CrimeDetails.css";
import Layout from "../Componants/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";

const crimes = [
  {
    id: 1,
    title: "قصف حي سكني في غزة",
    description: "استهداف مباشر لمنازل المدنيين دون سابق انذار",
    date: "2023-10-25",
    location: "غزة",
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
  const ItemPerPage = 9;
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let filteredCrimes = crimes;

  if (location !== "") {
    filteredCrimes = filteredCrimes.filter(
      (crime) => crime.location === location
    );
  }

  if (startDate !== "" && endDate !== "") {
    filteredCrimes = filteredCrimes.filter(
      (crimes) => crimes.date >= startDate && crimes.date <= endDate
    );
  }

  const totalPages = Math.ceil(filteredCrimes.length / ItemPerPage);
  const start = (currentPage - 1) * ItemPerPage;
  const end = start + ItemPerPage;
  const visibleCrimes = filteredCrimes.slice(start, end);

  function handelFilterChange(location, startDate, endDate) {
    setLocation(location);
    setStartDate(startDate);
    setEndDate(endDate);
    setCurrentPage(1);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <CrimesFilter
        location={location}
        startDate={startDate}
        endDate={endDate}
        onchange={handelFilterChange}
      />

      <div className="cards-grid">
        {visibleCrimes.map((crime) => (
          <div className="crime-card" key={crime.id}>
            <section className="crime-info">
              <h4>{crime.title}</h4>

              <div className="crime-meta">
                <p className="location">
                  <i className="bi bi-geo-alt"></i>
                  {crime.location}
                </p>

                <p className="date">
                  <i className="bi bi-calendar3"></i>
                  {crime.date}
                </p>
              </div>

              <p className="description">
                <i className="bi bi-file-text"></i>
                {crime.description}
              </p>
            </section>

            <button>
              <i className="bi bi-box-arrow-up-right"></i>
              عرض التفاصيل
            </button>
          </div>
        ))}
      </div>

      <MyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Layout />
    </>
  );
}

export default CrimeDeatails;
