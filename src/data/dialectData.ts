/**
 * DATA DIALEK PANTAI TIMUR
 * 
 * Fail ini mengandungi semua data untuk pembelajaran dialek Kelantan, Terengganu dan Pahang.
 * Anda boleh edit fail ini untuk menambah atau mengubah data pembelajaran.
 */

// ============================================
// INTERFACE / TYPES
// ============================================

export interface Phrase {
  id: string;
  dialect: string;           // Perkataan dalam dialek
  standard: string;          // Perkataan dalam Bahasa Melayu standard
  pronunciation: string;     // Panduan sebutan
  category: string;          // Kategori: Kata Nama, Kata Kerja, Kata Tanya, etc.
  example: string;           // Contoh ayat penggunaan
  audioUrl?: string;         // URL audio penutur jati (optional)
}

export interface QuizQuestion {
  id: string;
  question: string;          // Soalan kuiz
  options: string[];         // 4 pilihan jawapan
  correctAnswer: number;     // Index jawapan yang betul (0-3)
  explanation: string;       // Penjelasan jawapan
  state: string;             // Negeri asal dialek
}

// ============================================
// DATA PEMBELAJARAN - KELANTAN
// ============================================

export const kelantanPhrases: Phrase[] = [
  // KATA NAMA
  {
    id: "k1",
    dialect: "kawe",
    standard: "saya",
    pronunciation: "ka-we",
    category: "Kata Nama",
    example: "Kawe nok gi pasar - Saya mahu pergi pasar",
    audioUrl: "",
  },
  {
    id: "k2",
    dialect: "demo",
    standard: "awak",
    pronunciation: "de-mo",
    category: "Kata Nama",
    example: "Demo gi mano? - Awak pergi mana?",
    audioUrl: "",
  },
  {
    id: "k3",
    dialect: "pitih",
    standard: "duit",
    pronunciation: "pi-tih",
    category: "Kata Nama",
    example: "Pitih demo cukup ke? - Duit awak cukup ke?",
    audioUrl: "",
  },
  
  // KATA KERJA
  {
    id: "k4",
    dialect: "gi",
    standard: "pergi",
    pronunciation: "gi",
    category: "Kata Kerja",
    example: "Kawe gi kedai - Saya pergi kedai",
    audioUrl: "",
  },
  {
    id: "k5",
    dialect: "tubik",
    standard: "keluar",
    pronunciation: "tu-bik",
    category: "Kata Kerja",
    example: "Demo tubik rumoh - Awak keluar rumah",
    audioUrl: "",
  },
  
  // KATA ADJEKTIF
  {
    id: "k6",
    dialect: "pahik",
    standard: "pahit",
    pronunciation: "pa-hik",
    category: "Kata Adjektif",
    example: "Kopi ni pahik - Kopi ini pahit",
    audioUrl: "",
  },
  {
    id: "k7",
    dialect: "bereh",
    standard: "siap/habis",
    pronunciation: "be-reh",
    category: "Kata Adjektif",
    example: "Kerja doh bereh - Kerja sudah siap",
    audioUrl: "",
  },
  
  // KATA TUGAS
  {
    id: "k8",
    dialect: "hok",
    standard: "yang",
    pronunciation: "hok",
    category: "Kata Tugas",
    example: "Ore hok datang tu siapa? - Orang yang datang itu siapa?",
    audioUrl: "",
  },
  {
    id: "k9",
    dialect: "bakpo",
    standard: "kenapa",
    pronunciation: "bak-po",
    category: "Kata Tugas",
    example: "Bakpo demo nangih? - Kenapa awak menangis?",
    audioUrl: "",
  },
  {
    id: "k10",
    dialect: "mano",
    standard: "mana",
    pronunciation: "ma-no",
    category: "Kata Tugas",
    example: "Mano rumoh demo? - Mana rumah awak?",
    audioUrl: "",
  },
  {
    id: "k11",
    dialect: "gak",
    standard: "juga",
    pronunciation: "gak",
    category: "Kata Tugas",
    example: "Kawe nok gi gak - Saya mahu pergi juga",
    audioUrl: "",
  },
  {
    id: "k12",
    dialect: "tokleh",
    standard: "tidak boleh",
    pronunciation: "tok-leh",
    category: "Kata Tugas",
    example: "Tokleh buat gapo - Tidak boleh buat apa-apa",
    audioUrl: "",
  },
];

