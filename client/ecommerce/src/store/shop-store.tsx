import { ReactNode, createContext, useEffect, useState } from "react";

export interface IShopContext {
  cartItems: Array<ProductTypeAmount> | null;
  wishListItems: Array<ProductType> | null;
  getCartItems: () => Array<ProductTypeAmount> | null;
  getCartItemCount: () => number;
  addToCart: (item: ProductType) => void;
  addToWishList: (item: ProductType) => void;
  removeFromWishList: (itemId: string) => void;
  isItemInWishList: (itemId: string) => boolean;
  updateCartItemCount: (newAmount: number, productId: string) => void;
  removeFromCart: (itemId: string) => void;
  getWishListItemCount: () => number;
  getItemCountInCart: (itemId: string) => number;
  getDiffItemsInCart: () => number;
}

type ProductType = {
  _id?: string;
  product_id: string;
  product_name: string;
  artist_name: string;
  release_year: string;
  format: string;
  price: number;
  description: string;
  stock_quantity: number;
  category: string;
  genre: string;
  image: string;
  release_region: string;
};

type ProductTypeAmount = {
  _id?: string;
  product_id: string;
  product_name: string;
  artist_name: string;
  release_year: string;
  format: string;
  price: number;
  description: string;
  stock_quantity: number;
  category: string;
  genre: string;
  image: string;
  release_region: string;
  amount: number;
};

export const ShopContext = createContext<IShopContext | null>(null);

export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState<[ProductTypeAmount] | null>(null);
  const [wishListItems, setWishListItems] = useState<[ProductType] | null>(
    null
  );

  const addToCart = (product: ProductType) => {
    if (!cartItems) {
      let newCartItems = [{ ...product, amount: 1 }];
      setCartItems(newCartItems);
    } else {
      var existingProduct;
      cartItems?.find(({ _id }) => _id == product._id)
        ? (existingProduct = product._id)
        : (existingProduct = -1);

      if (existingProduct !== -1) {
        const newItems = cartItems?.map((item) => {
          if (item._id === product._id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      } else {
        let newCartItems = [...cartItems, { ...product, amount: 1 }];
        setCartItems(newCartItems);
      }
    }
  };

  const addToWishList = (product: ProductType) => {
    if (!wishListItems) {
      let newWLItems = [{ ...product }];
      setWishListItems(newWLItems);
    } else {
      let newWLItems = [...wishListItems, { ...product }];
      setWishListItems(newWLItems);
    }
  };

  const removeFromCart = (itemId: string) => {
    var newCart = [...cartItems];
    const index = newCart?.findIndex((item) => {
      return item._id === itemId;
    });
    newCart.splice(index, 1);

    setCartItems(newCart);
  };

  const updateCartItemCount = (newAmount: number, productId: string) => {
    const newItems = cartItems?.map((item) => {
      if (item._id == productId) {
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });
    setCartItems(newItems);
  };

  const getCartItemCount = () => {
    return cartItems?.length > 0 ? cartItems?.length : 0;
  };

  const getCartItems = () => {
    return cartItems;
  };

  const isItemInWishList = (productId: string) => {
    var isItemInWishList;
    wishListItems?.find(({ _id }) => _id == productId)
      ? (isItemInWishList = true)
      : (isItemInWishList = false);
    return isItemInWishList;
  };

  const removeFromWishList = (productId: string) => {
    var newWL = [...wishListItems];
    const index = newWL?.findIndex((item) => {
      return item._id === productId;
    });
    newWL.splice(index, 1);

    setWishListItems(newWL);
  };

  const getWishListItemCount = () => {
    return wishListItems?.length > 0 ? wishListItems?.length : 0;
  };

  const getItemCountInCart = (productId: string) => {
    if (cartItems?.length > 0) {
      const cartItem = cartItems?.filter((product) => product._id == productId);

      if (cartItem?.length == 0) {
        return 0;
      } else {
        console.log(cartItem[0].amount);
        return cartItem[0].amount;
      }
    } else {
      return 0;
    }
  };

  const getDiffItemsInCart = () => {
    return cartItems?.length;
  };

  const contextValue: IShopContext = {
    wishListItems,
    cartItems,
    getCartItems,
    getCartItemCount,
    addToCart,
    removeFromWishList,
    isItemInWishList,
    getWishListItemCount,
    addToWishList,
    updateCartItemCount,
    removeFromCart,
    getItemCountInCart,
    getDiffItemsInCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
