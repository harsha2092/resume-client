import React, { Component } from 'react';
import axios from 'axios';
import { Row, Panel, Col, Glyphicon } from "react-bootstrap";

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone_number: '',
      fetching: true
    }
  }

  componentDidMount() {
    this.fetchContactDetails();
  }

  fetchContactDetails = () => {
    axios.get(`${process.env.SERVER_URL}/resume/contact_details`).then((response) => {
      this.setState({
        email: response.data.email,
        phone_number: response.data.phone_number,
        fetching: false
      });
    });
  }


  render() {
    return (this.state.fetching) ? (
            <div>'Loading'</div>)
        : (<Panel style={{ backgroundColor: '#FBFBFB' }} className="pull_up_card down_shadow">
              <Panel.Body>
                <Col xs={2}>
                  <Row xs={2}>
                    <div style={{ marginLeft: '2%' }}>
                      {'Contact'}
                    </div>
                  </Row>
                  <Row xs={2}>
                    <div>
                      <hr/>
                    </div>
                  </Row>
                  <Row xs={8}>
                    <Row xs={2}>
                      <Col xs={1}>
                        <Glyphicon glyph="envelope" />
                      </Col>
                      <Col xs={8}>
                        <div>{this.state.email}</div>
                      </Col>
                    </Row>
                    <Row xs={2} style={{paddingTop: '10%'}}>
                      <Col xs={1}>
                        <Glyphicon glyph="phone" />
                      </Col>
                      <Col xs={8}>
                        <div>{this.state.phone_number}</div>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col xs={6} style={{ paddingLeft: '10%', paddingTop: '2%' }}>
                  <hr/>
                  <Row xs={4}>
                    <Col xs={8}>
                      <Row xs={6}>Email Address</Row>
                      <Row xs={6}><input type={'text'} style={{ width: '100%' }}/></Row>
                    </Col>
                    <Col xs={2}>
                    </Col>
                    <Col xs={2}>
                      <Row xs={6}>Name</Row>
                      <Row xs={6}><input type={'text'} style={{ width: '300%' }}/></Row>
                    </Col>
                  </Row>
                  <Row xs={1}>
                  </Row>
                  <Row xs={4}>
                    <div style={{ paddingTop: '6%' }}>Message</div>
                    <div><textarea style={{ width: '100%' }}/></div>
                  </Row>
                  <Row xs={2}>
                    <button className={"pull-right"}>send</button>
                  </Row>
                </Col>

              </Panel.Body>
            </Panel>
        );
  }
}
