import {Form, Input, Button, Container, Col, FormGroup, Label} from 'reactstrap'
import React from "react";
export const SignInForm = (props) => {
    return (
    <Container>
        <Form className="form">
            <Col>
                <FormGroup>
                <Label>Username</Label><Input type="text" name="username" id="username" placeholder="Enter username"/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label>Password</Label><Input type="password" name="password" id="password" placeholder="Enter password"/>
                </FormGroup>    
            </Col>
            <Button color="primary">Submit</Button>
        </Form>
    </Container>
    );
}

const validate = (values) => {
    sign
}