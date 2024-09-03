import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import dev from "../images/development1.png";
const Deve = () => {


    return (
        <div>
            <div class="wrapper indent-top">
            <img src={dev} alt="dev" style={{width: "900px", height: "500px"}} />
                <article className="grid_15 suffix_1 prefix_1 alpha">
              <br/>
                    <tr>
                        <td height="10" width="538" valign="top">
                            <b><font face="Verdana" size="2" color="#FF6600">Software</font></b><font face="Verdana" size="2" color="#FF6600"><b> Development</b></font></td>
                    </tr>
                    <tr>
                        <td height="247" width="538" valign="middle">
                            <p align="justify">
                                <font face="Verdana" size="2">Process of the Application
                                    development begins from the acquiring of the project. Software development
                                    process is the way in which the developer translates accurately stated
                                    requirements into software products. It is clear that the quality of
                                    software is largely determined by the quality of the process used to develop
                                    and maintain it. A good software development process must enable a software
                                    organization to deliver quality products consistently and economically. It
                                    is increasingly being recognized that it must do so in a timely way.</font></p>
                            <p align="justify">
                                <font face="Verdana" size="2">At ASTIER Informatics, best software
                                    engineering practice is used and implemented by appropriate tools. We have
                                    trained and skilled staff, with clear responsibilities and instructions.
                                    Defect prevention or early correction is the strategy for the development of
                                    applications.</font></p>
                        </td> </tr>
                </article>
            </div>

            <footer>
                <aside>
                    <div className="container_24" style={{ backgroundColor: 'none' }}>
                        <div className="wrapper" style={{ backgroundColor: 'none', padding: 0, margin: '10px 0px 0px 0px' }}>
                            <div className="grid_24 aside-bg" style={{ padding: 0, margin: 0, backgroundColor: 'transparent' }}>
                                <div className="wrapper" style={{ paddingTop: '0px', border: 'none', height: '150px', backgroundColor: 'transparent' }}>
                                    <div>
                                        <h4 style={{ color: '#CCC', borderBottom: '1px dotted #999', paddingBottom: '7px', textAlign: 'center' }}>Training</h4>
                                        <article className="grid_5">
                                            <ul className="list-1">
                                                <li><Link to="/c">C, C++ (Data Structure)</Link></li>
                                                <li><Link to="/python">Python</Link></li>
                                                <li><Link to="/java">java <Link to="/j2se">(J2SE / <Link to="/j2ee">J2EE</Link>)</Link></Link></li>
                                                <li><Link to="/react">React / <Link to="/node">Node JS</Link></Link></li>
                                            </ul>
                                        </article>
                                        <article className="grid_5">
                                            <ul className="list-1">
                                                <li style={{ marginTop: "5px", fontSize: "11px", color: "#82a9b5" }} ><Link to="/angular">ANGULAR JS</Link></li>
                                                <li><Link to="">.Net <Link to="/csharp">( C# / VB / <Link to="/asp"> ASP )</Link></Link></Link></li>
                                                <li><Link to="/web-hosting">web Hosting</Link></li>
                                                <li><Link to="/web-hosting">Web Designing</Link></li>
                                            </ul>
                                        </article>
                                        <article className="grid_5">
                                            <ul className="list-1">
                                                <li style={{ marginTop: "5px", fontSize: "11px", color: "#82a9b5" }} ><Link to="/android">ANDROID</Link></li>
                                                <li><Link to="/mlai">Machine Learning /AI</Link></li>
                                                <li><Link to="/arduino">Arduino IoT</Link></li>
                                            </ul>
                                        </article>
                                    </div>
                                    <article className="grid_8 omega">
                                        <h4 className="pad-1" style={{ color: '#CCCCCC' }}>Testimonials:</h4>
                                        <blockquote className="quote">
                                            <div className="inner">
                                                we develop unique concept in our innovation.We welcome your comments about “what works” and “what could work better.” feel free to contact us.
                                            </div>
                                        </blockquote>
                                        <div className="author alignright pad-2">
                                            <span>( manager )</span>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="foott">
                    <div className="copyright">
                        &copy; 2024 <strong className="footer-logo"></strong>
                        <div>Website designed by <a href="" rel="nofollow">Astier Informatics Pvt. Ltd.</a></div>
                    </div>
                    <ul className="social-list">
                        <li>
                            <a href="http://www.facebook.com/AstierInformaticsPvtLtd?ref=hl" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/astierpvtltd" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                        </li>
                        <li>
                            <a href="http://lnkd.in/6XGiJ8" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Deve;
