# 🪷 KalaKriti — Authentic Indian Artisan Marketplace

A complete, responsive, and interactive artisan marketplace website built with **HTML5, CSS3, and Vanilla JavaScript**.

KalaKriti directly bridges traditional Indian master craftspersons (weavers, potters, folk artists, and metal smiths) with buyers worldwide, ensuring fair wages, GI-tagged authenticity, and cultural preservation.

---

## How to Run the Website

You don't need to install any complex packages or backend databases! You have 3 easy ways to run the website:

### Method 1: Double-Click (Easiest — No Setup Needed!)
1. Open this project folder in your Windows File Explorer:
   `C:\Users\AASTHA\OneDrive\Desktop\artisan-marketplace`
2. Simply **double-click** `index.html`.
3. It will immediately open and run smoothly in your default web browser (Chrome, Edge, Firefox, Brave, Safari).

---

### Method 2: Python Local Server (Recommended for Hackathon Demo)
Open PowerShell or Command Prompt in this folder and run:
```bash
python -m http.server 3000
```
Then open your browser and go to:
**[http://localhost:3000](http://localhost:3000)**

---

### Method 3: Using NPM
If you prefer running via npm:
```bash
npm start
```
and open **[http://localhost:3000](http://localhost:3000)**.

---

### Method 4: VS Code "Live Server" Extension
If using VS Code:
1. Right-click on `index.html`.
2. Click **"Open with Live Server"**.

---

## Features 

### 1. 🏡 Indian Handicraft Themed Homepage
- **Indian Cultural Aesthetics**: Warm terracotta (`#A0391D`), royal indigo (`#162C4E`), haldi/marigold gold (`#D48928`), and raw silk ivory (`#FAF6F0`).
- **Hero Banner**: Highlighting GI-tagged Indian crafts, direct artisan earnings (85%+ payout pledge), and live impact metrics.
- **Trust Pillars**: Zero Middlemen, Certified GI Tag Authenticity, 100% Eco-Friendly Materials, and All-India Safe Delivery.
- **Craft Traditions Showcase**: Explore Pottery & Ceramics, Handloom & Sarees, Folk Art & Paintings, Brass & Metalcraft, Wooden Toys, and Leather Mojaris.

### 2. 🔍 Real-Time Search & Advanced Category Filters
- **Live Search**: Instant matching by craft name, artisan, technique, state, or material (e.g., search *"Pottery"*, *"Silk"*, *"Brass"*, *"Jaipur"*, *"Ansari"*).
- **Category Pills & Dropdowns**: Filter by craft type with 1 click.
- **State/Region Filter**: Explore crafts from Rajasthan, Uttar Pradesh, Bihar, Karnataka, Kashmir, Gujarat, Chhattisgarh, etc.
- **Price Range Filter**: Under ₹1,000 | ₹1,000 - ₹2,500 | ₹2,500 - ₹5,000 | Above ₹5,000.
- **GI Tag Toggle**: Filter only Geographical Indication certified Indian crafts.
- **Sorting**: Featured & Popular, Price: Low to High, Price: High to Low, Highest Customer Rating, and A–Z.
- **Active Filter Counter**: Shows real-time matching count and a 1-click "Reset all filters" button.

### 3. 🛍️ Interactive Slide-Out Shopping Cart
- **Slide-Out Drawer**: Smooth slide-in cart drawer from the right side.
- **Item Stepper**: Increase (`+`), decrease (`-`), or remove items (`✕`) with live total recalculations.
- **Free Delivery Progress Bar**: Encourages buyers to unlock free shipping on orders over ₹1,499.
- **Promo Coupon Engine**:
  - `HACKATHON10` — 10% instant discount
  - `DESI20` — 20% festive craft discount
  - `ARTISAN500` — Flat ₹500 off (orders over ₹2,000)
- **Persistent Storage**: Cart items and coupons are saved in `localStorage`, so refreshing the page never loses your items!

### 4. 💳 Multi-Step Checkout & Order Confirmation Receipt
- **Shipping Address Form**: Collects customer name, mobile, address, city, state, and 6-digit PIN code.
- **Payment Method Selector**: Instant UPI (Google Pay, PhonePe, Paytm), Debit/Credit Cards, or Cash on Delivery (COD).
- **Simulated Order ID & Receipt**:
  - Unique order tracking ID (e.g. `KALA-2026-8819`).
  - Estimated delivery timeframe.
  - Printable receipt layout (`window.print()`).
  - Artisan livelihood impact note.

### 5. 👁️ Product Details & Heritage Modal
- **High-Resolution Visuals**: Zoomable craft image, GI tag emblem, and discount percentage badge.
- **Dual Tab View**:
  - *Craft Heritage Story*: Deep dive into how the craft is made (e.g., how Jaipur Blue Pottery uses quartz instead of clay, or how Dhokra uses 4,000-year-old lost-wax casting).
  - *Specifications & Care*: Material, dimensions, GI tag status, and care guidelines.
- **Meet the Maker Card**: Artisan name, location, and a direct "Message Artisan" button.
- **Quick Buy Actions**: Quantity stepper, "Add to Cart", and "⚡ Buy Now" direct checkout.

### 6. ✍️ Artisan Registration & Digital Studio
- **Artisan Onboarding Form**:
  - Artisan Name, Studio/Gharana Name, State, City, Contact WhatsApp, and Years of Craft Heritage.
  - Submit your first craft item with title, category, price, material, and story.
- **Instant Live Publishing**: Submitting the form immediately publishes your craft at the top of the live marketplace!
- **Digital Artisan ID Card**: Generates a verified KalaKriti Artisan ID card (`ART-2026-XXXX`).
- **Artisan Dashboard / Studio**: Track listed crafts, profile visits, and delete or manage items.

### 7. 🤖 AI Craft Story Studio
- An in-browser copilot tailored for rural artisans with limited copywriting skills.
- Choose any product and storytelling tone:
  - Royal Heritage & Tradition
  - Warm, Emotional & Maker Story
  - Festive & Gifting Special
  - Global Collector & Modern Elegance
- Generates:
  - Engaging e-commerce product copy.
  - Instagram captions with hashtags (`#VocalForLocal`, `#MakeInIndia`, `#IndianHandicrafts`).
- 1-Click "Copy to Clipboard" with toast alert.

---

## 🎨 Design System & Colors

| Color Token | Hex Code | Usage |
|---|---|---|
| **Terracotta** | `#A0391D` | Primary action buttons, badges, accents |
| **Royal Indigo** | `#162C4E` | Headers, announcements, badges |
| **Haldi / Marigold Gold** | `#D48928` | Star ratings, discount highlights, GI badges |
| **Mehndi Green** | `#2A5A43` | Free shipping, sustainability, verified marks |
| **Raw Silk Ivory** | `#FAF6F0` | Clean, warm background |
| **Surface White** | `#FFFFFF` | Cards, modals, drawers |

---

## 📁 File Structure

```text
artisan-marketplace/
│
├── index.html          # Semantic HTML5 markup with all sections & modals
├── style.css           # Pure CSS3 stylesheet (responsive grid & flexbox)
├── app.js              # Vanilla JavaScript application logic & localStorage
├── package.json        # NPM scripts for local python server
├── README.md           # Project documentation and hackathon guide
│
└── artisan-marketplace/
    └── frontend/       # Mirrored copy ensuring both path executions work
        ├── index.html
        ├── style.css
        └── app.js
