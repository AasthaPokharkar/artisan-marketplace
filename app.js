/**
 * ============================================================================
 * KALAKRITI - ARTISANAL HERITAGE OF INDIA
 * Main Application Logic (Vanilla JavaScript - Zero Dependencies)
 * ============================================================================
 */

(function () {
    'use strict';

    /* ------------------------------------------------------------------------
       1. INITIAL DATA: CURATED AUTHENTIC INDIAN HANDICRAFTS
       ------------------------------------------------------------------------ */
    const DEFAULT_PRODUCTS = [
        {
            id: 1,
            name: "Jaipur Royal Blue Pottery Floral Urn Vase",
            category: "Pottery & Ceramics",
            price: 1450,
            mrp: 1850,
            artisan: "Rameshwar Kumhar",
            studio: "Kumhar Blue Traditions",
            state: "Rajasthan",
            city: "Jaipur",
            giTag: true,
            rating: 4.9,
            reviewsCount: 142,
            tag: "Bestseller",
            material: "Quartz powder, Fuller's earth, Natural gum",
            dimensions: "10 inches height x 5.5 inches diameter",
            care: "Wipe with damp cloth. Not suitable for microwave.",
            image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
            story: "Crafted without clay using an ancient Egyptian technique brought to Jaipur in the 17th century. Made with ground quartz stone, Fuller's earth, and natural gum, hand-painted with cobalt blue and copper oxide pigments before a single low-temperature kiln firing."
        },
        {
            id: 2,
            name: "Banarasi Katan Pure Silk Handloom Saree (Gold Zari)",
            category: "Handloom & Textiles",
            price: 6800,
            mrp: 8500,
            artisan: "Ustad Rahim Ansari",
            studio: "Ansari Heritage Looms",
            state: "Uttar Pradesh",
            city: "Varanasi",
            giTag: true,
            rating: 5.0,
            reviewsCount: 89,
            tag: "Master Weaver",
            material: "100% Pure Mulberry Silk & Gold Zari",
            dimensions: "6.5 metres (Includes unstitched blouse piece)",
            care: "Dry clean only. Store wrapped in pure cotton cloth.",
            image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
            story: "Handwoven by 4th-generation master weavers on wooden pit looms over 24 days. Featuring intricate Shikargah jaal motifs woven with fine metallic zari threads that glimmer with traditional regal elegance."
        },
        {
            id: 3,
            name: "Bastar Dhokra Lost-Wax Bell Metal Tribal Figurine",
            category: "Brass & Metalcraft",
            price: 2200,
            mrp: 2750,
            artisan: "Ganga Devi Ghadwa",
            studio: "Bastar Tribal Guild",
            state: "Chhattisgarh",
            city: "Bastar",
            giTag: true,
            rating: 4.8,
            reviewsCount: 76,
            tag: "Ancient Craft",
            material: "Brass alloy (Bell metal), Beeswax core",
            dimensions: "8 inches height x 3.5 inches width",
            care: "Dust with soft dry brush. Polish occasionally with brass polish.",
            image: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=800&q=80",
            story: "Created using a 4,000-year-old non-ferrous metal casting method dating back to Mohenjo-daro's Dancing Girl. Each piece requires a hand-sculpted beeswax armature melted away during casting, making every single sculpture entirely one-of-a-kind."
        },
        {
            id: 4,
            name: "Madhubani Kohbar Tree of Life Hand-Painted Canvas",
            category: "Folk Art & Paintings",
            price: 3150,
            mrp: 3900,
            artisan: "Sunita Jha",
            studio: "Mithila Kalakriti",
            state: "Bihar",
            city: "Madhubani",
            giTag: true,
            rating: 4.9,
            reviewsCount: 112,
            tag: "State Awardee",
            material: "Handmade Tussar silk paper, Natural vegetable dyes",
            dimensions: "18 x 24 inches (Unframed)",
            care: "Keep away from direct sunlight. Frame under anti-reflective glass.",
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
            story: "Painted with natural organic colours sourced from madder root, turmeric, night-blooming jasmine, and soot. Drawn with fine bamboo twigs and dipped nibs, representing the sacred Tree of Life symbolising fertility, longevity, and cosmic protection."
        },
        {
            id: 5,
            name: "Channapatna Lacquerware Wooden Stacking Toy & Rocker",
            category: "Wooden Crafts",
            price: 890,
            mrp: 1150,
            artisan: "Basavaraj Shetty",
            studio: "Toy Town Crafts",
            state: "Karnataka",
            city: "Channapatna",
            giTag: true,
            rating: 4.9,
            reviewsCount: 205,
            tag: "Child Safe",
            material: "Ivory Wood (Aale Mara), Natural vegetable dyes, Lac",
            dimensions: "8 inches height x 4.5 inches base",
            care: "Wipe with clean dry cloth. Keep away from excessive moisture.",
            image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
            story: "Crafted in Karnataka's famous 'Gombegala Ooru' (Toy Town). Lathe-turned from sustainable Wrightia tinctoria wood and polished with lac coloured using natural turmeric, kumkum, and indigo. 100% organic, splinter-free, and safe for children."
        },
        {
            id: 6,
            name: "Kashmiri Hand-Embroidered Pashmina Sozni Shawl",
            category: "Handloom & Textiles",
            price: 8900,
            mrp: 11500,
            artisan: "Ghulam Hassan Mir",
            studio: "Valley Pashmina Guild",
            state: "Jammu & Kashmir",
            city: "Srinagar",
            giTag: true,
            rating: 5.0,
            reviewsCount: 64,
            tag: "Luxury Heritage",
            material: "100% Pure Changthangi Cashmere wool, Silk thread",
            dimensions: "200 cm length x 100 cm width",
            care: "Dry clean only. Store with cedar balls or dried lavender.",
            image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
            story: "Spun from the downy undercoat of Himalayan Changthangi mountain goats grazing at 14,000 feet. Features needlework so intricate that it takes an artisan 90 full days of focused work to embroider delicate paisley and chinar leaf patterns."
        },
        {
            id: 7,
            name: "Handcrafted Rajasthani Embroidered Camel Leather Mojaris",
            category: "Leather & Footwear",
            price: 1250,
            mrp: 1600,
            artisan: "Kanhaiyalal Prajapat",
            studio: "Desert Mojari Crafts",
            state: "Rajasthan",
            city: "Jodhpur",
            giTag: false,
            rating: 4.7,
            reviewsCount: 98,
            tag: "Festive Wear",
            material: "Vegetable-tanned organic leather, Silk & tilla thread",
            dimensions: "Sizes 6 to 11 UK/India",
            care: "Apply mustard oil lightly to soften. Keep dry.",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
            story: "Hand-stitched using traditional vegetable-tanned leather without chemical chroming. Decorated with colourful silk thread Dabka work and a classic curled pointed toe (nokh) beloved in royal Rajput attire."
        },
        {
            id: 8,
            name: "Thanjavur 22K Gold Foil Sacred Ganesha Relief Wall Art",
            category: "Folk Art & Paintings",
            price: 7400,
            mrp: 9200,
            artisan: "M. Balasubramanian",
            studio: "Tanjore Temple Arts",
            state: "Tamil Nadu",
            city: "Thanjavur",
            giTag: true,
            rating: 5.0,
            reviewsCount: 43,
            tag: "Gold Leaf",
            material: "Teakwood plank, 22K Gold foil, Jaipur semi-precious stones, Chalk paste",
            dimensions: "12 x 15 inches framed",
            care: "Clean frame with soft duster. Sealed against moisture.",
            image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80",
            story: "Classical South Indian painting originating from the Maratha court of 16th-century Thanjavur. Embellished with 3D gesso relief work gilded in genuine 22-carat gold foil and adorned with cut Jaipur glass gems."
        },
        {
            id: 9,
            name: "Moradabad Hand-Hammered Antique Brass Floral Urli",
            category: "Brass & Metalcraft",
            price: 1750,
            mrp: 2100,
            artisan: "Mohd. Irfan",
            studio: "Brass City Chisel Works",
            state: "Uttar Pradesh",
            city: "Moradabad",
            giTag: true,
            rating: 4.8,
            reviewsCount: 134,
            tag: "Festive Decor",
            material: "Pure Virgin Brass with antique lacquer coating",
            dimensions: "12 inches diameter x 4 inches height",
            care: "Clean with lemon and salt or Pitambari powder for bright shine.",
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
            story: "Hand-hammered and etched by master chisellers in Moradabad, famously known as the 'Peetal Nagri' (Brass City) of India. Perfect for floating water candles, fresh marigold petals, and festive entryway blessings."
        },
        {
            id: 10,
            name: "Kutch Rogan Hand-Painted Castor Oil Silk Stole",
            category: "Handloom & Textiles",
            price: 4200,
            mrp: 5000,
            artisan: "Rizwan Khatri",
            studio: "Nirona Rogan Heritage",
            state: "Gujarat",
            city: "Kutch",
            giTag: true,
            rating: 4.9,
            reviewsCount: 51,
            tag: "Rare Heritage",
            material: "Pure Tussar Silk, Boiled castor oil paste, Natural pigment",
            dimensions: "180 cm length x 60 cm width",
            care: "Gentle hand wash in cold water or dry clean.",
            image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
            story: "Practiced today by only one family in Nirona village, Gujarat. The paint is made by boiling wild castor oil for 48 hours, blended with stone pigments, and drawn freehand on silk using a 6-inch blunt metal stylus without any sketch."
        },
        {
            id: 11,
            name: "Bishnupur Terracotta Festive Hanging Diya Chandelier",
            category: "Pottery & Ceramics",
            price: 950,
            mrp: 1200,
            artisan: "Biren Pal",
            studio: "Bankura Clay Guild",
            state: "West Bengal",
            city: "Bishnupur",
            giTag: true,
            rating: 4.8,
            reviewsCount: 88,
            tag: "Eco Friendly",
            material: "Natural Alluvial Clay, Ochre slip",
            dimensions: "14 inches drop x 7 inches diameter",
            care: "Handle with care. Store dry after festivities.",
            image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
            story: "Hand-moulded and fired in traditional pit kilns using sacred red alluvial clay from the Damodar river valley. Inspired by the UNESCO-recognized 17th-century terracotta temples of Bishnupur."
        },
        {
            id: 12,
            name: "Saharanpur Carved Sheesham Wood Floral Jali Box",
            category: "Wooden Crafts",
            price: 1850,
            mrp: 2400,
            artisan: "Harish Chand Saini",
            studio: "Saini Woodcraft Heritage",
            state: "Uttar Pradesh",
            city: "Saharanpur",
            giTag: false,
            rating: 4.7,
            reviewsCount: 67,
            tag: "Hand Carved",
            material: "Seasoned Indian Rosewood (Sheesham), Brass inlay latch",
            dimensions: "9 x 6 x 4 inches",
            care: "Buff with natural beeswax or coconut oil once a year.",
            image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
            story: "Hand-carved with traditional wood chisels into delicate Mughal jaali fretwork that allows aromatic incense smoke or jewellery ventilation. Finished with natural beeswax polish."
        }
    ];

    /* ------------------------------------------------------------------------
       2. APPLICATION STATE MANAGEMENT (LOCAL STORAGE PERSISTENCE)
       ------------------------------------------------------------------------ */
    let products = [];
    let cart = [];
    let wishlist = new Set();
    let appliedCoupon = null;

    // Filters state
    let filters = {
        search: "",
        category: "All",
        state: "All",
        priceRange: "All",
        giTagOnly: false,
        sortBy: "featured"
    };

    // Coupons database
    const VALID_COUPONS = {
        "HACKATHON10": { type: "percent", value: 10, label: "10% Hackathon Discount" },
        "DESI20": { type: "percent", value: 20, label: "20% Festive Craft Discount" },
        "ARTISAN500": { type: "flat", value: 500, minOrder: 2000, label: "Flat ₹500 Off (Min ₹2000)" }
    };

    // Load state from localStorage
    function loadState() {
        try {
            const savedProducts = localStorage.getItem("kalakriti_products");
            products = savedProducts ? JSON.parse(savedProducts) : [...DEFAULT_PRODUCTS];

            const savedCart = localStorage.getItem("kalakriti_cart");
            cart = savedCart ? JSON.parse(savedCart) : [];

            const savedWishlist = localStorage.getItem("kalakriti_wishlist");
            wishlist = savedWishlist ? new Set(JSON.parse(savedWishlist)) : new Set();

            const savedCoupon = localStorage.getItem("kalakriti_coupon");
            appliedCoupon = savedCoupon ? JSON.parse(savedCoupon) : null;
        } catch (error) {
            console.warn("Storage access failed, using memory fallback:", error);
            products = [...DEFAULT_PRODUCTS];
            cart = [];
            wishlist = new Set();
            appliedCoupon = null;
        }
    }

    function saveProducts() {
        try {
            localStorage.setItem("kalakriti_products", JSON.stringify(products));
        } catch (e) { console.error("Error saving products", e); }
    }

    function saveCart() {
        try {
            localStorage.setItem("kalakriti_cart", JSON.stringify(cart));
        } catch (e) { console.error("Error saving cart", e); }
    }

    function saveWishlist() {
        try {
            localStorage.setItem("kalakriti_wishlist", JSON.stringify([...wishlist]));
        } catch (e) { console.error("Error saving wishlist", e); }
    }

    function saveCoupon() {
        try {
            if (appliedCoupon) {
                localStorage.setItem("kalakriti_coupon", JSON.stringify(appliedCoupon));
            } else {
                localStorage.removeItem("kalakriti_coupon");
            }
        } catch (e) { console.error("Error saving coupon", e); }
    }

    /* ------------------------------------------------------------------------
       3. HELPER UTILITIES
       ------------------------------------------------------------------------ */
    function formatINR(amount) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount || 0);
    }

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function showToast(message, type = "info") {
        const container = document.getElementById("toastContainer");
        if (!container) return;

        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;
        
        let icon = "🔔";
        if (type === "success") icon = "✓";
        if (type === "error") icon = "✕";

        toast.innerHTML = `
            <span>${icon}</span>
            <span>${escapeHtml(message)}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(10px)";
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    /* ------------------------------------------------------------------------
       4. PRODUCT FILTERING & RENDERING
       ------------------------------------------------------------------------ */
    function getFilteredProducts() {
        return products.filter(product => {
            // Search filter
            if (filters.search) {
                const q = filters.search.toLowerCase().trim();
                const matchTarget = [
                    product.name,
                    product.artisan,
                    product.category,
                    product.state,
                    product.city,
                    product.material,
                    product.story
                ].join(" ").toLowerCase();

                if (!matchTarget.includes(q)) return false;
            }

            // Category filter
            if (filters.category !== "All" && product.category !== filters.category) {
                return false;
            }

            // State filter
            if (filters.state !== "All" && product.state !== filters.state) {
                return false;
            }

            // GI Tag filter
            if (filters.giTagOnly && !product.giTag) {
                return false;
            }

            // Price Range filter
            if (filters.priceRange !== "All") {
                const price = Number(product.price);
                if (filters.priceRange === "under-1000" && price >= 1000) return false;
                if (filters.priceRange === "1000-2500" && (price < 1000 || price > 2500)) return false;
                if (filters.priceRange === "2500-5000" && (price < 2500 || price > 5000)) return false;
                if (filters.priceRange === "above-5000" && price <= 5000) return false;
            }

            return true;
        }).sort((a, b) => {
            switch (filters.sortBy) {
                case "price-asc": return a.price - b.price;
                case "price-desc": return b.price - a.price;
                case "rating": return b.rating - a.rating;
                case "name": return a.name.localeCompare(b.name);
                default: return (b.giTag ? 1 : 0) - (a.giTag ? 1 : 0) || b.rating - a.rating;
            }
        });
    }

    function renderProductsGrid() {
        const grid = document.getElementById("productsGrid");
        const emptyState = document.getElementById("emptyState");
        const countText = document.getElementById("marketItemCountText");
        const filterSummaryText = document.getElementById("filterSummaryText");
        const resetBtn = document.getElementById("resetFiltersBtn");

        if (!grid) return;

        const filtered = getFilteredProducts();

        // Update counts
        if (countText) {
            countText.textContent = `${filtered.length} ${filtered.length === 1 ? 'Craft' : 'Crafts'} Available`;
        }

        // Update reset buttons & summary
        const hasActiveFilters = filters.search || filters.category !== "All" || filters.state !== "All" || filters.priceRange !== "All" || filters.giTagOnly;
        if (resetBtn) {
            resetBtn.classList.toggle("hidden", !hasActiveFilters);
        }

        if (filterSummaryText) {
            if (hasActiveFilters) {
                filterSummaryText.textContent = `Filtered results (${filtered.length} items found)`;
            } else {
                filterSummaryText.textContent = `Showing all authentic items (${filtered.length} total)`;
            }
        }

        // Toggle empty state
        if (filtered.length === 0) {
            grid.innerHTML = "";
            emptyState?.classList.remove("hidden");
            return;
        }

        emptyState?.classList.add("hidden");

        // Render cards
        grid.innerHTML = filtered.map(product => {
            const isWishlisted = wishlist.has(product.id);
            const savingsPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

            return `
                <article class="product-card" data-id="${product.id}">
                    <div class="product-img-wrapper">
                        <img 
                            src="${escapeHtml(product.image)}" 
                            alt="${escapeHtml(product.name)}" 
                            class="product-card-img" 
                            loading="lazy"
                            onerror="this.onerror=null;this.src='https://placehold.co/600x450/f4e8dd/8b4b2b?text=${encodeURIComponent(product.category)}';"
                        >
                        
                        <div class="product-badge-stack">
                            ${product.tag ? `<span class="card-tag tag-bestseller">${escapeHtml(product.tag)}</span>` : ""}
                            ${product.giTag ? `<span class="card-tag tag-gi">🏅 GI Tag</span>` : ""}
                        </div>

                        <button 
                            class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                            data-action="toggle-wishlist" 
                            data-id="${product.id}"
                            aria-label="Save to wishlist"
                            title="Add to wishlist"
                        >
                            ${isWishlisted ? "❤️" : "🤍"}
                        </button>
                    </div>

                    <div class="product-card-body">
                        <div class="product-card-meta">
                            <span class="product-card-category">${escapeHtml(product.category)}</span>
                            <span class="product-card-origin">${escapeHtml(product.state)}</span>
                        </div>

                        <h3 class="product-card-title" title="${escapeHtml(product.name)}">
                            ${escapeHtml(product.name)}
                        </h3>

                        <p class="product-card-artisan">
                            <span class="verified-icon">✓</span> By ${escapeHtml(product.artisan)}
                        </p>

                        <div class="product-card-rating">
                            <span>★ ${product.rating.toFixed(1)}</span>
                            <small>(${product.reviewsCount} reviews)</small>
                        </div>

                        <div class="product-card-bottom">
                            <div class="product-price-box">
                                <span class="price-current">${formatINR(product.price)}</span>
                                ${product.mrp > product.price ? `<span class="price-mrp">${formatINR(product.mrp)}</span>` : ""}
                            </div>
                            ${savingsPercent > 0 ? `<span class="badge-gi">${savingsPercent}% OFF</span>` : ""}
                        </div>

                        <div class="product-card-actions">
                            <button class="btn btn-outline btn-sm" data-action="quick-view" data-id="${product.id}">
                                👁️ Quick View
                            </button>
                            <button class="btn btn-primary btn-sm" data-action="add-cart" data-id="${product.id}">
                                🛍️ Add to Bag
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join("");
    }

    /* ------------------------------------------------------------------------
       5. PRODUCT DETAILS MODAL (QUICK VIEW & SPECS)
       ------------------------------------------------------------------------ */
    let currentModalProductId = null;

    function openProductModal(productId) {
        const product = products.find(p => p.id === Number(productId));
        if (!product) return;

        currentModalProductId = product.id;

        const modalBackdrop = document.getElementById("productModalBackdrop");
        const modalImg = document.getElementById("modalProductImg");
        const modalTitle = document.getElementById("modalProductTitle");
        const modalCategory = document.getElementById("modalCategory");
        const modalOrigin = document.getElementById("modalOrigin");
        const modalPrice = document.getElementById("modalPrice");
        const modalMrp = document.getElementById("modalMrp");
        const modalDiscount = document.getElementById("modalDiscount");
        const modalRating = document.getElementById("modalRating");
        const modalDescription = document.getElementById("modalDescription");
        const modalSpecsGrid = document.getElementById("modalSpecsGrid");
        const modalArtisanAvatar = document.getElementById("modalArtisanAvatar");
        const modalArtisanName = document.getElementById("modalArtisanName");
        const modalArtisanLocation = document.getElementById("modalArtisanLocation");
        const modalQtyInput = document.getElementById("modalQtyInput");
        const modalGiBadge = document.getElementById("modalGiBadge");

        // Set Values
        if (modalImg) {
            modalImg.src = product.image;
            modalImg.alt = product.name;
            modalImg.onerror = function() {
                this.onerror = null;
                this.src = "https://placehold.co/600x450/f4e8dd/8b4b2b?text=Handmade+Craft";
            };
        }

        if (modalTitle) modalTitle.textContent = product.name;
        if (modalCategory) modalCategory.textContent = product.category;
        if (modalOrigin) modalOrigin.textContent = `${product.city}, ${product.state}`;
        if (modalPrice) modalPrice.textContent = formatINR(product.price);
        
        if (modalMrp) {
            modalMrp.textContent = formatINR(product.mrp);
            modalMrp.classList.toggle("hidden", product.mrp <= product.price);
        }

        if (modalDiscount) {
            const savings = Math.round(((product.mrp - product.price) / product.mrp) * 100);
            modalDiscount.textContent = `Save ${savings}%`;
            modalDiscount.classList.toggle("hidden", savings <= 0);
        }

        if (modalRating) {
            modalRating.innerHTML = `★ ${product.rating.toFixed(1)} <small>(${product.reviewsCount} customer reviews)</small>`;
        }

        if (modalDescription) modalDescription.textContent = product.story;

        if (modalGiBadge) {
            modalGiBadge.classList.toggle("hidden", !product.giTag);
        }

        // Specs Grid
        if (modalSpecsGrid) {
            modalSpecsGrid.innerHTML = `
                <div class="spec-item">
                    <strong>Primary Material</strong>
                    <span>${escapeHtml(product.material || "Natural artisan materials")}</span>
                </div>
                <div class="spec-item">
                    <strong>Dimensions</strong>
                    <span>${escapeHtml(product.dimensions || "Handcrafted standard")}</span>
                </div>
                <div class="spec-item">
                    <strong>GI Tag Status</strong>
                    <span>${product.giTag ? "Certified Geographical Indication" : "Traditional Rural Craft"}</span>
                </div>
                <div class="spec-item">
                    <strong>Care Notes</strong>
                    <span>${escapeHtml(product.care || "Handle with artisan care")}</span>
                </div>
            `;
        }

        // Artisan Card
        if (modalArtisanName) modalArtisanName.textContent = product.artisan;
        if (modalArtisanLocation) modalArtisanLocation.textContent = `${product.city}, ${product.state}`;
        if (modalArtisanAvatar) {
            const initials = product.artisan.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
            modalArtisanAvatar.textContent = initials || "AR";
        }

        if (modalQtyInput) modalQtyInput.value = "1";

        // Show Modal
        modalBackdrop?.classList.remove("hidden");
    }

    function closeProductModal() {
        document.getElementById("productModalBackdrop")?.classList.add("hidden");
        currentModalProductId = null;
    }

    /* ------------------------------------------------------------------------
       6. SHOPPING CART LOGIC & DRAWER
       ------------------------------------------------------------------------ */
    function addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === Number(productId));
        if (!product) return;

        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                artisan: product.artisan,
                category: product.category,
                image: product.image,
                quantity: quantity
            });
        }

        saveCart();
        updateCartUI();
        showToast(`Added "${product.name}" to your Craft Bag!`, "success");
        openCartDrawer();
    }

    function updateCartItemQuantity(productId, delta) {
        const item = cart.find(i => i.id === Number(productId));
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== Number(productId));
            showToast("Item removed from Craft Bag");
        }

        saveCart();
        updateCartUI();
    }

    function removeCartItem(productId) {
        cart = cart.filter(i => i.id !== Number(productId));
        saveCart();
        updateCartUI();
        showToast("Item removed from Craft Bag");
    }

    function calculateCartTotals() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Free shipping if subtotal >= 1499, otherwise Rs. 99
        const shippingThreshold = 1499;
        const shipping = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 99;

        // Discount calculation
        let discount = 0;
        if (appliedCoupon && subtotal > 0) {
            if (appliedCoupon.type === "percent") {
                discount = Math.round((subtotal * appliedCoupon.value) / 100);
            } else if (appliedCoupon.type === "flat") {
                if (!appliedCoupon.minOrder || subtotal >= appliedCoupon.minOrder) {
                    discount = appliedCoupon.value;
                }
            }
        }

        const total = Math.max(0, subtotal + shipping - discount);

        return { subtotal, shipping, discount, total, shippingThreshold };
    }

    function updateCartUI() {
        const cartCountBadge = document.getElementById("cartCount");
        const cartDrawerCount = document.getElementById("cartDrawerCount");
        const cartItemsList = document.getElementById("cartItemsList");
        const shippingMsg = document.getElementById("shippingMsg");
        const shippingProgressFill = document.getElementById("shippingProgressFill");
        
        const subtotalEl = document.getElementById("cartSubtotal");
        const shippingEl = document.getElementById("cartShipping");
        const discountRow = document.getElementById("cartDiscountRow");
        const discountEl = document.getElementById("cartDiscount");
        const grandTotalEl = document.getElementById("cartGrandTotal");
        const openCheckoutBtn = document.getElementById("openCheckoutBtn");

        const totals = calculateCartTotals();
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

        // Badges
        if (cartCountBadge) cartCountBadge.textContent = totalItemsCount;
        if (cartDrawerCount) cartDrawerCount.textContent = totalItemsCount;

        // Shipping progress bar
        if (shippingProgressFill && shippingMsg) {
            if (totals.subtotal >= totals.shippingThreshold) {
                shippingMsg.innerHTML = "🎉 <strong>FREE Delivery Unlocked</strong> across India!";
                shippingProgressFill.style.width = "100%";
            } else {
                const remaining = totals.shippingThreshold - totals.subtotal;
                const percent = Math.min(100, Math.round((totals.subtotal / totals.shippingThreshold) * 100));
                shippingMsg.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more for <strong>FREE Delivery</strong>!`;
                shippingProgressFill.style.width = `${percent}%`;
            }
        }

        // Price Breakdown
        if (subtotalEl) subtotalEl.textContent = formatINR(totals.subtotal);
        if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? "FREE" : formatINR(totals.shipping);
        
        if (discountRow && discountEl) {
            if (totals.discount > 0) {
                discountRow.classList.remove("hidden");
                discountEl.textContent = `- ${formatINR(totals.discount)}`;
            } else {
                discountRow.classList.add("hidden");
            }
        }

        if (grandTotalEl) grandTotalEl.textContent = formatINR(totals.total);

        // Checkout Button state
        if (openCheckoutBtn) {
            openCheckoutBtn.disabled = cart.length === 0;
            openCheckoutBtn.style.opacity = cart.length === 0 ? "0.5" : "1";
        }

        // Render Cart Items
        if (!cartItemsList) return;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="cart-empty-view">
                    <span class="cart-empty-icon">🪷</span>
                    <h4>Your Craft Bag is Empty</h4>
                    <p>Support India's master makers by discovering our curated collection.</p>
                    <button class="btn btn-primary btn-sm" id="emptyCartExploreBtn">Explore Crafts ➔</button>
                </div>
            `;
            return;
        }

        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item-card" data-id="${item.id}">
                <img 
                    src="${escapeHtml(item.image)}" 
                    alt="${escapeHtml(item.name)}" 
                    class="cart-item-img"
                    onerror="this.onerror=null;this.src='https://placehold.co/100x100/f4e8dd/8b4b2b?text=Craft';"
                >
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
                    <p class="cart-item-artisan">By ${escapeHtml(item.artisan)}</p>
                    <div class="cart-item-controls">
                        <div class="cart-qty-picker">
                            <button class="cart-qty-btn" data-action="cart-minus" data-id="${item.id}">−</button>
                            <span class="cart-qty-display">${item.quantity}</span>
                            <button class="cart-qty-btn" data-action="cart-plus" data-id="${item.id}">+</button>
                        </div>
                        <span class="cart-item-price">${formatINR(item.price * item.quantity)}</span>
                    </div>
                </div>
                <button class="cart-item-remove" data-action="cart-remove" data-id="${item.id}" title="Remove item">✕</button>
            </div>
        `).join("");
    }

    function openCartDrawer() {
        document.getElementById("cartBackdrop")?.classList.remove("hidden");
        document.getElementById("cartDrawer")?.classList.remove("hidden");
    }

    function closeCartDrawer() {
        document.getElementById("cartBackdrop")?.classList.add("hidden");
        document.getElementById("cartDrawer")?.classList.add("hidden");
    }

    /* ------------------------------------------------------------------------
       7. COUPON LOGIC
       ------------------------------------------------------------------------ */
    function applyCouponCode(code) {
        const cleanCode = (code || "").trim().toUpperCase();
        if (!cleanCode) {
            showToast("Please enter a valid coupon code", "error");
            return;
        }

        const coupon = VALID_COUPONS[cleanCode];
        if (!coupon) {
            showToast(`Coupon "${cleanCode}" is invalid. Try "HACKATHON10"`, "error");
            return;
        }

        const totals = calculateCartTotals();
        if (coupon.minOrder && totals.subtotal < coupon.minOrder) {
            showToast(`Coupon requires a minimum order of ${formatINR(coupon.minOrder)}`, "error");
            return;
        }

        appliedCoupon = { code: cleanCode, ...coupon };
        saveCoupon();
        updateCouponUI();
        updateCartUI();
        showToast(`Coupon "${cleanCode}" applied: ${coupon.label}!`, "success");
    }

    function removeCouponCode() {
        appliedCoupon = null;
        saveCoupon();
        updateCouponUI();
        updateCartUI();
        showToast("Coupon removed");
    }

    function updateCouponUI() {
        const tag = document.getElementById("couponAppliedTag");
        const nameEl = document.getElementById("appliedCouponName");
        const inputEl = document.getElementById("couponInput");

        if (!tag || !nameEl) return;

        if (appliedCoupon) {
            tag.classList.remove("hidden");
            nameEl.textContent = appliedCoupon.code;
            if (inputEl) inputEl.value = "";
        } else {
            tag.classList.add("hidden");
        }
    }

    /* ------------------------------------------------------------------------
       8. CHECKOUT & ORDER CONFIRMATION
       ------------------------------------------------------------------------ */
    function openCheckoutModal() {
        if (cart.length === 0) {
            showToast("Your craft bag is empty. Add crafts first!", "error");
            return;
        }

        closeCartDrawer();

        const modalBackdrop = document.getElementById("checkoutModalBackdrop");
        const previewContainer = document.getElementById("checkoutItemsPreview");
        const subtotalEl = document.getElementById("checkoutSubtotal");
        const shippingEl = document.getElementById("checkoutShipping");
        const discountRow = document.getElementById("checkoutDiscountRow");
        const discountEl = document.getElementById("checkoutDiscount");
        const totalEl = document.getElementById("checkoutTotal");
        const payBtnTotal = document.getElementById("checkoutPayBtnTotal");

        const totals = calculateCartTotals();

        // Populate items preview
        if (previewContainer) {
            previewContainer.innerHTML = cart.map(item => `
                <div class="preview-row">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" class="preview-img">
                    <span class="preview-title">${escapeHtml(item.name)} <small>x${item.quantity}</small></span>
                    <strong>${formatINR(item.price * item.quantity)}</strong>
                </div>
            `).join("");
        }

        // Totals
        if (subtotalEl) subtotalEl.textContent = formatINR(totals.subtotal);
        if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? "FREE" : formatINR(totals.shipping);
        
        if (discountRow && discountEl) {
            if (totals.discount > 0) {
                discountRow.classList.remove("hidden");
                discountEl.textContent = `- ${formatINR(totals.discount)}`;
            } else {
                discountRow.classList.add("hidden");
            }
        }

        if (totalEl) totalEl.textContent = formatINR(totals.total);
        if (payBtnTotal) payBtnTotal.textContent = formatINR(totals.total);

        modalBackdrop?.classList.remove("hidden");
    }

    function closeCheckoutModal() {
        document.getElementById("checkoutModalBackdrop")?.classList.add("hidden");
    }

    function processCheckout(event) {
        event.preventDefault();

        const form = document.getElementById("checkoutForm");
        const name = document.getElementById("custName")?.value.trim();
        const phone = document.getElementById("custPhone")?.value.trim();
        const email = document.getElementById("custEmail")?.value.trim();
        const address = document.getElementById("custAddress")?.value.trim();
        const city = document.getElementById("custCity")?.value.trim();
        const state = document.getElementById("custState")?.value.trim();
        const pincode = document.getElementById("custPincode")?.value.trim();

        if (!name || !phone || !email || !address || !city || !state || !pincode) {
            showToast("Please fill in all required shipping fields", "error");
            return;
        }

        const totals = calculateCartTotals();
        const orderId = `KALA-2026-${Math.floor(1000 + Math.random() * 9000)}`;

        // Close checkout modal
        closeCheckoutModal();

        // Show confirmation modal
        const successModal = document.getElementById("orderSuccessModalBackdrop");
        const receiptOrderId = document.getElementById("receiptOrderId");
        const receiptTotal = document.getElementById("receiptTotalAmount");
        const receiptList = document.getElementById("receiptItemsList");

        if (receiptOrderId) receiptOrderId.textContent = orderId;
        if (receiptTotal) receiptTotal.textContent = formatINR(totals.total);

        if (receiptList) {
            receiptList.innerHTML = cart.map(item => `
                <div style="display:flex; justify-content:space-between;">
                    <span>${escapeHtml(item.name)} (x${item.quantity})</span>
                    <strong>${formatINR(item.price * item.quantity)}</strong>
                </div>
            `).join("");
        }

        successModal?.classList.remove("hidden");

        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();

        form.reset();
        showToast("🎉 Order placed successfully! Supporting local artisans.", "success");
    }

    /* ------------------------------------------------------------------------
       9. ARTISAN REGISTRATION & STUDIO
       ------------------------------------------------------------------------ */
    function handleArtisanRegistration(event) {
        event.preventDefault();

        const name = document.getElementById("regArtisanName")?.value.trim();
        const studio = document.getElementById("regStudioName")?.value.trim() || `${name}'s Craft Studio`;
        const state = document.getElementById("regState")?.value.trim();
        const city = document.getElementById("regCity")?.value.trim();
        const phone = document.getElementById("regPhone")?.value.trim();
        const experience = document.getElementById("regExperience")?.value.trim() || "10+ Years Heritage";
        const bio = document.getElementById("regBio")?.value.trim();

        // Product fields
        const prodTitle = document.getElementById("prodTitle")?.value.trim();
        const prodCategory = document.getElementById("prodCategory")?.value.trim();
        const prodPrice = Number(document.getElementById("prodPrice")?.value);
        const prodMaterial = document.getElementById("prodMaterial")?.value.trim();
        const prodImageUrl = document.getElementById("prodImageUrl")?.value.trim();
        const prodStory = document.getElementById("prodStory")?.value.trim();
        const giCert = document.getElementById("regGiTag")?.checked || false;

        if (!name || !state || !city || !phone || !bio || !prodTitle || !prodCategory || !prodPrice || !prodMaterial || !prodStory) {
            showToast("Please fill in all required fields", "error");
            return;
        }

        // Image fallback
        let image = prodImageUrl;
        if (!image) {
            image = "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80";
        }

        // Create new craft product
        const newCraft = {
            id: Date.now(),
            name: prodTitle,
            category: prodCategory,
            price: prodPrice,
            mrp: Math.round(prodPrice * 1.25),
            artisan: name,
            studio: studio,
            state: state,
            city: city,
            giTag: giCert,
            rating: 5.0,
            reviewsCount: 1,
            tag: "New Artisan",
            material: prodMaterial,
            dimensions: "Handcrafted standard dimensions",
            care: "Wipe gently with clean dry cloth",
            image: image,
            story: prodStory,
            isUserCreated: true
        };

        // Add to product catalog at top
        products.unshift(newCraft);
        saveProducts();

        // Update Digital ID Card Preview
        const idNamePreview = document.getElementById("idNamePreview");
        const idCraftPreview = document.getElementById("idCraftPreview");
        const idLocationPreview = document.getElementById("idLocationPreview");
        const idAvatarPreview = document.getElementById("idAvatarPreview");
        const idNumberPreview = document.getElementById("idNumberPreview");

        if (idNamePreview) idNamePreview.textContent = name;
        if (idCraftPreview) idCraftPreview.textContent = `${prodCategory} Artisan`;
        if (idLocationPreview) idLocationPreview.textContent = `${city}, ${state}`;
        if (idNumberPreview) idNumberPreview.textContent = `ART-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        if (idAvatarPreview) {
            const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
            idAvatarPreview.textContent = initials || "AR";
        }

        // Refresh UI
        renderProductsGrid();
        renderMyStudioListings();
        populateAiSelectOptions();

        showToast(`Congratulations ${name}! Your first craft is now live!`, "success");

        // Switch to studio tab
        switchStudioTab("studio");

        // Scroll to marketplace to see their craft
        document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
    }

    function renderMyStudioListings() {
        const grid = document.getElementById("myListingsGrid");
        const countSpan = document.getElementById("myProductsCount");
        const metricProductsCount = document.getElementById("metricProductsCount");

        if (!grid) return;

        const myItems = products.filter(p => p.isUserCreated);

        if (countSpan) countSpan.textContent = myItems.length;
        if (metricProductsCount) metricProductsCount.textContent = myItems.length;

        if (myItems.length === 0) {
            grid.innerHTML = `
                <p style="font-size:0.85rem; color:var(--text-muted); padding:1rem 0;">
                    No crafts listed yet. Use the registration form to publish your first masterpiece!
                </p>
            `;
            return;
        }

        grid.innerHTML = myItems.map(item => `
            <div class="my-item-row">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" class="my-item-img">
                <div class="my-item-info">
                    <strong>${escapeHtml(item.name)}</strong>
                    <small>${escapeHtml(item.category)} • ${formatINR(item.price)}</small>
                </div>
                <button class="my-item-delete" data-action="delete-my-craft" data-id="${item.id}" title="Delete listing">🗑️</button>
            </div>
        `).join("");
    }

    function switchStudioTab(tab) {
        const tabRegBtn = document.getElementById("tabRegisterBtn");
        const tabStudioBtn = document.getElementById("tabStudioBtn");
        const paneRegister = document.getElementById("paneRegister");
        const paneStudio = document.getElementById("paneStudio");

        if (tab === "studio") {
            tabRegBtn?.classList.remove("active");
            tabStudioBtn?.classList.add("active");
            paneRegister?.classList.add("hidden");
            paneStudio?.classList.remove("hidden");
        } else {
            tabStudioBtn?.classList.remove("active");
            tabRegBtn?.classList.add("active");
            paneStudio?.classList.add("hidden");
            paneRegister?.classList.remove("hidden");
        }
    }

    /* ------------------------------------------------------------------------
       10. AI CRAFT STORY STUDIO (LOCAL GENERATOR COPILOT)
       ------------------------------------------------------------------------ */
    function populateAiSelectOptions() {
        const select = document.getElementById("aiProductSelect");
        if (!select) return;

        select.innerHTML = products.map(p => `
            <option value="${p.id}">${escapeHtml(p.name)} (${escapeHtml(p.artisan)})</option>
        `).join("");
    }

    function generateAiCraftStory(event) {
        event.preventDefault();

        const select = document.getElementById("aiProductSelect");
        const toneSelect = document.getElementById("aiToneSelect");
        const keywordsInput = document.getElementById("aiKeywords");
        const outputBox = document.getElementById("aiOutputBox");
        const outputContent = document.getElementById("aiOutputContent");

        const productId = select?.value;
        const tone = toneSelect?.value || "heritage";
        const extraKeywords = (keywordsInput?.value || "").trim();

        const product = products.find(p => p.id === Number(productId)) || products[0];
        if (!product) return;

        let toneIntro = "";
        let toneNarrative = "";
        let hashtags = "#VocalForLocal #MakeInIndia #HandmadeInIndia #IndianHandicrafts #ArtisanHeritage";

        if (tone === "heritage") {
            toneIntro = `👑 Rooted in centuries of Indian cultural heritage, this authentic ${product.category} is a tribute to generational mastery.`;
            toneNarrative = `Each stroke reflects the sacred patience of master artisan ${product.artisan} from ${product.city}, ${product.state}. Crafted from pure ${product.material.toLowerCase()}, this piece carries timeless royal court elegance into modern living spaces.`;
        } else if (tone === "storytelling") {
            toneIntro = `❤️ Behind every fold and pigment is a heartbeat and a legacy.`;
            toneNarrative = `Meet ${product.name}, hand-shaped by ${product.artisan}. By bringing this piece home, you preserve a heritage technique that took over 25 days of dedicated pit-firing and natural dyeing to perfect.`;
        } else if (tone === "festive") {
            toneIntro = `🪔 Elevate your festive home celebrations with auspicious handcrafted warmth.`;
            toneNarrative = `Designed for celebrations, gifting, and sacred entryway rituals. Sourced directly from ${product.city}, this authentic handcrafted treasure embodies prosperity, auspicious blessing, and thoughtful handmade care.`;
            hashtags += " #DiwaliGifting #FestiveHome #IndianDecor";
        } else {
            toneIntro = `🌍 Museum-grade Indian craft designed for global connoisseurs of slow, sustainable art.`;
            toneNarrative = `Meticulously handcrafted from ${product.material} with organic sustainability at its core. An ethical conversation piece celebrating organic raw textures and authentic Indian provenance.`;
            hashtags += " #SustainableLiving #SlowCraft #ArtisanMade";
        }

        const keywordsText = extraKeywords ? `<p style="margin-top:0.6rem;"><strong>Signature Highlights:</strong> ${escapeHtml(extraKeywords)}</p>` : "";

        if (outputContent) {
            outputContent.innerHTML = `
                <h4>${escapeHtml(product.name)}</h4>
                <p><em>${toneIntro}</em></p>
                <p style="margin-top:0.5rem;">${toneNarrative}</p>
                ${keywordsText}
                <div class="social-tags">
                    <strong>Social Media Caption & Tags:</strong><br>
                    "Keep culture in every creation. Support ${escapeHtml(product.artisan)} today."<br>
                    <span>${hashtags}</span>
                </div>
            `;
        }

        outputBox?.classList.remove("hidden");
        showToast("✨ AI Story generated! Ready to copy and use.", "success");
    }

    async function copyAiGeneratedStory() {
        const outputContent = document.getElementById("aiOutputContent");
        if (!outputContent) return;

        const text = outputContent.innerText;
        try {
            await navigator.clipboard.writeText(text);
            showToast("Copied story to clipboard! 📋", "success");
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            showToast("Copied story to clipboard! 📋", "success");
        }
    }

    /* ------------------------------------------------------------------------
       11. GLOBAL EVENT LISTENERS & DELEGATION
       ------------------------------------------------------------------------ */
    function setupEventListeners() {
        // Mobile Navigation Toggle
        const mobileToggle = document.getElementById("mobileToggle");
        const navLinks = document.getElementById("navLinks");
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener("click", () => {
                const isOpen = navLinks.classList.toggle("open");
                mobileToggle.setAttribute("aria-expanded", String(isOpen));
            });

            // Close nav when clicking link
            navLinks.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", () => {
                    navLinks.classList.remove("open");
                    mobileToggle.setAttribute("aria-expanded", "false");
                });
            });
        }

        // Cart Drawer Open/Close
        document.getElementById("cartToggleBtn")?.addEventListener("click", openCartDrawer);
        document.getElementById("closeCartBtn")?.addEventListener("click", closeCartDrawer);
        document.getElementById("cartBackdrop")?.addEventListener("click", closeCartDrawer);
        document.getElementById("footerCartLink")?.addEventListener("click", openCartDrawer);
        document.getElementById("continueShoppingBtn")?.addEventListener("click", closeCartDrawer);

        // Product Modal Close
        document.getElementById("closeProductModalBtn")?.addEventListener("click", closeProductModal);
        document.getElementById("productModalBackdrop")?.addEventListener("click", (e) => {
            if (e.target.id === "productModalBackdrop") closeProductModal();
        });

        // Modal Quantity Stepper
        document.getElementById("modalQtyMinus")?.addEventListener("click", () => {
            const input = document.getElementById("modalQtyInput");
            if (input && Number(input.value) > 1) {
                input.value = Number(input.value) - 1;
            }
        });

        document.getElementById("modalQtyPlus")?.addEventListener("click", () => {
            const input = document.getElementById("modalQtyInput");
            if (input && Number(input.value) < 10) {
                input.value = Number(input.value) + 1;
            }
        });

        // Modal Add to Cart
        document.getElementById("modalAddToCartBtn")?.addEventListener("click", () => {
            if (!currentModalProductId) return;
            const qty = Number(document.getElementById("modalQtyInput")?.value) || 1;
            addToCart(currentModalProductId, qty);
            closeProductModal();
        });

        // Modal Buy Now
        document.getElementById("modalBuyNowBtn")?.addEventListener("click", () => {
            if (!currentModalProductId) return;
            const qty = Number(document.getElementById("modalQtyInput")?.value) || 1;
            addToCart(currentModalProductId, qty);
            closeProductModal();
            openCheckoutModal();
        });

        // Modal Tabs (Story vs Specs)
        document.querySelectorAll(".modal-tab").forEach(tabBtn => {
            tabBtn.addEventListener("click", () => {
                document.querySelectorAll(".modal-tab").forEach(b => b.classList.remove("active"));
                document.querySelectorAll(".tab-pane-modal").forEach(p => p.classList.add("hidden"));

                tabBtn.classList.add("active");
                const target = document.getElementById(tabBtn.dataset.tab);
                target?.classList.remove("hidden");
            });
        });

        // Modal Contact Artisan
        document.getElementById("modalContactArtisanBtn")?.addEventListener("click", () => {
            if (!currentModalProductId) return;
            const product = products.find(p => p.id === currentModalProductId);
            if (!product) return;
            const subject = encodeURIComponent(`Inquiry for ${product.name}`);
            const body = encodeURIComponent(`Namaste ${product.artisan},\n\nI am interested in your craft "${product.name}" (${formatINR(product.price)}). Could you tell me more about its availability?\n\nThank you.`);
            window.location.href = `mailto:artisan@kalakriti.in?subject=${subject}&body=${body}`;
        });

        // Filter Controls
        const searchInput = document.getElementById("searchInput");
        const clearSearchBtn = document.getElementById("clearSearchBtn");
        const categoryFilter = document.getElementById("categoryFilter");
        const stateFilter = document.getElementById("stateFilter");
        const priceFilter = document.getElementById("priceFilter");
        const sortFilter = document.getElementById("sortFilter");
        const giTagOnly = document.getElementById("giTagOnly");
        const resetFiltersBtn = document.getElementById("resetFiltersBtn");
        const emptyResetBtn = document.getElementById("emptyResetBtn");

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                filters.search = e.target.value;
                clearSearchBtn?.classList.toggle("hidden", !e.target.value);
                renderProductsGrid();
            });
        }

        clearSearchBtn?.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            filters.search = "";
            clearSearchBtn.classList.add("hidden");
            renderProductsGrid();
        });

        categoryFilter?.addEventListener("change", (e) => {
            filters.category = e.target.value;
            syncCategoryPills(e.target.value);
            renderProductsGrid();
        });

        stateFilter?.addEventListener("change", (e) => {
            filters.state = e.target.value;
            renderProductsGrid();
        });

        priceFilter?.addEventListener("change", (e) => {
            filters.priceRange = e.target.value;
            renderProductsGrid();
        });

        sortFilter?.addEventListener("change", (e) => {
            filters.sortBy = e.target.value;
            renderProductsGrid();
        });

        giTagOnly?.addEventListener("change", (e) => {
            filters.giTagOnly = e.target.checked;
            renderProductsGrid();
        });

        function resetAllFilters() {
            filters.search = "";
            filters.category = "All";
            filters.state = "All";
            filters.priceRange = "All";
            filters.giTagOnly = false;
            filters.sortBy = "featured";

            if (searchInput) searchInput.value = "";
            if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
            if (categoryFilter) categoryFilter.value = "All";
            if (stateFilter) stateFilter.value = "All";
            if (priceFilter) priceFilter.value = "All";
            if (sortFilter) sortFilter.value = "featured";
            if (giTagOnly) giTagOnly.checked = false;

            syncCategoryPills("All");
            renderProductsGrid();
        }

        resetFiltersBtn?.addEventListener("click", resetAllFilters);
        emptyResetBtn?.addEventListener("click", resetAllFilters);

        // Category Quick Pills
        document.querySelectorAll(".pill-btn").forEach(pill => {
            pill.addEventListener("click", () => {
                const cat = pill.dataset.category;
                filters.category = cat;
                if (categoryFilter) categoryFilter.value = cat;
                syncCategoryPills(cat);
                renderProductsGrid();
            });
        });

        function syncCategoryPills(selectedCategory) {
            document.querySelectorAll(".pill-btn").forEach(pill => {
                pill.classList.toggle("active", pill.dataset.category === selectedCategory);
            });
        }

        // Category Cards in Showcase
        document.querySelectorAll(".category-card").forEach(card => {
            card.addEventListener("click", () => {
                const cat = card.dataset.category;
                filters.category = cat;
                if (categoryFilter) categoryFilter.value = cat;
                syncCategoryPills(cat);
                renderProductsGrid();
                document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
            });
        });

        // Quick Search Nav Button
        document.getElementById("openSearchBtn")?.addEventListener("click", () => {
            document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
            searchInput?.focus();
        });

        // Wishlist Toggle Nav Button
        document.getElementById("wishlistToggleBtn")?.addEventListener("click", () => {
            if (wishlist.size === 0) {
                showToast("Your wishlist is empty. Tap the heart on any craft card!", "info");
                return;
            }
            showToast(`You have ${wishlist.size} saved craft treasures in your wishlist.`, "info");
        });

        // Coupon Form
        document.getElementById("applyCouponBtn")?.addEventListener("click", () => {
            const code = document.getElementById("couponInput")?.value;
            applyCouponCode(code);
        });

        document.getElementById("removeCouponBtn")?.addEventListener("click", removeCouponCode);

        // Checkout Button & Modal
        document.getElementById("openCheckoutBtn")?.addEventListener("click", openCheckoutModal);
        document.getElementById("closeCheckoutModalBtn")?.addEventListener("click", closeCheckoutModal);
        document.getElementById("checkoutModalBackdrop")?.addEventListener("click", (e) => {
            if (e.target.id === "checkoutModalBackdrop") closeCheckoutModal();
        });

        document.getElementById("checkoutForm")?.addEventListener("submit", processCheckout);

        // Order Success Modal Close
        document.getElementById("continueShoppingSuccessBtn")?.addEventListener("click", () => {
            document.getElementById("orderSuccessModalBackdrop")?.classList.add("hidden");
            document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
        });

        document.getElementById("printReceiptBtn")?.addEventListener("click", () => {
            window.print();
        });

        // Artisan Registration Tabs & Form
        document.getElementById("tabRegisterBtn")?.addEventListener("click", () => switchStudioTab("register"));
        document.getElementById("tabStudioBtn")?.addEventListener("click", () => switchStudioTab("studio"));
        document.getElementById("studioNewCraftBtn")?.addEventListener("click", () => switchStudioTab("register"));
        document.getElementById("artisanRegistrationForm")?.addEventListener("submit", handleArtisanRegistration);

        // AI Story Generator
        document.getElementById("aiStoryForm")?.addEventListener("submit", generateAiCraftStory);
        document.getElementById("copyAiStoryBtn")?.addEventListener("click", copyAiGeneratedStory);

        // Event Delegation for Grid and Cart Buttons
        document.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-action]");
            if (!btn) return;

            const action = btn.dataset.action;
            const id = Number(btn.dataset.id);

            switch (action) {
                case "quick-view":
                    openProductModal(id);
                    break;
                case "add-cart":
                    addToCart(id, 1);
                    break;
                case "toggle-wishlist":
                    if (wishlist.has(id)) {
                        wishlist.delete(id);
                        btn.classList.remove("active");
                        btn.textContent = "🤍";
                        showToast("Removed from wishlist");
                    } else {
                        wishlist.add(id);
                        btn.classList.add("active");
                        btn.textContent = "❤️";
                        showToast("Saved to your wishlist! ❤️", "success");
                    }
                    saveWishlist();
                    updateWishlistBadge();
                    break;
                case "cart-plus":
                    updateCartItemQuantity(id, 1);
                    break;
                case "cart-minus":
                    updateCartItemQuantity(id, -1);
                    break;
                case "cart-remove":
                    removeCartItem(id);
                    break;
                case "delete-my-craft":
                    if (confirm("Are you sure you want to remove this craft listing from the marketplace?")) {
                        products = products.filter(p => p.id !== id);
                        cart = cart.filter(i => i.id !== id);
                        saveProducts();
                        saveCart();
                        renderProductsGrid();
                        renderMyStudioListings();
                        updateCartUI();
                        populateAiSelectOptions();
                        showToast("Craft listing removed");
                    }
                    break;
            }
        });

        // Cart Empty Explore Button
        document.addEventListener("click", (e) => {
            if (e.target.id === "emptyCartExploreBtn") {
                closeCartDrawer();
                document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    function updateWishlistBadge() {
        const badge = document.getElementById("wishlistCount");
        if (badge) badge.textContent = wishlist.size;
    }

    // Expose Global Helper for Spotlight & Footer Links
    window.filterByCategory = function (categoryName) {
        filters.category = categoryName;
        const select = document.getElementById("categoryFilter");
        if (select) select.value = categoryName;
        document.querySelectorAll(".pill-btn").forEach(p => {
            p.classList.toggle("active", p.dataset.category === categoryName);
        });
        renderProductsGrid();
        document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
    };

    window.filterByArtisan = function (artisanName) {
        filters.search = artisanName;
        const input = document.getElementById("searchInput");
        if (input) input.value = artisanName;
        document.getElementById("clearSearchBtn")?.classList.remove("hidden");
        renderProductsGrid();
        document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
    };

    /* ------------------------------------------------------------------------
       12. INITIALIZATION ON DOM READY
       ------------------------------------------------------------------------ */
    function init() {
        loadState();
        renderProductsGrid();
        updateCartUI();
        updateCouponUI();
        updateWishlistBadge();
        renderMyStudioListings();
        populateAiSelectOptions();
        setupEventListeners();

        console.log("🪷 KalaKriti Indian Artisan Marketplace initialized successfully!");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
