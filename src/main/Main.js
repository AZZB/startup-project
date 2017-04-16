import React from 'react';
import NavBar from '../navbar';
import Routes from '../routes';
import Drawer from '../drawer';
import Message from '../message/Message';
//import css from '../assets/styles/main.scss';


const Main = (props) => {
  const { currentUser } = props;
  return (
    <div>
      <NavBar />
      <Drawer />
      <Message />
      <Routes  currentUser={currentUser}/>
    </div>
  );
}


export default Main;
