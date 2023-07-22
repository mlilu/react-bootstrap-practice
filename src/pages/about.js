import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1> About page</h1>
      <div className="row">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.pinimg.com/originals/03/e9/67/03e967c79389c39b48f339edfda7023a.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://pbs.twimg.com/media/D__04Z5X4AExj2n.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.chzbgr.com/full/9601970688/h3BB79348/house"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className="col-sm-12">
            Studio Ghibli films are unique animated works made by Hayao
            Myazaki.The films that Miyazaki directs are entirely in his vision.
            He storyboards everything himself and uses those images as a script.
            Production begins before the boarding finishes, so no one, including
            Miyazaki, knows how the film will end. While working at Studio
            Ghibli, Miyazaki sticks to his schedule like clockwork. He arrives
            at the studio at 11 a.m. sharp and leaves at 9 p.m. He also works
            six days a week, and on his day off, he often cleans the river down
            the street from him.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
