import axios from "axios";
import React from "react";
import { UpdateUsers } from "./UpdateUsers";

export const CreateUsers = ({
  getAllUsers,
  handleCloseForm,
  updateInfo,
  setUpdateInfo,
}) => {
  const createUsersForm = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <UpdateUsers
        getAllUsers={getAllUsers}
        handleCloseForm={handleCloseForm}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        createUsersForm={createUsersForm}
      />
    </div>
  );
};
