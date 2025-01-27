import React from 'react';

const Dropdown = () => {
  return (
    <div className="dropdown-content">
      <h3 className="dropdown-title">*VirtualShowdown* : E-sports Events</h3>
      <ul className="event-list">
        <li>Inertia: Technical Events</li>
        <li>Swoosh: Non-Technical Events</li>
        <li>Kala Kriti: Workshops</li>
        <li>Equilibrium: Talk Show</li>
        <li>Upshot: Fun Events</li>
        <li>Zingaat: Cultural Night</li>
      </ul>
      <hr />
      <h4 className="tagline"># Expanding the unseen Realms!</h4>
      <p className="dates">15 | 16 | 17 MARCH</p>
      <a href="/register" className="register-btn">Register Now</a>
    </div>
  );
};

export default Dropdown;
