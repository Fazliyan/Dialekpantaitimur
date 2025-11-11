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
  {
    id: "k1",
    dialect: "Tae",
    standard: "Tidak",
    pronunciation: "tae (sama seperti sebutan)",
    category: "Kata Bantu",
    example: "Tae nok gi mana pun - Tidak mahu pergi ke mana-mana",
    audioUrl: "", // Masukkan URL audio di sini
  },
  {
    id: "k2",
    dialect: "Nok",
    standard: "Mahu/Hendak",
    pronunciation: "nok (seperti 'knock' dalam English)",
    category: "Kata Kerja",
    example: "Nok makan gapo? - Mahu makan apa?",
    audioUrl: "",
  },
  {
    id: "k3",
    dialect: "Gapo",
    standard: "Apa",
    pronunciation: "ga-po",
    category: "Kata Tanya",
    example: "Gapo kabo? - Apa khabar?",
    audioUrl: "",
  },
  {
    id: "k4",
    dialect: "Kito",
    standard: "Kita",
    pronunciation: "ki-to",
    category: "Kata Ganti",
    example: "Kito gi sama-sama - Kita pergi bersama-sama",
    audioUrl: "",
  },
  {
    id: "k5",
    dialect: "Demo",
    standard: "Mereka",
    pronunciation: "de-mo",
    category: "Kata Ganti",
    example: "Demo ni baik hati - Mereka ini baik hati",
    audioUrl: "",
  },
  // TAMBAH LAGI PERKATAAN KELANTAN DI SINI
  // {
  //   id: "k6",
  //   dialect: "Ore",
  //   standard: "Orang",
  //   pronunciation: "o-re",
  //   category: "Kata Nama",
  //   example: "Ore Kelantan suko makan nasi kerabu - Orang Kelantan suka makan nasi kerabu",
  //   audioUrl: "",
  // },
];

// ============================================
// DATA PEMBELAJARAN - TERENGGANU
// ============================================

export const terengganuPhrases: Phrase[] = [
  {
    id: "t1",
    dialect: "Ganung",
    standard: "Gunung",
    pronunciation: "ga-nung",
    category: "Kata Nama",
    example: "Ganung tu tinggi - Gunung itu tinggi",
    audioUrl: "",
  },
  {
    id: "t2",
    dialect: "Bakpe",
    standard: "Mengapa",
    pronunciation: "bak-pe",
    category: "Kata Tanya",
    example: "Bakpe demo tak datang? - Mengapa mereka tidak datang?",
    audioUrl: "",
  },
  {
    id: "t3",
    dialect: "Mung",
    standard: "Engkau/Kamu",
    pronunciation: "mung (seperti 'moo' + 'ng')",
    category: "Kata Ganti",
    example: "Mung gi mana? - Kamu pergi ke mana?",
    audioUrl: "",
  },
  {
    id: "t4",
    dialect: "Dok",
    standard: "Sedang/Ada",
    pronunciation: "dok (seperti sebutan)",
    category: "Kata Bantu",
    example: "Dia dok makan - Dia sedang makan",
    audioUrl: "",
  },
  {
    id: "t5",
    dialect: "Sapa",
    standard: "Siapa",
    pronunciation: "sa-pa",
    category: "Kata Tanya",
    example: "Sapa nama mung? - Siapa nama kamu?",
    audioUrl: "",
  },
  // TAMBAH LAGI PERKATAAN TERENGGANU DI SINI
];

// ============================================
// DATA PEMBELAJARAN - PAHANG
// ============================================