// ============================================
// DATA PEMBELAJARAN - TERENGGANU
// ============================================

export const terengganuPhrases: Phrase[] = [
  // KATA NAMA
  {
    id: "t1",
    dialect: "ambo",
    standard: "saya",
    pronunciation: "am-bo",
    category: "Kata Nama",
    example: "Ambo nok gi pasar - Saya mahu pergi pasar",
    audioUrl: "",
  },
  {
    id: "t2",
    dialect: "mung",
    standard: "awak",
    pronunciation: "mung",
    category: "Kata Nama",
    example: "Mung gi mana? - Awak pergi ke mana?",
    audioUrl: "",
  },
  {
    id: "t3",
    dialect: "pitih",
    standard: "duit",
    pronunciation: "pi-tih",
    category: "Kata Nama",
    example: "Pitih mung cukup ke? - Duit awak cukup ke?",
    audioUrl: "",
  },
  {
    id: "t4",
    dialect: "tikuh",
    standard: "tikus",
    pronunciation: "ti-kuh",
    category: "Kata Nama",
    example: "Tikuh ni banyok - Tikus ini banyak",
    audioUrl: "",
  },
  
  // KATA KERJA
  {
    id: "t5",
    dialect: "gi",
    standard: "pergi",
    pronunciation: "gi",
    category: "Kata Kerja",
    example: "Ambo gi kedai - Saya pergi kedai",
    audioUrl: "",
  },
  {
    id: "t6",
    dialect: "tubik",
    standard: "keluar",
    pronunciation: "tu-bik",
    category: "Kata Kerja",
    example: "Mung tubik rumah - Awak keluar rumah",
    audioUrl: "",
  },
  {
    id: "t7",
    dialect: "kupah",
    standard: "kupas",
    pronunciation: "ku-pah",
    category: "Kata Kerja",
    example: "Kupah kelapa ni - Kupas kelapa ini",
    audioUrl: "",
  },
  
  // KATA ADJEKTIF
  {
    id: "t8",
    dialect: "mAneh",
    standard: "manis",
    pronunciation: "ma-neh",
    category: "Kata Adjektif",
    example: "Air ni mAneh - Air ini manis",
    audioUrl: "",
  },
  {
    id: "t9",
    dialect: "mAlAh",
    standard: "malas",
    pronunciation: "ma-lah",
    category: "Kata Adjektif",
    example: "Budok ni mAlAh - Budak ini malas",
    audioUrl: "",
  },
  
  // KATA TUGAS
  {
    id: "t10",
    dialect: "hok",
    standard: "yang",
    pronunciation: "hok",
    category: "Kata Tugas",
    example: "Ore hok datang tu siapa? - Orang yang datang itu siapa?",
    audioUrl: "",
  },
  {
    id: "t11",
    dialect: "bakpe",
    standard: "kenapa",
    pronunciation: "bak-pe",
    category: "Kata Tugas",
    example: "Bakpe mung nangih? - Kenapa awak menangis?",
    audioUrl: "",
  },
  {
    id: "t12",
    dialect: "gok",
    standard: "juga",
    pronunciation: "gok",
    category: "Kata Tugas",
    example: "Ambo nok gi gok - Saya mahu pergi juga",
    audioUrl: "",
  },
  {
    id: "t13",
    dialect: "dok",
    standard: "tidak",
    pronunciation: "dok",
    category: "Kata Tugas",
    example: "Dok boleh buat - Tidak boleh buat",
    audioUrl: "",
  },
];

// ============================================
// DATA PEMBELAJARAN - PAHANG
// ============================================

