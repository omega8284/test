import React from 'react';
import sms from "../images/sms.png";
import "../css/Home.css";
import { Link } from 'react-router-dom';
import contact from "../images/contact.png";

const Sms = () => {


    return (
        <div>
            <div className="wrapper indent-top"  style={{ marginLeft: '160px', marginRight: '30px' }}>
                <article className="grid_15 suffix_1 prefix_1 alpha">
                    <h2>SMS Service</h2>
                    <div className="p">
                        <div className="grid_5 alpha" style={{ marginRight: '30px', width: '80px', border: '0' }}>
                            <figure className="img-indent-bot-1" style={{ height: '80px', width: '70px', border: '0', paddingTop: '10px', paddingBottom: '10px' }}>
                                <img src={sms} alt="sms" width="87" height="86" style={{ border: 'none' }} />
                            </figure>
                        </div>

                        <div id="left_column">
                            <p style={{ textIndent: '10px' }}>
                                Our Web to SMS service enables you to send SMS's to individuals and groups using the Bulk SMS web based SMS messaging platform.
                            </p>

                            <div>
                                <h2>General uses :</h2>
                                <div className="inner_text floatleft">
                                    <ul>
                                        <li>&rsaquo; Marketing</li>
                                        <li>&rsaquo; Price information</li>
                                        <li>&rsaquo; Follow-ups</li>
                                        <li>&rsaquo; Last minute changes</li>
                                        <li>&rsaquo; Offers</li>
                                        <li>&rsaquo; Advertisements</li>
                                        <li>&rsaquo; Tips</li>
                                        <li>&rsaquo; Health Reports</li>
                                    </ul>
                                </div>

                                <div className="inner_text floatright">
                                    <ul>
                                        <li>&rsaquo; Stock portfolio to clients</li>
                                        <li>&rsaquo; Greetings (Occasional and seasonal)</li>
                                        <li>&rsaquo; Student marks, Fee Remainders and ABSENT Info</li>
                                        <li>&rsaquo; New Product Alerts</li>
                                        <li>&rsaquo; Instant Invoice / Check alerts</li>
                                        <li>&rsaquo; Reminders (Service, Payment etc.)</li>
                                        <li>&rsaquo; To Parents</li>
                                        <li>&rsaquo; and many more</li>
                                    </ul>
                                </div>
                            </div>

                            <p>
                                <h2>Support :</h2>
                                <div style={{ textIndent: '15px' }}>
                                    <p>
                                        User support is available at no extra cost. BulkSMS offers telephonic and email support. For more information, including available times, please contact Support.
                                        If you have any questions regarding any of the BulkSMS products or require further information, please <Link to="/contact">contact</Link> our Sales Department on 8224897414
                                    </p>
                                    <Link to="/contact">
                                        <img src={contact} style={{ float: 'right' }} alt="Contact" />
                                        </Link>
                                </div>
                            </p>
                        </div>

                      
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Sms;
