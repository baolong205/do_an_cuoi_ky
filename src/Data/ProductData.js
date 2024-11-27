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
    rating: 5.0,
    stock: 200,
    discount: 0.1,
  },
  {
    id: 9,
    name: "Iphone 16 Plus",
    price: 42000000,
    category: "Phone",
    image: require("../assets/anh do-an/iphone-16-plus-den-2-638639096269223702-750x500.jpg"),
    description:
      "Thời gian sử dụng pin lâu hơn và kích thước màn hình lớn hơn.",
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
    rating: 5.0,
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
    brand: "Dell",
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
    brand: "ASUS",
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
    brand: "Acer",
  },

  {
    id: 15,
    name: "Laptop Asus Gaming G731-VEV089T",
    price: 39990000,
    category: "Laptop",
    image: require("../assets/anh do-an/Laptop-Asus-Gaming-G731-VEV089T.jpg"),
    description:
      "Laptop chơi game hiệu suất cao với các thông số kỹ thuật tiên tiến.",
    rating: 4.9,
    stock: 25,
    discount: 0.2,
    brand: "ASUS",
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
    brand: "Dell",
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
    brand: "APPLE",
  },
  {
    id: 19,
    name: "Acer Asprie Lite 14",
    price: 182000000,
    category: "Laptop",
    image: require("../assets/Laptop/acer-aspire-lite-14-51m-59bn-i5-nxktxsv001-glr-2-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Acer",
  },
  {
    id: 20,
    name: "Logitech MX Keys",
    price: 2500000,
    category: "Keyboard",
    brand: "Logitech",
    image: require("../assets/anh do-an/logitech-mx-keys.jpg"),
    description:
      "Bàn phím cơ học cao cấp với đèn nền và khả năng kết nối đa thiết bị.",
    rating: 4.8,
    stock: 50,
    discount: 0.05,
  },
  {
    id: 21,
    name: "Razer BlackWidow V3",
    price: 3200000,
    category: "Keyboard",
    brand: "Razer",
    image: require("../assets/anh do-an/razer-blackwidow-v3.jpg"),
    description:
      "Mechanical gaming keyboard with RGB lighting and durable key switches.",
    rating: 4.5,
    stock: 25,
    discount: 0.15,
  },
  {
    id: 22,
    name: "Corsair K95 RGB Platinum",
    price: 4800000,
    category: "Keyboard",
    brand: "Corsair",
    image: require("../assets/anh do-an/corsair-k95-rgb.jpg"),
    description:
      "High-end mechanical keyboard with customizable RGB lighting and dedicated media controls.",
    rating: 4.9,
    stock: 20,
    discount: 0.2,
  },
  {
    id: 23,
    name: "SteelSeries Apex Pro",
    price: 4500000,
    category: "Keyboard",
    brand: "SteelSeries",
    image: require("../assets/anh do-an/steelseries-apex-pro.jpg"),
    description:
      "Mechanical keyboard with adjustable actuation switches and RGB lighting.",
    rating: 4.8,
    stock: 18,
    discount: 0.1,
  },
  {
    id: 24,
    name: "Microsoft Sculpt Ergonomic Keyboard",
    price: 1500000,
    category: "Keyboard",
    brand: "Microsoft",
    image: require("../assets/anh do-an/microsoft-sculpt.jpg"),
    description:
      "Ergonomic wireless keyboard designed for comfort and productivity.",
    rating: 4.5,
    stock: 30,
    discount: 0.1,
  },
  {
    id: 25,
    name: "Logitech G Pro X",
    price: 3500000,
    category: "Keyboard",
    brand: "Logitech",
    image: require("../assets/anh do-an/logitech-g-pro-x.jpg"),
    description:
      "Gaming keyboard with hot-swappable switches and RGB lighting.",
    rating: 4.8,
    stock: 22,
    discount: 0.15,
  },
  {
    id: 26,
    name: "Keychron K2 V2",
    price: 2200000,
    category: "Keyboard",
    brand: "Keychron",
    image: require("../assets/anh do-an/keychron-k2-v2.jpg"),
    description:
      "Wireless mechanical keyboard with customizable RGB lighting, great for both work and gaming.",
    rating: 4.0,
    stock: 28,
    discount: 0.12,
  },
  {
    id: 27,
    name: "Apple Magic Keyboard",
    price: 3500000,
    category: "Keyboard",
    brand: "Apple",
    image: require("../assets/anh do-an/apple-magic-keyboard.jpg"),
    description:
      "Compact wireless keyboard with a slim profile, perfect for Mac users.",
    rating: 4.6,
    stock: 25,
    discount: 0.1,
  },
  {
    id: 28,
    name: "HyperX Alloy FPS Pro",
    price: 2700000,
    category: "Keyboard",
    brand: "HyperX",
    image: require("../assets/anh do-an/hyperx-alloy-fps-pro.jpg"),
    description:
      "Tenkeyless mechanical keyboard designed for FPS gaming with red LED backlighting.",
    rating: 4.6,
    stock: 20,
    discount: 0.1,
  },
  {
    id: 29,
    name: "Logitech G915 TKL",
    price: 6500000,
    category: "Keyboard",
    brand: "Logitech",
    image: require("../assets/anh do-an/logitech-g915-tkl.jpg"),
    description:
      "Low-profile mechanical gaming keyboard with wireless connectivity and RGB lighting.",
    rating: 4.8,
    stock: 18,
    discount: 0.2,
  },
  {
    id: 42,
    name: "ASUS ROG Strix Scope",
    price: 3200000,
    category: "Keyboard",
    brand: "ASUS",
    image: require("../assets/anh do-an/asus-rog-strix-scope.jpg"),
    description:
      "Gaming keyboard with extended Ctrl key and RGB lighting for FPS gamers.",
    rating: 5.0,
    stock: 13,
    discount: 0.07,
  },
  {
    id: 43,
    name: "Acer Asprire 7",
    price: 25000000,
    category: "Laptop",
    image: require("../assets/Laptop/LaptopAcer Aspire 7.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Acer",
  },
  {
    id: 44,
    name: "Acer Nitro AN515",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/acer-nitro-an515-58-773y-i7-12700h-nhqfksv00116g-2-638603105924516989-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Acer",
  },
  {
    id: 45,
    name: "Asus TUF Gaming A15",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/asus-tuf-gaming-a15-fa506nf-r5-hn012w-glr-2-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "ASUS",
  },
  {
    id: 46,
    name: "Asus Vivobook",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/asus-vivobook-k3605zf-i5-rp745w-glr-2-638611359324594835-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "ASUS",
  },
  {
    id: 47,
    name: "HP 15",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/hp-15-fd0303tu-i3-a2nl4pa-glr-2-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Dell",
  },
  {
    id: 48,
    name: "HP Pavilion",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/hp-pavilion-x360-14-ek2024tu-core-5-9z2v6pa-glr-2-638611372375476285-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Dell",
  },
  {
    id: 49,
    name: "Lenovo Ideapad Slim 3",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn-12-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Lenovo",
  },
  {
    id: 50,
    name: "Macbook Air 13",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/macbook-air-13-inch-m3-16gb-256gb-8gpu-011124-123817-671-600x600.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "APPLE",
  },
  {
    id: 51,
    name: "Macbook Air M1",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/macbook-air-m1-2020-gray-600x600.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "APPLE",
  },
  {
    id: 52,
    name: "MSI GF63",
    price: 22000000,
    category: "Laptop",
    image: require("../assets/Laptop/msi-gf63-thin-12ve-i5-460vn-2-750x500.jpg"),
    description:
      "Laptop 2 trong 1 đa dụng với màn hình 4K tuyệt đẹp, phù hợp cho công việc và giải trí.",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: "Lenovo",
  },
  {
    id: 53,
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
    id: 54,
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
    id: 55,
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
    id: 56,
    name: "Logitech G Pro X Tenkeyless",
    price: 3500000,
    category: "Keyboard",
    brand: "Logitech",
    image: require("../assets/anh do-an/logitech-g-pro-x-tenkeyless.jpg"),
    description:
      "Bàn phím cơ học tenkeyless với switch tùy chỉnh, thiết kế gọn nhẹ, phù hợp cho game thủ chuyên nghiệp và không gian làm việc nhỏ.",
    rating: 4.8,
    stock: 22,
    discount: 0.1,
  },
  {
    id: 57,
    name: "Razer BlackWidow V3 Mini",
    price: 4000000,
    category: "Keyboard",
    brand: "Razer",
    image: require("../assets/anh do-an/razer-blackwidow-v3-mini.jpg"),
    description:
      "Bàn phím cơ học mini với đèn nền RGB Chroma, switch Green, thiết kế nhỏ gọn cho không gian hạn chế.",
    rating: 4.0,
    stock: 18,
    discount: 0.15,
  },
  {
    id: 58,
    name: "Corsair K95 RGB Platinum XT",
    price: 5500000,
    category: "Keyboard",
    brand: "Corsair",
    image: require("../assets/anh do-an/corsair-k95-rgb-platinum-xt.jpg"),
    description:
      "Bàn phím cơ học cao cấp với đèn nền RGB, switch Cherry MX và các phím macro tùy chỉnh.",
    rating: 5,
    stock: 12,
    discount: 0.2,
  },
  {
    id: 59,
    name: "SteelSeries Apex 7",
    price: 4800000,
    category: "Keyboard",
    brand: "SteelSeries",
    image: require("../assets/anh do-an/steelseries-apex-7.jpg"),
    description:
      "Bàn phím cơ học với switch OLED, đèn nền RGB và thiết kế chắc chắn, phù hợp cho game thủ chuyên nghiệp.",
    rating: 4.8,
    stock: 20,
    discount: 0.1,
  },
  {
    id: 60,
    name: "Microsoft Surface Keyboard",
    price: 2000000,
    category: "Keyboard",
    brand: "Microsoft",
    image: require("../assets/anh do-an/microsoft-surface-keyboard.jpg"),
    description:
      "Bàn phím không dây mỏng nhẹ, thiết kế sang trọng, tương thích tốt với các thiết bị Windows.",
    rating: 4.6,
    stock: 30,
    discount: 0.1,
  },
  {
    id: 61,
    name: "Keychron K8",
    price: 3500000,
    category: "Keyboard",
    brand: "Keychron",
    image: require("../assets/anh do-an/keychron-k8.jpg"),
    description:
      "Bàn phím cơ học không dây với kết nối Bluetooth và đèn nền RGB, dễ dàng sử dụng cho nhiều hệ điều hành.",
    rating: 4.8,
    stock: 25,
    discount: 0.18,
  },
  {
    id: 62,
    name: "Apple Magic Keyboard with Touch ID",
    price: 3500000,
    category: "Keyboard",
    brand: "Apple",
    image: require("../assets/anh do-an/apple-magic-keyboard-touchid.jpg"),
    description:
      "Bàn phím không dây tích hợp Touch ID, mang lại sự tiện lợi và bảo mật cao khi sử dụng với máy Mac.",
    rating: 4.8,
    stock: 15,
    discount: 0.07,
  },
  {
    id: 64,
    name: "HyperX Alloy Elite 2",
    price: 4500000,
    category: "Keyboard",
    brand: "HyperX",
    image: require("../assets/anh do-an/hyperx-alloy-elite-2.jpg"),
    description:
      "Bàn phím cơ học full-size với đèn nền RGB và các phím media tích hợp, dành cho game thủ chuyên nghiệp.",
    rating: 4.8,
    stock: 14,
    discount: 0.12,
  },
  {
    id: 64,
    name: "ASUS ROG Strix Scope RX",
    price: 4500000,
    category: "Keyboard",
    brand: "ASUS",
    image: require("../assets/anh do-an/asus-rog-strix-scope-rx.jpg"),
    description:
      "Bàn phím cơ học với switch RX, đèn nền RGB và các tính năng cao cấp cho game thủ.",
    rating: 4.8,
    stock: 14,
    discount: 0.15,
  },
  {
    id: 65,
    name: "Logitech G815 LIGHTSYNC",
    price: 4800000,
    category: "Keyboard",
    brand: "Logitech",
    image: require("../assets/anh do-an/logitech-g815-lightsync.jpg"),
    description:
      "Bàn phím cơ học với switch GL, đèn nền RGB và thiết kế siêu mỏng, hoàn hảo cho game thủ.",
    rating: 4.9,
    stock: 19,
    discount: 0.12,
  },
  {
    id: 66,
    name: "Razer BlackWidow V3 Mini HyperSpeed",
    price: 4500000,
    category: "Keyboard",
    brand: "Razer",
    image: require("../assets/anh do-an/razer-blackwidow-v3-mini-hyperspeed.jpg"),
    description:
      "Bàn phím cơ học 65% với switch Green, kết nối không dây HyperSpeed cho hiệu suất cao, đèn nền RGB Chroma.",
    rating: 5,
    stock: 12,
    discount: 0.2,
  },
  {
    id: 67,
    name: "Razer Ornata V2",
    price: 2800000,
    category: "Keyboard",
    brand: "Razer",
    image: require("../assets/anh do-an/razer-ornata-v2.jpg"),
    description:
      "Bàn phím hybrid với switch mecha-membrane, đèn nền RGB Chroma, và âm thanh cực kỳ êm ái khi gõ.",
    rating: 3.0,
    stock: 18,
    discount: 0.18,
  },
  {
    id: 68,
    name: "Razer BlackWidow V3 Wireless",
    price: 5000000,
    category: "Keyboard",
    brand: "Razer",
    image: require("../assets/anh do-an/razer-blackwidow-v3-wireless.jpg"),
    description:
      "Bàn phím cơ học không dây với switch Yellow, đèn nền RGB Chroma, kết nối qua Bluetooth hoặc 2.4GHz cho game thủ chuyên nghiệp.",
    rating: 5,
    stock: 10,
    discount: 0.1,
  },
  {
    id: 69,
    name: "Corsair K70 RGB MK.2",
    price: 3500000,
    category: "Keyboard",
    brand: "Corsair",
    image: require("../assets/anh do-an/corsair-k70-rgb-mk-2.jpg"),
    description:
      "Bàn phím cơ học với ánh sáng RGB, phím macro, và switch Cherry MX, thiết kế bền bỉ với khung nhôm.",
    rating: 4.7,
    stock: 15,
    discount: 0.1,
  },
  {
    id: 70,
    name: "Corsair K55 RGB",
    price: 2200000,
    category: "Keyboard",
    brand: "Corsair",
    image: require("../assets/anh do-an/corsair-k55-rgb.jpg"),
    description:
      "Bàn phím có đèn nền RGB, tích hợp phím media và chống nước, phù hợp với nhu cầu gaming và làm việc.",
    rating: 4.5,
    stock: 25,
    discount: 0.08,
  },
  {
    id: 71,
    name: "Corsair HS60 Haptic",
    price: 3000000,
    category: "Keyboard",
    brand: "Corsair",
    image: require("../assets/anh do-an/corsair-hs60-haptic.jpg"),
    description:
      "Bàn phím với công nghệ haptic feedback, hệ thống âm thanh vòm 7.1, và thiết kế tiện lợi.",
    rating: 4.6,
    stock: 18,
    discount: 0.12,
  },
  {
    id: 78,
    name: "SteelSeries Apex 5",
    price: 4000000,
    category: "Keyboard",
    brand: "SteelSeries",
    image: require("../assets/anh do-an/steelseries-apex-5.jpg"),
    description:
      "Bàn phím cơ học với các phím được trang bị switch hybrid, đèn nền RGB, và khung kim loại chắc chắn.",
    rating: 4.6,
    stock: 25,
    discount: 0.08,
  },
  {
    id: 79,
    name: "SteelSeries Apex 3",
    price: 2000000,
    category: "Keyboard",
    brand: "SteelSeries",
    image: require("../assets/anh do-an/steelseries-apex-3.jpg"),
    description:
      "Bàn phím chống nước, đèn nền RGB, với thiết kế cho game thủ và những người làm việc lâu dài.",
    rating: 4.4,
    stock: 30,
    discount: 0.1,
  },
  {
    id: 80,
    name: "SteelSeries Stratus Duo",
    price: 3000000,
    category: "Keyboard",
    brand: "SteelSeries",
    image: require("../assets/anh do-an/steelseries-stratus-duo.jpg"),
    description:
      "Bàn phím không dây với kết nối dễ dàng và đèn nền RGB đẹp mắt, tối ưu cho chơi game di động và PC.",
    rating: 4.5,
    stock: 20,
    discount: 0.1,
  },
  {
    id: 81,
    name: "Microsoft Modern Keyboard",
    price: 2700000,
    category: "Keyboard",
    brand: "Microsoft",
    image: require("../assets/anh do-an/microsoft-modern-keyboard.jpg"),
    description:
      "Bàn phím Microsoft Modern với thiết kế gọn nhẹ và kiểu dáng hiện đại, kết nối không dây qua Bluetooth, hỗ trợ cả Windows và macOS.",
    rating: 4.6,
    stock: 25,
    discount: 0.08,
  },
  {
    id: 82,
    name: "Microsoft Arc Keyboard",
    price: 2200000,
    category: "Keyboard",
    brand: "Microsoft",
    image: require("../assets/anh do-an/microsoft-arc-keyboard.jpg"),
    description:
      "Bàn phím không dây với thiết kế cong, siêu mỏng, dễ dàng di động và kết nối với nhiều thiết bị.",
    rating: 4.6,
    stock: 20,
    discount: 0.08,
  },
  {
    id: 83,
    name: "Microsoft Wireless Keyboard 850",
    price: 1500000,
    category: "Keyboard",
    brand: "Microsoft",
    image: require("../assets/anh do-an/microsoft-wireless-850.jpg"),
    description:
      "Bàn phím không dây với thiết kế đơn giản, thoải mái và dễ dàng kết nối với máy tính.",
    rating: 4.2,
    stock: 25,
    discount: 0.1,
  },
  {
    id: 86,
    name: "Keychron K2 Wireless",
    price: 2800000,
    category: "Keyboard",
    brand: "Keychron",
    image: require("../assets/anh do-an/keychron-k2-wireless.jpg"),
    description:
      "Bàn phím cơ không dây với layout nhỏ gọn, switch Gateron và hỗ trợ kết nối đa thiết bị.",
    rating: 4.6,
    stock: 25,
    discount: 0.08,
  },
  {
    id: 87,
    name: "Keychron K8 Pro",
    price: 3200000,
    category: "Keyboard",
    brand: "Keychron",
    image: require("../assets/anh do-an/keychron-k8-pro.jpg"),
    description:
      "Bàn phím cơ layout TKL, switch hot-swappable, hỗ trợ cả kết nối có dây và không dây qua Bluetooth.",
    rating: 4.7,
    stock: 22,
    discount: 0.1,
  },
  {
    id: 88,
    name: "Keychron Q1",
    price: 4000000,
    category: "Keyboard",
    brand: "Keychron",
    image: require("../assets/anh do-an/keychron-q1.jpg"),
    description:
      "Bàn phím cơ cao cấp với khung nhôm CNC, switch hot-swappable và tùy chỉnh keymap qua phần mềm QMK/VIA.",
    rating: 4.8,
    stock: 20,
    discount: 0.15,
  },
  {
    id: 89,
    name: "Apple Magic Keyboard with Numeric Keypad",
    price: 3800000,
    category: "Keyboard",
    brand: "Apple",
    image: require("../assets/anh do-an/apple-magic-keyboard-numeric.jpg"),
    description:
      "Bàn phím không dây với bàn phím số, mang lại sự tiện lợi cho công việc văn phòng và xử lý dữ liệu.",
    rating: 4.6,
    stock: 12,
    discount: 0.08,
  },
  {
    id: 90,
    name: "Apple Magic Keyboard Space Gray",
    price: 5800000,
    category: "Keyboard",
    brand: "Apple",
    image: require("../assets/anh do-an/apple-magic-keyboard-space-gray.jpg"),
    description:
      "Bàn phím không dây với màu xám không gian sang trọng, tích hợp pin sạc và kết nối Bluetooth.",
    rating: 4.7,
    stock: 10,
    discount: 0.09,
  },
  {
    id: 91,
    name: "Apple Magic Keyboard for MacBook",
    price: 5800000,
    category: "Keyboard",
    brand: "Apple",
    image: require("../assets/anh do-an/apple-magic-keyboard-macbook.jpg"),
    description:
      "Bàn phím thiết kế đặc biệt dành cho MacBook, tối ưu hóa trải nghiệm gõ với hành trình phím mượt mà.",
    rating: 4.8,
    stock: 7,
    discount: 0.1,
  },
  {
    id: 92,
    name: "HyperX Alloy FPS RGB",
    price: 4000000,
    category: "Keyboard",
    brand: "HyperX",
    image: require("../assets/anh do-an/hyperx-alloy-fps-rgb.jpg"),
    description: "Bàn phím cơ học với đèn nền RGB, khung thép chắc chắn và switch Cherry MX cho trải nghiệm gõ tuyệt vời.",
    rating: 4.7,
    stock: 14,
    discount: 0.1,
  },
  {
    id: 93,
    name: "HyperX Alloy Origins 100",
    price: 3800000,
    category: "Keyboard",
    brand: "HyperX",
    image: require("../assets/anh do-an/hyperx-alloy-origins-100.jpg"),
    description: "Bàn phím cơ học 10-keyless, thiết kế nhỏ gọn và bền bỉ với đèn RGB.",
    rating: 4.6,
    stock: 18,
    discount: 0.12,
  },
  {
    id: 94,
    name: "HyperX Alloy Elite RGB",
    price: 4300000,
    category: "Keyboard",
    brand: "HyperX",
    image: require("../assets/anh do-an/hyperx-alloy-elite-rgb.jpg"),
    description: "Bàn phím cơ học với đèn RGB, phím macro có thể lập trình và thiết kế đẹp mắt cho game thủ.",
    rating: 4.8,
    stock: 10,
    discount: 0.1,
  },
  {
    id: 95,
    name: "ASUS ROG Azoth",
    price: 5300000,
    category: "Keyboard",
    brand: "ASUS",
    image: require("../assets/anh do-an/asus-rog-azoth.jpg"),
    description: "Bàn phím cơ học cao cấp với switch quang học và đèn RGB, thiết kế chắc chắn, mang lại trải nghiệm tuyệt vời cho game thủ.",
    rating: 4.8,
    stock: 10,
    discount: 0.12,
  },
  {
    id: 96,
    name: "ASUS TUF Gaming K7",
    price: 4200000,
    category: "Keyboard",
    brand: "ASUS",
    image: require("../assets/anh do-an/asus-tuf-gaming-k7.jpg"),
    description: "Bàn phím cơ học với switch quang học và đèn RGB, thiết kế chống nước và bền bỉ.",
    rating: 4.7,
    stock: 15,
    discount: 0.1,
  },
  {
    id: 97,
    name: "ASUS ROG Strix Flare II",
    price: 4800000,
    category: "Keyboard",
    brand: "ASUS",
    image: require("../assets/anh do-an/asus-rog-strix-flare-ii.jpg"),
    description: "Bàn phím cơ học với đèn RGB Aura Sync, các phím macro có thể lập trình, thích hợp cho game thủ.",
    rating: 4.8,
    stock: 7,
    discount: 0.12,
  },

  {
    id: 98,
    name: "HP Spectre x360",
    price: 22000000,
    category: "Headphone",
    image: require("../assets/Headphone/bluetooth-airpods-max-apple-thumb3-600x600.jpeg"),
    description:
      "bluetooth-airpods-max-apple",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand:'Hp',
  },
  {
    id: 99,
    name: "HP Spectre x360",
    price: 22000000,
    category: "Headphone",
    image: require("../assets/Headphone/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-pro-r630n-xam-1-750x500.jpg"),
    description:
      "bluetooth-airpods-max-apple",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: 'Hp',
  },
  {
    id: 100,
    name: "HP Spectre x360",
    price: 22000000,
    category: "Headphone",
    image: require("../assets/Headphone/bluetooth-airpods-max-apple-thumb3-600x600.jpeg"),
    description:
      "bluetooth-airpods-max-apple",
    rating: 4.7,
    stock: 20,
    discount: 0.1,
    brand: 'Hp',

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
    return true; // Xóa thành công
  }
  return false; // Không tìm thấy sản phẩm để xóa
};
// searchByBrand.js

export const searchByBrand = (products, brand) => {
  return products.filter(
    (product) =>
      product.brand && product.brand.toLowerCase() === brand.toLowerCase()
  );
};

// Xuất các hàm
export default products;
