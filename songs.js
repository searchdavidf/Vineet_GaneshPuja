/*
  ==========================================================
  GANESH CHATURTHI SONG DATABASE
  ==========================================================

  HOW TO ADD A NEW SONG

  1. Copy one complete song object.
  2. Give it a unique `id`.
  3. Set the visible category in `type`.
  4. Add the title in BOTH scripts.
  5. Split the song into logical verses.
  6. Inside every verse, keep Devanagari and Roman lines paired
     in the SAME order.

  IMPORTANT:
  - Every Devanagari line should have one corresponding Roman line.
  - Do not use <br> tags.
  - Put each lyric line inside quotes, separated by commas.
  - Put a comma after each verse object except the final one.
  - Put a comma after each song object except the final one.

  TEMPLATE:

  {
    id: "unique-song-id",
    type: "Ganesh Aarti",
    title: {
      devanagari: "गीत का नाम",
      roman: "Song Name"
    },
    verses: [
      {
        devanagari: [
          "पहली पंक्ति",
          "दूसरी पंक्ति"
        ],
        roman: [
          "Pehli Pankti",
          "Doosri Pankti"
        ]
      }
    ]
  }
*/

const SONGS = [

  // ========================================================
  // 1. JAI GANESH DEVA AARTI
  // ========================================================
  {
    id: "jai-ganesh-deva",
    type: "Ganesh Aarti",
    title: {
      devanagari: "जय गणेश देवा आरती",
      roman: "Jai Ganesh Deva Aarti"
    },
    verses: [
      {
        devanagari: [
          "जय गणेश, जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        roman: [
          "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva,",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      },
      {
        devanagari: [
          "जय गणेश, जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        roman: [
          "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva,",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      },
      {
        devanagari: [
          "एक दन्त दयावन्त, चार भुजाधारी।",
          "माथे सिन्दूर सोहे, मूसे की सवारी॥"
        ],
        roman: [
          "Ek Danta Dayavanta, Char Bhujadhari,",
          "Mathe Sindoor Sohe, Moose Ki Sawari."
        ]
      },
      {
        devanagari: [
          "पान चढ़े, फूल चढ़े और चढ़े मेवा।",
          "लड्डुअन का भोग लगे, सन्त करें सेवा॥"
        ],
        roman: [
          "Paan Chaddhe, Phool Chaddhe Aur Chaddhe Mewa,",
          "Ladduan Ka Bhog Lage, Sant Karein Sewa."
        ]
      },
      {
        devanagari: [
          "जय गणेश, जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        roman: [
          "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva,",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      },
      {
        devanagari: [
          "अंधेन को आँख देत, कोढिन को काया।",
          "बांझन को पुत्र देत, निर्धन को माया॥"
        ],
        roman: [
          "Andhen Ko Aankh Det, Kodhin Ko Kaya,",
          "Banjhan Ko Putra Det, Nirdhan Ko Maya."
        ]
      },
      {
        devanagari: [
          "'सूर' श्याम शरण आए, सफल कीजे सेवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        roman: [
          "'Soor' Shyam Sharan Aaye, Saphal Keeje Sewa,",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      },
      {
        devanagari: [
          "जय गणेश, जय गणेश, जय गणेश देवा।",
          "माता जाकी पार्वती, पिता महादेवा॥"
        ],
        roman: [
          "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva,",
          "Mata Jaki Parvati, Pita Mahadeva."
        ]
      }
    ]
  },

  // ========================================================
  // 2. SUKHKARTA DUKHHARTA AARTI
  // ========================================================
  {
    id: "sukhkarta-dukhharta",
    type: "Ganesh Aarti",
    title: {
      devanagari: "सुखकर्ता दुखहर्ता आरती",
      roman: "Sukhkarta Dukhharta Aarti"
    },
    verses: [
      {
        devanagari: [
          "सुखकर्ता दुखहर्ता वार्ता विघ्नाची।",
          "नुरवी पुरवी प्रेम कृपा जयाची।",
          "सर्वांगी सुंदर उटी शेंदुराची।",
          "कंठी झळके माळ मुक्ताफळांची॥"
        ],
        roman: [
          "Sukhkarta Dukhharta Varta Vighnachi,",
          "Nurvi Purvi Prem Kripa Jayachi.",
          "Sarvangi Sundar Uti Shendurachi,",
          "Kanthi Zalke Mal Muktaphalanchi."
        ]
      },
      {
        devanagari: [
          "जय देव जय देव जय मंगलमूर्ती।",
          "दर्शनमात्रे मनकामना पुर्ती॥ जय देव जय देव ॥"
        ],
        roman: [
          "Jai Dev Jai Dev Jai Mangal Murti,",
          "Darshanmatre Mankamna Purti, Jai Dev Jai Dev."
        ]
      },
      {
        devanagari: [
          "रत्नखचित फरा तुज गौरीकुमरा।",
          "चंदनाची उटी कुंकुमकेशरा।",
          "हीरेजडित मुकुट शोभतो बरा।",
          "रुणझुणती नूपुरे चरणी घागरिया॥"
        ],
        roman: [
          "Ratnakhachit Phara Tuj Gaurikumara,",
          "Chandanachi Uti Kunkumkeshara.",
          "Hirejadit Mukut Shobhto Bara,",
          "Runjhunti Nupure Charni Ghagariya."
        ]
      },
      {
        devanagari: [
          "जय देव जय देव जय मंगलमूर्ती।",
          "दर्शनमात्रे मनकामना पुर्ती॥ जय देव जय देव ॥"
        ],
        roman: [
          "Jai Dev Jai Dev Jai Mangal Murti,",
          "Darshanmatre Mankamna Purti, Jai Dev Jai Dev."
        ]
      },
      {
        devanagari: [
          "लंबोदर पीतांबर फणिवरबंधना।",
          "सरळ सोंड वक्रतुंड त्रिनयना।",
          "दास रामाचा वाट पाहे सदना।",
          "संकटी पावावे निर्वाणी रक्षावे सुरवरवंदना॥"
        ],
        roman: [
          "Lambodar Peetambar Phanivarbandhana,",
          "Saral Sond Vakratunda Trinayana.",
          "Daas Ramacha Vat Pahe Sadana,",
          "Sankati Pavave Nirvani Rakshave Suravarvandana."
        ]
      },
      {
        devanagari: [
          "जय देव जय देव जय मंगलमूर्ती।",
          "दर्शनमात्रे मनकामना पुर्ती॥ जय देव जय देव ॥"
        ],
        roman: [
          "Jai Dev Jai Dev Jai Mangal Murti,",
          "Darshanmatre Mankamna Purti, Jai Dev Jai Dev."
        ]
      }
    ]
  },

  // ========================================================
  // 3. SHENDUR LAL CHADHAYO
  // ========================================================
  {
    id: "shendur-lal-chadhayo",
    type: "Ganesh Aarti",
    title: {
      devanagari: "शेंदूर लाल",
      roman: "Shendur Lal Chadhayo"
    },
    verses: [
      {
        devanagari: [
          "शेंदूर लाल चढायो अच्छा गजमुख को",
          "दोंदिल लाल बिराजे सूत गौरिहर को",
          "हाथ लिए गुड लड्डू साई सुरवर को",
          "महिमा कहे ना जाय लागत हूँ पद को"
        ],
        roman: [
          "Shendur laal chadhayo achha gajamukha ko",
          "Dondil laal biraje suta Gaurihara ko",
          "Haath liye gud laddu sai suravara ko",
          "Mahima kahe na jaay lagat hoon pada ko"
        ]
      },
      {
        devanagari: [
          "जय देव जय देव",
          "जय जय जी गणराज विद्यासुखदाता",
          "धन्य तुम्हारा दर्शन मेरा मन रमता",
          "जय देव जय देव"
        ],
        roman: [
          "Jai Dev Jai Dev",
          "Jai Jai Ji Ganraj Vidyasukhdata",
          "Dhanya tumharo darshan mera man ramta",
          "Jai Dev Jai Dev"
        ]
      },
      {
        devanagari: [
          "अष्ट सिधि दासी संकट को बैरी",
          "विघन विनाशन मंगल मूरत अधिकारी",
          "कोटि सूरज प्रकाश ऐसे छबी तेरी",
          "गंडस्थल मडमस्तक झूल शणि बहरी"
        ],
        roman: [
          "Asht sidhi daasi sankat ko baeri",
          "Vighan vinashan mangal murat adhikari",
          "Koti suraj prakash aise chhabi teri",
          "Gandasthala madamastaka jhool shashi bahari"
        ]
      },
      {
        devanagari: [
          "जय देव जय देव",
          "जय जय जी गणराज विद्यासुखदाता",
          "धन्य तुम्हारा दर्शन मेरा मन रमता",
          "जय देव जय देव"
        ],
        roman: [
          "Jai Dev Jai Dev",
          "Jai Jai Ji Ganraj Vidyasukhdata",
          "Dhanya tumharo darshan mera man ramta",
          "Jai Dev Jai Dev"
        ]
      },
      {
        devanagari: [
          "भावभगत से कोई शरणागत आवे",
          "संतति संपत्ति सबही भरपूर पावे",
          "ऐसे तुम महाराज मोको अति भावे",
          "गोसावीनंदन निशदिन गुण गावे"
        ],
        roman: [
          "Bhavbhagat se koi sharnagat aave",
          "Santati sampatti sabhi bharpoor paave",
          "Aise tum maharaj moko ati bhaave",
          "Gosavinandan nishdin gun gaave"
        ]
      },
      {
        devanagari: [
          "जय देव जय देव",
          "जय जय जी गणराज विद्यासुखदाता",
          "धन्य तुम्हारा दर्शन मेरा मन रमता",
          "जय देव जय देव"
        ],
        roman: [
          "Jai Dev Jai Dev",
          "Jai Jai Ji Ganraj Vidyasukhdata",
          "Dhanya tumharo darshan mera man ramta",
          "Jai Dev Jai Dev"
        ]
      }
    ]
  },

  // ========================================================
  // 4. GHALEEN LOTANGAN AARTI
  // ========================================================
  {
    id: "ghaleen-lotangan",
    type: "Prayer / Aarti",
    title: {
      devanagari: "घालीन लोटांगण आरती",
      roman: "Ghaleen Lotangan Aarti"
    },
    verses: [
      {
        devanagari: [
          "घालीन लोटांगण वंदीन चरण।",
          "डोळ्यांनी पाहिन रूप तुझे॥",
          "प्रेमें आलिंगीन आनंद पूजन।",
          "भावे ओवाळिन म्हणे नामा॥"
        ],
        roman: [
          "Ghaleen lotangan vandin charan,",
          "Dolyani pahin roop tujhe.",
          "Premen aalingin aanand poojan,",
          "Bhave ovalin mhane Nama."
        ]
      },
      {
        devanagari: [
          "त्वमेव माता पिता त्वमेव।",
          "त्वमेव बंधुः सखा त्वमेव॥",
          "त्वमेव विद्या द्रविणं त्वमेव।",
          "त्वमेव सर्व मम देवदेव॥"
        ],
        roman: [
          "Tvameva mata pita tvameva,",
          "Tvameva bandhuh sakha tvameva.",
          "Tvameva vidya dravinam tvameva,",
          "Tvameva sarvam mama devadeva."
        ]
      },
      {
        devanagari: [
          "कायेन वाचा मनसेंद्रियैर्वा।",
          "बुद्ध्यात्मना वा प्रकृतेः स्वभावात्॥",
          "करोमि यद्यत् सकलं परस्मै।",
          "नारायणायेति समर्पयामि॥"
        ],
        roman: [
          "Kayena vaca manasendriyairva,",
          "Buddhyatmana va prakriteh svabhavat.",
          "Karomi yadyat sakalam parasmai,",
          "Narayanayeti samarpayami."
        ]
      },
      {
        devanagari: [
          "अच्युतं केशवं राम नारायणम्।",
          "कृष्णदामोदरं वासुदेवं भजे॥",
          "श्रीधरं माधवं गोपिकावल्लभम्।",
          "जानकीनायकं रामचंद्र भजे॥"
        ],
        roman: [
          "Achyutam keshavam rama narayanam,",
          "Krishnadamodaram vasudevam bhaje.",
          "Sreedharam madhavam gopikavallabham,",
          "Janakinayakam ramachandram bhaje."
        ]
      },
      {
        devanagari: [
          "हरे राम हरे राम राम राम हरे हरे।",
          "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे॥"
        ],
        roman: [
          "Hare Rama Hare Rama Rama Rama Hare Hare,",
          "Hare Krishna Hare Krishna Krishna Krishna Hare Hare."
        ]
      },
      {
        devanagari: [
          "॥ मंगलमुर्ती मोरया ॥",
          "॥ गणपती बाप्पा मोरया ॥"
        ],
        roman: [
          "|| Mangal Murti Morya ||",
          "|| Ganapati Bappa Morya ||"
        ]
      }
    ]
  },

  // ========================================================
  // 5. SHREE GANESH PANCHARATNAM
  // ========================================================
{
  "id": "ganesha-pancharatnam",
  "type": "Ganesh Stotra",
  "title": {
    "devanagari": "॥ गणेश पञ्चरत्नम् (मुदाकरात्त मोदकं) ॥",
    "roman": "Ganesha Pancharatnam (Mudakaratta Modakam)"
  },
  "verses": [
    {
      "devanagari": [
        "मुदाकरात्तमोदकं सदा विमुक्तिसाधकं",
        "कलाधरावतंसकं विलासिलोकरक्षकम् ।",
        "अनायकैकनायकं विनाशितेभदैत्यकं",
        "नताशुभाशुनाशकं नमामि तं विनायकम् ॥ १ ॥"
      ],
      "roman": [
        "Mudakaratta Modakam Sada Vimukti Sadhakam",
        "Kaladharavatamsakam Vilasi Loka Rakshakam |",
        "Anayakaika Nayakam Vinashitebha Daityakam",
        "Natashubhashu Nashakam Namami Tam Vinayakam || 1 ||"
      ]
    },
    {
      "devanagari": [
        "नतेतरातिभीकरं नवोदितार्कभास्वरं",
        "नमत्सुरारिनिर्जरं नताधिकारिउद्धरम् ।",
        "वेश्वरं गनेश्वरं गजेश्वरं सिंचेश्वरं",
        "मयूरपिञ्चभूषणम् समाहितं समाहितम् ॥ २ ॥"
      ],
      "roman": [
        "Natetarati Bheekaram Navoditarka Bhaswaram",
        "Namatsurarinarjakam Natadhikari Uddharam |",
        "Veshwaram Ganeshwaram Gajeshwaram Sincheswaram",
        "Mayura Pinchhabhooshanam Samahitam Samahitam || 2 ||"
      ]
    },
    {
      "devanagari": [
        "समस्तलोकशङ्करं निरस्तदैत्यकुञ्जरं",
        "दरेतरोदरं वरं वरेभवक्त्रमक्षरम् ।",
        "कृपाकरं क्षमाकरं मुदाकरं यशस्करं",
        "मनस्करं नमस्कृतां नमस्करोमि भास्वरम् ॥ ३ ॥"
      ],
      "roman": [
        "Samasta Loka Shankaram Nirasta Daitya Kunjaram",
        "Daretarodaram Varam Varebhavaktramaksharam |",
        "Kripakaram Kshamakaram Mudakaram Yashaskaram",
        "Manaskaram Namaskritam Namaskaromi Bhaswaram || 3 ||"
      ]
    },
    {
      "devanagari": [
        "अकिञ्चनार्तिमार्जनं चिरन्तनोक्तिभाजनं",
        "पुरारिपूर्वनन्दनं सुरारिगर्वचर्वणम् ।",
        "प्रपञ्चनाशभीषणं धनञ्जयादिभूषणं",
        "कपोलदानवारणं भजे पुराणवारणम् ॥ ४ ॥"
      ],
      "roman": [
        "Akinchanarti Marjanam Chirantanokti Bhajanam",
        "Purari Poorva Nandanam Surari Garva Charvanam |",
        "Prapancha Nasha Bheeshanam Dhananjayadi Bhooshanam",
        "Kapola Dana Varanam Bhaje Purana Varanam || 4 ||"
      ]
    },
    {
      "devanagari": [
        "नितान्तकान्तदन्तकान्तिमन्तकान्तकात्मजं",
        "अचिन्त्यरूपमन्तहीनमन्तरायकृन्तनम् ।",
        "ह्रुदन्तरे निरन्तरं वसन्तमेव योगिनां",
        "तमेकदन्तमेव तं विचिन्तयामि सन्ततम् ॥ ५ ॥"
      ],
      "roman": [
        "Nitanta Kanta Danta Kanti Mantakantakatmajam",
        "Achintya Roopam Anta Heenam Antaraya Krintanam |",
        "Hrudantare Nirantaram Vasantam Eva Yoginam",
        "Tam Ekadantam Eva Tam Vichintayami Santatam || 5 ||"
      ]
    }
  ]
},

  // ========================================================
  // 6. Hey Ganesh Gauri Putra
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
}

];
