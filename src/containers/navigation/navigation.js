import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <ul className="navigationlist">
      <li><NavLink to="/Easyperanto-App-React/" exact activeClassName="activeLink">Home</NavLink></li>
      <li><NavLink to="/vocabulary" activeClassName="activeLink">Vocabulary</NavLink></li>
      <li><NavLink to="/notes" activeClassName="activeLink">Notes</NavLink></li>
      <li><NavLink to="/lessons" activeClassName="activeLink">Lessons</NavLink></li>
    </ul>
  );
};