import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Style/Admin/AdminCrimeReview.css";
import AdminNavBar from "../../Componants/AdminNavBar";

function AdminCrimeReview() {
  const { id } = useParams();
  const [crime, setCrime] = useState(null);

  const crimes = [
    {
      id: 1,
      title: "سرقة بنك في وضح النهار",
      country: "المملكة العربية السعودية",
      city: "الرياض",
      date: "2023-10-26",
      status: "pending",
      reporterName: "أحمد فهد",
      reporterEmail: "ahmed.fahad@example.com",
      description: "وصف تفصيلي هنا...",
      notes: "",
      media: [
        "https://picsum.photos/id/1060/900/600",
        "https://picsum.photos/id/1011/900/600",
        "https://picsum.photos/id/1025/900/600",
      ],
    },
    // ...
  ];

  useEffect(() => {
    const foundCrime = crimes.find((c) => c.id === Number(id));
    setCrime(foundCrime);
  }, [id]);
  if (!crime) {
    return (
      <div style={{ direction: "rtl", color: "white", padding: 20 }}>
        جاري التحميل...
      </div>
    );
  }
  return (
    <>
      <AdminNavBar />
      <div className="crime-review-page" dir="rtl">
        <div className="crime-review-container">
          <h1 className="crime-review-title">{crime.title}</h1>

          <div className="crime-review-layout">
            {/* LEFT */}
            <div>
              {/* معلومات الجريمة */}
              <div className="crime-card">
                <h3 className="crime-card-title">معلومات الجريمة</h3>

                <div className="crime-grid">
                  <span className="crime-label">التاريخ</span>
                  <span className="crime-value">{crime.date}</span>

                  <span className="crime-label">الدولة</span>
                  <span className="crime-value">{crime.country}</span>

                  <span className="crime-label">المدينة/المنطقة</span>
                  <span className="crime-value">{crime.city}</span>

                  <span className="crime-label">حالة التقرير</span>
                  <span className="crime-value">
                    <span className={`crime-status-pill ${crime.status}`}>
                      {crime.status === "approved" && "موثق"}
                      {crime.status === "pending" && "قيد المراجعة"}
                      {crime.status === "rejected" && "مرفوض"}
                    </span>
                  </span>
                </div>
              </div>

              {/* معلومات المبلغ */}
              <div className="crime-card">
                <h3 className="crime-card-title">معلومات المبلغ</h3>

                <div className="crime-grid">
                  <span className="crime-label">اسم المبلغ</span>
                  <span className="crime-value">{crime.reporterName}</span>

                  <span className="crime-label">البريد الإلكتروني</span>
                  <span className="crime-value">{crime.reporterEmail}</span>
                </div>
              </div>

              {/* الوصف */}
              <div className="crime-card">
                <h3 className="crime-card-title">الوصف التفصيلي</h3>
                <p className="crime-description">{crime.description}</p>
              </div>

              {/* معرض الوسائط */}
              <div className="crime-card">
                <h3 className="crime-card-title">معرض الوسائط</h3>

                {crime.media && crime.media.length > 0 ? (
                  <div className="crime-media-grid">
                    {crime.media.map((src, idx) => (
                      <div className="crime-media-item" key={idx}>
                        <img src={src} alt="" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="crime-media-empty">لا توجد وسائط</div>
                )}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="crime-side-panel">
              <button className="crime-btn primary">توثيق</button>
              <button className="crime-btn">رفض</button>
              <button className="crime-btn danger">حذف</button>

              <h4 className="notes-title">ملاحظات المسؤول</h4>
              <textarea
                className="notes-textarea"
                placeholder="...اكتب ملاحظاتك هنا"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCrimeReview;
