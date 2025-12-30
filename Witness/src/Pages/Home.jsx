import react from "react";
import Layout from "../Componants/Layout";
import "../Style/pages/Home.css";
import {Link} from "react-router-dom"
let crimes = [
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
];

function Home() {
  return (
    <>
      <div className="home">
        <section className="intro">
          <h1>شاهد على الحقيقة: توثيق جرائم الاحتلال</h1>
          <p>
            منصة مستقلة تهدف آلى توثيق جرائم الاحتلال الإسرائيلي بحق المدنيين
            باستخدام الأدلة والصور والشهادات الموثوقة.
          </p>
          <div className="intro_button">
            <button className="btn primary">أضف جريمة</button>
            <Link to =  {`/ExploreCrimes/`} className="btn outline">استعراض الجرائم</Link>
          </div>
        </section>

        <section className="stats">
          <div className="stats-card">
            <i className="bi bi-clipboard-check stats-icon"></i>
            <h3>9,876+</h3>
            <p>عدد الجرائم الموثوقة</p>
          </div>

          <div className="stats-card">
            <i className="bi bi-geo-alt stats-icon"></i>
            <h3>45+</h3>
            <p>مناطق مستهدفة</p>
          </div>

          <div className="stats-card">
            <i className="bi bi-bank stats-icon"></i>
            <h3>12,345+</h3>
            <p>عدد الضحايا</p>
          </div>
        </section>

        <section className="crime-section">
          <h2>آخر الجرائم الموثوقة</h2>
          <div className="crimes">
            {crimes.map((crime) => (
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

                <Link to = {`/CrimeDetails/${crime.id}`} className="button">
                  <i className="bi bi-box-arrow-up-right"></i>
                  عرض التفاصيل
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
