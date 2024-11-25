const products = [
    {
      id: 1,
      name: "Iphone 11",
      price: 11000000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-11-trang-600x600.jpg"),
      description: "Điện thoại cao cấp với chip A16 Bionic.",
      rating: 2,
      stock: 25,
      discount: 0.1,
    },
    {
      id: 2,
      name: "Iphone 12",
      price: 11900000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-12-xanh-la-new-2-600x600.jpg"),
      description: "Điện thoại thông minh với các tính năng hiện đại.",
      rating: 3,
      stock: 50,
      discount: 0,
    },
    {
      id: 3,
      name: "Iphone 13",
      price: 13500000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-13-midnight-2-600x600.jpg"),
      description: "Điện thoại với màn hình Super Retina XDR OLED.",
      rating: 4.7,
      stock: 15,
      discount: 0.05,
    },
    {
      id: 4,
      name: "Iphone 14 Plus",
      price: 24000000,
      category: "Phone",
      image: require("../assets/anh do-an/iPhone-14-plus-thumb-xanh-1-600x600.jpg"),
      description: "Thiết kế sang trọng và hiệu suất cải tiến.",
      rating: 4.2,
      stock: 100,
      discount: 0.2,
    },
    {
      id: 5,
      name: "Iphone 15",
      price: 25000000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-15-hong-thumb-1-600x600.jpg"),
      description: "Điện thoại flagship với màn hình và hiệu suất tuyệt vời.",
      rating: 4.6,
      stock: 30,
      discount: 0.15,
    },
    {
      id: 6,
      name: "Iphone 15 Plus",
      price: 29000000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-15-plus-128gb-den-thumb-600x600.jpg"),
      description: "Mạnh mẽ và tinh tế, với các tính năng tiên tiến.",
      rating: 4.9,
      stock: 20,
      discount: 0.1,
    },
    {
      id: 7,
      name: "Iphone 15 Pro Max",
      price: 34900000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-15-pro-max-black-thumbnew-600x600.jpg"),
      description: "Màn hình lớn với hiệu suất ấn tượng.",
      rating: 4.8,
      stock: 12,
      discount: 0,
    },
    {
      id: 8,
      name: "Iphone 16",
      price: 40000000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-16-blue-600x600.png"),
      description: "Điện thoại thế hệ tiếp theo với những tính năng cách mạng.",
      rating: 4.3,
      stock: 200,
      discount: 0.1,
    },
    {
      id: 9,
      name: "Iphone 16 Plus",
      price: 42000000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-16-plus-den-2-638639096269223702-750x500.jpg"),
      description: "Thời gian sử dụng pin lâu hơn và kích thước màn hình lớn hơn.",
      rating: 4.5,
      stock: 10,
      discount: 0.05,
    },
    {
      id: 10,
      name: "Iphone 16 Pro Max",
      price: 45000000,
      category: "Phone",
      image: require("../assets/anh do-an/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg"),
      description: "Hiệu suất và chất lượng màn hình hàng đầu.",
      rating: 4.7,
      stock: 45,
      discount: 0.1,
    },
    {
      id: 11,
      name: "Dell Inspiron 3520",
      price: 18000000,
      category: "Laptop",
      image: require("../assets/anh do-an/dell-inspiron-15-3520-i5-25p231-250424-020344-600x600.jpg"),
      description: "Laptop bền bỉ với hiệu suất mạnh mẽ.",
      rating: 4.4,
      stock: 35,
      discount: 0,
    },
    {
      id: 12,
      name: "ASUS VivoBook 1404",
      price: 15000000,
      category: "Laptop",
      image: require("../assets/anh do-an/asus-vivobook-x1404za-i5-nk376w-thumb-600x600.jpg"),
      description: "Hiệu quả, nhẹ nhàng và phong cách.",
      rating: 4.6,
      stock: 70,
      discount: 0.15,
    },
    {
      id: 13,
      name: "Acer Aspire 3",
      price: 12000000,
      category: "Laptop",
      image: require("../assets/anh do-an/acer-aspire-3-a314-42p-r3b3-r7-nxksfsv001-thumb-600x600.jpg"),
      description: "Laptop giá rẻ với các tính năng hiện đại.",
      rating: 4.7,
      stock: 50,
      discount: 0.1,
    },
    {
      id: 14,
      name: "Sách Python cho người mới bắt đầu",
      price: 350000,
      category: "Books",
      image: require("../assets/anh do-an/sach-lap-trinh-cho-nguoi-moi-bat-dau.jpg"),
      description: "Cuốn sách dành cho người mới bắt đầu học lập trình Python.",
      rating: 4.8,
      stock: 100,
      discount: 0.05,
    },
    {
      id: 15,
      name: "Laptop Asus Gaming G731-VEV089T",
      price: 39990000,
      category: "Laptop",
      image: require("../assets/anh do-an/Laptop-Asus-Gaming-G731-VEV089T.jpg"),
      description: "Laptop chơi game hiệu suất cao với các thông số kỹ thuật tiên tiến.",
      rating: 4.9,
      stock: 25,
      discount: 0.2,
    },
    {
      id: 16,
      name: "Tai nghe Bluetooth Chụp Tai Zadez GP-803B",
      price: 175000,
      category: "Headphone",
      image: require("../assets/anh do-an/tai-nghe-bluetooth-chup-tai-zadez-gp-803-thumb-600x600.jpg"),
      description:
        "Tai nghe Bluetooth Zadez GP-803B chụp tai với chất lượng âm thanh tuyệt vời, vừa vặn thoải mái và thời gian sử dụng lâu, lý tưởng cho người yêu nhạc và game thủ.",
      rating: 4.9,
      stock: 25,
      discount: 0.2,
    },
    {
      id: 17,
      name: "Laptop Dell XPS 13",
      price: 25000000,
      category: "Laptop",
      image: require("../assets/anh do-an/dell-xps-13.jpg"),
      description:
        "Laptop nhỏ gọn và mạnh mẽ với bộ vi xử lý Intel i7 và 16GB RAM, lý tưởng cho các chuyên gia.",
      rating: 4.8,
      stock: 30,
      discount: 0.1,
    },
    {
      id: 18,
      name: "MacBook Pro 16-inch",
      price: 45000000,
      category: "Laptop",
      image: require("../assets/anh do-an/macbook-pro-16.jpg"),
      description:
        "MacBook cao cấp với chip M1 Pro, hoàn hảo cho các công việc nặng và sáng tạo.",
      rating: 4.9,
      stock: 15,
      discount: 0.15,
    },
    {
      id: 19,
      name: "HP Spectre x360",
      price: 22000000,
      category: "Laptop",
      image: require("../assets/anh do-an/hp-spectre-x360.jpg"),
      description:
        "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
      rating: 4.7,
      stock: 20,
      discount: 0.1,
    },
    {
      id: 20,
      name: "Logitech MX Keys",
      price: 2500000,
      category: "Keyboard",
      image: require("../assets/anh do-an/logitech-mx-keys.jpg"),
      description: "Bàn phím cơ học cao cấp với đèn nền và khả năng kết nối đa thiết bị.",
      rating: 4.8,
      stock: 50,
      discount: 0.05,
    },
  ];
  
// Lọc sản phẩm theo từ khóa và danh mục
export const filterProducts = (products, searchTerm, category) => {
  return products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};

// Thêm sản phẩm vào giỏ hàng
export const addToCart = (cart, product) => {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cart, { ...product, quantity: 1 }];
  }
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (cart, productId) => {
  return cart.filter((item) => item.id !== productId);
};

// Lấy các sản phẩm bán chạy nhất
export const getBestSellingProducts = (products) => {
  return products
    .filter((product) => product.rating >= 4.5 && product.stock > 10)
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
