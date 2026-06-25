import { categories, products, carouselOffers } from './products.js';

// --- State Management ---
const state = {
  user: null,
  cart: [],
  currentScreen: 'login',
  activeCategory: 'all',
  carouselIndex: 0,
  otpCode: '4821', // Predefined mock OTP code
  tempPhoneNumber: '',
  selectedPayment: 'shiuli', // 'shiuli' or 'online'
  addresses: [
    { id: 'addr-1', label: '🏠 Home', value: 'Flat 402, Oakwood Apartments, Bangalore' },
    { id: 'addr-2', label: '🌾 Ooty Farm', value: 'Survey No. 44, Flower Valley, Ooty' }
  ],
  nextGift: {
    title: 'Free Organic Seed Kit',
    desc: 'Get a packet of premium bougainvillea & lotus seeds free with your next order above ₹1,500.',
    icon: '🌸'
  }
};

// --- DOM References ---
const DOM = {
  screens: document.querySelectorAll('.app-screen'),
  bottomNav: document.getElementById('bottomNavBar'),
  navItems: document.querySelectorAll('.nav-item'),
  statusTime: document.getElementById('statusTime'),
  
  // Marketing Panel
  desktopDots: document.querySelectorAll('#desktopStepIndicator .step-indicator-dot'),

  // Login Screen
  loginPhone: document.getElementById('login-phone'),
  btnSendOtp: document.getElementById('btn-send-otp'),
  phoneSection: document.getElementById('phone-input-section'),
  otpSection: document.getElementById('otp-input-section'),
  otpBoxes: document.querySelectorAll('.otp-box'),
  btnVerifyOtp: document.getElementById('btn-verify-otp'),
  btnResendOtp: document.getElementById('btn-resend-otp'),

  // Home Screen
  carouselTrack: document.getElementById('carouselTrack'),
  carouselDots: document.getElementById('carouselDots'),
  categoriesGrid: document.getElementById('categoriesGrid'),
  productsGrid: document.getElementById('productsGrid'),
  catalogTitle: document.getElementById('catalog-title'),
  homeProfileBtn: document.getElementById('home-profile-btn'),
  homeGiftPoster: document.getElementById('home-gift-poster'),
  homeGiftIcon: document.getElementById('home-gift-icon'),
  homeGiftTitle: document.getElementById('home-gift-title'),
  homeGiftDesc: document.getElementById('home-gift-desc'),

  // Detail Screen
  detailBackBtn: document.getElementById('detail-back-btn'),
  detailImage: document.getElementById('detail-image'),
  detailBadge: document.getElementById('detail-badge'),
  detailCategory: document.getElementById('detail-category'),
  detailTitle: document.getElementById('detail-title'),
  detailStars: document.getElementById('detail-stars'),
  detailReviews: document.getElementById('detail-reviews'),
  detailPrice: document.getElementById('detail-price'),
  detailDesc: document.getElementById('detail-desc'),
  detailSpecsBody: document.getElementById('detail-specs-body'),
  detailAddCartBtn: document.getElementById('detail-add-cart-btn'),

  // Cart Screen
  cartItemsContainer: document.getElementById('cartItemsContainer'),
  cartEmptyState: document.getElementById('cartEmptyState'),
  cartSummarySection: document.getElementById('cartSummarySection'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartDelivery: document.getElementById('cart-delivery'),
  cartTax: document.getElementById('cart-tax'),
  cartTotal: document.getElementById('cart-total'),
  btnCartCheckout: document.getElementById('btn-cart-checkout'),
  btnCartEmptyShop: document.getElementById('btn-cart-empty-shop'),
  cartBadge: document.getElementById('cartBadge'),

  // Checkout Screen
  checkoutForm: document.getElementById('checkout-form'),
  checkoutName: document.getElementById('checkout-name'),
  checkoutEmail: document.getElementById('checkout-email'),
  checkoutPhone: document.getElementById('checkout-phone'),
  checkoutAddress: document.getElementById('checkout-address'),
  payShiuli: document.getElementById('pay-shiuli'),
  payOnline: document.getElementById('pay-online'),
  btnPlaceOrder: document.getElementById('btn-place-order'),
  checkoutBackBtn: document.getElementById('checkout-back-btn'),

  // Success Screen
  successMessage: document.getElementById('success-message'),
  btnSuccessHome: document.getElementById('btn-success-home'),
  rozapayPanel: document.getElementById('rozapay-advance-panel'),
  rozapayDesc: document.getElementById('rozapay-advance-desc'),
  btnPayRozapay: document.getElementById('btn-pay-rozapay'),
  rozapaySuccessStatus: document.getElementById('rozapay-success-status'),

  // Saved Addresses Screen
  profileAddressesBtn: document.getElementById('btn-profile-addresses'),
  addressesBackBtn: document.getElementById('addresses-back-btn'),
  addressesListContainer: document.getElementById('addresses-list-container'),
  addAddressForm: document.getElementById('add-address-form'),
  addressLabelInput: document.getElementById('address-label'),
  addressValueInput: document.getElementById('address-value'),
  checkoutSavedAddressesSelector: document.getElementById('checkout-saved-addresses-selector'),
  checkoutAddressesPills: document.getElementById('checkout-addresses-pills'),

  // Service Screen
  serviceForm: document.getElementById('service-request-form'),
  serviceSuccessBlock: document.getElementById('service-success-block'),
  serviceSuccessText: document.getElementById('service-success-text'),
  btnServiceOk: document.getElementById('btn-service-ok'),
  serviceMachine: document.getElementById('service-machine'),
  servicePickupAddress: document.getElementById('service-pickup-address'),
  serviceProblemDesc: document.getElementById('service-problem-desc'),
  videoUploadZone: document.getElementById('video-upload-zone'),
  videoUploadPrompt: document.getElementById('video-upload-prompt'),
  videoUploadProgress: document.getElementById('video-upload-progress'),
  videoProgressBar: document.getElementById('video-progress-bar'),
  videoUploadPreview: document.getElementById('video-upload-preview'),
  serviceVideoFile: document.getElementById('service-video-file'),
  videoFilenameLabel: document.getElementById('video-filename-label'),
  videoFilesizeLabel: document.getElementById('video-filesize-label'),
  serviceSavedAddressesSelector: document.getElementById('service-saved-addresses-selector'),
  serviceAddressesPills: document.getElementById('service-addresses-pills'),

  // Manage Screen DOM mappings
  btnTogglePostOffer: document.getElementById('btn-toggle-post-offer'),
  btnTogglePostProduct: document.getElementById('btn-toggle-post-product'),
  postOfferForm: document.getElementById('post-offer-form'),
  postProductForm: document.getElementById('post-product-form'),
  offerTitle: document.getElementById('offer-title'),
  offerSubtitle: document.getElementById('offer-subtitle'),
  offerCode: document.getElementById('offer-code'),
  offerTag: document.getElementById('offer-tag'),
  btnSubmitOffer: document.getElementById('btn-submit-offer'),
  prodName: document.getElementById('prod-name'),
  prodSubtitle: document.getElementById('prod-subtitle'),
  prodPrice: document.getElementById('prod-price'),
  prodCategory: document.getElementById('prod-category'),
  prodHighlight: document.getElementById('prod-highlight'),
  prodDesc: document.getElementById('prod-desc'),
  prodSpecL: document.getElementById('prod-spec-l'),
  prodSpecV: document.getElementById('prod-spec-v'),
  btnSubmitProduct: document.getElementById('btn-submit-product'),
  btnTogglePostGift: document.getElementById('btn-toggle-post-gift'),
  postGiftForm: document.getElementById('post-gift-form'),
  giftTitleInput: document.getElementById('gift-title'),
  giftDescInput: document.getElementById('gift-desc'),
  giftIconInput: document.getElementById('gift-icon'),
  btnSubmitGift: document.getElementById('btn-submit-gift'),

  // Profile Screen
  profileNameText: document.getElementById('profile-name-text'),
  profilePhoneText: document.getElementById('profile-phone-text'),
  btnProfileSupport: document.getElementById('btn-profile-support'),
  btnLogout: document.getElementById('btn-logout'),

  // Global Toast
  toast: document.getElementById('appToast'),
  toastIcon: document.getElementById('toastIcon'),
  toastText: document.getElementById('toastText')
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 60000);
  
  initNavigation();
  initLoginFlow();
  initCarousel();
  initCatalog();
  initCheckoutFlow();
  initProfileFlow();
  initAddressesFlow();
  initServiceFlow();
  initManageFlow();
  
  // Set up initial gift poster text from state
  updateGiftPosterUI();
  
  // Set up screen-specific initial displays
  navigateTo('login');

  // Register service worker for PWA offline capabilities
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('ServiceWorker registered with scope: ', reg.scope))
      .catch(err => console.error('ServiceWorker registration failed: ', err));
  }
});

