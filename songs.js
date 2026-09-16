/*
  ==========================================================
  GANESH CHATURTHI SONG DATABASE
  ==========================================================
*/

const SONGS = [
  // ========================================================
  // 1. Ganesh Aarti
  // ========================================================
  {
    "id": "aarti",
    "type": "Ganesh Aarti",
    "title": {
      "devanagari": "जय गणेश जय गणेश जय गणेश देवा",
      "roman": "Jai Ganesh Jai Ganesh Jai Ganesh Deva"
    },
    "verses": [
      {
        "devanagari": [
          "जय गणेश जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥",
          "एक दंत दयावंत, चार भुजा धारी।",
          "माथे सिंदूर सोहे, मूसे की सवारी॥"
        ],
        "roman": [
          "Jai Ganesh Jai Ganesh, Jai Ganesh Deva.",
          "Mata Jaki Parvati, Pita Mahadeva.",
          "Ek Dant Dayavant, Char Bhuja Dhari.",
          "Mathe Sindoor Sohe, Moose Ki Sawari."
        ]
      },
      {
        "devanagari": [
          "जय गणेश जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥",
          "पान चढ़े फल चढ़े, और चढ़े मेवा।",
          "लड्डुअन का भोग लगे, संत करें सेवा॥"
        ],
        "roman": [
          "Jai Ganesh Jai Ganesh, Jai Ganesh Deva.",
          "Mata Jaki Parvati, Pita Mahadeva.",
          "Paan Chadhe Phal Chadhe, Aur Chadhe Mewa.",
          "Ladduan Ka Bhog Lage, Sant Karen Sewa."
        ]
      },
      {
        "devanagari": [
          "जय गणेश जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥",
          "अंधन को आंख देत, कोढिन को काया।",
          "बांझन को पुत्र देत, निर्धन को माया॥"
        ],
        "roman": [
          "Jai Ganesh Jai Ganesh, Jai Ganesh Deva.",
          "Mata Jaki Parvati, Pita Mahadeva.",
          "Andhan Ko Aankh Det, Kodhin Ko Kaya.",
          "Banjhan Ko Putr Det, Nirdhan Ko Maya."
        ]
      },
      {
        "devanagari": [
          "जय गणेश जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥",
          "'सूर' श्याम शरण आए, सफल कीजे सेवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        "roman": [
          "Jai Ganesh Jai Ganesh, Jai Ganesh Deva.",
          "Mata Jaki Parvati, Pita Mahadeva.",
          "'Soor' Shyam Sharan Aaye, Saphal Keeje Sewa.",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      },
      {
        "devanagari": [
          "जय गणेश जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥",
          "दीनन की लाज रखो, शंभु सुतकारी।",
          "कामना को पूर्ण करो, जाऊं बलिहारी॥",
          "जय गणेश जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        "roman": [
          "Jai Ganesh Jai Ganesh, Jai Ganesh Deva.",
          "Mata Jaki Parvati, Pita Mahadeva.",
          "Deenan Ki Laaj Rakho, Shambhu Sutkari.",
          "Kaamna Ko Poorn Karo, Jaoon Balihari.",
          "Jai Ganesh Jai Ganesh, Jai Ganesh Deva.",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      }
    ]
  },

  // ========================================================
  // 2. Sukhkarta Dukhharta
  // ========================================================
  {
    "id": "sukh-karta-dukh-harta",
    "type": "Ganesh Aarti",
    "title": {
      "devanagari": "सुख करता दुखहर्ता",
      "roman": "Sukh Karta Dukh Harta"
    },
    "verses": [
      {
        "devanagari": [
          "सुख करता दुखहर्ता, वार्ता विघ्नाची",
          "नूर्वी पूर्वी प्रेम कृपा जयाची",
          "सर्वांगी सुन्दर उटी शेंदु राची",
          "कठी झलके माल मुकताफळाबी",
          "जय देव जय देव, जय माल मूर्ति",
          "दर्शनमात्रे मनःकमाना पूर्ति",
          "जय देव जय देव"
        ],
        "roman": [
          "Sukh Karta Dukhharta, Varta Vighnachi",
          "Nurvi Purvi Prem Kripa Jayachi",
          "Sarvangi Sundar Uti Shendu Rachi",
          "Kathi Jhalke Maal Muktaphalabi",
          "Jai Dev Jai Dev, Jai Maal Moorti",
          "Darshanmatre Manahkamana Poorti",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "रत्नखचित फरा तुझ गौरीकुमरा",
          "चादनाची उटी कुमकुम केशरा",
          "हीरे जडित मुकुट शोभतो बरा",
          "रुन्झुनती नूपुरे चरनी घागरिया",
          "जय देव जय देव, जय माल मूर्ति",
          "दर्शनमात्रे मनःकमाना पूर्ति",
          "जय देव जय देव"
        ],
        "roman": [
          "Ratnakachit Phara Tujh Gaurikumara",
          "Chandanachi Uti Kumkum Keshara",
          "Heere Jadit Mukut Shobhato Bara",
          "Runjhunti Nupure Charni Ghagariya",
          "Jai Dev Jai Dev, Jai Maal Moorti",
          "Darshanmatre Manahkamana Poorti",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "लम्बोदर पीताम्बर फनिवर वाद्यना",
          "सरल सोख वक्रतुण्डा त्रिनयना",
          "दास रामाचा वाट पाहे सदना",
          "साक्कटी पावावे निर्वाणी रक्षावे सुरवर वाद्यना",
          "जय देव जय देव, जय माल मूर्ति",
          "दर्शनमात्रे मनःकमाना पूर्ति",
          "जय देव जय देव"
        ],
        "roman": [
          "Lambodar Peetambar Phanivar Vadyana",
          "Saral Sokh Vakratunda Trinayana",
          "Daas Ramacha Vaat Paahe Sadana",
          "Sakkati Paavave Nirvani Rakshave Survar Vadyana",
          "Jai Dev Jai Dev, Jai Maal Moorti",
          "Darshanmatre Manahkamana Poorti",
          "Jai Dev Jai Dev"
        ]
      }
    ]
  },

  // ========================================================
  // 3. Shendur Laal Chadhayo
  // ========================================================
  {
    "id": "shendur-laal-chadhayo",
    "type": "Ganesh Aarti",
    "title": {
      "devanagari": "शेंदुर लाल चढ़ायो",
      "roman": "Shendur Laal Chadhayo"
    },
    "verses": [
      {
        "devanagari": [
          "शेंदुर लाल चढ़ायो अच्छा गजमुख को",
          "दोन्दिल लाल बिराजे सूत गौरिहर को",
          "हाथ लिए गुड लड्डू साईं सुरवर को",
          "महिमा कहे ना जाय लागत हूँ पद को",
          "जय देव जय देव"
        ],
        "roman": [
          "Shendur Laal Chadhayo Achha Gajmukh Ko",
          "Dondil Laal Biraje Soot Gaurihar Ko",
          "Haath Liye Gud Laddu Sain Survar Ko",
          "Mahima Kahe Na Jaay Lagat Hoon Pad Ko",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "जय जय जी गणराज विद्यासुखदाता",
          "धन्य तुम्हारा दर्शन मेरा मत रमता",
          "जय देव जय देव"
        ],
        "roman": [
          "Jai Jai Jee Ganraj Vidyasukhdata",
          "Dhanya Tumhara Darshan Mera Mat Ramta",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "अष्ट सिधि दासी सकट को बैरी",
          "विघन विनाशन मंगल मूरत अधिकारी",
          "कोटि सूरज प्रकाश ऐसे बी तेरी",
          "गंडस्थल मडास्तक झूल शशिर बहरी"
        ],
        "roman": [
          "Asht Sidhi Daasi Sakat Ko Bairi",
          "Vighan Vinashan Mangal Moorat Adhikari",
          "Koti Sooraj Prakash Aise Bee Teri",
          "Gandsthal Madashtak Jhool Shashir Bahari"
        ]
      },
      {
        "devanagari": [
          "जय जय जी गणराज विद्यासुखदाता",
          "धन्य तुम्हारा दर्शन मेरा मत रमता",
          "जय देव जय देव"
        ],
        "roman": [
          "Jai Jai Jee Ganraj Vidyasukhdata",
          "Dhanya Tumhara Darshan Mera Mat Ramta",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "भावभगत से कोई शरणागत आवे",
          "सन्तति संपत्ति सबही भरपूर पावे",
          "ऐसे तुम महाराज मोको अति भावे",
          "गोसावीनन्दन निशिदिन गुण गावे",
          "जय देव जय देव"
        ],
        "roman": [
          "Bhavbhagat Se Koi Sharnagat Aave",
          "Santati Sampatti Sabhi Bharpoor Paave",
          "Aise Tum Maharaj Moko Ati Bhaave",
          "Gosaveenandan Nishidin Gun Gaave",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "जय जय श्री गणराज विद्या सुखदाता",
          "धन्य तुम्हारा दर्शन मेरा मन रमता",
          "जय देव जय देव"
        ],
        "roman": [
          "Jai Jai Shree Ganraj Vidya Sukhdata",
          "Dhanya Tumhara Darshan Mera Man Ramta",
          "Jai Dev Jai Dev"
        ]
      },
      {
        "devanagari": [
          "घालीन लोटांगण वंदिन चरन",
          "डोळ्यांनी पाहीन रूप तुझे",
          "प्रेम आलिंगिन आनंदे पूजी",
          "भावे ओवालिन म्हणे नामा"
        ],
        "roman": [
          "Ghaalin Lotangan Vandin Charan",
          "Dolyani Paahin Roop Tujhe",
          "Prem Aalingin Aande Pooji",
          "Bhave Owalin Mhane Nama"
        ]
      },
      {
        "devanagari": [
          "त्वमेव माता च पिता त्वमेव",
          "त्वमेव बन्धू च सखा त्वमेव",
          "त्वमेव विद्या द्रविणं त्वमेव",
          "त्वमेव सर्वं मम देव देव"
        ],
        "roman": [
          "Tvameva Mata Cha Pita Tvameva",
          "Tvameva Bandhu Cha Sakha Tvameva",
          "Tvameva Vidya Dravinam Tvameva",
          "Tvameva Sarvam Mama Dev Dev"
        ]
      },
      {
        "devanagari": [
          "कायेन वाचा मनसेंद्रियैर्वा",
          "बुद्ध्यात्मना वा प्रकृतेः स्वभावात",
          "करोमि यद्यत् सकलं परस्मै",
          "नारायणायेति समर्पयामि ॥"
        ],
        "roman": [
          "Kayena Vacha Manasendriyairva",
          "Buddhyatmana Va Prakriteh Swabhavat",
          "Karomi Yadyat Sakalam Parasmai",
          "Narayanayeti Samarpayami ||"
        ]
      },
      {
        "devanagari": [
          "श्री कृष्ण गोविन्द हरे मुरारे",
          "हे नाथ नारायण वासुदेव ।"
        ],
        "roman": [
          "Shree Krishna Govind Hare Murare",
          "Hey Nath Narayan Vasudev."
        ]
      }
    ]
  },

  

  // ========================================================
  // 5. Ek Dantay
  // ========================================================
  {
    "id": "ek-dantay-vakratundaye",
    "type": "Ganesh Stuti / Song",
    "title": {
      "devanagari": "एकदंताय वक्रतुण्डाय",
      "roman": "Ek Dantay Vakratundaye"
    },
    "verses": [
      {
        "devanagari": [
          "गणनायकाय गणदेवताय गणाध्यक्षाय धीमहि",
          "गुणशरीराय गुणमण्डिताय गुणेशानाय धीमहि",
          "गुणातीताय गुणाधीशाय गुणप्रविष्टाय धीमहि",
          "एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि",
          "गजेशानाय भालचन्द्राय श्रीगणेशाय धीमहि"
        ],
        "roman": [
          "Gananayakaya Ganadevataya Ganadhyakshaya Dheemahi",
          "Gunashareeraya Gunamanditaya Guneshanaya Dheemahi",
          "Gunateetaya Gunadheeshaya Gunapravishtaya Dheemahi",
          "Ekadantaya Vakratundaya Gauritanaya Dheemahi",
          "Gajeshanaya Bhalachandraya ShreeGaneshaya Dheemahi"
        ]
      },
      {
        "devanagari": [
          "गानसाराय गानतत्त्वाय गानगोत्राय धीमहि",
          "गूढगुल्फाय गन्धमत्ताय गोजयप्रदाय धीमहि",
          "गुणातीताय गुणाधीशाय गुणप्रविष्टाय धीमहि",
          "एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि",
          "गजेशानाय भालचन्द्राय श्रीगणेशाय धीमहि"
        ],
        "roman": [
          "Gaansaraya Gaantattvaya Gaangotraya Dheemahi",
          "Goodhagulphaya Gandhamattaya Gojayapradaya Dheemahi",
          "Gunateetaya Gunadheeshaya Gunapravishtaya Dheemahi",
          "Ekadantaya Vakratundaya Gauritanaya Dheemahi",
          "Gajeshanaya Bhalachandraya ShreeGaneshaya Dheemahi"
        ]
      },
      {
        "devanagari": [
          "गौरीप्रणयाय गौरीप्रवणाय गौरभावाय धीमहि",
          "गोसहस्राय गोवर्धनाय गोपगोपाय धीमहि",
          "गुणातीताय गुणाधीशाय गुणप्रविष्टाय धीमहि",
          "एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि",
          "गजेशानाय भालचन्द्राय श्रीगणेशाय धीमहि"
        ],
        "roman": [
          "Gauripranayaya Gauripravanaya Gaurabhavaya Dheemahi",
          "Gosahasraya Govardhanaya Gopagopaya Dheemahi",
          "Gunateetaya Gunadheeshaya Gunapravishtaya Dheemahi",
          "Ekadantaya Vakratundaya Gauritanaya Dheemahi",
          "Gajeshanaya Bhalachandraya ShreeGaneshaya Dheemahi"
        ]
      }
    ]
  },

  // ========================================================
  // 6. Shri Ganesh Stuti
  // ========================================================
  {
    "id": "shri-ganesh-stuti",
    "type": "Ganesh Stuti",
    "title": {
      "devanagari": "॥ श्री गणेश स्तुति ॥",
      "roman": "Shri Ganesh Stuti"
    },
    "verses": [
      {
        "devanagari": [
          "हे गणेश गौरीपुत्र एकदन्त महावीर,",
          "लम्बोदर भालचन्द्र, सृष्टि के विधाता हैं।",
          "वे प्रथम पूजनीय देवों में हैं सर्वश्रेष्ठ,",
          "देते ध्यान उसपे हैं, ध्यान जो लगाता है।",
          "विघ्न के विनाशक हैं स्वामी रिद्धि-सिद्धि के हैं,",
          "आता जो भी सामने है शीश वो झुकाता है।",
          "सच्चे मन से पुकारे आपको जो उसका तो,",
          "हर एक काम बिन बाधा बन जाता है।"
        ],
        "roman": [
          "He Ganesh Gauriputra Ekdanta Mahaveer,",
          "Lambodara Bhalachandra, Srishti Ke Vidhata Hain.",
          "Ve Pratham Poojaniya Devon Mein Hain Sarvashreshtha,",
          "Dete Dhyan Uspe Hain, Dhyan Jo Lagata Hai.",
          "Vighna Ke Vinashak Hain Swami Riddhi-Siddhi Ke Hain,",
          "Aata Jo Bhi Samne Hai Sheesh Vo Jhukata Hai.",
          "Sacche Man Se Pukare Aapko Jo Uska To,",
          "Har Ek Kaam Bin Badha Ban Jata Hai."
        ]
      },
      {
        "devanagari": [
          "अष्टसिद्धि-बुद्धि-ज्ञान-भक्ति के निधान प्रभु,",
          "चरणों में आपकी जो प्रीति नित लगाता है।",
          "मूषक की असवारी साजे, मोदक अति प्यारे लगे,",
          "जन-जन के जीवन से संकट मिटाता है।",
          "मोहि-मोहि रूप देखि जग यह निहाल होवे,",
          "नाम तेरा जप के ही भव तर जाता है।",
          "सच्चे मन से पुकारे आपको जो उसका तो,",
          "हर एक काम बिन बाधा बन जाता है।"
        ],
        "roman": [
          "Ashtasiddhi-Buddhi-Gyan-Bhakti Ke Nidhan Prabhu,",
          "Charanon Mein Aapki Jo Preeti Nit Lagata Hai.",
          "Mooshak Ki Asavari Saje, Modak Ati Pyare Lage,",
          "Jan-Jan Ke Jeevan Se Sankat Mitata Hai.",
          "Mohi-Mohi Roop Dekhi Jag Yah Nihal Hove,",
          "Naam Tera Jap Ke Hee Bhav Tar Jata Hai.",
          "Sacche Man Se Pukare Aapko Jo Uska To,",
          "Har Ek Kaam Bin Badha Ban Jata Hai."
        ]
      },
      {
        "devanagari": [
          "गौरीपुत्र विघ्नराज ज्ञान के आगार स्वामी,",
          "शरण तिहारी जो भी श्रद्धा से आता है।",
          "सिंदूर सोहे अंग, माथे चंद्र की छटा न्यारी,",
          "भक्तन के हेत प्रभु संकट उठाता है।",
          "मंगलमयी मूरति से पावन दिशाएँ होवें,",
          "सकल मनोरथ को पल में पुराता है।",
          "सच्चे मन से पुकारे आपको जो उसका तो,",
          "हर एक काम बिन बाधा बन जाता है।"
        ],
        "roman": [
          "Gauriputra Vighnaraj Gyan Ke Aagar Swami,",
          "Sharan Tihari Jo Bhi Shraddha Se Aata Hai.",
          "Sindoor Sohe Ang, Mathe Chandra Ki Chhata Nyari,",
          "Bhaktan Ke Het Prabhu Sankat Uthata Hai.",
          "Mangalamayi Murati Se Pawan Dishaen Hoven,",
          "Sakal Manorath Ko Pal Mein Purata Hai.",
          "Sacche Man Se Pukare Aapko Jo Uska To,",
          "Har Ek Kaam Bin Badha Ban Jata Hai."
        ]
      }
    ]
  },
  // ========================================================
  // 8. Shlokas
  // ========================================================
  {
    "id": "shloks",
    "type": "Shloka / Mantra Collection",
    "title": {
      "devanagari": "श्लोक",
      "roman": "Shlok's"
    },
    "verses": [
      {
        "devanagari": [
          "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्।",
          "सदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥"
        ],
        "roman": [
          "Karpura-Gauram Karuna-Avataram Sansara-Saaram Bhujagendra-Haram |",
          "Sada Vasantam Hridayaravinde Bhavam Bhavani-Sahitam Namami ||"
        ]
      },
      {
        "devanagari": [
          "मंगलम भगवान विष्णु, मंगलम गरुड़ध्वजः ।",
          "मंगलम पुन्डरी काक्षो, मंगलायतनो हरि ॥"
        ],
        "roman": [
          "Mangalam Bhagawan Vishnu, Mangalam Garudadhwajah |",
          "Mangalam Pundari Kaksho, Mangalayatano Hari ||"
        ]
      },
      {
        "devanagari": [
          "सर्व मंगल मांगल्ये शिवे सर्वार्थ साधिके ।",
          "शरण्ये त्र्यम्बके गौरी नारायणी नमोस्तुते ॥"
        ],
        "roman": [
          "Sarva Mangala Maangalye Shive Sarvaartha Saadhike |",
          "Sharanye Tryambake Gauri Narayani Namostute ||"
        ]
      },
      {
        "devanagari": [
          "त्वमेव माता च पिता त्वमेव",
          "त्वमेव बन्धू च सखा त्वमेव",
          "त्वमेव विद्या द्रविणं त्वमेव",
          "त्वमेव सर्वं मम देव देव"
        ],
        "roman": [
          "Tvameva Mata Cha Pita Tvameva",
          "Tvameva Bandhu Cha Sakha Tvameva",
          "Tvameva Vidya Dravinam Tvameva",
          "Tvameva Sarvam Mama Dev Dev"
        ]
      },
      {
        "devanagari": [
          "कायेन वाचा मनसेंद्रियैर्वा",
          "बुद्ध्यात्मना वा प्रकृतेः स्वभावात",
          "करोमि यद्यत् सकलं परस्मै",
          "नारायणायेति समर्पयामि ॥"
        ],
        "roman": [
          "Kayena Vacha Manasendriyairva",
          "Buddhyatmana Va Prakriteh Swabhavat",
          "Karomi Yadyat Sakalam Parasmai",
          "Narayanayeti Samarpayami ||"
        ]
      },
      {
        "devanagari": [
          "श्री कृष्ण गोविन्द हरे मुरारे",
          "हे नाथ नारायण वासुदेव ।"
        ],
        "roman": [
          "Shree Krishna Govind Hare Murare",
          "Hey Nath Narayan Vasudev."
        ]
      },
{
  "id": "iphone-ho-ya-samsung",
  "type": "Ganesh Chants / Trendy Slogans",
  "title": {
    "devanagari": "आईफोन हो या सैमसंग (गणपति बाप्पा हैंडसम)",
    "roman": "iPhone Ho Ya Samsung (Ganpati Bappa Handsome)"
  },
  "verses": [
    {
      "devanagari": [
        "iPhone हो या Samsung,",
        "गणपति बाप्पा हैंडसम!"
      ],
      "roman": [
        "iPhone ho ya Samsung,",
        "Ganpati Bappa handsome!"
      ]
    },
    {
      "devanagari": [
        "China हो या कोरिया,",
        "गणपति बाप्पा मोरया!"
      ],
      "roman": [
        "China ho ya Korea,",
        "Ganpati Bappa Morya!"
      ]
    },
    {
      "devanagari": [
        "जलेबी ने फाफड़ा,",
        "गणपति बाप्पा आफ़ड़ा!"
      ],
      "roman": [
        "Jalebi ne Fafda,",
        "Ganpati Bappa Aafda!"
      ]
    },
    {
      "devanagari": [
        "गली-गली में गड्ढे हैं,",
        "गणपति सबसे अच्छे हैं!"
      ],
      "roman": [
        "Gali-gali mein gaddhe hain,",
        "Ganpati sabse achhe hain!"
      ]
    },
    {
      "devanagari": [
        "एक टमाटर ताज़ा,",
        "गणपति बाप्पा राजा!"
      ],
      "roman": [
        "Ek tamatar taaza,",
        "Ganpati Bappa Raja!"
      ]
    },
    {
      "devanagari": [
        "Twinkle Twinkle लिटिल स्टार,",
        "गणपति हैं सुपरस्टार!"
      ],
      "roman": [
        "Twinkle Twinkle little star,",
        "Ganpati hain superstar!"
      ]
    }
  ]
}
// ========================================================
  // 4. Mudakaratmodkam
  // ========================================================
  {
    "id": "mudakaratmodkam",
    "type": "Ganesh Stotram",
    "title": {
      "devanagari": "मुदाकरात्तमोदकं (गणेश पञ्चरत्नम्)",
      "roman": "Mudakaratmodkam (Ganesha Pancharatnam)"
    },
    "verses": [
      {
        "devanagari": [
          "मुदाकरात्तमोदकं सदा विमुक्तिसाधकं",
          "कलाधरावतंसकं विलासिलोकरक्षकम्।",
          "अनायकैकनायकं विनाशितेभदैत्यकं",
          "नताशुभाशुनाशकं नमामि तं विनायकम् ॥१॥"
        ],
        "roman": [
          "Mudaakaraatta-Modakam Sadaa Vimukti-Saadhakam",
          "Kalaadhara-Avatamsakam Vilaasi-Loka-Rakshakam |",
          "Anaayakaika-Naayakam Vinaashita-Ebha-Daityakam",
          "Nata-Ashubha-Ashu-Naashakam Namaami Tam Vinaayakam ||1||"
        ]
      },
      {
        "devanagari": [
          "नतेतरातिभीकरं नवोदितार्कभास्वरं",
          "नमत्सुरारिनिर्झरं नताधिकापदुद्धरम्।",
          "सुरेश्वरं निधीश्वरं गजेश्वरं गणेश्वरं",
          "महेश्वरं तमाश्रये परात्परं निरन्तरम् ॥२॥"
        ],
        "roman": [
          "Natetara-Ati-Bheekaram Navodita-Arka-Bhaaswaram",
          "Namatsuraari-Nirjharam Nata-Adhikaapad-Uddharam |",
          "Sureshwaram Nidheshwaram Gajeshwaram Ganeshwaram",
          "Maheshwaram Tamaashraye Paraatparam Nirantaram ||2||"
        ]
      },
      {
        "devanagari": [
          "समस्तलोकशंकरं निरस्तदैत्यकुञ्जरं",
          "दरेतरोदरं वरं वरेभवक्त्रमक्षरम्।",
          "कृपाकरं क्षमाकरं मुदाकरं यशस्करं",
          "मनस्करं नमस्कृतां नमस्करोमि भास्वरम् ॥३॥"
        ],
        "roman": [
          "Samasta-Loka-Shankaram Nirasta-Daitya-Kunjaram",
          "Daretarodaram Varam Varebhavaktramaksharam |",
          "Kripaakaram Kshamaakaram Mudaakaram Yashaskaram",
          "Manaskaram Namaskritaam Namaskaromi Bhaaswaram ||3||"
        ]
      },
      {
        "devanagari": [
          "अकिंचनार्तिमार्जनं चिरन्तनोक्तिभाजनं",
          "पुरारिपूर्वनन्दनं सुरारिगर्वचर्वणम्।",
          "प्रपञ्चनाशभीषणं धनंजयादिभूषणम्",
          "कपोलदानवारणम् भजे पुराणवारणम् ॥४॥"
        ],
        "roman": [
          "Akinchanarti-Marjanam Chirantanokti-Bhajanam",
          "Puraari-Poorva-Nandanam Suraari-Garva-Charvanam |",
          "Prapancha-Naasha-Bheeshanam Dhananjayaadi-Bhooshanam",
          "Kapola-Daana-Vaaranam Bhaje Puraana-Vaaranam ||4||"
        ]
      },
      {
        "devanagari": [
          "नितान्तकान्तदन्तकान्तिमन्तकान्तकात्मजं",
          "अचिन्त्यरूपमन्तहीनमन्तरायकृन्तनम्।",
          "हृदन्तरे निरन्तरं वसन्तमेव योगिनां",
          "तमेकदन्तमेव तं विचिन्तयामि सन्ततम् ॥५॥"
        ],
        "roman": [
          "Nitaanta-Kaanta-Danta-Kaantimantakaantakaatmajam",
          "Achintya-Roopam-Anta-Heenam-Antaraaya-Krintanam |",
          "Hridantare Nirantaram Vasantameva Yoginaam",
          "Tam-Ekadantam-Eva Tam Vichintayaami Santatam ||5||"
        ]
      },
      {
        "devanagari": [
          "महागणेशपञ्चरत्नमादरेण योऽन्वहं",
          "प्रजल्पति प्रभातके हृदि स्मरन् गणेश्वरम्।",
          "अरोगतामदोषतां सुसाहितीं सुपुत्रतां",
          "समाहितायुरष्टभूतिमभ्युपैति सोऽचिरात् ॥६॥"
        ],
        "roman": [
          "Mahaa-Ganesha-Pancharatnam-Aadarena Yo'nvaham",
          "Prajalpati Prabhaatake Hridi Smaran Ganeshwaram |",
          "Arogataam Adoshataam Susaahiteem Suputrataam",
          "Samaahitaayur-Ashtabhootim-Abhyupaiti So'chiraat ||6||"
        ]
      }
    ]
  },
    ]
  },
  // ========================================================
  // 7. Ghar Me Padharo
  // ========================================================
  {
    "id": "ghar-mai-padharo",
    "type": "Ganesh Bhajan",
    "title": {
      "devanagari": "घर में पधारो गजाननजी",
      "roman": "Ghar Mai Padharo"
    },
    "verses": [
      {
        "devanagari": [
          "घर में पधारो गजाननजी, मेरे घर में पधारो,",
          "रिद्धि सिद्धि लेके आओ गणराजा, मेरे घर में पधारो।"
        ],
        "roman": [
          "Ghar Mein Padharo Gajananji, Mere Ghar Mein Padharo,",
          "Riddhi Siddhi Leke Aao Ganraaja, Mere Ghar Mein Padharo."
        ]
      },
      {
        "devanagari": [
          "राम जी आना, लक्ष्मण जी आना,",
          "संग में लाना सीता मैया, मेरे घर में पधारो ॥"
        ],
        "roman": [
          "Ram Jee Aana, Laxman Jee Aana,",
          "Sang Mein Laana Sita Maiya, Mere Ghar Mein Padharo."
        ]
      },
      {
        "devanagari": [
          "ब्रम्हा जी आना, विष्णु जी आना,",
          "भोले शशंकर जी को ले आना, मेरे घर में पधारो ॥"
        ],
        "roman": [
          "Bramha Jee Aana, Vishnu Jee Aana,",
          "Bhole Shashankar Jee Ko Le Aana, Mere Ghar Mein Padharo."
        ]
      },
      {
        "devanagari": [
          "लक्ष्मी जी आना, गौरी जी आना,",
          "सरस्वती मैया को ले आना, मेरे घर में पधारो ॥"
        ],
        "roman": [
          "Laxmi Jee Aana, Gauri Jee Aana,",
          "Saraswati Maiya Ko Le Aana, Mere Ghar Mein Padharo."
        ]
      },
      {
        "devanagari": [
          "विघन को हारना, मंगल करना,",
          "कारज शुभ कर जाना, मेरे घर में पधारो ॥"
        ],
        "roman": [
          "Vighan Ko Haarna, Mangal Karna,",
          "Kaaraj Shubh Kar Jaana, Mere Ghar Mein Padharo."
        ]
      },
      {
        "devanagari": [
          "घर में पधारो गजाननजी, मेरे घर में पधारो,",
          "रिद्धि सिद्धि लेके आओ गणराजा, मेरे घर में पधारो।"
        ],
        "roman": [
          "Ghar Mein Padharo Gajananji, Mere Ghar Mein Padharo,",
          "Riddhi Siddhi Leke Aao Ganraaja, Mere Ghar Mein Padharo."
        ]
      }
    ]
  },
  // ========================================================
  // 7. Hey Gannayak
  // ========================================================
{
  "id": "hey-gannayak-siddhivinayak",
  "type": "Ganesh Bhajan",
  "title": {
    "devanagari": "हे गणनायक सिद्धिविनायक",
    "roman": "Hey Gannayak Siddhivinayak"
  },
  "verses": [
    {
      "devanagari": [
        "हे गणनायक सिद्धिविनायक,",
        "सुन लो मेरी पुकार,",
        "गजानन विनती बारंबार।"
      ],
      "roman": [
        "Hey gannayak siddhivinayak,",
        "Sunlo meri pukar,",
        "Gajanan vintee barambar."
      ]
    },
    {
      "devanagari": [
        "पार्वती शिव के हो दुलारे,",
        "सब देवों में सबसे न्यारे,",
        "मूषक चढ़ तुम अब तो आओ,",
        "करूँ तुम्हारी मनुहार,",
        "गजानन विनती बारंबार।"
      ],
      "roman": [
        "Parvati shiv ke ho dulare,",
        "Sab devo me sabse nyare,",
        "Mushak chadh tum ab to aao,",
        "Karo tumhari manuhar,",
        "Gajanan vintee barambar."
      ]
    },
    {
      "devanagari": [
        "रिद्धि सिद्धि के तुम हो दाता,",
        "भक्त जनों के भाग्य विधाता,",
        "बीच भंवर जो अटके नैया,",
        "करते भव से पार,",
        "गजानन विनती बारंबार।"
      ],
      "roman": [
        "Riddhi siddhi ke tum ho data,",
        "Bhakt jano ke bhagya vidhata,",
        "Beech bhanvar jo atke naiyaa,",
        "Karte bhav se paar,",
        "Gajanan vintee barambar."
      ]
    },
    {
      "devanagari": [
        "हे गणनायक सिद्धिविनायक,",
        "सुन लो मेरी पुकार,",
        "गजानन विनती बारंबार।"
      ],
      "roman": [
        "Hey gannayak siddhivinayak,",
        "Sunlo meri pukar,",
        "Gajanan vintee barambar."
      ]
    }
  ]
}
];
