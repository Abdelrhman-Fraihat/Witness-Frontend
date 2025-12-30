import React, { useState } from "react";
import UserFilter from "../../Componants/UserFilter";
import UpdateStatus from "../../Componants/UpdateStatus";
import AdminNavBar from "../../Componants/AdminNavBar";
import "../../Style/Admin/ManageUsers.css";

const allUsers = [
  {
    id: 1,
    firstName: "أحمد",
    lastName: "علي",
    Email: "ahmad@gmail.com",
    state: "نشط",
  },
  {
    id: 2,
    firstName: "أحمد",
    lastName: "",
    Email: "ahmad@gmail.com",
    state: "نشط",
  },
  {
    id: 3,
    firstName: "أحمد",
    lastName: "مصطفى",
    Email: "ahmad@gmail.com",
    state: "نشط",
  },
  {
    id: 4,
    firstName: "مصطفى",
    lastName: "أحمد",
    Email: "ahmad@gmail.com",
    state: "نشط",
  },
  {
    id: 5,
    firstName: "مصطفى",
    lastName: "",
    Email: "ahmad@gmail.com",
    state: "معطل",
  },
];

function ManageUsers() {
  const [usersFirstName, setUsersFirstName] = useState("");
  const [users, setUsers] = useState(allUsers);

  let filteredUsers = users;

  if (usersFirstName !== "") {
    filteredUsers = filteredUsers.filter((user) => {
      if (
        user.firstName === usersFirstName ||
        user.lastName === usersFirstName
      ) {
        return user;
      }
    });
  }

  function handleOnChangeUser(e) {
    setUsersFirstName(e.target.value);
  }

  function handleChangeState(id, value) {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, state: value };
      }
      return user;
    });

    setUsers(updatedUsers);
  }

  return (
    <>
    <AdminNavBar/>
      <div className="manage-users">
        <div className="header">
          <h2>إدارة المستخدمين</h2>
          <UserFilter value={usersFirstName} onChange={handleOnChangeUser} />
          <UpdateStatus
            filteredUsers={filteredUsers}
            onChangeState={handleChangeState}
          />
        </div>
      </div>
    </>
  );
}

export default ManageUsers;
