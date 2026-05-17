// Products Data
const products = [
  {
    id: 1,
    slug: 'product-1',
    name: 'Sneaker Streetwear Classic White',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1595805737846-ab795bc2c782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Streetwear',
    description: 'Mẫu sneaker streetwear kinh điển với thiết kế tối giản nhưng vô cùng thời thượng. Hoàn hảo cho phong cách đường phố năng động và cá tính.',
    material: 'Da tổng hợp cao cấp kết hợp vải canvas thoáng khí. Lớp lót bên trong làm từ vải mesh mềm mại, tạo cảm giác thoải mái suốt cả ngày.',
    soleTech: 'Đế cao su EVA siêu nhẹ với công nghệ đệm khí Air-Tech, giảm chấn tối ưu và tăng độ bền bỉ. Rãnh chống trượt sâu đảm bảo an toàn trên mọi địa hình.',
    styling: 'Kết hợp hoàn hảo với quần jeans, jogger hoặc cargo pants. Phù hợp với áo thun oversized, hoodie hoặc jacket bomber để tạo nên phong cách streetwear đầy cá tính.'
  },
  {
    id: 2,
    slug: 'product-2',
    name: 'Giày Chạy Performance Pro',
    price: 2300000,
    image: 'https://images.unsplash.com/photo-1765914448100-0845241f7481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Running',
    description: 'Giày chạy bộ chuyên nghiệp được thiết kế cho người chạy marathon và vận động viên. Mang lại hiệu suất tối đa và sự thoải mái vượt trội.',
    material: 'Upper làm từ vải Flyknit siêu nhẹ, ôm sát bàn chân như tất. Công nghệ dệt một mảnh giảm ma sát và tăng độ thông thoáng.',
    soleTech: 'Đế giữa React Foam với công nghệ phản hồi năng lượng, tăng 30% lực đẩy mỗi bước chạy. Đế ngoài cao su carbon giúp tăng độ bám đường và giảm mài mòn.',
    styling: 'Lý tưởng cho tập luyện thể thao và chạy bộ hàng ngày. Có thể phối với quần short thể thao, legging hoặc jogger cho phong cách athleisure năng động.'
  },
  {
    id: 3,
    slug: 'product-3',
    name: 'Boot Da Cao Cấp Premium',
    price: 3500000,
    image: 'https://images.unsplash.com/photo-1759793501020-75fbf108d705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Boots',
    description: 'Boot da thật cao cấp với thiết kế sang trọng và bền bỉ. Sự lựa chọn hoàn hảo cho những người đàn ông yêu thích phong cách lịch lãm và mạnh mẽ.',
    material: 'Da bò nguyên tấm 100% thuộc thủ công, qua 15 công đoạn xử lý để tạo độ mềm mại và bền bỉ. Đường may chỉ Goodyear Welt đảm bảo tuổi thọ lên đến 10 năm.',
    soleTech: 'Đế cao su tự nhiên kết hợp da lót bên trong, chống nước và chống mài mòn. Hệ thống đệm khí ẩn bên trong giúp giảm tải trọng khi di chuyển.',
    styling: 'Phối hợp tuyệt vời với quần jeans đen, chinos hoặc quần tây. Kết hợp với áo sơ mi, blazer hoặc áo khoác da để tạo phong cách gentleman hiện đại.'
  },
  {
    id: 4,
    slug: 'product-4',
    name: 'Giày Bóng Rổ Pro Elite',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1728637690618-6f3fc7d7d015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Basketball',
    description: 'Giày bóng rổ chuyên nghiệp dành cho các cầu thủ đam mê tốc độ và sức mạnh. Hỗ trợ tối đa cho các động tác nhảy, chạy và xoay người.',
    material: 'Vải mesh tổng hợp kết hợp da lộn cao cấp ở các vùng chịu lực. Hệ thống dây buộc Dynamic Fit ôm chắc mắt cá chân, ngăn ngừa chấn thương.',
    soleTech: 'Đế Zoom Air với đệm khí phản hồi nhanh, tăng khả năng bật nhảy. Rãnh đế xương cá đa hướng giúp di chuyển nhanh nhạy và bám sân tốt hơn.',
    styling: 'Thiết kế cho sân đấu nhưng cũng phù hợp với streetwear hàng ngày. Phối với quần bóng rổ, jogger hoặc jeans rộng và áo hoodie cho vẻ ngoài thể thao năng động.'
  },
  {
    id: 5,
    slug: 'product-5',
    name: 'Giày Loafer Lịch Lãm Classic',
    price: 1950000,
    image: 'https://images.unsplash.com/photo-1760616172899-0681b97a2de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Casual',
    description: 'Giày loafer thanh lịch kết hợp hoàn hảo giữa sự thoải mái và phong cách. Dễ dàng mang và phù hợp cho nhiều dịp khác nhau từ công sở đến dạo phố.',
    material: 'Da cừu mềm mại được nhuộm màu tự nhiên, bề mặt bóng nhẹ sang trọng. Lớp lót da lộn hút ẩm tốt, giữ cho bàn chân luôn khô ráo.',
    soleTech: 'Đế cao su non mềm dẻo với độ dày vừa phải, không gây tiếng động khi đi. Công nghệ chống mùi và kháng khuẩn giúp bảo vệ sức khỏe bàn chân.',
    styling: 'Hoàn hảo với quần chinos, quần tây hoặc jeans slim-fit. Kết hợp với áo sơ mi, polo hoặc cardigan để tạo nên phong cách smart casual thanh lịch cho văn phòng hoặc gặp gỡ.'
  },
  {
    id: 6,
    slug: 'product-6',
    name: 'Giày Leo Núi Adventure X1',
    price: 2650000,
    image: 'https://images.unsplash.com/photo-1773293525612-13db0a0cb6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Outdoor',
    description: 'Giày leo núi chuyên dụng được thiết kế để chinh phục mọi địa hình khắc nghiệt. Chống nước tuyệt đối và độ bám đường vượt trội.',
    material: 'Da nubuck chống nước kết hợp vải Gore-Tex không thấm ẩm. Cổ giày cao bảo vệ mắt cá, có lớp đệm EVA chống sốc ở gót và mũi giày.',
    soleTech: 'Đế Vibram MegaGrip với công nghệ bám đường đa địa hình, từ đá trơn, bùn lầy đến băng tuyết. Hệ thống thoát nước nhanh qua các lỗ thoát khí đặc biệt.',
    styling: 'Thiết kế cho các chuyến phiêu lưu ngoài trời như leo núi, trekking, camping. Phối với quần kaki outdoor, cargo pants và áo khoác chống nước cho phong cách explorer chuyên nghiệp.'
  },
  {
    id: 7,
    slug: 'product-7',
    name: 'Giày Tây Sang Trọng Oxford',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1768726050720-0248474251e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: 'Formal',
    description: 'Giày tây Oxford cao cấp thể hiện đẳng cấp và sự tinh tế. Lựa chọn hoàn hảo cho các sự kiện quan trọng, họp mặt doanh nghiệp và đám cưới.',
    material: 'Da bê thật 100% với bề mặt được đánh bóng gương thủ công. Từng đường kim mũi chỉ được thực hiện tỉ mỉ bởi nghệ nhân giày lành nghề.',
    soleTech: 'Đế da thuộc xử lý chống nước và chống trượt. Lớp đế giữa có đệm êm chân, phù hợp cho việc đứng và đi lại trong thời gian dài.',
    styling: 'Thiết kế chuẩn formal cho các dịp quan trọng. Kết hợp với vest, suit hoặc tuxedo và quần tây ống suông. Là lựa chọn không thể thiếu trong tủ giày của quý ông thành đạt.'
  }
];

