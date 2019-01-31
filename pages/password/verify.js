import React, { Component } from "react";
import {
  Image,
  Button,
  Form,
  Input,
  Message,
  Checkbox,
  Icon,
  Progress,
  Card,
  Grid,
  Segment
} from "semantic-ui-react";
import ipfs from "../../ipfs";
import Layout from "../../components/Layout";
import signup from "../../ethereum/Signup";
import User from "../../ethereum/user";
import web3 from "../../ethereum/web3";
import { Router, Linker } from "../../routes";
import Sha from "../../sha256";
import Dec from "../../decrypt";
import Enc from "../../encrypt";

class Verify extends Component {

  state = {
    password: ''
  };


  static async getInitialProps(props) {
    const OTP = (props.query.otp);
    return {
      OTP
    };
  }


  onSubmit = async event => {
    event.preventDefault();
    if(this.state.password == this.props.OTP) {
      alert("Verificaion Successful...");
      Router.pushRoute(`/login`);
    } else {
      alert("OTP mismatch, Please verify again!!");
      console.log(this.props.otP);
      Router.pushRoute(`/password/${otp}/verify`);
    }
  };

  render() {
    return (
      <Layout>
        <h1
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "20px"
          }}
        >
          <Icon name="hourglass start" />
          Email Verification
        </h1>
        <Form onSubmit = {this.onSubmit}>
          <Form.Field >
            <label>Enter your One Time Password (OTP)</label>
            <Input
              type="password"
              length="6"
              onChange={event=> this.setState({password: Sha(event.target.value)})}
            />
          </Form.Field>
          <Message
            floating
            error
            header="Oops!"
          />
          <Button.Group>
            <Button type="submit" primary >
              Verify :)
            </Button>
            <Button.Or />
            <Button type="reset" negative>
              Reset
            </Button>
          </Button.Group>
          </Form>
      </Layout>
    );
  }
}

export default Verify;
