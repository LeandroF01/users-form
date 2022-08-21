import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { CreateUsers } from "./components/UsersForm/CreateUsers";
import { UsersForm } from "./components/UsersForm/UsersForm";
import { UsersList } from "./components/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpenForm = () => setIsFormOpen(true);

  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="App">
      <button className="button__open" onClick={handleOpenForm}>
        Open Form
      </button>
      <div className={isFormOpen ? "form-container" : "form-none"}>
        <div className="content-userform">
          <CreateUsers
            handleCloseForm={handleCloseForm}
            getAllUsers={getAllUsers}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
          />
          {/* <UsersForm
            getAllUsers={getAllUsers}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
            handleCloseForm={handleCloseForm}
          /> */}
        </div>
      </div>

      <div className="content-userlist">
        {users?.map((user) => (
          <UsersList
            key={user.id}
            user={user}
            setUpdateInfo={setUpdateInfo}
            getAllUsers={getAllUsers}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
