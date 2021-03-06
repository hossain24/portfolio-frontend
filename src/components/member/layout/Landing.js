import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../member.css";

class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <div className="Landing-content">
                    <div className="User-Authentication" style={{ height: "75vh" }}>
                        <div style={{ height: "75vh" }} className="container valign-wrapper">
                            <div className="row">
                                <div className="col s12 center-align">
                                    <h4>
                                        <span style={{ fontFamily: "monospace" }}> Hill Track </span></h4>
                                    <p className="flow-text grey-text text-light-1">
                                        User authentication system </p>
                                    <br />
                                    <div className="col s6">
                                        <Link to="/register" style={{
                                            width: "140px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px"
                                        }}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                            Register
                            </Link>
                                    </div>
                                    <div className="col s6">
                                        <Link to="/login"
                                            style={{
                                                width: "140px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px"
                                            }}
                                            className="btn btn-large btn-flat waves-effect white black-text">
                                            Log In
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;