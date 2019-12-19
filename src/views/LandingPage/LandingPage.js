import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        
        brand="Pet Stationary"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div style={{backgroundImage:"linear-gradient(rgba(51, 47, 47, 0.5), rgba(0, 0, 0, 0.7)),url(https://cdn.shopify.com/s/files/1/1938/8295/files/december_christmas_dog_1400x.progressive.jpg?v=1576097734)",backgroundSize:"cover",height:"90vh"}}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem style={{marginTop:"270px",marginBottom:"30px"}} xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Dream Puppy is With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
             
                <Link to="/signup">
                <Button
                color="danger"
                size="lg"
                rel="noopener noreferrer"
              >Sign up</Button>
              </Link>
              
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
