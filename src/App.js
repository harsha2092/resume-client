import React, { Component } from 'react';
import './App.css';
import BasicDetails from './Components/BasicDetails';
import ContactDetails from './Components/ContactDetails';
import SelectedProjects from "./Components/SelectedProjects";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education";

class App extends Component {
  render() {
    return (
        <div>
          <BasicDetails/>
          <ContactDetails/>
          <SelectedProjects/>
          <WorkExperience/>
          <Education/>
        </div>
    );
  }
}

export default App;
