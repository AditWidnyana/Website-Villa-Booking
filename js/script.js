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
    const lang = e.target.value;
    for (const key in translations[lang]) {
      const element = document.getElementById(key);
      if (element) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translations[lang][key];
        } else if (element.tagName === "OPTION") {
          element.text = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    }
  });
});
