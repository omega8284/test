import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Android = () => {


  return (
    <div>
    <div class="wrapper indent-top">
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <h1 style={{ color: 'red' }}>Android Development Syllabus</h1>

      <h2 style={{ color: '#555' }}>1. Introduction to Android</h2>
      <ul>
        <li>What is Android?</li>
        <li>History and Evolution of Android</li>
        <li>Android Architecture Overview</li>
        <li>Setting Up Android Development Environment (Android Studio)</li>
        <li>Android SDK and AVD (Android Virtual Device)</li>
        <li>Understanding Android Components</li>
      </ul>

      <h2 style={{ color: '#555' }}>2. Android Components</h2>
      <ul>
        <li>Activities and Activity Lifecycle</li>
        <li>Fragments and Fragment Lifecycle</li>
        <li>Services and Service Lifecycle</li>
        <li>Broadcast Receivers</li>
        <li>Content Providers</li>
        <li>Application Manifest File</li>
      </ul>

      <h2 style={{ color: '#555' }}>3. User Interface (UI) Design</h2>
      <ul>
        <li>Layouts and Views (LinearLayout, RelativeLayout, ConstraintLayout)</li>
        <li>UI Widgets (TextView, EditText, Button, ImageView)</li>
        <li>RecyclerView and Adapters</li>
        <li>Custom Views and ViewGroups</li>
        <li>Styling and Themes</li>
        <li>Material Design Principles</li>
        <li>Responsive Design and Layouts</li>
      </ul>

      <h2 style={{ color: '#555' }}>4. Data Storage and Management</h2>
      <ul>
        <li>Shared Preferences</li>
        <li>Internal and External Storage</li>
        <li>SQLite Database</li>
        <li>Room Persistence Library</li>
        <li>Content Providers</li>
        <li>Data Binding and LiveData</li>
        <li>Handling Data from Web Services</li>
      </ul>

      <h2 style={{ color: '#555' }}>5. Networking and APIs</h2>
      <ul>
        <li>Making HTTP Requests (HttpURLConnection, OkHttp)</li>
        <li>Parsing JSON and XML Responses</li>
        <li>Using Retrofit for API Calls</li>
        <li>Handling API Errors and Caching</li>
        <li>Asynchronous Operations (AsyncTask, Executors)</li>
        <li>Networking Libraries (Volley, Picasso)</li>
      </ul>

      <h2 style={{ color: '#555' }}>6. Background Tasks and Services</h2>
      <ul>
        <li>Introduction to Background Processing</li>
        <li>Using Services for Background Tasks</li>
        <li>WorkManager for Deferred Tasks</li>
        <li>JobScheduler API</li>
        <li>Broadcast Receivers for System Events</li>
        <li>Handling Notifications</li>
      </ul>

      <h2 style={{ color: '#555' }}>7. Android Architecture Components</h2>
      <ul>
        <li>ViewModel</li>
        <li>LiveData</li>
        <li>Room Database</li>
        <li>Data Binding</li>
        <li>Navigation Component</li>
        <li>Repository Pattern</li>
      </ul>

      <h2 style={{ color: '#555' }}>8. Security and Permissions</h2>
      <ul>
        <li>Requesting and Handling Permissions</li>
        <li>Understanding App Security Best Practices</li>
        <li>Data Encryption and Secure Storage</li>
        <li>Implementing Authentication (Firebase Auth, OAuth)</li>
        <li>Securing API Calls and User Data</li>
      </ul>

      <h2 style={{ color: '#555' }}>9. Testing</h2>
      <ul>
        <li>Introduction to Android Testing</li>
        <li>Unit Testing with JUnit</li>
        <li>Instrumentation Testing with Espresso</li>
        <li>UI Testing and Mocking</li>
        <li>Test-Driven Development (TDD)</li>
        <li>Testing Best Practices</li>
      </ul>

      <h2 style={{ color: '#555' }}>10. Deployment and Distribution</h2>
      <ul>
        <li>Preparing Application for Release</li>
        <li>Generating Signed APKs and App Bundles</li>
        <li>Publishing to Google Play Store</li>
        <li>App Versioning and Updates</li>
        <li>Handling User Feedback and Analytics</li>
        <li>Continuous Integration and Deployment (CI/CD)</li>
      </ul>

      <h2 style={{ color: '#555' }}>11. Advanced Topics</h2>
      <ul>
        <li>Custom Views and Animations</li>
        <li>Working with WebSockets</li>
        <li>Integrating with Third-Party Libraries</li>
        <li>Building Widgets and Extensions</li>
        <li>Android Jetpack Libraries</li>
        <li>Multi-Module Projects and Architecture Patterns (MVVM, MVP)</li>
        <li>Android NDK for Native Development</li>
      </ul>

      <h2 style={{ color: '#555' }}>12. Ecosystem and Tools</h2>
      <ul>
        <li>Android Studio Features and Plugins</li>
        <li>Debugging and Profiling Tools</li>
        <li>Code Quality Tools (Lint, SonarQube)</li>
        <li>Dependency Management (Gradle)</li>
        <li>API Documentation Tools (Swagger, Postman)</li>
        <li>Performance Monitoring and Optimization</li>
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

export default Android ;
