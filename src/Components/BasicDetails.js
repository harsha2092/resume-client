import React, {Component} from 'react';
import axios from 'axios';
import {Row, Panel, Col} from "react-bootstrap";

export default class BasicDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            designation: '',
            description: '',
            social_media_links: [],
            fetching: true
        }
    }

    componentDidMount() {
        this.fetchBasicDetails();
    }

    fetchBasicDetails = () => {
        axios.get('http://localhost:3000/resume/basic_details').then((response) => {
            this.setState({
                name: response.data.name,
                designation: response.data.designation,
                description: response.data.description,
                fetching: false
            });
        });
    }


    render() {
        return (this.state.fetching) ? (
                <div>'Loading'</div>)
            : (<Panel style={{backgroundColor: 'rgba(189,195,199 ,1)'}} className="card top_shadow">
                    <Panel.Body>
                        <Row>
                        <Col md={2}>
                            <div>{this.state.name}</div>
                            <div>{this.state.designation}</div>
                        </Col>
                        <Col md={10}>
                            <div style={{display:'inline'}}>
                                Welcome to my Online Portfolio!
                                <div style={{marginRight: '2%'}}className={'pull-right'}>f t ln g</div>
                            </div>
                            <hr/>
                            <div className={'description'}>
                                {this.state.description}
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
                        </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            );

    }
}
