import React, { useState, useEffect } from "react";
import {trusted} from "../data";
import   './trustedBy.css'


const TrustedBy = () => {
    const [people] = useState(trusted);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);



      return (
        <section className="section">

          <div className="title">
                <h4 className="main__title">TRUSTED BY</h4>
          </div>

        <div className="section-center">
            {people.map((item, indexPeople) => {
            const { id, image, name} = item;
            let position = "nextSlide";
            if (indexPeople === index) {
                position = "activeSlide";
            }
            if (
                indexPeople === index - 1 ||
                (index === 0 && indexPeople === people.length - 1)
            ) {
                position = "lastSlide";
            }

            return (
            
            <article className= {position} key={id}>

            <div className="article__wrapper">
              <img src={image} alt={name} className="person-img" />
              <h4 className="article__name">{name}</h4>
            </div>

          </article>
            );
            })}

            <button className="prev" onClick={() => setIndex(index - 1)}>
                  <i className="fas fa-arrow-left" />
             </button>

            <button className="next" onClick={() => setIndex(index + 1)}>
                  <i className="fas fa-arrow-right" />
            </button>

        </div>
        </section>
  );
};

export default TrustedBy;