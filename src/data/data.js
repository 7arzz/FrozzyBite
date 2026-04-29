export const config = {
  businessName: "FrozzyBite",
  logo: "❄️",
  tagline: "Frozen Food Siap Masak • Ambil di Tempat",
  description:
    "Kami menyediakan aneka lauk pauk segar yang sudah dimarinasi dengan bumbu rahasia. Siap goreng, siap saji, 100% Halal.",
  location: "📍 PENGAMBILAN DI TEMPAT • BSD CITY",
  whatsappNumber: "628123456789",
  socials: [
    { icon: "📸", link: "#" },
    { icon: "📘", link: "#" },
    { icon: "🎵", link: "#" },
  ],
  promotion: {
    text: "🎉 Promo Opening: Beli 3 Pack Diskon 10%!",
    subtext: "*S&K Berlaku",
  },
  faqs: [
    {
      q: "Bagaimana cara mengambil pesanan?",
      a: "Setelah melakukan pemesanan via WhatsApp, admin kami akan memberikan titik lokasi (Maps). Anda bisa datang sesuai waktu yang disepakati.",
    },
    {
      q: "Apakah bisa kirim ke luar kota?",
      a: "Untuk saat ini kami hanya melayani self-pickup (ambil di tempat) untuk menjaga kualitas kesegaran makanan frozen kami.",
    },
    {
      q: "Berapa lama daya tahan makanannya?",
      a: "Di dalam freezer, produk kami tahan hingga 1-2 bulan. Di suhu ruang tahan sekitar 12-24 jam tergantung produk.",
    },
  ],
  testimonials: [
    {
      name: "Siska",
      text: "Ayam BBQ-nya juara! Bumbunya meresap sampai ke tulang.",
      rating: 5,
    },
    {
      name: "Budi",
      text: "Sangat praktis buat stok di kulkas. Tinggal goreng, rasa restoran.",
      rating: 5,
    },
    {
      name: "Maya",
      text: "Lele-nya bersih banget, nggak amis. Favorit keluarga!",
      rating: 5,
    },
  ],
};

export const products = [
  {
    id: 1,
    name: "Ayam Marinasi ",
    price: 25000,
    image:
      "https://i.pinimg.com/736x/f4/58/11/f458116b7c1ebdbbae4d2bf502c5c513.jpg",
    description: "Daging ayam segar pilihan dengan bumbu BBQ meresap sempurna.",
    category: "Ayam",
    bestSeller: true,
  },
  {
    id: 2,
    name: "Lele Marinasi ",
    price: 20000,
    image:
      "https://i.pinimg.com/1200x/b1/5f/12/b15f128658c7e7f1616dde29342ac117.jpg",
    description: "Lele bersih siap goreng dengan bumbu rempah tradisional.",
    category: "Ikan",
    bestSeller: false,
  },
  {
    id: 3,
    name: "Cireng",
    price: 15000,
    image:
      "https://i.pinimg.com/736x/cc/c1/66/ccc1668415dbbe18b0f2e47e3697a012.jpg",
    description:
      "Cireng renyah di luar, kenyal di dalam. Lengkap dengan sambal rujak.",
    category: "Jajanan Lokal",
    bestSeller: true,
  },
  {
    id: 4,
    name: "Tempura",
    price: 35000,
    image:
      "https://i.pinimg.com/1200x/f1/04/fe/f104fec9f9f577bed3d2c4fa5fa129a2.jpg",
    description: "Tempura ikan segar siap goreng.",
    category: "Seafood",
    bestSeller: false,
  },
  {
    id: 5,
    name: "Nugget Ayam",
    price: 25000,
    image:
      "https://i.pinimg.com/736x/a0/1c/8d/a01c8d30fa4b253f46677da87ca94dce.jpg",
    description: "Nugget ayam segar siap goreng.",
    category: "Ayam",
    bestSeller: true,
  },
  {
    id: 6,
    name: "Bakso Sapi",
    price: 20000,
    image:
      "https://i.pinimg.com/736x/b1/ed/9c/b1ed9c737aefc162b8416eb72c8ab9f7.jpg",
    description: "Bakso sapi segar siap goreng.",
    category: "Daging",
    bestSeller: false,
  },
];