// --- Helper Functions ---
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  DOM.statusTime.textContent = `${hours}:${minutes}`;
}

// Show feedback toasts inside the mobile app
function showToast(text, icon = '✨') {
  DOM.toastText.textContent = text;
  DOM.toastIcon.textContent = icon;
  DOM.toast.classList.add('show');
  
  setTimeout(() => {
    DOM.toast.classList.remove('show');
  }, 2200);
}

// Navigate between screens
function navigateTo(screenId, direction = 'forward') {
  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (!targetScreen) return;

  const currentActive = document.querySelector('.app-screen.active');
  
  if (currentActive) {
    currentActive.classList.remove('active');
    if (direction === 'forward') {
      currentActive.classList.add('slide-in-back');
      setTimeout(() => currentActive.classList.remove('slide-in-back'), 400);
    } else {
      currentActive.classList.add('slide-out');
      setTimeout(() => currentActive.classList.remove('slide-out'), 400);
    }
  }

  targetScreen.classList.add('active');
  state.currentScreen = screenId;

  // Handle bottom navigation bar visibility
  const screensWithNav = ['home', 'cart', 'profile', 'service', 'manage'];
  if (screensWithNav.includes(screenId)) {
    DOM.bottomNav.classList.remove('hidden');
    // Set active class on nav bar item
    DOM.navItems.forEach(item => {
      if (item.getAttribute('data-screen') === screenId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  } else {
    DOM.bottomNav.classList.add('hidden');
  }

  // Update step indicators on Desktop Marketing panel
  updateMarketingProgress(screenId);
}

function updateMarketingProgress(screenId) {
  DOM.desktopDots.forEach(dot => dot.classList.remove('active'));
  
  if (screenId === 'login') {
    DOM.desktopDots[0].classList.add('active');
  } else if (screenId === 'home' || screenId === 'product-detail') {
    DOM.desktopDots[1].classList.add('active');
  } else if (screenId === 'cart') {
    DOM.desktopDots[2].classList.add('active');
  } else if (screenId === 'checkout' || screenId === 'confirmation') {
    DOM.desktopDots[3].classList.add('active');
  }
}

// --- Navigation Flow ---
function initNavigation() {
  DOM.navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetScreen = item.getAttribute('data-screen');
      if (state.currentScreen !== targetScreen) {
        if (targetScreen === 'service') {
          renderServiceAddressesPills();
        }
        // Simple direction check: if going to home, animate backward-like
        const dir = targetScreen === 'home' ? 'backward' : 'forward';
        navigateTo(targetScreen, dir);
      }
    });
  });
}

