import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Style/componants/Layout.css";

function Layout() {
  return (
    <>
      <header className="topbar">
        <nav className="nav" dir="">
          <div className="nav__links">
            <Link to="/home">الصفحة الرئيسية</Link>
            <Link to="/CrimeDeatails">استعراض الجرائم</Link>
          </div>

          <Link to="/login">تسجيل الدخول</Link>
        </nav>
      </header>

      <main>
      <Outlet />
    </main>

      <footer className="footer" dir="rtl">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__col footer__brand">
              <p>
                منصة لتوثيق جرائم الاحتلال الإسرائيلي بحق المدنيين.
              </p>
            </div>

            <div className="footer__col">
              <h4>روابط سريعة</h4>
              <Link to="/home">الصفحة الرئيسية</Link>
              <Link to="/CrimeDeatails">استعراض الجرائم</Link>
              <Link to="/register">التسجيل</Link>
              <Link to="/about">عن المنصة</Link>
            </div>

            <div className="footer__col">
              <h4>الدعم</h4>
              <Link to="/contact">تواصل معنا</Link>
              <Link to="/faq">الأسئلة الشائعة</Link>
              <Link to="/privacy">سياسة الخصوصية</Link>
              <Link to="/terms">الشروط</Link>
            </div>
          </div>

          <div className="footer__line"></div>

          <p className="footer__copy">
            &copy; 2025 Witness — جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
