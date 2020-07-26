import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import { Carousel } from 'react-responsive-carousel';

import styles from "assets/jss/material-kit-react/views/components.js";
import Image1 from "assets/img/bg01.jpg";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
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
                <h1 className={classes.title}>School Management System</h1>
                <h3 className={classes.subtitle}>
                  Manage a complete school process from here
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              Go to login page
            </Button>
          </Link>
        </GridItem>
        <div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
        <Carousel showThumbs={false}>
                <div>
                    <img src={Image1} alt="News1"/>
                    <p className="legend">News1</p>
                </div>
                <div>
                    <img src={Image1} alt="News2"/>
                    <p className="legend">News2</p>
                </div>
                <div>
                    <img src={Image1} alt="News3"/>
                    <p className="legend">News3</p>
                </div>
            </Carousel>
            </GridItem>
            </GridContainer>
            </div>
            <br/>
      </div>
      <Footer />
    </div>
  );
}
