import React, { useState } from "react";
import "../../Style/Admin/AdminDashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminNavBar from "../../Componants/AdminNavBar";
// assume you already have these
import CrimesFilter from "../../Componants/CrimesFilter";
import Pagination from "../../Componants/Pagination";

function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let ItemPerPage = 5;
  const crimes = [
    {
      id: 1,
      title: "قصف حي سكني",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-30",
      status: "pending",
    },
    {
      id: 2,
      title: "استهداف مستشفى",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-28",
      status: "pending",
    },
    {
      id: 3,
      title: "مجزرة بحق المدنيين",
      country: "فلسطين",
      city: "خان يونس",
      date: "2023-10-25",
      status: "pending",
    },
    {
      id: 4,
      title: "قصف حي سكني",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-30",
      status: "pending",
    },
    {
      id: 5,
      title: "استهداف مستشفى",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-28",
      status: "pending",
    },
    {
      id: 6,
      title: "مجزرة بحق المدنيين",
      country: "فلسطين",
      city: "خان يونس",
      date: "2023-10-25",
      status: "pending",
    },
    {
      id: 7,
      title: "قصف حي سكني",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-30",
      status: "pending",
    },
    {
      id: 8,
      title: "استهداف مستشفى",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-28",
      status: "pending",
    },
    {
      id: 9,
      title: "مجزرة بحق المدنيين",
      country: "فلسطين",
      city: "خان يونس",
      date: "2023-10-25",
      status: "pending",
    },
    {
      id: 10,
      title: "قصف حي سكني",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-30",
      status: "pending",
    },
    {
      id: 11,
      title: "استهداف مستشفى",
      country: "فلسطين",
      city: "غزة",
      date: "2023-10-28",
      status: "pending",
    },
    {
      id: 12,
      title: "مجزرة بحق المدنيين",
      country: "فلسطين",
      city: "خان يونس",
      date: "2023-10-25",
      status: "pending",
    },
  ];

  let filteredCrimes = crimes;
  const start = (currentPage - 1) * ItemPerPage;
  const end = start + ItemPerPage;
  
  if (startDate !== "" && endDate !== "") {
    filteredCrimes = filteredCrimes.filter(
      (crime) => crime.date >= startDate && crime.date <= endDate
    );
  }

  if (location !== "") {
    filteredCrimes = filteredCrimes.filter(
      (crime) => crime.city === location
    );
  }
    const totalPages = Math.ceil(filteredCrimes.length / ItemPerPage);

  const visibleCrimes = filteredCrimes.slice(start, end);


  function handleFilterSubmit(location, startDate, endDate) {
    setStartDate(startDate);
    setEndDate(endDate);
    setLocation(location);
    setCurrentPage(1);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
    <AdminNavBar/>
      <div className="admin-dashboard-page">
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-header">
            <h2>لوحة تحكم المشرف</h2>
          </div>
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <i className="bi bi-trash"></i>
              </div>
              <div className="admin-stat-content">
                <span className="admin-stat-title">التقارير المرفوضة</span>
                <span className="admin-stat-value">9</span>
                <span className="admin-stat-sub">
                  تقارير تم رفضها بعد المراجعة
                </span>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <i className="bi bi-box-arrow-up-right"></i>
              </div>
              <div className="admin-stat-content">
                <span className="admin-stat-title">التقارير الموثقة</span>
                <span className="admin-stat-value">1,180</span>
                <span className="admin-stat-sub">
                  تقارير تم التحقق منها وتوثيقها
                </span>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <div className="admin-stat-content">
                <span className="admin-stat-title">التقارير المعلقة</span>
                <span className="admin-stat-value">45</span>
                <span className="admin-stat-sub">
                  تقارير تنتظر المراجعة والتوثيق
                </span>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <div className="admin-stat-content">
                <span className="admin-stat-title">إجمالي التقارير</span>
                <span className="admin-stat-value">1,234</span>
                <span className="admin-stat-sub">
                  عدد التقارير الكلي في النظام
                </span>
              </div>
            </div>
          </div>

          <div className="admin-filter-wrapper">
            <CrimesFilter
              location={location}
              startDate={startDate}
              endDate={endDate}
              onchange={handleFilterSubmit}
            />
          </div>

          <div className="admin-table-card">
            <table>
              <thead>
                <tr>
                  <th>العنوان</th>
                  <th>الدولة</th>
                  <th>المدينة</th>
                  <th>التاريخ</th>
                  <th>الحالة</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>

              <tbody>
                {visibleCrimes.map((crime) => (
                  <tr key={crime.id}>
                    <td>{crime.title}</td>
                    <td>{crime.country}</td>
                    <td>{crime.city}</td>
                    <td>{crime.date}</td>
                    <td>
                      <span className={`admin-status admin-${crime.status}`}>
                        {crime.status === "approved" && "موثق"}
                        {crime.status === "pending" && "قيد المراجعة"}
                        {crime.status === "rejected" && "مرفوض"}
                      </span>
                    </td>
                    <td className="admin-actions">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-check-lg"></i>
                      <i className="bi bi-x-lg"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}
export default AdminDashboard;