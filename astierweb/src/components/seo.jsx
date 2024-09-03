import React from 'react';
import "../css/Home.css";
import glo from "../images/glo.gif";
import contact from "../images/contact.png";
import { Link } from 'react-router-dom';

const Seo = () => {


  return (
    <div className="wrapper indent-top" style={{ marginLeft: '160px', marginRight: '30px' }}>
      <article className="grid_15 suffix_1 prefix_1 alpha">
        <h2 >SEO</h2>
        <div className="p">
          <div className="grid_5 alpha" style={{ marginRight: '30px', width: '80px', border: '0' }}>
            <figure className="img-indent-bot-1" style={{ height: '80px', width: '70px', border: '0', paddingTop: '10px', paddingBottom: '10px' }}>
              <img src={glo} alt="glo" style={{ border: 'none', marginLeft: '10px', height: "90px" }} />
            </figure>
          </div>

          <div id="left_column">
            <h1>Search Engine Optimization | SEO Services</h1>
            <p>
              In plain terms, <b>Search Engine Optimization (SEO)</b> is the process of making the website rank higher on search engine results pages (SERPs) so as to get maximum free or organic traffic. In today’s time, SEO is the buzzword. Every website owner needs his/her website or blog to rank higher in search engines in order to get maximum attention of the online population. The question is why you need <b>SEO Services?</b>
            </p>
            <p>
              Maximum online visitors find website via search engines and the most prominent search engine among them is Google. Doing the business online expands the area of your operation, in other words you have no geographical limit to do the business. But, there are many more businesses similar to yours in your country and worldwide. So how will people know about you? They will search for the products and services you are offering. In doing so, if your website does not appear on the first page, you will never get the required attention and hence people will never know about you. Moreover, it has been derived from the researches that most of us just click the top 3-4 results and if we don’t find the required result, we refine our search.
            </p>
            <p>
              Therefore, it is very important for you to be on top for your target business or else your online presence will never be detected. This is the reason why you need <b>SEO Services.</b>
            </p>
            <p>
              Our <b>SEO services</b> are tailored to suit any of your needs and the plans are fully customizable. We don’t say that we provide <b>SEO services</b>, but we term it as lead generation services targeted towards generating required prospects for your business.
            </p>
            <p>
              Our <b>SEO services</b> Package Includes:
            </p>
            <h2>Keyword Research</h2>
            <p>
              Keyword research is the most indispensable part of any <b>SEO campaign.</b> SEO Workgroup makes sure to invest major portion of the optimization process into the selection of relevant keywords for a website <b>SEO campaign.</b> In order to do so, we have adequate resources both in terms of man-power and tools.
            </p>
            <h2>Content Creation</h2>
            <p>
              At SEO Workgroup, we strongly believe that 'Content is king'. A good copy of content is not only required for search engines but is also quite necessary for human visitors. For a good <b>seo campaign</b>, we need more content to be created for pages that focus on keywords that we choose.
            </p>
            <h2>Optimizing Website Content and Architecture</h2>
            <p>
              Proper on page optimization of the content of the website would require things like - like title tag optimization, meta description creation, meta keywords, heading display, using alt tags, content optimization, better internal keyword focused navigation and content preparation.
            </p>
            <h2>Link Building</h2>
            <p>
              Link building is yet another important process in the optimization of the website. More the number of quality backlinks you have, the better the rankings as well as PageRank you achieve. These links shall be a mix of the following
            </p>
            <ul className="left">
              <li style={{ margin: '5px 0px' }}>&raquo; Social Book marking: Title with keyword (for anchor text link)</li>
              <li>&raquo; High PR Directory Submission</li>
              <li style={{ margin: '5px 0px' }}>&raquo; Blog Commenting</li>
            </ul>
            <ul style={{ float: 'left', paddingLeft: '30px' }}>
              <li>&raquo; Forum Posting</li>
              <li style={{ margin: '5px 0px' }}>&raquo; Classified Ads</li>
              <li style={{ margin: '5px 0px' }}>&raquo; Article directory submission</li>
            </ul>
            <br className="clear" />
            <h2>B2B SEO Services</h2>
            <p>
              This is a specialized <b>SEO service</b> for businesses targeting businesses and not the consumers.
            </p>
            <h2>Article Writing</h2>
            <p>
              It allows you to share you expertise with the rest of the online world thereby developing your authority.
            </p>
            <p>
              So, if you have any web design, seo services or social media marketing requirement or want to build killer web based application, please fill out the Contact Us form while <Link to="/contact">click here</Link> and we will get back to you promptly
            </p>
            <Link><img src={contact} style={{ float: 'right' }} alt="Contact" /></Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Seo;