// --- Login & Authentication Flow ---
function initLoginFlow() {
  // Direct input handling for phone number
  DOM.loginPhone.addEventListener('input', (e) => {
    // Only digits allowed
    e.target.value = e.target.value.replace(/\D/g, '');
  });

  DOM.btnSendOtp.addEventListener('click', () => {
    const phone = DOM.loginPhone.value.trim();
    if (phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    
    state.tempPhoneNumber = phone;
    DOM.phoneSection.style.display = 'none';
    DOM.otpSection.style.display = 'block';
    
    // Auto-focus on first OTP box
    setTimeout(() => DOM.otpBoxes[0].focus(), 100);
    showToast('OTP sent successfully!', '💬');
  });

  // Handle OTP digit box entries (jumping cursor)
  DOM.otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val.length === 1 && index < 3) {
        DOM.otpBoxes[index + 1].removeAttribute('disabled');
        DOM.otpBoxes[index + 1].focus();
      }
      
      // Auto verify on final digit filled
      if (index === 3 && val.length === 1) {
        checkAndVerifyOTP();
      }
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        DOM.otpBoxes[index].setAttribute('disabled', 'true');
        DOM.otpBoxes[index - 1].focus();
      }
    });
  });

  DOM.btnVerifyOtp.addEventListener('click', () => {
    checkAndVerifyOTP();
  });

  DOM.btnResendOtp.addEventListener('click', () => {
    DOM.otpBoxes.forEach((box, i) => {
      box.value = '';
      if (i > 0) box.setAttribute('disabled', 'true');
    });
    DOM.otpBoxes[0].focus();
    showToast('OTP Resent! Enter 4821', '💬');
  });
}

function checkAndVerifyOTP() {
  let enteredOtp = '';
  DOM.otpBoxes.forEach(box => enteredOtp += box.value);

  if (enteredOtp.length < 4) {
    alert('Please enter the 4-digit code.');
    return;
  }

  if (enteredOtp === state.otpCode) {
    state.user = {
      phone: state.tempPhoneNumber,
      name: 'Gardening Enthusiast',
      email: 'botanical.lover@nature.com'
    };
    
    // Pre-fill profile
    DOM.profileNameText.textContent = state.user.name;
    DOM.profilePhoneText.textContent = `+91 ${state.user.phone.slice(0, 5)} ${state.user.phone.slice(5)}`;
    
    // Pre-fill checkout
    DOM.checkoutPhone.value = state.user.phone;
    DOM.checkoutName.value = state.user.name;
    DOM.checkoutEmail.value = state.user.email;

    showToast('Access Verified!', '🍀');
    
    setTimeout(() => {
      navigateTo('home');
      // Reset login form for future logouts
      DOM.phoneSection.style.display = 'block';
      DOM.otpSection.style.display = 'none';
      DOM.loginPhone.value = '';
      DOM.otpBoxes.forEach((box, i) => {
        box.value = '';
        if (i > 0) box.setAttribute('disabled', 'true');
      });
    }, 600);
  } else {
    alert('Incorrect OTP code. Please enter 4821.');
    DOM.otpBoxes.forEach((box, i) => {
      box.value = '';
      if (i > 0) box.setAttribute('disabled', 'true');
    });
    DOM.otpBoxes[0].focus();
  }
}

// --- Offers Carousel Logic ---
let carouselTimer = null;

function initCarousel() {
  // Populate slides
  DOM.carouselTrack.innerHTML = '';
  DOM.carouselDots.innerHTML = '';

  carouselOffers.forEach((offer, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.style.background = offer.bgColor;
    slide.innerHTML = `
      <span class="carousel-slide-badge">${offer.tag}</span>
      <div class="carousel-slide-content">
        <h3 class="carousel-slide-title">${offer.title}</h3>
        <p class="carousel-slide-subtitle">${offer.subtitle}</p>
        <span class="carousel-slide-code">Code: ${offer.code}</span>
      </div>
    `;
    DOM.carouselTrack.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => setCarouselSlide(index));
    DOM.carouselDots.appendChild(dot);
  });

  // Setup auto scroll
  startCarouselAutoPlay();

  // Setup swipe gestures on carousel
  let startX = 0;
  let isDragging = false;

  DOM.carouselTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    clearInterval(carouselTimer);
  });

  DOM.carouselTrack.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> next slide
        nextCarouselSlide();
      } else {
        // Swiped right -> prev slide
        prevCarouselSlide();
      }
      isDragging = false;
    }
  });

  DOM.carouselTrack.addEventListener('touchend', () => {
    isDragging = false;
    startCarouselAutoPlay();
  });

  // Mouse gestures for desktop testing
  DOM.carouselTrack.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
    clearInterval(carouselTimer);
  });

  DOM.carouselTrack.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextCarouselSlide();
      else prevCarouselSlide();
      isDragging = false;
    }
  });

  DOM.carouselTrack.addEventListener('mouseup', () => {
    isDragging = false;
    startCarouselAutoPlay();
  });
}

function startCarouselAutoPlay() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    nextCarouselSlide();
  }, 5000);
}

