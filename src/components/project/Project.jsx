import { useState } from "react";
import "./project.scss";

export default function Project() {

    const [currSlider, setCurrSlider] = useState(0);
  const projectData = [
    {
      id: "1",
      logo: "./Assets/phoodtoLogo.png",
      title: "Phoodto",
      description:
        "Mobile based application that takes advantage of Machine Learning to detect whether a food is safe or not to eat for person with food allergies",
      image: "./Assets/phoodtoHomepage.png",
      alt_title: "Phoodto Logo",
      alt_image: "Phoodto Homepage",
    },
    {
      id: "2",
      logo: "./Assets/senseLogo.png",
      title: "Sense",
      description:
        "Mobile based application for travellers to book a place to stay during vacation, embedded with Machine Learning to search location by image",
      image: "./Assets/senseIntropage.png",
      alt_title: "Sense Logo",
      alt_image: "Sense Homepage",
    },
    {
      id: "3",
      logo: "./Assets/budayaLogo.png",
      title: "Budaya",
      description:
        "Web-based application to help Micro, Small, and Medium Enterprises (MSME) in Indonesia",
      image: "./Assets/budayaHomepage.jpg",
      alt_title: "Budaya Logo",
      alt_image: "Budaya Homepage",
    },
  ];

  const clickHandler = (dir) => {
      dir === "left" ? setCurrSlider(currSlider > 0 ? currSlider - 1 : 2) :
      setCurrSlider(currSlider < projectData.length - 1 ? currSlider + 1 : 0);
  }

  return (
    <div className="project" id="project">
      <div className="slider" style={{transform: `translateX(-${currSlider * 100}vw)`}}>
        {projectData.map((item) => (
          <div className="container">
            <div className="items">
              <div className="left-item">
                <div className="left-container">
                  <div className="left-image">
                    <img src={item.logo} alt={item.alt_title} />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span><a href="./Assets/Resume.pdf" download>Download CV</a></span>
                </div>
              </div>
              <div className="right-item">
                <img src={item.image} alt={item.alt_image} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="Assets/arrow.png" alt="Arrow Left" className="arrow left" onClick={() => clickHandler("left")}/>
      <img src="Assets/arrow.png" alt="Arrow Right" className="arrow right" onClick={() => clickHandler()}/>
    </div>
  );
}
