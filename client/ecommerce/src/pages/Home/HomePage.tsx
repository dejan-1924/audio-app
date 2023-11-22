import React from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <div className={classes.imagesContainer}>
        <div
          className={classes.imageContainer}
          onClick={() => {
            navigate("/shop");
          }}
        >
          <button className={classes.imageButton}>Records</button>
          <img
            className={classes.image}
            src="https://media.wired.com/photos/646540bddaed59ebbf460999/1:1/w_1558,h_1558,c_limit/Where%20to%20Buy%20Vinyl%20Online%20Gear%20GettyImages-1395337634.jpg"
          ></img>
        </div>
        <div className={classes.imageContainer}>
          <button className={classes.imageButton}>Clothing</button>
          <img
            className={classes.image}
            src="https://i.pinimg.com/originals/e2/a5/5f/e2a55f6a2883c31bcff107b234eb5443.png"
          ></img>
        </div>
      </div>
      <div className={classes.paragraph}>
        <p className={classes.paragraphMainTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          cum
        </p>
        <div className={classes.subParagraph}>
          <p className={classes.paragraphTitle}>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            consequuntur consequatur aliquid earum corrupti veniam aliquam
            ullam, incidunt nam fugit neque dolor! Aliquam est laudantium neque
            assumenda cumque fuga hic molestiae. Aliquam itaque architecto sequi
            neque culpa? Qui ab modi ex architecto excepturi quaerat
            reprehenderit velit nostrum commodi officia, cumque iste ad
            obcaecati. Veniam eveniet quam distinctio corrupti nisi magnam
            quidem laudantium consequatur expedita dolorem eius officiis
            dignissimos iure ut quo molestiae, ullam modi repellendus error
            aliquam quos ipsum officia ea ipsa. Quod pariatur dicta, non, ea sed
            dolores consectetur illo, asperiores praesentium aperiam
            necessitatibus enim quae repellat tempore molestiae?
          </p>
        </div>
        <div className={classes.subParagraph}>
          <p className={classes.paragraphTitle}>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            consequuntur consequatur aliquid earum corrupti veniam aliquam
            ullam, incidunt nam fugit neque dolor! Aliquam est laudantium neque
            assumenda cumque fuga hic molestiae. Aliquam itaque architecto sequi
            neque culpa? Qui ab modi ex architecto excepturi quaerat
            reprehenderit velit nostrum commodi officia, cumque iste ad
            obcaecati. Veniam eveniet quam distinctio corrupti nisi magnam
            quidem laudantium consequatur expedita dolorem eius officiis
            dignissimos iure ut quo molestiae, ullam modi repellendus error
            aliquam quos ipsum officia ea ipsa. Quod pariatur dicta, non, ea sed
            dolores consectetur illo, asperiores praesentium aperiam
            necessitatibus enim quae repellat tempore molestiae?
          </p>
        </div>
        <div className={classes.subParagraph}>
          <p className={classes.paragraphTitle}>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            consequuntur consequatur aliquid earum corrupti veniam aliquam
            ullam, incidunt nam fugit neque dolor! Aliquam est laudantium neque
            assumenda cumque fuga hic molestiae. Aliquam itaque architecto sequi
            neque culpa? Qui ab modi ex architecto excepturi quaerat
            reprehenderit velit nostrum commodi officia, cumque iste ad
            obcaecati. Veniam eveniet quam distinctio corrupti nisi magnam
            quidem laudantium consequatur expedita dolorem eius officiis
            dignissimos iure ut quo molestiae, ullam modi repellendus error
            aliquam quos ipsum officia ea ipsa. Quod pariatur dicta, non, ea sed
            dolores consectetur illo, asperiores praesentium aperiam
            necessitatibus enim quae repellat tempore molestiae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
