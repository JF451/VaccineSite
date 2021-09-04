import React, { useState , useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Tabs from './Components/Tabs';
import Footer from './Components/Footer';
import SimpleMap from './Components/SimpleMap';
import NewPatient from './Components/NewPatient';
import Contact from './Components/Contact';
import NewPatientForm from './Components/NewPatientForm';
import Login from './Components/Login';
import axios from 'axios';


function App() {

  const [buttonPopup,setButtonPopup] = useState(false);
  const [buttonPopupPatient,setButtonPopupPatient] = useState(false);
  const [buttonPopupLogin,setButtonPopupLogin] = useState(false);

  // const [currentTime,setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/').then(res => res.json()).then(data =>{
  //     setCurrentTime(data.time);
  //   })
  // }, []);

  return (
    <div className="App">
      {/* <p>The current time is {currentTime}.</p> */}
      <Header setButtonPopupLogin={setButtonPopupLogin} />
      <Contact trigger={buttonPopup} setTrigger={setButtonPopup} /> 
      <NewPatientForm trigger={buttonPopupPatient} setTrigger={setButtonPopupPatient} />
      <Login trigger={buttonPopupLogin} setTrigger={setButtonPopupLogin} />
     <Tabs> 
       <div label="Home" class="home-page"> 
         <img src="https://news.usc.edu/files/2020/06/covid_vaccine_stock.jpg"></img>
       </div> 
       
       <div label="New Patient"> 
         <NewPatient setButtonPopupPatient={setButtonPopupPatient}/>
       </div> 
       <div label="Locations"> 
         <SimpleMap />
       </div> 
       <div label="Appointments">
       </div>
     </Tabs> 
     <Footer setButtonPopup={setButtonPopup} />
    </div>
  );
}

export default App;
