import React, { Component } from 'react';
import emailjs from 'emailjs-com';

import Layout from '../components/layout';
import '../css/contact.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
                fname:'',
                lname:'',
                email:'',
                detail:'',
                contact_reason:''
            }

        this.handleOnChangeFName = this.handleOnChangeFName.bind(this);
        this.handleOnChangeLName = this.handleOnChangeLName.bind(this);
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
        this.handleOnChangeDetail = this.handleOnChangeDetail.bind(this);
        this.onSeclectReason = this.onSeclectReason.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        
    }
    
    handleOnChangeFName (event) {
        this.setState({fname: event.target.value});
        console.log("fghf");
    }

    handleOnChangeLName (event) {
        this.setState({lname: event.target.value});
        console.log(event.target.value)
    }

    handleOnChangeEmail (event) {
        this.setState({email: event.target.value});
        console.log(event.target.value)
    }

    handleOnChangeDetail (event) {
        this.setState({detail: event.target.value});
        console.log(event.target.value)
    }

    onSeclectReason (event) {
        this.setState({contact_reason: event.target.value});
        console.log(event.target.value);
    }

    sendInfo(e) {
        e.preventDefault();

        const fullName = this.state.fname + " " + this.state.lname;
        
        var contactInfo = {
            from_name:fullName,
            email:this.state.email,
            detail:this.state.detail,
            contact_reason:this.state.contact_reason
        };
        

        emailjs.send('default_service','newdataset', contactInfo,'user_6db19Ijs304PgTVDy1b7S')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
            console.log('FAILED...', err);
        });
    }
    
    render = () => {
    

        return(
            <Layout>
                <div id = "main-contact-container">
                    <p>Currently, I am working as a freelance website designer and I am taking clients. Pleace contact me if you would like a quote or if you would like to collaborate on a project.</p><br />

                    <form id = "contact-form" onSubmit = {this.sendInfo}>
                        <div className = "form-sides" style = {{marginRight:"4%"}}>
                            
                                <label>First Name</label><br/>
                                <input type="text" placeholder="Jane" onChange = {this.handleOnChangeFName} style = {{width:'100%'}}/>
                            
                        </div>

                        <div className = "form-sides">
                            
                                <label>Last Name</label><br/>
                                <input type="text" placeholder="Doe" onChange = {this.handleOnChangeLName} style = {{width:'100%'}}/>
                            
                        </div>

                        <br/><br/>
                        <div className = "form-sides" style = {{marginRight:"4%"}}>
                            <label>Email address</label><br />
                            <input type="email" placeholder="name@example.com" onChange = {this.handleOnChangeEmail} style = {{width:'100%'}}/>
                        </div>

                        <div className = "form-sides">
                        <label>Reason for Contact</label><br />
                            <select onChange = {this.onSeclectReason} style = {{width:'100%'}}>
                                <option value="customsite">Custom Website</option>
                                <option value="writing">Writing Project</option>
                                <option selected value="programming">Programming Project</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <br/><br/>
                        <label>Explain in a few brief sentences what you would like to talk about.</label><br/>
                        <textarea onChange = {this.handleOnChangeDetail} style = {{width:'100%', minHeight:'20vh'}}></textarea>
                        

                        <button type = "submit" id = "contact-submit-button">Submit</button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default Contact;