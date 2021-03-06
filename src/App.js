import React from "react";
import './App.css';
import './index.js';


export default function App() {
  return (
     <div id="body">
        <Header/>
        <Card
           className='section'
           img="./about.png"
           title='About Us'
           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan
                        tortor posuere. Sodales ut eu sem integer. Commodo quis imperdiet massa tincidunt nunc.
                        Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.'
        />

        <Card
           className='section'
           img="./values.png"
           title='Our Values'
           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan
                        tortor posuere. Sodales ut eu sem integer. Commodo quis imperdiet massa tincidunt nunc.
                        Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.'
        />
        <Card
           className='section'
           img="./mission.png"
           title='Our Mission'
           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan
                        tortor posuere. Sodales ut eu sem integer. Commodo quis imperdiet massa tincidunt nunc.
                        Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.'
        />

        <ContactContainer/>
     </div>
     );
   }


const Header = () => {
  return(
     <div className='header'>
       <span className='header-title'>
          COMPANY
       </span>
       <br/>
       <span className='header-text'>
         Lorem ipsum dolor sit amet
       </span>
     </div>
  );
}



const Card = (props) => {
  return(
    <div className={props.className}>
      <div className='small-div'>
        <i className={props.className}></i>
        <img src={props.img} alt=''className="card-img"/>
      </div>

      <div className="big-div">
        <span className='div-title'>
          {props.title}
         </span>
         <br/>
         <span>
           {props.description}
         </span>
      </div>
    </div>
    )
}


const ContactContainer = () => {
  return (
    <div className="contact-div">
      <div className='contact-title'>
        Contact us
      </div>
      <div className="contact-info-section">
      <div className="contact-info">
        <span>Contact us and we will get back to you within 24hrs.</span>
        <span>Brooklyn, NY</span>
        <span>
          123-456-7890
        </span>
        <span>company@gmail.com</span>
      </div>
      <div className='contact-input'>
        <div className="contact-form">
          <input type="text" placeholder="email address" className="input-field"/>
          <textarea name="text" id="text-area" cols="30" rows="10" placeholder="comment"></textarea>
          <button className="contact-btn">Send</button>
        </div>
       </div>
      </div>
    </div>

    )
}



