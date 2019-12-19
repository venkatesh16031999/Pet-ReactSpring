import React from 'react';
import styles from './form.module.css';
import {Col,Row,Card} from 'react-bootstrap';

import Formfield from './formfield';

const Form=(props)=>{
    return (
       <React.Fragment>
            <Card className={styles.form}>
            <Card.Body>
            <Row className={styles.formheadingtop}>
               <Col className="justify-content-md-center text-center" className={styles.heading1} xs={2} lg={2}>
                  &nbsp;
               </Col>
               <Col className="justify-content-md-center text-center" className={styles.heading} xs={8} lg={8}>
                  <h3>Login</h3>
               </Col>
               <Col className="justify-content-md-center text-center" className={styles.heading1} xs={2} lg={2}>
                  &nbsp;
               </Col>
            </Row>

            <Row className="justify-content-center">
               <Col className="justify-content-md-center text-center"  xs={1} lg={1}>
                  &nbsp;
               </Col>
               <Col className="justify-content-md-center text-center"  xs={8} lg={8}>

               <Formfield />

               </Col>
               <Col className="justify-content-md-center text-center"  xs={1} lg={1}>
                  &nbsp;
               </Col>
            </Row>
       
            </Card.Body>
            </Card>
       </React.Fragment>
    );
}

export default Form;