export const pahangPhrases: Phrase[] = [
  {
    id: "p1",
    dialect: "Mano",
    standard: "Mana",
    pronunciation: "ma-no",
    category: "Kata Tanya",
    example: "Mano rumah hang? - Mana rumah kamu?",
    audioUrl: "",
  },
  {
    id: "p2",
    dialect: "Hang",
    standard: "Kamu",
    pronunciation: "hang (seperti sebutan)",
    category: "Kata Ganti",
    example: "Hang nak gi mana? - Kamu mahu pergi ke mana?",
    audioUrl: "",
  },
  {
    id: "p3",
    dialect: "Nak",
    standard: "Mahu/Hendak",
    pronunciation: "nak (seperti sebutan)",
    category: "Kata Kerja",
    example: "Nak makan apa? - Mahu makan apa?",
    audioUrl: "",
  },
  {
    id: "p4",
    dialect: "Doh",
    standard: "Sudah",
    pronunciation: "doh (seperti 'dough' dalam English)",
    category: "Kata Bantu",
    example: "Doh makan ke? - Sudah makan?",
    audioUrl: "",
  },
  {
    id: "p5",
    dialect: "Bilo",
    standard: "Bila",
    pronunciation: "bi-lo",
    category: "Kata Tanya",
    example: "Bilo nak balik? - Bila mahu balik?",
    audioUrl: "",
  },
  // TAMBAH LAGI PERKATAAN PAHANG DI SINI
];

// ============================================
// DATA KUIZ - KELANTAN
// ============================================

export const kelantanQuiz: QuizQuestion[] = [
  {
    id: "kq1",
    question: "Apakah maksud perkataan 'Tae' dalam dialek Kelantan?",
    options: ["Ya", "Tidak", "Mungkin", "Hendak"],
    correctAnswer: 1,
    explanation: "'Tae' bermaksud 'Tidak' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq2",
    question: "Bagaimana anda bertanya 'Mahu makan apa?' dalam dialek Kelantan?",
    options: ["Nak makan apa?", "Nok makan gapo?", "Mung makan apa?", "Dok makan apa?"],
    correctAnswer: 1,
    explanation: "Dalam Kelantan, 'Nok' = Mahu dan 'Gapo' = Apa.",
    state: "Kelantan",
  },
  {
    id: "kq3",
    question: "Apakah maksud 'Demo' dalam dialek Kelantan?",
    options: ["Kita", "Kamu", "Mereka", "Dia"],
    correctAnswer: 2,
    explanation: "'Demo' adalah kata ganti untuk 'Mereka' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq4",
    question: "Apakah maksud 'Kito' dalam dialek Kelantan?",
    options: ["Saya", "Kita", "Kami", "Mereka"],
    correctAnswer: 1,
    explanation: "'Kito' bermaksud 'Kita' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  {
    id: "kq5",
    question: "Apakah maksud 'Gapo kabo?' dalam dialek Kelantan?",
    options: ["Apa nama?", "Apa khabar?", "Apa buat?", "Apa cerita?"],
    correctAnswer: 1,
    explanation: "'Gapo kabo?' bermaksud 'Apa khabar?' dalam dialek Kelantan.",
    state: "Kelantan",
  },
  // TAMBAH LAGI SOALAN KELANTAN DI SINI
];

// ============================================
// DATA KUIZ - TERENGGANU
// ============================================

export const terengganuQuiz: QuizQuestion[] = [
  {
    id: "tq1",
    question: "Apakah maksud 'Bakpe' dalam dialek Terengganu?",
    options: ["Apa", "Mengapa", "Bila", "Mana"],
    correctAnswer: 1,
    explanation: "'Bakpe' bermaksud 'Mengapa' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq2",
    question: "Bagaimana sebutan perkataan 'Gunung' dalam dialek Terengganu?",
    options: ["Gunong", "Ganung", "Ganing", "Guning"],
    correctAnswer: 1,
    explanation: "Dalam Terengganu, 'Gunung' disebut sebagai 'Ganung'.",
    state: "Terengganu",
  },
  {
    id: "tq3",
    question: "Apakah maksud 'Mung' dalam dialek Terengganu?",
    options: ["Saya", "Kamu", "Dia", "Kita"],
    correctAnswer: 1,
    explanation: "'Mung' adalah kata ganti untuk 'Kamu/Engkau' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq4",
    question: "Apakah maksud 'Dok' dalam dialek Terengganu?",
    options: ["Tidak", "Sedang", "Sudah", "Boleh"],
    correctAnswer: 1,
    explanation: "'Dok' bermaksud 'Sedang' atau 'Ada' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  {
    id: "tq5",
    question: "Apakah maksud 'Sapa nama mung?' dalam dialek Terengganu?",
    options: ["Apa nama kamu?", "Siapa nama kamu?", "Mana nama kamu?", "Bila nama kamu?"],
    correctAnswer: 1,
    explanation: "'Sapa' bermaksud 'Siapa' dalam dialek Terengganu.",
    state: "Terengganu",
  },
  // TAMBAH LAGI SOALAN TERENGGANU DI SINI
];

