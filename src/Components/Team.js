// Page with dummy content to show the use of react router.

import React from "react";
import './Styles/Team.css';

const Team = () => {
  return (
    <div>
    {/* Main Body of the page when on Our team Page*/}
      <main>
        <div className="Content">
          <h1 className="ContentHeading"> Our Team </h1>
          <h1 className="ContentHeading"> Fake Data Below </h1>
          <p className="ContentPara1">We as a team Work together and fight together. You will have a lot of fun
          joining our team. It is to entertain people our business. We provide lot of benefits and comforts
          and in the same way expect people to come up with ideas and help us for the growth of the company.
          We as a team strive hard to improve ourselves everyday and try to become the most famous people in the world.
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

export default Team;
