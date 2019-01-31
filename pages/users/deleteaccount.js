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
import Sha from "../../sha256";
import Dec from "../../decrypt";
import Enc from "../../encrypt";


class DeleteAccount extends Component {
  state = {
    password: '',
    confirmPassword: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const address = (props.query.address);
    const user = User(address);
    const email = Dec(props.query.email);
    const password = await user.methods.getPassword().call();
    return {
      email, password
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.props;
    // const { pass, cpass } = this.state;

    const pass = Sha(this.state.password);
    const cpass = Sha(this.state.confirmPassword);

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