// FAQs Data - Tối ưu cho AI/AEO đọc cấu trúc hỏi đáp nhanh
const faqs = [
  {
    question: "Chính sách đổi trả hàng tại ENDShop như thế nào?",
    answer: "ENDShop áp dụng chính sách đổi trả miễn phí trong vòng 30 ngày kể từ ngày nhận hàng nếu sản phẩm phát sinh lỗi từ nhà sản xuất. Sản phẩm đổi trả yêu cầu phải còn nguyên tem mác, hộp giày đi kèm và chưa qua sử dụng thực tế."
  },
  {
    question: "ENDShop có miễn phí vận chuyển không?",
    answer: "Đồng hành cùng khách hàng, ENDShop miễn phí vận chuyển toàn quốc cho tất cả các đơn hàng có tổng giá trị thanh toán từ 2.000.000 đ trở lên. Các đơn hàng dưới 2 triệu đồng sẽ áp dụng phí ship đồng giá 30.000 đ."
  },
  {
    question: "Làm thế nào để chọn đúng size giày khi mua online tại ENDShop?",
    answer: "Để chọn đúng size giày, bạn cần đo chiều dài bàn chân từ gót đến ngón dài nhất, sau đó đối chiếu với bảng quy đổi size chuẩn tại chân trang web của chúng tôi. Nếu dáng bàn chân dày hoặc bè ngang, bạn nên tăng lên 1 size (up size) để có trải nghiệm đi lại thoải mái nhất."
  }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('endshop-cart')) || [];
