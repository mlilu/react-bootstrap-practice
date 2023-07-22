import React from "react";

const Homepage = () => {
  return (
    <div className="container">
      <h1>Homepage</h1>
      <div className="row">
        <div className="card">
          <div className="cardBody">
            Welcome to my homepage! This is a practice website using bootstrap
            and react! Have fun learning about Studio Ghibli films in the
            process :)
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Learn More</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/about" className="card-link">
                About{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Submit Feedback</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/contact" className="card-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
