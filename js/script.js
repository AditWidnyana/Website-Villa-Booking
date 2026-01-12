let currentLang = "en";

const villaDictionary = {
  ocean_view: { en: "Ocean View", id: "Pemandangan Laut" },
  wifi: { en: "WiFi", id: "WiFi" },
  balcony: { en: "Balcony", id: "Balkon" },
  pool: { en: "Swimming Pool", id: "Kolam Renang" },
  ac: { en: "Air Conditioner", id: "AC" },
  parking: { en: "Parking Area", id: "Area Parkir" },
  garden: { en: "Garden View", id: "Pemandangan Taman" },
  quiet: { en: "Quiet Area", id: "Area Tenang" },
  luxury: { en: "Luxury Interior", id: "Interior Mewah" },
  private_pool: { en: "Private Pool", id: "Kolam Renang Pribadi" },
  bathtub: { en: "Bathtub", id: "Bathtub" }
};

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  

  const translations = {
    en: {
      // ===== About Page =====
      heroTitle: "About Paradise Villas",
      heroText: "Luxury villa rentals in Bali, crafted for unforgettable experiences.",
      missionTitle: "Our Mission",
      missionText: "To provide travelers with premium villa stays that combine comfort, style, and authentic Balinese hospitality.",
      visionTitle: "Our Vision",
      visionText: "To be the leading villa booking platform in Bali, known for exceptional service, curated properties, and seamless booking experiences.",
      whyTitle: "Why Choose Us",
      whySubtitle: "We make your villa booking experience simple, secure, and unforgettable.",
      why1Title: "Luxury Villas",
      why1Text: "Handpicked properties with premium facilities and stunning views.",
      why2Title: "Trusted Service",
      why2Text: "Professional management and customer support you can rely on.",
      why3Title: "Easy Booking",
      why3Text: "Simple, secure, and fast reservations through our platform.",
      teamTitle: "Team Paradise Villas",
      team1Name: "Made Damar Sanscarya",
      team1Role: "Founder & CEO",
      team2Name: "I Komang Aditya Widnyana",
      team2Role: "Operations Manager",
      team3Name: "Made Damar Sanscarya",
      team3Role: "Customer Experience Lead",

      // ===== Villas Page =====
      villaPageTitle: "Available Villas",
      villa1Name: "Ocean View Villa",
      villa1Price: "$200/night",
      villa1Desc: "Wake up to breathtaking views of the ocean, enjoy a private balcony, and relax in modern interiors designed for comfort.",
      villa2Name: "Garden Retreat Villa",
      villa2Price: "$150/night",
      villa2Desc: "Surrounded by lush tropical gardens, this villa offers tranquility, open-air living spaces, and a cozy atmosphere for couples or families.",
      villa3Name: "Luxury Pool Villa",
      villa3Price: "$300/night",
      villa3Desc: "Indulge in ultimate luxury with a private infinity pool, spacious bedrooms, and elegant design perfect for a lavish getaway.",

      // ===== Book Page =====
      bookTitle: "Book Your Villa",
      labelName: "Name:",
      labelEmail: "Email:",
      labelVilla: "Villa:",
      villaOption1: "Ocean View Villa",
      villaOption2: "Garden Retreat Villa",
      villaOption3: "Luxury Pool Villa",
      labelCheckin: "Check-in Date:",
      labelCheckout: "Check-out Date:",
      checkin: "mm/dd/yyyy",
      checkout: "mm/dd/yyyy",
      submitButton: "Confirm Booking"
    },

    id: {
      // ===== About Page =====
      heroTitle: "Tentang Paradise Villas",
      heroText: "Sewa villa mewah di Bali, dirancang untuk pengalaman tak terlupakan.",
      missionTitle: "Misi Kami",
      missionText: "Memberikan pengalaman menginap premium di villa yang menggabungkan kenyamanan, gaya, dan keramahan Bali yang autentik.",
      visionTitle: "Visi Kami",
      visionText: "Menjadi platform pemesanan villa terkemuka di Bali, dikenal dengan layanan istimewa, properti pilihan, dan pengalaman pemesanan yang mudah.",
      whyTitle: "Mengapa Memilih Kami",
      whySubtitle: "Kami membuat pengalaman pemesanan villa Anda mudah, aman, dan tak terlupakan.",
      why1Title: "Villa Mewah",
      why1Text: "Properti pilihan dengan fasilitas premium dan pemandangan menakjubkan.",
      why2Title: "Layanan Terpercaya",
      why2Text: "Manajemen profesional dan dukungan pelanggan yang dapat diandalkan.",
      why3Title: "Pemesanan Mudah",
      why3Text: "Reservasi sederhana, aman, dan cepat melalui platform kami.",
      teamTitle: "Tim Paradise Villas",
      team1Name: "Made Damar Sanscarya",
      team1Role: "Pendiri & CEO",
      team2Name: "I Komang Aditya Widnyana",
      team2Role: "Manajer Operasional",
      team3Name: "Made Damar Sanscarya",
      team3Role: "Kepala Layanan Pelanggan",

      // ===== Villas Page =====
      villaPageTitle: "Villa Tersedia",
      villa1Name: "Villa Pemandangan Laut",
      villa1Price: "Rp3.200.000/malam",
      villa1Desc: "Bangun dengan pemandangan laut yang menakjubkan, nikmati balkon pribadi, dan bersantai di interior modern yang nyaman.",
      villa2Name: "Villa Taman Asri",
      villa2Price: "Rp2.400.000/malam",
      villa2Desc: "Dikelilingi taman tropis yang rimbun, villa ini menawarkan ketenangan, ruang terbuka, dan suasana hangat untuk pasangan atau keluarga.",
      villa3Name: "Villa Kolam Renang Mewah",
      villa3Price: "Rp4.800.000/malam",
      villa3Desc: "Nikmati kemewahan dengan kolam renang pribadi, kamar tidur luas, dan desain elegan untuk liburan mewah.",

      // ===== Book Page =====
      bookTitle: "Pesan Villa Anda",
      labelName: "Nama:",
      labelEmail: "Email:",
      labelVilla: "Villa:",
      villaOption1: "Villa Pemandangan Laut",
      villaOption2: "Villa Taman Asri",
      villaOption3: "Villa Kolam Renang Mewah",
      labelCheckin: "Tanggal Check-in:",
      labelCheckout: "Tanggal Check-out:",
      checkin: "mm/dd/yyyy",
      checkout: "mm/dd/yyyy",
      submitButton: "Konfirmasi Pemesanan"
    }
  };

  // Switch language
