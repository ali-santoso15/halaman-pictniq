export const heroVideo =
  "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-waterfall-4178-large.mp4";

export const heroSpoilerVideo =
  "/spoiler-pictniq.mov";

export const spots = [
  {
    id: "japan-gate",
    name: "Japan Gate",
    label: "Zen vibes",
    accent: "from-cyan-400/40 via-sky-500/20 to-transparent",
    glow: "shadow-glow",
    size: "md:col-span-5 md:row-span-2",
    bestTime: "06.00 - 08.00",
    description:
      "Gerbang bernuansa Jepang dengan komposisi clean, cocok untuk portrait editorial dan reel yang tenang.",
    mood: "Minimal, airy, reflective",
    lighting: "Soft morning light dengan backlight tipis untuk outline rambut yang halus.",
    tips: [
      "Ambil angle dari sisi kiri untuk framing simetris.",
      "Gunakan outfit monokrom agar gerbang tetap jadi anchor visual.",
      "Sisakan negative space untuk caption story.",
    ],
    angles: [
      { title: "Story Portrait", format: "9:16", note: "Model di tengah, gate memenuhi 70% frame." },
      { title: "Feed Editorial", format: "4:5", note: "Posisikan subjek sedikit turun untuk depth." },
      { title: "Wide Moodshot", format: "16:9", note: "Tangkap layer gate + langit untuk opening reel." },
    ],
    captions: {
      id: [
        "Tenang bukan berarti biasa, kadang paling cantik justru yang paling sunyi.",
        "Masuk pelan-pelan, biar vibes-nya ikut tinggal lebih lama.",
        "Sedikit zen, sedikit dramatis, tetap aku.",
      ],
      en: [
        "Soft light, still frame, loud mood.",
        "Calm scenes hit different when the details stay quiet.",
        "A little zen, a little cinematic, fully worth the stop.",
      ],
    },
  },
  {
    id: "glory-gate",
    name: "Glory Gate",
    label: "Grandeur",
    accent: "from-amber-300/35 via-yellow-500/20 to-transparent",
    glow: "shadow-gold",
    size: "md:col-span-3 md:row-span-1",
    bestTime: "16.30 - 17.45",
    description:
      "Spot dengan siluet megah dan glow emas, paling kuat untuk hero shot dan konten personal branding.",
    mood: "Luxurious, bold, statement",
    lighting: "Golden hour langsung dari depan untuk membuat gate terlihat hidup dan berkilau.",
    tips: [
      "Gunakan low angle supaya struktur tampak monumental.",
      "Arahkan subjek sedikit menyamping untuk siluet tegas.",
      "Tambahkan motion blur kecil saat orang berjalan masuk frame.",
    ],
    angles: [
      { title: "Entrance Reel", format: "9:16", note: "Mulai dari lantai lalu tilt up ke gate." },
      { title: "Hero Feed", format: "4:5", note: "Center composition dengan leading lines lantai." },
    ],
    captions: {
      id: [
        "Sedikit megah, sedikit nekat, hasilnya tetap cakep.",
        "Kalau pintunya seindah ini, masa pulangnya buru-buru.",
      ],
      en: [
        "Big entrance energy, no extra effort needed.",
        "Golden light and a frame that already knows its angle.",
      ],
    },
  },
  {
    id: "colosseum",
    name: "Colosseum",
    label: "Heritage cinematic",
    accent: "from-orange-300/30 via-rose-400/20 to-transparent",
    glow: "shadow-gold",
    size: "md:col-span-4 md:row-span-1",
    bestTime: "16.45 - 18.00",
    description:
      "Nuansa heritage dengan tekstur batu yang kuat untuk feed dramatis dan sequence cinematic.",
    mood: "Epic, textured, timeless",
    lighting: "Golden hour adalah momen terbaik untuk menonjolkan tekstur batu.",
    tips: [
      "Ambil frame agak jauh untuk menangkap skala penuh.",
      "Pakai slow movement untuk transisi reel yang elegan.",
      "Tone warna hangat akan membuat tekstur lebih menonjol.",
    ],
    angles: [
      { title: "Cinematic Wide", format: "16:9", note: "Komposisi lebar untuk intro yang megah." },
      { title: "Walk Through", format: "9:16", note: "Tracking pelan sambil subjek berjalan." },
    ],
    captions: {
      id: [
        "Batu-batu tua, tapi energinya masih muda.",
        "Frame yang bikin langkah biasa terasa seperti adegan film.",
      ],
      en: [
        "Old textures, fresh perspective.",
        "Some places already come with their own soundtrack.",
      ],
    },
  },
  {
    id: "spot-360",
    name: "360 Spot",
    label: "Immersive panorama",
    accent: "from-blue-400/35 via-fuchsia-400/15 to-transparent",
    glow: "shadow-glow",
    size: "md:col-span-4 md:row-span-2",
    bestTime: "09.00 - 11.00",
    description:
      "Area panorama interaktif untuk preview komposisi sebelum datang. Cocok untuk story sequence dan teaser trip.",
    mood: "Immersive, futuristic, exploratory",
    lighting: "Pagi terang menjaga detail panorama tetap bersih di setiap sisi.",
    tips: [
      "Cari horizon line sebelum menentukan pose.",
      "Gunakan viewer untuk cek sisi crowd dan arah cahaya.",
      "Cocok untuk transisi orbit atau spin reveal.",
    ],
    angles: [
      { title: "Orbit Story", format: "9:16", note: "Simulasikan putaran untuk teaser lokasi." },
      { title: "Panorama Feed", format: "1:1", note: "Highlight landscape dan horizon line." },
      { title: "Creator POV", format: "16:9", note: "Frame seolah penonton sedang berdiri di tengah." },
    ],
    captions: {
      id: [
        "Lihat sekeliling dulu, baru jatuh suka sepenuhnya.",
        "Setiap arah punya frame yang beda, semuanya layak masuk draft.",
      ],
      en: [
        "Every direction looks like a different campaign shot.",
        "Spin the view first, then pick the mood you want to keep.",
      ],
    },
  },
  {
    id: "como-window",
    name: "Como Window",
    label: "Soft romance",
    accent: "from-cyan-200/30 via-blue-300/15 to-transparent",
    glow: "shadow-glow",
    size: "md:col-span-3 md:row-span-1",
    bestTime: "08.00 - 10.00",
    description:
      "Window scene dengan nuansa lembut dan clean, ideal untuk portrait dreamy dan konten couple.",
    mood: "Dreamy, pastel, intimate",
    lighting: "Natural side light untuk skin tone yang lebih flattering.",
    tips: [
      "Dekatkan subjek ke jendela untuk catchlight di mata.",
      "Coba pose looking away untuk mood editorial.",
    ],
    angles: [
      { title: "Window Portrait", format: "4:5", note: "Posisikan jendela sebagai frame dalam frame." },
    ],
    captions: {
      id: [
        "Lembutnya pas, dramanya secukupnya.",
        "Jendela kecil, mood-nya besar.",
      ],
      en: [
        "Soft focus, sharp feeling.",
        "A quiet window scene with main-character timing.",
      ],
    },
  },
  {
    id: "wizard-window",
    name: "Wizard Window",
    label: "Mystic frame",
    accent: "from-violet-300/25 via-sky-400/15 to-transparent",
    glow: "shadow-glow",
    size: "md:col-span-3 md:row-span-1",
    bestTime: "15.30 - 17.00",
    description:
      "Framing unik dengan aura misterius untuk visual yang playful tapi tetap premium.",
    mood: "Mystic, playful, surreal",
    lighting: "Sinar sore miring memberi contour halus di tepi frame.",
    tips: [
      "Gunakan tangan atau properti kecil untuk menambah storytelling.",
      "Eksperimen dengan pose setengah masuk frame.",
    ],
    angles: [
      { title: "Mystic Peek", format: "9:16", note: "Subjek muncul sebagian dari balik frame." },
      { title: "Editorial Crop", format: "4:5", note: "Close crop untuk mempertegas ekspresi." },
    ],
    captions: {
      id: [
        "Sedikit ajaib, tapi masih kelihatan effortless.",
        "Masuk frame ini seperti masuk dunia lain, tapi versi estetik.",
      ],
      en: [
        "A little magic helps the composition land better.",
        "This frame feels like a portal with good lighting.",
      ],
    },
  },
  {
    id: "kingkong-besar",
    name: "The Great Kingkong",
    label: "Scale and power",
    accent: "from-red-400/35 via-orange-500/15 to-transparent",
    glow: "shadow-gold",
    size: "md:col-span-5 md:row-span-1",
    bestTime: "17.00 - 18.00",
    description:
      "Spot paling kuat secara skala, cocok untuk visual power pose dan konten statement.",
    mood: "Massive, high-impact, fearless",
    lighting: "Jam menjelang sunset memberi highlight dramatis tanpa kehilangan detail utama.",
    tips: [
      "Gunakan low angle ekstrim untuk rasa monumental.",
      "Beri banyak ruang atas agar skala terasa.",
      "Pose sederhana lebih kuat daripada pose rumit di spot ini.",
    ],
    angles: [
      { title: "Scale Shot", format: "9:16", note: "Subjek kecil di bawah untuk menonjolkan ukuran." },
      { title: "Power Frame", format: "16:9", note: "Ambil ruang langit untuk efek dramatis." },
    ],
    captions: {
      id: [
        "Kalau frame-nya sebesar ini, percaya dirinya ikut naik.",
        "Besar, berani, dan susah buat dilewati tanpa berhenti.",
      ],
      en: [
        "Scale like this makes simple poses feel louder.",
        "Proof that one giant frame can carry the whole moodboard.",
      ],
    },
  },
];

export const visitInfo = {
  hours:
    "Senin - Kamis: 08.00 - 20.00 WIB\nJumat - Sabtu: 08.00 - 21.00 WIB\nMinggu: 06.30 - 21.00 WIB",
  tickets: "50.000",
  locationLabel:
    "Jl. Ngoro Ngoro Ombo, Ngandong, Patuk, Kec. Patuk, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55862",
  mapUrl: "https://maps.app.goo.gl/vAjHaQ27AE1Qt4k2A",
  notes: [
    "Datang pagi untuk frame lebih sepi dan cahaya lebih lembut.",
    "Bawa outfit kedua kalau ingin bikin beberapa mood dalam satu kunjungan.",
    "Semua area didesain mobile-first untuk kebutuhan vertical content.",
  ],
};
