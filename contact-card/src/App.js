import React from 'react';
import './App.css';
import ContactCard from './ContactCard.jsx'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ContactCard
          name="Person Man"
          pNum="1342536235"
          email="man@gmail.com"
        />

        <ContactCard
          name="Person Woman"
          pNum="85564354675"
          email="woman@gmail.com"
        />

        <ContactCard
          name="Person Other"
          email="other@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;
