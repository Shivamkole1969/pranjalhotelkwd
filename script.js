/* =============================================
   HOTEL PRANJAL - Restaurant Ordering System
   Menu data is loaded from menu-data.js
   ============================================= */

// Cart State
let cart = [];
let currentItem = null;
let currentQuantity = 1;
let customerDetails = {};
let currentOrderId = null;

// Restaurant Operating Hours (IST)
const RESTAURANT_OPEN_HOUR = 12;  // 12:00 PM
const RESTAURANT_CLOSE_HOUR = 22; // 10:00 PM

// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    initNavigation();
    initRestaurantHours(); // Check if restaurant is open
    renderMenu();
    initMenuFilter();
    initMenuSearch();
    initCart();
    initModals();
    initFeedback();
    initScrollEffects();
});

// Check Restaurant Operating Hours
function initRestaurantHours() {
    checkRestaurantStatus();
    // Check every minute
    setInterval(checkRestaurantStatus, 60000);
}

// Global variable to track if restaurant is open
let isRestaurantOpen = true;

function checkRestaurantStatus() {
    // Get current IST time
    const now = new Date();
    const istOffset = 5.5 * 60; // IST is UTC+5:30
    const utcOffset = now.getTimezoneOffset();
    const istTime = new Date(now.getTime() + (utcOffset + istOffset) * 60000);
    const currentHour = istTime.getHours();

    isRestaurantOpen = currentHour >= RESTAURANT_OPEN_HOUR && currentHour < RESTAURANT_CLOSE_HOUR;

    const instantOrderBtn = document.querySelector('.order-option.primary');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (isRestaurantOpen) {
        // Restaurant is OPEN - show ordering options
        if (instantOrderBtn) {
            instantOrderBtn.style.display = 'flex';
            instantOrderBtn.style.background = '';
            instantOrderBtn.style.boxShadow = '';
            instantOrderBtn.style.cursor = '';
            instantOrderBtn.href = '#menu';
            instantOrderBtn.onclick = null;
            instantOrderBtn.innerHTML = `
                <div class="option-icon"><i class="fas fa-bolt"></i></div>
                <div class="option-text">
                    <span class="option-title">Instant Order</span>
                    <span class="option-desc">Order from Website</span>
                </div>
            `;
        }
        // Checkout button enabled (if cart has items >= 500)
        if (checkoutBtn) {
            checkoutBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Proceed to Checkout';
        }
    } else {
        // Restaurant is CLOSED - show closed message but allow browsing menu
        if (instantOrderBtn) {
            instantOrderBtn.style.display = 'flex';
            instantOrderBtn.style.background = 'linear-gradient(135deg, #6c757d 0%, #495057 100%)';
            instantOrderBtn.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.2)';
            instantOrderBtn.style.cursor = 'not-allowed';
            instantOrderBtn.href = '#menu';
            instantOrderBtn.onclick = (e) => {
                e.preventDefault();
                showNotification('We are closed now. You can browse the menu and add items to cart. Checkout available 12 PM - 10 PM.', 'error');
                // Still scroll to menu
                document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            };
            instantOrderBtn.innerHTML = `
                <div class="option-icon" style="background: #dc3545;"><i class="fas fa-clock"></i></div>
                <div class="option-text">
                    <span class="option-title">Currently Closed</span>
                    <span class="option-desc">Browse Menu • Order: 12PM-10PM</span>
                </div>
            `;
        }
        // Checkout button disabled with message
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.innerHTML = '<i class="fas fa-clock"></i> Order Available: 12 PM - 10 PM';
        }
    }

    // Update cart UI to reflect checkout status
    updateCartUI();
}

// Preloader
function initPreloader() {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    });
}

