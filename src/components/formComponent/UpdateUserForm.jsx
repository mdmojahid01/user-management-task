import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function UpdateUserForm({
  open,
  handleClose,
  index,
  userData,
  setUserData,
}) {
  const initialUser = { name: "", email: "", phone: "" };
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState(initialUser);

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      let v = e.target.value;
      if (!isNaN(v)) {
        setUser((old) => {
          return { ...old, [e.target.name]: e.target.value };
        });
      }
    } else {
      setUser((old) => {
        return { ...old, [e.target.name]: e.target.value };
      });
    }
    setError((old) => {
      return { ...old, [e.target.name]: "" };
    });
  };
  const validate = () => {
    const error = {};
    const emailValidator = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (user.name.length == 0) {
      error.name = "Enter your name";
    }
    if (user.email.length === 0) {
      error.email = "Enter your email";
    } else if (!emailValidator.test(user.email)) {
      error.email = "Enter your correct email";
    }

    if (user.phone.length === 0) {
      error.phone = "Enter your phone no.";
    } else if (user.phone.length !== 10) {
      error.phone = "Enter your correct phone";
    }

    if (Object.keys(error).length === 0) {
      const userDataTemp = [...userData];
      userDataTemp[index] = user;
      setUserData(userDataTemp);
      setUser(initialUser);
      handleClose();
    } else {
      return error;
    }
  };

  const handleSubmit = () => {
    setError(() => {
      const v = validate();
      return { ...initialUser, ...v };
    });
  };
  useEffect(() => {
    if (userData.length) {
      setUser(userData[index]);
    }
    return () => {
      setUser(initialUser);
    };
  }, []);
  // ---------------------------------------------------------------
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h2">
            Update Form
          </Typography>
          <TextField
            fullWidth
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={user.name}
            onChange={handleChange}
            helperText={error.name}
            error={error.name.length !== 0 ? true : false}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={user.email}
            onChange={handleChange}
            helperText={error.email}
            error={error.email.length !== 0 ? true : false}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            helperText={error.phone}
            error={error.phone.length !== 0 ? true : false}
          />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
