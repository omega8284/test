import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {


  return (
    <div>
      <header>
        <div className="top-row">
          <h1 className="aligncenter">Our experience is the base for <br /> your innovations.</h1>
          <div className="wrapper">
            <div className="grid_5 prefix_1 alpha">
               <span className="dropcap color-1">A.</span>
                <div className="extra-wrap">
                  <strong className="str-1 color-1">
                    Creativity combined with latest web technology can generate impressive results.
                  </strong>
                </div>
              </div>
            <div className="grid_5">
              <span className="dropcap color-2">B.</span>
              <div className="extra-wrap">
                <strong className="str-1 color-2">
                  A visually attractive web page is not the sole outcome of brilliant web design.
                </strong>
              </div>
            </div>
            <div className="grid_5">
              <span className="dropcap color-3">C.</span>
              <div className="extra-wrap">
                <strong className="str-1 color-3">
                  A brochure that makes watching water boil seem exciting or a business.
                </strong>
              </div>
            </div>
            <div className="grid_7 suffix_1 omega">
              <span className="dropcap color-4">D.</span>
              <div className="extra-wrap">
                <strong className="str-1 color-4">
                  We understand your Requirement. Feel free to contact us.
                </strong>
                <Link to="/contact">E-mail us </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper indent-top">
          <article className="grid_15 suffix_1 prefix_1 alpha">
            <h2>Welcome to our company!</h2>
            <p>
              <b><font color="#FF0000">ASTIER</font></b> is <b><font color="#FF0000">ISO Certified IT Company</font></b>. The acronym <b>"Advanced Software Technology Integrated Environment Resourceful"</b>, is very fast growing IT Company where every syllable is honed at every dimension of IT industry requirement. The business model of <b><font color="#FF0000">ASTIER</font></b> emphasizes towards small and medium sized businesses, to provide them e-commerce facility to run with modern IT era. <b><font color="#FF0000">ASTIER</font></b> has a list of number of small enterprises, business house clients, companies and educational centers as our clients within short period of time.
            </p>
          </article>
        </div>
      </header>

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
                        <li><Link to="/courses">All Courses</Link></li>
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
            <div>Website designed by <Link to="/">Astier Informatics Pvt. Ltd.</Link></div>
          </div>
          <ul className="social-list">
            <li>
              <Link to="/careers">Careers</Link>
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

export default Home;