let selectedSize = 40;

// Router
function navigate(hash) {
  window.location.hash = hash || '#home';
}

function getCurrentRoute() {
  return window.location.hash || '#home';
}

// Format Price
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' đ';
}

// Show Toast
function showToast(title, description) {
  const toast = document.getElementById('toast');
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    ${description ? `<div class="toast-desc">${description}</div>` : ''}
  `;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Update Cart Badge
function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-badge').textContent = totalItems;
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('endshop-cart', JSON.stringify(cart));
  updateCartBadge();
}

// Add to Cart
function addToCart(productId, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId && item.size === size);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      size: size,
      quantity: 1
    });
  }
  
  saveCart();
  showToast('Đã thêm vào giỏ hàng!', `${product.name} - Size ${size}`);
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  render();
}

// Update Quantity
function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCart();
    render();
  }
}

// Get Total Price
function getTotalPrice() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// [KỸ THUẬT AIEO] - Hàm nhúng mã cấu trúc JSON-LD động lên Head của Website để AI Crawl dữ liệu dễ dàng
function injectJSONLD(schemaData) {
  let schemaScript = document.getElementById('endshop-jsonld');
  if (schemaScript) {
    schemaScript.remove(); // Xóa schema cũ khi chuyển trang
  }
  schemaScript = document.createElement('script');
  schemaScript.id = 'endshop-jsonld';
  schemaScript.type = 'application/ld+json';
  schemaScript.text = JSON.stringify(schemaData);
  document.head.appendChild(schemaScript);
}

// Pages
function renderHome() {
  // Sinh Schema Store & FAQ cho Trang chủ
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OnlineStore",
        "@id": "https://endshop.onrender.com/#store",
        "name": "ENDShop - Cửa hàng giày cao cấp",
        "url": "https://endshop.onrender.com",
        "logo": "https://endshop.onrender.com/images/logo.png",
        "description": "Cửa hàng giày chất lượng cao, phong cách đa dạng cho mọi hoạt động từ thể thao đến công sở.",
        "telephone": "0123456789",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thành Phố Hồ Chí Minh",
          "addressCountry": "VN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://endshop.onrender.com/#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };
  injectJSONLD(homeSchema);

  return `
    <div>
      <section class="hero">
        <img src="https://images.unsplash.com/photo-1705526194118-a99844a94b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="ENDShop Banner" class="hero-image">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1 class="hero-title">
              Chào mừng đến <span class="highlight">ENDShop</span>
            </h1>
            <p class="hero-subtitle">
              Khám phá bộ sưu tập giày cao cấp dành cho mọi phong cách sống
            </p>
            <a href="#product-1" class="hero-btn">
              <span>Khám phá ngay</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">
            Về <span class="highlight">ENDShop</span>
          </h2>
          <p class="section-subtitle">
            ENDShop là điểm đến lý tưởng cho những ai yêu thích giày dép chất lượng cao.
            Chúng tôi mang đến những đôi giày được tuyển chọn kỹ lưỡng, từ sneaker streetwear
            năng động đến giày tây sang trọng, đáp ứng mọi nhu cầu từ thể thao đến công sở.
          </p>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3 class="feature-title">Giao hàng miễn phí</h3>
              <p class="feature-desc">Miễn phí vận chuyển cho đơn hàng trên 2 triệu đồng</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 class="feature-title">Bảo hành chính hãng</h3>
              <p class="feature-desc">Đổi trả trong 30 ngày nếu có lỗi từ nhà sản xuất</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Chất lượng cao cấp</h3>
              <p class="feature-desc">Sản phẩm được tuyển chọn kỹ lưỡng, đảm bảo chất lượng tốt nhất</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-bg">
        <div class="container">
          <h2 class="section-title">
            Danh mục <span class="highlight">nổi bật</span>
          </h2>

          <div class="product-grid grid-4">
            ${products.slice(0, 4).map(product => `
              <a href="#${product.slug}" class="product-card">
                <div class="product-image-wrapper">
                  <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                  <h3 class="product-name">${product.name}</h3>
                  <p class="product-category">${product.category}</p>
                  <p class="product-price">${formatPrice(product.price)}</p>
                </div>
              </a>
            `).join('')}
          </div>

          <div class="center-btn">
            <a href="#product-1" class="btn-primary">
              <span>Xem tất cả sản phẩm</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">
            Tất cả <span class="highlight">sản phẩm</span>
          </h2>

          <div class="product-grid">
            ${products.map(product => `
              <a href="#${product.slug}" class="product-card">
                <div class="product-image-wrapper">
                  <img src="${product.image}" alt="${product.name}" class="product-image">
                  <div class="product-badge">${product.category}</div>
                </div>
                <div class="product-info">
                  <h3 class="product-name">${product.name}</h3>
                  <p class="product-desc">${product.description}</p>
                  <p class="product-price">${formatPrice(product.price)}</p>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section section-bg" id="home-faq">
        <div class="container">
          <h2 class="section-title">Câu hỏi <span class="highlight">thường gặp</span></h2>
          <div class="faq-container">
            ${faqs.map(f => `
              <div class="faq-item">
                <h3 class="faq-question">❓ ${f.question}</h3>
                <p class="faq-answer">${f.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProductDetail(slug) {
  const product = products.find(p => p.slug === slug);
  if (!product) {
    return `
      <div class="product-detail">
        <div class="container">
          <div class="empty-cart">
            <h2 class="empty-cart-title">Không tìm thấy sản phẩm</h2>
            <a href="#home" class="btn-primary">Quay về trang chủ</a>
          </div>
        </div>
      </div>
    `;
  }

  // [KỸ THUẬT AIEO] - Tạo Schema Product Chi Tiết cho con AI quét thông số chính xác khi người dùng tìm kiếm sản phẩm cụ thể
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "ENDShop"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "VND",
      "price": product.price.toString(),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "url": window.location.href
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Chất liệu",
        "value": product.material
      },
      {
        "@type": "PropertyValue",
        "name": "Công nghệ đế",
        "value": product.soleTech
      }
    ]
  };
  injectJSONLD(productSchema);

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return `
    <div class="product-detail">
      <div class="container">
        <a href="#home" class="back-link">
          <span>←</span>
          <span>Quay lại trang chủ</span>
        </a>

        <div class="product-detail-card">
          <div class="product-detail-grid">
            <div class="product-detail-image-wrapper">
              <img src="${product.image}" alt="${product.name}" class="product-detail-image">
              <div class="product-badge">${product.category}</div>
            </div>

            <div class="product-detail-info">
              <h1 class="product-detail-title">${product.name}</h1>
              <p class="product-detail-price">${formatPrice(product.price)}</p>
              
              <div class="aeo-product-summary">
                <p class="product-detail-desc">${product.description}</p>
              </div>

              <div class="size-selector">
                <label class="size-label">Chọn kích cỡ:</label>
                <div class="size-grid" id="size-grid-${product.id}">
                  ${sizes.map(size => `
                    <button class="size-btn ${size === 40 ? 'active' : ''}" onclick="selectSize(${size}, ${product.id})">${size}</button>
                  `).join('')}
                </div>
              </div>

              <div class="action-buttons">
                <button class="btn-add-cart" onclick="addToCart(${product.id}, selectedSize)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Thêm vào giỏ hàng</span>
                </button>
                <button class="btn-buy-now" onclick="buyNow(${product.id}, selectedSize)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span>Mua ngay</span>
                </button>
              </div>

              <div class="product-details">
                <div class="detail-item">
                  <h3 class="detail-title">
                    <span>✓</span> Chất liệu
                  </h3>
                  <p class="detail-text">${product.material}</p>
                </div>

                <div class="detail-item">
                  <h3 class="detail-title">
                    <span>✓</span> Công nghệ đế
                  </h3>
                  <p class="detail-text">${product.soleTech}</p>
                </div>

                <div class="detail-item">
                  <h3 class="detail-title">
                    <span>✓</span> Phong cách phối đồ
                  </h3>
                  <p class="detail-text">${product.styling}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="related-products">
          <h2 class="section-title">
            Sản phẩm <span class="highlight">liên quan</span>
          </h2>
          <div class="product-grid">
            ${relatedProducts.map(p => `
              <a href="#${p.slug}" class="product-card">
                <div class="product-image-wrapper">
                  <img src="${p.image}" alt="${p.name}" class="product-image">
                </div>
                <div class="product-info">
                  <h3 class="product-name">${p.name}</h3>
                  <p class="product-price">${formatPrice(p.price)}</p>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCheckout() {
  // Clear schema khi vào trang checkout thanh toán
  let schemaScript = document.getElementById('endshop-jsonld');
  if (schemaScript) schemaScript.remove();

  if (cart.length === 0) {
    return `
      <div class="checkout">
        <div class="container">
          <div class="empty-cart">
            <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2 class="empty-cart-title">Giỏ hàng trống</h2>
            <p class="empty-cart-desc">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <a href="#home" class="btn-primary">Tiếp tục mua sắm</a>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="checkout">
      <div class="container">
        <h1 class="section-title">
          Giỏ hàng & <span class="highlight">Thanh toán</span>
        </h1>

        <div class="checkout-grid">
          <div class="cart-items">
            ${cart.map(item => `
              <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                  <h3 class="cart-item-name">${item.name}</h3>
                  <p class="cart-item-size">Size: ${item.size}</p>
                  <p class="cart-item-price">${formatPrice(item.price)}</p>

                  <div class="cart-item-actions">
                    <div class="quantity-controls">
                      <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <span class="quantity-display">${item.quantity}</span>
                      <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>

                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div>
            <form class="checkout-form" onsubmit="handleCheckout(event)">
              <h2 class="checkout-title">Thông tin đặt hàng</h2>

              <div class="form-group">
                <label class="form-label">Họ và tên *</label>
                <input type="text" class="form-input" placeholder="Nguyễn Văn A" required>
              </div>

              <div class="form-group">
                <label class="form-label">Số điện thoại *</label>
                <input type="tel" class="form-input" placeholder="0123 456 789" required>
              </div>

              <div class="form-group">
                <label class="form-label">Địa chỉ giao hàng *</label>
                <textarea class="form-textarea" placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố" required></textarea>
              </div>

              <div class="form-group">
                <label class="form-label">Phương thức thanh toán</label>
                <div class="payment-methods">
                  <label class="payment-option">
                    <input type="radio" name="payment" value="cod" checked>
                    <span>💵 Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label class="payment-option">
                    <input type="radio" name="payment" value="transfer">
                    <span>💳 Chuyển khoản ngân hàng</span>
                  </label>
                </div>
              </div>

              <div class="order-summary">
                <div class="summary-row">
                  <span class="summary-label">Tạm tính:</span>
                  <span class="summary-value">${formatPrice(getTotalPrice())}</span>
                </div>
                <div class="summary-row">
                  <span class="summary-label">Phí vận chuyển:</span>
                  <span class="summary-value free">Miễn phí</span>
                </div>
                <div class="summary-row summary-total">
                  <span class="summary-label">Tổng cộng:</span>
                  <span class="summary-value">${formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <button type="submit" class="btn-submit">Đặt hàng</button>
              <a href="#home" class="continue-shopping">Tiếp tục mua sắm</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSuccess() {
  const total = getTotalPrice();
  
  return `
    <div class="success-page">
      <div class="success-card">
        <div class="success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 class="success-title">Đặt hàng thành công!</h2>
        <p class="success-desc">
          Cảm ơn bạn đã mua hàng tại ENDShop. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
        </p>
        <div class="success-summary">
          <p>Tổng thanh toán:</p>
          <p>${formatPrice(total)}</p>
        </div>
        <p class="success-note">Đang chuyển hướng về trang chủ...</p>
      </div>
    </div>
  `;
}

// Event Handlers
function selectSize(size, productId) {
  selectedSize = size;
  const sizeGrid = document.getElementById(`size-grid-${productId}`);
  if (sizeGrid) {
    const buttons = sizeGrid.querySelectorAll('.size-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (parseInt(btn.textContent) === size) {
        btn.classList.add('active');
      }
    });
  }
}

function buyNow(productId, size) {
  addToCart(productId, size);
  navigate('#checkout');
}

function handleCheckout(event) {
  event.preventDefault();
  
  // Show success page
  navigate('#success');
  
  // Clear cart after 3 seconds and redirect to home
  setTimeout(() => {
    cart = [];
    saveCart();
    navigate('#home');
  }, 3000);
}

// Render
function render() {
  const route = getCurrentRoute();
  const app = document.getElementById('app');
  
  if (route === '#home' || route === '') {
    app.innerHTML = renderHome();
  } else if (route === '#checkout') {
    app.innerHTML = renderCheckout();
  } else if (route === '#success') {
    app.innerHTML = renderSuccess();
  } else if (route.startsWith('#product-')) {
    app.innerHTML = renderProductDetail(route.substring(1));
  } else {
    app.innerHTML = renderHome();
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Close mobile menu
  document.getElementById('mobile-nav').classList.remove('active');
}

// Event Listeners
window.addEventListener('hashchange', render);
window.addEventListener('load', () => {
  updateCartBadge();
  render();
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.getElementById('mobile-nav').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    document.getElementById('mobile-nav').classList.remove('active');
  }
});