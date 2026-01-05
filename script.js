/* =============================================
   HOTEL PRANJAL - Restaurant Ordering System
   Complete Menu with Order Confirmation
   ============================================= */

// Complete Menu Data - Restaurant & Cafe Menu
const menuItems = [
    // STARTERS
    { id: 1, name: "Paneer Tikka", price: 180, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Marinated cottage cheese grilled to perfection", badge: "bestseller" },
    { id: 2, name: "Veg Manchurian Dry", price: 150, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Crispy vegetable balls in tangy sauce", badge: "popular" },
    { id: 3, name: "Veg Manchurian Gravy", price: 160, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Vegetable balls in rich gravy" },
    { id: 4, name: "Spring Rolls (4 Pcs)", price: 120, category: "starters", image: "https://images.unsplash.com/photo-1548507200-e587de219312?w=400", description: "Crispy rolls stuffed with vegetables" },
    { id: 5, name: "Paneer 65", price: 180, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Spicy deep-fried paneer cubes" },
    { id: 6, name: "Gobi 65", price: 140, category: "starters", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Crispy spiced cauliflower" },
    { id: 7, name: "Mushroom 65", price: 160, category: "starters", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400", description: "Deep fried spicy mushroom" },
    { id: 8, name: "Chilli Paneer Dry", price: 170, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Spicy Indo-Chinese paneer" },
    { id: 9, name: "Chilli Paneer Gravy", price: 180, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Paneer in spicy gravy" },
    { id: 10, name: "Crispy Corn", price: 130, category: "starters", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400", description: "Crispy fried corn kernels" },
    { id: 11, name: "French Fries", price: 100, category: "starters", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Crispy golden potato fries" },
    { id: 12, name: "Peri Peri Fries", price: 120, category: "starters", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Spicy peri peri seasoned fries" },
    { id: 13, name: "Veg Pakoda", price: 80, category: "starters", image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=400", description: "Mixed vegetable fritters" },
    { id: 14, name: "Paneer Pakoda", price: 120, category: "starters", image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=400", description: "Crispy paneer fritters" },

    // SOUP
    { id: 15, name: "Tomato Soup", price: 80, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Classic creamy tomato soup" },
    { id: 16, name: "Sweet Corn Soup", price: 90, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Creamy sweet corn soup" },
    { id: 17, name: "Hot & Sour Soup", price: 100, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Spicy tangy vegetable soup" },
    { id: 18, name: "Manchow Soup", price: 100, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Indo-Chinese soup with noodles", badge: "popular" },

    // MAIN COURSE (Paneer)
    { id: 19, name: "Paneer Butter Masala", price: 200, category: "mains", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400", description: "Creamy tomato gravy with soft paneer", badge: "bestseller" },
    { id: 20, name: "Shahi Paneer", price: 210, category: "mains", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Royal paneer in creamy cashew gravy" },
    { id: 21, name: "Kadai Paneer", price: 190, category: "mains", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer with bell peppers in kadai masala" },
    { id: 22, name: "Palak Paneer", price: 180, category: "mains", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Cottage cheese in spinach gravy" },
    { id: 23, name: "Matar Paneer", price: 170, category: "mains", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer with green peas curry" },
    { id: 24, name: "Paneer Do Pyaza", price: 190, category: "mains", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer with onion curry" },
    { id: 25, name: "Paneer Bhurji", price: 170, category: "mains", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Scrambled paneer with spices" },
    { id: 26, name: "Paneer Kolhapuri", price: 200, category: "mains", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Spicy Kolhapuri style paneer" },

    // MAIN COURSE (Vegetables)
    { id: 27, name: "Dal Makhani", price: 160, category: "mains", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Slow-cooked black lentils in creamy gravy" },
    { id: 28, name: "Dal Tadka", price: 120, category: "mains", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Yellow lentils with tempering" },
    { id: 29, name: "Dal Fry", price: 130, category: "mains", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Fried lentils with onion tomato" },
    { id: 30, name: "Mix Veg", price: 150, category: "mains", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Mixed vegetables in curry" },
    { id: 31, name: "Veg Kolhapuri", price: 160, category: "mains", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Spicy Kolhapuri vegetable curry" },
    { id: 32, name: "Aloo Gobi", price: 130, category: "mains", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Potato cauliflower dry curry" },
    { id: 33, name: "Jeera Aloo", price: 120, category: "mains", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Cumin flavored potatoes" },
    { id: 34, name: "Mushroom Masala", price: 180, category: "mains", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400", description: "Mushrooms in spicy gravy" },
    { id: 35, name: "Malai Kofta", price: 190, category: "mains", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Veg balls in creamy gravy", badge: "popular" },

    // THALI
    { id: 36, name: "Special Thali", price: 250, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "4 dishes, rice, 4 roti, sweet, papad, salad", badge: "bestseller" },
    { id: 37, name: "Mini Thali", price: 150, category: "thali", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "2 dishes, rice, 2 roti" },
    { id: 38, name: "Gujarati Thali", price: 200, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Authentic Gujarati style thali" },
    { id: 39, name: "Rajasthani Thali", price: 220, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Dal Baati Churma thali" },

    // RICE & BIRYANI
    { id: 40, name: "Veg Biryani", price: 180, category: "rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Fragrant rice with spiced vegetables", badge: "bestseller" },
    { id: 41, name: "Paneer Biryani", price: 220, category: "rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Biryani with paneer cubes" },
    { id: 42, name: "Mushroom Biryani", price: 200, category: "rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Biryani with fresh mushrooms" },
    { id: 43, name: "Jeera Rice", price: 100, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Cumin flavored basmati rice" },
    { id: 44, name: "Steamed Rice", price: 80, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Plain steamed basmati rice" },
    { id: 45, name: "Curd Rice", price: 100, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Yogurt rice south Indian style" },
    { id: 46, name: "Pulao", price: 120, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Mild spiced vegetable rice" },

    // ROTI & NAAN
    { id: 47, name: "Tandoori Roti", price: 20, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Clay oven baked whole wheat bread" },
    { id: 48, name: "Butter Roti", price: 25, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Tandoori roti with butter" },
    { id: 49, name: "Plain Naan", price: 35, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Soft leavened bread" },
    { id: 50, name: "Butter Naan", price: 45, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Naan with butter topping" },
    { id: 51, name: "Garlic Naan", price: 55, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Naan with garlic & coriander", badge: "popular" },
    { id: 52, name: "Cheese Naan", price: 70, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Naan stuffed with cheese" },
    { id: 53, name: "Paneer Paratha", price: 60, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Stuffed paneer flatbread" },
    { id: 54, name: "Aloo Paratha", price: 50, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Stuffed potato flatbread" },
    { id: 55, name: "Laccha Paratha", price: 40, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Layered crispy paratha" },

    // CHINESE
    { id: 56, name: "Veg Fried Rice", price: 140, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Wok-tossed rice with vegetables" },
    { id: 57, name: "Schezwan Fried Rice", price: 160, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Spicy schezwan style fried rice" },
    { id: 58, name: "Paneer Fried Rice", price: 170, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Fried rice with paneer" },
    { id: 59, name: "Hakka Noodles", price: 130, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Stir-fried noodles with vegetables", badge: "popular" },
    { id: 60, name: "Schezwan Noodles", price: 150, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Spicy schezwan noodles" },
    { id: 61, name: "Triple Schezwan Rice", price: 180, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Rice with noodles and manchurian" },
    { id: 62, name: "Singapore Noodles", price: 160, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Singapore style spicy noodles" },
    { id: 63, name: "Chowmein", price: 120, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Classic vegetable chowmein" },

    // PIZZA
    { id: 64, name: "Margherita Pizza", price: 180, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Classic cheese and tomato pizza" },
    { id: 65, name: "Veg Supreme Pizza", price: 250, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Loaded with vegetables", badge: "bestseller" },
    { id: 66, name: "Paneer Tikka Pizza", price: 280, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Pizza with paneer tikka topping" },
    { id: 67, name: "Cheese Burst Pizza", price: 300, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Extra cheese in crust", badge: "popular" },
    { id: 68, name: "Pasta Alfredo", price: 160, category: "pizza", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", description: "Creamy white sauce pasta" },
    { id: 69, name: "Pasta Arabiata", price: 150, category: "pizza", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", description: "Spicy red sauce pasta" },
    { id: 70, name: "Pasta Pink Sauce", price: 170, category: "pizza", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", description: "Rose sauce pasta" },

    // SOUTH INDIAN
    { id: 71, name: "Plain Dosa", price: 70, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Crispy rice crepe" },
    { id: 72, name: "Masala Dosa", price: 90, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Dosa with potato filling", badge: "bestseller" },
    { id: 73, name: "Mysore Masala Dosa", price: 110, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Spicy masala dosa" },
    { id: 74, name: "Paneer Dosa", price: 120, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Dosa with paneer stuffing" },
    { id: 75, name: "Cheese Dosa", price: 110, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Dosa with cheese topping" },
    { id: 76, name: "Idli (2 Pcs)", price: 50, category: "dosa", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Steamed rice cakes" },
    { id: 77, name: "Vada (2 Pcs)", price: 60, category: "dosa", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Crispy lentil donuts" },
    { id: 78, name: "Uttapam", price: 80, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Thick rice pancake with toppings" },
    { id: 79, name: "Pav Bhaji", price: 100, category: "dosa", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "Spiced vegetable mash with bread", badge: "popular" },

    // BEVERAGES
    { id: 80, name: "Cold Coffee", price: 80, category: "beverages", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", description: "Creamy chilled coffee with ice cream", badge: "bestseller" },
    { id: 81, name: "Cold Coffee (Without Ice Cream)", price: 60, category: "beverages", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", description: "Chilled coffee" },
    { id: 82, name: "Fresh Lime Soda", price: 50, category: "beverages", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", description: "Refreshing lime with soda" },
    { id: 83, name: "Fresh Lime Water", price: 40, category: "beverages", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", description: "Fresh lime juice" },
    { id: 84, name: "Mango Lassi", price: 70, category: "beverages", image: "https://images.unsplash.com/photo-1626200419199-bc954a39a111?w=400", description: "Sweet mango yogurt drink", badge: "popular" },
    { id: 85, name: "Sweet Lassi", price: 50, category: "beverages", image: "https://images.unsplash.com/photo-1626200419199-bc954a39a111?w=400", description: "Sweet yogurt drink" },
    { id: 86, name: "Buttermilk", price: 40, category: "beverages", image: "https://images.unsplash.com/photo-1626200419199-bc954a39a111?w=400", description: "Spiced buttermilk" },
    { id: 87, name: "Masala Chai", price: 30, category: "beverages", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400", description: "Traditional Indian spiced tea" },
    { id: 88, name: "Green Tea", price: 40, category: "beverages", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400", description: "Healthy green tea" },
    { id: 89, name: "Oreo Shake", price: 100, category: "beverages", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Creamy oreo milkshake" },
    { id: 90, name: "Chocolate Shake", price: 90, category: "beverages", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Rich chocolate milkshake" },
    { id: 91, name: "Strawberry Shake", price: 90, category: "beverages", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Fresh strawberry milkshake" },
    { id: 92, name: "Vanilla Shake", price: 80, category: "beverages", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Classic vanilla milkshake" },

    // DESSERTS
    { id: 93, name: "Gulab Jamun (2 Pcs)", price: 60, category: "desserts", image: "https://images.unsplash.com/photo-1666190020400-64f1fdc3e0ed?w=400", description: "Soft dumplings in sugar syrup" },
    { id: 94, name: "Rasgulla (2 Pcs)", price: 60, category: "desserts", image: "https://images.unsplash.com/photo-1666190020400-64f1fdc3e0ed?w=400", description: "Spongy cottage cheese balls" },
    { id: 95, name: "Rasmalai (2 Pcs)", price: 80, category: "desserts", image: "https://images.unsplash.com/photo-1666190020400-64f1fdc3e0ed?w=400", description: "Paneer in sweet milk", badge: "popular" },
    { id: 96, name: "Kheer", price: 70, category: "desserts", image: "https://images.unsplash.com/photo-1666190020400-64f1fdc3e0ed?w=400", description: "Rice pudding with nuts" },
    { id: 97, name: "Jalebi", price: 50, category: "desserts", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400", description: "Crispy sweet spirals" },
    { id: 98, name: "Brownie with Ice Cream", price: 120, category: "desserts", image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400", description: "Warm brownie with vanilla ice cream" },

    // ICE CREAM
    { id: 99, name: "Vanilla Ice Cream", price: 50, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Classic vanilla scoop" },
    { id: 100, name: "Chocolate Ice Cream", price: 50, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Rich chocolate scoop" },
    { id: 101, name: "Strawberry Ice Cream", price: 50, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Fresh strawberry scoop" },
    { id: 102, name: "Butterscotch Ice Cream", price: 60, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Crunchy butterscotch" },
    { id: 103, name: "Ice Cream Sundae", price: 120, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Mixed ice cream with toppings", badge: "popular" },
    { id: 104, name: "Falooda", price: 100, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Rose flavored dessert drink", badge: "bestseller" },
];

// Cart State
let cart = [];
let currentItem = null;
let currentQuantity = 1;
let customerDetails = {};

// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    initNavigation();
    renderMenu();
    initMenuFilter();
    initMenuSearch();
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
                        ${item.instructions ? `<span>"${item.instructions.substring(0, 15)}..."</span>` : ''}
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
        return Math.min(subtotal * 0.15, 200);
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
    const subtotal = getSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = subtotal - discount;
    const orderTime = new Date().toLocaleString('en-IN');

    // Build order message for RESTAURANT
    let restaurantMessage = `🔔 *NEW ORDER RECEIVED*\n`;
    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;
    restaurantMessage += `📅 ${orderTime}\n\n`;
    restaurantMessage += `👤 *Customer Details:*\n`;
    restaurantMessage += `• Name: ${customerDetails.name}\n`;
    restaurantMessage += `• Phone: ${customerDetails.phone}\n`;
    if (customerDetails.email) restaurantMessage += `• Email: ${customerDetails.email}\n`;
    restaurantMessage += `• Address: ${customerDetails.address}\n\n`;
    restaurantMessage += `📋 *Order Details:*\n`;
    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;

    cart.forEach(item => {
        restaurantMessage += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
        if (item.spice !== 'normal') restaurantMessage += `  └ ${item.spice} spicy\n`;
        if (item.oil !== 'normal') restaurantMessage += `  └ ${item.oil} oil\n`;
        if (item.instructions) restaurantMessage += `  └ "${item.instructions}"\n`;
    });

    restaurantMessage += `━━━━━━━━━━━━━━━━━\n`;
    restaurantMessage += `💰 Subtotal: ₹${subtotal}\n`;
    if (discount > 0) restaurantMessage += `🎉 Discount: -₹${discount}\n`;
    restaurantMessage += `*💵 TOTAL: ₹${total}*\n\n`;
    restaurantMessage += `💳 Payment: UPI\n`;
    restaurantMessage += `📍 Delivery: Within 2 KM\n`;
    restaurantMessage += `⏰ ETA: 30-60 mins\n`;

    // Build confirmation message for CUSTOMER
    let customerMessage = `✅ *ORDER CONFIRMED - Hotel Pranjal*\n`;
    customerMessage += `━━━━━━━━━━━━━━━━━\n\n`;
    customerMessage += `Hi ${customerDetails.name}! 👋\n\n`;
    customerMessage += `Thank you for your order!\n\n`;
    customerMessage += `📋 *Your Order:*\n`;

    cart.forEach(item => {
        customerMessage += `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    customerMessage += `\n💵 *Total Paid: ₹${total}*\n\n`;
    customerMessage += `📍 *Delivery Address:*\n${customerDetails.address}\n\n`;
    customerMessage += `⏰ *Expected Delivery:* 30-60 minutes\n\n`;
    customerMessage += `📞 For any queries: +91 75179 72020\n\n`;
    customerMessage += `_Thanks for ordering from Hotel Pranjal!_\n`;
    customerMessage += `_Best Veg Restaurant in Kurduwadi_ 🏆`;

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
    document.getElementById('successModal').classList.add('active');
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

console.log('🍽️ Hotel Pranjal - Best Veg Restaurant in Kurduwadi');
console.log('📍 Madha Road, Kurduwadi | 📞 +91 75179 72020');
console.log('🏢 GSTIN: 27KXQPS3637L1ZC');
