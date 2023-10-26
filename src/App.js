import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";

import Systemprofile from "./components/Systemprofile";
import Animallicense from "./components/Animallicense";
import Infraction from "./components/Infraction";
import Leftsidebar from "./components/common/Leftsidebar";
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <div className='row'>
            <div className="col-md-3 bg-secondary leftside">
              <Leftsidebar/>
            </div>
            <div className="col-md-9 bg-gray">
            <Routes>  
             <Route path="/" element={<Home/>} /> 
               <Route path="/systemprofile" element={<Systemprofile/>} />
               <Route path="/animallicense" element={<Animallicense/>} />
               <Route path="/infraction" element={<Infraction/>} />
               <Route path="/adduser" element={<Adduser/>} />
               <Route path="/editUser/:id" element={<Edituser/>} />
                
              </Routes>
            </div>

          </div>

          </div>
      
    </div>
  );
}

export default App;
