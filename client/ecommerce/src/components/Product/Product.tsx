import React, { useContext } from "react";
import classes from "./styles/Product.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShopContext } from "../../store/shop-store";
import Select from "react-select";
import { useNavigate } from "react-router";

const Product = (props: any) => {
  const {
    addToCart,
    updateCartItemCount,
    addToWishList,
    isItemInWishList,
    removeFromWishList,
    removeFromCart,
    getItemCountInCart,
  } = useContext(ShopContext);
  const navigate = useNavigate();
  //Order Count Options
  let orderOptions: Array<{ value: any; label: any }> = [];
  for (let i = 1; i <= 5; i++) {
    orderOptions.push({ value: i, label: i });
  }

  const handleChangeProductAmount = (event: any, productId: number) => {
    updateCartItemCount(event.value, productId);
  };

  const navigateToProduct = (id: number) => {
    navigate(`/shop/item/${id}`);
  };

  return (
    <div className={classes.productContainer}>
      <img
        src={props.product.image}
        className={classes.productImage}
        onClick={() => {
          navigateToProduct(props.product.id);
        }}
      ></img>
      <div className={classes.productInfoPriceContainer}>
        <div className={classes.productInfoContainer}>
          <div
            className={classes.productInfo}
            onClick={() => {
              navigateToProduct(props.product.id);
            }}
          >
            <p className={classes.productArtist}>{props.product.artist_name}</p>
            <p className={classes.productTitle}>{props.product.item_name}</p>
            <p
              className={classes.productDetails}
            >{`${props.product.content} | ${props.product.year}`}</p>
          </div>
          <div className={classes.productPrice}>
            <p className={classes.productPrice}>{props.product.price}€</p>
          </div>
        </div>
        <div className={classes.productActions}>
          <div>
            {props.page == "products" && (
              <>
                {!isItemInWishList(props.product.id) ? (
                  <button
                    className={classes.likeButton}
                    onClick={() => addToWishList(props.product)}
                  >
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                  </button>
                ) : (
                  <button
                    className={classes.likeButton}
                    onClick={() => removeFromWishList(props.product.id)}
                  >
                    <FavoriteIcon></FavoriteIcon>
                  </button>
                )}
              </>
            )}
          </div>
          <div className={classes.cartActions}>
            {props.page !== "cart" ? (
              <button
                className={classes.addToCartButton}
                onClick={() => addToCart(props.product)}
              >
                <div className={classes.buttonContent}>
                  <ShoppingCartIcon></ShoppingCartIcon>
                  {getItemCountInCart(props.product.id) > 0 && (
                    <span className={classes.addToCartButtonNumber}>
                      {getItemCountInCart(props.product.id)}
                    </span>
                  )}
                </div>
              </button>
            ) : (
              <></>
            )}

            {props.page === "products" ? (
              <></>
            ) : props.page === "wishlist" ? (
              <p
                className={classes.removeItem}
                onClick={() => removeFromWishList(props.product.id)}
              >
                Remove item
              </p>
            ) : (
              <>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  defaultValue={{
                    value: props.product.amount,
                    label: props.product.amount,
                  }}
                  options={orderOptions}
                  onChange={(event: any) =>
                    handleChangeProductAmount(event, props.product.id)
                  }
                />
                <p
                  className={classes.removeItem}
                  onClick={() => {
                    removeFromCart(props.product.id);
                    addToWishList(props.product);
                  }}
                >
                  Add to Wishlist
                </p>
                <p
                  className={classes.removeItem}
                  onClick={() => removeFromCart(props.product.id)}
                >
                  Remove item
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
