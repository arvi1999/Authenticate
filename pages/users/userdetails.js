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

class UserDetails extends Component {
  static async getInitialProps(props) {
    const user = User(props.query.address);
    const summary = await user.methods.getDetails().call();
    console.log(summary);
    const dob = summary[1].replace(/ /g, "-");
    return {
      address: props.query.address,
      name: summary[0],
      dob: dob,
      email: summary[2],
      imageHash: summary[3]
    };
  }

  render() {
    const { address, name, dob, email, imageHash } = this.props;
    return (
      <Layout>
        <h1
          style={{
            textAlign: "center",
            marginTop: "34px",
            marginBottom: "50px"
          }}
        >
          <Icon name="user secret" />
          User Profile
        </h1>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Card color="teal">
                <Image src={`https://ipfs.io/ipfs/${imageHash}`} alt="no pic" />
              </Card>
            </Grid.Column>
            <Grid.Column width={10} style={{ marginTop: "20px" }}>
              <Segment color="black">Name: {name}</Segment>
              <Segment color="black">Date of Birth: {dob}</Segment>
              <Segment color="black">Email-ID: {email}</Segment>
              <Segment color="black">ImageHash: {imageHash}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default UserDetails;
