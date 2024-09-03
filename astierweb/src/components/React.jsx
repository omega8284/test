import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Reactsyllabus = () => {


  return (
    <div>
    <div class="wrapper indent-top">
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <h1 style={{ color: 'blue' }}>React.js Syllabus</h1>

      <h2 style={{ color: '#555' }}>1. Introduction to React</h2>
      <ul>
        <li>What is React?</li>
        <li>History and Evolution</li>
        <li>React's Core Principles</li>
        <li>Setting Up a React Project (Create React App, Vite)</li>
        <li>Understanding JSX</li>
        <li>React's Virtual DOM</li>
        <li>Components and Props</li>
      </ul>

      <h2 style={{ color: '#555' }}>2. Components</h2>
      <ul>
        <li>Functional Components</li>
        <li>Class Components</li>
        <li>Component Lifecycle Methods (ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount)</li>
        <li>Hooks (useState, useEffect, useRef)</li>
        <li>Props and State</li>
        <li>Handling Events</li>
        <li>Conditional Rendering</li>
        <li>Lists and Keys</li>
        <li>Component Composition</li>
        <li>Error Boundaries</li>
      </ul>

      <h2 style={{ color: '#555' }}>3. State Management</h2>
      <ul>
        <li>Local Component State with useState Hook</li>
        <li>Side Effects with useEffect Hook</li>
        <li>useReducer for Complex State Management</li>
        <li>Context API for Global State</li>
        <li>Custom Hooks for Reusable Logic</li>
        <li>State Management Libraries (Redux, MobX)</li>
        <li>Immutable Data Patterns</li>
      </ul>

      <h2 style={{ color: '#555' }}>4. Routing</h2>
      <ul>
        <li>React Router Basics</li>
        <li>Setting Up React Router</li>
        <li>Dynamic Routing</li>
        <li>Nested Routes</li>
        <li>Route Parameters and Query Strings</li>
        <li>Programmatic Navigation</li>
        <li>Protected Routes and Authentication</li>
        <li>Redirects and Navigation Guards</li>
      </ul>

      <h2 style={{ color: '#555' }}>5. Styling in React</h2>
      <ul>
        <li>Inline Styles</li>
        <li>CSS Modules</li>
        <li>Styled Components</li>
        <li>Emotion</li>
        <li>CSS-in-JS</li>
        <li>Global Styles</li>
        <li>Responsive Design with Media Queries</li>
        <li>CSS Frameworks (Bootstrap, Tailwind CSS)</li>
      </ul>

      <h2 style={{ color: '#555' }}>6. Performance Optimization</h2>
      <ul>
        <li>React.memo for Functional Components</li>
        <li>useCallback and useMemo Hooks</li>
        <li>Code Splitting with React.lazy and Suspense</li>
        <li>Lazy Loading Components</li>
        <li>Virtualization of Large Lists</li>
        <li>Optimizing Re-renders</li>
        <li>Server-Side Rendering (SSR) and Static Site Generation (SSG)</li>
        <li>Web Vitals and Performance Metrics</li>
      </ul>

      <h2 style={{ color: '#555' }}>7. Testing</h2>
      <ul>
        <li>Introduction to Testing in React</li>
        <li>Jest for Unit Testing</li>
        <li>React Testing Library for Component Testing</li>
        <li>Testing Hooks and Context</li>
        <li>Integration Testing</li>
        <li>Mocking API Calls with MSW</li>
        <li>Snapshot Testing</li>
        <li>Test Coverage and Best Practices</li>
      </ul>

      <h2 style={{ color: '#555' }}>8. Deployment</h2>
      <ul>
        <li>Building the React App (Production Build)</li>
        <li>Deployment Platforms (Vercel, Netlify, GitHub Pages)</li>
        <li>CI/CD Pipelines for React</li>
        <li>Environment Variables and Configuration</li>
        <li>Optimizing Build Sizes and Load Times</li>
        <li>Handling Browser Compatibility and Polyfills</li>
      </ul>

      <h2 style={{ color: '#555' }}>9. Advanced Topics</h2>
      <ul>
        <li>Custom Hooks for Advanced Patterns</li>
        <li>Context API for Deeply Nested State</li>
        <li>Higher-Order Components (HOCs)</li>
        <li>Render Props Pattern</li>
        <li>Server-Side Rendering (SSR) with Next.js</li>
        <li>Static Site Generation (SSG) with Next.js</li>
        <li>Progressive Web Apps (PWAs)</li>
        <li>GraphQL Integration with Apollo Client</li>
        <li>TypeScript with React</li>
        <li>WebAssembly with React</li>
      </ul>

      <h2 style={{ color: '#555' }}>10. Ecosystem and Tools</h2>
      <ul>
        <li>React DevTools</li>
        <li>Redux DevTools</li>
        <li>Code Quality Tools (ESLint, Prettier)</li>
        <li>TypeScript Integration</li>
        <li>GraphQL and Apollo Client</li>
        <li>Webpack and Babel Configuration</li>
        <li>Testing Utilities and Libraries</li>
        <li>State Management Libraries (Redux Toolkit, Zustand)</li>
        <li>Accessibility (a11y) Best Practices</li>
        <li>Internationalization (i18n) with React</li>
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

export default Reactsyllabus ;
