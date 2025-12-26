import React from "react";
import "../Style/pages/UserDashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../Componants/Layout";
import { useParams } from "react-router-dom";

function UserDashboard() {
    const {username} = useParams();
  return (
    <>
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* ===== Header ===== */}
        <div className="dashboard-header">
            <h2 className="welcome">
            مرحباً بك، {username}
          </h2>
          <button className="add-btn">
            <i className="bi bi-plus"></i>
            إضافة تقرير
          </button>


        </div>

        {/* ===== Stats ===== */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-title">عدد التقارير المرفوضة</span>
            <span className="stat-value">2</span>
          </div>

          <div className="stat-card">
            <span className="stat-title">عدد التقارير الموثقة</span>
            <span className="stat-value">8</span>
          </div>

          <div className="stat-card">
            <span className="stat-title">عدد التقارير المقدمة</span>
            <span className="stat-value">12</span>
          </div>
        </div>

        {/* ===== Table ===== */}
        <div className="table-card">
          <h3 className="table-title">آخر 5 تقارير</h3>

          <table>
            <thead>
              <tr>
                <th>العنوان</th>
                <th>النوع</th>
                <th>التاريخ</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>استهداف حي سكني في غزة</td>
                <td>قصف</td>
                <td>2023-11-20</td>
                <td className="status approved">موثق</td>
                <td><a href="#">عرض التفاصيل</a></td>
              </tr>

              <tr>
                <td>قصف منزل مدني</td>
                <td>غارات جوية</td>
                <td>2023-11-15</td>
                <td className="status pending">قيد المراجعة</td>
                <td><a href="#">عرض التفاصيل</a></td>
              </tr>

              <tr>
                <td>استهداف مسجد</td>
                <td>قصف</td>
                <td>2023-11-10</td>
                <td className="status approved">موثق</td>
                <td><a href="#">عرض التفاصيل</a></td>
              </tr>

              <tr>
                <td>مجزرة بحق المدنيين</td>
                <td>قصف</td>
                <td>2023-11-05</td>
                <td className="status rejected">مرفوض</td>
                <td><a href="#">عرض التفاصيل</a></td>
              </tr>

              <tr>
                <td>هدم منازل سكنية</td>
                <td>غارات جوية</td>
                <td>2023-11-01</td>
                <td className="status approved">موثق</td>
                <td><a href="#">عرض التفاصيل</a></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
    <Layout/>
    </>
  );
}
export default UserDashboard;