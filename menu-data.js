// Hotel Pranjal - Complete Menu Data
const menuItems = [
    // Hot Beverages
    { id: 1, name: "Tea", price: 15, category: "beverages", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400", description: "Traditional Indian chai" },
    { id: 2, name: "Black Tea", price: 15, category: "beverages", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400", description: "Strong black tea" },
    { id: 3, name: "Coffee", price: 20, category: "beverages", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400", description: "Hot filter coffee" },
    { id: 4, name: "Milk", price: 25, category: "beverages", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400", description: "Fresh hot milk" },

    // Breakfast
    { id: 5, name: "Poha", price: 30, category: "breakfast", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Flattened rice with spices", badge: "popular" },
    { id: 6, name: "Shira", price: 35, category: "breakfast", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Sweet semolina pudding" },
    { id: 7, name: "Upma", price: 35, category: "breakfast", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400", description: "Savory semolina dish" },
    { id: 8, name: "Idli Sambar", price: 60, category: "breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Steamed rice cakes with sambar" },
    { id: 9, name: "Udid Vada Sambar", price: 60, category: "breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Crispy vada with sambar" },
    { id: 10, name: "Idli Vada Mix", price: 55, category: "breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Combo of idli and vada" },
    { id: 11, name: "Single Idli", price: 35, category: "breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Single steamed idli" },
    { id: 12, name: "Idli Fry", price: 80, category: "breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400", description: "Crispy fried idli" },
    { id: 13, name: "Single Batata Vada", price: 35, category: "breakfast", image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=400", description: "Potato fritter" },
    { id: 14, name: "Batata Vada Bhaji", price: 60, category: "breakfast", image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=400", description: "Potato vada with bhaji" },
    { id: 15, name: "Dahi Vada", price: 60, category: "breakfast", image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=400", description: "Vada in yogurt" },
    { id: 16, name: "Misal", price: 50, category: "breakfast", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "Spicy sprouts curry", badge: "bestseller" },
    { id: 17, name: "Misal Pav", price: 60, category: "breakfast", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "Misal with pav bread", badge: "bestseller" },
    { id: 18, name: "Dahi Misal", price: 70, category: "breakfast", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "Misal with curd" },
    { id: 19, name: "Puri Bhaji", price: 60, category: "breakfast", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Fried bread with potato curry" },

    // Dosa
    { id: 20, name: "Plain Dosa", price: 50, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Crispy rice crepe" },
    { id: 21, name: "Masala Dosa", price: 60, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Dosa with potato filling", badge: "bestseller" },
    { id: 22, name: "Cut Dosa", price: 70, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Cut crispy dosa" },
    { id: 23, name: "Cheese Dosa", price: 75, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Dosa with cheese" },
    { id: 24, name: "Cheese Paper Masala Dosa", price: 100, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Thin crispy cheese dosa" },
    { id: 25, name: "Paper Masala Dosa", price: 90, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Extra thin crispy dosa" },
    { id: 26, name: "Pranjal Spl. Dosa", price: 110, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Chef's special dosa", badge: "bestseller" },
    { id: 27, name: "Onion Uttapa", price: 60, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Thick pancake with onion" },
    { id: 28, name: "Masala Uttapa", price: 70, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Uttapa with vegetables" },
    { id: 29, name: "Cheese Uttapa", price: 70, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Uttapa with cheese" },
    { id: 30, name: "Paneer Uttapa", price: 80, category: "dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400", description: "Uttapa with paneer" },

    // Starters
    { id: 31, name: "Veg Manchurian", price: 110, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Veggie balls in tangy sauce", badge: "popular" },
    { id: 32, name: "Veg 65", price: 140, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Spicy fried vegetables" },
    { id: 33, name: "Gobi Manchurian", price: 120, category: "starters", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Cauliflower manchurian" },
    { id: 34, name: "Gobi 65", price: 140, category: "starters", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Spicy fried cauliflower" },
    { id: 35, name: "Paneer Chilli", price: 190, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Spicy paneer stir fry", badge: "bestseller" },
    { id: 36, name: "Paneer Manchurian", price: 180, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Paneer in manchurian sauce" },
    { id: 37, name: "Paneer Hot Pan", price: 220, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Sizzling paneer" },
    { id: 38, name: "Paneer 65", price: 200, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Spicy fried paneer" },
    { id: 39, name: "Paneer Crispy", price: 200, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Crispy fried paneer" },
    { id: 40, name: "Mushroom Manchurian", price: 200, category: "starters", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400", description: "Mushroom in manchurian sauce" },
    { id: 41, name: "Mushroom 65", price: 190, category: "starters", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400", description: "Spicy fried mushroom" },
    { id: 42, name: "Mushroom Chilli", price: 200, category: "starters", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400", description: "Spicy mushroom stir fry" },
    { id: 43, name: "Veg Lollipop (8 Pcs)", price: 200, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Crispy veg lollipops" },
    { id: 44, name: "Veg Crispy", price: 190, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Crispy fried vegetables" },
    { id: 45, name: "Veg Spring Roll", price: 220, category: "starters", image: "https://images.unsplash.com/photo-1548507200-e587de219312?w=400", description: "Crispy spring rolls" },
    { id: 46, name: "Paneer Spring Roll", price: 260, category: "starters", image: "https://images.unsplash.com/photo-1548507200-e587de219312?w=400", description: "Paneer stuffed rolls" },
    { id: 47, name: "Paneer Tikka Kebab", price: 200, category: "starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Grilled paneer tikka", badge: "bestseller" },
    { id: 48, name: "Veg Harabhara Kebab", price: 170, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Green vegetable kebab" },
    { id: 49, name: "Chinese Bhel", price: 130, category: "starters", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Crispy noodle bhel" },
    { id: 50, name: "Finger Chips", price: 90, category: "starters", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Crispy french fries" },

    // Soups
    { id: 51, name: "Tomato Soup", price: 80, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Classic tomato soup" },
    { id: 52, name: "Veg Manchow Soup", price: 70, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Indo-Chinese soup", badge: "popular" },
    { id: 53, name: "Hot & Sour Soup", price: 85, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Spicy tangy soup" },
    { id: 54, name: "Veg Clear Soup", price: 80, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Light vegetable soup" },
    { id: 55, name: "Cream of Mushroom Soup", price: 90, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", description: "Creamy mushroom soup" },

    // Maharashtrian
    { id: 56, name: "Dal Fry", price: 110, category: "maharashtrian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Fried lentils" },
    { id: 57, name: "Dal Tadka", price: 120, category: "maharashtrian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Tempered yellow dal" },
    { id: 58, name: "Dal Makhani", price: 140, category: "maharashtrian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Creamy black lentils", badge: "bestseller" },
    { id: 59, name: "Malvani Rassa", price: 130, category: "maharashtrian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Spicy Malvani curry" },
    { id: 60, name: "Aloo Matar", price: 130, category: "maharashtrian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Potato peas curry" },
    { id: 61, name: "Aloo Gobi", price: 130, category: "maharashtrian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Potato cauliflower" },
    { id: 62, name: "Baigan Bharata", price: 140, category: "maharashtrian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Roasted eggplant mash" },
    { id: 63, name: "Besan Zunka", price: 130, category: "maharashtrian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Gram flour dish" },
    { id: 64, name: "Bhendi Masala", price: 130, category: "maharashtrian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Okra masala" },

    // Paneer
    { id: 65, name: "Paneer Masala", price: 180, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer in spicy gravy" },
    { id: 66, name: "Paneer Butter Masala", price: 190, category: "paneer", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400", description: "Creamy butter paneer", badge: "bestseller" },
    { id: 67, name: "Paneer Tikka Masala", price: 190, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Grilled paneer in gravy" },
    { id: 68, name: "Paneer Kolhapuri", price: 180, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Spicy Kolhapuri paneer" },
    { id: 69, name: "Kadhai Paneer", price: 220, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer with bell peppers", badge: "popular" },
    { id: 70, name: "Paneer Bhurji", price: 220, category: "paneer", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400", description: "Scrambled paneer" },
    { id: 71, name: "Palak Paneer", price: 190, category: "paneer", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400", description: "Paneer in spinach gravy" },
    { id: 72, name: "Mutter Paneer", price: 190, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer with green peas" },
    { id: 73, name: "Paneer Lababadar", price: 220, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Rich creamy paneer" },
    { id: 74, name: "Paneer Handi", price: 280, category: "paneer", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", description: "Paneer in clay pot" },

    // Punjabi
    { id: 75, name: "Mix Veg", price: 170, category: "punjabi", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Mixed vegetable curry" },
    { id: 76, name: "Veg Kolhapuri", price: 190, category: "punjabi", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Spicy Kolhapuri curry" },
    { id: 77, name: "Veg Kadhai", price: 190, category: "punjabi", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Kadhai style vegetables" },
    { id: 78, name: "Shahi Malai Kofta", price: 200, category: "punjabi", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Veg balls in creamy gravy", badge: "popular" },
    { id: 79, name: "Mushroom Masala", price: 180, category: "punjabi", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400", description: "Mushroom in spicy gravy" },
    { id: 80, name: "Kaju Masala", price: 190, category: "punjabi", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Cashew nut curry" },
    { id: 81, name: "Dum Aloo Punjabi", price: 180, category: "punjabi", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Baby potatoes in gravy" },
    { id: 82, name: "Veg Handi", price: 240, category: "punjabi", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", description: "Vegetables in clay pot" },

    // Chinese
    { id: 83, name: "Veg Hakka Noodles", price: 120, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Stir fried noodles", badge: "popular" },
    { id: 84, name: "Veg Schezwan Noodles", price: 140, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Spicy schezwan noodles" },
    { id: 85, name: "Veg Fried Rice", price: 150, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Wok tossed rice" },
    { id: 86, name: "Veg Schezwan Fried Rice", price: 160, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Spicy schezwan rice" },
    { id: 87, name: "Triple Schezwan Rice", price: 230, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Rice, noodles & manchurian", badge: "bestseller" },
    { id: 88, name: "Paneer Fried Rice", price: 210, category: "chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", description: "Fried rice with paneer" },
    { id: 89, name: "American Choupsey", price: 190, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Crispy noodles with gravy" },
    { id: 90, name: "Singapuri Noodles", price: 140, category: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", description: "Singapore style noodles" },

    // Rice
    { id: 91, name: "Plain Rice", price: 65, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Steamed basmati rice" },
    { id: 92, name: "Jeera Rice", price: 70, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Cumin flavored rice" },
    { id: 93, name: "Veg Biryani (Half)", price: 100, category: "rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Fragrant veg biryani" },
    { id: 94, name: "Veg Biryani (Full)", price: 180, category: "rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Fragrant veg biryani", badge: "bestseller" },
    { id: 95, name: "Veg Pulao", price: 160, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Vegetable pulao" },
    { id: 96, name: "Paneer Biryani", price: 210, category: "rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", description: "Biryani with paneer" },
    { id: 97, name: "Tava Pulao", price: 170, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Mumbai style tava pulao" },
    { id: 98, name: "Dal Khichdi", price: 140, category: "rice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400", description: "Comfort food khichdi" },

    // Rice Plate & Thali
    { id: 99, name: "Rice Plate", price: 130, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Rice with dal & sabzi" },
    { id: 100, name: "Special Rice Plate", price: 160, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Complete rice meal" },
    { id: 101, name: "Pranjal Spl. Rice Plate", price: 230, category: "thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", description: "Chef's special thali", badge: "bestseller" },

    // Roti
    { id: 102, name: "Tandoor Roti", price: 18, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Clay oven baked bread" },
    { id: 103, name: "Butter Roti", price: 25, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Roti with butter" },
    { id: 104, name: "Plain Naan", price: 35, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Soft leavened bread" },
    { id: 105, name: "Butter Naan", price: 40, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Naan with butter" },
    { id: 106, name: "Butter Garlic Naan", price: 60, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Garlic flavored naan", badge: "popular" },
    { id: 107, name: "Butter Kulcha", price: 60, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Stuffed bread" },
    { id: 108, name: "Aloo Paratha", price: 60, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Potato stuffed paratha" },
    { id: 109, name: "Cheese Paratha", price: 80, category: "roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", description: "Cheese stuffed paratha" },

    // Cafe Beverages
    { id: 110, name: "Cold Coffee", price: 40, category: "cafe", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", description: "Chilled coffee" },
    { id: 111, name: "Cold Coffee with Ice-cream", price: 60, category: "cafe", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", description: "Coffee with ice cream", badge: "bestseller" },
    { id: 112, name: "Strawberry Milkshake", price: 90, category: "cafe", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Fresh strawberry shake" },
    { id: 113, name: "Mango Milkshake", price: 90, category: "cafe", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Mango milkshake" },
    { id: 114, name: "Chocolate Milkshake", price: 100, category: "cafe", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Rich chocolate shake" },
    { id: 115, name: "Oreo Shake", price: 110, category: "cafe", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Oreo cookie shake", badge: "popular" },
    { id: 116, name: "Kit-Kat Shake", price: 120, category: "cafe", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Kit-Kat milkshake" },

    // Fries
    { id: 117, name: "Salted Fries", price: 80, category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Classic salted fries" },
    { id: 118, name: "Masala Fries", price: 90, category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Spiced masala fries" },
    { id: 119, name: "Peri-Peri Fries", price: 100, category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Peri-peri seasoned" },
    { id: 120, name: "Cheesy Fries", price: 120, category: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Fries with cheese", badge: "popular" },

    // Pav Bhaji
    { id: 121, name: "Pav Bhaji", price: 60, category: "pavbhaji", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "Classic pav bhaji" },
    { id: 122, name: "Cheese Pav Bhaji", price: 80, category: "pavbhaji", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "With extra cheese", badge: "bestseller" },
    { id: 123, name: "Pranjal Spl. Pav Bhaji", price: 100, category: "pavbhaji", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400", description: "Chef's special pav bhaji" },

    // Sandwich & Burger
    { id: 124, name: "Veg Sandwich", price: 60, category: "sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400", description: "Fresh veg sandwich" },
    { id: 125, name: "Veg Grilled Sandwich", price: 70, category: "sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400", description: "Grilled sandwich" },
    { id: 126, name: "Cheese Grilled Sandwich", price: 90, category: "sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400", description: "With cheese", badge: "popular" },
    { id: 127, name: "Paneer Grilled Sandwich", price: 110, category: "sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400", description: "With paneer filling" },
    { id: 128, name: "Veg Burger", price: 60, category: "sandwich", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", description: "Classic veg burger" },
    { id: 129, name: "Cheese Burger", price: 70, category: "sandwich", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", description: "Burger with cheese" },

    // Pizza
    { id: 130, name: "Veg Pizza", price: 140, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Classic veg pizza" },
    { id: 131, name: "Cheese Pizza", price: 160, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Extra cheese pizza" },
    { id: 132, name: "Paneer Pizza", price: 170, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "With paneer topping" },
    { id: 133, name: "Cheese Burst Pizza", price: 200, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", description: "Cheese in crust", badge: "bestseller" },

    // Mocktails
    { id: 134, name: "Green Apple Mocktail", price: 90, category: "mocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400", description: "Refreshing green apple" },
    { id: 135, name: "Blue Lagoon", price: 100, category: "mocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400", description: "Blue curacao mocktail", badge: "popular" },
    { id: 136, name: "Virgin Mojito", price: 100, category: "mocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400", description: "Mint lime mocktail" },
    { id: 137, name: "Watermelon Mocktail", price: 100, category: "mocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400", description: "Fresh watermelon drink" },

    // Chat & Bhel
    { id: 138, name: "Pani Puri", price: 25, category: "chat", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Crispy puris with water", badge: "popular" },
    { id: 139, name: "Shev Puri", price: 40, category: "chat", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Crispy shev puri" },
    { id: 140, name: "Dahi Puri", price: 45, category: "chat", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "With sweet curd" },
    { id: 141, name: "Special Bhel", price: 50, category: "chat", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Chef's special bhel" },
    { id: 142, name: "Papadi Chat", price: 50, category: "chat", image: "https://images.unsplash.com/photo-1626776877133-36f9b6b32595?w=400", description: "Crispy papadi with chutneys" },

    // Ice Cream
    { id: 143, name: "Vanilla Ice-Cream", price: 35, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Classic vanilla" },
    { id: 144, name: "Chocolate Ice-Cream", price: 40, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Rich chocolate" },
    { id: 145, name: "Sitafal Ice-Cream", price: 40, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Custard apple flavor", badge: "popular" },
    { id: 146, name: "Rajwadi Ice-Cream", price: 40, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", description: "Royal dry fruit" },
];

// Generate unique Order ID
function generateOrderId() {
    const date = new Date();
    const dateStr = date.toISOString().slice(2, 10).replace(/-/g, '');
    const random = Math.floor(Math.random() * 9000) + 1000;
    return `HP${dateStr}${random}`;
}
