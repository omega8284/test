import React from 'react';
import car from '../images/career.jpg';
import "../css/Home.css";

const Career = () => {


    return (
        <div>
            <div className="wrapper indent-top">
                <article className="grid_23 prefix_1 alpha omega" style={{ marginLeft: '100px', paddingLeft: '10px', paddingRight: '100px' }}>
                <div id="colone">
                <h1 style={{ borderBottom: 'none', marginLeft: '450px', color: '#6699CC', fontSize: '24px', padding: '0', }}>CAREERS</h1>
                </div>
                <p>
                    <img border="0" src={car} width="515" height="274" style={{marginTop: "50px"}}/></p>
                    <p style={{margin: "0 0 15px", color: "#333"}}>
                        IT experts of ASTIER Informatics
                        are working in popular IT cities of India as well as in different countries. ASTIER Informatics
                        provides opportunity to any body to find the destination across technologies.
                        Since ASTIER informatics has professional contacts with various leading
                        enterprises, we have big opportunity to be a part of IT industry.
                        </p>
                        <p style={{fontWeight: "bold", color: "red", marginBottom: "0px"}}>
                        Requisite&nbsp; Academic&nbsp; Conditions
                        </p>
                    <p style={{margin: "0 0 0", color: "#333"}}>
                        ASTIER always appreciates
                        those candidates who are strong at conceptual level. ASTIER has predefined
                        policy in two folds, Experienced with specific domain are not honed for
                        their relative academic merits but fresher candidates are strategically
                        tested for their relative academic and other curriculum activities. Fresher
                        candidates who secure more than 70 percentile throughout the academic
                        carrier&nbsp; without any academic break even in semester pattern, may post
                        their resume to us. Engineering students of any stream and experienced
                        professionals may contact to adorn their career. Fresher candidates are
                        recruited, trained and appointed in ASTIER Informatics as well as at
                        different alliance companies.
                        </p>
                </article>
            </div>
        </div>
    );
};

export default Career;
