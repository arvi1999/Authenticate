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

class Verify extends Component {
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
        <Form >
          <Form.Field >
            <label>Enter your One Time Password (OTP)</label>
            <Input
              type="password"
              length="6"
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
