const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: [
      "Pashto",
      "Uzbek",
      "Turkmen"
    ],
    population: 38928341,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    currencies: [
      {
        code: "AFN",
        name: "Afghan afghani",
        symbol: "؋"
      }
    ]
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: [
      "Swedish"
    ],
    population: 28875,
    flag: "https://flagcdn.com/ax.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: [
      "Albanian"
    ],
    population: 2837743,
    flag: "https://flagcdn.com/al.svg",
    currencies: [
      {
        code: "ALL",
        name: "Albanian lek",
        symbol: "L"
      }
    ]
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: [
      "Arabic"
    ],
    population: 43851043,
    flag: "https://flagcdn.com/dz.svg",
    currencies: [
      {
        code: "DZD",
        name: "Algerian dinar",
        symbol: "د.ج"
      }
    ]
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: [
      "English",
      "Samoan"
    ],
    population: 55197,
    flag: "https://flagcdn.com/as.svg",
    currencies: [
      {
        code: "USD",
        name: "United States Dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: [
      "Catalan"
    ],
    population: 77265,
    flag: "https://flagcdn.com/ad.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: [
      "Portuguese"
    ],
    population: 32866268,
    flag: "https://flagcdn.com/ao.svg",
    currencies: [
      {
        code: "AOA",
        name: "Angolan kwanza",
        symbol: "Kz"
      }
    ]
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: [
      "English"
    ],
    population: 13452,
    flag: "https://flagcdn.com/ai.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Antarctica",
    languages: [
      "English",
      "Russian"
    ],
    population: 1000,
    flag: "https://flagcdn.com/aq.svg"
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: [
      "English"
    ],
    population: 97928,
    flag: "https://flagcdn.com/ag.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: [
      "Spanish",
      "Guaraní"
    ],
    population: 45376763,
    flag: "https://flagcdn.com/ar.svg",
    currencies: [
      {
        code: "ARS",
        name: "Argentine peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: [
      "Armenian"
    ],
    population: 2963234,
    flag: "https://flagcdn.com/am.svg",
    currencies: [
      {
        code: "AMD",
        name: "Armenian dram",
        symbol: "֏"
      }
    ]
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    languages: [
      "Dutch",
      "(Eastern) Punjabi"
    ],
    population: 106766,
    flag: "https://flagcdn.com/aw.svg",
    currencies: [
      {
        code: "AWG",
        name: "Aruban florin",
        symbol: "ƒ"
      }
    ]
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: [
      "English"
    ],
    population: 25687041,
    flag: "https://flagcdn.com/au.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Austria",
    capital: "Vienna",
    languages: [
      "German"
    ],
    population: 8917205,
    flag: "https://flagcdn.com/at.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    languages: [
      "Azerbaijani"
    ],
    population: 10110116,
    flag: "https://flagcdn.com/az.svg",
    currencies: [
      {
        code: "AZN",
        name: "Azerbaijani manat",
        symbol: "₼"
      }
    ]
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: [
      "English"
    ],
    population: 393248,
    flag: "https://flagcdn.com/bs.svg",
    currencies: [
      {
        code: "BSD",
        name: "Bahamian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Bahrain",
    capital: "Manama",
    languages: [
      "Arabic"
    ],
    population: 1701583,
    flag: "https://flagcdn.com/bh.svg",
    currencies: [
      {
        code: "BHD",
        name: "Bahraini dinar",
        symbol: ".د.ب"
      }
    ]
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    languages: [
      "Bengali"
    ],
    population: 164689383,
    flag: "https://flagcdn.com/bd.svg",
    currencies: [
      {
        code: "BDT",
        name: "Bangladeshi taka",
        symbol: "৳"
      }
    ]
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    languages: [
      "English"
    ],
    population: 287371,
    flag: "https://flagcdn.com/bb.svg",
    currencies: [
      {
        code: "BBD",
        name: "Barbadian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Belarus",
    capital: "Minsk",
    languages: [
      "Belarusian",
      "Russian"
    ],
    population: 9398861,
    flag: "https://flagcdn.com/by.svg",
    currencies: [
      {
        code: "BYN",
        name: "New Belarusian ruble",
        symbol: "Br"
      },
      {
        code: "BYR",
        name: "Old Belarusian ruble",
        symbol: "Br"
      }
    ]
  },
  {
    name: "Belgium",
    capital: "Brussels",
    languages: [
      "Dutch",
      "French",
      "German"
    ],
    population: 11555997,
    flag: "https://flagcdn.com/be.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Belize",
    capital: "Belmopan",
    languages: [
      "English",
      "Spanish"
    ],
    population: 397621,
    flag: "https://flagcdn.com/bz.svg",
    currencies: [
      {
        code: "BZD",
        name: "Belize dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Benin",
    capital: "Porto-Novo",
    languages: [
      "French"
    ],
    population: 12123198,
    flag: "https://flagcdn.com/bj.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Bermuda",
    capital: "Hamilton",
    languages: [
      "English"
    ],
    population: 63903,
    flag: "https://flagcdn.com/bm.svg",
    currencies: [
      {
        code: "BMD",
        name: "Bermudian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    languages: [
      "Dzongkha"
    ],
    population: 771612,
    flag: "https://flagcdn.com/bt.svg",
    currencies: [
      {
        code: "BTN",
        name: "Bhutanese ngultrum",
        symbol: "Nu."
      },
      {
        code: "INR",
        name: "Indian rupee",
        symbol: "₹"
      }
    ]
  },
  {
    name: "Bolivia (Plurinational State of)",
    capital: "Sucre",
    languages: [
      "Spanish",
      "Aymara",
      "Quechua"
    ],
    population: 11673029,
    flag: "https://flagcdn.com/bo.svg",
    currencies: [
      {
        code: "BOB",
        name: "Bolivian boliviano",
        symbol: "Bs."
      }
    ]
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    capital: "Kralendijk",
    languages: [
      "Dutch"
    ],
    population: 17408,
    flag: "https://flagcdn.com/bq.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    languages: [
      "Bosnian",
      "Croatian",
      "Serbian"
    ],
    population: 3280815,
    flag: "https://flagcdn.com/ba.svg",
    currencies: [
      {
        code: "BAM",
        name: "Bosnia and Herzegovina convertible mark",
        symbol: "KM"
      }
    ]
  },
  {
    name: "Botswana",
    capital: "Gaborone",
    languages: [
      "English",
      "Tswana"
    ],
    population: 2351625,
    flag: "https://flagcdn.com/bw.svg",
    currencies: [
      {
        code: "BWP",
        name: "Botswana pula",
        symbol: "P"
      }
    ]
  },
  {
    name: "Bouvet Island",
    languages: [
      "Norwegian",
      "Norwegian Bokmål",
      "Norwegian Nynorsk"
    ],
    population: 0,
    flag: "https://flagcdn.com/bv.svg",
    currencies: [
      {
        code: "NOK",
        name: "Norwegian krone",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Brazil",
    capital: "Brasília",
    languages: [
      "Portuguese"
    ],
    population: 212559409,
    flag: "https://flagcdn.com/br.svg",
    currencies: [
      {
        code: "BRL",
        name: "Brazilian real",
        symbol: "R$"
      }
    ]
  },
  {
    name: "British Indian Ocean Territory",
    capital: "Diego Garcia",
    languages: [
      "English"
    ],
    population: 3000,
    flag: "https://flagcdn.com/io.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "United States Minor Outlying Islands",
    languages: [
      "English"
    ],
    population: 300,
    flag: "https://flagcdn.com/um.svg",
    currencies: [
      {
        code: "GBP",
        name: "British pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Virgin Islands (British)",
    capital: "Road Town",
    languages: [
      "English"
    ],
    population: 30237,
    flag: "https://flagcdn.com/vg.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Virgin Islands (U.S.)",
    capital: "Charlotte Amalie",
    languages: [
      "English"
    ],
    population: 106290,
    flag: "https://flagcdn.com/vi.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Brunei Darussalam",
    capital: "Bandar Seri Begawan",
    languages: [
      "Malay"
    ],
    population: 437483,
    flag: "https://flagcdn.com/bn.svg",
    currencies: [
      {
        code: "BND",
        name: "Brunei dollar",
        symbol: "$"
      },
      {
        code: "SGD",
        name: "Singapore dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
    languages: [
      "Bulgarian"
    ],
    population: 6927288,
    flag: "https://flagcdn.com/bg.svg",
    currencies: [
      {
        code: "BGN",
        name: "Bulgarian lev",
        symbol: "лв"
      }
    ]
  },
  {
    name: "Burkina Faso",
    capital: "Ouagadougou",
    languages: [
      "French",
      "Fula"
    ],
    population: 20903278,
    flag: "https://flagcdn.com/bf.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Burundi",
    capital: "Gitega",
    languages: [
      "French",
      "Kirundi"
    ],
    population: 11890781,
    flag: "https://flagcdn.com/bi.svg",
    currencies: [
      {
        code: "BIF",
        name: "Burundian franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Cambodia",
    capital: "Phnom Penh",
    languages: [
      "Khmer"
    ],
    population: 16718971,
    flag: "https://flagcdn.com/kh.svg",
    currencies: [
      {
        code: "KHR",
        name: "Cambodian riel",
        symbol: "៛"
      },
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Cameroon",
    capital: "Yaoundé",
    languages: [
      "English",
      "French"
    ],
    population: 26545864,
    flag: "https://flagcdn.com/cm.svg",
    currencies: [
      {
        code: "XAF",
        name: "Central African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Canada",
    capital: "Ottawa",
    languages: [
      "English",
      "French"
    ],
    population: 38005238,
    flag: "https://flagcdn.com/ca.svg",
    currencies: [
      {
        code: "CAD",
        name: "Canadian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Cabo Verde",
    capital: "Praia",
    languages: [
      "Portuguese"
    ],
    population: 555988,
    flag: "https://flagcdn.com/cv.svg",
    currencies: [
      {
        code: "CVE",
        name: "Cape Verdean escudo",
        symbol: "Esc"
      }
    ]
  },
  {
    name: "Cayman Islands",
    capital: "George Town",
    languages: [
      "English"
    ],
    population: 65720,
    flag: "https://flagcdn.com/ky.svg",
    currencies: [
      {
        code: "KYD",
        name: "Cayman Islands dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Central African Republic",
    capital: "Bangui",
    languages: [
      "French",
      "Sango"
    ],
    population: 4829764,
    flag: "https://flagcdn.com/cf.svg",
    currencies: [
      {
        code: "XAF",
        name: "Central African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Chad",
    capital: "N'Djamena",
    languages: [
      "French",
      "Arabic"
    ],
    population: 16425859,
    flag: "https://flagcdn.com/td.svg",
    currencies: [
      {
        code: "XAF",
        name: "Central African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Chile",
    capital: "Santiago",
    languages: [
      "Spanish"
    ],
    population: 19116209,
    flag: "https://flagcdn.com/cl.svg",
    currencies: [
      {
        code: "CLP",
        name: "Chilean peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "China",
    capital: "Beijing",
    languages: [
      "Chinese"
    ],
    population: 1402112000,
    flag: "https://flagcdn.com/cn.svg",
    currencies: [
      {
        code: "CNY",
        name: "Chinese yuan",
        symbol: "¥"
      }
    ]
  },
  {
    name: "Christmas Island",
    capital: "Flying Fish Cove",
    languages: [
      "English"
    ],
    population: 2072,
    flag: "https://flagcdn.com/cx.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Cocos (Keeling) Islands",
    capital: "West Island",
    languages: [
      "English"
    ],
    population: 550,
    flag: "https://flagcdn.com/cc.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    languages: [
      "Spanish"
    ],
    population: 50882884,
    flag: "https://flagcdn.com/co.svg",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "Comoros",
    capital: "Moroni",
    languages: [
      "Arabic",
      "French"
    ],
    population: 869595,
    flag: "https://flagcdn.com/km.svg",
    currencies: [
      {
        code: "KMF",
        name: "Comorian franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Congo",
    capital: "Brazzaville",
    languages: [
      "French",
      "Lingala"
    ],
    population: 5518092,
    flag: "https://flagcdn.com/cg.svg",
    currencies: [
      {
        code: "XAF",
        name: "Central African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Congo (Democratic Republic of the)",
    capital: "Kinshasa",
    languages: [
      "French",
      "Lingala",
      "Kongo",
      "Swahili",
      "Luba-Katanga"
    ],
    population: 89561404,
    flag: "https://flagcdn.com/cd.svg",
    currencies: [
      {
        code: "CDF",
        name: "Congolese franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Cook Islands",
    capital: "Avarua",
    languages: [
      "English",
      "Cook Islands Māori"
    ],
    population: 18100,
    flag: "https://flagcdn.com/ck.svg",
    currencies: [
      {
        code: "NZD",
        name: "New Zealand dollar",
        symbol: "$"
      },
      {
        code: "CKD",
        name: "Cook Islands dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Costa Rica",
    capital: "San José",
    languages: [
      "Spanish"
    ],
    population: 5094114,
    flag: "https://flagcdn.com/cr.svg",
    currencies: [
      {
        code: "CRC",
        name: "Costa Rican colón",
        symbol: "₡"
      }
    ]
  },
  {
    name: "Croatia",
    capital: "Zagreb",
    languages: [
      "Croatian"
    ],
    population: 4047200,
    flag: "https://flagcdn.com/hr.svg",
    currencies: [
      {
        code: "HRK",
        name: "Croatian kuna",
        symbol: "kn"
      }
    ]
  },
  {
    name: "Cuba",
    capital: "Havana",
    languages: [
      "Spanish"
    ],
    population: 11326616,
    flag: "https://flagcdn.com/cu.svg",
    currencies: [
      {
        code: "CUC",
        name: "Cuban convertible peso",
        symbol: "$"
      },
      {
        code: "CUP",
        name: "Cuban peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "Curaçao",
    capital: "Willemstad",
    languages: [
      "Dutch",
      "(Eastern) Punjabi",
      "English"
    ],
    population: 155014,
    flag: "https://flagcdn.com/cw.svg",
    currencies: [
      {
        code: "ANG",
        name: "Netherlands Antillean guilder",
        symbol: "ƒ"
      }
    ]
  },
  {
    name: "Cyprus",
    capital: "Nicosia",
    languages: [
      "Greek (modern)",
      "Turkish",
      "Armenian"
    ],
    population: 1207361,
    flag: "https://flagcdn.com/cy.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Czech Republic",
    capital: "Prague",
    languages: [
      "Czech",
      "Slovak"
    ],
    population: 10698896,
    flag: "https://flagcdn.com/cz.svg",
    currencies: [
      {
        code: "CZK",
        name: "Czech koruna",
        symbol: "Kč"
      }
    ]
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    languages: [
      "Danish"
    ],
    population: 5831404,
    flag: "https://flagcdn.com/dk.svg",
    currencies: [
      {
        code: "DKK",
        name: "Danish krone",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Djibouti",
    capital: "Djibouti",
    languages: [
      "French",
      "Arabic"
    ],
    population: 988002,
    flag: "https://flagcdn.com/dj.svg",
    currencies: [
      {
        code: "DJF",
        name: "Djiboutian franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Dominica",
    capital: "Roseau",
    languages: [
      "English"
    ],
    population: 71991,
    flag: "https://flagcdn.com/dm.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Dominican Republic",
    capital: "Santo Domingo",
    languages: [
      "Spanish"
    ],
    population: 10847904,
    flag: "https://flagcdn.com/do.svg",
    currencies: [
      {
        code: "DOP",
        name: "Dominican peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "Ecuador",
    capital: "Quito",
    languages: [
      "Spanish"
    ],
    population: 17643060,
    flag: "https://flagcdn.com/ec.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Egypt",
    capital: "Cairo",
    languages: [
      "Arabic"
    ],
    population: 102334403,
    flag: "https://flagcdn.com/eg.svg",
    currencies: [
      {
        code: "EGP",
        name: "Egyptian pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "El Salvador",
    capital: "San Salvador",
    languages: [
      "Spanish"
    ],
    population: 6486201,
    flag: "https://flagcdn.com/sv.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Equatorial Guinea",
    capital: "Malabo",
    languages: [
      "Spanish",
      "French",
      "Portuguese",
      "Fang"
    ],
    population: 1402985,
    flag: "https://flagcdn.com/gq.svg",
    currencies: [
      {
        code: "XAF",
        name: "Central African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Eritrea",
    capital: "Asmara",
    languages: [
      "Tigrinya",
      "Arabic",
      "English",
      "Tigre",
      "Kunama",
      "Saho",
      "Bilen",
      "Nara",
      "Afar"
    ],
    population: 5352000,
    flag: "https://flagcdn.com/er.svg",
    currencies: [
      {
        code: "ERN",
        name: "Eritrean nakfa",
        symbol: "Nfk"
      }
    ]
  },
  {
    name: "Estonia",
    capital: "Tallinn",
    languages: [
      "Estonian"
    ],
    population: 1331057,
    flag: "https://flagcdn.com/ee.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    languages: [
      "Amharic"
    ],
    population: 114963583,
    flag: "https://flagcdn.com/et.svg",
    currencies: [
      {
        code: "ETB",
        name: "Ethiopian birr",
        symbol: "Br"
      }
    ]
  },
  {
    name: "Falkland Islands (Malvinas)",
    capital: "Stanley",
    languages: [
      "English"
    ],
    population: 2563,
    flag: "https://flagcdn.com/fk.svg",
    currencies: [
      {
        code: "FKP",
        name: "Falkland Islands pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Faroe Islands",
    capital: "Tórshavn",
    languages: [
      "Faroese"
    ],
    population: 48865,
    flag: "https://flagcdn.com/fo.svg",
    currencies: [
      {
        code: "DKK",
        name: "Danish krone",
        symbol: "kr"
      },
      {
        code: "FOK",
        name: "Faroese króna",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Fiji",
    capital: "Suva",
    languages: [
      "English",
      "Fijian",
      "Fiji Hindi",
      "Rotuman"
    ],
    population: 896444,
    flag: "https://flagcdn.com/fj.svg",
    currencies: [
      {
        code: "FJD",
        name: "Fijian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Finland",
    capital: "Helsinki",
    languages: [
      "Finnish",
      "Swedish"
    ],
    population: 5530719,
    flag: "https://flagcdn.com/fi.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "France",
    capital: "Paris",
    languages: [
      "French"
    ],
    population: 67391582,
    flag: "https://flagcdn.com/fr.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "French Guiana",
    capital: "Cayenne",
    languages: [
      "French"
    ],
    population: 254541,
    flag: "https://flagcdn.com/gf.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "French Polynesia",
    capital: "Papeetē",
    languages: [
      "French"
    ],
    population: 280904,
    flag: "https://flagcdn.com/pf.svg",
    currencies: [
      {
        code: "XPF",
        name: "CFP franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "French Southern Territories",
    capital: "Port-aux-Français",
    languages: [
      "French"
    ],
    population: 140,
    flag: "https://flagcdn.com/tf.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Gabon",
    capital: "Libreville",
    languages: [
      "French"
    ],
    population: 2225728,
    flag: "https://flagcdn.com/ga.svg",
    currencies: [
      {
        code: "XAF",
        name: "Central African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Gambia",
    capital: "Banjul",
    languages: [
      "English"
    ],
    population: 2416664,
    flag: "https://flagcdn.com/gm.svg",
    currencies: [
      {
        code: "GMD",
        name: "Gambian dalasi",
        symbol: "D"
      }
    ]
  },
  {
    name: "Georgia",
    capital: "Tbilisi",
    languages: [
      "Georgian"
    ],
    population: 3714000,
    flag: "https://flagcdn.com/ge.svg",
    currencies: [
      {
        code: "GEL",
        name: "Georgian Lari",
        symbol: "ლ"
      }
    ]
  },
  {
    name: "Germany",
    capital: "Berlin",
    languages: [
      "German"
    ],
    population: 83240525,
    flag: "https://flagcdn.com/de.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Ghana",
    capital: "Accra",
    languages: [
      "English"
    ],
    population: 31072945,
    flag: "https://flagcdn.com/gh.svg",
    currencies: [
      {
        code: "GHS",
        name: "Ghanaian cedi",
        symbol: "₵"
      }
    ]
  },
  {
    name: "Gibraltar",
    capital: "Gibraltar",
    languages: [
      "English"
    ],
    population: 33691,
    flag: "https://flagcdn.com/gi.svg",
    currencies: [
      {
        code: "GIP",
        name: "Gibraltar pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Greece",
    capital: "Athens",
    languages: [
      "Greek (modern)"
    ],
    population: 10715549,
    flag: "https://flagcdn.com/gr.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Greenland",
    capital: "Nuuk",
    languages: [
      "Kalaallisut"
    ],
    population: 56367,
    flag: "https://flagcdn.com/gl.svg",
    currencies: [
      {
        code: "DKK",
        name: "Danish krone",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Grenada",
    capital: "St. George's",
    languages: [
      "English"
    ],
    population: 112519,
    flag: "https://flagcdn.com/gd.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Guadeloupe",
    capital: "Basse-Terre",
    languages: [
      "French"
    ],
    population: 400132,
    flag: "https://flagcdn.com/gp.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Guam",
    capital: "Hagåtña",
    languages: [
      "English",
      "Chamorro",
      "Spanish"
    ],
    population: 168783,
    flag: "https://flagcdn.com/gu.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Guatemala",
    capital: "Guatemala City",
    languages: [
      "Spanish"
    ],
    population: 16858333,
    flag: "https://flagcdn.com/gt.svg",
    currencies: [
      {
        code: "GTQ",
        name: "Guatemalan quetzal",
        symbol: "Q"
      }
    ]
  },
  {
    name: "Guernsey",
    capital: "St. Peter Port",
    languages: [
      "English",
      "French"
    ],
    population: 62999,
    flag: "https://flagcdn.com/gg.svg",
    currencies: [
      {
        code: "GBP",
        name: "British pound",
        symbol: "£"
      },
      {
        code: "GGP",
        name: "Guernsey pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Guinea",
    capital: "Conakry",
    languages: [
      "French",
      "Fula"
    ],
    population: 13132792,
    flag: "https://flagcdn.com/gn.svg",
    currencies: [
      {
        code: "GNF",
        name: "Guinean franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Guinea-Bissau",
    capital: "Bissau",
    languages: [
      "Portuguese"
    ],
    population: 1967998,
    flag: "https://flagcdn.com/gw.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Guyana",
    capital: "Georgetown",
    languages: [
      "English"
    ],
    population: 786559,
    flag: "https://flagcdn.com/gy.svg",
    currencies: [
      {
        code: "GYD",
        name: "Guyanese dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Haiti",
    capital: "Port-au-Prince",
    languages: [
      "French",
      "Haitian"
    ],
    population: 11402533,
    flag: "https://flagcdn.com/ht.svg",
    currencies: [
      {
        code: "HTG",
        name: "Haitian gourde",
        symbol: "G"
      }
    ]
  },
  {
    name: "Heard Island and McDonald Islands",
    languages: [
      "English"
    ],
    population: 0,
    flag: "https://flagcdn.com/hm.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Vatican City",
    capital: "Vatican City",
    languages: [
      "Latin",
      "Italian",
      "French",
      "German"
    ],
    population: 451,
    flag: "https://flagcdn.com/va.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Honduras",
    capital: "Tegucigalpa",
    languages: [
      "Spanish"
    ],
    population: 9904608,
    flag: "https://flagcdn.com/hn.svg",
    currencies: [
      {
        code: "HNL",
        name: "Honduran lempira",
        symbol: "L"
      }
    ]
  },
  {
    name: "Hungary",
    capital: "Budapest",
    languages: [
      "Hungarian"
    ],
    population: 9749763,
    flag: "https://flagcdn.com/hu.svg",
    currencies: [
      {
        code: "HUF",
        name: "Hungarian forint",
        symbol: "Ft"
      }
    ]
  },
  {
    name: "Hong Kong",
    capital: "City of Victoria",
    languages: [
      "English",
      "Chinese"
    ],
    population: 7481800,
    flag: "https://flagcdn.com/hk.svg",
    currencies: [
      {
        code: "HKD",
        name: "Hong Kong dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Iceland",
    capital: "Reykjavík",
    languages: [
      "Icelandic"
    ],
    population: 366425,
    flag: "https://flagcdn.com/is.svg",
    currencies: [
      {
        code: "ISK",
        name: "Icelandic króna",
        symbol: "kr"
      }
    ]
  },
  {
    name: "India",
    capital: "New Delhi",
    languages: [
      "Hindi",
      "English"
    ],
    population: 1380004385,
    flag: "https://flagcdn.com/in.svg",
    currencies: [
      {
        code: "INR",
        name: "Indian rupee",
        symbol: "₹"
      }
    ]
  },
  {
    name: "Indonesia",
    capital: "Jakarta",
    languages: [
      "Indonesian"
    ],
    population: 273523621,
    flag: "https://flagcdn.com/id.svg",
    currencies: [
      {
        code: "IDR",
        name: "Indonesian rupiah",
        symbol: "Rp"
      }
    ]
  },
  {
    name: "Ivory Coast",
    capital: "Yamoussoukro",
    languages: [
      "French"
    ],
    population: 26378275,
    flag: "https://flagcdn.com/ci.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Iran (Islamic Republic of)",
    capital: "Tehran",
    languages: [
      "Persian (Farsi)"
    ],
    population: 83992953,
    flag: "https://flagcdn.com/ir.svg",
    currencies: [
      {
        code: "IRR",
        name: "Iranian rial",
        symbol: "﷼"
      }
    ]
  },
  {
    name: "Iraq",
    capital: "Baghdad",
    languages: [
      "Arabic",
      "Kurdish"
    ],
    population: 40222503,
    flag: "https://flagcdn.com/iq.svg",
    currencies: [
      {
        code: "IQD",
        name: "Iraqi dinar",
        symbol: "ع.د"
      }
    ]
  },
  {
    name: "Ireland",
    capital: "Dublin",
    languages: [
      "Irish",
      "English"
    ],
    population: 4994724,
    flag: "https://flagcdn.com/ie.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Isle of Man",
    capital: "Douglas",
    languages: [
      "English",
      "Manx"
    ],
    population: 85032,
    flag: "https://flagcdn.com/im.svg",
    currencies: [
      {
        code: "GBP",
        name: "British pound",
        symbol: "£"
      },
      {
        code: "IMP[G]",
        name: "Manx pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Israel",
    capital: "Jerusalem",
    languages: [
      "Hebrew (modern)",
      "Arabic"
    ],
    population: 9216900,
    flag: "https://flagcdn.com/il.svg",
    currencies: [
      {
        code: "ILS",
        name: "Israeli new shekel",
        symbol: "₪"
      }
    ]
  },
  {
    name: "Italy",
    capital: "Rome",
    languages: [
      "Italian"
    ],
    population: 59554023,
    flag: "https://flagcdn.com/it.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Jamaica",
    capital: "Kingston",
    languages: [
      "English"
    ],
    population: 2961161,
    flag: "https://flagcdn.com/jm.svg",
    currencies: [
      {
        code: "JMD",
        name: "Jamaican dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Japan",
    capital: "Tokyo",
    languages: [
      "Japanese"
    ],
    population: 125836021,
    flag: "https://flagcdn.com/jp.svg",
    currencies: [
      {
        code: "JPY",
        name: "Japanese yen",
        symbol: "¥"
      }
    ]
  },
  {
    name: "Jersey",
    capital: "Saint Helier",
    languages: [
      "English",
      "French"
    ],
    population: 100800,
    flag: "https://flagcdn.com/je.svg",
    currencies: [
      {
        code: "GBP",
        name: "British pound",
        symbol: "£"
      },
      {
        code: "JEP[G]",
        name: "Jersey pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Jordan",
    capital: "Amman",
    languages: [
      "Arabic"
    ],
    population: 10203140,
    flag: "https://flagcdn.com/jo.svg",
    currencies: [
      {
        code: "JOD",
        name: "Jordanian dinar",
        symbol: "د.ا"
      }
    ]
  },
  {
    name: "Kazakhstan",
    capital: "Nur-Sultan",
    languages: [
      "Kazakh",
      "Russian"
    ],
    population: 18754440,
    flag: "https://flagcdn.com/kz.svg",
    currencies: [
      {
        code: "KZT",
        name: "Kazakhstani tenge",
        symbol: "₸"
      }
    ]
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    languages: [
      "English",
      "Swahili"
    ],
    population: 53771300,
    flag: "https://flagcdn.com/ke.svg",
    currencies: [
      {
        code: "KES",
        name: "Kenyan shilling",
        symbol: "Sh"
      }
    ]
  },
  {
    name: "Kiribati",
    capital: "South Tarawa",
    languages: [
      "English"
    ],
    population: 119446,
    flag: "https://flagcdn.com/ki.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      },
      {
        code: "KID",
        name: "Kiribati dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Kuwait",
    capital: "Kuwait City",
    languages: [
      "Arabic"
    ],
    population: 4270563,
    flag: "https://flagcdn.com/kw.svg",
    currencies: [
      {
        code: "KWD",
        name: "Kuwaiti dinar",
        symbol: "د.ك"
      }
    ]
  },
  {
    name: "Kyrgyzstan",
    capital: "Bishkek",
    languages: [
      "Kyrgyz",
      "Russian"
    ],
    population: 6591600,
    flag: "https://flagcdn.com/kg.svg",
    currencies: [
      {
        code: "KGS",
        name: "Kyrgyzstani som",
        symbol: "с"
      }
    ]
  },
  {
    name: "Lao People's Democratic Republic",
    capital: "Vientiane",
    languages: [
      "Lao"
    ],
    population: 7275556,
    flag: "https://flagcdn.com/la.svg",
    currencies: [
      {
        code: "LAK",
        name: "Lao kip",
        symbol: "₭"
      }
    ]
  },
  {
    name: "Latvia",
    capital: "Riga",
    languages: [
      "Latvian"
    ],
    population: 1901548,
    flag: "https://flagcdn.com/lv.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Lebanon",
    capital: "Beirut",
    languages: [
      "Arabic",
      "French"
    ],
    population: 6825442,
    flag: "https://flagcdn.com/lb.svg",
    currencies: [
      {
        code: "LBP",
        name: "Lebanese pound",
        symbol: "ل.ل"
      }
    ]
  },
  {
    name: "Lesotho",
    capital: "Maseru",
    languages: [
      "English",
      "Southern Sotho"
    ],
    population: 2142252,
    flag: "https://flagcdn.com/ls.svg",
    currencies: [
      {
        code: "LSL",
        name: "Lesotho loti",
        symbol: "L"
      },
      {
        code: "ZAR",
        name: "South African rand",
        symbol: "R"
      }
    ]
  },
  {
    name: "Liberia",
    capital: "Monrovia",
    languages: [
      "English"
    ],
    population: 5057677,
    flag: "https://flagcdn.com/lr.svg",
    currencies: [
      {
        code: "LRD",
        name: "Liberian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Libya",
    capital: "Tripoli",
    languages: [
      "Arabic"
    ],
    population: 6871287,
    flag: "https://flagcdn.com/ly.svg",
    currencies: [
      {
        code: "LYD",
        name: "Libyan dinar",
        symbol: "ل.د"
      }
    ]
  },
  {
    name: "Liechtenstein",
    capital: "Vaduz",
    languages: [
      "German"
    ],
    population: 38137,
    flag: "https://flagcdn.com/li.svg",
    currencies: [
      {
        code: "CHF",
        name: "Swiss franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Lithuania",
    capital: "Vilnius",
    languages: [
      "Lithuanian"
    ],
    population: 2794700,
    flag: "https://flagcdn.com/lt.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Luxembourg",
    capital: "Luxembourg",
    languages: [
      "French",
      "German",
      "Luxembourgish"
    ],
    population: 632275,
    flag: "https://flagcdn.com/lu.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Macao",
    languages: [
      "Chinese",
      "Portuguese"
    ],
    population: 649342,
    flag: "https://flagcdn.com/mo.svg",
    currencies: [
      {
        code: "MOP",
        name: "Macanese pataca",
        symbol: "P"
      }
    ]
  },
  {
    name: "North Macedonia",
    capital: "Skopje",
    languages: [
      "Macedonian"
    ],
    population: 2083380,
    flag: "https://flagcdn.com/mk.svg",
    currencies: [
      {
        code: "MKD",
        name: "Macedonian denar",
        symbol: "ден"
      }
    ]
  },
  {
    name: "Madagascar",
    capital: "Antananarivo",
    languages: [
      "French",
      "Malagasy"
    ],
    population: 27691019,
    flag: "https://flagcdn.com/mg.svg",
    currencies: [
      {
        code: "MGA",
        name: "Malagasy ariary",
        symbol: "Ar"
      }
    ]
  },
  {
    name: "Malawi",
    capital: "Lilongwe",
    languages: [
      "English",
      "Chichewa"
    ],
    population: 19129955,
    flag: "https://flagcdn.com/mw.svg",
    currencies: [
      {
        code: "MWK",
        name: "Malawian kwacha",
        symbol: "MK"
      }
    ]
  },
  {
    name: "Malaysia",
    capital: "Kuala Lumpur",
    languages: [
      "Malaysian"
    ],
    population: 32365998,
    flag: "https://flagcdn.com/my.svg",
    currencies: [
      {
        code: "MYR",
        name: "Malaysian ringgit",
        symbol: "RM"
      }
    ]
  },
  {
    name: "Maldives",
    capital: "Malé",
    languages: [
      "Divehi"
    ],
    population: 540542,
    flag: "https://flagcdn.com/mv.svg",
    currencies: [
      {
        code: "MVR",
        name: "Maldivian rufiyaa",
        symbol: ".ރ"
      }
    ]
  },
  {
    name: "Mali",
    capital: "Bamako",
    languages: [
      "French"
    ],
    population: 20250834,
    flag: "https://flagcdn.com/ml.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Malta",
    capital: "Valletta",
    languages: [
      "Maltese",
      "English"
    ],
    population: 525285,
    flag: "https://flagcdn.com/mt.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Marshall Islands",
    capital: "Majuro",
    languages: [
      "English",
      "Marshallese"
    ],
    population: 59194,
    flag: "https://flagcdn.com/mh.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Martinique",
    capital: "Fort-de-France",
    languages: [
      "French"
    ],
    population: 378243,
    flag: "https://flagcdn.com/mq.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Mauritania",
    capital: "Nouakchott",
    languages: [
      "Arabic"
    ],
    population: 4649660,
    flag: "https://flagcdn.com/mr.svg",
    currencies: [
      {
        code: "MRO",
        name: "Mauritanian ouguiya",
        symbol: "UM"
      }
    ]
  },
  {
    name: "Mauritius",
    capital: "Port Louis",
    languages: [
      "English"
    ],
    population: 1265740,
    flag: "https://flagcdn.com/mu.svg",
    currencies: [
      {
        code: "MUR",
        name: "Mauritian rupee",
        symbol: "₨"
      }
    ]
  },
  {
    name: "Mayotte",
    capital: "Mamoudzou",
    languages: [
      "French"
    ],
    population: 226915,
    flag: "https://flagcdn.com/yt.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    languages: [
      "Spanish"
    ],
    population: 128932753,
    flag: "https://flagcdn.com/mx.svg",
    currencies: [
      {
        code: "MXN",
        name: "Mexican peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "Micronesia (Federated States of)",
    capital: "Palikir",
    languages: [
      "English"
    ],
    population: 115021,
    flag: "https://flagcdn.com/fm.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Moldova (Republic of)",
    capital: "Chișinău",
    languages: [
      "Romanian"
    ],
    population: 2617820,
    flag: "https://flagcdn.com/md.svg",
    currencies: [
      {
        code: "MDL",
        name: "Moldovan leu",
        symbol: "L"
      }
    ]
  },
  {
    name: "Monaco",
    capital: "Monaco",
    languages: [
      "French"
    ],
    population: 39244,
    flag: "https://flagcdn.com/mc.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Mongolia",
    capital: "Ulan Bator",
    languages: [
      "Mongolian"
    ],
    population: 3278292,
    flag: "https://flagcdn.com/mn.svg",
    currencies: [
      {
        code: "MNT",
        name: "Mongolian tögrög",
        symbol: "₮"
      }
    ]
  },
  {
    name: "Montenegro",
    capital: "Podgorica",
    languages: [
      "Serbian",
      "Bosnian",
      "Albanian",
      "Croatian"
    ],
    population: 621718,
    flag: "https://flagcdn.com/me.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Montserrat",
    capital: "Plymouth",
    languages: [
      "English"
    ],
    population: 4922,
    flag: "https://flagcdn.com/ms.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Morocco",
    capital: "Rabat",
    languages: [
      "Arabic"
    ],
    population: 36910558,
    flag: "https://flagcdn.com/ma.svg",
    currencies: [
      {
        code: "MAD",
        name: "Moroccan dirham",
        symbol: "د.م."
      }
    ]
  },
  {
    name: "Mozambique",
    capital: "Maputo",
    languages: [
      "Portuguese"
    ],
    population: 31255435,
    flag: "https://flagcdn.com/mz.svg",
    currencies: [
      {
        code: "MZN",
        name: "Mozambican metical",
        symbol: "MT"
      }
    ]
  },
  {
    name: "Myanmar",
    capital: "Naypyidaw",
    languages: [
      "Burmese"
    ],
    population: 54409794,
    flag: "https://flagcdn.com/mm.svg",
    currencies: [
      {
        code: "MMK",
        name: "Burmese kyat",
        symbol: "Ks"
      }
    ]
  },
  {
    name: "Namibia",
    capital: "Windhoek",
    languages: [
      "English",
      "Afrikaans"
    ],
    population: 2540916,
    flag: "https://flagcdn.com/na.svg",
    currencies: [
      {
        code: "NAD",
        name: "Namibian dollar",
        symbol: "$"
      },
      {
        code: "ZAR",
        name: "South African rand",
        symbol: "R"
      }
    ]
  },
  {
    name: "Nauru",
    capital: "Yaren",
    languages: [
      "English",
      "Nauruan"
    ],
    population: 10834,
    flag: "https://flagcdn.com/nr.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Nepal",
    capital: "Kathmandu",
    languages: [
      "Nepali"
    ],
    population: 29136808,
    flag: "https://flagcdn.com/np.svg",
    currencies: [
      {
        code: "NPR",
        name: "Nepalese rupee",
        symbol: "₨"
      }
    ]
  },
  {
    name: "Netherlands",
    capital: "Amsterdam",
    languages: [
      "Dutch"
    ],
    population: 17441139,
    flag: "https://flagcdn.com/nl.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "New Caledonia",
    capital: "Nouméa",
    languages: [
      "French"
    ],
    population: 271960,
    flag: "https://flagcdn.com/nc.svg",
    currencies: [
      {
        code: "XPF",
        name: "CFP franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    languages: [
      "English",
      "Māori"
    ],
    population: 5084300,
    flag: "https://flagcdn.com/nz.svg",
    currencies: [
      {
        code: "NZD",
        name: "New Zealand dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Nicaragua",
    capital: "Managua",
    languages: [
      "Spanish"
    ],
    population: 6624554,
    flag: "https://flagcdn.com/ni.svg",
    currencies: [
      {
        code: "NIO",
        name: "Nicaraguan córdoba",
        symbol: "C$"
      }
    ]
  },
  {
    name: "Niger",
    capital: "Niamey",
    languages: [
      "French"
    ],
    population: 24206636,
    flag: "https://flagcdn.com/ne.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    languages: [
      "English"
    ],
    population: 206139587,
    flag: "https://flagcdn.com/ng.svg",
    currencies: [
      {
        code: "NGN",
        name: "Nigerian naira",
        symbol: "₦"
      }
    ]
  },
  {
    name: "Niue",
    capital: "Alofi",
    languages: [
      "English"
    ],
    population: 1470,
    flag: "https://flagcdn.com/nu.svg",
    currencies: [
      {
        code: "NZD",
        name: "New Zealand dollar",
        symbol: "$"
      },
      {
        code: "NZD",
        name: "Niue dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Norfolk Island",
    capital: "Kingston",
    languages: [
      "English"
    ],
    population: 2302,
    flag: "https://flagcdn.com/nf.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: "Pyongyang",
    languages: [
      "Korean"
    ],
    population: 25778815,
    flag: "https://flagcdn.com/kp.svg",
    currencies: [
      {
        code: "KPW",
        name: "North Korean won",
        symbol: "₩"
      }
    ]
  },
  {
    name: "Northern Mariana Islands",
    capital: "Saipan",
    languages: [
      "English",
      "Chamorro"
    ],
    population: 57557,
    flag: "https://flagcdn.com/mp.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Norway",
    capital: "Oslo",
    languages: [
      "Norwegian",
      "Norwegian Bokmål",
      "Norwegian Nynorsk"
    ],
    population: 5379475,
    flag: "https://flagcdn.com/no.svg",
    currencies: [
      {
        code: "NOK",
        name: "Norwegian krone",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Oman",
    capital: "Muscat",
    languages: [
      "Arabic"
    ],
    population: 5106622,
    flag: "https://flagcdn.com/om.svg",
    currencies: [
      {
        code: "OMR",
        name: "Omani rial",
        symbol: "ر.ع."
      }
    ]
  },
  {
    name: "Pakistan",
    capital: "Islamabad",
    languages: [
      "Urdu",
      "English"
    ],
    population: 220892331,
    flag: "https://flagcdn.com/pk.svg",
    currencies: [
      {
        code: "PKR",
        name: "Pakistani rupee",
        symbol: "₨"
      }
    ]
  },
  {
    name: "Palau",
    capital: "Ngerulmud",
    languages: [
      "English"
    ],
    population: 18092,
    flag: "https://flagcdn.com/pw.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Palestine, State of",
    capital: "Ramallah",
    languages: [
      "Arabic"
    ],
    population: 4803269,
    flag: "https://flagcdn.com/ps.svg",
    currencies: [
      {
        code: "EGP",
        name: "Egyptian pound",
        symbol: "E£"
      },
      {
        code: "ILS",
        name: "Israeli new shekel",
        symbol: "₪"
      },
      {
        code: "JOD",
        name: "Jordanian dinar",
        symbol: "د.أ"
      }
    ]
  },
  {
    name: "Panama",
    capital: "Panama City",
    languages: [
      "Spanish"
    ],
    population: 4314768,
    flag: "https://flagcdn.com/pa.svg",
    currencies: [
      {
        code: "PAB",
        name: "Panamanian balboa",
        symbol: "B/."
      },
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Papua New Guinea",
    capital: "Port Moresby",
    languages: [
      "English"
    ],
    population: 8947027,
    flag: "https://flagcdn.com/pg.svg",
    currencies: [
      {
        code: "PGK",
        name: "Papua New Guinean kina",
        symbol: "K"
      }
    ]
  },
  {
    name: "Paraguay",
    capital: "Asunción",
    languages: [
      "Spanish",
      "Guaraní"
    ],
    population: 7132530,
    flag: "https://flagcdn.com/py.svg",
    currencies: [
      {
        code: "PYG",
        name: "Paraguayan guaraní",
        symbol: "₲"
      }
    ]
  },
  {
    name: "Peru",
    capital: "Lima",
    languages: [
      "Spanish"
    ],
    population: 32971846,
    flag: "https://flagcdn.com/pe.svg",
    currencies: [
      {
        code: "PEN",
        name: "Peruvian sol",
        symbol: "S/."
      }
    ]
  },
  {
    name: "Philippines",
    capital: "Manila",
    languages: [
      "English"
    ],
    population: 109581085,
    flag: "https://flagcdn.com/ph.svg",
    currencies: [
      {
        code: "PHP",
        name: "Philippine peso",
        symbol: "₱"
      }
    ]
  },
  {
    name: "Pitcairn",
    capital: "Adamstown",
    languages: [
      "English"
    ],
    population: 56,
    flag: "https://flagcdn.com/pn.svg",
    currencies: [
      {
        code: "NZD",
        name: "New Zealand dollar",
        symbol: "$"
      },
      {
        code: "PND",
        name: "Pitcairn Islands dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Poland",
    capital: "Warsaw",
    languages: [
      "Polish"
    ],
    population: 37950802,
    flag: "https://flagcdn.com/pl.svg",
    currencies: [
      {
        code: "PLN",
        name: "Polish złoty",
        symbol: "zł"
      }
    ]
  },
  {
    name: "Portugal",
    capital: "Lisbon",
    languages: [
      "Portuguese"
    ],
    population: 10305564,
    flag: "https://flagcdn.com/pt.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Puerto Rico",
    capital: "San Juan",
    languages: [
      "Spanish",
      "English"
    ],
    population: 3194034,
    flag: "https://flagcdn.com/pr.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Qatar",
    capital: "Doha",
    languages: [
      "Arabic"
    ],
    population: 2881060,
    flag: "https://flagcdn.com/qa.svg",
    currencies: [
      {
        code: "QAR",
        name: "Qatari riyal",
        symbol: "ر.ق"
      }
    ]
  },
  {
    name: "Republic of Kosovo",
    capital: "Pristina",
    languages: [
      "Albanian",
      "Serbian"
    ],
    population: 1775378,
    flag: "https://flagcdn.com/xk.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Réunion",
    capital: "Saint-Denis",
    languages: [
      "French"
    ],
    population: 840974,
    flag: "https://flagcdn.com/re.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Romania",
    capital: "Bucharest",
    languages: [
      "Romanian"
    ],
    population: 19286123,
    flag: "https://flagcdn.com/ro.svg",
    currencies: [
      {
        code: "RON",
        name: "Romanian leu",
        symbol: "lei"
      }
    ]
  },
  {
    name: "Russian Federation",
    capital: "Moscow",
    languages: [
      "Russian"
    ],
    population: 144104080,
    flag: "https://flagcdn.com/ru.svg",
    currencies: [
      {
        code: "RUB",
        name: "Russian ruble",
        symbol: "₽"
      }
    ]
  },
  {
    name: "Rwanda",
    capital: "Kigali",
    languages: [
      "Kinyarwanda",
      "English",
      "French"
    ],
    population: 12952209,
    flag: "https://flagcdn.com/rw.svg",
    currencies: [
      {
        code: "RWF",
        name: "Rwandan franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Saint Barthélemy",
    capital: "Gustavia",
    languages: [
      "French"
    ],
    population: 9417,
    flag: "https://flagcdn.com/bl.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    capital: "Jamestown",
    languages: [
      "English"
    ],
    population: 4255,
    flag: "https://flagcdn.com/sh.svg",
    currencies: [
      {
        code: "SHP",
        name: "Saint Helena pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    languages: [
      "English"
    ],
    population: 53192,
    flag: "https://flagcdn.com/kn.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Saint Lucia",
    capital: "Castries",
    languages: [
      "English"
    ],
    population: 183629,
    flag: "https://flagcdn.com/lc.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Saint Martin (French part)",
    capital: "Marigot",
    languages: [
      "English",
      "French",
      "Dutch"
    ],
    population: 38659,
    flag: "https://flagcdn.com/mf.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Saint Pierre and Miquelon",
    capital: "Saint-Pierre",
    languages: [
      "French"
    ],
    population: 6069,
    flag: "https://flagcdn.com/pm.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    languages: [
      "English"
    ],
    population: 110947,
    flag: "https://flagcdn.com/vc.svg",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Samoa",
    capital: "Apia",
    languages: [
      "Samoan",
      "English"
    ],
    population: 198410,
    flag: "https://flagcdn.com/ws.svg",
    currencies: [
      {
        code: "WST",
        name: "Samoan tālā",
        symbol: "T"
      }
    ]
  },
  {
    name: "San Marino",
    capital: "City of San Marino",
    languages: [
      "Italian"
    ],
    population: 33938,
    flag: "https://flagcdn.com/sm.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Sao Tome and Principe",
    capital: "São Tomé",
    languages: [
      "Portuguese"
    ],
    population: 219161,
    flag: "https://flagcdn.com/st.svg",
    currencies: [
      {
        code: "STD",
        name: "São Tomé and Príncipe dobra",
        symbol: "Db"
      }
    ]
  },
  {
    name: "Saudi Arabia",
    capital: "Riyadh",
    languages: [
      "Arabic"
    ],
    population: 34813867,
    flag: "https://flagcdn.com/sa.svg",
    currencies: [
      {
        code: "SAR",
        name: "Saudi riyal",
        symbol: "ر.س"
      }
    ]
  },
  {
    name: "Senegal",
    capital: "Dakar",
    languages: [
      "French"
    ],
    population: 16743930,
    flag: "https://flagcdn.com/sn.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Serbia",
    capital: "Belgrade",
    languages: [
      "Serbian"
    ],
    population: 6908224,
    flag: "https://flagcdn.com/rs.svg",
    currencies: [
      {
        code: "RSD",
        name: "Serbian dinar",
        symbol: "дин."
      }
    ]
  },
  {
    name: "Seychelles",
    capital: "Victoria",
    languages: [
      "French",
      "English"
    ],
    population: 98462,
    flag: "https://flagcdn.com/sc.svg",
    currencies: [
      {
        code: "SCR",
        name: "Seychellois rupee",
        symbol: "₨"
      }
    ]
  },
  {
    name: "Sierra Leone",
    capital: "Freetown",
    languages: [
      "English"
    ],
    population: 7976985,
    flag: "https://flagcdn.com/sl.svg",
    currencies: [
      {
        code: "SLL",
        name: "Sierra Leonean leone",
        symbol: "Le"
      }
    ]
  },
  {
    name: "Singapore",
    capital: "Singapore",
    languages: [
      "English",
      "Malay",
      "Tamil",
      "Chinese"
    ],
    population: 5685807,
    flag: "https://flagcdn.com/sg.svg",
    currencies: [
      {
        code: "BND",
        name: "Brunei dollar",
        symbol: "$"
      },
      {
        code: "SGD",
        name: "Singapore dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Sint Maarten (Dutch part)",
    capital: "Philipsburg",
    languages: [
      "Dutch",
      "English"
    ],
    population: 40812,
    flag: "https://flagcdn.com/sx.svg",
    currencies: [
      {
        code: "ANG",
        name: "Netherlands Antillean guilder",
        symbol: "ƒ"
      }
    ]
  },
  {
    name: "Slovakia",
    capital: "Bratislava",
    languages: [
      "Slovak"
    ],
    population: 5458827,
    flag: "https://flagcdn.com/sk.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Slovenia",
    capital: "Ljubljana",
    languages: [
      "Slovene"
    ],
    population: 2100126,
    flag: "https://flagcdn.com/si.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Solomon Islands",
    capital: "Honiara",
    languages: [
      "English"
    ],
    population: 686878,
    flag: "https://flagcdn.com/sb.svg",
    currencies: [
      {
        code: "SBD",
        name: "Solomon Islands dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Somalia",
    capital: "Mogadishu",
    languages: [
      "Somali",
      "Arabic"
    ],
    population: 15893219,
    flag: "https://flagcdn.com/so.svg",
    currencies: [
      {
        code: "SOS",
        name: "Somali shilling",
        symbol: "Sh"
      }
    ]
  },
  {
    name: "South Africa",
    capital: "Pretoria",
    languages: [
      "Afrikaans",
      "English",
      "Southern Ndebele",
      "Southern Sotho",
      "Swati",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zulu"
    ],
    population: 59308690,
    flag: "https://flagcdn.com/za.svg",
    currencies: [
      {
        code: "ZAR",
        name: "South African rand",
        symbol: "R"
      }
    ]
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    capital: "King Edward Point",
    languages: [
      "English"
    ],
    population: 30,
    flag: "https://flagcdn.com/gs.svg",
    currencies: [
      {
        code: "FKP",
        name: "Falkland Islands Pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Korea (Republic of)",
    capital: "Seoul",
    languages: [
      "Korean"
    ],
    population: 51780579,
    flag: "https://flagcdn.com/kr.svg",
    currencies: [
      {
        code: "KRW",
        name: "South Korean won",
        symbol: "₩"
      }
    ]
  },
  {
    name: "Spain",
    capital: "Madrid",
    languages: [
      "Spanish"
    ],
    population: 47351567,
    flag: "https://flagcdn.com/es.svg",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€"
      }
    ]
  },
  {
    name: "Sri Lanka",
    capital: "Sri Jayawardenepura Kotte",
    languages: [
      "Sinhalese",
      "Tamil"
    ],
    population: 21919000,
    flag: "https://flagcdn.com/lk.svg",
    currencies: [
      {
        code: "LKR",
        name: "Sri Lankan rupee",
        symbol: "Rs"
      }
    ]
  },
  {
    name: "Sudan",
    capital: "Khartoum",
    languages: [
      "Arabic",
      "English"
    ],
    population: 43849269,
    flag: "https://flagcdn.com/sd.svg",
    currencies: [
      {
        code: "SDG",
        name: "Sudanese pound",
        symbol: "ج.س."
      }
    ]
  },
  {
    name: "South Sudan",
    capital: "Juba",
    languages: [
      "English"
    ],
    population: 11193729,
    flag: "https://flagcdn.com/ss.svg",
    currencies: [
      {
        code: "SSP",
        name: "South Sudanese pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Suriname",
    capital: "Paramaribo",
    languages: [
      "Dutch"
    ],
    population: 586634,
    flag: "https://flagcdn.com/sr.svg",
    currencies: [
      {
        code: "SRD",
        name: "Surinamese dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Svalbard and Jan Mayen",
    capital: "Longyearbyen",
    languages: [
      "Norwegian"
    ],
    population: 2562,
    flag: "https://flagcdn.com/sj.svg",
    currencies: [
      {
        code: "NOK",
        name: "Norwegian krone",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Swaziland",
    capital: "Mbabane",
    languages: [
      "English",
      "Swati"
    ],
    population: 1160164,
    flag: "https://flagcdn.com/sz.svg",
    currencies: [
      {
        code: "SZL",
        name: "Swazi lilangeni",
        symbol: "L"
      }
    ]
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    languages: [
      "Swedish"
    ],
    population: 10353442,
    flag: "https://flagcdn.com/se.svg",
    currencies: [
      {
        code: "SEK",
        name: "Swedish krona",
        symbol: "kr"
      }
    ]
  },
  {
    name: "Switzerland",
    capital: "Bern",
    languages: [
      "German",
      "French",
      "Italian",
      "Romansh"
    ],
    population: 8636896,
    flag: "https://flagcdn.com/ch.svg",
    currencies: [
      {
        code: "CHF",
        name: "Swiss franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Syrian Arab Republic",
    capital: "Damascus",
    languages: [
      "Arabic"
    ],
    population: 17500657,
    flag: "https://flagcdn.com/sy.svg",
    currencies: [
      {
        code: "SYP",
        name: "Syrian pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "Taiwan",
    capital: "Taipei",
    languages: [
      "Chinese"
    ],
    population: 23503349,
    flag: "https://flagcdn.com/tw.svg",
    currencies: [
      {
        code: "TWD",
        name: "New Taiwan dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Tajikistan",
    capital: "Dushanbe",
    languages: [
      "Tajik",
      "Russian"
    ],
    population: 9537642,
    flag: "https://flagcdn.com/tj.svg",
    currencies: [
      {
        code: "TJS",
        name: "Tajikistani somoni",
        symbol: "ЅМ"
      }
    ]
  },
  {
    name: "Tanzania, United Republic of",
    capital: "Dodoma",
    languages: [
      "Swahili",
      "English"
    ],
    population: 59734213,
    flag: "https://flagcdn.com/tz.svg",
    currencies: [
      {
        code: "TZS",
        name: "Tanzanian shilling",
        symbol: "Sh"
      }
    ]
  },
  {
    name: "Thailand",
    capital: "Bangkok",
    languages: [
      "Thai"
    ],
    population: 69799978,
    flag: "https://flagcdn.com/th.svg",
    currencies: [
      {
        code: "THB",
        name: "Thai baht",
        symbol: "฿"
      }
    ]
  },
  {
    name: "Timor-Leste",
    capital: "Dili",
    languages: [
      "Portuguese"
    ],
    population: 1318442,
    flag: "https://flagcdn.com/tl.svg",
    currencies: [
      {
        code: "THB",
        name: "Thai baht",
        symbol: "฿"
      }
    ]
  },
  {
    name: "Togo",
    capital: "Lomé",
    languages: [
      "French"
    ],
    population: 8278737,
    flag: "https://flagcdn.com/tg.svg",
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Tokelau",
    capital: "Fakaofo",
    languages: [
      "English"
    ],
    population: 1411,
    flag: "https://flagcdn.com/tk.svg",
    currencies: [
      {
        code: "NZD",
        name: "New Zealand dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Tonga",
    capital: "Nuku'alofa",
    languages: [
      "English",
      "Tonga (Tonga Islands)"
    ],
    population: 105697,
    flag: "https://flagcdn.com/to.svg",
    currencies: [
      {
        code: "TOP",
        name: "Tongan paʻanga",
        symbol: "T$"
      }
    ]
  },
  {
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    languages: [
      "English"
    ],
    population: 1399491,
    flag: "https://flagcdn.com/tt.svg",
    currencies: [
      {
        code: "TTD",
        name: "Trinidad and Tobago dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Tunisia",
    capital: "Tunis",
    languages: [
      "Arabic"
    ],
    population: 11818618,
    flag: "https://flagcdn.com/tn.svg",
    currencies: [
      {
        code: "TND",
        name: "Tunisian dinar",
        symbol: "د.ت"
      }
    ]
  },
  {
    name: "Turkey",
    capital: "Ankara",
    languages: [
      "Turkish"
    ],
    population: 84339067,
    flag: "https://flagcdn.com/tr.svg",
    currencies: [
      {
        code: "TRY",
        name: "Turkish lira",
        symbol: "֏"
      }
    ]
  },
  {
    name: "Turkmenistan",
    capital: "Ashgabat",
    languages: [
      "Turkmen",
      "Russian"
    ],
    population: 6031187,
    flag: "https://flagcdn.com/tm.svg",
    currencies: [
      {
        code: "TMT",
        name: "Turkmenistan manat",
        symbol: "m"
      }
    ]
  },
  {
    name: "Turks and Caicos Islands",
    capital: "Cockburn Town",
    languages: [
      "English"
    ],
    population: 38718,
    flag: "https://flagcdn.com/tc.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Tuvalu",
    capital: "Funafuti",
    languages: [
      "English"
    ],
    population: 11792,
    flag: "https://flagcdn.com/tv.svg",
    currencies: [
      {
        code: "AUD",
        name: "Australian dollar",
        symbol: "$"
      },
      {
        code: "TVD[G]",
        name: "Tuvaluan dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Uganda",
    capital: "Kampala",
    languages: [
      "English",
      "Swahili"
    ],
    population: 45741000,
    flag: "https://flagcdn.com/ug.svg",
    currencies: [
      {
        code: "UGX",
        name: "Ugandan shilling",
        symbol: "Sh"
      }
    ]
  },
  {
    name: "Ukraine",
    capital: "Kyiv",
    languages: [
      "Ukrainian"
    ],
    population: 44134693,
    flag: "https://flagcdn.com/ua.svg",
    currencies: [
      {
        code: "UAH",
        name: "Ukrainian hryvnia",
        symbol: "₴"
      }
    ]
  },
  {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    languages: [
      "Arabic"
    ],
    population: 9890400,
    flag: "https://flagcdn.com/ae.svg",
    currencies: [
      {
        code: "AED",
        name: "United Arab Emirates dirham",
        symbol: "د.إ"
      }
    ]
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    languages: [
      "English"
    ],
    population: 67215293,
    flag: "https://flagcdn.com/gb.svg",
    currencies: [
      {
        code: "GBP",
        name: "British pound",
        symbol: "£"
      }
    ]
  },
  {
    name: "United States of America",
    capital: "Washington, D.C.",
    languages: [
      "English"
    ],
    population: 329484123,
    flag: "https://flagcdn.com/us.svg",
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$"
      }
    ]
  },
  {
    name: "Uruguay",
    capital: "Montevideo",
    languages: [
      "Spanish"
    ],
    population: 3473727,
    flag: "https://flagcdn.com/uy.svg",
    currencies: [
      {
        code: "UYU",
        name: "Uruguayan peso",
        symbol: "$"
      }
    ]
  },
  {
    name: "Uzbekistan",
    capital: "Tashkent",
    languages: [
      "Uzbek",
      "Russian"
    ],
    population: 34232050,
    flag: "https://flagcdn.com/uz.svg",
    currencies: [
      {
        code: "UZS",
        name: "Uzbekistani so'm",
        symbol: "so'm"
      }
    ]
  },
  {
    name: "Vanuatu",
    capital: "Port Vila",
    languages: [
      "Bislama",
      "English",
      "French"
    ],
    population: 307150,
    flag: "https://flagcdn.com/vu.svg",
    currencies: [
      {
        code: "VUV",
        name: "Vanuatu vatu",
        symbol: "Vt"
      }
    ]
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    capital: "Caracas",
    languages: [
      "Spanish"
    ],
    population: 28435943,
    flag: "https://flagcdn.com/ve.svg",
    currencies: [
      {
        code: "VEF",
        name: "Venezuelan bolívar",
        symbol: "Bs S"
      }
    ]
  },
  {
    name: "Vietnam",
    capital: "Hanoi",
    languages: [
      "Vietnamese"
    ],
    population: 97338583,
    flag: "https://flagcdn.com/vn.svg",
    currencies: [
      {
        code: "VND",
        name: "Vietnamese đồng",
        symbol: "₫"
      }
    ]
  },
  {
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    languages: [
      "French"
    ],
    population: 11750,
    flag: "https://flagcdn.com/wf.svg",
    currencies: [
      {
        code: "XPF",
        name: "CFP franc",
        symbol: "Fr"
      }
    ]
  },
  {
    name: "Western Sahara",
    capital: "El Aaiún",
    languages: [
      "Spanish"
    ],
    population: 510713,
    flag: "https://flagcdn.com/eh.svg",
    currencies: [
      {
        code: "MAD",
        name: "Moroccan dirham",
        symbol: "د.م."
      },
      {
        code: "DZD",
        name: "Algerian dinar",
        symbol: "د.ج"
      }
    ]
  },
  {
    name: "Yemen",
    capital: "Sana'a",
    languages: [
      "Arabic"
    ],
    population: 29825968,
    flag: "https://flagcdn.com/ye.svg",
    currencies: [
      {
        code: "YER",
        name: "Yemeni rial",
        symbol: "﷼"
      }
    ]
  },
  {
    name: "Zambia",
    capital: "Lusaka",
    languages: [
      "English"
    ],
    population: 18383956,
    flag: "https://flagcdn.com/zm.svg",
    currencies: [
      {
        code: "ZMW",
        name: "Zambian kwacha",
        symbol: "ZK"
      }
    ]
  },
  {
    name: "Zimbabwe",
    capital: "Harare",
    languages: [
      "English",
      "Shona",
      "Northern Ndebele"
    ],
    population: 14862927,
    flag: "https://flagcdn.com/zw.svg",
    currencies: [
      {
        code: "ZMW",
        name: "Zambian kwacha",
        symbol: "K"
      }
    ]
  }
]