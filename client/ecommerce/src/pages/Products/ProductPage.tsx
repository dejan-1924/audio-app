import React from "react";
import classes from "./ProductPage.module.css";
import { useContext } from "react";
import { ShopContext } from "../../store/shop-store";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGetProductByIdQuery } from "../../hooks/productHooks";
import { useParams } from "react-router";
import { ProductDetails } from "../../components/Product/ProductDetails";

const songs = [
  { no: "A1", title: "Song 1" },
  { no: "A2", title: "Song 2" },
  { no: "A3", title: "Song 3" },
  { no: "B1", title: "Song 4" },
  { no: "B2", title: "Song 5" },
  { no: "B3", title: "Song 6" },
];

const product = {
  _id: 2,
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

  const params = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(params.id);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className={classes.productContainer}>
            <div className={classes.leftContainer}>
              <div className={classes.imageContainer}>
                <img src={product.image} className={classes.productImage}></img>
              </div>
              <div className={classes.trackList}>
                <p>Tracklist</p>
                <div>
                  {songs.map((song) => (
                    <div className={classes.song}>
                      <p>{song.no}</p>
                      <p>{song.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={classes.productInfoPriceContainer}>
              <div className={classes.productInfoContainer}>
                <div className={classes.productInfo}>
                  <div>
                    <p className={classes.productArtist}>
                      {product.artist_name}
                    </p>
                    <p className={classes.productTitle}>
                      {product.product_name}
                    </p>
                  </div>
                  <p className={classes.productPrice}>{product.price} €</p>
                  <p
                    className={classes.productDetails}
                  >{`${product.format} | ${product.release_year}`}</p>
                  <p className={classes.productDetails}>
                    {product.description}
                  </p>
                </div>
              </div>
              <div className={classes.productActions}>
                <div>
                  <>
                    {!isItemInWishList(product._id) ? (
                      <button
                        className={classes.likeButton}
                        onClick={() => addToWishList(product)}
                      >
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                      </button>
                    ) : (
                      <button
                        className={classes.likeButton}
                        onClick={() => removeFromWishList(product._id)}
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
                      {getItemCountInCart(product._id) > 0 && (
                        <span className={classes.addToCartButtonNumber}>
                          {getItemCountInCart(product._id)}
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              </div>
              <div className={classes.detailsFS}>
                <ProductDetails
                  description={product.description}
                  productDetails
                ></ProductDetails>
              </div>
              <div className={classes.detailsPhone}>
                <ProductDetails
                  description={product.description}
                  productDetails
                  trackList
                ></ProductDetails>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
