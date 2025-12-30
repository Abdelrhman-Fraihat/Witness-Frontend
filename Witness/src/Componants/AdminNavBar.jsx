import {Link} from "react-router-dom"


function AdminNavBar() {
  return (
        <header className="topbar">
        <nav className="nav" dir="">
          <div className="nav__links">
            <Link to="/home">الصفحة الرئيسية</Link>
            <Link to="/CrimeDeatails">استعراض الجرائم</Link>
          </div>

        </nav>
      </header>
  );
}

export default AdminNavBar;
