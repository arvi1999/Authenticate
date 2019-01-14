import React, { Component } from "react";
import signup from "../ethereum/Signup";
//import User from "../ethereum/User";
import {
  Card,
  Button,
  Form,
  Checkbox,
  Input,
  Message,
  Icon
} from "semantic-ui-react";
import Layout from "../components/Layout";
import web3 from "../ethereum/web3";
import { Link, Router } from "../routes";
import ipfs from "../ipfs";
import Header from '../components/Header';

class SignupIndex extends Component {
  constructor(props) {
    super(props);
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    name: "",
    age: 0,
    imageHash: "",
    password: "",
    buffer: null,
    loading: false,
    errorMessage: ""
  };

  static async getInitialProps() {
    const users = await signup.methods.getUsers().call();
    return { users };
  }

  renderUsers() {
    const items = this.props.users.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/users/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  captureFile = async event => {
    //console.log("capturing file");
    event.preventDefault();

    if (this.state.imageHash == "") {
      this.setState({ errorMessage: "Your Image is uploading..." });
    }

    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
      if (this.state.buffer !== null) {
        ipfs.files.add(this.state.buffer, (error, result) => {
          if (error) {
            console.error(error);
            return;
          }
          this.setState({ imageHash: result[0].hash });
          console.log(result[0].hash);
        });
      } else {
        console.log("Image is not selected!!");
      }
    };

    if (this.state.imageHash !== "") {
      this.setState({ errorMessage: "Uploading done..." });
    }
  };

  onSubmit = async event => {
    event.preventDefault();

     var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    console.log(encrypted);

    //const user = User(this.props.address);
    if (this.state.imageHash !== "") {
      const { name, age, imageHash, password } = this.state;
      try {
        const accounts = await web3.eth.getAccounts();
        await signup.methods.addUser(name, age, imageHash, password).send({
          from: accounts[0]
        });
        //Router.pushRoute('/');
      } catch (err) {
        this.setState({errorMessage: err.message});
      }
    }
  };

  render() {
    return (
      <Layout>
      <Header />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
        <h3>All Users</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input
              placeholder="Age"
              value={this.state.age}
              onChange={event => this.setState({ age: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <Input
              type="file"
              onChange={this.captureFile}
              loading={this.state.loading}
              accept=".jpg, .png"
            />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input
              placeholder="Last Name"
              type="password"
              value={this.state.password}
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
          <Button type="submit">Submit</Button>
        </Form>
        {this.renderUsers()}
      </Layout>
    );
  }
}

export default SignupIndex;
