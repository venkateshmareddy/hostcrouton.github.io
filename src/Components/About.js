// Page with dummy content to show the use of react router.

import React from "react";
import './Styles/about.css';

const About = () => {
  return (
    <div>
    {/* Main Body of the page when on Our team Page*/}
      <main>
        <div className="Content">
          <h1 className="ContentHeading"> About us </h1>
          <h1 className="ContentHeading"> Try to get to know us Better </h1>
          <p className="ContentPara1">When you have a great story about how your product or service was built to change lives, share it.
           The "About Us" page is a great place for it to live, too.
           Good stories humanize your brand, providing context and meaning for your product.
           What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.
           </p>
           <p className="ContentPara2">Every company has a story to tell,
           so break out your storytelling skills from that random English class you took years ago
           and put them to work on your "About Us" page. Using descriptive and emotive copy and gorgeous graphics,
           an "About Us" page with a story works harder for your business than a generic one.
            </p>
        </div>
      </main>
    </div>
  );
};

export default About;
