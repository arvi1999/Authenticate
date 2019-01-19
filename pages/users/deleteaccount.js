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
import {Router, Linker} from "../../routes";


class DeleteAccount extends Component {
  state = {
    password: '',
    confirmPassword: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const user = User(props.query.address);
    const email =props.query.email;
    // const user = User("0xacbacA6D7D258f21B069eF94cBE89abC4b9941bB");
    // const email ="arvindkumarsjpr@gmail.com";
    const password = await user.methods.getPassword().call();
    console.log("password is : ", password);
    return {
      email, password
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.props;
    // const { pass, cpass } = this.state;

    const value1 = this.state.password;
    const value2 = this.state.confirmPassword;
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
    var cpass = "";
    for (var i = 0; i < value1.length; ++i) {
      pass += String.fromCharCode(key[i % key.length] ^ value1.charCodeAt(i));
    }
    for (var i = 0; i < value2.length; ++i) {
      cpass += String.fromCharCode(key[i % key.length] ^ value2.charCodeAt(i));
    }

    this.setState({loading: true, errorMessage: ''});

    if(pass !== ''  &&  cpass !== '') {
      if(pass == cpass) {
        if(pass == password) {
          const accounts = await web3.eth.getAccounts();

          await signup.methods.deletePermanant(email).send(
            {
              from: accounts[0]
            }
          );
          alert("Your account has been deleted successfully !!");
          Router.pushRoute(`/`);
        } else {
          this.setState({errorMessage: "Wrong Password !!", loading: false});
        }
      } else {
        this.setState({errorMessage: "Password doesn't match !!", loading: false});
      }
    } else {
      this.setState({errorMessage: " Please enter all details !!", loading: false});
    }
  };

  render() {
    return(
      <Layout>
        <h1
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "20px"
          }}
        >
          <Icon name="user delete" />
          Delete Account
        </h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field >
            <label>Email ID</label>
            <Input
              value={this.props.email} disabled
            />
          </Form.Field>
          <Form.Field>
            <label>Enter Password</label>
            <Input
            type="password"
              onChange={event => this.setState({ password: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Input
            type="password"
              onChange={event => this.setState({ confirmPassword: event.target.value })}
            />
          </Form.Field>
          <Message
            floating
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
          <Button.Group>
            <Button type="submit" primary loading={this.state.loading}>
              Delete My Account :/)
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

export default DeleteAccount;
