import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Angularsyllabus = () => {


  return (
    <div>
    <div class="wrapper indent-top">
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <h1 style={{ color: 'Red' }}>Angular.js Syllabus</h1>

      <h2 style={{ color: '#555' }}>1. Introduction to Angular</h2>
      <ul>
        <li>What is Angular?</li>
        <li>History and Evolution</li>
        <li>Angular's Core Principles</li>
        <li>Setting Up an Angular Project (Angular CLI)</li>
        <li>Understanding Angular Modules</li>
        <li>Angular Architecture Overview</li>
      </ul>

      <h2 style={{ color: '#555' }}>2. Angular Components</h2>
      <ul>
        <li>Creating and Configuring Components</li>
        <li>Component Decorators</li>
        <li>Templates and Data Binding</li>
        <li>Component Lifecycle Hooks</li>
        <li>Component Interaction (Input/Output)</li>
        <li>View Encapsulation</li>
        <li>Dynamic Component Loading</li>
      </ul>

      <h2 style={{ color: '#555' }}>3. Directives and Pipes</h2>
      <ul>
        <li>Structural Directives (ngIf, ngFor, ngSwitch)</li>
        <li>Attribute Directives (Custom Directives)</li>
        <li>Creating Custom Directives</li>
        <li>Angular Pipes (Built-in Pipes)</li>
        <li>Creating Custom Pipes</li>
        <li>Pipe Transformations</li>
      </ul>

      <h2 style={{ color: '#555' }}>4. Services and Dependency Injection</h2>
      <ul>
        <li>Creating and Providing Services</li>
        <li>Dependency Injection Overview</li>
        <li>Injecting Services into Components</li>
        <li>Singleton Services and Providers</li>
        <li>Hierarchical Injection and Injector</li>
        <li>Using RxJS Observables in Services</li>
      </ul>

      <h2 style={{ color: '#555' }}>5. Routing and Navigation</h2>
      <ul>
        <li>Setting Up Angular Router</li>
        <li>Defining Routes and Route Parameters</li>
        <li>Nested Routes and Child Routes</li>
        <li>Router Guards (CanActivate, CanDeactivate)</li>
        <li>Router Events and Navigation</li>
        <li>Lazy Loading Routes</li>
      </ul>

      <h2 style={{ color: '#555' }}>6. Forms</h2>
      <ul>
        <li>Template-Driven Forms</li>
        <li>Reactive Forms</li>
        <li>Form Controls and Form Groups</li>
        <li>Form Validation and Custom Validators</li>
        <li>Handling Form Submissions</li>
        <li>Dynamic Form Creation</li>
      </ul>

      <h2 style={{ color: '#555' }}>7. HttpClient and APIs</h2>
      <ul>
        <li>Introduction to HttpClient</li>
        <li>Making HTTP Requests (GET, POST, PUT, DELETE)</li>
        <li>Handling HTTP Responses and Errors</li>
        <li>Intercepting Requests and Responses</li>
        <li>Working with Observables</li>
        <li>Handling Authentication and Authorization</li>
      </ul>

      <h2 style={{ color: '#555' }}>8. Angular Modules</h2>
      <ul>
        <li>Creating and Using Angular Modules</li>
        <li>Feature Modules and Lazy Loading</li>
        <li>Shared Modules and Core Modules</li>
        <li>Module Dependencies and Providers</li>
        <li>NgModules and Angular CLI</li>
      </ul>

      <h2 style={{ color: '#555' }}>9. Styling in Angular</h2>
      <ul>
        <li>Using CSS in Angular Components</li>
        <li>Scoped Styles and View Encapsulation</li>
        <li>Angular Material and Angular Flex Layout</li>
        <li>Styling with SCSS and Less</li>
        <li>Responsive Design and Media Queries</li>
      </ul>

      <h2 style={{ color: '#555' }}>10. Performance Optimization</h2>
      <ul>
        <li>Change Detection Strategies</li>
        <li>Optimizing Angular Application Performance</li>
        <li>Lazy Loading and Code Splitting</li>
        <li>Track By Function for ngFor</li>
        <li>Angular Ahead-of-Time (AOT) Compilation</li>
        <li>Angular Universal for Server-Side Rendering (SSR)</li>
      </ul>

      <h2 style={{ color: '#555' }}>11. Testing</h2>
      <ul>
        <li>Introduction to Angular Testing</li>
        <li>Unit Testing Components and Services</li>
        <li>End-to-End Testing with Protractor</li>
        <li>Using Jasmine and Karma</li>
        <li>Mocking Dependencies</li>
        <li>Test Coverage and Best Practices</li>
      </ul>

      <h2 style={{ color: '#555' }}>12. Deployment</h2>
      <ul>
        <li>Building the Angular Application</li>
        <li>Deploying to Firebase</li>
        <li>Deploying to GitHub Pages</li>
        <li>Deploying to AWS and Azure</li>
        <li>Continuous Integration and Deployment (CI/CD)</li>
        <li>Handling Environment Variables</li>
      </ul>

      <h2 style={{ color: '#555' }}>13. Advanced Topics</h2>
      <ul>
        <li>Custom Angular Elements</li>
        <li>State Management with NgRx</li>
        <li>GraphQL with Angular</li>
        <li>Progressive Web Apps (PWAs) with Angular</li>
        <li>Angular Elements and Web Components</li>
        <li>Internationalization (i18n) and Localization</li>
      </ul>

      <h2 style={{ color: '#555' }}>14. Ecosystem and Tools</h2>
      <ul>
        <li>Angular CLI and Its Features</li>
        <li>Using Angular DevTools</li>
        <li>Code Quality Tools (ESLint, Prettier)</li>
        <li>Webpack and Build Configuration</li>
        <li>Using Angular Libraries and Plugins</li>
        <li>Angular Security Best Practices</li>
        <li>Performance Monitoring and Logging</li>
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

export default Angularsyllabus ;