export const pahangPhrases: Phrase[] = [
  // KATA NAMA
  {
    id: "p1",
    dialect: "kome",
    standard: "awak/kamu",
    pronunciation: "ko-me",
    category: "Kata Nama",
    example: "Kome gi mana? - Awak pergi ke mana?",
    audioUrl: "",
  },
  {
    id: "p2",
    dialect: "sabak",
    standard: "pondok memasak",
    pronunciation: "sa-bak",
    category: "Kata Nama",
    example: "Sabak tu untuk masak - Pondok memasak itu untuk masak",
    audioUrl: "",
  },
  {
    id: "p3",
    dialect: "balan",
    standard: "tempat cuci pinggan",
    pronunciation: "ba-lan",
    category: "Kata Nama",
    example: "Cuci pinggan kat balan - Cuci pinggan di tempat cuci pinggan",
    audioUrl: "",
  },
  
  // KATA KERJA
  {
    id: "p4",
    dialect: "repih",
    standard: "membersihkan batas tanaman",
    pronunciation: "re-pih",
    category: "Kata Kerja",
    example: "Kena repih ladang - Kena membersihkan batas tanaman di ladang",
    audioUrl: "",
  },
  {
    id: "p5",
    dialect: "bakuh",
    standard: "bongkar tanah dengan cangkul",
    pronunciation: "ba-kuh",
    category: "Kata Kerja",
    example: "Bakuh tanah tu - Bongkar tanah itu dengan cangkul",
    audioUrl: "",
  },
  {
    id: "p6",
    dialect: "perun",
    standard: "membakar",
    pronunciation: "pe-run",
    category: "Kata Kerja",
    example: "Perun sampah tu - Bakar sampah itu",
    audioUrl: "",
  },
  {
    id: "p7",
    dialect: "loto",
    standard: "menghancur tanah",
    pronunciation: "lo-to",
    category: "Kata Kerja",
    example: "Loto tanah untuk tanam padi - Hancurkan tanah untuk tanam padi",
    audioUrl: "",
  },
  {
    id: "p8",
    dialect: "senduh",
    standard: "ikat",
    pronunciation: "sen-duh",
    category: "Kata Kerja",
    example: "Senduh tali tu - Ikat tali itu",
    audioUrl: "",
  },
  {
    id: "p9",
    dialect: "renceh",
    standard: "potong menyerong",
    pronunciation: "ren-ceh",
    category: "Kata Kerja",
    example: "Renceh kayu tu - Potong kayu itu menyerong",
    audioUrl: "",
  },
  {
    id: "p10",
    dialect: "sia",
    standard: "biarkan minyak panas berbunyi",
    pronunciation: "sia",
    category: "Kata Kerja",
    example: "Sia minyak tu dulu - Biarkan minyak panas berbunyi dulu",
    audioUrl: "",
  },
  {
    id: "p11",
    dialect: "merobok",
    standard: "berbuih kerana panas",
    pronunciation: "me-ro-bok",
    category: "Kata Kerja",
    example: "Air tu dah merobok - Air itu dah berbuih kerana panas",
    audioUrl: "",
  },
  {
    id: "p12",
    dialect: "mereneh",
    standard: "mendidih perlahan",
    pronunciation: "me-re-neh",
    category: "Kata Kerja",
    example: "Air mereneh - Air mendidih perlahan",
    audioUrl: "",
  },
  {
    id: "p13",
    dialect: "cering",
    standard: "siat/koyak",
    pronunciation: "ce-ring",
    category: "Kata Kerja",
    example: "Baju ni cering - Baju ini koyak",
    audioUrl: "",
  },
  {
    id: "p14",
    dialect: "roncoh",
    standard: "jolok",
    pronunciation: "ron-coh",
    category: "Kata Kerja",
    example: "Roncoh buah tu - Jolok buah itu",
    audioUrl: "",
  },
  {
    id: "p15",
    dialect: "rembat",
    standard: "bina pelantar / sepak kuat",
    pronunciation: "rem-bat",
    category: "Kata Kerja",
    example: "Rembat papan untuk buat pelantar - Bina pelantar menggunakan papan",
    audioUrl: "",
  },
  {
    id: "p16",
    dialect: "kincah",
    standard: "celup/gosok dengan kaki",
    pronunciation: "kin-cah",
    category: "Kata Kerja",
    example: "Kincah kain dalam air - Celup dan gosok kain dalam air dengan kaki",
    audioUrl: "",
  },
  {
    id: "p17",
    dialect: "hupor",
    standard: "gosok kuat",
    pronunciation: "hu-por",
    category: "Kata Kerja",
    example: "Hupor lantai tu - Gosok lantai itu dengan kuat",
    audioUrl: "",
  },
];

