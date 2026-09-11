/**
 * Dataset Produk PUSAT OLEH - OLEH NTT "KEMBAR JAYA" - Ende, Flores, NTT
 * Kategori: makanan, pakaian, kerajinan
 */

const PRODUCTS_DATA = [
  // --- MAKANAN & MINUMAN KHAS NTT ---
  {
    id: "mkn-01",
    name: "Kopi Flores Asli (Ende & Bajawa)",
    category: "makanan",
    categoryLabel: "Makanan & Minuman",
    priceDisplay: "Rp 35.000 - Rp 75.000",
    badge: "Paling Laris",
    badgeColor: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Biji kopi & bubuk Arabika / Robusta Flores pilihan dengan aroma khas pegunungan NTT.",
    fullDesc: "Kopi Flores terkenal dengan cita rasa khas aromatik, nuansa fruity dengan acidity yang seimbang serta aftertaste cokelat karamel yang kaya. Tersedia varian Kopi Ende dan Kopi Bajawa dalam kemasan kedap udara higienis untuk menjaga kesegaran rasa.",
    highlights: ["100% Kopi Murni NTT", "Kemasan 150g, 250g, & 500g", "Tahan hingga 12 bulan"]
  },
  {
    id: "mkn-02",
    name: "Jagung Titi Khas Flores NTT",
    category: "makanan",
    categoryLabel: "Makanan & Minuman",
    priceDisplay: "Rp 25.000 / bungkus",
    badge: "Khas NTT",
    badgeColor: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Camilan tradisional berbahan dasar jagung pulut yang dipipihkan (dititi) secara turun-temurun.",
    fullDesc: "Camilan khas bumi Flobamora yang dibuat secara tradisional dengan cara memanggang biji jagung pulut di wajan tanah liat lalu dipukul pipih (dititi) dengan batu bundar. Gurih alami, renyah, dan sangat cocok dinikmati bersama secangkir kopi panas.",
    highlights: ["Tanpa Pengawet Sintetis", "Rasa Gurih & Renyah Alami", "Kemasan Praktis Siap Makan"]
  },
  {
    id: "mkn-03",
    name: "Madu Hutan Alami Asli NTT",
    category: "makanan",
    categoryLabel: "Makanan & Minuman",
    priceDisplay: "Rp 85.000 - Rp 150.000",
    badge: "Otentik Alami",
    badgeColor: "bg-emerald-700",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Madu murni hasil panen lebah hutan liar NTT, kaya khasiat dan nutrisi alami.",
    fullDesc: "Madu liar murni yang diambil langsung dari hutan pedalaman NTT. Memiliki rasa manis alami dengan sedikit sentuhan aroma floral khas tanaman hutan tropis. Sangat berkhasiat untuk menjaga imunitas tubuh, stamina, dan kesehatan keluarga.",
    highlights: ["100% Madu Murni Lebah Hutan", "Kemasan Botol Aman & Segel", "Tersedia 250ml & 500ml"]
  },
  {
    id: "mkn-04",
    name: "Kacang Goreng Pasir Khas Ende",
    category: "makanan",
    categoryLabel: "Makanan & Minuman",
    priceDisplay: "Rp 20.000 / bungkus",
    badge: "Favorit Camilan",
    badgeColor: "bg-stone-700",
    image: "https://images.unsplash.com/photo-1568290740618-9e672728956e?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Kacang tanah lokal yang digoreng menggunakan pasir panas tanpa minyak, renyah dan gurih.",
    fullDesc: "Kacang tanah pilihan asli tanah Flores yang disangrai dalam pasir panas bersih secara tradisional. Menghasilkan tekstur yang super renyah tanpa minyak berlebih, gurih merata, dan sehat untuk cemilan santai bersama keluarga di rumah.",
    highlights: ["Non-Kolesterol (Goreng Pasir)", "Renyah Tahan Lama", "Pilihan Favorit Wisatawan"]
  },
  {
    id: "mkn-05",
    name: "Kue Rambut / Jawada Tradisional NTT",
    category: "makanan",
    categoryLabel: "Makanan & Minuman",
    priceDisplay: "Rp 25.000 / kotak",
    badge: "Tradisional",
    badgeColor: "bg-amber-700",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Kue khas NTT berbentuk serat bihun keemasan dari tepung beras & gula aren harum.",
    fullDesc: "Kue khas perayaan dan jamuan adat NTT yang berbentuk segitiga berserat halus seperti rambut keemasan. Dibuat dari racikan tepung beras, nira gula kelapa/aren, dan minyak kelapa. Aroma harum manis gula aren dan kerenyahannya tak terlupakan.",
    highlights: ["Resep Warisan Leluhur", "Aroma Gula Aren Harum", "Cocok untuk Bingkisan"]
  },
  {
    id: "mkn-06",
    name: "Bahan Jagung Bose Khas NTT",
    category: "makanan",
    categoryLabel: "Makanan & Minuman",
    priceDisplay: "Rp 20.000 / kemasan",
    badge: "Kuliner Khas",
    badgeColor: "bg-yellow-700",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Bahan utama kuliner legendaris bubur jagung bose khas NTT lengkap dengan kacang merah.",
    fullDesc: "Bahan siap olah jagung bose yang telah ditumbuk bersih dan dicampur kacang merah lokal. Makanan pokok tradisional NTT yang sangat nikmat jika dimasak bersama santan kelapa kental dan disajikan dengan ikan bakar atau sambal lu'at.",
    highlights: ["Higienis & Bersih", "Mudah Dimasak di Rumah", "Kaya Karbohidrat Kompleks"]
  },

  // --- KAIN TENUN & PAKAIAN KHAS NTT ---
  {
    id: "pkn-01",
    name: "Kain Tenun Ikat Ende (Motif Klasik Flores)",
    category: "pakaian",
    categoryLabel: "Pakaian & Tenun",
    priceDisplay: "Rp 250.000 - Rp 950.000",
    badge: "Mahakarya Ende",
    badgeColor: "bg-red-800",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b5ab8?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Kain tenun ikat asli karya pengrajin tenun Kabupaten Ende dengan ragam hias simbolik bernilai tinggi.",
    fullDesc: "Tenun ikat khas Ende Flores memiliki corak geometris yang sakral dan sarat makna filosofi persatuan serta hubungan harmonis manusia dan alam. Ditenun benang demi benang dengan pewarnaan alami yang tahan lama. Sangat berharga untuk koleksi busana etnik maupun cinderamata istimewa.",
    highlights: ["Asli Tenunan Pengrajin NTT", "Bahan Katun Nyaman & Kokoh", "Ukuran Standar Selimut/Sarung"]
  },
  {
    id: "pkn-02",
    name: "Selendang Tenun Etnik NTT",
    category: "pakaian",
    categoryLabel: "Pakaian & Tenun",
    priceDisplay: "Rp 65.000 - Rp 150.000",
    badge: "Terlaris Wisatawan",
    badgeColor: "bg-rose-700",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Selendang leher multifungsi motif tenun NTT, cocok sebagai aksesoris resmi maupun kasual.",
    fullDesc: "Selendang tenun panjang dengan rumbai etnik di kedua ujungnya. Menampilkan paduan warna kontras yang memikat. Populer digunakan sebagai syal perjalanan, pelengkap jas/kebaya resmi, maupun aksesoris foto saat berwisata di Kelimutu dan NTT.",
    highlights: ["Panjang ± 150 cm x 20 cm", "Warna Kaya & Variatif", "Mudah Dibawa & Praktis"]
  },
  {
    id: "pkn-03",
    name: "Kemeja Pria Kombinasi Tenun NTT",
    category: "pakaian",
    categoryLabel: "Pakaian & Tenun",
    priceDisplay: "Rp 165.000 - Rp 275.000",
    badge: "Busana Pria",
    badgeColor: "bg-blue-900",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Kemeja formal & semi-formal dengan aplikasi panel tenun motif khas NTT yang elegan.",
    fullDesc: "Kemeja batik tenun pria dengan jahitan rapi, mengombinasikan kain katun premium yang sejuk dengan motif tenun khas NTT pada dada, kerah, atau manset. Pilihan tepat untuk seragam kantor, acara adat, pesta pernikahan, atau hadiah berkelas.",
    highlights: ["Ukuran M, L, XL, XXL", "Bahan Katun Halus Tidak Panas", "Desain Elegan Berwibawa"]
  },
  {
    id: "pkn-04",
    name: "Kaos Souvenir I Love Ende & Kelimutu",
    category: "pakaian",
    categoryLabel: "Pakaian & Tenun",
    priceDisplay: "Rp 60.000 - Rp 85.000",
    badge: "Suvenir Populer",
    badgeColor: "bg-indigo-700",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Kaos sablon bertema ikon kota Ende, Danau Tiga Warna Kelimutu, dan peta Flores NTT.",
    fullDesc: "Kaos katun combed lembut yang nyaman dikenakan untuk iklim tropis. Menampilkan desain grafis orisinal pesona Danau Tiga Warna Kelimutu, situs pengasingan Bung Karno di Ende, serta tipografi keren bertema NTT.",
    highlights: ["100% Katun Combed Adem", "Sablon Awet Tidak Pecah", "Ukuran Anak & Dewasa (S - XXL)"]
  },
  {
    id: "pkn-05",
    name: "Sarung Tenun Adat Flores NTT",
    category: "pakaian",
    categoryLabel: "Pakaian & Tenun",
    priceDisplay: "Rp 180.000 - Rp 450.000",
    badge: "Tradisi Adat",
    badgeColor: "bg-amber-900",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Sarung tenun etnik untuk pria dan wanita yang dapat digunakan untuk acara seremonial maupun ibadah.",
    fullDesc: "Sarung tenun bermotif rapat dengan warna dasar gelap yang elegan. Nyaman dipakai, tidak mudah kusut, dan menjadi busana penting saat menghadiri kegiatan kekeluargaan dan adat istiadat di Flores.",
    highlights: ["Jahitan Sambung Rapi", "Corak Tradisional Otentik", "Bahan Dingin & Berkualitas"]
  },

  // --- CENDERAMATA & KERAJINAN TANGAN ---
  {
    id: "krj-01",
    name: "Miniatur Alat Musik Sasando NTT",
    category: "kerajinan",
    categoryLabel: "Cenderamata & Kerajinan",
    priceDisplay: "Rp 75.000 - Rp 175.000",
    badge: "Ikonik NTT",
    badgeColor: "bg-teal-700",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Pajangan meja miniatur Sasando lengkap dengan tabung bambu dan daun lontar khas NTT.",
    fullDesc: "Karya kerajinan tangan cermat yang mereplikasi instrumen musik petik legendaris Pulau Rote & NTT, Sasando. Dibuat mendetail dengan pelindung lontar alami, dawai senar mini, dan dudukan kayu kokoh. Pilihan suvenir paling ikonik untuk mempercantik ruang tamu atau meja kerja.",
    highlights: ["Kerajinan Tangan Teliti", "Bahan Daun Lontar & Kayu", "Sudah Dilengkapi Kotak Suvenir"]
  },
  {
    id: "krj-02",
    name: "Tas & Pouch Anyaman Daun Lontar Etnik",
    category: "kerajinan",
    categoryLabel: "Cenderamata & Kerajinan",
    priceDisplay: "Rp 35.000 - Rp 95.000",
    badge: "Eco-Friendly",
    badgeColor: "bg-emerald-800",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Tas tangan dan wadah serbaguna yang dianyam rapi dari serat daun lontar alami NTT.",
    fullDesc: "Kerajinan anyaman ramah lingkungan hasil karya pengrajin lokal NTT. Kuat, berbobot ringan, beraroma serat alami yang menenangkan, serta dihiasi aksen kain tenun di bagian penutup atau talinya.",
    highlights: ["100% Bahan Alami Lontar", "Awet & Tidak Mudah Jamuran", "Beragam Bentuk & Ukuran"]
  },
  {
    id: "krj-03",
    name: "Dompet & Pouch Kain Tenun NTT",
    category: "kerajinan",
    categoryLabel: "Cenderamata & Kerajinan",
    priceDisplay: "Rp 15.000 - Rp 45.000",
    badge: "Suvenir Populer",
    badgeColor: "bg-purple-800",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Pouch kosmetik, dompet koin, dan tempat kacamata berbalut kain tenun aneka warna.",
    fullDesc: "Cinderamata yang sangat disukai untuk dibagikan ke rekan kantor atau sanak saudara. Menggunakan potongan kain tenun ikat berkualitas dengan furing dalam yang lembut serta ritsleting kuat.",
    highlights: ["Sangat Praktis Dibawa Banyak", "Motif Cantik Bervariasi", "Cocok untuk Oleh-Oleh Massal"]
  },
  {
    id: "krj-04",
    name: "Gantungan Kunci & Aksesoris Kelimutu Ende",
    category: "kerajinan",
    categoryLabel: "Cenderamata & Kerajinan",
    priceDisplay: "Rp 10.000 / pcs (Paket Rp 50.000 / 6 pcs)",
    badge: "Ekonomis",
    badgeColor: "bg-cyan-700",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Gantungan kunci kayu, akrilik, dan anyaman tenun bertuliskan Ende Flores & Kelimutu.",
    fullDesc: "Tanda mata sederhana namun berkesan dari kunjungan ke kota Ende. Menampilkan ukiran relief Danau Kelimutu, lambang persahabatan, atau jalinan benang tenun mini yang unik.",
    highlights: ["Harga Sangat Terjangkau", "Bahan Awet Tahan Banting", "Banyak Varian Bentuk"]
  },
  {
    id: "krj-05",
    name: "Gelang & Kalung Tenun Etnik Flores",
    category: "kerajinan",
    categoryLabel: "Cenderamata & Kerajinan",
    priceDisplay: "Rp 15.000 - Rp 35.000",
    badge: "Aksesoris Etnik",
    badgeColor: "bg-amber-800",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Aksesoris gelang serut dan kalung etnik berbahan tali tenun dengan manik-manik khas NTT.",
    fullDesc: "Gelang dan kalung bergaya bohemian-etnik yang dibuat dari lilitan kain tenun asli dipadukan dengan manik kayu dan batu alam. Ukuran dapat diatur menyesuaikan pergelangan tangan, cocok untuk pria dan wanita.",
    highlights: ["Adjustable (Bisa Diatur Ukurannya)", "Unisex Pria & Wanita", "Aksen Etnik Menawan"]
  }
];

// Informasi Toko
const SHOP_INFO = {
  name: 'PUSAT OLEH - OLEH NTT "KEMBAR JAYA"',
  shortName: 'Kembar Jaya',
  category: 'Toko Suvenir / Pusat Oleh-oleh / Toko Pakaian',
  phone: '0813-3808-3555',
  phoneClean: '6281338083555',
  address: 'Simpang PLTD, Jl. Gatot Soebroto, Kel. Mautapaga, Kec. Ende Tim., Kabupaten Ende, Nusa Tenggara Timur',
  plusCode: '5M4C+65 Kel. Mautapaga, Kabupaten Ende, Nusa Tenggara Tim.',
  rating: 4.0,
  reviewsCount: 29,
  closingHourWita: 20, // Tutup pukul 20.00 WITA
  openingHourWita: 8,  // Buka 08.00 WITA
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=5M4C%2B65+Kel.+Mautapaga,+Kabupaten+Ende,+Nusa+Tenggara+Tim.',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Simpang+PLTD,+Jl.+Gatot+Soebroto,+Mautapaga,+Ende,+Nusa+Tenggara+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed'
};

