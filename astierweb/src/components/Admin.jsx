import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { FaFilePdf } from 'react-icons/fa'; // For PDF icon

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  };

  const thStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    textAlign: 'left'
  };

  const tdStyle = {
    borderBottom: '1px solid #ddd',
    padding: '10px'
  };

  const trStyle = {
    backgroundColor: '#f9f9f9'
  };

  const createDownloadLink = (message) => {
    const blob = new Blob([message], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  const generatePDF = (message, index) => {
    const doc = new jsPDF();
    doc.text(message, 10, 10);
    doc.save(`message-${index}.pdf`);
  };

  const handleFileDownload = (contactId) => {
    window.open(`http://localhost:8000/file/${contactId}`, '_blank');
  };

  return (
    <div style={containerStyle}>
      <div className="wrapper indent-top">
        <center><h1>Admin Panel</h1></center>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Message</th>
              <th style={thStyle}>File</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} style={trStyle}>
                <td style={tdStyle}>{contact.title}</td>
                <td style={tdStyle}>{contact.name}</td>
                <td style={tdStyle}>{contact.email}</td>
                <td style={tdStyle}>{contact.subject}</td>
                <td style={tdStyle}>
                  <a
                    href={createDownloadLink(contact.message)}
                    download={`message-${index}.txt`}
                    style={{ color: '#007BFF', textDecoration: 'none', marginRight: '10px' }}
                  >
                    Download Message
                  </a>
                  <FaFilePdf
                    onClick={() => generatePDF(contact.message, index)}
                    style={{ cursor: 'pointer', color: '#e74c3c', fontSize: '20px' }}
                    title="Download as PDF"
                  />
                </td>
                <td style={tdStyle}>
                  {contact.file ? (
                    <button
                      onClick={() => handleFileDownload(contact._id)}
                      style={{ color: '#007BFF', textDecoration: 'none' }}
                    >
                      Download File
                    </button>
                  ) : (
                    'No file uploaded'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
