import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Tabs from './Components/Tabs';
import Footer from './Components/Footer';
import SimpleMap from './Components/SimpleMap';
import NewPatient from './Components/NewPatient';
import Contact from './Components/Contact';


function App() {

  const [buttonPopup,setButtonPopup] = useState(false);

  return (
    <div className="App">
      <Header />
      <Contact trigger={buttonPopup} setTrigger={setButtonPopup} /> 
     <Tabs> 
       <div label="Home" class="home-page"> 
         <img src="https://news.usc.edu/files/2020/06/covid_vaccine_stock.jpg"></img>
       </div> 
       
       <div label="New Patient"> 
         <NewPatient />
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
