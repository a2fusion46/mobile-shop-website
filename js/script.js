/**
 * ==========================================================================
 * NEXUS MOBILE HUB - ENHANCED APPLICATION LOGIC
 * Dynamic Catalogs, Live Search/Sort, Trade-In Calculator, Chat Widget
 * ==========================================================================
 */

let currentBrandFilter = "all";
let currentSearchQuery = "";
let currentSortOrder = "featured";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Centralized Business Configuration Init
  initBusinessDetails();

  // 2. Setup Hero Interactive Color Switcher
  setupHeroColorSwitcher();

  // 3. Render Dynamic Components
  renderTrustPillars();
  renderSmartphones();
  renderDeals();
  renderAccessories("all");
  renderServices();
  renderWhyChooseUs();
  renderAboutStats();
  renderTestimonials();
  renderFAQs();

  // 4. Setup Interactive Features
  setupNavigation();
  setupFilterToolbar();
  setupExchangeCalculator();
  setupDealCountdown();
  setupAccessoryFilters();
  setupWhatsAppChatPopover();
  setupFormsAndModals();

  // 5. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Format currency numbers into locale format (e.g. 154999 -> ₹1,54,999)
 */
function formatCurrency(amount) {
  const currencySymbol = (CONFIG && CONFIG.shop && CONFIG.shop.currency) ? CONFIG.shop.currency : "₹";
  return currencySymbol + Number(amount).toLocaleString("en-IN");
}

/**
 * Generate a WhatsApp URL with prefilled URL-encoded message
 */
function getWhatsAppUrl(messageText) {
  const phone = (CONFIG && CONFIG.shop && CONFIG.shop.whatsappNumber) ? CONFIG.shop.whatsappNumber : "919876543210";
  return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Populate static text and links with centralized CONFIG values
 */
function initBusinessDetails() {
  if (!CONFIG || !CONFIG.shop) return;
  const s = CONFIG.shop;

  document.querySelectorAll(".shop-name").forEach(el => el.textContent = s.name);
  document.querySelectorAll(".shop-tagline").forEach(el => el.textContent = s.tagline);
  document.querySelectorAll(".shop-address").forEach(el => el.textContent = s.address);
  document.querySelectorAll(".shop-address-short").forEach(el => el.textContent = s.address.split(",")[0] + ", " + s.address.split(",")[1]);
  document.querySelectorAll(".shop-phone").forEach(el => el.textContent = s.phoneDisplay);
  document.querySelectorAll(".shop-whatsapp").forEach(el => el.textContent = s.whatsappDisplay);
  document.querySelectorAll(".shop-email").forEach(el => el.textContent = s.email);
  document.querySelectorAll(".shop-hours").forEach(el => el.textContent = s.openingHours);

  // Update Call Links
  document.querySelectorAll(".shop-phone-link").forEach(el => el.href = `tel:${s.phoneTel}`);

  // Update Maps Links
  document.querySelectorAll(".shop-maps-link").forEach(el => el.href = s.googleMapsUrl);

  // Update Social Links
  document.querySelectorAll(".shop-instagram-link").forEach(el => el.href = s.instagramUrl);
  document.querySelectorAll(".shop-facebook-link").forEach(el => el.href = s.facebookUrl);
  document.querySelectorAll(".shop-youtube-link").forEach(el => el.href = s.youtubeUrl);

  // Setup Global WhatsApp Buttons
  const generalMsg = "Hello, I want to know the best price for a smartphone.";
  document.querySelectorAll(".whatsapp-direct-btn").forEach(el => {
    el.href = getWhatsAppUrl(generalMsg);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  const priceMsg = "Hello, I'm looking for the best price on a smartphone. Please share available models and offers.";
  document.querySelectorAll(".whatsapp-price-btn").forEach(el => {
    el.href = getWhatsAppUrl(priceMsg);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

/**
 * Setup Hero Interactive Color Switcher
 */
function setupHeroColorSwitcher() {
  if (!CONFIG.heroFeatured || !CONFIG.heroFeatured.colors) return;
  const feat = CONFIG.heroFeatured;
  const dotsContainer = document.getElementById("heroColorDots");
  const heroImg = document.getElementById("heroDeviceImg");
  const colorLabel = document.getElementById("heroColorLabel");
  const titleEl = document.getElementById("heroDeviceTitle");
  const emiEl = document.getElementById("heroDeviceEmi");
  const priceEl = document.getElementById("heroDevicePrice");

  if (titleEl) titleEl.textContent = feat.title;
  if (emiEl) emiEl.textContent = feat.emiText;
  if (priceEl) priceEl.textContent = formatCurrency(feat.price);

  if (!dotsContainer) return;
  dotsContainer.innerHTML = feat.colors.map((c, i) => `
    <span class="color-swatch-dot ${i === 0 ? 'active' : ''}" 
          style="background-color: ${c.hex};" 
          title="${c.name}"
          data-index="${i}"></span>
  `).join("");

  dotsContainer.querySelectorAll(".color-swatch-dot").forEach(dot => {
    dot.addEventListener("click", (e) => {
      dotsContainer.querySelectorAll(".color-swatch-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      const chosen = feat.colors[idx];
      if (colorLabel) colorLabel.textContent = chosen.name;
      if (heroImg) {
        heroImg.style.opacity = "0.4";
        setTimeout(() => {
          heroImg.src = chosen.img;
          heroImg.style.opacity = "1";
        }, 150);
      }
    });
  });
}

/**
 * Render 4 Trust Cards
 */
function renderTrustPillars() {
  const container = document.getElementById("trustGridContainer");
  if (!container || !CONFIG.trustPillars) return;

  container.innerHTML = CONFIG.trustPillars.map(item => `
    <div class="trust-card">
      <div class="trust-card-icon">
        <i data-lucide="${item.icon}"></i>
      </div>
      <h3 class="trust-card-title">${item.title}</h3>
      <p class="trust-card-desc">${item.desc}</p>
    </div>
  `).join("");
}

/**
 * Setup Brand Chips, Search Input & Sort Selector
 */
function setupFilterToolbar() {
  const chips = document.querySelectorAll(".brand-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentBrandFilter = chip.getAttribute("data-filter");
      renderSmartphones();
    });
  });

  const searchInput = document.getElementById("phoneSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderSmartphones();
    });
  }

  const sortSelect = document.getElementById("phoneSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSortOrder = e.target.value;
      renderSmartphones();
    });
  }
}

