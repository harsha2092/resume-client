import React, { Component } from 'react';
import axios from 'axios';
import { Row, Panel, Col } from "react-bootstrap";

export default class SelectedProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjects: [],
      hobbies: [],
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
        fetching: false
      });
    });

    axios.get(`${process.env.SERVER_URL}/resume/hobbies`).then((response) => {
      this.setState({
        hobbies: response.data.hobbies,
        fetching: false
      });
    });
  }

  renderColumns = (columnItems) =>{
    return columnItems.map(column => <Col xs={6}>
      <Row xs={2} className='column-name'>
        {column.name}
      </Row>
      <Row xs={2}>
        {column.description}
      </Row>
    </Col>);
  };
  renderRows = (rowItems) => {
    let returnJSX = [];
    let rowItemsIndex = 0;
    while (rowItemsIndex < rowItems.length) {
      returnJSX.push(<Row className='column-row' style={{paddingLeft: '3%'}}>
        {this.renderColumns(rowItems.slice(rowItemsIndex,rowItemsIndex+2))}
      </Row>);
      rowItemsIndex +=2 ;
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
                    {this.renderRows(this.state.selectedProjects)}
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
                    {this.renderRows(this.state.hobbies)}
                  </Row>
                </Col>
              </Panel.Body>
            </Panel>
        );
  }
}
