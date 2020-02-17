import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  state = {
    newUser: {
      username: "",
      email: "",
      password: "",
      password2: ""
    },
    errors: [],
    success: false
  };

  handleChange = e => {
    console.log({ [e.target.name]: e.target.value });

    // THIS WORKS...
    const userData = this.state.newUser;
    userData[e.target.name] = e.target.value;
    this.setState(userData);

    // THIS NO LONGER WORKS...
    // this.setState(prevState => ({
    //   newUser: { ...prevState.newUser, [e.target.name]: e.target.value }
    // }));
  };

  render() {
    console.log(this.state.newUser);
    return (
      <Fragment>
        <h1 className="large text-golden">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        {/* {errors} */}
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={this.state.newUser.name}
              onChange={this.handleChange}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={this.state.newUser.email}
              onChange={this.handleChange}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.newUser.password}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={this.state.newUser.password2}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <input type="submit" className="btn btn-standard" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Fragment>
    );
  }
}

export default Register;
