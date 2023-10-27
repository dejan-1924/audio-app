import React from "react";
import classes from "./WishList.module.css";
import Product from "../../components/Product/Product";
import { useContext } from "react";
import { ShopContext } from "../../store/shop-store";

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

const WishListPage = () => {
  const { wishListItems, getWishListItemCount } = useContext(ShopContext);

  return (
    <div className={classes.wishList}>
      <h3 className={classes.title}>My Wishlist</h3>
      {getWishListItemCount() == 0 ? (
        <div className={classes.emptyWishList}>
          <h4>Your wishlist is empty.</h4>
        </div>
      ) : (
        wishListItems?.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              page={"wishlist"}
            ></Product>
          );
        })
      )}
    </div>
  );
};

export default WishListPage;
