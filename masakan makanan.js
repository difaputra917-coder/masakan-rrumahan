// Recipe Data for Dapur Rumahan
const recipeData = [
    {
        id: 1,
        title: "Nasi Goreng Spesial Rumahan",
        description: "Nasi goreng lezat dengan campuran telur, ayam, dan udang yang menggugah selera. Cocok untuk sarapan atau makan malam.",
        category: "nusantara",
        time: "20 menit",
        difficulty: "Mudah",
        servings: "2 orang",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
        featured: true,
        ingredients: [
            "2 piring nasi putih dingin",
            "2 butir telur",
            "100 gram ayam fillet, potong dadu",
            "5 ekor udang, kupas",
            "3 siung bawang putih, cincang",
            "2 siung bawang merah, cincang",
            "2 sdm kecap manis",
            "1 sdm kecap asin",
            "1 sdt merica",
            "1/2 sdt garam",
            "2 sdm minyak goreng",
            "Telur ceplok untuk topping",
            "Kerupuk untuk pelengkap"
        ],
        instructions: [
            "Panaskan minyak dalam wajan besar dengan api sedang.",
            "Tumis bawang putih dan bawang merah hingga harum.",
            "Masukkan ayam dan udang, masak hingga berubah warna.",
            "Tambahkan kecap manis, kecap asin, merica, dan garam.",
            "Masukkan nasi putih, aduk rata dengan cepat.",
            "Ceplok telur di sisi wajan, orak-arik bersama nasi.",
            "Aduk terus hingga semua tercampur merata.",
            "Sajikan hangat dengan telur ceplok dan kerupuk."
        ]
    },
    {
        id: 2,
        title: "Ayam Goreng Lengkuas",
        description: "Ayam goreng dengan bumbu lengkuas yang menghasilkan aroma harum dan rasa yang gurih. Sangat populer di keluarga Indonesia.",
        category: "nusantara",
        time: "45 menit",
        difficulty: "Mudah",
        servings: "4 orang",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
        featured: true,
        ingredients: [
            "1 kg ayam, potong 8 bagian",
            "3 siung bawang putih",
            "4 siung bawang merah",
            "2 cm jahe",
            "2 cm kunyit",
            "50 gram lengkuas, parut",
            "1 sdt ketumbar",
            "1/2 sdt merica",
            "1 sdt garam",
            "1 sdt kaldu bubuk",
            "500 ml air",
            "Minyak untuk menggoreng"
        ],
        instructions: [
            "Cuci bersih ayam dan tiriskan.",
            "Haluskan bawang putih, bawang merah, jahe, dan kunyit.",
            "Campurkan bumbu halus dengan lengkuas parut, ketumbar, merica, garam, dan kaldu bubuk.",
            "Lumuri ayam dengan bumbu, diamkan 30 menit.",
            "Rebus ayam dengan air hingga empuk dan air berkurang.",
            "Angkat ayam, tiriskan.",
            "Panaskan minyak, goreng ayam hingga kuning kecokelatan.",
            "Sajikan dengan nasi putih dan sambal."
        ]
    },
    {
        id: 3,
        title: "Soto Ayam Lamongan",
        description: "Kuah soto yang kaya rempah dengan ayam suwir dan pelengkap lainnya. Hangat dan menyegarkan.",
        category: "nusantara",
        time: "60 menit",
        difficulty: "Sedang",
        servings: "4 orang",
        image: "https://www.idntimes.com/food/recipe/resep-soto-ayam-lamongan-c1c2-01-jdnmr-71n8ns=800",
        featured: true,
        ingredients: [
            "1 ekor ayam kampung",
            "2000 ml air",
            "3 lembar daun salam",
            "2 lembar daun jeru",
            "1 batang serai, geprek",
            "3 cm jahe, geprek",
            "Bumbu halus:",
            "6 siung bawang putih",
            "4 siung bawang merah",
            "2 cm kunyit",
            "1 sdt ketumbar",
            "1/2 sdt merica",
            "Pelengkap:",
            "Bihun, seduh air panas",
            "Daun bawang, iris",
            "Seledri, iris",
            "Telur rebus",
            "Kentang goreng",
            "Sambal",
            "Jeruk nipis"
        ],
        instructions: [
            "Rebus ayam dengan air, daun salam, daun jeruk, serai, dan jahe.",
            "Masak hingga ayam empuk, angkat ayam dan suwir-suwir.",
            "Tumis bumbu halus hingga harum, masukkan ke dalam kuah.",
            "Didihkan kembali kuah soto, tambahkan garam dan kaldu.",
            "Siapkan mangkok, masukkan bihun.",
            "Tambahkan ayam suwir, telur rebus, kentang goreng.",
            "Siram dengan kuah panas.",
            "Taburi daun bawang dan seledri, sajikan dengan sambal danjeruk nipis."
        ]
    },
    {
        id: 4,
        title: "Mie Goreng Jawa",
        description: "Mie goreng dengan bumbu kacang dan taburan kerupuk yang renyah. Rasa gurih manis yang khas.",
        category: "nusantara",
        time: "25 menit",
        difficulty: "Mudah",
        servings: "2 orang",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        featured: false,
        ingredients: [
            "200 gram mie kuning",
            "100 gram ayam, potong dadu",
            "2 butir telur",
            "50 gram kol, iris",
            "2 tangkai daun bawang",
            "3 siung bawang putih",
            "2 sdm kecap manis",
            "1 sdm kecap asin",
            "1 sdm saus tiram",
            "1 sdt merica",
            "1/2 sdt garam",
            "50 gram kacang tanah, goreng",
            "Minyak untuk menumis"
        ],
        instructions: [
            "Rebus mie kuning hingga matang, tiriskan.",
            "Tumis bawang putih hingga harum.",
            "Masukkan ayam, masak hingga berubah warna.",
            "Ceplok telur, orak-arik.",
            "Masukkan kol dan daun bawang, aduk.",
            "Tambahkan mie, kecap manis, kecap asin, saus tiram, merica, dan garam.",
            "Aduk rata, masak hingga mie cukup kering.",
            "Sajikan dengan taburan kacang tanah goreng."
        ]
    },
    {
        id: 5,
        title: "Tumis Kangkung Bawang Putih",
        description: "Kangkung tumis dengan bawang putih yang crunchy dan lezat. Side dish sempurna untuk makan siang.",
        category: "nusantara",
        time: "15 menit",
        difficulty: "Mudah",
        servings: "3 orang",
        image: "https://images.unsplash.com/photo-1518164147695-36c13dd568f5?w=800",
        featured: false,
        ingredients: [
            "1 ikat kangkung",
            "6 siung bawang putih",
            "3 buah cabe rawit (opsional)",
            "1 sdt garam",
            "1/2 sdt kaldu bubuk",
            "50 ml air",
            "2 sdm minyak goreng"
        ],
        instructions: [
            "Pisahkan daun kangkung dari batangnya, Cuci bersih.",
            "Cincang bawang putih kasar.",
            "Panaskan minyak dalam wajan dengan api besar.",
            "Masukkan bawang putih, tumis hingga kuning keemasan.",
            "Masukkan kangkung dan cabe rawit.",
            "Aduk cepat, tambahkan air, garam, dan kaldu.",
            "Masak 2-3 menit hingga kangkung layu tapi masih crunchi.",
            "Angkat dan sajikan segera."
        ]
    },
    {
        id: 6,
        title: "Tahu Tempe Goreng Krispi",
        description: "Tahu dan tempe goreng dengan tekstur crispy di luar dan lembut di dalam. Camilan favorit semua umur.",
        category: "camilan",
        time: "20 menit",
        difficulty: "Mudah",
        servings: "4 orang",
        image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?w=800",
        featured: false,
        ingredients: [
            "1 papan tempe",
            "4 potong tahu putih",
            "150 gram tepung terigu",
            "50 gram maizena",
            "1 sdt baking powder",
            "1 sdt garlic powder",
            "1/2 sdt merica",
            "1 sdt garam",
            "Air secukupnya",
            "Minyak untuk menggoreng"
        ],
        instructions: [
            "Potong tempe dan tahu dengan ketebalan 1 cm.",
            "Campurkan tepung terigu, maizena, baking powder, garlic powder, merica, dan garam.",
            "Tambahkan air sedikit demi sedikit hingga adonan cukup kental.",
            "Panaskan minyak dalam wajan.",
            "Celupkan tahu dan tempe ke dalam adonan.",
            "Goreng dengan api sedang hingga kuning kecokelatan.",
            "Angkat dan tiriskan.",
            "Sajikan dengan cabe rawit atau sambal kecap."
        ]
    },
    {
        id: 7,
        title: "Pisang Goreng Crispy",
        description: "Pisang goreng dengan balutan crispy yang renyah. Camilan manis favorit keluarga.",
        category: "camilan",
        time: "15 menit",
        difficulty: "Mudah",
        servings: "4 orang",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        featured: false,
        ingredients: [
            "6 buahpisang kepok matang",
            "100 gram tepung terigu",
            "50 gram maizena",
            "1 sdt vanili",
            "1/2 sdt baking powder",
            "3 sdm gula pasir",
            "150 ml air es",
            "Minyak untuk menggoreng"
        ],
        instructions: [
            "Kupaspisang, belah dua memanjang.",
            "Campurkan tepung terigu, maizena, vanili, baking powder, dan gula.",
            "Tambahkan air es, aduk hingga adonan halus dan kental.",
            "Panaskan minyak dalam wajan.",
            "Celupkanpisang ke dalam adonan.",
            "Goreng dengan api sedang hingga kuning keemasan.",
            "Angkat dan tiriskan.",
            "Sajikan hangat."
        ]
    },
    {
        id: 8,
        title: "Es Teh Manis Segar",
        description: "Minuman teh manis dingin yang segar dan cocok diminum saat cuaca panas. Resep sederhana tapi lezat.",
        category: "minuman",
        time: "5 menit",
        difficulty: "Mudah",
        servings: "1 orang",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
        featured: false,
        ingredients: [
            "1 sachettea celup",
            "200 ml air panas",
            "3 sdm gula pasir (sesuai selera)",
            "100 ml air dingin",
            "Es batu secukupnya"
        ],
        instructions: [
            "Seduh teh dengan air panas, diamkan 3 menit.",
            "Angkat teh celup, tambahkan gula.",
            "Aduk hingga gula larut.",
            "Tambahkan air dingin.",
            "Siapkan gelas dengan es batu.",
            "Tuang teh ke dalam gelas.",
            "Aduk rata dan sajikan."
        ]
    },
    {
        id: 9,
        title: "Jus Mangga Manis",
        description: "Jus mangga segar dengan tekstur creamy. Tinggi vitamin dan menyegarkan.",
        category: "minuman",
        time: "10 menit",
        difficulty: "Mudah",
        servings: "2 orang",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800",
        featured: false,
        ingredients: [
            "2 buah mangga harummanis matang",
            "200 ml susu segar",
            "2 sdm gula pasir (opsional)",
            "100 gram es batu",
            "50 ml air matang"
        ],
        instructions: [
            "Kupas mangga, potong-potong.",
            "Masukkan mangga ke dalam blender.",
            "Tambahkan susu, gula, dan es batu.",
            "Tambahkan air matang.",
            "Blender hingga halus dan creamy.",
            "Tuang ke dalam gelas.",
            "Sajikan dingin."
        ]
    },
    {
        id: 10,
        title: "Telur Dadar Padang",
        description: "Telur dadar tebal dengan campuran daun bawang dan cabe hijau. Gurih dan lezat.",
        category: "mudah",
        time: "10 menit",
        difficulty: "Mudah",
        servings: "2 orang",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
        featured: false,
        ingredients: [
            "3 butir telur",
            "2 tangkai daun bawang, iris",
            "2 buah cabe hijau, iris",
            "3 siung bawang merah, iris",
            "1/2 sdt merica",
            "1/2 sdt garam",
            "1/4 sdt kaldu bubuk",
            "3 sdm minyak goreng"
        ],
        instructions: [
            "Pecahkan telur ke dalam mangkuk.",
            "Tambahkan daun bawang, cabe hijau, dan bawang merah.",
            "Bumbui dengan merica, garam, dan kaldu.",
            "Kocok hingga merata.",
            "Panaskan minyak dalam wajan.",
            "Tuang telur, biarkan mengembang.",
            "Balik telur, masak hingga kedua sisi kecokelatan.",
            "Sajikan dengan nasi hangat."
        ]
    },
    {
        id: 11,
        title: "Sambal Terasi Goreng",
        description: "Sambal terasi homemade yang pedas dan gurih. Pelengkap wajib untuk makan nasi.",
        category: "nusantara",
        time: "15 menit",
        difficulty: "Mudah",
        servings: "5 orang",
        image: "https://images.unsplash.com/photo-1610450939275-5d44187c3637?w=800",
        featured: false,
        ingredients: [
            "100 gram cabe merah",
            "10 buah cabe rawit",
            "5 siung bawang merah",
            "3 siung bawang putih",
            "1 sdm terasi bakar",
            "1 buah tomat merah",
            "1/2 sdt garam",
            "1 sdm gula merah",
            "Minyak untuk menumis"
        ],
        instructions: [
            "Panaskan sedikit minyak.",
            "Goreng cabe merah, cabe rawit, bawang merah, dan bawang putih hingga layu.",
            "Masukkan tomat, goreng hingga lembut.",
            "Angkat dan tiriskan.",
            "Haluskan dengan copper bersama terasi bakar.",
            "Tambahkan garam dan gula merah.",
            "Tumis kembali sambal dengan sedikit minyak.",
            "Masak hingga matang dan harum."
        ]
    },
    {
        id: 12,
        title: "Kue Lapis Legit",
        description: "Kue lapis legit yang lembut dan kaya rasa. Cocok untuk hidangan especiales.",
        category: "camilan",
        time: "90 menit",
        difficulty: "Sulit",
        servings: "10 orang",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800",
        featured: false,
        ingredients: [
            "200 gram margarin",
            "100 gram butter",
            "200 gram gula pasir",
            "8 butir kuning telur",
            "4 butir telur utuh",
            "200 gram面粉",
            "1 sdt baking powder",
            "200 ml susu kental manis",
            "1 sdt vanili",
            "1/2 sdt garam"
        ],
        instructions: [
            "Kocok margarin, butter, dan gula hingga putih dan lembut.",
            "Masukkan kuning telur satu per satu, kocok hingga mengembang.",
            "Masukkan telur utuh, kocok rata.",
            "Tambahkan面粉, baking powder, vanili, dan garam.",
            "Masukkan susu kental manis, aduk hingga rata.",
            "Tuang 1/4 adonan ke loyang yang sudah diolesi margarin.",
            "Panggang dengan api sedang selama 15 menit.",
            "Ulangi hingga adonan habis.",
            "Dinginkan sebelum diiris."
        ]
    },
    {
        id: 13,
        title: "Ayam Bakar Taliwang",
        description: "Ayam bakar dengan bumbu pedas khas Lombok. Aromanya sangat menggoda.",
        category: "nusantara",
        time: "60 menit",
        difficulty: "Sedang",
        servings: "4 orang",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
        featured: false,
        ingredients: [
            "1 ekor ayam kampung",
            "10 buah cabe merah",
            "5 buah cabe rawit",
            "6 siung bawang merah",
            "4 siung bawang putih",
            "2 cm kencur",
            "1 sdt terasi bakar",
            "1 sdm garam",
            "1 sdt gula merah",
            "2 sdm minyak untuk menumis",
            "Lidi untuk tusuk (bakar)"
        ],
        instructions: [
            "Cuci bersih ayam, belah dua.",
            "Haluskan cabe, bawang, kencur, dan terasi.",
            "Tumis bumbu halus hingga harum.",
            "Masukkan ayam, aduk rata.",
            "Tambahkan garam dan gula merah.",
            "Masak dengan api kecil hingga air habis dan bumbu meresap.",
            "Panggang ayam di atas bara api atau grill pan.",
            "Bolak-balik hingga kecokelatan.",
            "Sajikan dengan nasi dan plecing kangkung."
        ]
    },
    {
        id: 14,
        title: "Sop Buntut Sederhana",
        description: "Sop buntut dengan kuah bening yang gurih. Daging empuk dan lezat.",
        category: "nusantara",
        time: "90 menit",
        difficulty: "Sedang",
        servings: "4 orang",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
        featured: false,
        ingredients: [
            "1 kg buntut sapi",
            "2 liter air",
            "2 wortel, potong",
            "2 kentang, potong",
            "1 brokoli, potong",
            "Bumbu:",
            "1 onion",
            "5 siung bawang putih",
            "2 cm jahe",
            "2 lembar daun salam",
            "1 sdt merica",
            "1 sdt pala bubuk",
            "Garam dan kaldu secukupnya"
        ],
        instructions: [
            "Rebus buntut dengan air mendidih, Buang air pertama.",
            "Rebus lagi dengan air baru, masukkan jahe dan daun salam.",
            "Masak hingga buntut empuk (sekitar 1 jam).",
            "Tumis bawang putih dan bawang bombay.",
            "Masukkan ke dalam kuah sop.",
            "Masukkan wortel dan kentang, masak hingga empuk.",
            "Tambahkan merica, pala, garam, dan kaldu.",
            "Masukkan brokoli sebentar sebelum mati api.",
            "Sajikan hangat dengan taburan seledri."
        ]
    },
    {
        id: 15,
        title: "Kopi Susu Hits",
        description: "Kopi susu dengan rasa yang creamy dan manis. Hits terbaru di cafe.",
        category: "minuman",
        time: "5 menit",
        difficulty: "Mudah",
        servings: "1 orang",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
        featured: false,
        ingredients: [
            "2 sdm bubuk kopi (espresso)",
            "100 ml air panas",
            "200 ml susu segar",
            "2 sdm kental manis putih",
            "Es batu secukupnya"
        ],
        instructions: [
            "Seduh kopi dengan air panas, aduk rata.",
            "Siapkan gelas tinggi dengan es batu.",
            "Tuang susu segar.",
            "Tambahkan kental manis putih.",
            "Tuangkan kopi di atas.",
            "Aduk perlahan sebelum diminum.",
            "Sajikan dingin."
        ]
    },
    {
        id: 16,
        title: "Roti Canai Malaysia",
        description: "Roti canai yang lembut dan renyah. Cocok untuk sarapan dengan kuah kari.",
        category: "camilan",
        time: "30 menit",
        difficulty: "Sedang",
        servings: "4 orang",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800",
        featured: false,
        ingredients: [
            "300 gram tepung terigu",
            "1 sdt garam",
            "1 sdm gula",
            "1 butir telur",
            "150 ml air",
            "50 ml minyak goreng",
            "Margasin untuk olesan",
            "Terigu untuk taburan"
        ],
        instructions: [
            "Campurkan tepung, garam, dan gula.",
            "Masukkan telur dan air, uleni hingga kalis.",
            "Diamkan adonan 30 menit.",
            "Bagi adonan menjadi 4 bagian bulat.",
            "Gilas tipis, olesi margarin.",
            "Lipat seperti amplop, ulangi 2 kali.",
            "Gilas tipis lagi, goreng di wajan datar.",
            "Balik hingga kedua sisi kecokelatan.",
            "Sajikan dengan kari daging."
        ]
    }
];

