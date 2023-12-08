// Write all the code here
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Users = [
  {
    email: "meera@gmail.com",
    password: "meera123",
    name: "Meera Dev",
    username: "meera",
  },
];

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [users, setUsers] = useState(Users);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  function handleLogin() {
    const validUser = users.find((user) => {
      return (
        user.email === loginDetails.email &&
        user.password === loginDetails.password
      );
    });

    if (validUser) {
      const user = {
        name: validUser.name,
        email: validUser.email,
        username: validUser.username,
      };
      localStorage.setItem("activeUserInfo", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid email or password! Please check your entries.");
    }
  }

  function handleRegister() {
    console.log("register button clicked");
    if (
      registerFormData.email.length === 0 ||
      registerFormData.password.length === 0 ||
      registerFormData.name.length === 0 ||
      registerFormData.username.length === 0
    ) {
      alert("Please complete the fields");
      return;
    }
    const existingAccount = users.find((user) => {
      return user.email === registerFormData.email;
    });

    if (existingAccount) {
      alert("Already have an account in this email ID. Please login");
      handleJustifyClick("tab1");
    } else {
      setUsers((oldUsers) => [...oldUsers, registerFormData]);
      alert("Successfully created account. Please login");
      handleJustifyClick("tab1");
    }
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" type="button" onClick={handleLogin}>
            Sign in
          </MDBBtn>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
                onClick={() => navigate("/")}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Name"
            id="form1"
            type="text"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                name: e.target.value,
              })
            }
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                username: e.target.value,
              })
            }
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                email: e.target.value,
              })
            }
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                password: e.target.value,
              })
            }
          />
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div>
          <MDBBtn className="mb-4 w-100" type="button" onClick={handleRegister}>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