// Navigation
function initNavigation() {
    const mobileNavItems = document.querySelectorAll('.mobile-bottom-nav .nav-item[data-section]');
    const sections = document.querySelectorAll('section[id]');

    mobileNavItems.forEach(item => {
        item.addEventListener('click', function (e) {
            mobileNavItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 150;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                mobileNavItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.dataset.section === id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
}

// Track if view more is expanded
let menuExpanded = false;

// Render Menu
function renderMenu(category = 'all', searchTerm = '') {
    const menuGrid = document.getElementById('menuGrid');
    let filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

    if (searchTerm) {
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><p>No dishes found</p></div>`;
        return;
    }

    // Show only 10 items for "all" category initially, or all for specific categories
    const showLimit = (category === 'all' && !menuExpanded && !searchTerm) ? 10 : filteredItems.length;
    const itemsToShow = filteredItems.slice(0, showLimit);
    const hasMore = filteredItems.length > showLimit;

    menuGrid.innerHTML = itemsToShow.map(item => `
        <div class="menu-card" data-category="${item.category}" data-id="${item.id}">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="menu-badge ${item.badge}">${item.badge === 'bestseller' ? 'Bestseller' : item.badge === 'premium' ? 'Premium' : 'Popular'}</span>` : ''}
            </div>
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3>${item.name}</h3>
                    <span class="price">₹${item.price}</span>
                </div>
                <p>${item.description}</p>
                <div class="menu-card-footer">
                    <span class="veg-indicator"><i class="fas fa-circle"></i> Pure Veg</span>
                    <button class="add-btn" onclick="openCustomize(${item.id})">
                        <i class="fas fa-plus"></i> ADD
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add View More button if there are more items
    if (hasMore) {
        menuGrid.innerHTML += `
            <div class="view-more-container">
                <button class="view-more-btn" onclick="showAllMenu()">
                    <i class="fas fa-chevron-down"></i> View All ${filteredItems.length} Dishes
                </button>
            </div>
        `;
    }
}

// Show all menu items
function showAllMenu() {
    menuExpanded = true;
    renderMenu('all');
}

// Menu Filter
function initMenuFilter() {
    const menuTabs = document.querySelectorAll('.menu-tab');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const searchTerm = document.getElementById('menuSearch').value;
            renderMenu(this.dataset.category, searchTerm);
        });
    });
}

// Menu Search
function initMenuSearch() {
    const searchInput = document.getElementById('menuSearch');
    let debounceTimer;

    searchInput.addEventListener('input', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const activeCategory = document.querySelector('.menu-tab.active').dataset.category;
            renderMenu(activeCategory, this.value);
        }, 300);
    });
}

// Categories that don't need oil/spice customization
const NON_FOOD_CATEGORIES = ['beverages', 'mocktails'];

// Customize Modal
function openCustomize(itemId) {
    currentItem = menuItems.find(item => item.id === itemId);
    currentQuantity = 1;

    const modal = document.getElementById('customizeModal');
    const dishPreview = document.getElementById('dishPreview');
    const customizeOptions = document.querySelector('.customize-options');
    const spiceSection = customizeOptions.querySelector('h4:first-of-type');
    const spiceOptions = document.getElementById('spiceOptions');
    const oilSection = customizeOptions.querySelectorAll('h4')[1];
    const oilOptions = document.getElementById('oilOptions');

    dishPreview.innerHTML = `
        <img src="${currentItem.image}" alt="${currentItem.name}">
        <div>
            <h4>${currentItem.name}</h4>
            <span class="price">₹${currentItem.price}</span>
        </div>
    `;

    document.getElementById('qtyValue').textContent = currentQuantity;
    updateItemTotal();

    // Hide spice/oil options for beverages and mocktails
    const isBeverage = NON_FOOD_CATEGORIES.includes(currentItem.category);
    if (spiceSection) spiceSection.style.display = isBeverage ? 'none' : 'block';
    if (spiceOptions) spiceOptions.style.display = isBeverage ? 'none' : 'flex';
    if (oilSection) oilSection.style.display = isBeverage ? 'none' : 'block';
    if (oilOptions) oilOptions.style.display = isBeverage ? 'none' : 'flex';

    document.querySelector('input[name="spice"][value="normal"]').checked = true;
    document.querySelector('input[name="oil"][value="normal"]').checked = true;
    document.getElementById('specialInstructions').value = '';

    modal.classList.add('active');
}

function updateItemTotal() {
    document.getElementById('itemTotal').textContent = `₹${currentItem.price * currentQuantity}`;
}

// Cart Functions
function initCart() {
    const cartNavBtn = document.getElementById('cartNavBtn');
    const desktopCartBtn = document.getElementById('desktopCartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    [cartNavBtn, desktopCartBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    });

    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    checkoutBtn.addEventListener('click', () => {
        if (getSubtotal() >= 500) {
            closeCartSidebar();
            openCustomerModal();
        }
    });
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart() {
    const isBeverage = NON_FOOD_CATEGORIES.includes(currentItem.category);
    const spice = isBeverage ? 'none' : document.querySelector('input[name="spice"]:checked').value;
    const oil = isBeverage ? 'none' : document.querySelector('input[name="oil"]:checked').value;
    const instructions = document.getElementById('specialInstructions').value;

    const cartItem = {
        id: Date.now(),
        itemId: currentItem.id,
        name: currentItem.name,
        price: currentItem.price,
        image: currentItem.image,
        quantity: currentQuantity,
        category: currentItem.category,
        spice: spice,
        oil: oil,
        instructions: instructions
    };

    cart.push(cartItem);
    updateCartUI();
    closeCustomizeModal();
    showNotification(`${currentItem.name} added to cart!`);
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    updateCartUI();
}

function updateItemQuantity(cartItemId, change) {
    const item = cart.find(i => i.id === cartItemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartCount = document.getElementById('cartCount');
    const subtotalEl = document.getElementById('subtotal');
    const discountRow = document.getElementById('discountRow');
    const discountAmount = document.getElementById('discountAmount');
    const totalAmount = document.getElementById('totalAmount');
    const minOrderWarning = document.getElementById('minOrderWarning');
    const checkoutBtn = document.getElementById('checkoutBtn');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    if (cartCount) cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => {
            const isBeverage = NON_FOOD_CATEGORIES.includes(item.category);
            // Build customization label for food items only
            let customizationLabel = '';
            if (!isBeverage && item.spice !== 'none') {
                if (item.spice === 'less') customizationLabel += '<span class="pref-tag spice-less"><i class="fas fa-pepper-hot"></i> Less Spicy</span>';
                else if (item.spice === 'normal') customizationLabel += '<span class="pref-tag spice-normal"><i class="fas fa-pepper-hot"></i> Normal Spice</span>';
                else if (item.spice === 'extra') customizationLabel += '<span class="pref-tag spice-extra"><i class="fas fa-fire"></i> Extra Spicy</span>';
            }
            if (!isBeverage && item.oil !== 'none') {
                if (item.oil === 'less') customizationLabel += '<span class="pref-tag oil-less"><i class="fas fa-tint-slash"></i> Less Oil</span>';
                else if (item.oil === 'normal') customizationLabel += '<span class="pref-tag oil-normal"><i class="fas fa-tint"></i> Normal Oil</span>';
            }
            if (item.instructions) {
                customizationLabel += `<span class="pref-tag instructions"><i class="fas fa-comment"></i> "${item.instructions.substring(0, 12)}..."</span>`;
            }

            return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="customization">
                        ${customizationLabel}
                    </div>
                    <span class="item-price">₹${item.price * item.quantity}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="qty-controls">
                        <button onclick="updateItemQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button onclick="updateItemQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `}).join('');
    }

    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const afterDiscount = subtotal - discount;
    const gst = Math.round(afterDiscount * 0.05); // 5% GST
    const total = afterDiscount + gst;

    subtotalEl.textContent = `₹${subtotal}`;

    // GST display
    const gstRow = document.getElementById('gstRow');
    const gstAmount = document.getElementById('gstAmount');
    if (gstRow && gstAmount) {
        gstAmount.textContent = `₹${gst}`;
    }

    if (discount > 0) {
        discountRow.style.display = 'flex';
        discountAmount.textContent = `-₹${discount}`;
    } else {
        discountRow.style.display = 'none';
    }

    totalAmount.textContent = `₹${total}`;

    if (subtotal < 500) {
        minOrderWarning.classList.remove('hidden');
        checkoutBtn.disabled = true;
        checkoutBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Proceed to Checkout';
    } else if (!isRestaurantOpen) {
        // Restaurant is closed - disable checkout
        minOrderWarning.classList.add('hidden');
        checkoutBtn.disabled = true;
        checkoutBtn.innerHTML = '<i class="fas fa-clock"></i> Order Available: 12 PM - 10 PM';
    } else {
        // All good - enable checkout
        minOrderWarning.classList.add('hidden');
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Proceed to Checkout';
    }
}

function getSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateDiscount(subtotal) {
    if (subtotal >= 2000) {
        return Math.min(subtotal * 0.15, 300);
    } else if (subtotal >= 800) {
        return Math.min(subtotal * 0.10, 100);
    }
    return 0;
}

// Modals
function initModals() {
    // Customize Modal
    const customizeModal = document.getElementById('customizeModal');
    const closeCustomize = document.getElementById('closeCustomize');
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const addToCartBtn = document.getElementById('addToCartBtn');

    closeCustomize.addEventListener('click', closeCustomizeModal);
    customizeModal.addEventListener('click', (e) => {
        if (e.target === customizeModal) closeCustomizeModal();
    });

    qtyMinus.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            document.getElementById('qtyValue').textContent = currentQuantity;
            updateItemTotal();
        }
    });

    qtyPlus.addEventListener('click', () => {
        currentQuantity++;
        document.getElementById('qtyValue').textContent = currentQuantity;
        updateItemTotal();
    });

    addToCartBtn.addEventListener('click', addToCart);

    // Customer Details Modal
    const customerModal = document.getElementById('customerModal');
    const closeCustomer = document.getElementById('closeCustomer');
    const proceedToPayment = document.getElementById('proceedToPayment');

    closeCustomer.addEventListener('click', closeCustomerModal);
    customerModal.addEventListener('click', (e) => {
        if (e.target === customerModal) closeCustomerModal();
    });

    proceedToPayment.addEventListener('click', validateAndProceed);

    // Payment modal
    const closePayment = document.getElementById('closePayment');
    const paymentModal = document.getElementById('paymentModal');
    const copyUPI = document.getElementById('copyUPI');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');

    closePayment.addEventListener('click', closePaymentModal);
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) closePaymentModal();
    });

    copyUPI.addEventListener('click', () => {
        navigator.clipboard.writeText('7517972020@ybl');
        showNotification('UPI ID copied!');
    });

    confirmOrderBtn.addEventListener('click', confirmOrder);
}

