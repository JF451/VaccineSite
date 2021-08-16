import React from 'react';
import './App.css';
import Header from './Components/Header';
import Tabs from './Components/Tabs';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
     <Tabs> 
       <div label="Home" class="home-page"> 
         <img src="https://news.usc.edu/files/2020/06/covid_vaccine_stock.jpg"></img>
       </div> 
       <div label="New Patient"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Locations"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Appointments">
       </div>
     </Tabs> 
     <Footer />
    </div>
  );
}

export default App;
