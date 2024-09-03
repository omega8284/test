import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    fetch('http://localhost:8000/submit', {
      method: 'POST',
      body: formDataObj
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      if (data.success) {
        setSuccess('Form submitted successfully!');
        setFormData({
          title: '',
          name: '',
          email: '',
          subject: '',
          message: '',
          file: null
        });
      } else {
        setError('Submission failed. Please try again.');
      }
    })
    .catch(error => {
      setLoading(false);
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const mapStyle = {
    flex: '1 1 50%',
    maxWidth: '600px',
    minWidth: '300px',
    marginRight: '20px'
  };

  const formStyle = {
    flex: '1 1 50%',
    maxWidth: '600px',
    minWidth: '300px'
  };

  const labelStyle = {
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '100%'
  };

  const textareaStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    height: '100px',
    width: '100%'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer'
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none'
  };

  return (
    <div>
      <div className="wrapper indent-top">
        <article className="grid_7 suffix_1 prefix_1 alpha">
          <h2>Contact info:</h2>
          <div className="map-container img-box">
            <iframe
              title="Google Maps Location"
              width="600"
              height="450"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3667.871763057161!2d75.7840825!3d23.17488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396375e8e7bdba83%3A0x36425fc8ef465887!2sOmega%20College%20Of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1718179606257!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <small>
              View{' '}
              <a
                href="https://www.google.com/maps/place/Omega+College+Of+Professional+Studies/@23.17488,75.7840825,17z/data=!4m14!1m7!3m6!1s0x396375e8e7bdba83:0x36425fc8ef465887!2sOmega+College+Of+Professional+Studies!8m2!3d23.1748751!4d75.7866574!16s%2Fg%2F11j73lq149!3m5!1s0x396375e8e7bdba83:0x36425fc8ef465887!8m2!3d23.1748751!4d75.7866574!16s%2Fg%2F11j73lq149?entry=ttu"
                style={{ color: '#0000FF', textAlign: 'left' }}
              >
                astier
              </a>{' '}
              in a larger map
            </small>
          </div>
          <strong className="str-4">Point</strong>
          <dl className="adress">
            <dt>ASTIER INFORMATICS PVT. LTD.<br />83/17/03,Omega Campus, vishnupura, Ujjain (m.p.)</dt>
            <dd>
              <span>Telephone:</span>
              <strong> 0734 2525728</strong>
            </dd>
            <dd>
              <span>Fax:</span>
              <strong>0734 2555662</strong>
            </dd>
            <dd>
              <span>Email:</span>
              <a href="mailto:info@astier.in">info@astier.in</a>
            </dd>
          </dl>
        </article>
        <article className="grid_7 suffix_1 prefix_1 alpha">
          <h2 style={{ marginLeft: '100px',}}>Contact form:</h2>
          <table style={{ marginLeft: '100px' }} cellSpacing="0" cellPadding="0" border="0">
            <tbody>
              <tr>
                <td width="419">
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>
                      Title:
                      <select name="title" value={formData.title} onChange={handleChange} style={inputStyle}>
                        <option value="">Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </label>
                    <label style={labelStyle}>
                      Name:
                      <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      E-Mail:
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      Subject:
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      Message:
                      <textarea name="message" value={formData.message} onChange={handleChange} required style={textareaStyle} />
                    </label>
                    <label style={labelStyle}>
                      File:
                      <input type="file" name="file" onChange={handleChange} style={inputStyle} />
                    </label>
                    <button type="submit" style={buttonStyle}>
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                  </form>
                  <Link to="/login" style={linkStyle}>Admin Panel</Link>
                </td>
              </tr>
              <tr>
                <td height="88" align="center"></td>
              </tr>
            </tbody>
          </table>
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
                        <li><Link to="/java">Java <Link to="/j2se">(J2SE / <Link to="/j2ee">J2EE</Link>)</Link></Link></li>
                        <li><Link to="/react">React / <Link to="/node">Node JS</Link></Link></li>
                      </ul>
                    </article>
                    <article className="grid_5">
                      <ul className="list-1">
                        <li style={{ marginTop: "5px", fontSize: "11px", color: "#82a9b5" }}><Link to="/angular">Angular JS</Link></li>
                        <li><Link to="">.NET <Link to="/csharp">(C# / VB / <Link to="/asp">ASP</Link>)</Link></Link></li>
                        <li><Link to="/web-hosting">Web Hosting</Link></li>
                        <li><Link to="/web-designing">Web Designing</Link></li>
                      </ul>
                    </article>
                    <article className="grid_5">
                      <ul className="list-1">
                        <li style={{ marginTop: "5px", fontSize: "11px", color: "#82a9b5" }}><Link to="/android">Android</Link></li>
                        <li><Link to="/mlai">Machine Learning / AI</Link></li>
                        <li><Link to="/arduino">Arduino IoT</Link></li>
                        <li><Link to="/courses">All Courses</Link></li>
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
                      <span>(Manager)</span>
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

export default Contact;

