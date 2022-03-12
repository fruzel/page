import {
   CssBaseline, Grid
} from '@mui/material'
import Typical from 'react-typical';
import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home.js'
import Works from './components/Works.js'
import Contact from './components/Contact.js'



const TypingAnimation = React.memo(() => {
  return <Typical
    loop={Infinity}
    wrapper="b"
    steps={
      [
        ' 你好!', 1500,
        'Hola!', 1500, 'Bonjour!', 1500,
        'ZdravstvuyteNǐ !', 1500, 'Olá!', 1500,
        'Anyoung haseyo!', 1500, 'Asalaam alaikum!', 1500,
        'Yassas!', 1500, 'Konnichiwa!', 1500

      ]
    }
  />
}, (props, prevProp) => true);

const bounceAnimation = keyframes`${bounceInUp}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

function App() {

  const [showHome, setHome] = useState(true);
  const [worksState, setWorksState] = useState(
    {
      online: false,
      stream: false,
      tinews: false,
      starlink: false
    }
  )
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    if (offset > 50) {
      setHome(true);
    }
    if (offset > 1400) {
      setWorksState(prevState => {
        return { ...prevState, online: true }
      })
    }
    if (offset > 2200) {
      setWorksState(prevState => {
        return { ...prevState, stream: true }
      })
    }
    if (offset > 3000) {
      setWorksState(prevState => {
        return { ...prevState, tinews: true }
      })
    }
    if (offset > 3800) {
      setWorksState(prevState => {
        return { ...prevState, starlink: true }
      })
    }
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);

  }, [offset]);




  function jump(position) {
    console.log(position);
    var elmnt = document.getElementById(position);
    elmnt.scrollIntoView();
  }
  return (
    <div>
      <CssBaseline />
      <ul className='nav'>
        <li >
          <button onClick={() => jump('home')} className='navItem'> Home </button>
        </li>
        <li >
          <button onClick={() => jump('works')} className='navItem'> Works </button>
        </li>
        <li >
          <button onClick={() => jump('contact')} className='navItem'> Contact </button>
        </li>
      </ul>
      <Grid container className='page' >
        <Grid item xs={0} md={2} >
          <div className='header'>
            <h1 className='headerText'>Jiade Dai</h1>
            <p className='helloText'>
                Hello! {' '}
              <TypingAnimation />
            </p>

          </div>

        </Grid>
        <Grid item xs={12} md={10}>
          <div className='content'>
            <Home showHome={showHome} BouncyDiv={BouncyDiv} />
            <Works worksState={worksState} BouncyDiv={BouncyDiv} />
            <Contact BouncyDiv={BouncyDiv} />
          </div>{/* end of contents */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