// ============================================
// DATA KUIZ - KELANTAN
// ============================================

export const kelantanQuiz: QuizQuestion[] = [
  {
    id: "kq1",
    question: "Apakah maksud perkataan 'kawe' dalam dialek Kelantan?",
    options: ["Saya", "Awak", "Dia", "Kita"],
    correctAnswer: 0,
    explanation: "'Kawe' bermaksud 'Saya' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq2",
    question: "Apakah maksud 'demo' dalam dialek Kelantan?",
    options: ["Saya", "Awak", "Mereka", "Kita"],
    correctAnswer: 1,
    explanation: "'Demo' bermaksud 'Awak' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq3",
    question: "Apakah maksud 'pitih' dalam dialek Kelantan?",
    options: ["Duit", "Tidur", "Pergi", "Makan"],
    correctAnswer: 0,
    explanation: "'Pitih' bermaksud 'Duit' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq4",
    question: "Apakah maksud 'gi' dalam dialek Kelantan?",
    options: ["Datang", "Pergi", "Balik", "Keluar"],
    correctAnswer: 1,
    explanation: "'Gi' bermaksud 'Pergi' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq5",
    question: "Apakah maksud 'tubik' dalam dialek Kelantan?",
    options: ["Masuk", "Keluar", "Naik", "Turun"],
    correctAnswer: 1,
    explanation: "'Tubik' bermaksud 'Keluar' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq6",
    question: "Apakah maksud 'pahik' dalam dialek Kelantan?",
    options: ["Manis", "Masam", "Pahit", "Pedas"],
    correctAnswer: 2,
    explanation: "'Pahik' bermaksud 'Pahit' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq7",
    question: "Apakah maksud 'bereh' dalam dialek Kelantan?",
    options: ["Belum", "Siap/Habis", "Sedang", "Akan"],
    correctAnswer: 1,
    explanation: "'Bereh' bermaksud 'Siap' atau 'Habis' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq8",
    question: "Apakah maksud 'hok' dalam dialek Kelantan?",
    options: ["Ini", "Itu", "Yang", "Dengan"],
    correctAnswer: 2,
    explanation: "'Hok' bermaksud 'Yang' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq9",
    question: "Apakah maksud 'bakpo' dalam dialek Kelantan?",
    options: ["Apa", "Kenapa", "Bila", "Mana"],
    correctAnswer: 1,
    explanation: "'Bakpo' bermaksud 'Kenapa' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq10",
    question: "Apakah maksud 'mano' dalam dialek Kelantan?",
    options: ["Apa", "Bila", "Mana", "Siapa"],
    correctAnswer: 2,
    explanation: "'Mano' bermaksud 'Mana' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq11",
    question: "Apakah maksud 'gak' dalam dialek Kelantan?",
    options: ["Sahaja", "Juga", "Pun", "Lagi"],
    correctAnswer: 1,
    explanation: "'Gak' bermaksud 'Juga' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq12",
    question: "Apakah maksud 'tokleh' dalam dialek Kelantan?",
    options: ["Boleh", "Tidak boleh", "Mungkin boleh", "Mesti boleh"],
    correctAnswer: 1,
    explanation: "'Tokleh' bermaksud 'Tidak boleh' dalam dialek Kelantan.",
    state: "Kelantan",
  },
];

// ============================================
// DATA KUIZ - TERENGGANU
// ============================================

