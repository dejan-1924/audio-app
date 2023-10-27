import React from "react";
import Product from "../../components/Product/Product";
import classes from "./Products.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import MenuIcon from "@mui/icons-material/Menu";
const products = [
  {
    id: 1,
    artist_name: "Alice In Chains",
    item_name: "Facelift",
    price: 30,
    content: "2LP",
    year: "2023",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/43/Alice_In_Chains-Facelift.jpg",
  },
  {
    id: 2,
    artist_name: "Alice In Chains",
    item_name: "Dirt",
    price: 35,
    content: "2LP",
    year: "2023",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg/220px-Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg",
  },
  {
    id: 3,
    artist_name: "Pearl Jam",
    item_name: "Ten",
    price: 25,
    content: "LP",
    year: "2021",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/PearlJam-Ten2.jpg/220px-PearlJam-Ten2.jpg",
  },
];

const ProductsPage = () => {
  return (
    <>
      {/*<div className={classes.info}>
        <h3>10% on top of sale </h3>
        <p className={classes.infoContent}>
          On ALL music sale items - Until Monday, Oct. 30th, 23:59 CET & only
          while stocks last
 
        <p className={classes.infoContent}>code: recdeal</p>
      </div>
       </p>*/}
      <div className={classes.products}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>Vinyl, CD & Tape</p>
          <p className={classes.itemCount}>250 Items</p>
        </div>
        <div className={classes.filtersContainer}>
          <div className={classes.orderButtonsContainer}>
            <button className={classes.orderButton}>
              <SortByAlphaIcon></SortByAlphaIcon>
            </button>
            <div className={classes.orderButtonLine}></div>
            <button className={classes.orderButton}>
              <MenuIcon></MenuIcon>
            </button>
          </div>
          <button className={classes.filterButton}>
            <TuneIcon></TuneIcon>
          </button>
        </div>
        <div className={classes.productsContainer}>
          <div className={classes.sideFilters}>Filters</div>
          <div className={classes.productList}>
            {products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  page={"products"}
                ></Product>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
