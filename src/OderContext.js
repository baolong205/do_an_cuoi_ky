import React, { createContext, useState, useContext } from "react";

// Tạo Context
const OrderContext = createContext();

// Provider
export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([
        {
            id: "101",
            customerName: "Nguyễn Văn A",
            phone: "0901234567",
            address: "123 Đường ABC, Hà Nội",
            totalAmount: 500000,
            items: [
                { name: "Sản phẩm 1", quantity: 2, price: 200000 },
                { name: "Sản phẩm 2", quantity: 1, price: 100000 },
            ],
            status: "Đang xử lý",
        },
        {
            id: "102",
            customerName: "Trần Thị B",
            phone: "0912345678",
            address: "456 Đường XYZ, TP.HCM",
            totalAmount: 300000,
            items: [{ name: "Sản phẩm 3", quantity: 3, price: 100000 }],
            status: "Hoàn thành",
        },
    ]);

    const updateOrderStatus = (id, newStatus) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <OrderContext.Provider value={{ orders, updateOrderStatus }}>
            {children}
        </OrderContext.Provider>
    );
};

// Hook để sử dụng OrderContext
export const useOrderContext = () => useContext(OrderContext);