// Category translations
const categoryTranslations = {
    nusantara: "Masakan Nusantara",
    mudah: "Resep Mudah",
    camilan: "Camilan",
    minuman: "Minuman"
};

// Difficulty colors
const difficultyClasses = {
    "Mudah": "difficulty-easy",
    "Sedang": "difficulty-medium",
    "Sulit": "difficulty-hard"
};

// DOM Elements
const recipeGrid = document.getElementById('recipeGrid');
const featuredRecipes = document.getElementById('featuredRecipes');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const navLinks = document.querySelectorAll('.nav-link');
const categoryCards = document.querySelectorAll('.category-card');

// Modal elements
const modal = document.getElementById('recipeModal');
const closeModal = document.querySelector('.close-modal');

// Error image fallback
const fallbackImage = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800';

// Function to open recipe detail modal
function openRecipeModal(recipe) {
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalImage').onerror = function() {
        this.src = fallbackImage;
    };
    document.getElementById('modalCategory').textContent = categoryTranslations[recipe.category];
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalServings').textContent = recipe.servings;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalDifficulty').className = 'modal-difficulty ' + difficultyClasses[recipe.difficulty];
    document.getElementById('modalDescription').textContent = recipe.description;
    
    // Populate ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Populate instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach((instruction, index) => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Function to render featured recipes
