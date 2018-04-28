import React, { Component } from 'react';
import axios from 'axios';
import { Row, Panel, Col } from "react-bootstrap";

export default class SelectedProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjects: [],
      hobbies: '',
      fetching: true
    }
  }

  componentDidMount() {
    this.fetchContactDetails();
  }

  fetchContactDetails = () => {
    axios.get(`${process.env.SERVER_URL}/resume/projects`).then((response) => {
      this.setState({
        selectedProjects: response.data.projects,
        hobbies: response.data.hobbies,
        fetching: false
      });
    });
  }

  renderProjectColumns = (projects) =>{
    return projects.map(project => <Col xs={6}>
      <Row xs={2} className='project-name'>
        {project.name}
      </Row>
      <Row xs={2}>
        {project.description}
      </Row>
    </Col>);
  };
  renderProjects = () => {
    let returnJSX = [];
    let projectIndex = 0;
    while (projectIndex < this.state.selectedProjects.length) {
      returnJSX.push(<Row className='project-row' style={{paddingLeft: '3%'}}>
        {this.renderProjectColumns(this.state.selectedProjects.slice(projectIndex,projectIndex+2))}
      </Row>);
      projectIndex +=2 ;
    }
    return returnJSX;

  }

  render() {
    return (this.state.fetching) ? (
            <div>'Loading'</div>)
        : (<Panel style={{ backgroundColor: 'rgba(189,195,199 ,1)' }} className="pull_up_card top_touch_shadow">
              <Panel.Body>
                <Col xs={6}>
                  <Row xs={2}>
                    Selected Projects
                  </Row>
                  <Row xs={2}>
                    <hr/>
                  </Row>
                  <Row xs={6}>
                    {this.renderProjects()}
                  </Row>
                </Col>
                <Col xs={1}>
                </Col>
                <Col xs={5}>
                  <Row xs={2}>
                    Hobbies
                  </Row>
                  <Row xs={2}>
                    <hr/>
                  </Row>
                  <Row xs={6}>
                    {/*this.renderHobbies(this.state.hobbies);*/}
                  </Row>
                </Col>
              </Panel.Body>
            </Panel>
        );
  }
}
