import react, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/pages/login.css"; // reuse the SAME css file

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ fullName, email, password, confirmPassword });

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div>
      <div className="container">
        <div>
          <span>Witness</span>
          <span>⚖</span>
        </div>

        <h2>انشاء حساب جديد في منصة شهادة</h2>

        <form onSubmit={handleSubmit}>
          <p>الاسم الكامل</p>
          <input
            type="text"
            placeholder="أدخل اسمك الكامل"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <p>البريد الإلكتروني</p>
          <input
            type="text"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>كلمة المرور</p>
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>تأكيد كلمة المرور</p>
          <input
            type="password"
            placeholder="أعد إدخال كلمة المرور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">إنشاء حساب</button>
        </form>

        <p>لديك حساب بالفعل؟</p>
        <Link to="/login">تسجيل الدخول</Link>
      </div>
    </div>
  );
}

export default Register;