/**
 * Render Smartphones with live Filter, Search and Sort
 */
function renderSmartphones() {
  const container = document.getElementById("smartphonesGrid");
  if (!container || !CONFIG.smartphones) return;

  let list = [...CONFIG.smartphones];

  // 1. Filter by Brand
  if (currentBrandFilter !== "all") {
    list = list.filter(p => p.brandKey.toLowerCase() === currentBrandFilter.toLowerCase());
  }

  // 2. Filter by Search Query
  if (currentSearchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(currentSearchQuery) ||
      p.brand.toLowerCase().includes(currentSearchQuery) ||
      p.processor.toLowerCase().includes(currentSearchQuery) ||
      p.camera.toLowerCase().includes(currentSearchQuery)
    );
  }

  // 3. Sort list
  if (currentSortOrder === "price-low") {
    list.sort((a, b) => a.startingPrice - b.startingPrice);
  } else if (currentSortOrder === "price-high") {
    list.sort((a, b) => b.startingPrice - a.startingPrice);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i data-lucide="search-x" style="width: 48px; height: 48px; color: #94a3b8; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #334155; margin-bottom: 0.5rem;">No phones match your search</h3>
        <p style="color: #64748b; font-size: 0.95rem;">Try clearing search keywords or choosing another brand category.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = list.map(phone => {
    const waMsg = `Hello, I'm interested in ${phone.name}. Please share the best price and availability.`;
    const waUrl = getWhatsAppUrl(waMsg);

    const swatches = phone.colors && phone.colors.length 
      ? `<div class="card-color-swatches">${phone.colors.map(c => `<span class="card-swatch-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`).join("")}</div>`
      : "";

    return `
      <div class="product-card">
        <span class="product-badge ${phone.badgeColor}">${phone.badge}</span>
        <div class="product-image-wrap">
          <img src="${phone.image}" alt="${phone.name}" loading="lazy">
          ${swatches}
        </div>
        <div class="product-info">
          <span class="product-brand">${phone.brand}</span>
          <h3 class="product-name">${phone.name}</h3>
          
          <div class="product-price-row">
            <div>
              <span style="font-size: 0.8rem; color: #64748b; font-weight: 600; display: block;">Starting price</span>
              <span class="product-price">${formatCurrency(phone.startingPrice)}</span>
            </div>
            ${phone.emi ? `<span class="product-emi-tag">EMI: ${phone.emi}</span>` : ""}
          </div>

          <div class="product-specs">
            <div class="spec-item">
              <i data-lucide="layers"></i>
              <span>${phone.ramStorage}</span>
            </div>
            <div class="spec-item">
              <i data-lucide="tv"></i>
              <span>${phone.display}</span>
            </div>
            <div class="spec-item">
              <i data-lucide="camera"></i>
              <span>${phone.camera}</span>
            </div>
            <div class="spec-item">
              <i data-lucide="cpu"></i>
              <span>${phone.processor}</span>
            </div>
          </div>

          <div class="product-actions">
            <button class="btn btn-secondary btn-sm view-details-btn" data-id="${phone.id}">
              <i data-lucide="info" class="btn-icon"></i>
              <span>View Details</span>
            </button>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              <i data-lucide="message-circle" class="btn-icon"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const phoneId = e.currentTarget.getAttribute("data-id");
      openProductModal(phoneId);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Setup Smart Exchange Trade-In Calculator
 */
function setupExchangeCalculator() {
  const brandSelect = document.getElementById("calcBrandSelect");
  const modelSelect = document.getElementById("calcModelSelect");
  const condSelect = document.getElementById("calcConditionSelect");
  const valueDisplay = document.getElementById("calcEstimatedValue");
  const claimBtn = document.getElementById("calcClaimBtn");

  if (!brandSelect || !modelSelect || !CONFIG.exchangeCalculator) return;

  const brands = CONFIG.exchangeCalculator.brands;
  const conditions = CONFIG.exchangeCalculator.conditions;
  const bonus = CONFIG.exchangeCalculator.bonusValue || 5000;

  // When brand changes, populate model dropdown
  brandSelect.addEventListener("change", () => {
    const selectedBrand = brandSelect.value;
    const brandData = brands.find(b => b.name === selectedBrand);

    if (brandData && brandData.models) {
      modelSelect.disabled = false;
      modelSelect.innerHTML = `<option value="" disabled selected>Select Model</option>` + 
        brandData.models.map(m => `<option value="${m.name}" data-base="${m.baseVal}">${m.name}</option>`).join("");
    } else {
      modelSelect.disabled = true;
      modelSelect.innerHTML = `<option value="" disabled selected>Choose Brand First</option>`;
    }
    calculateExchange();
  });

  modelSelect.addEventListener("change", calculateExchange);
  condSelect.addEventListener("change", calculateExchange);

  function calculateExchange() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const selectedOpt = modelSelect.options[modelSelect.selectedIndex];
    const baseVal = selectedOpt ? parseFloat(selectedOpt.getAttribute("data-base")) : 0;
    const condKey = condSelect.value;
    const condObj = conditions.find(c => c.id === condKey) || { factor: 1.0, label: "Good" };

    if (!baseVal || isNaN(baseVal)) {
      if (valueDisplay) valueDisplay.textContent = "₹0";
      if (claimBtn) claimBtn.href = getWhatsAppUrl("Hello, I want to calculate exchange valuation for my old smartphone.");
      return;
    }

    const calculatedVal = Math.round(baseVal * condObj.factor + bonus);
    if (valueDisplay) valueDisplay.textContent = formatCurrency(calculatedVal);

    const waMsg = `*Exchange Offer Claim*\n\n📱 Current Phone: ${brand} ${model}\n🛠 Condition: ${condObj.label}\n💰 Estimated Trade-in Value: ${formatCurrency(calculatedVal)} (Includes ₹5,000 Bonus)\n\nPlease confirm exchange process and new phone availability.`;
    if (claimBtn) claimBtn.href = getWhatsAppUrl(waMsg);
  }
}

/**
 * Setup Flash Deals Countdown Timer
 */
function setupDealCountdown() {
  const timerEl = document.getElementById("dealCountdown");
  if (!timerEl) return;

  // Set countdown target 8 hours ahead
  let remainingSeconds = 8 * 3600 + 42 * 60 + 15;

  setInterval(() => {
    if (remainingSeconds > 0) remainingSeconds--;
    const h = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(remainingSeconds % 60).padStart(2, '0');
    timerEl.textContent = `${h}h : ${m}m : ${s}s`;
  }, 1000);
}

/**
 * Render Deals & Offers
 */
function renderDeals() {
  const container = document.getElementById("dealsGrid");
  if (!container || !CONFIG.deals) return;

  container.innerHTML = CONFIG.deals.map(deal => {
    const waMsg = `Hello, I want to inquire about the ${deal.title} (${deal.tag}) offer. Please share details.`;
    const waUrl = getWhatsAppUrl(waMsg);

    return `
      <div class="deal-card">
        <span class="deal-badge-pill">${deal.tag}</span>
        <div class="deal-icon-wrap">
          <i data-lucide="${deal.icon}"></i>
        </div>
        <h3 class="deal-title">${deal.title}</h3>
        <p class="deal-desc">${deal.desc}</p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-sm deal-btn">
          <i data-lucide="arrow-right" class="btn-icon"></i>
          <span>${deal.cta}</span>
        </a>
      </div>
    `;
  }).join("");
}

/**
 * Setup Accessories Category Filters & Rendering
 */
function setupAccessoryFilters() {
  const buttons = document.querySelectorAll(".accessory-cat-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      renderAccessories(cat);
    });
  });
}

function renderAccessories(category = "all") {
  const container = document.getElementById("accessoriesGrid");
  if (!container || !CONFIG.accessories) return;

  const filtered = category === "all"
    ? CONFIG.accessories
    : CONFIG.accessories.filter(a => a.categoryKey === category || a.category.toLowerCase().includes(category.toLowerCase()));

  container.innerHTML = filtered.map(item => {
    const waMsg = `Hello, I'm interested in buying ${item.name} priced at ${formatCurrency(item.price)}. Is it in stock?`;
    const waUrl = getWhatsAppUrl(waMsg);

    return `
      <div class="accessory-card">
        <div class="accessory-image-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="accessory-body">
          <span class="accessory-category">${item.category}</span>
          <h3 class="accessory-name">${item.name}</h3>
          <p class="accessory-desc">${item.desc}</p>
          <div class="accessory-footer">
            <span class="accessory-price">${formatCurrency(item.price)}</span>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              <i data-lucide="message-circle" class="btn-icon"></i>
              <span>Enquire Now</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Mobile Services & Repair Cards
 */
function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container || !CONFIG.services) return;

  container.innerHTML = CONFIG.services.map(srv => `
    <div class="service-card">
      <div class="service-icon-box">
        <i data-lucide="${srv.icon}"></i>
      </div>
      <h3 class="service-title">${srv.title}</h3>
      <p class="service-desc">${srv.shortDesc}</p>
      <div class="service-meta">
        <span><i data-lucide="clock" style="width: 14px; height: 14px; display: inline-block; vertical-align: -2px;"></i> ${srv.turnaround}</span>
        <span><i data-lucide="shield" style="width: 14px; height: 14px; display: inline-block; vertical-align: -2px;"></i> ${srv.warranty}</span>
      </div>
      <button class="btn btn-primary btn-sm service-btn book-specific-service-btn" data-service="${srv.title}">
        <i data-lucide="calendar" class="btn-icon"></i>
        <span>Book ${srv.title}</span>
      </button>
    </div>
  `).join("");

  container.querySelectorAll(".book-specific-service-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const srvName = e.currentTarget.getAttribute("data-service");
      openServiceModal(srvName);
    });
  });
}

/**
 * Render Why Choose Us
 */
function renderWhyChooseUs() {
  const container = document.getElementById("whyChooseUsGrid");
  if (!container || !CONFIG.whyChooseUs) return;

  container.innerHTML = CONFIG.whyChooseUs.map(item => `
    <div class="why-card">
      <div class="why-icon">
        <i data-lucide="${item.icon}"></i>
      </div>
      <h3 class="why-title">${item.title}</h3>
      <p class="why-desc">${item.desc}</p>
    </div>
  `).join("");
}

/**
 * Render Stats Counters in About Us
 */
function renderAboutStats() {
  const container = document.getElementById("aboutStatsGrid");
  if (!container || !CONFIG.stats) return;

  container.innerHTML = CONFIG.stats.map(st => `
    <div class="stat-box">
      <div class="stat-value">${st.value}</div>
      <div class="stat-label">${st.label}</div>
    </div>
  `).join("");
}

/**
 * Render Customer Testimonials
 */
function renderTestimonials() {
  const container = document.getElementById("reviewsGrid");
  if (!container || !CONFIG.testimonials) return;

  container.innerHTML = CONFIG.testimonials.map(t => {
    const stars = Array(t.rating).fill('<i data-lucide="star" style="width: 16px; height: 16px; fill: #f59e0b; color: #f59e0b;"></i>').join("");

    return `
      <div class="review-card">
        <div class="review-stars">
          ${stars}
        </div>
        <p class="review-comment">"${t.comment}"</p>
        <div class="review-author">
          <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy">
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Render 10 FAQ Accordion Items
 */
function renderFAQs() {
  const container = document.getElementById("faqAccordion");
  if (!container || !CONFIG.faqs) return;

  container.innerHTML = CONFIG.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question" type="button">
        <span>${faq.q}</span>
        <i data-lucide="chevron-down" class="faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const wasActive = item.classList.contains("active");

      container.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
      });

      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });
}

