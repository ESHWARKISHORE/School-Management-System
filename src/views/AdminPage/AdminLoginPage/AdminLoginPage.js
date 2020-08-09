import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import axiosInstance from ".././../../config/config";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg04.jpg";
import { escapeLeadingUnderscores } from "typescript";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [userId, setuserId] = React.useState("");
  const [userIdError, setuserIdError] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordError, setpasswordError] = React.useState("");
  const [loginError, setloginError] = React.useState("");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <div>
        <Link to="/" className={classes.dropdownLink}>
          <Header
            absolute
            color="transparent"
            brand="School Management System"
            rightLinks={<HeaderLinks />}
            {...rest}
          />
        </Link>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Admin Login Page</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Admin User ID"
                        id="id"
                        formControlProps={{
                          fullWidth: true,
                          required: true,
                        }}
                        inputProps={{
                          type: "text",
                          onChange: (event) => {
                            setuserId(event.target.value);
                          },
                          onBlur: (event) => {
                            setuserId(event.target.value);
                            if (!event.target.value) {
                              setuserIdError("User Id is required");
                            }
                          },
                          autoComplete: "on",
                          endAdornment: (
                            <InputAdornment position="end">
                              <AccountCircle
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {userIdError !== "" ? (
                        <span style={{ color: "red" }}>{userIdError}</span>
                      ) : (
                        userIdError
                      )}
                      <br />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                          required: true,
                        }}
                        inputProps={{
                          type: "password",
                          onChange: (event) => {
                            setpassword(event.target.value);
                          },
                          onBlur: (event) => {
                            setpassword(event.target.value);
                            if (!event.target.value) {
                              setpasswordError("Password is required");
                            }
                          },
                          autoComplete: "on",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                        }}
                      />
                      {passwordError !== "" ? (
                        <span style={{ color: "red" }}>{passwordError}</span>
                      ) : (
                        passwordError
                      )}
                      <br />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button
                        simple
                        color="primary"
                        fullWidth
                        type="submit"
                        size="lg"
                        onClick={(event) => {
                          event.preventDefault();
                          console.log(userId, password);
                          if (userId && password) {
                            axiosInstance
                              .post("", {
                                userId,
                                password,
                              })
                              .then((response) => {
                                setloginError(response.data.message);
                                //get this from the response from the login api
                              })
                              .catch((error) => {
                                if (error.response) {
                                  if (
                                    error.response.data &&
                                    error.response.data.message
                                  ) {
                                    setloginError(error.response.data.message);
                                  } else {
                                    setloginError(
                                      "Unexpected Error has occured. Please try again later"
                                    );
                                  }
                                } else {
                                  setloginError(
                                    "Cannot connect to server at the moment. Please try again later"
                                  );
                                }
                              });
                          } else {
                            setloginError(
                              "Validate all fields and then continue..."
                            );
                          }
                        }}
                      >
                        Login
                      </Button>
                    </CardFooter>
                    <div style={{ textAlign: "center", color:"red" }}>
                      {loginError !== "" ? (
                        <span>{loginError}</span>
                      ) : (
                        loginError
                      )}
                      <br />
                      <br />
                      <br />
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    </>
  );
}
