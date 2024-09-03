import React from 'react';
import "../css/Home.css";
import java from "../images/java.jpg";
import as from "../images/as.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const J2se = () => {


  return (
    <div>
    <div className="wrapper indent-top">
    <article className="grid_15 suffix_1 prefix_1 alpha">
        <h2>J2SE</h2>
        <div className="p">
          <div className="grid_5 alpha" style={{ marginRight: '10px', width: '80px', border: '0' }}>
            <figure className="img-indent-bot-1" style={{ height: '40px', width: '70px', border: '0', paddingTop: '10px', paddingBottom: '10px' }}>
            <img src={java} width="63" height="64" style={{ border: 'none' }} alt="java" />
            </figure>
          </div>

          <div id="left_column">
            <p style={{ marginTop: '10px' }}>
              Java Evolution, AWT, Swing, Event Handling, Database Connectivity, RMI / Socket, Servlet / JSP, Class Beans
              <br /><br />
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', borderBottom: '1px dotted #CCCCCC', fontSize: '17px', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Major Project
              </h6>
              <p>&raquo; Web Application Or Network Application Or Web Application</p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Back End
              </h6>
              <p>
                &raquo; My SQL<br />
                &raquo; SQL Server 2000, 2008 R2<br />
                &raquo; MS ACCESS
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> IDEs
              </h6>
              <p>
                &raquo; SQL YOG<br />
                &raquo; Dream Weaver<br />
                &raquo; FrontPage
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Server
              </h6>
              <p>
                &raquo; Tomcat Apache<br />
                &raquo; IBM Websphere
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Framework
              </h6>
              <p>
                &raquo; Net Beans<br />
                &raquo; DOJO(js)
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Markup Language
              </h6>
              <p>
                &raquo; HTML<br />
                &raquo; DHTML<br />
                &raquo; XML
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Web Hosting
              </h6>
              <p>
                &raquo; Working on Cpanel<br />
                &raquo; Working on Plesk Panel<br />
                &raquo; Domain Registration<br />
                &raquo; DNS Setting<br />
                &raquo; Parking of Domains<br />
                &raquo; Database Connectivity
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Other
              </h6>
              <p>
                &raquo; Emailing<br />
                &raquo; SMS sending<br />
                &raquo; Captcha code<br />
                &raquo; Cookies<br />
                &raquo; Session Tracking<br />
                &raquo; CSS<br />
                &raquo; RSS Feed<br />
                &raquo; SEO Concept<br />
                &raquo; Web Designing Concept
              </p>
              <h6 style={{ paddingBottom: '4px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 'normal', fontSize: '17px', borderBottom: '1px dotted #CCCCCC', marginBottom: '5px', color: '#999' }}>
                <img src={as} width="20" height="20" alt="Icon" style={{ marginRight: '7px' }} /> Social Networking
              </h6>
              <p>
                &raquo; Facebook Application<br />
                &raquo; Google Custom Search Engine<br />
                &raquo; Google Plus<br />
                &raquo; Twitter<br />
                &raquo; LinkedIn<br />
                &raquo; Professional Network<br />
                &raquo; Blogger (Google)
              </p>
            </p>
            <h2>Extra</h2>
            <p>
              &raquo; Working on Cpanel<br />
              &raquo; Working on Plesk Panel<br />
              &raquo; Domain Registration<br />
              &raquo; DNS Setting<br />
              &raquo; Parking of Domains<br />
              &raquo; Database Connectivity
            </p>
            <h2>Requirement</h2>
            <p>
              <b>Knowledge Of- </b> C/C++, Distributed Tech., RDBMS, Client-Server Model, MVC Model-I
            </p>
          </div>
        </div>
       
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

export default J2se;
