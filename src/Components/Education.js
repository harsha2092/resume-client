import React, { Component } from 'react';
import axios from 'axios';
import { Row, Panel, Col } from "react-bootstrap";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education_details: [],
      languages:[],
      fetching: true
    }
  }

  componentDidMount() {
    this.fetchEducationDetails();
    this.fetchLanguages();
  }

  fetchEducationDetails = () => {
    axios.get(`${process.env.SERVER_URL}/resume/education`).then((response) => {
      this.setState({
        education_details: response.data.education,
        fetching: false
      });
    });
  }

  fetchLanguages = () => {
    axios.get(`${process.env.SERVER_URL}/resume/languages`).then((response) => {
      this.setState({
        languages: response.data.languages,
        fetching: false
      });
    });
  }


  renderHeading = () => (
      <Row xs={2} className={"heading"}>
        <Col xs={8}>
          Course
        </Col>
        <Col xs={2}>
          <Row xs={3}>
            <Col xs={4}>
              Institution
            </Col>
          </Row>
        </Col>
      </Row>
  );

  renderEducationDetails = () => {
    return this.state.education_details.map((education_detail) => {
      return (<Row xs={8} className={"education-detail"}>
        <Col xs={8}>
          <div className={"name"}>{education_detail.course_name}({education_detail.score})</div>
          <div>{education_detail.timeline}</div>
        </Col>
        <Col xs={4}>
          {education_detail.institution}
        </Col>
      </Row>);
    });
  }

  renderLanguage = () => {
    return (<React.Fragment>
          <Row xs={2} className={"heading"}>
            Language
          </Row>
          <hr/>
          {this.state.languages.map((language) =>(
            <Row xs={8} className={"language"}>
              <Col xs={12}>
                <div className={"name"}>{language.name}</div>
                <div>{language.fluency}</div>
              </Col>
            </Row>
          ))
          }
        </React.Fragment>
    );
  }

  render() {
    return (this.state.fetching) ? (
            <div>'Loading'</div>)
        : (<Panel style={{ backgroundColor: 'rgba(189,195,199 ,1)' }} className="pull_up_card top_touch_shadow">
              <Panel.Body className={"education"}>
                <Col xs={7}>
                  {this.renderHeading()}
                  <hr style={{width: '100%'}}/>
                  {this.renderEducationDetails()}
                </Col>
                <Col xs={1}>
                </Col>
                <Col xs={2}>
                  {this.renderLanguage()}
                </Col>
              </Panel.Body>
            </Panel>
        );
  }
}
