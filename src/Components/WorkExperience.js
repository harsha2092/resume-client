import React, { Component } from 'react';
import axios from 'axios';
import { Row, Panel, Col } from "react-bootstrap";

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExperiences: [],
      fetching: true
    }
  }

  componentDidMount() {
    this.fetchContactDetails();
  }

  fetchContactDetails = () => {
    axios.get(`${process.env.SERVER_URL}/resume/work_experiences`).then((response) => {
      this.setState({
        workExperiences: response.data.work_experiences,
        fetching: false
      });
    });
  }

  renderRoles = (roles) => {
    return roles.map((role) => {
      return (
          <Row xs={3} className={"roles"}>
            <Col xs={12}>
              <div className={"name"}>{role.name}</div>
              <div>{role.description}</div>
            </Col>
          </Row>);
    });
  }

  renderProjects = (projects) => {
    return projects.map((project) => {
      return (
          <Row xs={3} className={"projects"}>
            <Col xs={5}>
              <div className={"name"}>{project.name}</div>
              <div>{project.description}</div>
            </Col>
            <Col xs={7}>
              {this.renderRoles(project.roles)}
            </Col>
          </Row>
      );
    });
  };

  renderHeading = () => (
      <Row xs={2} className={"heading"}>
        <Col xs={2}>
          Company
        </Col>
        <Col xs={10}>
          <Row xs={3}>
          <Col xs={5}>
            Project
          </Col>
          <Col xs={7}>
            Role
          </Col>
          </Row>
        </Col>
      </Row>
  );

  renderWorkExperiences = () => {
    return this.state.workExperiences.map((workExperience) => {
      return (<Row xs={8} className={"company"}>
        <Col xs={2}>
          <div className={"name"}>{workExperience.name}</div>
          <div>{workExperience.timeline}</div>
        </Col>
        <Col xs={10}>
          {this.renderProjects(workExperience.projects)}
        </Col>
      </Row>);
    });
  }

  render() {
    return (this.state.fetching) ? (
            <div>'Loading'</div>)
        : (<Panel style={{ backgroundColor: '#FBFBFB' }} className="pull_up_card down_shadow">
              <Panel.Body className={"work-experience"}>
                {this.renderHeading()}
                <hr/>
                {this.renderWorkExperiences()}
              </Panel.Body>
            </Panel>
        );
  }
}
