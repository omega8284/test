import React from 'react';
import "../css/About.css";
import isologo from "../images/iso_logo.gif";
import cir from "../images/cir.png";
import cun from "../images/cun.png";
import seo from "../images/seo.png";
import ie from "../images/ie.png";
import topimg2 from "../images/top_img2.jpg";
import sms from "../images/sms.png";
import img3 from "../images/img3.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      
    <div className="wrapper indent-top">
      <article className="grid_23 prefix_1 alpha omega" style={{ marginLeft: '100px', paddingLeft: '10px', paddingRight: '100px'}}>
        
        <div id="colone">
          <h1 style={{ borderBottom: 'none', marginLeft: '5px', color: '#6699CC', fontSize: '24px', padding: '0' }}>Certification</h1>
          <div id="sharp">
            <img src={isologo}  alt="Your isoLogo Here" style={{ marginLeft: '15px', float: 'left', marginRight: '10px' }} />
          </div>
          <div id="textboxco">ASTIER is ISO Certified IT Company
         </div>
         <div id="textboxco">GST Number: 
         </div>
         <div id="textboxco">GeM Id Number: 69QD24011816237 
         </div>
         <div id="textboxco">MSME Id Number: UDYAM-MP-49-0006920 
         </div>
        </div>

       <p  style={{marginLeft: "325px"}}>
          We know the value of money. At <b style={{ color: '#FF0000' }}>ASTIER</b>, your investment is not only nourished but also made hefty by fulfilling your business requirement through our service at the right time with the right tools.
          <br/><br/>&nbsp;&nbsp;<span style={{ color: '#0099FF' }}><b>&gt;</b></span> Our oath is to provide the <span style={{ color: '#3a7dda' }}>best-quality</span>, fully-featured services at a low price. Our mission is to develop and maintain business relationships which create the maximum level of value for customers through our products, services. Teamwork is the key attribute of success for any organization.
          <br/><br/>&nbsp;&nbsp;<span style={{ color: '#0099FF' }}><b>&gt;</b></span> At <b style={{ color: '#FF0000' }}>ASTIER</b>, we have an <span style={{ color: '#3a7dda' }}>experienced management</span> team run by <span style={{ color: '#3a7dda' }}>IT professionals</span>. Our developers are very qualified and highly skilled persons who devote for the best of Company and Customers. First fold of <b style={{ color: '#FF0000' }}>ASTIER</b> tends to IT service and solutions. The Development Council handles IT related activities like- <span style={{ color: '#3a7dda' }}>exporting the IT knowledge among small scale industries and enterprises</span>, <span style={{ color: '#3a7dda' }}>Web hosting</span>, <span style={{ color: '#3a7dda' }}>maintenance</span>, all stream based <span style={{ color: '#3a7dda' }}>data transcription</span>, <span style={{ color: '#3a7dda' }}>IT consultation</span>, <span style={{ color: '#3a7dda' }}>importing/ exporting IT agents</span> and several others.
        </p>

        <div className="hr-border-1" style={{ border: '1px solid #CCC', marginRight: '0', textAlign: 'center', padding: '0 10px 0 10px' }}>
          <div id="m" style={{ marginLeft: '80px', paddingTop: '10px', textAlign: 'center' }}>
            <h6>"We offer the <span style={{ color: '#66' }}>highest quality</span> and most advanced web design services."</h6>
          </div>
          <p>
          <img src={cir}  alt="Your cir Here" width="55" height="55" style={{ float: 'left', marginRight: '10px', marginLeft: '20px', textAlign: 'center' }} />At ASTIER Informatics, best software engineering practice is used and implemented by appropriate tools. We have trained and skilled staff, with clear responsibilities and instructions. Defect prevention or early correction is the strategy for the development of applications. We offer a wide range of following Software Services and Solutions to our different Customers according to their requirements.
          </p>
        </div>

        <div className="wrapper p">
          <div id="boxoneonedev" style={{ marginTop: '10px' }}>
            <div id="coltwo">
              <h1 style={{ color: '#3a7dda', fontSize: '16px' }}>Consultancy</h1>
              <div id="shar">
              <img src={cun}  alt="Your cun Here" width="70" height="70" style={{ marginLeft: '15px', float: 'left', marginRight: '10px' }} />
              </div>
              <div id="textboxco">Consultancy Services provided by us.</div>
            </div>

            <div id="coltwo">
              <h1>NetMon</h1>
              <div id="shar">
              <img src={seo}  alt="Your seo Here" width="70" height="70" style={{ marginLeft: '15px', float: 'left', marginRight: '10px' }}/>
              </div>
              <div id="textboxco">We offer a wide range Network Monitoring System Services and Solution.</div>
            </div>

            <div id="colthree">
              <h1>Web Hosting</h1>
              <div id="shar">
              <img src={ie}  alt="Your ie Here" width="78" height="78" style={{ marginLeft: '12px', float: 'left', marginRight: '10px' }} />
              </div>
              <div id="textboxco">We are a reseller of Web Hosting Packages (Seeknext IT Solutions Pvt. Ltd., Bangalore).</div>
            </div>

            <div className="clear"></div>
          </div>

          <div id="boxoneonedev">
            <div id="coltwo">
              <h1 style={{ color: '#3a7dda', fontSize: '16px' }}>EBAS</h1>
              <div id="shar">
              <img src={topimg2}  alt="topimg2" width="70" height="70" style={{ marginLeft: '12px', float: 'left', marginRight: '10px' }}  />
              </div>
              <div id="textboxco">We Offer Biometric Attendance System to our Customer.</div>
            </div>

            <div id="coltwo">
              <h1>Trade-Info</h1>
              <div id="shar">
              <img src={sms}  alt="Your sms Here" width="80" height="82" style={{ marginLeft: '12px', float: 'left', marginRight: '10px' }} />
              </div>
              <div id="textboxco">We serve SMS based Solution without the use of GATEWAY.</div>
            </div>

            <div id="colthree">
              <h1>File Splitter/ Joiner </h1>
              <div id="shar">
              <img src={img3}  alt="Your img3 Here" width="70" height="70" style={{ marginLeft: '12px', float: 'left', marginRight: '10px' }} />
              </div>
              <div id="textboxco">We develop different desktop applications.</div>
            </div>

            <div className="clear"></div>
          </div>
        </div>

        <div className="alignright pad-3">
          {/* Content for alignright pad-3 */}
        </div>
      
      </article>
      </div>
      
      <footer>
            <aside>
                <div className="container_24">
                    <div className="wrapper" style={{ marginLeft: '50px', marginTop: '0', paddingTop: '0px' }}>
                        <div className="grid_24 aside-bg">
                            <div className="wrapper">
                                <article className="grid_14 suffix_1 prefix_1 alpha">
                                    <h2 style={{ color: '#CCC' }}>Testimonials:</h2>
                                    <div className="grid_7 alpha">
                                        <blockquote className="quote">
                                            <div className="inner">
                                                .... This is a significant achievement, and my thanks to all of your hard
                                                working efforts to achieve my goal...
                                            </div>
                                        </blockquote>
                                        <div className="author alignright pad-4">
                                            Vijay Yadav <span>(HP)</span>
                                        </div>
                                    </div>
                                    <div className="grid_7 omega">
                                        <blockquote className="quote">
                                            <div className="inner">
                                                ... I wish to thank you again for your invaluable support, friendship,
                                                transparency and “patience” in preparing, conducting....
                                            </div>
                                        </blockquote>
                                        <div className="author alignright pad-4">
                                            Mahendra Yadav <span>( Thahaka Sammelan )</span>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </article>
                                <article className="grid_7 suffix_1 omega">
                                    <h2 style={{ color: '#CCC' }}>Features:</h2>
                                    <ol className="ol-list-1">
                                        <li><Link to="/seo">SEO</Link></li>
                                        <li><Link to="/bunchsms">Bunch SMS</Link></li>
                                        <li><Link to="/bunchemail">Bunch E-mail</Link></li>
                                    </ol>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="foott">
                <div className="copyright">
                    &copy; 2012 <strong className="footer-logo"></strong>
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

export default About;
