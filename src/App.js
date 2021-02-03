import React from "react";
import Tanya from "./images/image-tanya.jpg";
import John from "./images/image-john.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="slider">
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
            </div>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
