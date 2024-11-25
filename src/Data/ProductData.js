const products = [
    {
        id: 1,
        name: 'Iphone 11',
        price: 11000000,
        category: 'Phone',
        image: require('../assets/anh do-an/iphone-11-trang-600x600.jpg'),
        description: 'Premium smartphone with A16 Bionic chipset.',
        rating: 2,
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
        rating: 3,
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
    },
    {
        id: 20,
        name: 'Logitech MX Keys',
        price: 2500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/logitech-mx-keys.jpg'),
        description: 'Wireless keyboard with premium build and long battery life, perfect for professionals.',
        rating: 4.8,
        stock: 30,
        discount: 0.1
    },
    {
        id: 21,
        name: 'Razer BlackWidow V3',
        price: 3200000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/razer-blackwidow-v3.jpg'),
        description: 'Mechanical gaming keyboard with RGB lighting and durable key switches.',
        rating: 4.7,
        stock: 25,
        discount: 0.15
    },
    {
        id: 22,
        name: 'Corsair K95 RGB Platinum',
        price: 4800000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/corsair-k95-rgb.jpg'),
        description: 'High-end mechanical keyboard with customizable RGB lighting and dedicated media controls.',
        rating: 4.9,
        stock: 20,
        discount: 0.2
    },
    {
        id: 23,
        name: 'SteelSeries Apex Pro',
        price: 4500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/steelseries-apex-pro.jpg'),
        description: 'Mechanical keyboard with adjustable actuation switches and RGB lighting.',
        rating: 4.8,
        stock: 18,
        discount: 0.1
    },
    {
        id: 24,
        name: 'Microsoft Sculpt Ergonomic Keyboard',
        price: 1500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/microsoft-sculpt.jpg'),
        description: 'Ergonomic wireless keyboard designed for comfort and productivity.',
        rating: 4.5,
        stock: 30,
        discount: 0.1
    },
    {
        id: 25,
        name: 'Logitech G Pro X',
        price: 3500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/logitech-g-pro-x.jpg'),
        description: 'Gaming keyboard with hot-swappable switches and RGB lighting.',
        rating: 4.8,
        stock: 22,
        discount: 0.15
    },
    {
        id: 26,
        name: 'Keychron K2 V2',
        price: 2200000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/keychron-k2-v2.jpg'),
        description: 'Wireless mechanical keyboard with customizable RGB lighting, great for both work and gaming.',
        rating: 4.7,
        stock: 28,
        discount: 0.12
    },
    {
        id: 27,
        name: 'Apple Magic Keyboard',
        price: 3500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/apple-magic-keyboard.jpg'),
        description: 'Compact wireless keyboard with a slim profile, perfect for Mac users.',
        rating: 4.6,
        stock: 25,
        discount: 0.1
    },
    {
        id: 28,
        name: 'HyperX Alloy FPS Pro',
        price: 2700000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/hyperx-alloy-fps-pro.jpg'),
        description: 'Tenkeyless mechanical keyboard designed for FPS gaming with red LED backlighting.',
        rating: 4.6,
        stock: 20,
        discount: 0.1
    },
    {
        id: 29,
        name: 'Logitech G915 TKL',
        price: 6500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/logitech-g915-tkl.jpg'),
        description: 'Low-profile mechanical gaming keyboard with wireless connectivity and RGB lighting.',
        rating: 4.8,
        stock: 18,
        discount: 0.2
    },
    {
        id: 30,
        name: 'Corsair K70 RGB MK.2',
        price: 4000000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/corsair-k70-rgb.jpg'),
        description: 'Full-size mechanical keyboard with Cherry MX switches and RGB lighting.',
        rating: 4.7,
        stock: 25,
        discount: 0.15
    },
    {
        id: 31,
        name: 'Razer Huntsman Elite',
        price: 6000000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/razer-huntsman-elite.jpg'),
        description: 'Premium gaming keyboard with opto-mechanical switches and a comfortable wrist rest.',
        rating: 4.9,
        stock: 15,
        discount: 0.2
    },
    {
        id: 32,
        name: 'SteelSeries Apex 7',
        price: 4000000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/steelseries-apex-7.jpg'),
        description: 'Mechanical gaming keyboard with OLED smart display and RGB lighting.',
        rating: 4.7,
        stock: 20,
        discount: 0.15
    },
    {
        id: 33,
        name: 'Das Keyboard 4 Professional',
        price: 4500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/das-keyboard-4.jpg'),
        description: 'High-quality mechanical keyboard with full-size layout and media controls.',
        rating: 4.8,
        stock: 18,
        discount: 0.1
    },
    {
        id: 34,
        name: 'Logitech K780 Multi-Device Wireless Keyboard',
        price: 1700000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/logitech-k780.jpg'),
        description: 'Wireless keyboard with the ability to connect to multiple devices simultaneously.',
        rating: 4.5,
        stock: 25,
        discount: 0.12
    },
    {
        id: 35,
        name: 'Keychron K6',
        price: 2000000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/keychron-k6.jpg'),
        description: 'Compact wireless mechanical keyboard with RGB backlighting, perfect for travel.',
        rating: 4.6,
        stock: 30,
        discount: 0.1
    },
    {
        id: 36,
        name: 'Razer Cynosa V2',
        price: 2000000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/razer-cynosa-v2.jpg'),
        description: 'Budget-friendly gaming keyboard with RGB lighting and quiet membrane switches.',
        rating: 4.3,
        stock: 40,
        discount: 0.05
    },
    {
        id: 37,
        name: 'Corsair K63 Wireless Mechanical Keyboard',
        price: 2800000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/corsair-k63-wireless.jpg'),
        description: 'Wireless mechanical keyboard with Cherry MX switches and compact design.',
        rating: 4.7,
        stock: 18,
        discount: 0.15
    },
    {
        id: 38,
        name: 'Logitech G413 SE',
        price: 2200000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/logitech-g413-se.jpg'),
        description: 'Affordable mechanical keyboard with red LED backlighting and Romer-G switches.',
        rating: 4.5,
        stock: 30,
        discount: 0.1
    },
    {
        id: 39,
        name: 'Razer Ornata V2',
        price: 2300000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/razer-ornata-v2.jpg'),
        description: 'Hybrid membrane-mechanical keyboard with RGB lighting and dedicated media controls.',
        rating: 4.6,
        stock: 28,
        discount: 0.1
    },
    {
        id: 40,
        name: 'Corsair K70 RGB MK.2 Low Profile',
        price: 4200000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/corsair-k70-low-profile.jpg'),
        description: 'Low-profile mechanical keyboard with RGB lighting and Cherry MX low profile switches.',
        rating: 4.8,
        stock: 15,
        discount: 0.2
    },
    {
        id: 41,
        name: 'Razer Huntsman Mini',
        price: 3500000,
        category: 'Keyboard',
        image: require('../assets/anh do-an/razer-huntsman-mini.jpg'),
        description: 'Compact 60% keyboard with opto-mechanical switches and RGB lighting.',
        rating: 4.7,
        stock: 20,
        discount: 0.1
    }
];

// Lọc sản phẩm theo từ khóa và danh mục
export const filterProducts = (products, searchTerm, category) => {
    return products.filter(product => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };
  


// Thêm sản phẩm vào giỏ hàng
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

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (cart, productId) => {
    return cart.filter(item => item.id !== productId);
};

// Lấy các sản phẩm bán chạy nhất
export const getBestSellingProducts = (products) => {
    return products
        .filter(product => product.rating >= 4.5 && product.stock > 10)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
};

// Lấy danh sách tất cả sản phẩm
export const getProducts = () => {
    return products;
};

// Thêm một sản phẩm mới
export const addProduct = (newProduct) => {
    products.push({ ...newProduct, id: Date.now() }); // Tạo ID ngẫu nhiên dựa trên thời gian
};

// Chỉnh sửa thông tin sản phẩm
export const editProduct = (id, updatedProduct) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
    }
};

// Xóa sản phẩm theo ID
export const deleteProduct = (id) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
        products.splice(index, 1); // Loại bỏ sản phẩm khỏi danh sách
    }
};


// Xuất các hàm
export default products;
