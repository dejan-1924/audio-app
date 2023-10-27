import React from "react";
import classes from "./ProductPage.module.css";
import { useContext } from "react";
import { ShopContext } from "../../store/shop-store";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const product = {
  id: 2,
  artist_name: "Alice In Chains",
  item_name: "Dirt",
  price: 35,
  content: "2LP",
  year: "2023",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg/220px-Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg",
};

const ProductPage = () => {
  const {
    addToCart,
    updateCartItemCount,
    addToWishList,
    isItemInWishList,
    removeFromWishList,
    removeFromCart,
    getItemCountInCart,
  } = useContext(ShopContext);

  return (
    <div className={classes.productContainer}>
      <img src={product.image} className={classes.productImage}></img>
      <div className={classes.productInfoPriceContainer}>
        <div className={classes.productInfoContainer}>
          <div className={classes.productInfo}>
            <div>
              <p className={classes.productArtist}>{product.artist_name}</p>
              <p className={classes.productTitle}>{product.item_name}</p>
            </div>
            <p className={classes.productPrice}>{product.price} €</p>
            <p
              className={classes.productDetails}
            >{`${product.content} | ${product.year}`}</p>
          </div>
        </div>
        <div className={classes.productActions}>
          <div>
            <>
              {!isItemInWishList(product.id) ? (
                <button
                  className={classes.likeButton}
                  onClick={() => addToWishList(product)}
                >
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </button>
              ) : (
                <button
                  className={classes.likeButton}
                  onClick={() => removeFromWishList(product.id)}
                >
                  <FavoriteIcon></FavoriteIcon>
                </button>
              )}
            </>
          </div>
          <div className={classes.cartActions}>
            <button
              className={classes.addToCartButton}
              onClick={() => addToCart(product)}
            >
              <div className={classes.buttonContent}>
                <ShoppingCartIcon></ShoppingCartIcon>
                {getItemCountInCart(product.id) > 0 && (
                  <span className={classes.addToCartButtonNumber}>
                    {getItemCountInCart(product.id)}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
