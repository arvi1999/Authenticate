import React, { Component } from "react";
import Layout from "../../components/Layout";
import signup from "../../ethereum/Signup";
import web3 from "../../ethereum/web3";
import User from '../../ethereum/user';
import { Card, Grid, Button } from "semantic-ui-react";
//import ContributeForm from "../../components/ContributeForm";
//import { Link } from "../../routes";
import ipfs from '../../ipfs';

class AllUsers extends Component {
  static async getInitialProps(props) {
    const user = User(props.query.address);
    const summary = await user.methods.getDetails().call();
    console.log(summary);
    return {
      name: summary[0],
      age: summary[1],
      imageHash: summary[2],
      password: summary[3]
    };
  }



    render() {
      const dob = this.props.age;
      return (
        <div>
          <img src={`https://ipfs.io/ipfs/${this.props.imageHash}`} alt="Pic not available..."/>
        </div>
      );
    }
}

export default AllUsers;
