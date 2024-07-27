import "./mainPage.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function MainPage() {
  const textAnimation = useRef();

  useEffect(() => {
    init(textAnimation.current, {
      showCursor: true,
      strings: ["Data Science", "Machine Learning", "Software Engineering"],
      backDelay: 1000,
      backSpeed: 50
    });
  }, []);
  // Pake empty array -> use effect only works 1 time

  return (
    <div className="mainPage" id="mainPage">
      <div className="left-part">
        <div className="mainImage">
          <img src="Assets/myPicture.png" alt="" />
        </div>
      </div>
      <div className="right-part">
        <div className="container">
          <h2>Hello! I'm</h2>
          <h1>Nathanael Jeffrey</h1>
          <p>
            7th-semester college student majoring in computer science and
            mathematics with deep interest in technologies developement
          </p>
          <h3>
            I'm interested in <span ref={textAnimation}></span>
          </h3>
        </div>
        <a href="#project">
          <img src="Assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
