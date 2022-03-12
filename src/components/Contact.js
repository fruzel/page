import React from 'react'
import {
   TextField,TextareaAutosize,
    Paper,Button
} from '@mui/material'
import emailjs from '@emailjs/browser';
import './Contact.css'
import SendIcon from '@mui/icons-material/Send';


function Contact(props) {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('profile_service_id', 'template_oq79yup', e.target, 'user_Hp1spPKws00F0RWVLpvzo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert("Received! I'll reply back as soon as possible!");

    };

    return (
        <div>
        <Paper className='container' elevation='16' id='contact'>

            <div className='greeting'>
                <h1>Glad you're here</h1>
                <p> All questions are welcome </p>
            </div>
            <form onSubmit={sendEmail} className='contactForm'>
                <div className='inputField'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        name='name'
                    />
                </div>

                <div className='inputField'>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        name='email'
                    />
                </div>

                <div className='messageBox'>
                    <div>
                        <label for='message'>Message</label>
                    </div>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={30}
                        placeholder="Feel free to contact me"
                        style={{ width: 250, height:100 }}
                        name='message'
                    />
                </div>
      
                <Button endIcon = {<SendIcon/>} type='submit' variant="outlined">Submit</Button>
                
            </form>
        </Paper>
        </div>
    )
}

export default Contact