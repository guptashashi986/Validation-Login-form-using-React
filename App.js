import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username:"",// nya-1
      emailAddress: "",
      phoneNo:"",// nya-2
      Aadhar:"",// nya-3
      panNo:"",//nya-6
      country:"",// nya-4
      city:"",//nya-5
      password: "",

      passwordConfirmation: "",
      firstNameError: "",
      usernameError:"",//nya-1.0
      emailAddressError: "",
      phoneNoError:"",// nya-2.0
      AadharError:"",// nya-3.0
      panNoError:"",//nya-6.0
      countryError:"",// nya-4.0
      cityError:"",//nya-5.0

      passwordError: "",
      passwordConfirmationError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateUserName=this.validateUserName.bind(this);//nya-1
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePhoneNo=this.validatePhoneNo.bind(this);// nya-2
    this.validateAadharNo=this.validateAadharNo.bind(this);//nya-3
    this.validatePanCardNo=this.validatePanCardNo.bind(this);// nya-6
    this.validateCountry=this.validateCountry.bind(this);//nya-4
    this.validateCityName=this.validateCityName.bind(this);//nya-5

    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "phoneNo",
      "Aadhar",
      "panNo",
      "country",
      "city",
      "password",
      "passwordConfirmation"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();

    else if (name === "username") isValid = this.validateUserName();//

    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "phoneNo") isValid = this.validatePhoneNo();//
    else if (name === "Aadhar") isValid = this.validateAadharNo();//
    else if (name === "panNo") isValid = this.validatePanCardNo();//
    else if (name === "country") isValid = this.validateCountry();//
    else if (name === "city") isValid = this.validateCityName();//

    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  // username.................
  validateUserName() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "user name is required";

    this.setState({
      usernameError
    });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  // phone no--
  validatePhoneNo() {
    let phoneNoError = "";
    const value = this.state.phoneNo;
    if (value.trim() === "") phoneNoError = "phone number is required";

    this.setState({
      phoneNoError
    });
    return phoneNoError === "";
  }

  //Aadhar
  // phone no--
  validateAadharNo() {
    let AadharError = "";
    const value = this.state.Aadhar;
    if (value.trim() === "") AadharError= "Aadhar number is required";

    this.setState({
      AadharError
    });
    return AadharError === "";
  }

  //pan card
  
  validatePanCardNo() {
    let panNoError = "";
    const value = this.state.panNoError;
    if (value.trim() === "") panNoError = "pan card number is required";

    this.setState({
      panNoError
    });
    return panNoError === "";
  }

  // country
  // phone no--
  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Counrty name is required";

    this.setState({
      countryError
    });
    return countryError === "";
  }

// city
// phone no--
validateCityName() {
  let cityError = "";
  const value = this.state.city;
  if (value.trim() === "") cityError = "City name is required";

  this.setState({
    cityError
  });
  return cityError === "";
}


  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError
    });
    return passwordConfirmationError === "";
  }

  render() {
    return (
      <div className="main" >
        <h3>Login Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>

            <div>User Name: {this.state.username}</div>

            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone no: {this.state.phoneNo}</div>
            <div>Aadhar no: {this.state.Aadhar}</div>
            <div>Pan card no: {this.state.panNo}</div>
            <div>Country Name: {this.state.country}</div>
            <div>City Name: {this.state.city}</div>

          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}

            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.usernameError && (
              <div className="errorMsg">{this.state.usernameError}</div>
            )}

            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}

            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNo"
              value={this.state.phoneNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.phoneNoError && (
              <div className="errorMsg">{this.state.phoneNoError}</div>
            )}

            <input
              type="text"
              placeholder="Aadhar Number"
              name="Aadhar"
              value={this.state.Aadhar}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.AadharError && (
              <div className="errorMsg">{this.state.AadharError}</div>
            )}

            <input
              type="text"
              placeholder="Pan Card Number"
              name="panNo"
              value={this.state.panNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.panNoError && (
              <div className="errorMsg">{this.state.panNoError}</div>
            )}

            <input
              type="text"
              placeholder="Country Name"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.countryError && (
              <div className="errorMsg">{this.state.countryError}</div>
            )}

<input
              type="text"
              placeholder="City Name"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.cityError && (
              <div className="errorMsg">{this.state.cityError}</div>
            )}

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>
            )}
            <button style={{backgroundColor:"lightblue"}}>submit</button>
          </form>
          </div>
        )}
      </div>
    );
  }
}
export default App;