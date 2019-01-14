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
import ipfs from "../ipfs";
import Layout from "../components/Layout";
import signup from "../ethereum/Signup";
import User from "../ethereum/user";
import web3 from "../ethereum/web3";
import { Router, Link } from "../routes";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    email: "",
    password: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ errorMessage: "" });

    const value = this.state.password;
    var key = [
      0,
      7,
      2,
      8,
      54,
      5,
      61,
      47,
      1,
      9,
      0,
      112,
      1762,
      173,
      14,
      1455,
      12786,
      157,
      18,
      2,
      20,
      943021,
      2432,
      3223,
      274,
      2525,
      2246,
      23457,
      2528,
      2259,
      3430,
      3641
    ];
    var pass = "";
    for (var i = 0; i < value.length; ++i) {
      pass += String.fromCharCode(key[i % key.length] ^ value.charCodeAt(i));
    }

    const { email, password } = this.state;

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email !== "" && pass !== "") {
      if (reg.test(this.state.email) == true) {
        this.setState({ loading: true });
        const accounts = await new web3.eth.getAccounts();
        const address = await signup.methods.getUsers(this.state.email).call();
        if (address !== "0x0000000000000000000000000000000000000000") {
          const user = User(address);
          const dob = await user.methods.getDetails().call();
          const summary = await user.methods.getPassword().call();
          if (summary == pass) {
            alert("You logged in successfully");
            Router.pushRoute(`/users/${address}`);
          } else {
            this.setState({ errorMessage: "Wrong Password", loading: false });
          }
        } else {
          this.setState({
            errorMessage: "This Email is not registered !!",
            loading: false
          });
        }
      } else {
        this.setState({ errorMessage: "Invalid Email address !!" });
      }
    } else {
      this.setState({ errorMessage: "Please fill all details :)" });
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
          <Icon name="sign-in" />
          Log-In
        </h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Email ID</label>
            <input
              onChange={event => this.setState({ email: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </Form.Field>
          <Message
            floating
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
          <Button.Group>
            <Button type="submit" positive loading={this.state.loading}>
              Log-In
            </Button>
            <Button.Or />
            <Button type="reset" negative>
              Reset
            </Button>
          </Button.Group>
        </Form>
        <h3>
          <Link route={'/password/update'}>
            <a>Forget Password</a>
          </Link>
        </h3>
      </Layout>
    );
  }
}

export default Login;