function setCarouselSlide(index) {
  state.carouselIndex = index;
  const translation = -index * 100;
  DOM.carouselTrack.style.transform = `translateX(${translation}%)`;
  
  // Update dots
  const dots = DOM.carouselDots.querySelectorAll('.carousel-dot');
  dots.forEach((dot, i) => {
    if (i === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

function nextCarouselSlide() {
  const nextIdx = (state.carouselIndex + 1) % carouselOffers.length;
  setCarouselSlide(nextIdx);
}

function prevCarouselSlide() {
  const prevIdx = (state.carouselIndex - 1 + carouselOffers.length) % carouselOffers.length;
  setCarouselSlide(prevIdx);
}

// --- Product Catalog Logic ---
function initCatalog() {
  // Populate categories bar
  DOM.categoriesGrid.innerHTML = '';
  
  // All Category option first
  const allCard = document.createElement('div');
  allCard.className = 'category-card active';
  allCard.id = 'cat-all';
  allCard.innerHTML = `
    <span class="category-icon">🌿</span>
    <span class="category-name">All Shop</span>
  `;
  allCard.addEventListener('click', () => filterCatalog('all'));
  DOM.categoriesGrid.appendChild(allCard);

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.id = `cat-${cat.id}`;
    card.innerHTML = `
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${cat.name}</span>
    `;
    card.addEventListener('click', () => filterCatalog(cat.id));
    DOM.categoriesGrid.appendChild(card);
  });

  renderProducts();

  // Product detail screen back button
  DOM.detailBackBtn.addEventListener('click', () => {
    navigateTo('home', 'backward');
  });
}

function filterCatalog(categoryId) {
  state.activeCategory = categoryId;
  
  // Update category cards active styling
  document.querySelectorAll('.category-card').forEach(card => {
    if (card.id === `cat-${categoryId}`) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Update catalog header
  if (categoryId === 'all') {
    DOM.catalogTitle.textContent = 'Our Products';
  } else {
    const cat = categories.find(c => c.id === categoryId);
    DOM.catalogTitle.textContent = cat ? cat.name : 'Our Products';
  }

  renderProducts();
}

function renderProducts() {
  DOM.productsGrid.innerHTML = '';

  const filtered = state.activeCategory === 'all'
    ? products
    : products.filter(p => p.category === state.activeCategory);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image-container">
        ${p.highlight ? `<span class="product-badge">${p.highlight}</span>` : ''}
        <img src="${p.image}" alt="${p.name}" class="product-card-image" onerror="this.src='https://placehold.co/150x120/466750/FEFAE0?text=${encodeURIComponent(p.name)}'">
      </div>
      <div class="product-card-info">
        <div>
          <div class="product-card-category">${categories.find(c => c.id === p.category).name}</div>
          <h4 class="product-card-title">${p.name}</h4>
        </div>
        <div class="product-card-row">
          <span class="product-card-price">₹${p.price.toLocaleString('en-IN')}</span>
          <div class="product-card-add" data-id="${p.id}">+</div>
        </div>
      </div>
    `;

    // Click handler to open details
    card.addEventListener('click', (e) => {
      // Don't open detail if clicking the add button directly
      if (e.target.classList.contains('product-card-add')) {
        e.stopPropagation();
        addToCart(p.id);
        return;
      }
      openProductDetails(p);
    });

    DOM.productsGrid.appendChild(card);
  });
}

function openProductDetails(product) {
  DOM.detailTitle.textContent = product.name;
  DOM.detailCategory.textContent = categories.find(c => c.id === product.category).name;
  DOM.detailPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
  DOM.detailDesc.textContent = product.description;
  DOM.detailImage.src = product.image;
  DOM.detailImage.onerror = function() {
    this.src = `https://placehold.co/300x260/466750/FEFAE0?text=${encodeURIComponent(product.name)}`;
  };
  
  DOM.detailStars.textContent = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  DOM.detailReviews.textContent = `(${product.reviews} reviews)`;

  if (product.highlight) {
    DOM.detailBadge.style.display = 'block';
    DOM.detailBadge.textContent = product.highlight;
  } else {
    DOM.detailBadge.style.display = 'none';
  }

  // Specifications
  DOM.detailSpecsBody.innerHTML = '';
  if (product.specifications && product.specifications.length > 0) {
    product.specifications.forEach(spec => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="detail-spec-label">${spec.label}</td>
        <td class="detail-spec-value">${spec.value}</td>
      `;
      DOM.detailSpecsBody.appendChild(row);
    });
  } else {
    DOM.detailSpecsBody.innerHTML = '<tr><td colspan="2">Standard agricultural specs apply.</td></tr>';
  }

  // Clear previous listeners and hook new one
  const newAddBtn = DOM.detailAddCartBtn.cloneNode(true);
  DOM.detailAddCartBtn.parentNode.replaceChild(newAddBtn, DOM.detailAddCartBtn);
  DOM.detailAddCartBtn = newAddBtn;
  
  DOM.detailAddCartBtn.addEventListener('click', () => {
    addToCart(product.id);
    showToast('Added to Cart!', '🛒');
  });

  navigateTo('product-detail');
}

// --- Cart Logic & Swipe-to-Remove Implementation ---
function addToCart(productId) {
  const existing = state.cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    state.cart.push({ product, quantity: 1 });
  }
  updateCartUI();
  showToast('Added to Cart', '🛒');
}

function updateCartUI() {
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update badges
  if (cartCount > 0) {
    DOM.cartBadge.textContent = cartCount;
    DOM.cartBadge.style.display = 'flex';
  } else {
    DOM.cartBadge.style.display = 'none';
  }

  // Renders container contents
  renderCartList();
  calculateCartTotals();
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const delivery = subtotal > 0 ? 150 : 0; // Flat shipping rate
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + delivery + tax;

  DOM.cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  DOM.cartDelivery.textContent = `₹${delivery.toLocaleString('en-IN')}`;
  DOM.cartTax.textContent = `₹${tax.toLocaleString('en-IN')}`;
  DOM.cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;

  if (state.cart.length === 0) {
    DOM.cartEmptyState.style.display = 'block';
    DOM.cartSummarySection.style.display = 'none';
  } else {
    DOM.cartEmptyState.style.display = 'none';
    DOM.cartSummarySection.style.display = 'block';
  }
}

function changeQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(item => item.product.id === productId);
  if (itemIndex === -1) return;

  const item = state.cart[itemIndex];
  item.quantity += delta;
  
  if (item.quantity <= 0) {
    // If quantity goes to zero, remove item with a standard slide action
    removeCartItemWithAnimation(productId);
  } else {
    updateCartUI();
  }
}

// Swipe-to-remove listener attachment
function renderCartList() {
  DOM.cartItemsContainer.innerHTML = '';

  state.cart.forEach(item => {
    const p = item.product;
    
    // Create overall item wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'cart-item-wrapper';
    wrapper.id = `cart-wrap-${p.id}`;

    // Add elements: background delete action layer and foreground card layer
    wrapper.innerHTML = `
      <div class="cart-item-bg-action" id="action-bg-${p.id}">
        <div class="cart-item-bg-action-content">
          <span class="cart-trash-icon">🗑️</span>
          <span>Remove</span>
        </div>
      </div>
      <div class="cart-item-card" id="card-fg-${p.id}">
        <div class="cart-item-image-box">
          <img src="${p.image}" alt="${p.name}" class="cart-item-image" onerror="this.src='https://placehold.co/80x80/466750/FEFAE0?text=${encodeURIComponent(p.name)}'">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-name">${p.name}</h4>
          <div class="cart-item-row">
            <span class="cart-item-price">₹${(p.price * item.quantity).toLocaleString('en-IN')}</span>
            <div class="quantity-selector">
              <button class="quantity-btn dec-btn" data-id="${p.id}">-</button>
              <span class="quantity-number">${item.quantity}</span>
              <button class="quantity-btn inc-btn" data-id="${p.id}">+</button>
            </div>
          </div>
        </div>
      </div>
    `;

    DOM.cartItemsContainer.appendChild(wrapper);

    // Quantity selectors hooks
    wrapper.querySelector('.dec-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      changeQuantity(p.id, -1);
    });
    wrapper.querySelector('.inc-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      changeQuantity(p.id, 1);
    });

    // Wire up Swipe Gestures
    setupSwipeToRemove(p.id);
  });
}

// Complex Swipe-to-Remove gesture mapping
function setupSwipeToRemove(productId) {
  const card = document.getElementById(`card-fg-${productId}`);
  const bgAction = document.getElementById(`action-bg-${productId}`);
  const wrapper = document.getElementById(`cart-wrap-${productId}`);

  if (!card || !bgAction) return;

  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let isSwiping = false;
  let distanceX = 0;
  let isVerticalScroll = false;

  // Swipe gesture threshold configurations
  const thresholdDelete = -130; // Dragging left past 130px triggers deletion

  // Touch triggers
  card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwiping = true;
    isVerticalScroll = false;
    card.classList.remove('snapping');
  }, { passive: true });

  card.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;

    const curY = e.touches[0].clientY;
    currentX = e.touches[0].clientX;
    distanceX = currentX - startX;

    // Check direction: if scrolling vertically, do not swipe
    if (Math.abs(curY - startY) > Math.abs(distanceX) && !isVerticalScroll) {
      isVerticalScroll = true;
      isSwiping = false;
      return;
    }

    // Only allow left drag (negative distance)
    if (distanceX < 0) {
      // Apply mechanical resistance as it pulls very far
      const translateAmount = Math.max(distanceX, -250); 
      card.style.transform = `translateX(${translateAmount}px)`;
      
      // Reveal red action background
      bgAction.style.opacity = '1';
      bgAction.classList.add('visible');
      
      // Scale dynamic trash content
      const scaleVal = Math.min(Math.abs(translateAmount) / 130, 1.25);
      const actionContent = bgAction.querySelector('.cart-item-bg-action-content');
      if (actionContent) {
        actionContent.style.transform = `scale(${scaleVal})`;
      }
    } else {
      // Revert if swiping right
      card.style.transform = `translateX(0px)`;
      bgAction.classList.remove('visible');
    }
  }, { passive: true });

  card.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    
    card.classList.add('snapping');
    
    if (distanceX <= thresholdDelete) {
      // Trigger full delete slide-out
      removeCartItemWithAnimation(productId);
    } else {
      // Snap back into place
      card.style.transform = 'translateX(0px)';
      setTimeout(() => {
        bgAction.classList.remove('visible');
      }, 200);
    }
    
    distanceX = 0;
  });

  // Mouse drag implementation for desktop preview validation
  card.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isSwiping = true;
    card.classList.remove('snapping');
    
    // Wire temporary document-wide events so mouse doesn't drop card on fast movement
    const onMouseMove = (moveEvt) => {
      if (!isSwiping) return;
      distanceX = moveEvt.clientX - startX;

      if (distanceX < 0) {
        const translateAmount = Math.max(distanceX, -250);
        card.style.transform = `translateX(${translateAmount}px)`;
        bgAction.style.opacity = '1';
        bgAction.classList.add('visible');
        
        const scaleVal = Math.min(Math.abs(translateAmount) / 130, 1.25);
        const actionContent = bgAction.querySelector('.cart-item-bg-action-content');
        if (actionContent) {
          actionContent.style.transform = `scale(${scaleVal})`;
        }
      } else {
        card.style.transform = 'translateX(0px)';
        bgAction.classList.remove('visible');
      }
    };

    const onMouseUp = () => {
      isSwiping = false;
      card.classList.add('snapping');

      if (distanceX <= thresholdDelete) {
        removeCartItemWithAnimation(productId);
      } else {
        card.style.transform = 'translateX(0px)';
        setTimeout(() => {
          bgAction.classList.remove('visible');
        }, 200);
      }
      
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      distanceX = 0;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

function removeCartItemWithAnimation(productId) {
  const card = document.getElementById(`card-fg-${productId}`);
  const wrapper = document.getElementById(`cart-wrap-${productId}`);
  
  if (!card || !wrapper) return;

  // 1. Slide foreground card completely left out of screen
  card.style.transform = 'translateX(-100%)';
  
  // 2. Add collapse transitions to the wrapper layout
  setTimeout(() => {
    wrapper.classList.add('collapsed');
    
    // 3. Remove from state and reload list
    setTimeout(() => {
      const removedIndex = state.cart.findIndex(item => item.product.id === productId);
      if (removedIndex !== -1) {
        const name = state.cart[removedIndex].product.name;
        state.cart.splice(removedIndex, 1);
        updateCartUI();
        showToast('Removed from cart', '🗑️');
      }
    }, 300);
  }, 150);
}

// --- Checkout Flow Logic ---
function initCheckoutFlow() {
  DOM.btnCartCheckout.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    renderCheckoutAddressesPills();
    navigateTo('checkout');
  });

  DOM.checkoutBackBtn.addEventListener('click', () => {
    navigateTo('cart', 'backward');
  });

  DOM.btnCartEmptyShop.addEventListener('click', () => {
    navigateTo('home', 'backward');
  });

  // Payment Toggle cards
  DOM.payShiuli.addEventListener('click', () => {
    DOM.payShiuli.classList.add('active');
    DOM.payOnline.classList.remove('active');
    state.selectedPayment = 'shiuli';
    DOM.btnPlaceOrder.innerHTML = '💵 Pay 20% COD Advance';
  });

  DOM.payOnline.addEventListener('click', () => {
    DOM.payOnline.classList.add('active');
    DOM.payShiuli.classList.remove('active');
    state.selectedPayment = 'online';
    DOM.btnPlaceOrder.innerHTML = '💳 Pay via Rozapay';
  });

  // Secure payment checkout submission
  DOM.checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = DOM.checkoutName.value.trim();
    const email = DOM.checkoutEmail.value.trim();
    const address = DOM.checkoutAddress.value.trim();

    if (!name || !email || !address) {
      alert('Please fill out all delivery details.');
      return;
    }

    // Calculate totals for Rozapay advance BEFORE resetting cart
    const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const delivery = subtotal > 0 ? 150 : 0;
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + delivery + tax;
    const advanceAmount = Math.round(total * 0.20);

    // Process order success screen text
    DOM.successMessage.innerHTML = `
      Thank you, <strong>${name}</strong>. Your order has been registered. An invoice has been emailed to <strong>${email}</strong>, and shipments will be dispatched to:<br>
      <span style="display:inline-block; margin-top:10px; font-style:italic; color:var(--color-primary);">${address}</span>
    `;

    // Simulated Checkout Gateway Flow based on payment method
    if (state.selectedPayment === 'online') {
      DOM.btnPlaceOrder.disabled = true;
      DOM.btnPlaceOrder.innerHTML = '🔄 Connecting to Rozapay...';

      setTimeout(() => {
        DOM.btnPlaceOrder.innerHTML = '✅ Payment Successful!';
        showToast('Payment Verified via Rozapay!', '💳');

        setTimeout(() => {
          DOM.btnPlaceOrder.disabled = false;
          DOM.btnPlaceOrder.innerHTML = '💳 Pay via Rozapay';
          
          // Reset Cart & navigate
          state.cart = [];
          updateCartUI();
          navigateTo('confirmation');
        }, 800);
      }, 1500);

    } else {
      // COD advance flow
      DOM.rozapayPanel.style.display = 'block';
      DOM.btnPayRozapay.style.display = 'block';
      DOM.btnPayRozapay.disabled = false;
      DOM.rozapaySuccessStatus.style.display = 'none';

      DOM.rozapayDesc.innerHTML = `As you selected Cash on Delivery, a 20% non-refundable advance of <strong>₹${advanceAmount.toLocaleString('en-IN')}</strong> is required to confirm your order dispatch.`;
      DOM.btnPayRozapay.innerHTML = `Pay ₹${advanceAmount.toLocaleString('en-IN')} Advance via Rozapay`;

      // Set up click handler for the Rozapay button (cloning to clean listeners)
      const newPayBtn = DOM.btnPayRozapay.cloneNode(true);
      DOM.btnPayRozapay.parentNode.replaceChild(newPayBtn, DOM.btnPayRozapay);
      DOM.btnPayRozapay = newPayBtn;

      DOM.btnPayRozapay.addEventListener('click', () => {
        DOM.btnPayRozapay.disabled = true;
        DOM.btnPayRozapay.innerHTML = '🔄 Processing Rozapay...';
        
        setTimeout(() => {
          DOM.btnPayRozapay.style.display = 'none';
          DOM.rozapaySuccessStatus.style.display = 'flex';
          showToast('Advance Paid via Rozapay!', '💳');
        }, 1500);
      });

      showToast('Order registered!', '🔒');
      
      // Reset Cart State & navigate
      state.cart = [];
      updateCartUI();
      
      setTimeout(() => {
        navigateTo('confirmation');
      }, 800);
    }
  });

  DOM.btnSuccessHome.addEventListener('click', () => {
    navigateTo('home', 'backward');
  });
}

// --- Profile Screen Flow ---
function initProfileFlow() {
  DOM.homeProfileBtn.addEventListener('click', () => {
    navigateTo('profile');
  });

  DOM.btnProfileSupport.addEventListener('click', () => {
    alert('Customer support ticket submitted! We will reach out to you within 2 hours.');
  });

  DOM.btnLogout.addEventListener('click', () => {
    state.user = null;
    showToast('Logged Out', '🚪');
    setTimeout(() => {
      navigateTo('login', 'backward');
    }, 500);
  });
}

// --- Saved Addresses Flow ---
function initAddressesFlow() {
  DOM.profileAddressesBtn.addEventListener('click', () => {
    renderAddressesList();
    navigateTo('saved-addresses');
  });

  DOM.addressesBackBtn.addEventListener('click', () => {
    navigateTo('profile', 'backward');
  });

  DOM.addAddressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const label = DOM.addressLabelInput.value.trim();
    const value = DOM.addressValueInput.value.trim();
    
    if (!label || !value) return;

    const newAddr = {
      id: 'addr-' + Date.now(),
      label: label,
      value: value
    };

    state.addresses.push(newAddr);
    
    DOM.addressLabelInput.value = '';
    DOM.addressValueInput.value = '';
    
    renderAddressesList();
    showToast('Address Saved!', '📍');
  });
}

function renderAddressesList() {
  DOM.addressesListContainer.innerHTML = '';

  if (state.addresses.length === 0) {
    DOM.addressesListContainer.innerHTML = `
      <div style="text-align:center; padding: 30px; font-size:0.85rem; color:var(--color-text-muted);">
        No saved addresses. Add a new one below!
      </div>
    `;
    return;
  }

  state.addresses.forEach(addr => {
    const card = document.createElement('div');
    card.style.cssText = 'background-color: var(--color-white); padding: 14px 18px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; justify-content: space-between; align-items: center; gap: 12px;';
    card.innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-primary); margin-bottom: 4px;">${addr.label}</div>
        <div style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.4;">${addr.value}</div>
      </div>
      <button style="background: none; border: none; font-size: 1.15rem; cursor: pointer; color: var(--color-danger);" class="delete-address-btn" data-id="${addr.id}">🗑️</button>
    `;

    card.querySelector('.delete-address-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteAddress(addr.id);
    });

    DOM.addressesListContainer.appendChild(card);
  });
}

function deleteAddress(id) {
  state.addresses = state.addresses.filter(addr => addr.id !== id);
  renderAddressesList();
  showToast('Address Removed', '🗑️');
}

function renderCheckoutAddressesPills() {
  if (state.addresses.length === 0) {
    DOM.checkoutSavedAddressesSelector.style.display = 'none';
    return;
  }

  DOM.checkoutSavedAddressesSelector.style.display = 'block';
  DOM.checkoutAddressesPills.innerHTML = '';

  state.addresses.forEach(addr => {
    const pill = document.createElement('button');
    pill.style.cssText = 'background-color: var(--color-cream-dark); border: 1px solid rgba(0,0,0,0.05); padding: 6px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; color: var(--color-text); cursor: pointer; transition: var(--transition-smooth);';
    pill.innerHTML = addr.label;

    pill.addEventListener('click', (e) => {
      e.preventDefault();
      DOM.checkoutAddress.value = addr.value;
      showToast('Address Loaded!', '📍');

      // Highlight active pill
      DOM.checkoutAddressesPills.querySelectorAll('button').forEach(b => {
        b.style.backgroundColor = 'var(--color-cream-dark)';
        b.style.color = 'var(--color-text)';
        b.style.borderColor = 'rgba(0,0,0,0.05)';
      });
      pill.style.backgroundColor = 'var(--color-sage-light)';
      pill.style.color = 'var(--color-primary)';
      pill.style.borderColor = 'var(--color-sage)';
    });

    DOM.checkoutAddressesPills.appendChild(pill);
  });
}


// --- Service & Repair Flow ---
function initServiceFlow() {
  // Video upload trigger
  DOM.videoUploadZone.addEventListener('click', () => {
    if (DOM.videoUploadProgress.style.display === 'none' && DOM.videoUploadPreview.style.display === 'none') {
      DOM.serviceVideoFile.click();
    }
  });

  // Simulated Video Uploading sequence
  DOM.serviceVideoFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show progress bar state
    DOM.videoUploadPrompt.style.display = 'none';
    DOM.videoUploadProgress.style.display = 'block';
    DOM.videoUploadPreview.style.display = 'none';

    let progress = 0;
    DOM.videoProgressBar.style.width = '0%';

    const interval = setInterval(() => {
      progress += 5;
      DOM.videoProgressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        
        // Show success preview state
        DOM.videoUploadProgress.style.display = 'none';
        DOM.videoUploadPreview.style.display = 'flex';
        DOM.videoFilenameLabel.textContent = file.name;
        
        // Convert bytes to MB
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
        DOM.videoFilesizeLabel.textContent = `(${fileSizeMB} MB)`;

        showToast('Video uploaded successfully!', '🎥');
      }
    }, 80);
  });

  // Submit service request form
  DOM.serviceForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const machine = DOM.serviceMachine.value;
    const address = DOM.servicePickupAddress.value.trim();
    const problem = DOM.serviceProblemDesc.value.trim();

    if (!address || !problem) {
      alert('Please fill out the pickup address and describe the issue.');
      return;
    }

    // Update confirmation text
    DOM.serviceSuccessText.innerHTML = `
      Our technician will collect your <strong>${machine}</strong> from:<br>
      <span style="display:inline-block; margin-top:8px; font-style:italic; color:var(--color-primary);">${address}</span><br>
      within the next 24 to 48 hours.
    `;

    showToast('Service Request Sent!', '🔧');

    // Toggle success screen inside service tab
    DOM.serviceForm.style.display = 'none';
    DOM.serviceSuccessBlock.style.display = 'block';
  });

  // Reset form after successful submission
  DOM.btnServiceOk.addEventListener('click', () => {
    DOM.serviceForm.style.display = 'block';
    DOM.serviceSuccessBlock.style.display = 'none';
    
    // Clear inputs
    DOM.serviceProblemDesc.value = '';
    DOM.servicePickupAddress.value = '';
    DOM.serviceVideoFile.value = '';
    
    // Reset video upload styling
    DOM.videoUploadPrompt.style.display = 'block';
    DOM.videoUploadProgress.style.display = 'none';
    DOM.videoUploadPreview.style.display = 'none';

    navigateTo('home', 'backward');
  });
}

