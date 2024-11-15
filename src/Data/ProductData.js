const products = [
    {
        id: 1,
        name: 'Iphone 11',
        price: 11000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-11-trang-600x600.jpg'),
        description: 'Premium smartphone with A16 Bionic chipset.',
        rating: 4.8,
        stock: 25,
        discount: 0.1
    },
    {
        id: 2,
        name: 'Iphone 12',
        price: 11900000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-12-xanh-la-new-2-600x600.jpg'),
        description: 'Smartphone with cutting-edge features.',
        rating: 4.5,
        stock: 50,
        discount: 0
    },
    {
        id: 3,
        name: 'Iphone 13',
        price: 13500000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-13-midnight-2-600x600.jpg'),
        description: 'Smartphone with Super Retina XDR OLED.',
        rating: 4.7,
        stock: 15,
        discount: 0.05
    },
    {
        id: 4,
        name: 'Iphone 14 Plus',
        price: 24000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iPhone-14-plus-thumb-xanh-1-600x600.jpg'),
        description: 'Stylish design and improved performance.',
        rating: 4.2,
        stock: 100,
        discount: 0.2
    },
    {
        id: 5,
        name: 'Iphone 15',
        price: 25000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-15-hong-thumb-1-600x600.jpg'),
        description: 'Flagship smartphone with stunning display and performance.',
        rating: 4.6,
        stock: 30,
        discount: 0.15
    },
    {
        id: 6,
        name: 'Iphone 15 Plus',
        price: 29000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-15-plus-128gb-den-thumb-600x600.jpg'),
        description: 'Powerful and sleek, with advanced features.',
        rating: 4.9,
        stock: 20,
        discount: 0.1
    },
    {
        id: 7,
        name: 'Iphone 15 Pro Max',
        price: 34900000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-15-pro-max-black-thumbnew-600x600.jpg'),
        description: 'Large screen with impressive performance.',
        rating: 4.8,
        stock: 12,
        discount: 0
    },
    {
        id: 8,
        name: 'Iphone 16',
        price: 40000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-16-blue-600x600.png'),
        description: 'Next-gen smartphone with revolutionary features.',
        rating: 4.3,
        stock: 200,
        discount: 0.1
    },
    {
        id: 9,
        name: 'Iphone 16 Plus',
        price: 42000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-16-plus-den-2-638639096269223702-750x500.jpg'),
        description: 'Enhanced battery life and screen size.',
        rating: 4.5,
        stock: 10,
        discount: 0.05
    },
    {
        id: 10,
        name: 'Iphone 16 Pro Max',
        price: 45000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg'),
        description: 'Top-tier performance and display quality.',
        rating: 4.7,
        stock: 45,
        discount: 0.1
    },
    {
        id: 11,
        name: 'Dell Inspiron 3520',
        price: 18000000,
        category: 'Laptop',
        image: require('../assets/anh do-an/dell-inspiron-15-3520-i5-25p231-250424-020344-600x600.jpg'),
        description: 'Durable laptop with strong performance.',
        rating: 4.4,
        stock: 35,
        discount: 0
    },
    {
        id: 12,
        name: 'ASUS VivoBook 1404',
        price: 15000000,
        category: 'Laptop',
        image: require('../assets/anh do-an/asus-vivobook-x1404za-i5-nk376w-thumb-600x600.jpg'),
        description: 'Efficient, lightweight, and stylish.',
        rating: 4.6,
        stock: 70,
        discount: 0.15
    },
    {
        id: 13,
        name: 'Acer Aspire 3',
        price: 12000000,
        category: 'Laptop',
        image: require('../assets/anh do-an/acer-aspire-3-a314-42p-r3b3-r7-nxksfsv001-thumb-600x600.jpg'),
        description: 'Budget-friendly laptop with modern features.',
        rating: 4.7,
        stock: 50,
        discount: 0.1
    },
    {
        id: 14,
        name: 'Sách Python cho người mới bắt đầu',
        price: 350000,
        category: 'Books',
        image: require('../assets/anh do-an/sach-lap-trinh-cho-nguoi-moi-bat-dau.jpg'),
        description: 'Beginner-friendly book on Python programming.',
        rating: 4.8,
        stock: 100,
        discount: 0.05
    },
    {
        id: 15,
        name: 'Laptop Asus Gaming G731-VEV089T',
        price: 39990000,
        category: 'Laptop>',
        image: require('../assets/anh do-an/Laptop-Asus-Gaming-G731-VEV089T.jpg'),
        description: 'High-performance gaming laptop with advanced specs.',
        rating: 4.9,
        stock: 25,
        discount: 0.2
    },
    {
        id: 16,
        name: 'Tai nghe Bluetooth Chụp Tai Zadez GP-803B',
        price: 175000,
        category: 'Headphone',
        image: require('../assets/anh do-an/tai-nghe-bluetooth-chup-tai-zadez-gp-803-thumb-600x600.jpg'),
        description: 'Zadez GP-803B Bluetooth over-ear headphones with superior sound quality, comfortable fit, and long battery life, ideal for music lovers and gamers.',
        rating: 4.9,
        stock: 25,
        discount: 0.2
    },
    {
        id: 17,
        name: 'Laptop Dell XPS 13',
        price: 25000000,
        category: 'Laptop',
        image: require('../assets/anh do-an/dell-xps-13.jpg'),
        description: 'Compact and powerful laptop with Intel i7 processor and 16GB RAM, ideal for professionals.',
        rating: 4.8,
        stock: 30,
        discount: 0.1
    },
    {
        id: 18,
        name: 'MacBook Pro 16-inch',
        price: 45000000,
        category: 'Laptop',
        image: require('../assets/anh do-an/macbook-pro-16.jpg'),
        description: 'High-end MacBook with M1 Pro chip, perfect for heavy-duty tasks and creative work.',
        rating: 4.9,
        stock: 15,
        discount: 0.15
    },
    {
        id: 19,
        name: 'HP Spectre x360',
        price: 22000000,
        category: 'Laptop',
        image: require('../assets/anh do-an/hp-spectre-x360.jpg'),
        description: 'Versatile 2-in-1 laptop with a stunning 4K display, great for work and entertainment.',
        rating: 4.7,
        stock: 20,
        discount: 0.1
    }
];

export const filterProducts = (products, searchTerm, category) => {
    let filtered = [...products];
    if (category !== 'All') {
        filtered = filtered.filter(product => product.category === category);
    }
    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return filtered;
};

export const addToCart = (cart, product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        return cart.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        return [...cart, { ...product, quantity: 1 }];
    }
};

export const removeFromCart = (cart, productId) => {
    return cart.filter(item => item.id !== productId);
};
export const getBestSellingProducts = (products) => {
    return products
        .filter(product => product.rating >= 4.5 && product.stock > 10)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
};

export default products;
