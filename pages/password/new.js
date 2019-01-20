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
import Sha from "../../sha256";
import Dec from "../../decrypt";
import Enc from "../../encrypt";

class UpdatedPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    loading: false,
    email: '',
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const user = User(props.query.address);
    const summary = await user.methods.getDetails().call();
    return {
      name: summary[0],
      dob: summary[1],
      email: Dec(props.query.email),
      imageHash: summary[3]
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const {email, name, dob, imageHash} = this.props;

    const pass = Sha(this.state.password);
    const cpass = Sha(this.state.confirmPassword);

    this.setState({ errorMessage: "" });

    if(pass !== '' && cpass !== '') {
      if(cpass == pass) {

        this.setState({loading: true, errorMessage: ""});

        const accounts = await new web3.eth.getAccounts();

        await signup.methods.deleteUser(name, dob, imageHash, pass, email).send(
          {from: accounts[0]}
        );

        // const new_user = await signup.methods
        // .addUser(name, dob, imageHash, pass, email)
        // .send({from: accounts[0]});

        this.setState({loading: false, errorMessage: ""});

        alert("Password changed successfully !!");

        Router.pushRoute('/login');
      } else {
        this.setState({errorMessage: "Password doesn't match !!"});
      }
    } else {
      this.setState({errorMessage: "Please enter the New Password & confirm it !!"});
    }

  };

  render() {
    const {email} = this.props;
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
          <Form.Field >
            <label>Email ID</label>
            <Input
              value={email} disabled
            />
          </Form.Field>
          <Form.Field>
            <label>New Password</label>
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
              Change Password
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

export default UpdatedPassword;
