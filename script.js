/* =============================================
   HOTEL PRANJAL - Restaurant Ordering System
   ============================================= */

// Menu Data
const menuItems = [
    { id: 1, name: "Paneer Tikka", price: 180, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Marinated cottage cheese grilled to perfection", badge: "bestseller" },
    { id: 2, name: "Veg Manchurian", price: 150, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Crispy vegetable balls in tangy sauce", badge: "popular" },
    { id: 3, name: "Spring Rolls", price: 120, category: "starters", image: "https://images.unsplash.com/photo-1548507200-e587de219312?w=400", description: "Crispy rolls stuffed with vegetables" },
    { id: 4, name: "Paneer Butter Masala", price: 200, category: "mains", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400", description: "Creamy tomato gravy with soft paneer", badge: "bestseller" },
    { id: 5, name: "Dal Makhani", price: 160, category: "mains", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Slow-cooked black lentils in rich gravy" },
    { id: 6, name: "Veg Biryani", price: 180, category: "mains", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Fragrant rice with spiced vegetables", badge: "bestseller" },
    { id: 7, name: "Kadai Paneer", price: 190, category: "mains", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer in spicy bell pepper gravy" },
    { id: 8, name: "Shahi Paneer", price: 210, category: "mains", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Royal paneer in creamy cashew gravy" },
    { id: 9, name: "Special Thali", price: 250, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Complete meal with 4 dishes, rice, roti, sweet", badge: "bestseller" },
    { id: 10, name: "Mini Thali", price: 150, category: "thali", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "3 dishes with rice and 2 rotis" },
    { id: 11, name: "Veg Fried Rice", price: 140, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Wok-tossed rice with vegetables" },
    { id: 12, name: "Hakka Noodles", price: 130, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Stir-fried noodles with vegetables", badge: "popular" },
    { id: 13, name: "Chilli Paneer", price: 170, category: "chinese", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Spicy Indo-Chinese paneer dish" },
    { id: 14, name: "Cold Coffee", price: 80, category: "beverages", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", description: "Creamy chilled coffee with ice cream", badge: "bestseller" },
    { id: 15, name: "Fresh Lime Soda", price: 50, category: "beverages", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", description: "Refreshing lime with soda" },
    { id: 16, name: "Mango Lassi", price: 70, category: "beverages", image: "https://images.unsplash.com/photo-1626200419199-bc954a39a111?w=400", description: "Sweet mango yogurt drink" },
    { id: 17, name: "Masala Chai", price: 30, category: "beverages", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400", description: "Traditional Indian spiced tea" },
];

// Cart State
let cart = [];
let currentItem = null;
let currentQuantity = 1;

// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    initNavigation();
    renderMenu();
    initMenuFilter();
    initCart();
    initModals();
    initFeedback();
    initScrollEffects();
});

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

    // Mobile nav click
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function (e) {
            mobileNavItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll spy
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

// Render Menu
function renderMenu(category = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-card" data-category="${item.category}" data-id="${item.id}">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="menu-badge ${item.badge}">${item.badge === 'bestseller' ? 'Bestseller' : 'Popular'}</span>` : ''}
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
}

// Menu Filter
function initMenuFilter() {
    const menuTabs = document.querySelectorAll('.menu-tab');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderMenu(this.dataset.category);
        });
    });
}

// Customize Modal
function openCustomize(itemId) {
    currentItem = menuItems.find(item => item.id === itemId);
    currentQuantity = 1;

    const modal = document.getElementById('customizeModal');
    const dishPreview = document.getElementById('dishPreview');

    dishPreview.innerHTML = `
        <img src="${currentItem.image}" alt="${currentItem.name}">
        <div>
            <h4>${currentItem.name}</h4>
            <span class="price">₹${currentItem.price}</span>
        </div>
    `;

    document.getElementById('qtyValue').textContent = currentQuantity;
    updateItemTotal();

    // Reset options
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
            openPaymentModal();
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
    const spice = document.querySelector('input[name="spice"]:checked').value;
    const oil = document.querySelector('input[name="oil"]:checked').value;
    const instructions = document.getElementById('specialInstructions').value;

    const cartItem = {
        id: Date.now(),
        itemId: currentItem.id,
        name: currentItem.name,
        price: currentItem.price,
        image: currentItem.image,
        quantity: currentQuantity,
        spice: spice,
        oil: oil,
        instructions: instructions
    };

    cart.push(cartItem);
    updateCartUI();
    closeCustomizeModal();

    // Show brief notification
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
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="customization">
                        ${item.spice !== 'normal' ? `<span>${item.spice} spicy</span>` : ''}
                        ${item.oil !== 'normal' ? `<span>${item.oil} oil</span>` : ''}
                        ${item.instructions ? `<span>"${item.instructions.substring(0, 20)}..."</span>` : ''}
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
        `).join('');
    }

    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = subtotal - discount;

    subtotalEl.textContent = `₹${subtotal}`;

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
    } else {
        minOrderWarning.classList.add('hidden');
        checkoutBtn.disabled = false;
    }
}

function getSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateDiscount(subtotal) {
    if (subtotal >= 2000) {
        return Math.min(subtotal * 0.15, 200); // 15% up to ₹200
    } else if (subtotal >= 800) {
        return Math.min(subtotal * 0.10, 100); // 10% up to ₹100
    }
    return 0;
}

// Modals
function initModals() {
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

function openPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const finalTotal = document.getElementById('finalTotal');

    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = subtotal - discount;

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

    finalTotal.textContent = `₹${total}`;
    paymentModal.classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function confirmOrder() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();

    if (!name || !phone || !address) {
        showNotification('Please fill all delivery details!', 'error');
        return;
    }

    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = subtotal - discount;

    // Build WhatsApp message
    let message = `🍽️ *NEW ORDER - Hotel Pranjal*\n\n`;
    message += `👤 *Customer:* ${name}\n`;
    message += `📱 *Phone:* ${phone}\n`;
    message += `📍 *Address:* ${address}\n\n`;
    message += `📋 *Order Details:*\n`;
    message += `─────────────────\n`;

    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
        if (item.spice !== 'normal') message += `  ↳ ${item.spice} spicy\n`;
        if (item.oil !== 'normal') message += `  ↳ ${item.oil} oil\n`;
        if (item.instructions) message += `  ↳ "${item.instructions}"\n`;
    });

    message += `─────────────────\n`;
    message += `💰 Subtotal: ₹${subtotal}\n`;
    if (discount > 0) {
        message += `🎉 Discount: -₹${discount}\n`;
    }
    message += `*💵 Total: ₹${total}*\n\n`;
    message += `💳 *Payment via UPI*\n`;
    message += `📍 *Delivery within 2 KM*\n`;
    message += `⏰ *Expected: 30-60 mins*\n\n`;
    message += `_Thank you for ordering!_`;

    const whatsappURL = `https://wa.me/917517972020?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    // Clear cart after order
    cart = [];
    updateCartUI();
    closePaymentModal();

    showNotification('Order sent! Check WhatsApp to confirm.', 'success');
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

// Add notification animation
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
`;
document.head.appendChild(style);

console.log('🍽️ Hotel Pranjal Website Loaded!');
console.log('📍 Kurduwadi | 📞 +91 75179 72020');
