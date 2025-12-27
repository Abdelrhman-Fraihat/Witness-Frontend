import React from "react";
import "../Style/pages/MyReports.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../Componants/Layout";

function MyReports() {
  const reports = [
    {
      id: 1,
      title: "استهداف حي سكني في غزة",
      type: "قصف جوي",
      date: "2023-10-28",
      status: "accepted",
    },
    {
      id: 2,
      title: "قصف منزل مدني",
      type: "غارات جوية",
      date: "2023-11-15",
      status: "pending",
    },
    {
      id: 3,
      title: "استهداف مسجد",
      type: "قصف بري",
      date: "2023-12-01",
      status: "rejected",
    },
    {
      id: 4,
      title: "استهداف مستشفى",
      type: "قصف جوي",
      date: "2024-01-10",
      status: "accepted",
    },
    {
      id: 5,
      title: "قصف مدرسة",
      type: "غارات جوية",
      date: "2024-02-22",
      status: "pending",
    },
  ];

  return (
    <>
    <div className="my-reports-page">
      <div className="my-reports-container">
        {/* ===== Header ===== */}
        <div className="reports-header">
          <h2 className="page-title">تقاريري</h2>

          <button className="add-report-btn">
            <i className="bi bi-plus-lg"></i>
            إضافة تقرير
          </button>
        </div>

        {/* ===== Table ===== */}
        <div className="reports-table-card">
          <table>
            <thead>
              <tr>
                <th>الإجراءات</th>
                <th>الحالة</th>
                <th>التاريخ</th>
                <th>النوع</th>
                <th>العنوان</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="actions">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                  </td>

                  <td>
                    <span className={`status ${report.status}`}>
                      {report.status === "accepted" && "مقبول"}
                      {report.status === "pending" && "قيد المراجعة"}
                      {report.status === "rejected" && "مرفوض"}
                    </span>
                  </td>

                  <td>{report.date}</td>
                  <td>{report.type}</td>
                  <td>{report.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Layout/>
    </>
  );
}
export default MyReports;
