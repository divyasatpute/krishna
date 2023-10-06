import React, { Component, useRef, useState, useEffect } from "react";
import "./Footer.scss";
import emailjs, { send } from "@emailjs/browser";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flipCard: false,
      fields: {},
      errors: {},
      names: {},
      mobilesnos: {},
    };
    this.myRef = React.createRef();
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let names = {};
    let mobilesnos = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      names["name"] = "*Please enter your username.";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        names["name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["mobileno"]) {
      formIsValid = false;
      mobilesnos["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        mobilesnos["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    this.setState({ names: names });
    this.setState({ mobilesnos: mobilesnos });

    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  resemail = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
      e.preventDefault();

      emailjs
        .sendForm(
          "service_ct0211g",
          "template_5wcv0n5",
          this.myRef.current,
          "m_g26kaa1BfxbJ9wB"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Fill Information Properly");
    }
  };

  toggleFlipCard = (e) => {
    this.setState((prevState) => ({
      flipCard: !prevState.flipCard,
    }));
    // contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
      e.preventDefault();

      emailjs
        .sendForm(
          "service_ct0211g",
          "template_5wcv0n5",
          this.myRef.current,
          "m_g26kaa1BfxbJ9wB"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Fill Information Properly");
    }
    // }
  };

  sendEmail = (e) => {};

  responsiveSendEmail = (e) => {};

  render() {
    const { flipCard } = this.state;

    return (
      <>
        <section className="layout">
          <div>1</div>
          <div>
            <script id="template" />
            <div className="flip-card" onClick={this.toggleFlipCard}>
              {flipCard ? "New Mail" : "Let's Talk"}
            </div>
            <div className="contact-wrapper">
              <div className={`envelope ${flipCard ? "active" : ""}`}>
                <div className="back paper"></div>
                <div className="content">
                  <div className="form-wrapper">
                    <form
                      name="contactform"
                      className="contactform"
                      ref={this.myRef}
                      onClick={this.sendEmail}
                    >
                      <div className="top-wrapper">
                        <div className="input">
                          <label>Name</label>
                          <input
                            type="text"
                            name="user_name"
                            required="required"
                            refs="name"
                            onChange={this.handleChange.bind(this, "name")}
                            value={this.state.fields["name"]}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.names["name"]}
                          </span>
                        </div>
                        <div className="input">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="user_phone"
                            required="required"
                            refs="mobileno"
                            onChange={this.handleChange.bind(this, "mobileno")}
                            value={this.state.fields["mobileno"]}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.mobilesnos["mobileno"]}
                          </span>
                        </div>
                        <div className="input">
                          <label>Email</label>
                          <input
                            type="email"
                            name="user_email"
                            required="required"
                            refs="email"
                            onChange={this.handleChange.bind(this, "email")}
                            value={this.state.fields["email"]}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["email"]}
                          </span>
                        </div>
                      </div>
                      <div className="bottom-wrapper">
                        <div className="input">
                          <label>Subject</label>
                          <input type="text" name="_subject" />
                        </div>
                        <div className="input">
                          <label>Message</label>
                          <textarea rows="5" name="message" required></textarea>
                        </div>
                        <div className="submit">
                          <div>
                            <button
                              type="submit"
                              className="newbuttonseperate"
                              // value={send}
                              onClick={this.resemail}
                            >
                              Send Mail
                            </button>
                            <button
                              type="submit"
                              // value={send}
                              className="submit-card"
                              onClick={this.toggleFlipCard}
                            >
                              Send Mail
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="front paper"></div>
              </div>
            </div>
            <script />
          </div>
        </section>
      </>
    );
  }
}

export default ContactForm;

// &:after {
//   position: absolute;
//   content: "";
//   display: block;
//   opacity: 0;
//   // this whole
//   background: white;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -10;
// }
