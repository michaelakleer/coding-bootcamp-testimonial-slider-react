import React, { useState } from "react";
import Tanya from "./images/image-tanya.jpg";
import John from "./images/image-john.jpg";
import Next from "./images/icon-next.svg";
import Prev from "./images/icon-prev.svg";
import "./App.css";

export default function App() {
  const [slide, setSlide] = useState();

  function displayJohn(event) {
    event.preventDefault();
    setSlide("john");
  }

  function displayTanya(event) {
    event.preventDefault();
    setSlide("tanya");
  }

  if (slide === "tanya") {
    return (
      <div className="App">
        <div className="slider">
          <section className="container">
            <div className="slideTwo">
              <div className="testimonial">
                <p className="text">
                  “ If you want to lay the best foundation possible I’d
                  recommend taking this course. The depth the instructors go
                  into is incredible. I now feel so confident about starting up
                  as a professional developer. ”
                </p>
                <p className="name">
                  John Tarkpor <span>Junior Front-end Developer</span>{" "}
                </p>
              </div>
              <div className="photo">
                <img src={John} alt="Portrait of John" className="portrait" />
              </div>
              <button className="button prev" onClick={displayJohn}>
                <img src={Prev} alt="Previous Button" />
              </button>
              <button className="button next" onClick={displayJohn}>
                <img src={Next} alt="Next Button" />
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="slider">
          <section className="container">
            <div className="slideOne">
              <div className="testimonial">
                <p className="text">
                  “ I’ve been interested in coding for a while but never taken
                  the jump, until now. I couldn’t recommend this course enough.
                  I’m now in the job of my dreams and so excited about the
                  future. ”
                </p>
                <p className="name">
                  Tanya Sinclair <span>UX Engineer</span>{" "}
                </p>
              </div>
              <div className="photo">
                <img src={Tanya} alt="Portrait of Tanya" className="portrait" />
              </div>
              <button className="button prev" onClick={displayTanya}>
                <img src={Prev} alt="Previous Button" />
              </button>
              <button className="button next" onClick={displayTanya}>
                <img src={Next} alt="Next Button" />
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
