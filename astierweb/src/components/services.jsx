import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  return (
    <div>
      <div className="wrapper indent-top" style={{ marginLeft: '160px', marginRight: '30px' }}>
        <article className="grid_23 prefix_1 alpha omega" style={{ paddingLeft: '10px' }}>
          <h2>Our services:</h2>
          <div className="wrapper" style={{ width: '100%' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-1">SEO</dt>
                    <dd>
                      <p>
                        <strong>Attracting search engine traffic with compelling SEO content.</strong> Successfully converting visitors into paying customers. Faster load times on all major Internet browsers. Increased number of repeat visitors. Increased selling power of your products or services.
                      </p>
                      <div className="alignright">
                        <Link to="/seo" className="link">read more</Link>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#e0e0e0', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-2">Bunch SMS</dt>
                    <dd>
                      <p>
                        <strong>Our Web to SMS service enables you to send SMS's</strong> to individuals and groups using the Bulk SMS web-based SMS messaging platform.
                      </p>
                      <div className="alignright" style={{ paddingTop: '5px' }}>
                      <Link to="/bunchsms" className="link">read more</Link>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#d0d0d0', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-3">BUNCH E-mail</dt>
                    <dd>
                      <p>
                        We also offer <strong>bulk-email</strong> sending to your customer.
                      </p>
                      <div className="alignright" style={{ marginLeft: '40px' }}>
                      <Link to="/bunchemail" className="link">read more</Link>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-1">Web-site Development</dt>
                    <dd>
                      <p>
                        If you have <strong>business</strong> and you want to <strong>expand your business</strong> in the world then call us....
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#e0e0e0', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-2">Web-site Designing</dt>
                    <dd>
                      <p>
                        A look of the web-site will affect your business, just call us to make an impressive website.......
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#d0d0d0', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-3">Software Development</dt>
                    <dd>
                      <p>
                        Just skip your <strong>Copy and pen</strong>, work quickly with your desktop application.
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-1">Web-hosting</dt>
                    <dd>
                      <p>
                        Do you have a website and want to launch, just use our web-hosting services.
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="column" style={{ flex: '1 1 50%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ backgroundColor: '#e0e0e0', padding: '20px', height: '100%' }}>
                  <dl className="def-list-1">
                    <dt className="color-1">Data Entry</dt>
                    <dd>
                      <p>
                        Do you have data to be entered? Let us handle it for you.
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
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
                        <li><Link to="/web-hosting">Web Hosting</Link></li>
                        <li><Link to="/web-hosting">Web Designing</Link></li>
                      </ul>
                    </article>
                    <article className="grid_5">
                      <ul className="list-1">
                        <li style={{ marginTop: "5px", fontSize: "11px", color: "#82a9b5" }} ><Link to="/android">ANDROID</Link></li>
                        <li><Link to="/mlai">Machine Learning / AI</Link></li>
                        <li><Link to="/arduino">Arduino IoT</Link></li>
                      </ul>
                    </article>
                  </div>
                  <article className="grid_8 omega">
                    <h4 className="pad-1" style={{ color: '#CCCCCC' }}>Testimonials:</h4>
                    <blockquote className="quote">
                      <div className="inner">
                        We develop unique concepts in our innovation. We welcome your comments about “what works” and “what could work better.” Feel free to contact us.
                      </div>
                    </blockquote>
                    <div className="author alignright pad-2">
                      <span>( Manager )</span>
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

export default Services;
