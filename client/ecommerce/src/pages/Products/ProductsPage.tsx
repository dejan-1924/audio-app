import React from "react";
import Product from "../../components/Product/Product";
import classes from "./Products.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useGetProductsBySearchQuery,
  useGetProductsQuery,
} from "../../hooks/productHooks";
import { Pagination } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../store/shop-store";
import ProductPH from "../../components/Product/ProductPH";

const ProductsPage = () => {
  const shopCtx = useContext(ShopContext);
  const { getSearchQuery, getPage, handleSetPage } = useContext(ShopContext);
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsBySearchQuery(
    getPage(),
    getSearchQuery() ? getSearchQuery() : "-1"
  );

  return (
    <>
      <div className={classes.products}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>Vinyl, CD & Tape</p>
          <p className={classes.itemCount}>{products?.totalProducts} Items</p>
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
          <div className={classes.sideFilters}>Categories</div>
          {!isLoading ? (
            <>
              <div className={classes.productList}>
                {products?.data.length > 0 ? (
                  <>
                    {products?.data.map((product: any) => {
                      return (
                        <Product
                          key={product._id}
                          product={product}
                          page={"products"}
                        ></Product>
                      );
                    })}
                    {Math.ceil(products?.totalProducts / 5) > 1 && (
                      <div className={classes.pagination}>
                        <Pagination
                          count={Math.ceil(products?.totalProducts / 5)}
                          variant="outlined"
                          shape="rounded"
                          page={getPage()}
                          onChange={(e, value) => handleSetPage(value)}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className={classes.noItemsFoundContainer}>
                    <h3>No items have been found.</h3>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
