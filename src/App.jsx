import { useState } from "react";
import "./App.css";
import FormComponent from "./components/formComponent/FormComponent";
import UpdateUserForm from "./components/formComponent/UpdateUserForm";
import { Button } from "@mui/material";
import UserCard from "./components/shared/UserCard";

function App() {
  // {name: "", email: "", phone: "" }
  // const userInfo = {};

  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState({
    open: false,
    index: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ----------------------------------------------
  const handleUpdateFormOpen = (index) =>
    setOpenUpdateForm({ open: true, index: index });
  const handleUpdateFormClose = () => setOpenUpdateForm(false);
  // ------------------------------------------------
  const handleDelete = (index) => {
    const userDataTemp = [...userData];
    userDataTemp.splice(index, 1);
    setUserData(userDataTemp);
  };
  // ===================================================
  return (
    <div className="mainContainer flexCenter">
      <div className="innerContainer">
        {open && (
          <FormComponent
            open={open}
            handleClose={handleClose}
            setUserData={setUserData}
          />
        )}
        {openUpdateForm.open && (
          <UpdateUserForm
            open={openUpdateForm.open}
            handleClose={handleUpdateFormClose}
            index={openUpdateForm.index}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        <div className="mainHeader">
          <h1>User Info</h1>
          <Button variant="contained" onClick={handleOpen}>
            Add User
          </Button>
        </div>
        <hr />
        <div className="userInfoContainer">
          <br />
          {userData.map((userInfo, index) => {
            return (
              <UserCard
                key={userInfo.phone + index}
                userInfo={userInfo}
                index={index}
                handleUpdateFormOpen={handleUpdateFormOpen}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
