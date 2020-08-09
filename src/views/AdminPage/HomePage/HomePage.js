import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "assets/jss/material-kit-react/views/components.js";
import Image1 from "assets/img/bg01.jpg";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        brand="School Management System"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg01.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>School Management System 
                <br/>(ADMIN PAGE)</h1>
                <h3 className={classes.subtitle}>
                  Manage a complete school process from here
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{height:"700px",paddingLeft:"50px"}}>
      <div className={classes.sections}>
      <div className={classes.container}>
      <div id="inputs">
      <div className={classes.title}>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
            <h3>Add Teacher/Student</h3>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "ID"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
              <CustomDropdown
                      buttonText="Role"
                    //   dropdownHeader="Dropdown Header"
                      buttonProps={{
                        // className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Student",
                        "Teacher"
                      ]}
                    />
                    <Button color="primary">Primary</Button>
            </GridItem>
            </GridContainer>
      </div>
      </div>
      </div>
      </div>
      <Footer />
      </>
  );
}
