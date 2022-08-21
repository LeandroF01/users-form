import axios from "axios";
import React from "react";
import { UsersForm } from "./UsersForm";

export const UpdateUsers = ({
  getAllUsers,
  updateInfo,
  handleCloseForm,
  setUpdateInfo,
  createUsersForm,
}) => {
  const updateUsersForm = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <UsersForm
        updateUsersForm={updateUsersForm}
        handleCloseForm={handleCloseForm}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        createUsersForm={createUsersForm}
      />
    </div>
  );
};