function closeCustomizeModal() {
    document.getElementById('customizeModal').classList.remove('active');
}

function openCustomerModal() {
    document.getElementById('customerModal').classList.add('active');
}

function closeCustomerModal() {
    document.getElementById('customerModal').classList.remove('active');
}

function validateAndProceed() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const address = document.getElementById('customerAddress').value.trim();

    if (!name) {
        showNotification('Please enter your name', 'error');
        return;
    }

    if (!phone || phone.length !== 10) {
        showNotification('Please enter valid 10-digit phone number', 'error');
        return;
    }

    if (!address) {
        showNotification('Please enter delivery address', 'error');
        return;
    }

    customerDetails = { name, phone, email, address };
    closeCustomerModal();
    openPaymentModal();
}

function openPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const finalTotal = document.getElementById('finalTotal');

    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const afterDiscount = subtotal - discount;
    const gst = Math.round(afterDiscount * 0.05);
    const total = afterDiscount + gst;

    orderSummaryItems.innerHTML = cart.map(item => `
        <div class="summary-row">
            <span>${item.name} x${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');

    if (discount > 0) {
        orderSummaryItems.innerHTML += `
            <div class="summary-row discount">
                <span>Discount</span>
                <span>-₹${discount}</span>
            </div>
        `;
    }

    orderSummaryItems.innerHTML += `
        <div class="summary-row">
            <span>GST (5%)</span>
            <span>₹${gst}</span>
        </div>
    `;

    finalTotal.textContent = `₹${total}`;
    paymentModal.classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function confirmOrder() {
    // Generate unique Order ID
    currentOrderId = generateOrderId();

    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const afterDiscount = subtotal - discount;
    const gst = Math.round(afterDiscount * 0.05); // 5% GST
    const total = afterDiscount + gst;
    const orderTime = new Date().toLocaleString('en-IN');

    // Build order message for RESTAURANT
    let restaurantMessage = `🔔 *NEW ORDER RECEIVED*\n`;
    restaurantMessage += `📋 *Order ID: ${currentOrderId}*\n`;
    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;
    restaurantMessage += `📅 ${orderTime}\n\n`;
    restaurantMessage += `👤 *Customer Details:*\n`;
    restaurantMessage += `• Name: ${customerDetails.name}\n`;
    restaurantMessage += `• Phone: ${customerDetails.phone}\n`;
    if (customerDetails.email) restaurantMessage += `• Email: ${customerDetails.email}\n`;
    restaurantMessage += `• Address: ${customerDetails.address}\n\n`;
    restaurantMessage += `📋 *Order Items:*\n`;
    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;

    cart.forEach(item => {
        restaurantMessage += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
        if (item.spice && item.spice !== 'normal' && item.spice !== 'none') restaurantMessage += `  └ ${item.spice} spicy\n`;
        if (item.oil && item.oil !== 'normal' && item.oil !== 'none') restaurantMessage += `  └ ${item.oil} oil\n`;
        if (item.instructions) restaurantMessage += `  └ "${item.instructions}"\n`;
    });

    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;
    restaurantMessage += `💰 Subtotal: ₹${subtotal}\n`;
    if (discount > 0) restaurantMessage += `🎉 Discount: -₹${discount}\n`;
    restaurantMessage += `📄 GST (5%): ₹${gst}\n`;
    restaurantMessage += `*💵 TOTAL: ₹${total}*\n\n`;
    restaurantMessage += `💳 Payment: UPI\n`;
    restaurantMessage += `📍 Delivery: Within 2 KM\n`;
    restaurantMessage += `⏰ ETA: 30-60 mins\n\n`;
    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;
    restaurantMessage += `📸 *PLEASE SHARE PAYMENT PROOF*\n`;
    restaurantMessage += `Kindly reply with a screenshot of your UPI payment transaction to confirm your order. Thank you! 🙏\n`;
    restaurantMessage += `━━━━━━━━━━━━━━━━━`;

    // Build confirmation message for CUSTOMER
    let customerMessage = `✅ *ORDER CONFIRMED*\n`;
    customerMessage += `🏨 *Hotel Pranjal, Kurduwadi*\n`;
    customerMessage += `━━━━━━━━━━━━━━━━━\n\n`;
    customerMessage += `📋 *Order ID: ${currentOrderId}*\n\n`;
    customerMessage += `Hi ${customerDetails.name}! 👋\n\n`;
    customerMessage += `Thank you for your order!\n\n`;
    customerMessage += `📦 *Your Order:*\n`;

    cart.forEach(item => {
        customerMessage += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    customerMessage += `\n━━━━━━━━━━━━━━━━━\n`;
    customerMessage += `💰 Subtotal: ₹${subtotal}\n`;
    if (discount > 0) customerMessage += `🎉 Discount: -₹${discount}\n`;
    customerMessage += `📄 GST (5%): ₹${gst}\n`;
    customerMessage += `*💵 Total: ₹${total}*\n\n`;
    customerMessage += `📍 *Delivery Address:*\n${customerDetails.address}\n\n`;
    customerMessage += `⏰ *Expected Delivery:* 30-60 minutes\n\n`;
    customerMessage += `📞 For queries: +91 75179 72020\n\n`;
    customerMessage += `_Thanks for ordering from Hotel Pranjal!_\n`;
    customerMessage += `🏆 _Best Veg Restaurant in Kurduwadi_\n`;
    customerMessage += `GSTIN: 27KXQPS3637L1ZC`;

    // Open WhatsApp to send order to restaurant
    const restaurantWhatsApp = `https://wa.me/917517972020?text=${encodeURIComponent(restaurantMessage)}`;
    window.open(restaurantWhatsApp, '_blank');

    // After 2 seconds, open WhatsApp to send confirmation to customer
    setTimeout(() => {
        const customerWhatsApp = `https://wa.me/91${customerDetails.phone}?text=${encodeURIComponent(customerMessage)}`;
        window.open(customerWhatsApp, '_blank');
    }, 2000);

    // Clear cart and show success
    cart = [];
    updateCartUI();
    closePaymentModal();
    showSuccessModal();
}

