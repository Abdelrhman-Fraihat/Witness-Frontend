import React, { useState, useEffect } from "react";
import "../Style/pages/AddEditCrime.css";
import Layout from "../Componants/Layout";

function AddEditCrime() {
  const [images, setImages] = useState([]);

  function handleImageUpload(e) {
    const files = [...e.target.files];
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));

    if (imageFiles.length > 3) {
      alert("يمكنك رفع 3 صور كحد أقصى");
    }

    const limited = imageFiles.slice(0, 3);
    images.forEach((url) => URL.revokeObjectURL(url));

    setImages(limited.map((f) => URL.createObjectURL(f)));
    e.target.value = "";
  }

  function removeImage(index) {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  }

  return (
    <>
    <div className="add-crime-page">
      <div className="add-crime-container">

        <div className="crime-form-card">
          <h3 className="card-title">تفاصيل الجريمة</h3>

          <div className="form-grid">

            <div className="form-group">
              <label>عنوان الجريمة</label>
              <input value="قصف حي سكني في غزة" />
            </div>

            <div className="form-group">
              <label>الدولة</label>
              <select>
                <option>فلسطين</option>
              </select>
            </div>

            <div className="form-group">
              <label>المدينة</label>
              <input value="غزة" />
            </div>

            <div className="form-group">
              <label>التاريخ</label>
              <input type="date" value="2023-10-07" />
            </div>

            <div className="form-group full">
              <label>نوع الجريمة</label>
              <select>
                <option>قصف</option>
                <option>غارات جوية</option>
              </select>
            </div>

            <div className="form-group full">
              <label>وصف تفصيلي</label>
              <textarea rows="6">
في صباح يوم 7 أكتوبر 2023، تعرض حي سكني في قطاع غزة لقصف عنيف...
              </textarea>
            </div>
          </div>

          <div className="media-section">

            <label className="upload-btn">
              رفع وسائط
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleImageUpload}
              />
            </label>
            <label>الوسائط (صور أو فيديوهات)</label>

            <div className="image-preview">
              {images.map((img, index) => (
                <div className="img-box" key={index}>
                  <img src={img} alt="preview" />
                  <button onClick={() => removeImage(index)}>✕</button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button className="btn cancel">إلغاء</button>
            <button className="btn save">حفظ</button>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
export default AddEditCrime;