export const terengganuQuiz: QuizQuestion[] = [
  {
    id: "tq1",
    question: "Apakah maksud 'ambo' dalam dialek Terengganu?",
    options: ["Saya", "Awak", "Dia", "Kita"],
    correctAnswer: 0,
    explanation: "'Ambo' bermaksud 'Saya' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq2",
    question: "Apakah maksud 'mung' dalam dialek Terengganu?",
    options: ["Saya", "Awak", "Dia", "Kita"],
    correctAnswer: 1,
    explanation: "'Mung' adalah kata ganti untuk 'Awak/Kamu' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq3",
    question: "Apakah maksud 'pitih' dalam dialek Terengganu?",
    options: ["Duit", "Bantal", "Tikus", "Kapal"],
    correctAnswer: 0,
    explanation: "'Pitih' bermaksud 'Duit' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq4",
    question: "Apakah maksud 'tikuh' dalam dialek Terengganu?",
    options: ["Kucing", "Tikus", "Arnab", "Ayam"],
    correctAnswer: 1,
    explanation: "'Tikuh' bermaksud 'Tikus' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq5",
    question: "Apakah maksud 'gi' dalam dialek Terengganu?",
    options: ["Datang", "Pergi", "Balik", "Keluar"],
    correctAnswer: 1,
    explanation: "'Gi' bermaksud 'Pergi' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq6",
    question: "Apakah maksud 'tubik' dalam dialek Terengganu?",
    options: ["Masuk", "Keluar", "Naik", "Turun"],
    correctAnswer: 1,
    explanation: "'Tubik' bermaksud 'Keluar' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq7",
    question: "Apakah maksud 'kupah' dalam dialek Terengganu?",
    options: ["Kupas", "Potong", "Cuci", "Masak"],
    correctAnswer: 0,
    explanation: "'Kupah' bermaksud 'Kupas' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq8",
    question: "Apakah maksud 'mAneh' dalam dialek Terengganu?",
    options: ["Manis", "Masam", "Pahit", "Pedas"],
    correctAnswer: 0,
    explanation: "'mAneh' bermaksud 'Manis' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq9",
    question: "Apakah maksud 'mAlAh' dalam dialek Terengganu?",
    options: ["Rajin", "Malas", "Cepat", "Lambat"],
    correctAnswer: 1,
    explanation: "'mAlAh' bermaksud 'Malas' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq10",
    question: "Apakah maksud 'hok' dalam dialek Terengganu?",
    options: ["Ini", "Itu", "Yang", "Dengan"],
    correctAnswer: 2,
    explanation: "'Hok' bermaksud 'Yang' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq11",
    question: "Apakah maksud 'bakpe' dalam dialek Terengganu?",
    options: ["Apa", "Kenapa", "Bila", "Mana"],
    correctAnswer: 1,
    explanation: "'Bakpe' bermaksud 'Kenapa' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq12",
    question: "Apakah maksud 'gok' dalam dialek Terengganu?",
    options: ["Sahaja", "Juga", "Pun", "Lagi"],
    correctAnswer: 1,
    explanation: "'Gok' bermaksud 'Juga' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq13",
    question: "Apakah maksud 'dok' dalam dialek Terengganu?",
    options: ["Ya", "Tidak", "Mungkin", "Sudah"],
    correctAnswer: 1,
    explanation: "'Dok' bermaksud 'Tidak' dalam dialek Terengganu.",
    state: "Terengganu",
  },
];

// ============================================
// DATA KUIZ - PAHANG
// ============================================

