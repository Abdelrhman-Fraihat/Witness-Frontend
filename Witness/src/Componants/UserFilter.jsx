import React from "react";
import "../Style/componants/crimeFilter.css";

function UserFilter({ user, onUserChange }) {
  return (
    <>
      <div className="crime-filter">
        <input
          type="text"
          value={user}
          onChange={onUserChange}
          placeholder="البحث عن مستخدم"
          required
        />
      </div>
    </>
  );
}

export default UserFilter;
