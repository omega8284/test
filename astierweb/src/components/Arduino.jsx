import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Ardiot = () => {


  return (
    <div>
    <div class="wrapper indent-top">
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <h1 style={{ color: 'green' }}>Arduino and IoT Syllabus</h1>

      <h2 style={{ color: '#555' }}>1. Introduction to Arduino</h2>
      <ul>
        <li>What is Arduino?</li>
        <li>History and Evolution of Arduino</li>
        <li>Arduino Board and Microcontroller Overview</li>
        <li>Setting Up Arduino IDE</li>
        <li>Basic Arduino Programming Concepts</li>
        <li>Understanding Digital and Analog I/O</li>
      </ul>

      <h2 style={{ color: '#555' }}>2. Basic Arduino Components and Modules</h2>
      <ul>
        <li>Arduino Boards (Uno, Nano, Mega, etc.)</li>
        <li>Basic Electronic Components (Resistors, Capacitors, LEDs)</li>
        <li>Sensors (Temperature, Humidity, Light, Motion)</li>
        <li>Actuators (Motors, Servos, Relays)</li>
        <li>Displays (LCD, OLED, Seven-Segment)</li>
        <li>Communication Modules (Bluetooth, RF, GPS)</li>
      </ul>

      <h2 style={{ color: '#555' }}>3. Programming Arduino</h2>
      <ul>
        <li>Arduino IDE Features and Setup</li>
        <li>Basic Syntax and Programming Structure</li>
        <li>Using Libraries and Sketches</li>
        <li>Control Structures (Loops, Conditionals)</li>
        <li>Functions and Modular Code</li>
        <li>Interfacing with Sensors and Actuators</li>
        <li>Debugging and Serial Communication</li>
      </ul>

      <h2 style={{ color: '#555' }}>4. Advanced Arduino Projects</h2>
      <ul>
        <li>Building Interactive Projects (Smart Home, Automation)</li>
        <li>Wireless Communication Projects (Wi-Fi, Bluetooth)</li>
        <li>Data Logging and Visualization</li>
        <li>IoT Integration with Arduino</li>
        <li>Custom PCB Design and Arduino Shields</li>
        <li>Power Management and Battery Systems</li>
      </ul>

      <h2 style={{ color: '#555' }}>5. Introduction to IoT (Internet of Things)</h2>
      <ul>
        <li>What is IoT?</li>
        <li>History and Evolution of IoT</li>
        <li>IoT Architecture and Components</li>
        <li>IoT Protocols (MQTT, HTTP, CoAP)</li>
        <li>Cloud Platforms and IoT Services</li>
        <li>Security and Privacy in IoT</li>
      </ul>

      <h2 style={{ color: '#555' }}>6. IoT Hardware and Communication</h2>
      <ul>
        <li>IoT Devices and Sensors</li>
        <li>Communication Protocols (UART, SPI, I2C)</li>
        <li>Wireless Communication (Wi-Fi, Bluetooth, Zigbee)</li>
        <li>Connecting IoT Devices to the Cloud</li>
        <li>IoT Gateways and Edge Computing</li>
      </ul>

      <h2 style={{ color: '#555' }}>7. IoT Software and Data Management</h2>
      <ul>
        <li>IoT Data Collection and Analysis</li>
        <li>Data Storage Solutions (Databases, Cloud Storage)</li>
        <li>Data Processing and Analytics</li>
        <li>Building IoT Dashboards and Interfaces</li>
        <li>Integrating with APIs and Third-Party Services</li>
        <li>Machine Learning for IoT</li>
      </ul>

      <h2 style={{ color: '#555' }}>8. IoT Security and Privacy</h2>
      <ul>
        <li>Understanding IoT Security Challenges</li>
        <li>Securing IoT Devices and Networks</li>
        <li>Data Encryption and Secure Communication</li>
        <li>Authentication and Authorization Mechanisms</li>
        <li>Compliance and Regulatory Issues</li>
      </ul>

      <h2 style={{ color: '#555' }}>9. Advanced IoT Topics and Projects</h2>
      <ul>
        <li>Edge AI and Edge Computing</li>
        <li>Smart Cities and Smart Homes</li>
        <li>Industrial IoT (IIoT) Applications</li>
        <li>Wearable IoT Devices</li>
        <li>Implementing IoT Protocols (MQTT, CoAP)</li>
        <li>Integration with Blockchain for IoT</li>
      </ul>

      <h2 style={{ color: '#555' }}>10. Tools and Ecosystem</h2>
      <ul>
        <li>Arduino IDE and Development Tools</li>
        <li>IoT Platforms and Frameworks (ThingSpeak, Blynk)</li>
        <li>Cloud Platforms (AWS IoT, Google Cloud IoT, Azure IoT)</li>
        <li>Simulation Tools (Fritzing, Tinkercad)</li>
        <li>Version Control and Collaboration (Git)</li>
        <li>Documentation and Project Management Tools</li>
      </ul>
    </div>
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

export default Ardiot ;
