import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Body component that holds other components

const Body= ()=> {
  return(
     <div id="body">
        <Header/>
        <Card
           className='section'
           img=""
        />
        <ContactContainer/>
     </div>
     )
}

// Hearder component

const Header = () => {
  return(
     <div className='header'>
       <span className='header-title'>
          Company
       </span>
       <br/>
       <span className='header-text'>
         We specialize in....
       </span>
     </div>
  );
}

// Card component

const Card = (props) => {
  return(
    <div className={props.className}>
      <div className='small-div'>
        <i className={props.className}></i>
        <img src={props.img} alt=''/>
      </div>

      <div className="big-div">
        <span className='div-tittle'>
          {prop.title}
         </span>
         <br/>
         <span>
           {props.description}
         </span>
      </div>
    </div>
    )
}