export const pahangQuiz: QuizQuestion[] = [
  {
    id: "pq1",
    question: "Apakah maksud 'kome' dalam dialek Pahang?",
    options: ["Saya", "Awak/Kamu", "Dia", "Mereka"],
    correctAnswer: 1,
    explanation: "'Kome' bermaksud 'Awak/Kamu' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq2",
    question: "Apakah maksud 'sabak' dalam dialek Pahang?",
    options: ["Rumah", "Pondok memasak", "Dapur", "Bilik"],
    correctAnswer: 1,
    explanation: "'Sabak' bermaksud 'Pondok memasak' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq3",
    question: "Apakah maksud 'balan' dalam dialek Pahang?",
    options: ["Bilik air", "Tempat cuci pinggan", "Dapur", "Tandas"],
    correctAnswer: 1,
    explanation: "'Balan' bermaksud 'Tempat cuci pinggan' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq4",
    question: "Apakah maksud 'repih' dalam dialek Pahang?",
    options: ["Menanam", "Membersihkan batas tanaman", "Menuai", "Menyiram"],
    correctAnswer: 1,
    explanation: "'Repih' bermaksud 'Membersihkan batas tanaman' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq5",
    question: "Apakah maksud 'bakuh' dalam dialek Pahang?",
    options: ["Bongkar tanah dengan cangkul", "Menanam", "Menyiram", "Menuai"],
    correctAnswer: 0,
    explanation: "'Bakuh' bermaksud 'Bongkar tanah dengan cangkul' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq6",
    question: "Apakah maksud 'perun' dalam dialek Pahang?",
    options: ["Masak", "Membakar", "Goreng", "Rebus"],
    correctAnswer: 1,
    explanation: "'Perun' bermaksud 'Membakar' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq7",
    question: "Apakah maksud 'loto' dalam dialek Pahang?",
    options: ["Menanam", "Menghancur tanah", "Menyiram", "Menuai"],
    correctAnswer: 1,
    explanation: "'Loto' bermaksud 'Menghancur tanah' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq8",
    question: "Apakah maksud 'senduh' dalam dialek Pahang?",
    options: ["Potong", "Ikat", "Lepas", "Cabut"],
    correctAnswer: 1,
    explanation: "'Senduh' bermaksud 'Ikat' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq9",
    question: "Apakah maksud 'renceh' dalam dialek Pahang?",
    options: ["Potong lurus", "Potong menyerong", "Potong kecil", "Potong besar"],
    correctAnswer: 1,
    explanation: "'Renceh' bermaksud 'Potong menyerong' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq10",
    question: "Apakah maksud 'sia' dalam dialek Pahang?",
    options: ["Biarkan air panas", "Biarkan minyak panas berbunyi", "Sejukkan minyak", "Tutup api"],
    correctAnswer: 1,
    explanation: "'Sia' bermaksud 'Biarkan minyak panas berbunyi' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq11",
    question: "Apakah maksud 'merobok' dalam dialek Pahang?",
    options: ["Mendidih", "Berbuih kerana panas", "Sejuk", "Hangat"],
    correctAnswer: 1,
    explanation: "'Merobok' bermaksud 'Berbuih kerana panas' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq12",
    question: "Apakah maksud 'mereneh' dalam dialek Pahang?",
    options: ["Mendidih kuat", "Mendidih perlahan", "Sejuk", "Panas"],
    correctAnswer: 1,
    explanation: "'Mereneh' bermaksud 'Mendidih perlahan' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq13",
    question: "Apakah maksud 'cering' dalam dialek Pahang?",
    options: ["Cantik", "Siat/Koyak", "Bersih", "Kotor"],
    correctAnswer: 1,
    explanation: "'Cering' bermaksud 'Siat' atau 'Koyak' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq14",
    question: "Apakah maksud 'roncoh' dalam dialek Pahang?",
    options: ["Petik", "Jolok", "Cabut", "Tanam"],
    correctAnswer: 1,
    explanation: "'Roncoh' bermaksud 'Jolok' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq15",
    question: "Apakah maksud 'rembat' dalam dialek Pahang?",
    options: ["Bina rumah", "Bina pelantar / Sepak kuat", "Bina tangga", "Bina jambatan"],
    correctAnswer: 1,
    explanation: "'Rembat' bermaksud 'Bina pelantar' atau 'Sepak kuat' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq16",
    question: "Apakah maksud 'kincah' dalam dialek Pahang?",
    options: ["Basuh dengan tangan", "Celup/Gosok dengan kaki", "Perah", "Rendam"],
    correctAnswer: 1,
    explanation: "'Kincah' bermaksud 'Celup/Gosok dengan kaki' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq17",
    question: "Apakah maksud 'hupor' dalam dialek Pahang?",
    options: ["Gosok perlahan", "Gosok kuat", "Lap", "Sapu"],
    correctAnswer: 1,
    explanation: "'Hupor' bermaksud 'Gosok kuat' dalam dialek Pahang.",
    state: "Pahang",
  },
];