function renderServiceAddressesPills() {
  if (state.addresses.length === 0) {
    DOM.serviceSavedAddressesSelector.style.display = 'none';
    return;
  }

  DOM.serviceSavedAddressesSelector.style.display = 'block';
  DOM.serviceAddressesPills.innerHTML = '';

  state.addresses.forEach(addr => {
    const pill = document.createElement('button');
    pill.style.cssText = 'background-color: var(--color-cream-dark); border: 1px solid rgba(0,0,0,0.05); padding: 6px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; color: var(--color-text); cursor: pointer; transition: var(--transition-smooth);';
    pill.innerHTML = addr.label;

    pill.addEventListener('click', (e) => {
      e.preventDefault();
      DOM.servicePickupAddress.value = addr.value;
      showToast('Pickup Address Loaded!', '📍');

      // Highlight active pill
      DOM.serviceAddressesPills.querySelectorAll('button').forEach(b => {
        b.style.backgroundColor = 'var(--color-cream-dark)';
        b.style.color = 'var(--color-text)';
        b.style.borderColor = 'rgba(0,0,0,0.05)';
      });
      pill.style.backgroundColor = 'var(--color-sage-light)';
      pill.style.color = 'var(--color-primary)';
      pill.style.borderColor = 'var(--color-sage)';
    });

    DOM.serviceAddressesPills.appendChild(pill);
  });
}

