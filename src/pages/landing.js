import React from "react";
import CardWithButton from "../components/card-with-button";

const LandingPage = () => {
  return (
    <div>
      <div className="container container__section1">
        <h1 className="landing-page__title">Welcome to my Bootstrap Website</h1>
      </div>
      <div className="container container__section2">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <CardWithButton />
          </div>
          <div className="col-sm-6">
            <CardWithButton />
          </div>

          <div className="col-sm-12">
            <CardWithButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
