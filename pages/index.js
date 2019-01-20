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
import web3 from "../ethereum/web3";
import { Router, Link } from "../routes";
import Sha from "../sha256";
import Dec from "../decrypt";
import Enc from "../encrypt";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    name: "",
    day: "",
    month: "",
    year: "",
    email: "",
    imageHash: "",
    password: "",
    confirmPassword: "",
    formLoading: false,
    loading: false,
    errorMessage: ""
  };

  captureFile = async event => {
    event.preventDefault();

    if (this.state.imageHash == "") {
      this.setState({ loading: true });
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
          this.setState({ imageHash: Enc(result[0].hash) });
        });
      } else {
        this.setState({ errorMessage: "Image is not selected..." });
      }
    };
  };

  onSubmit = async event => {
    event.preventDefault();
    var pass = Sha(this.state.password);
    var cpass = Sha(this.state.confirmPassword);

    this.setState({ errorMessage: "" });
    const { name, day, month, year, email, imageHash } = this.state;
    const dob = day + " " + month + " " + year;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (
      name !== "" &&
      dob !== "" &&
      email !== "" &&
      pass !== "" &&
      cpass !== ""
    ) {
      if (reg.test(email) == true) {
        if (pass == cpass) {
          if (imageHash !== "") {
            this.setState({ formLoading: true });
            try {
              const accounts = await web3.eth.getAccounts();
              const address = await signup.methods.getUsers(email).call();
              if (address == "0x0000000000000000000000000000000000000000") {
                await signup.methods
                  .addUser(name, dob, imageHash, pass, email)
                  .send({
                    from: accounts[0]
                  });
                this.setState({ loading: true });
                Router.pushRoute("/login");
              } else {
                this.setState({
                  errorMessage: "Email already exists !!",
                  loading: false,
                  formLoading: false
                });
              }
            } catch (err) {
              this.setState({ errorMessage: err.message, formLoading: false });
            }
          } else {
            this.setState({ errorMessage: "Image is still Uploading...." });
          }
        } else {
          this.setState({ errorMessage: "Password mismatch...." });
        }
      } else {
        this.setState({ errorMessage: "Invalid Email address !!" });
      }
    } else {
      this.setState({ errorMessage: "Please fill all details...." });
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
          <Icon name="signup" />
          Sign-Up
        </h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field required>
            <label>Name</label>
            <input
              placeholder="Full Name"
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>
          <Form.Field required>
            <label>Date of Birth</label>
            <Form.Group widths="equal">
              <Form.Field required>
                <Input
                  label="Day"
                  placeholder="DD"
                  labelPosition="right"
                  onChange={event => this.setState({ day: event.target.value })}
                />
              </Form.Field>
              <Form.Field required>
                <Input
                  label="Month"
                  placeholder="MM"
                  labelPosition="right"
                  onChange={event =>
                    this.setState({ month: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field required>
                <Input
                  label="Year"
                  placeholder="YYYY"
                  labelPosition="right"
                  onChange={event =>
                    this.setState({ year: event.target.value })
                  }
                />
              </Form.Field>
            </Form.Group>
          </Form.Field>
          <Form.Field required>
            <label>Email Id</label>
            <input
              type="text"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </Form.Field>
          <Form.Field required>
            <label>Image</label>
            <Input
              type="file"
              accept=".jpg, .png, .jpeg"
              onChange={this.captureFile}
              loading={this.state.loading}
            />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input
              type="password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field required>
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={event =>
                this.setState({ confirmPassword: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field required>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Message
            floating
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
          <Button.Group>
            <Button type="submit" positive loading={this.state.formLoading}>
              Sign-Up
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

export default Signup;
