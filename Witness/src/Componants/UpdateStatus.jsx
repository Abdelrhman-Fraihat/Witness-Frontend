import React from "react";
import "../Style/Admin/ManageUsers.css"

function UpdateStatus({filteredUsers, onChangeState}) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>البريد الإلكتروني</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.Email}</td>

              <td>
                <span
                  className={`status ${
                    user.state === "نشط" ? "active" : "disabled"
                  }`}
                >
                  {user.state}
                </span>
              </td>

              <td className="actions">
                <span className="actionsDots">⋯</span>

                <select
                  className="actionsSelect"
                  value={user.state}
                  onChange={(e) => onChangeState(user.id, e.target.value)}
                >
                  <option value="نشط">نشط</option>
                  <option value="معطل">معطل</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateStatus;
