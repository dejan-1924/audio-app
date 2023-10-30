import { ReactNode, createContext, useEffect, useState } from "react";

export interface IShopContext {
  cartItems: Array<ProductTypeAmount> | null;
  wishListItems: Array<ProductType> | null;
  getCartItems: () => Array<ProductTypeAmount> | null;
  getCartItemCount: () => number;
  addToCart: (item: ProductType) => void;
  addToWishList: (item: ProductType) => void;
  removeFromWishList: (itemId: number) => void;
  isItemInWishList: (itemId: number) => boolean;
  updateCartItemCount: (newAmount: number, productId: number) => void;
  removeFromCart: (itemId: string) => void;
  getWishListItemCount: () => number;
  getItemCountInCart: (itemId: number) => number;
  getDiffItemsInCart: () => number;
}

type ProductType = {
  id: number;
  artist_name: string;
  item_name: string;
  price: number;
  content: string;
  year: number;
  image: string;
};

type ProductTypeAmount = {
  id: number;
  artist_name: string;
  item_name: string;
  price: number;
  content: string;
  year: number;
  image: string;
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
      cartItems?.find(({ id }) => id == product.id)
        ? (existingProduct = product.id)
        : (existingProduct = -1);

      if (existingProduct !== -1) {
        const newItems = cartItems?.map((item) => {
          if (item.id === product.id) {
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
      return item.id === itemId;
    });
    newCart.splice(index, 1);

    setCartItems(newCart);
  };

  const updateCartItemCount = (newAmount: number, productId: number) => {
    const newItems = cartItems?.map((item) => {
      if (item.id === productId) {
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

  const isItemInWishList = (productId: number) => {
    var isItemInWishList;
    wishListItems?.find(({ id }) => id == productId)
      ? (isItemInWishList = true)
      : (isItemInWishList = false);
    return isItemInWishList;
  };

  const removeFromWishList = (productId: number) => {
    var newWL = [...wishListItems];
    const index = newWL?.findIndex((item) => {
      return item.id === productId;
    });
    newWL.splice(index, 1);

    setWishListItems(newWL);
  };

  const getWishListItemCount = () => {
    return wishListItems?.length > 0 ? wishListItems?.length : 0;
  };

  const getItemCountInCart = (productId: number) => {
    if (cartItems?.length > 0) {
      const cartItem = cartItems?.filter((product) => product.id === productId);

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
