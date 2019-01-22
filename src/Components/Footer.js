// Component that contains copyright, contact us form
import React, { Component } from 'react';
import './Styles/footer.css';
import axios from 'axios'; // Used for network calls
import croutong from './Images/Croutongrey.png';
import Banner from './Banner'; // Banner Component being imported


export default class Footer extends Component{
  constructor(props){
    super(props);

    //Initializing state variables
    this.state = {
      name: "",
      email: "",
      message: "",
      statusText: "",
      bannerStatus: 0,
      showBanner: false,
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.submit = this.submit.bind(this);
  }

// handleInputs when changing state on change
  handleInputs(e){
    if(e.currentTarget.name === "name"){
    this.setState({name:e.currentTarget.value});
    }
    if(e.currentTarget.name === "email"){
    this.setState({email:e.currentTarget.value});
    }
    if(e.currentTarget.name === "message"){
    this.setState({message:e.currentTarget.value});
    }
  }

// Function called when form submission button is clicked. To Post the data to server using Post request.
  submit(){
    if(this.state.name && this.state.email && this.state.message){
      const url = `https://ihs1nx5rt6.execute-api.us-east-1.amazonaws.com/crouton`;
      const body= JSON.stringify({
        "appId": "mr-6403074608",
        "name": this.state.name,
        "email": this.state.email,
        "message": this.state.message
      });
    axios.post(url,body,{
      crossDomain: true,
      'Access-Control-Allow-Origin': '*',
      headers: {
        'Content-Type': 'application/json', 
      }}).then(response => this.setState({name:"", email:"", message:"", statusText: "Submitted Successfully", showBanner: true, bannerStatus: 1}))
           .catch(error => this.setState({statusText: "Error Occured while submitting", showBanner: true, bannerStatus: 3}));
    } else {
      this.setState({statusText: "Please Enter all fields", showBanner: true, bannerStatus: 0});
      }
    }


  render(){
    return(
      <div className="footer"> {/* Footer of the Website */}

        {/* Left half of the footer */}
        <div className="footerLeft">
          <h1 className="footerLeftHeading">Contact Us -</h1>
          <h1 className="footerLeftText"> We love to work.</h1>
        </div>

        {/* Right half of the footer */}
        <div className="footerRight">
          <input className="footerRightInputName" name="name" type="text" placeholder="your name" value={this.state.name} onChange={this.handleInputs} />
          <input className="footerRightInputEmail" name="email" type="email" placeholder="your email" value={this.state.email} onChange={this.handleInputs} /><br/>
          <input className="footerRightInputMessage" name="message" type="text" placeholder="your message" value={this.state.message} onChange={this.handleInputs} /> <br/><br/>
          <button onClick={this.submit} className="Button"> GET IN TOUCH <span className="ButtonArrow"> &rarr;</span> </button>
          {/* Banner to display form submission responses */}
          <Banner
            status={this.state.bannerStatus}
            closeAfter={8}
            showBanner={this.state.showBanner}
            className={`footerBanner`}
            closeButton={false}
            callBack={(status) => this.setState({showBanner: status})}>
              {this.state.statusText}
          </Banner>
        </div>

        <div>
          {/* Bottom Part of the footer with copyrights */}
          <div className="footerBottom">
          <img className="footerBottomImg" src={croutong} alt="Crouton" width="30" height="8"/> &nbsp;
          <p className="footerBottomCopyright"> &copy;2017 Crouton All Rights Reserved  </p>
          </div>
        </div>

      </div>
    );
  }
}