// --- Merchant Center Flow ---
function initManageFlow() {
  // Toggle between forms
  DOM.btnTogglePostOffer.addEventListener('click', () => {
    DOM.btnTogglePostOffer.className = 'btn-primary';
    DOM.btnTogglePostProduct.className = 'btn-secondary';
    DOM.btnTogglePostGift.className = 'btn-secondary';
    
    DOM.postOfferForm.style.display = 'block';
    DOM.postProductForm.style.display = 'none';
    DOM.postGiftForm.style.display = 'none';
  });

  DOM.btnTogglePostProduct.addEventListener('click', () => {
    DOM.btnTogglePostProduct.className = 'btn-primary';
    DOM.btnTogglePostOffer.className = 'btn-secondary';
    DOM.btnTogglePostGift.className = 'btn-secondary';

    DOM.postProductForm.style.display = 'block';
    DOM.postOfferForm.style.display = 'none';
    DOM.postGiftForm.style.display = 'none';
  });

  DOM.btnTogglePostGift.addEventListener('click', () => {
    DOM.btnTogglePostGift.className = 'btn-primary';
    DOM.btnTogglePostOffer.className = 'btn-secondary';
    DOM.btnTogglePostProduct.className = 'btn-secondary';

    DOM.postGiftForm.style.display = 'block';
    DOM.postOfferForm.style.display = 'none';
    DOM.postProductForm.style.display = 'none';
  });

  // Handle radio gradient selected borders
  const colorSelector = document.getElementById('offer-color-selector');
  if (colorSelector) {
    const labels = colorSelector.querySelectorAll('label');
    labels.forEach(label => {
      label.addEventListener('click', () => {
        labels.forEach(l => l.style.borderColor = 'transparent');
        label.style.borderColor = 'var(--color-primary)';
      });
    });
  }

  // Submit Post Offer Form
  DOM.postOfferForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = DOM.offerTitle.value.trim();
    const subtitle = DOM.offerSubtitle.value.trim();
    const code = DOM.offerCode.value.trim();
    const tag = DOM.offerTag.value.trim();
    
    const selectedColorInput = document.querySelector('input[name="offer-color"]:checked');
    const bgColor = selectedColorInput ? selectedColorInput.value : 'linear-gradient(135deg, #2c4c38 0%, #466750 100%)';

    if (!title || !subtitle || !code || !tag) return;

    const newOffer = {
      id: 'offer-' + Date.now(),
      title: title,
      subtitle: subtitle,
      code: code,
      tag: tag,
      bgColor: bgColor,
      image: 'assets/carousel_tools.jpg'
    };

    // Prepend new offer and re-render
    carouselOffers.unshift(newOffer);
    initCarousel();
    setCarouselSlide(0);

    // Clear inputs
    DOM.offerTitle.value = '';
    DOM.offerSubtitle.value = '';
    DOM.offerCode.value = '';
    DOM.offerTag.value = '';

    showToast('Promo Offer Published!', '📢');
    
    setTimeout(() => {
      navigateTo('home', 'backward');
    }, 400);
  });

  // Submit Post Product Form
  DOM.postProductForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = DOM.prodName.value.trim();
    const subtitle = DOM.prodSubtitle.value.trim();
    const price = DOM.prodPrice.value.trim();
    const category = DOM.prodCategory.value;
    const highlight = DOM.prodHighlight.value.trim();
    const desc = DOM.prodDesc.value.trim();
    const specL = DOM.prodSpecL.value.trim();
    const specV = DOM.prodSpecV.value.trim();

    if (!name || !subtitle || !price || !desc) return;

    const newProduct = {
      id: 'prod-' + Date.now(),
      category: category,
      name: name,
      subtitle: subtitle,
      price: parseFloat(price),
      rating: 5.0,
      reviews: 0,
      image: category === 'pots' ? 'assets/pot_terracotta.jpg' : 'assets/trowel_walnut.jpg',
      description: desc,
      specifications: specL && specV ? [{ label: specL, value: specV }] : [],
      highlight: highlight || 'NEW ARRIVAL'
    };

    // Prepend new product to catalog and filter home products
    products.unshift(newProduct);
    renderProducts();
    filterCatalog('all');

    // Clear inputs
    DOM.prodName.value = '';
    DOM.prodSubtitle.value = '';
    DOM.prodPrice.value = '';
    DOM.prodHighlight.value = '';
    DOM.prodDesc.value = '';
    DOM.prodSpecL.value = '';
    DOM.prodSpecV.value = '';

    showToast('New Product Listed!', '🪴');

    setTimeout(() => {
      navigateTo('home', 'backward');
    }, 400);
  });

  // Submit Post Gift Form
  DOM.postGiftForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = DOM.giftTitleInput.value.trim();
    const desc = DOM.giftDescInput.value.trim();
    const icon = DOM.giftIconInput.value.trim();

    if (!title || !desc || !icon) return;

    state.nextGift = { title, desc, icon };
    updateGiftPosterUI();

    // Clear inputs
    DOM.giftTitleInput.value = '';
    DOM.giftDescInput.value = '';
    DOM.giftIconInput.value = '';

    showToast('Gift Poster Updated!', '🎁');

    setTimeout(() => {
      navigateTo('home', 'backward');
    }, 400);
  });
}

function updateGiftPosterUI() {
  if (DOM.homeGiftTitle && DOM.homeGiftDesc && DOM.homeGiftIcon) {
    DOM.homeGiftTitle.textContent = state.nextGift.title;
    DOM.homeGiftDesc.textContent = state.nextGift.desc;
    DOM.homeGiftIcon.textContent = state.nextGift.icon;
  }
}
