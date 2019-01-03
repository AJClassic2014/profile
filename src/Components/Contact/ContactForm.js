import React from "react";
import styles from "./ContactForm.module.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null,
    };
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.App}>
        
          <form action="/action_page.php">
          <div className={styles.container}>
            <div><label>First Name</label></div>
            <div><input type="text" id="fname" name="firstname" placeholder="Your name.." 
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
            /></div>
            <div><label>Last Name</label></div>
            <div><input type="text" id="lname" name="lastname" placeholder="Your last name.." 
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}/></div>


            <div><label>Email</label></div>
            <div><input type="email" id="email" name="email" placeholder="Your email" 
             value={this.state.email}
             onChange={e => this.setState({ email: e.target.value })}/></div>


            <div><label>Subject</label></div>
            <div><textarea id="subject" name="subject" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}></textarea></div>
            </div>
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
            
          </form>
        
      </div>
    );
  }
}

export default ContactForm;