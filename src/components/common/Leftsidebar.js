
import React from "react";
import { Link } from "react-router-dom";
function Leftsidebar() {
  return (

    <React.Fragment>
      <div className="leftsidemenu">
      <h1 className="mt-3">ERP</h1>
      <hr/>
      <ul className="nav flex-column">

        <li className="nav-item">
          <Link to="/systemprofile" className="nav-link active">System Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/animallicense" className="nav-link">Animal License</Link>
        </li>
        <li className="nav-item">
          <Link to="/infraction" className="nav-link">Infraction</Link>
        </li>

      </ul>
      </div>
    </React.Fragment>
  );
}

export default Leftsidebar;

