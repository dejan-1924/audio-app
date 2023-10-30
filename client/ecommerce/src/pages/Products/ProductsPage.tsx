import React from "react";
import Product from "../../components/Product/Product";
import classes from "./Products.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import MenuIcon from "@mui/icons-material/Menu";
import { useGetProductsQuery } from "../../hooks/productHooks";

const ProductsPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
              {products.map((product: any) => {
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
      )}
    </>
  );
};

export default ProductsPage;
