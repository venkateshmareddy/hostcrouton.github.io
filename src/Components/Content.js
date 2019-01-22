// Component that contains content on home page excluding header and footer
import React from "react";
import './Styles/content.css';
import {Link} from "react-router-dom"; // Normal link from react router used at discover me Text
import content from './Images/content.jpg';
import CroutonValue from './CroutonComp/CroutonValue.js';

const Content = () => {
  return (
    <div className="Content">
    {/* Top part of the content with orange background */}
      <div className="ContentPart">
        <div className="ContentPartOne">
          <h3 className="ContentPartOneQuote">a complete creative agency</h3><br/>
          <h1 className="ContentPartOneHeading">Crouton -</h1>
          <p className="ContentPartOneHeadingText">Where learning never stops.</p>
          {/* Link that routes to about us page*/}
          <Link className="ContentPartLink" to="/About">DISCOVER MORE <span className="ContentPartLinkSub"> &#8594; </span></Link>
        </div>
        {/* Image floated on the page*/}
        <img className="ContentPartImg" src={content} alt="ContentImg"/>
      </div>
      {/* Left half or top part of the content with cream background */}
      <div className="ContentMain">
        <div className="ContentMainOne">
        {/* Components that take heading and content as props and style themselves accordingly on page*/}
          <CroutonValue heading="Core Value 1 -" content="Etiam viverra consequat nibh quis elementum." />
          <CroutonValue heading="Core Value 2 -" content="Mollis ac fringilla vitae, volutpat vitae enim." />
          <CroutonValue heading="Core Value 3 -" content="Donec nec convallis nulla. Cras tortor libero." />
        </div>
        {/* Right half or lowerpart of the content with cream background*/}
        <div className="ContentMainTwo">
          <p className="ContentMainTwoText">Ut neque nisl, venenatis et iaculis a, posuere euismod sem. Vivamus
            cursus dui mi, et sagittis tellus condimentum id. Sed dapibus
            volutpat orci ac gravida. Mauris varius justo at pharetra imperdiet.
            Nulla pursus velit, mollis ac fringilla vitae, volutpat vitae enim.
          </p>
          <h1 className="ContentMainTwoHeading"> Who we are-</h1>
          <h1 className="ContentMainTwoTextTwo"> Creativity to the core.</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
