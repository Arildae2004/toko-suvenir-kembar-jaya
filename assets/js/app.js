/**
 * Logika Interaktif Website PUSAT OLEH - OLEH NTT "KEMBAR JAYA"
 * Ende, Flores, Nusa Tenggara Timur
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // State
  let currentCategory = 'all';
  let searchQuery = '';

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productsCount = document.getElementById('products-count');
  const noResults = document.getElementById('no-results');

  // Modal Elements
  const productModal = document.getElementById('product-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-content');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalWaBtn = document.getElementById('modal-wa-btn');

  // Mobile Menu Elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Toast Element
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  // Back to top
  const backToTopBtn = document.getElementById('back-to-top');

  // 1. Logika Jam Operasional & Status Buka Toko (WITA = UTC+8)
  function updateStoreStatus() {
    // Buat objek waktu sesuai zona WITA (UTC+8)
    const now = new Date();
    // Offset UTC saat ini dalam milidetik
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    // WITA adalah UTC + 8 jam
    const witaTime = new Date(utcTime + (3600000 * 8));
    
    const hours = witaTime.getHours();
    const minutes = witaTime.getMinutes();
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const timeString = `${formattedHours}:${formattedMinutes} WITA`;

    // Toko buka pukul 08:00 s/d 20:00 WITA setiap hari
    const isOpen = (hours >= SHOP_INFO.openingHourWita && hours < SHOP_INFO.closingHourWita);

    const statusBadgeEl = document.getElementById('store-status-badge');
    const statusTextEl = document.getElementById('store-status-text');
    const clockTextEl = document.getElementById('wita-clock-text');

    if (clockTextEl) {
      clockTextEl.textContent = timeString;
    }

    if (statusBadgeEl && statusTextEl) {
      if (isOpen) {
        statusBadgeEl.className = 'w-2.5 h-2.5 rounded-full status-open';
        statusTextEl.innerHTML = `<span class="text-emerald-700 font-bold">BUKA SEKARANG</span> <span class="text-stone-500 font-normal hidden sm:inline">• Tutup pukul 20.00 WITA</span>`;
      } else {
        statusBadgeEl.className = 'w-2.5 h-2.5 rounded-full status-closed';
        statusTextEl.innerHTML = `<span class="text-red-700 font-bold">TUTUP SEMENTARA</span> <span class="text-stone-500 font-normal hidden sm:inline">• Buka kembali pukul 08.00 WITA</span>`;
      }
    }
  }

  // Jalankan pengecekan status awal dan interval per 30 detik
  updateStoreStatus();
  setInterval(updateStoreStatus, 30000);

  // 2. Fungsi Generator URL WhatsApp Pemesanan
  function generateWaOrderUrl(productName, price) {
    const text = `Halo Toko Kembar Jaya Ende, saya melihat di website dan ingin menanyakan/memesan produk:\n\n*${productName}*\n(${price})\n\nApakah produk ini tersedia saat ini? Terima kasih!`;
    return `https://wa.me/${SHOP_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  }

  // 3. Render Produk ke Grid
  function renderProducts() {
    if (!productsGrid) return;

    // Filter berdasarkan kategori dan query pencarian
    const filtered = PRODUCTS_DATA.filter(p => {
      const matchCategory = (currentCategory === 'all' || p.category === currentCategory);
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        p.name.toLowerCase().includes(query) || 
        p.shortDesc.toLowerCase().includes(query) || 
        p.categoryLabel.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });

    // Update counter
    if (productsCount) {
      productsCount.textContent = `${filtered.length} produk ditampilkan`;
    }

    // Toggle tampilan data kosong
    if (filtered.length === 0) {
      productsGrid.innerHTML = '';
      if (noResults) noResults.classList.remove('hidden');
      return;
    } else {
      if (noResults) noResults.classList.add('hidden');
    }

    // Generate HTML kartu produk
    productsGrid.innerHTML = filtered.map(product => {
      const waUrl = generateWaOrderUrl(product.name, product.priceDisplay);

      return `
        <article class="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group card-hover-effect">
          <!-- Thumbnail Gambar -->
          <div class="relative aspect-4/3 overflow-hidden bg-stone-100 cursor-pointer group-hover:opacity-95" onclick="openProductModal('${product.id}')">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              loading="lazy"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Badge Kategori & Sorotan -->
            <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full text-white ${product.badgeColor} shadow-sm backdrop-blur-sm">
                ${product.badge}
              </span>
            </div>
            <div class="absolute top-3 right-3">
              <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-black/60 text-stone-100 backdrop-blur-md">
                ${product.categoryLabel}
              </span>
            </div>
            <!-- Overlay Preview -->
            <div class="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="px-3.5 py-1.5 rounded-full bg-white/90 text-stone-900 font-semibold text-xs shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lihat Detail
              </span>
            </div>
          </div>

          <!-- Konten Informasi Produk -->
          <div class="p-5 flex flex-col flex-1">
            <h3 class="font-bold text-stone-900 text-lg leading-snug group-hover:text-amber-800 transition-colors mb-1.5 cursor-pointer" onclick="openProductModal('${product.id}')">
              ${product.name}
            </h3>
            <p class="text-stone-600 text-xs line-clamp-2 leading-relaxed mb-4 flex-1">
              ${product.shortDesc}
            </p>

            <!-- Estimasi Harga -->
            <div class="pt-3 border-t border-stone-100 mb-4">
              <span class="text-[11px] font-medium text-stone-400 block uppercase tracking-wider">Estimasi Harga</span>
              <div class="text-base font-bold text-amber-900">${product.priceDisplay}</div>
            </div>

            <!-- Tombol Aksi -->
            <div class="grid grid-cols-2 gap-2 mt-auto">
              <button 
                type="button" 
                onclick="openProductModal('${product.id}')"
                class="px-3 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Lihat Detail Produk"
              >
                <i data-lucide="info" class="w-3.5 h-3.5"></i> Detail
              </button>
              <a 
                href="${waUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-colors"
                title="Pesan Langsung via WhatsApp"
              >
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Pesan WA
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-trigger icon creation
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // 4. Modal Detail Produk (Quick View)
  window.openProductModal = function(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product || !productModal) return;

    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalCategory.textContent = product.categoryLabel;
    modalBadge.textContent = product.badge;
    modalBadge.className = `px-2.5 py-0.5 text-xs font-semibold rounded-full text-white ${product.badgeColor}`;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.priceDisplay;
    modalDesc.textContent = product.fullDesc;

    // Highlights list
    if (modalHighlights) {
      modalHighlights.innerHTML = product.highlights.map(h => `
        <li class="flex items-center gap-2 text-stone-700 text-xs font-medium">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i>
          <span>${h}</span>
        </li>
      `).join('');
    }

    // Set WhatsApp link
    const waUrl = generateWaOrderUrl(product.name, product.priceDisplay);
    if (modalWaBtn) {
      modalWaBtn.href = waUrl;
    }

    // Tampilkan modal
    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  function closeProductModal() {
    if (!productModal) return;
    productModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);

  // --- PROJECT SELECTOR MODAL LOGIC ---
  const projectSelectorModal = document.getElementById('project-selector-modal');
  const projectSelectorBackdrop = document.getElementById('project-selector-backdrop');
  const projectSelectorCloseBtn = document.getElementById('project-selector-close-btn');
  const projectSelectorFooterCloseBtn = document.getElementById('project-selector-footer-close-btn');
  const projectSelectorBtn = document.getElementById('project-selector-btn');
  const mobileProjectSelectorBtn = document.getElementById('mobile-project-selector-btn');
  const drawerProjectSelectorBtn = document.getElementById('drawer-project-selector-btn');

  window.openProjectSelectorModal = function() {
    if (!projectSelectorModal) return;
    projectSelectorModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  window.closeProjectSelectorModal = function() {
    if (!projectSelectorModal) return;
    projectSelectorModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (projectSelectorBtn) {
    projectSelectorBtn.addEventListener('click', window.openProjectSelectorModal);
  }
  if (mobileProjectSelectorBtn) {
    mobileProjectSelectorBtn.addEventListener('click', window.openProjectSelectorModal);
  }
  if (drawerProjectSelectorBtn) {
    drawerProjectSelectorBtn.addEventListener('click', () => {
      closeMobileMenu();
      window.openProjectSelectorModal();
    });
  }
  if (projectSelectorCloseBtn) {
    projectSelectorCloseBtn.addEventListener('click', window.closeProjectSelectorModal);
  }
  if (projectSelectorFooterCloseBtn) {
    projectSelectorFooterCloseBtn.addEventListener('click', window.closeProjectSelectorModal);
  }
  if (projectSelectorBackdrop) {
    projectSelectorBackdrop.addEventListener('click', window.closeProjectSelectorModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (productModal && !productModal.classList.contains('hidden')) {
        closeProductModal();
      }
      if (projectSelectorModal && !projectSelectorModal.classList.contains('hidden')) {
        closeProjectSelectorModal();
      }
    }
  });

  // 5. Filter Kategori
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-900', 'text-white', 'shadow-md');
        b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      });
      btn.classList.remove('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      btn.classList.add('bg-amber-900', 'text-white', 'shadow-md');

      currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // 6. Pencarian Produk
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        if (searchQuery.length > 0) {
          searchClearBtn.classList.remove('hidden');
        } else {
          searchClearBtn.classList.add('hidden');
        }
      }
      renderProducts();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.classList.add('hidden');
        renderProducts();
        searchInput.focus();
      }
    });
  }

  // Reset Filter jika data kosong
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      currentCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.classList.add('hidden');
      filterBtns.forEach(b => {
        if (b.getAttribute('data-category') === 'all') {
          b.classList.add('bg-amber-900', 'text-white', 'shadow-md');
          b.classList.remove('bg-stone-100', 'text-stone-700');
        } else {
          b.classList.remove('bg-amber-900', 'text-white', 'shadow-md');
          b.classList.add('bg-stone-100', 'text-stone-700');
        }
      });
      renderProducts();
    });
  }

  // 7. Salin Alamat & Telepon (Toast Notification)
  window.showToast = function(message) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toastNotification.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toastNotification.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      toastNotification.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
  };

  window.copyToClipboard = function(text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ ${label} berhasil disalin ke clipboard!`);
      }).catch(() => {
        showToast(`${label}: ${text}`);
      });
    } else {
      showToast(`${label}: ${text}`);
    }
  };

  // 8. Mobile Navigation Drawer
  function openMobileMenu() {
    if (mobileMenuDrawer && mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('hidden');
      setTimeout(() => {
        mobileMenuOverlay.classList.remove('opacity-0');
        mobileMenuDrawer.classList.remove('translate-x-full');
      }, 10);
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer && mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('opacity-0');
      mobileMenuDrawer.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
      }, 300);
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 9. Back To Top
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Render awal produk
  renderProducts();
});