function renderFeaturedRecipes(recipes) {
    featuredRecipes.innerHTML = '';
    
    const featured = recipes.filter(r => r.featured).slice(0, 3);
    
    if (featured.length === 0) {
        featuredRecipes.style.display = 'none';
        return;
    }
    
    featuredRecipes.style.display = 'grid';
    
    featured.forEach(item => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='${fallbackImage}'">
            <div class="featured-overlay">
                <span class="featured-badge">${categoryTranslations[item.category]}</span>
                <h3 class="featured-title">${item.title}</h3>
                <p class="featured-excerpt">${item.description}</p>
                <div class="featured-meta">
                    <span>⏱️ ${item.time}</span>
                    <span>👥 ${item.servings}</span>
                    <span>📊 ${item.difficulty}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openRecipeModal(item));
        featuredRecipes.appendChild(card);
    });
}

// Function to render recipe grid
function renderRecipes(recipes) {
    recipeGrid.innerHTML = '';
    
    if (recipes.length === 0) {
        recipeGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6d4c41;">Tidak ada resep ditemukan.</p>';
        return;
    }
    
    recipes.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="recipe-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='${fallbackImage}'">
                <span class="recipe-category">${categoryTranslations[item.category]}</span>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${item.title}</h3>
                <p class="recipe-description">${item.description}</p>
                <div class="recipe-meta">
                    <div class="recipe-info">
                        <span>⏱️ ${item.time}</span>
                        <span>👥 ${item.servings}</span>
                    </div>
                    <span class="recipe-difficulty ${difficultyClasses[item.difficulty]}">${item.difficulty}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openRecipeModal(item));
        recipeGrid.appendChild(card);
    });
}