/**
 * Setup Sticky Navbar, Scrollspy, and Mobile Drawer
 */
function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  function openDrawer() {
    mobileDrawer.classList.add("active");
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("active");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  document.querySelectorAll(".drawer-nav-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/**
 * Setup Floating WhatsApp Agent Chat Popover
 */
function setupWhatsAppChatPopover() {
  const toggleBtn = document.getElementById("floatingWhatsappToggleBtn");
  const popover = document.getElementById("whatsappChatPopover");
  const closeBtn = document.getElementById("closeChatPopoverBtn");

  if (toggleBtn && popover) {
    toggleBtn.addEventListener("click", () => {
      popover.classList.toggle("active");
    });
  }

  if (closeBtn && popover) {
    closeBtn.addEventListener("click", () => {
      popover.classList.remove("active");
    });
  }

  // Quick Action Chips
  document.querySelectorAll(".quick-action-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const msg = chip.getAttribute("data-msg");
      window.open(getWhatsAppUrl(msg), "_blank");
      if (popover) popover.classList.remove("active");
    });
  });
}

/**
 * Open Product Quick Spec Modal
 */
function openProductModal(phoneId) {
  const phone = CONFIG.smartphones.find(p => p.id === phoneId);
  if (!phone) return;

  const modal = document.getElementById("productModal");
  const content = document.getElementById("productModalContent");
  const waMsg = `Hello, I'm interested in purchasing the ${phone.name} starting at ${formatCurrency(phone.startingPrice)}. Please provide today's best deal and available color options.`;
  const waUrl = getWhatsAppUrl(waMsg);

  const colorsList = phone.colors ? phone.colors.map(c => c.name).join(", ") : "All standard colors";

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 2.25rem; align-items: center;">
      <div style="background: radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%); border-radius: 18px; padding: 2rem; display: flex; align-items: center; justify-content: center;">
        <img src="${phone.image}" alt="${phone.name}" style="max-height: 290px; object-fit: contain;">
      </div>
      <div>
        <span class="product-badge ${phone.badgeColor}" style="position: static; display: inline-block; margin-bottom: 0.5rem;">${phone.badge}</span>
        <div style="font-size: 0.85rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.08em;">${phone.brand}</div>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: #090d16; margin-bottom: 0.5rem;">${phone.name}</h2>
        
        <div style="font-size: 1.55rem; font-weight: 900; color: #090d16; margin-bottom: 1.25rem;">
          ${formatCurrency(phone.startingPrice)}
          <span style="font-size: 0.825rem; font-weight: 600; color: #64748b;">(Starting price)</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.925rem; color: #334155; margin-bottom: 1.75rem; background: #f8fafc; padding: 1rem; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div><strong>Display:</strong> ${phone.display}</div>
          <div><strong>Chipset:</strong> ${phone.processor}</div>
          <div><strong>Camera:</strong> ${phone.camera}</div>
          <div><strong>Battery:</strong> ${phone.battery}</div>
          <div><strong>Configuration:</strong> ${phone.ramStorage}</div>
          <div><strong>Color Choices:</strong> ${colorsList}</div>
        </div>

        <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1;">
            <i data-lucide="message-circle" class="btn-icon"></i>
            <span>Enquire on WhatsApp</span>
          </a>
          <a href="tel:${CONFIG.shop.phoneTel}" class="btn btn-secondary">
            <i data-lucide="phone" class="btn-icon"></i>
            <span>Call Store</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Open Service Booking Modal
 */
function openServiceModal(serviceName = "") {
  const modal = document.getElementById("serviceModal");
  const select = document.getElementById("serviceTypeSelect");
  
  if (serviceName && select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === serviceName || select.options[i].text.includes(serviceName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * Toast Notification System
 */
function showToast(message, duration = 4000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="check-circle" style="width: 20px; height: 20px; color: #25d366;"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/**
 * Setup Modals, Forms & Interaction Listeners
 */
function setupFormsAndModals() {
  const productModal = document.getElementById("productModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      productModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        productModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  const serviceModal = document.getElementById("serviceModal");
  const serviceModalCloseBtn = document.getElementById("serviceModalCloseBtn");
  if (serviceModalCloseBtn) {
    serviceModalCloseBtn.addEventListener("click", () => {
      serviceModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  if (serviceModal) {
    serviceModal.addEventListener("click", (e) => {
      if (e.target === serviceModal) {
        serviceModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  const globalServiceBtn = document.getElementById("bookServiceGlobalBtn");
  if (globalServiceBtn) {
    globalServiceBtn.addEventListener("click", () => openServiceModal());
  }

  const getBestDealBtn = document.getElementById("getBestDealBtn");
  if (getBestDealBtn) {
    getBestDealBtn.addEventListener("click", () => {
      const waMsg = "Hello, I want to know today's best deal and exclusive bundle discounts on smartphones.";
      window.open(getWhatsAppUrl(waMsg), "_blank");
    });
  }

  // Handle Enquiry Form Submit
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("formName").value.trim();
      const phone = document.getElementById("formPhone").value.trim();
      const email = document.getElementById("formEmail").value.trim();
      const interest = document.getElementById("formInterest").value;
      const message = document.getElementById("formMessage").value.trim();

      if (!name || !phone || !interest) {
        showToast("Please fill in all required fields marked with *");
        return;
      }

      let waText = `*New Customer Enquiry*\n\n`;
      waText += `👤 Name: ${name}\n`;
      waText += `📞 Phone: ${phone}\n`;
      if (email) waText += `✉ Email: ${email}\n`;
      waText += `🎯 Interested in: ${interest}\n`;
      if (message) waText += `💬 Message: ${message}\n`;

      showToast("Enquiry submitted successfully! Connecting to WhatsApp...");
      
      setTimeout(() => {
        window.open(getWhatsAppUrl(waText), "_blank");
        enquiryForm.reset();
      }, 1000);
    });
  }

  // Handle Service Booking Form Submit
  const serviceBookingForm = document.getElementById("serviceBookingForm");
  if (serviceBookingForm) {
    serviceBookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("serviceCustomerName").value.trim();
      const phone = document.getElementById("servicePhone").value.trim();
      const model = document.getElementById("servicePhoneModel").value.trim();
      const serviceType = document.getElementById("serviceTypeSelect").value;
      const notes = document.getElementById("serviceNotes").value.trim();

      if (!name || !phone || !model || !serviceType) {
        showToast("Please fill in all required service details.");
        return;
      }

      let waText = `*Mobile Repair Service Booking*\n\n`;
      waText += `👤 Customer: ${name}\n`;
      waText += `📞 Contact: ${phone}\n`;
      waText += `📱 Device Model: ${model}\n`;
      waText += `🛠 Service: ${serviceType}\n`;
      if (notes) waText += `📝 Symptoms / Notes: ${notes}\n`;

      showToast("Service request created! Connecting to WhatsApp...");
      
      setTimeout(() => {
        window.open(getWhatsAppUrl(waText), "_blank");
        serviceModal.classList.remove("active");
        document.body.style.overflow = "";
        serviceBookingForm.reset();
      }, 1000);
    });
  }

  // Legal Modal triggers
  const privacyLink = document.getElementById("privacyPolicyLink");
  if (privacyLink) {
    privacyLink.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Nexus Mobile Hub strictly respects customer privacy. We never share customer data.");
    });
  }
  const termsLink = document.getElementById("termsLink");
  if (termsLink) {
    termsLink.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("All products covered under standard manufacturer warranty terms.");
    });
  }
}
