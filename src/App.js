import React, { Component } from 'react';
import './App.css';
import BasicDetails from './Components/BasicDetails';
import ContactDetails from './Components/ContactDetails';
import SelectedProjects from "./Components/SelectedProjects";
import WorkExperience from "./Components/WorkExperience";
import Eductaion from "./Components/Eductaion";

class App extends Component {
  render() {
    return (
      <div>
        <BasicDetails/>
        <ContactDetails/>
        <SelectedProjects/>
          <WorkExperience/>
          <Eductaion/>
      </div>
    );
  }
}

export default App;
