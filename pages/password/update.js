import React, { Component } from "react";
import {
  Image,
  Button,
  Form,
  Input,
  Message,
  Checkbox,
  Icon,
  Progress
} from "semantic-ui-react";
import ipfs from "../../ipfs";
import Layout from "../../components/Layout";
import signup from "../../ethereum/Signup";
import User from "../../ethereum/user";
import web3 from "../../ethereum/web3";
import { Router, Link } from "../../routes";

class UpdatePassword extends Component {
  state = {
    errorMessage: "",
    loading: false,
    email: "",
    address: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ errorMessage: "", loading: false });

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (this.state.email !== "") {
      if (reg.test(this.state.email) == true) {
        this.setState({ loading: true });
        const address = await signup.methods.getUsers(this.state.email).call();
        if (address !== "0x0000000000000000000000000000000000000000") {
          this.setState({ address: address });
          Router.pushRoute(`/users/${address}`);
        } else {
          this.setState({ errorMessage: "Email not found in our records !!" });
          this.setState({ loading: false });
        }
      } else {
        this.setState({ errorMessage: "Invalid email address !!" });
      }
    } else {
      this.setState({ errorMessage: "Please enter the Email Address !!" });
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
          <Icon name="refresh" />
          Update Password
        </h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Email ID</label>
            <Input
              onChange={event => this.setState({ email: event.target.value })}
            />
          </Form.Field>
          <Message
            floating
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
          <Button.Group>
            <Button type="submit" negative loading={this.state.loading}>
              Request Change Password
            </Button>
          </Button.Group>
        </Form>
      </Layout>
    );
  }
}

export default UpdatePassword;
