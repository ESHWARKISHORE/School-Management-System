import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg04.jpg";
import axiosInstance from "config/config";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [adminUser, setadminUser]=React.useState("");
  const [adminUserError, setAdminUserError]= React.useState("");
  const [adminPassword, setAdminPassword]=React.useState("");
  const [adminPasswordError, setAdminPasswordError]=React.useState("");
  const [loginError, setLogineeError]=React.useState("");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="School Management System"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Admin Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Admin ID Number"
                      id="adminUser"
                      formControlProps={{
                        fullWidth: true,
                        required: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: event=>{
                          setadminUser(event.target.value);
                        },
                        autoComplete:"on",
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircle className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    {adminUserError !== "" ? (
                      <span style={{color:"red"}}>{{adminUserError}}</span>
                    ):(
                      adminUserError
                    )
                    }
                    <br/>
                    <CustomInput
                      labelText="Password"
                      id="adminPassword"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: event=>{
                          setAdminPassword(event.target.value);
                        },
                        autoComplete:"on",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                    {adminPassword !== "" ? (
                      <span style={{color:"red"}}>{{adminPassword}}</span>
                    ):(
                      adminPassword
                    )
                    }
                    <br/>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button 
                    simple 
                    color="primary" 
                    size="lg"
                    onClick={event=>{
                      event.preventDefault();
                      console.log("Button is pressed");
                      if(adminUser && adminPassword){
                        axiosInstance
                        .post("",{
                          adminUser,adminPassword
                        })
                        .then(response=>{

                        })
                      }
                    }}
                    >
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
