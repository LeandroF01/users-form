import axios from "axios";
import React from "react";
import "./styleList.css";

export const UsersList = ({
  user,
  getAllUsers,
  setUpdateInfo,
  handleOpenForm,
}) => {
  const { first_name, last_name, email, birthday } = user;

  const deleteUsers = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    handleOpenForm();
    setUpdateInfo(user);
  };

  return (
    <article className="userlist__card">
      <span className="userlist__name">
        {first_name} {last_name}
      </span>
      <ul>
        <li>
          <span className="userlist_info">Email: </span>
          {email}
        </li>
        <li>
          <span className="userlist_info">Birthday: </span>
          {birthday}
        </li>
      </ul>
      <footer className="userlist__footer">
        <button
          onClick={deleteUsers}
          className="userlist__btn fa-solid fa-trash"></button>
        <button
          onClick={handleUpdate}
          className="userlist__btn fa-solid fa-pen-to-square"></button>
      </footer>
    </article>
  );
};