// Function to filter recipes by category
function filterByCategory(category) {
    // Update nav links
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    if (category === 'all') {
        renderRecipes(recipeData);
        renderFeaturedRecipes(recipeData);
    } else {
        const filtered = recipeData.filter(r => r.category === category);
        renderRecipes(filtered);
        featuredRecipes.innerHTML = '';
    }
}

// Function to search recipes
function searchRecipes(query) {
    const searchTerm = query.toLowerCase();
    const filtered = recipeData.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        categoryTranslations[recipe.category].toLowerCase().includes(searchTerm)
    );
    
    renderRecipes(filtered);
    featuredRecipes.innerHTML = '';
    
    if (filtered.length > 0 && document.querySelector('.nav-link.active').dataset.category === 'all') {
        renderFeaturedRecipes(filtered);
    }
}

// Event Listeners for Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        filterByCategory(category);
    });
});

// Event Listeners for Category Cards
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        filterByCategory(category);
        // Scroll to recipes section
        document.getElementById('resep').scrollIntoView({ behavior: 'smooth' });
    });
});

// Event Listeners for Search
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        searchRecipes(query);
    } else {
        renderRecipes(recipeData);
        renderFeaturedRecipes(recipeData);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            searchRecipes(query);
        } else {
            renderRecipes(recipeData);
            renderFeaturedRecipes(recipeData);
        }
    }
});

// Newsletter form handling
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih telah berlangganan! Anda akan mendapatkan resep-resep terbaru dari Dapur Rumahan.');
    e.target.reset();
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedRecipes(recipeData);
    renderRecipes(recipeData);
});

