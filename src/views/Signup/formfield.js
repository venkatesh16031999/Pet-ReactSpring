import React from 'react';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import {Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from "components/CustomButtons/Button.js";

const Formfield=(props)=>{
    return (

        <React.Fragment>


            <Row className="justify-content-center">
               <Col className="justify-content-md-center text-center"  xs={10} lg={6}>
               <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="First Name"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="First Name"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="Last Name"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="Email ID"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="Phone Number"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>
               </Col>
               <Col className="justify-content-md-center text-center"  xs={10} lg={6}>
                  
               <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="First Name"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="First Name"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="Last Name"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="Email ID"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
     <CustomInput styles={{borderColor:"#343a40"}}
         labelText="Phone Number"
         success
         formControlProps={{
             fullWidth: true
         }}
     />
     </GridItem>
        </GridContainer>

               </Col>
            </Row>
            <br />
            <Row className="justify-content-center">
               <Col className="justify-content-md-center text-center"  xs={10} lg={6}>
               <Link>
                <Button style={{padding:"12px"}}
                color="danger"
                size="lg"
                rel="noopener noreferrer"
              >Sign up</Button>
              </Link>
              <Link to="/login">
                <Button style={{padding:"12px"}}
                color="danger"
                size="lg"
                rel="noopener noreferrer"
              >&nbsp;&nbsp;Login&nbsp;&nbsp;</Button>
              </Link>
               </Col>
            </Row>

        </React.Fragment>

    );
}

export default Formfield;