// ============================================
// DATA KUIZ - CAMPURAN (MIXED)
// ============================================

export const mixedQuiz: QuizQuestion[] = [
  {
    id: "mq1",
    question: "Perkataan 'kawe' untuk 'saya' adalah dari dialek negeri mana?",
    options: ["Terengganu", "Kelantan", "Pahang", "Kedah"],
    correctAnswer: 1,
    explanation: "'Kawe' adalah kata ganti 'Saya' dalam dialek Kelantan.",
    state: "Campuran",
  },
  {
    id: "mq2",
    question: "Perkataan 'ambo' untuk 'saya' adalah dari dialek negeri mana?",
    options: ["Kelantan", "Terengganu", "Pahang", "Perlis"],
    correctAnswer: 1,
    explanation: "'Ambo' adalah kata ganti 'Saya' dalam dialek Terengganu.",
    state: "Campuran",
  },
  {
    id: "mq3",
    question: "Perkataan 'pitih' digunakan dalam dialek negeri mana?",
    options: ["Kelantan sahaja", "Terengganu sahaja", "Kelantan dan Terengganu", "Pahang sahaja"],
    correctAnswer: 2,
    explanation: "'Pitih' bermaksud 'Duit' dan digunakan dalam dialek Kelantan dan Terengganu.",
    state: "Campuran",
  },
  {
    id: "mq4",
    question: "'Tubik' bermaksud 'keluar' dalam dialek negeri mana?",
    options: ["Kelantan sahaja", "Kelantan dan Terengganu", "Pahang sahaja", "Semua negeri"],
    correctAnswer: 1,
    explanation: "'Tubik' digunakan dalam dialek Kelantan dan Terengganu.",
    state: "Campuran",
  },
  {
    id: "mq5",
    question: "Perkataan 'kome' untuk 'awak/kamu' adalah dari dialek?",
    options: ["Kelantan", "Terengganu", "Pahang", "Kedah"],
    correctAnswer: 2,
    explanation: "'Kome' adalah kata ganti 'Awak/Kamu' dalam dialek Pahang.",
    state: "Campuran",
  },
  {
    id: "mq6",
    question: "'Bakpo' dan 'bakpe' bermaksud 'kenapa'. Masing-masing dari dialek mana?",
    options: ["Bakpo-Terengganu, Bakpe-Kelantan", "Bakpo-Kelantan, Bakpe-Terengganu", "Kedua-duanya Kelantan", "Kedua-duanya Terengganu"],
    correctAnswer: 1,
    explanation: "'Bakpo' dari Kelantan, 'Bakpe' dari Terengganu.",
    state: "Campuran",
  },
  {
    id: "mq7",
    question: "'Gak' dan 'gok' bermaksud 'juga'. Masing-masing dari dialek mana?",
    options: ["Gak-Terengganu, Gok-Kelantan", "Gak-Kelantan, Gok-Terengganu", "Kedua-duanya Kelantan", "Kedua-duanya Pahang"],
    correctAnswer: 1,
    explanation: "'Gak' dari Kelantan, 'Gok' dari Terengganu - kedua-duanya bermaksud 'Juga'.",
    state: "Campuran",
  },
  {
    id: "mq8",
    question: "Perkataan mana yang HANYA wujud dalam dialek Pahang?",
    options: ["gi", "tubik", "repih", "pitih"],
    correctAnswer: 2,
    explanation: "'Repih' (membersihkan batas tanaman) adalah perkataan khas dialek Pahang.",
    state: "Campuran",
  },
  {
    id: "mq9",
    question: "Dialek negeri mana yang menggunakan 'mAneh' dan 'mAlAh' untuk kata adjektif?",
    options: ["Kelantan", "Terengganu", "Pahang", "Kedah"],
    correctAnswer: 1,
    explanation: "Terengganu menggunakan pola 'mA_A_' untuk kata adjektif seperti mAneh (manis) dan mAlAh (malas).",
    state: "Campuran",
  },
  {
    id: "mq10",
    question: "'Hok' bermaksud 'yang' dalam dialek negeri mana?",
    options: ["Kelantan sahaja", "Terengganu sahaja", "Kelantan dan Terengganu", "Pahang sahaja"],
    correctAnswer: 2,
    explanation: "'Hok' bermaksud 'Yang' dan digunakan dalam kedua-dua dialek Kelantan dan Terengganu.",
    state: "Campuran",
  },
  {
    id: "mq11",
    question: "Perkataan 'tokleh' (tidak boleh) adalah dari dialek?",
    options: ["Kelantan", "Terengganu", "Pahang", "Semua negeri"],
    correctAnswer: 0,
    explanation: "'Tokleh' bermaksud 'Tidak boleh' dalam dialek Kelantan.",
    state: "Campuran",
  },
  {
    id: "mq12",
    question: "Perkataan manakah yang berkaitan dengan memasak dan HANYA ada dalam dialek Pahang?",
    options: ["merobok", "kupah", "gi", "pitih"],
    correctAnswer: 0,
    explanation: "'Merobok' (berbuih kerana panas) adalah perkataan khas Pahang berkaitan memasak.",
    state: "Campuran",
  },
  {
    id: "mq13",
    question: "'Sabak' dan 'balan' adalah perkataan dari dialek mana?",
    options: ["Kelantan", "Terengganu", "Pahang", "Kedah"],
    correctAnswer: 2,
    explanation: "'Sabak' (pondok memasak) dan 'Balan' (tempat cuci pinggan) dari dialek Pahang.",
    state: "Campuran",
  },
  {
    id: "mq14",
    question: "Kata adjektif untuk 'pahit' dalam dialek Kelantan ialah?",
    options: ["pahit", "pahik", "pait", "paik"],
    correctAnswer: 1,
    explanation: "Kelantan menggunakan 'pahik' untuk bermaksud 'Pahit'.",
    state: "Campuran",
  },
  {
    id: "mq15",
    question: "Antara perkataan berikut, yang manakah TIDAK berkaitan dengan pertanian/tanah?",
    options: ["repih", "bakuh", "loto", "tikuh"],
    correctAnswer: 3,
    explanation: "'Tikuh' bermaksud 'Tikus' (haiwan), manakala yang lain berkaitan pertanian dalam dialek Pahang.",
    state: "Campuran",
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Dapatkan semua frasa untuk negeri tertentu
 */
export const getPhrasesForState = (state: "kelantan" | "terengganu" | "pahang"): Phrase[] => {
  const phraseMap = {
    kelantan: kelantanPhrases,
    terengganu: terengganuPhrases,
    pahang: pahangPhrases,
  };
  return phraseMap[state] || [];
};

/**
 * Dapatkan semua soalan kuiz untuk jenis tertentu
 */
export const getQuizQuestions = (
  type: "kelantan" | "terengganu" | "pahang" | "mixed"
): QuizQuestion[] => {
  const quizMap = {
    kelantan: kelantanQuiz,
    terengganu: terengganuQuiz,
    pahang: pahangQuiz,
    mixed: mixedQuiz,
  };
  return quizMap[type] || [];
};

/**
 * Dapatkan jumlah frasa untuk semua negeri
 */
export const getTotalPhrasesCount = () => {
  return kelantanPhrases.length + terengganuPhrases.length + pahangPhrases.length;
};

/**
 * Dapatkan statistik data
 */
export const getDataStats = () => {
  return {
    kelantan: {
      phrases: kelantanPhrases.length,
      quizzes: kelantanQuiz.length,
    },
    terengganu: {
      phrases: terengganuPhrases.length,
      quizzes: terengganuQuiz.length,
    },
    pahang: {
      phrases: pahangPhrases.length,
      quizzes: pahangQuiz.length,
    },
    mixed: {
      quizzes: mixedQuiz.length,
    },
    total: {
      phrases: getTotalPhrasesCount(),
      quizzes: kelantanQuiz.length + terengganuQuiz.length + pahangQuiz.length + mixedQuiz.length,
    },
  };
};