switcher.addEventListener("change", (e) => {
  currentLang = e.target.value;

  for (const key in translations[currentLang]) {
    const element = document.getElementById(key);
    if (element) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[currentLang][key];
      } else if (element.tagName === "OPTION") {
        element.text = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  }

  // Refresh data villa supaya ikut translate
  renderVillas(villasData);
  loadVillaDetail();
  loadFeaturedVillas();

});

});




function translateVillaText(text) {
  if (currentLang === "id") {
    const map = {
      "Ocean View Villa": "Villa Pemandangan Laut",
      "Garden Retreat Villa": "Villa Taman Asri",
      "Luxury Pool Villa": "Villa Kolam Renang Mewah",
      "Ocean view with private balcony and modern interior.": "Pemandangan laut dengan balkon pribadi dan interior modern.",
      "Surrounded by tropical garden and peaceful atmosphere.": "Dikelilingi taman tropis dan suasana yang tenang.",
      "Luxury villa with private pool and elegant interior.": "Villa mewah dengan kolam renang pribadi dan interior elegan."
    };
    return map[text] || text;
  }
  return text;
}





let villasData = [];

// Load data dari JSON
fetch("data/villas.json")
  .then(response => response.json())
  .then(data => {
    villasData = data;
    renderVillas(villasData);
    loadFeaturedVillas();   // ✅ TAMBAHKAN INI
  })

  .catch(error => console.error("Error load JSON:", error));

// Tampilkan villa ke halaman
function renderVillas(villas) {
  const container = document.getElementById("villaContainer");
  if (!container) return;

  container.innerHTML = "";

  villas.forEach(villa => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm villa-card clickable"
     onclick="openDetail(${villa.id})">

          <img src="${villa.image}" class="card-img-top" alt="${villa.name}">
          <div class="card-body">
            <h5 class="fw-bold">${translateVillaText(villa.name)}</h5>
            <p class="text-primary fw-semibold">$${villa.price}/night</p>
            <p class="text-muted">${translateVillaText(villa.description)}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function applyFilter() {
  const feature = document.getElementById("filterFeature").value;
  const facility = document.getElementById("filterFacility").value;

  let filtered = villasData.filter(villa => {
    return (
      (feature === "" || villa.features.includes(feature)) &&
      (facility === "" || villa.facilities.includes(facility))
    );
  });

  renderVillas(filtered);
}

function openDetail(id) {
  window.location.href = `villa-detail.html?id=${id}`;
}

// ===============================
// DETAIL PAGE HANDLER
// ===============================
function loadVillaDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  if (!id) return;

  fetch("data/Villas.json")
    .then(res => res.json())
    .then(data => {
      const villa = data.find(v => v.id === id);
      if (!villa) return;

      document.getElementById("detailImage").src = villa.image;
      document.getElementById("detailName").textContent = translateVillaText(villa.name);
      document.getElementById("detailPrice").textContent = `$${villa.price}/night`;
     document.getElementById("detailDesc").textContent = translateVillaText(villa.description);

      const featureBox = document.getElementById("detailFeatures");
      featureBox.innerHTML = "<strong>Features:</strong> ";
      villa.features.forEach(f => {
  const label = villaDictionary[f]?.[currentLang] || f;
  featureBox.innerHTML += `<span class="badge bg-primary me-1">${label}</span>`;
});


      const facilityBox = document.getElementById("detailFacilities");
      facilityBox.innerHTML = "<strong>Facilities:</strong> ";
      villa.facilities.forEach(f => {
  const label = villaDictionary[f]?.[currentLang] || f;
  facilityBox.innerHTML += `<span class="badge bg-success me-1">${label}</span>`;
});
    });
}

// Auto load ketika halaman detail dibuka
document.addEventListener("DOMContentLoaded", loadVillaDetail);

// Tombol booking
function goBooking() {
  window.location.href = "Book.html";
}



function loadFeaturedVillas() {
  const container = document.getElementById("featuredVillas");
  if (!container) return;

  fetch("data/Villas.json")
    .then(res => res.json())
    .then(data => {
      const featured = data.slice(0, 3); // tampilkan 3 villa
      container.innerHTML = "";

      featured.forEach(villa => {
        container.innerHTML += `
          <div class="col-md-4 mb-3">
            <div class="card h-100 shadow-sm clickable"
              onclick="openDetail(${villa.id})">

              <img src="${villa.image}" class="card-img-top">
              <div class="card-body">
                <h5>${translateVillaText(villa.name)}</h5>
                <p class="text-muted">${translateVillaText(villa.description)}</p>
                <p class="fw-semibold text-primary">$${villa.price}/night</p>

                <button class="btn btn-primary w-100">
                  ${currentLang === "id" ? "Lihat Detail" : "View Details"}
                </button>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch(err => console.error("Featured error:", err));
}