function showSuccessModal() {
    // Display the order ID
    const displayOrderId = document.getElementById('displayOrderId');
    if (displayOrderId && currentOrderId) {
        displayOrderId.textContent = currentOrderId;
    }

    // Play confirmation sound
    const confirmSound = document.getElementById('orderConfirmSound');
    if (confirmSound) {
        confirmSound.volume = 0.5;
        confirmSound.play().catch(e => console.log('Audio play prevented:', e));
    }

    document.getElementById('successModal').classList.add('active');
}

// Copy Order ID to clipboard
function copyOrderId() {
    if (currentOrderId) {
        navigator.clipboard.writeText(currentOrderId).then(() => {
            const copyBtn = document.querySelector('.copy-order-btn');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.classList.add('copied');
            showNotification('Order ID copied to clipboard!');

            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    }
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
    // Reset customer form
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerAddress').value = '';
}

// Feedback
function initFeedback() {
    const starRating = document.getElementById('starRating');
    const stars = starRating.querySelectorAll('i');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = parseInt(this.dataset.rating);
            stars.forEach((s, i) => {
                s.classList.toggle('active', i < selectedRating);
            });
        });

        star.addEventListener('mouseenter', function () {
            const rating = parseInt(this.dataset.rating);
            stars.forEach((s, i) => {
                s.style.color = i < rating ? '#D4AF37' : '#D0C8BD';
            });
        });

        star.addEventListener('mouseleave', function () {
            stars.forEach((s, i) => {
                s.style.color = i < selectedRating ? '#D4AF37' : '#D0C8BD';
            });
        });
    });

    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('feedbackName').value;
        const phone = document.getElementById('feedbackPhone').value;
        const message = document.getElementById('feedbackMessage').value;

        if (selectedRating === 0) {
            showNotification('Please select a rating!', 'error');
            return;
        }

        let feedback = `⭐ *FEEDBACK - Hotel Pranjal*\n\n`;
        feedback += `👤 *Name:* ${name}\n`;
        feedback += `📱 *Phone:* ${phone}\n`;
        feedback += `⭐ *Rating:* ${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}\n`;
        feedback += `💬 *Feedback:* ${message}`;

        const whatsappURL = `https://wa.me/917517972020?text=${encodeURIComponent(feedback)}`;
        window.open(whatsappURL, '_blank');

        this.reset();
        selectedRating = 0;
        stars.forEach(s => s.classList.remove('active'));
        showNotification('Thank you for your feedback!', 'success');
    });
}