// ============================================
// DATA KUIZ - PAHANG
// ============================================

export const pahangQuiz: QuizQuestion[] = [
  {
    id: "pq1",
    question: "Apakah maksud 'Hang' dalam dialek Pahang?",
    options: ["Saya", "Kamu", "Dia", "Mereka"],
    correctAnswer: 1,
    explanation: "'Hang' bermaksud 'Kamu' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq2",
    question: "Bagaimana anda bertanya 'Sudah makan?' dalam dialek Pahang?",
    options: ["Doh makan?", "Dok makan?", "Dak makan?", "Deh makan?"],
    correctAnswer: 0,
    explanation: "'Doh' bermaksud 'Sudah' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq3",
    question: "Apakah maksud 'Mano' dalam dialek Pahang?",
    options: ["Apa", "Bila", "Mana", "Siapa"],
    correctAnswer: 2,
    explanation: "'Mano' bermaksud 'Mana' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq4",
    question: "Apakah maksud 'Nak' dalam dialek Pahang?",
    options: ["Tidak", "Mahu", "Sudah", "Boleh"],
    correctAnswer: 1,
    explanation: "'Nak' bermaksud 'Mahu/Hendak' dalam dialek Pahang.",
    state: "Pahang",
  },
  {
    id: "pq5",
    question: "Apakah maksud 'Bilo nak balik?' dalam dialek Pahang?",
    options: ["Apa mahu balik?", "Bila mahu balik?", "Mana mahu balik?", "Siapa mahu balik?"],
    correctAnswer: 1,
    explanation: "'Bilo' bermaksud 'Bila' dalam dialek Pahang.",
    state: "Pahang",
  },
  // TAMBAH LAGI SOALAN PAHANG DI SINI
];

// ============================================
// DATA KUIZ - CAMPURAN (MIXED)
// ============================================

export const mixedQuiz: QuizQuestion[] = [
  {
    id: "mq1",
    question: "Perkataan 'Tae' digunakan dalam dialek negeri mana?",
    options: ["Terengganu", "Kelantan", "Pahang", "Semua negeri"],
    correctAnswer: 1,
    explanation: "'Tae' adalah ciri khas dialek Kelantan.",
    state: "Campuran",
  },
  {
    id: "mq2",
    question: "Dalam dialek mana 'Ganung' digunakan untuk 'Gunung'?",
    options: ["Kelantan", "Pahang", "Terengganu", "Semua negeri"],
    correctAnswer: 2,
    explanation: "'Ganung' adalah sebutan khas Terengganu.",
    state: "Campuran",
  },
  {
    id: "mq3",
    question: "Perkataan 'Hang' untuk 'Kamu' adalah dari dialek?",
    options: ["Kelantan", "Terengganu", "Pahang", "Kedah"],
    correctAnswer: 2,
    explanation: "'Hang' digunakan dalam dialek Pahang.",
    state: "Campuran",
  },
  {
    id: "mq4",
    question: "Bagaimana orang Kelantan sebut 'Apa'?",
    options: ["Apo", "Gapo", "Ape", "Appe"],
    correctAnswer: 1,
    explanation: "Orang Kelantan sebut 'Apa' sebagai 'Gapo'.",
    state: "Campuran",
  },
  {
    id: "mq5",
    question: "'Bakpe' bermaksud 'Mengapa' dalam dialek?",
    options: ["Kelantan", "Terengganu", "Pahang", "Perlis"],
    correctAnswer: 1,
    explanation: "'Bakpe' adalah dari dialek Terengganu.",
    state: "Campuran",
  },
  // TAMBAH LAGI SOALAN CAMPURAN DI SINI
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
