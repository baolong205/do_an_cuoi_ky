import React, { createContext, useState, useContext } from "react";

// Create the OrderContext
const OrderContext = createContext();

// OrderProvider to provide the context
export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

    const addOrder = (order) => {
        const updatedOrders = [...orders, order];
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    const deleteOrder = (orderId) => {
        const updatedOrders = orders.filter((order) => order.id !== orderId);
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

// Custom hook to use the OrderContext
export const useOrderContext = () => {
    return useContext(OrderContext);
};