// Scroll Effects
function initScrollEffects() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Notification
function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 10000;
        animation: slideDown 0.3s ease;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
    .no-results { grid-column: 1/-1; text-align: center; padding: 40px; color: #9B9186; }
    .no-results i { font-size: 3rem; margin-bottom: 15px; display: block; }
`;
document.head.appendChild(style);

// FAQ Toggle Function
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

console.log('🍽️ Hotel Pranjal - Best Veg Restaurant in Kurduwadi');
console.log('📍 Madha Road, Kurduwadi | 📞 +91 75179 72020');
console.log('🏢 GSTIN: 27KXQPS3637L1ZC');

// =============================================
// DARK MODE FUNCTIONALITY
// =============================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const darkModeIconMobile = document.getElementById('darkModeIconMobile');

    // Check for saved preference - Default is light mode
    // Only enable dark mode if user explicitly saved it as 'dark'
    const savedTheme = localStorage.getItem('hotelPranjalTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateDarkModeIcons(true);
    } else {
        // Ensure light mode is default - remove dark-mode class if present
        document.body.classList.remove('dark-mode');
        updateDarkModeIcons(false);
    }

    // Desktop toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Mobile toggle
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('hotelPranjalTheme', isDark ? 'dark' : 'light');
    updateDarkModeIcons(isDark);

    // Show notification
    showNotification(isDark ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
}

function updateDarkModeIcons(isDark) {
    const darkModeIcon = document.getElementById('darkModeIcon');
    const darkModeIconMobile = document.getElementById('darkModeIconMobile');

    if (darkModeIcon) {
        darkModeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (darkModeIconMobile) {
        darkModeIconMobile.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// =============================================
// LIVE STATUS INDICATOR
// =============================================

function updateLiveStatusIndicators() {
    const liveStatusDesktop = document.getElementById('liveStatusDesktop');
    const mobileStatusBar = document.getElementById('mobileStatusBar');
    const mobileStatusText = document.getElementById('mobileStatusText');

    // Get current IST time
    const now = new Date();
    const istOffset = 5.5 * 60; // IST is UTC+5:30
    const utcOffset = now.getTimezoneOffset();
    const istTime = new Date(now.getTime() + (utcOffset + istOffset) * 60000);
    const currentHour = istTime.getHours();
    const currentMinute = istTime.getMinutes();

    const isOpen = currentHour >= RESTAURANT_OPEN_HOUR && currentHour < RESTAURANT_CLOSE_HOUR;

    // Only show "Open Now" status during hotel operating hours
    // Hide status indicators when restaurant is closed
    if (isOpen) {
        // Calculate time until close
        const hoursUntilClose = RESTAURANT_CLOSE_HOUR - currentHour - 1;
        const minutesUntilClose = 60 - currentMinute;
        let statusMessage = '';
        if (hoursUntilClose <= 1) {
            statusMessage = `Open • Closes in ${hoursUntilClose}h ${minutesUntilClose}m`;
        } else {
            statusMessage = 'Open Now • 12 PM - 10 PM';
        }

        // Show and update desktop status
        if (liveStatusDesktop) {
            liveStatusDesktop.style.display = 'flex';
            const statusText = liveStatusDesktop.querySelector('.status-text');
            if (statusText) {
                statusText.textContent = 'Open Now';
            }
            liveStatusDesktop.classList.remove('closed');
        }

        // Show and update mobile status bar
        if (mobileStatusBar) {
            mobileStatusBar.style.display = 'flex';
            mobileStatusBar.classList.remove('closed');
        }
        if (mobileStatusText) {
            mobileStatusText.textContent = statusMessage;
        }
    } else {
        // Hide status indicators when restaurant is closed
        if (liveStatusDesktop) {
            liveStatusDesktop.style.display = 'none';
        }
        if (mobileStatusBar) {
            mobileStatusBar.style.display = 'none';
        }
    }
}

// =============================================
// SCROLL ANIMATIONS
// =============================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-header, .menu-card, .contact-card, .review-card, .faq-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll', 'visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Initialize new features on DOM load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dark mode
    initDarkMode();

    // Update live status indicators
    updateLiveStatusIndicators();
    setInterval(updateLiveStatusIndicators, 60000); // Update every minute

    // Initialize scroll animations
    setTimeout(initScrollAnimations, 100);
});
