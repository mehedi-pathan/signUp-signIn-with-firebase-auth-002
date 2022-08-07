import SignUpSignIn from './components/signUp_signIn/SignUpSignIn';
import { useEffect } from 'react';
import './App.css';

// import animte scrolling (AOS)
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  //start aos initialization 
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delayl: 400,
    })
  }, [])
  return (
    <SignUpSignIn />
  );
}

export default App;
