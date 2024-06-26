import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (productId) => {
        setCart((prevCart) => {
            if (!prevCart.includes(productId)) {
                return [...prevCart, productId];
            }
            return prevCart;
        });
    };

    const removeFromCart = (productId) => {
        console.log(productId);
        setCart((prevCart) => prevCart.filter((id) => id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
