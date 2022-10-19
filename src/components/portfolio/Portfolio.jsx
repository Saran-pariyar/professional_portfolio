import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")},
    demo : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")}
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")},
    demo : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")}
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")},
    demo : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")}
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")},
    demo : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")}
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")},
    demo : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")}
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    github : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")},
    demo : () =>{ alert("this project is just for learning and doesn't contain any real demo or GH link")}
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <p  onClick={github} className="btn">
                  Github
                </p>
                <p
                  onClick={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
