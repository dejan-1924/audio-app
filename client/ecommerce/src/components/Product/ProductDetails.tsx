import React from "react";
import { useState } from "react";
import classes from "./styles/ProductDetails.module.css";

export const ProductDetails = (props: any) => {
  const [trackList, setTrackList] = useState(false);
  const [productDetails, setProductDetails] = useState(false);
  const [desc, setDesc] = useState(true);

  return (
    <div className={classes.productDetails}>
      {props.description && (
        <>
          <div
            className={classes.productDetail}
            onClick={() => {
              setDesc(!desc);
            }}
          >
            Description
          </div>
          {desc && (
            <div className={classes.openProductDetail}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                laudantium consequuntur. Repellendus recusandae inventore neque.
                Suscipit iure eligendi excepturi iusto maiores incidunt modi non
                voluptatibus voluptates autem aspernatur quam porro et
                dignissimos sunt perspiciatis iste doloribus, optio cum
                cupiditate tenetur amet? Iusto molestias corrupti doloremque rem
                veritatis quis quasi labore velit. Expedita aliquam aspernatur
                assumenda nobis consequatur dolorum perspiciatis dolore suscipit
                esse obcaecati accusantium deserunt minima quos et vero incidunt
                ipsam exercitationem, ea eveniet eaque impedit itaque vel.
                Asperiores optio cupiditate adipisci assumenda eos, vitae dolor
              </p>
            </div>
          )}
        </>
      )}
      {props.trackList && (
        <div
          className={classes.productDetail}
          onClick={() => {
            setTrackList(!trackList);
          }}
        >
          Tracklist
        </div>
      )}
      {props.productDetails && (
        <div
          className={classes.productDetail}
          onClick={() => {
            setProductDetails(!productDetails);
          }}
        >
          Product Details
        </div>
      )}
    </div>
  );
};
