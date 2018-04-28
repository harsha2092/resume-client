import React, {Component} from 'react';
import axios from 'axios';
import {Row, Panel, Col} from "react-bootstrap";

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
        axios.get('http://localhost:3000/resume/contact_details').then((response) => {
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
            : (<Panel style={{backgroundColor: '#FBFBFB'}} className="pull_up_card down_shadow">
                    <Panel.Body>
                        <Row>
                            <div style={{marginLeft: '2%'}}>
                                {'Contact'}
                            </div>
                            <div>
                            <hr style={{width: '50%'}}/>
                            </div>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div>{this.state.email}</div>
                                <div>{this.state.phone_number}</div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col md={8}>
                                        Email Address
                                        <input type={'text'}/>
                                    </Col>
                                    <Col md={4}>
                                        Name
                                        <input type={'text'}/>
                                    </Col>
                                </Row>
                                <Row>
                                    Message
                                    <input type={'text-area'}/>
                                </Row>
                            </Col>
                            <div style={{marginLeft: '2%'}}>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            asdas
                            <br/>
                            </div>
                        </Row>
                    </Panel.Body>
                </Panel>
            );
    }
}
