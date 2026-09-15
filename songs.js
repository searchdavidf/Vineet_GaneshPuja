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
    id: "shree-ganesh-pancharatnam",
    type: "Ganesh Stotram",
    title: {
      devanagari: "श्री गणेश पञ्चरत्नम्",
      roman: "Shree Ganesh Pancharatnam"
    },
    verses: [
      {
        devanagari: [
          "मुदाकरात्तमोदकं सदा विमुक्तिसाधकं",
          "कलाधरावतंसकं विलासिलोकरक्षकम्।",
          "अनायकैकनायकं विनाशितेभदैत्यकं",
          "नताशुभाशुनाशकं नमामि तं विनायकम्॥"
        ],
        roman: [
          "Muda Karatta Modakam Sada Vimukti Sadhakam",
          "Kala Dharavatansakam Vilasi Loka Rakshakam |",
          "Anayakaika Nayakam Vinashita Ibha Daityakam",
          "Nata Ashubhashu Nashakam Namami Tam Vinayakam ||"
        ]
      },
      {
        devanagari: [
          "नतेतरातिभीकरं नवोदितार्कभास्वरं",
          "नमत्सुरारिनिर्जरं नताधिकापदुद्धरम्।",
          "सुरेश्वरं नीतेश्वरं गजेश्वरं गणेश्वरं",
          "महेश्वरं तमाश्रये परात्परं निरंतरम्॥"
        ],
        roman: [
          "Natetarati Bheekaram Navoditarka Bhasvaram",
          "Namatsurar Nirjaram Natadhikapaduddharam |",
          "Sureshvaram Niteeshvaram Gajeshvaram Ganeshavaram",
          "Maheshvaram Tamashraye Paratparam Nirantaram ||"
        ]
      }
    ]
  },

  // ========================================================
  // 6. GAURA TERA LAAL
  // ========================================================
  {
    id: "gaura-tera-laal",
    type: "Ganesh Bhajan",
    title: {
      devanagari: "गौरा तेरा लाल",
      roman: "Gaura Tera Laal"
    },
    verses: [
      {
        devanagari: [
          "गौरा तेरा लाल देवों में सबसे प्यारा है।",
          "रिद्धि-सिद्धि का दाता, विघ्नों का हरने वाला है॥"
        ],
        roman: [
          "Gaura tera laal devo mein sabse pyara hai,",
          "Riddhi-Siddhi ka data, vighno ka harne wala hai."
        ]
      },
      {
        devanagari: [
          "माथे चन्दन सोहे, कान बड़े-बड़े प्यारे हैं।",
          "मोदक का भोग लगे, मूषक असवारी है॥"
        ],
        roman: [
          "Mathe chandan sohe, kaan bade-bade pyare hain,",
          "Modak ka bhog lage, mooshak aswari hai."
        ]
      },
      {
        devanagari: [
          "प्रथम पूज्य गजानन, महिमा तेरी भारी है।",
          "चरणों में शीश नवाएँ, दुनिया यह सारी है॥"
        ],
        roman: [
          "Pratham poojya Gajanan, mahima teri bhari hai,",
          "Charnon mein sheesh nawayein, duniya yeh sari hai."
        ]
      },
      {
        devanagari: [
          "घर में पधारो देवा, मंगल बरसा जाओ।",
          "दास खड़े द्वार तेरे, दुःखों को मिटा जाओ॥"
        ],
        roman: [
          "Ghar mein padharo Deva, mangal barsa jaao,",
          "Daas khade dwar tere, dukhon ko mita jaao."
        ]
      }
      
  // ========================================================
  // 6. GAURI ke laal daya
  // ========================================================
      {
  id: "gauri-ke-laal-dayal-ganesh",
  type: "Ganesh Bhajan",

  title: {
    devanagari: "गौरी के लाल दयाल गणेश",
    roman: "Gauri Ke Laal Dayal Ganesh"
  },

  verses: [
    {
      devanagari: [
        "गौरी के लाल दयाल गणेश, लिए संग मूषक आय रहे हैं।",
        "शीश मुकुट अति शोभित सुंदर, रूप अनूप सजाय रहे हैं।",
        "देव-दनुज नर-किन्नर कोटिक, सब मिल मंगल गाय रहे हैं।",
        "जय-जयकार भई तिहुं लोक, वो प्रथम पूज्य कहाय रहे हैं।"
      ],

      roman: [
        "Gauri ke laal dayal Ganesh, liye sang mooshak aaye rahe hain.",
        "Sheesh mukut ati shobhit sundar, roop anoop sajaye rahe hain.",
        "Dev-danuj nar-kinnar kotik, sab mil mangal gaaye rahe hain.",
        "Jai-jaikaar bhayi tihun lok, vo pratham poojya kahaye rahe hain."
      ]
    },

    {
      devanagari: [
        "पाश अंकुश कर में सोहे, मोदक भोग लगाय रहे हैं।",
        "रिद्धि-सिद्धि संग साजे स्वामी, सब पर कृपा लुटाय रहे हैं।",
        "विघ्न विनाशक मंगल दाता, संकट दूर भगाय रहे हैं।",
        "जय-जयकार भई तिहुं लोक, वो प्रथम पूज्य कहाय रहे हैं।"
      ],

      roman: [
        "Paash ankush kar mein sohe, modak bhog lagaye rahe hain.",
        "Riddhi-Siddhi sang saaje Swami, sab par kripa lutaye rahe hain.",
        "Vighna vinashak mangal data, sankat door bhagaye rahe hain.",
        "Jai-jaikaar bhayi tihun lok, vo pratham poojya kahaye rahe hain."
      ]
    },

    {
      devanagari: [
        "एकदंत शुभ तिलक ललाटा, भाल पे चंद्र सजाय रहे हैं।",
        "मंद-मंद मुसकावत मूरति, सबका मन हरषाय रहे हैं।",
        "शरण पड़े जो चरणन में प्रभु, ताके काज बनाय रहे हैं।",
        "जय-जयकार भई तिहुं लोक, वो प्रथम पूज्य कहाय रहे हैं।"
      ],

      roman: [
        "Ekadant shubh tilak lalaata, bhaal pe chandra sajaye rahe hain.",
        "Mand-mand muskaavat moorati, sabka man harshaye rahe hain.",
        "Sharan pade jo charanan mein Prabhu, taake kaaj banaye rahe hain.",
        "Jai-jaikaar bhayi tihun lok, vo pratham poojya kahaye rahe hain."
      ]
    },

    {
      devanagari: [
        "अंग सिंदूर की कांति सुहानी, दुष्टन तेज नसानी रहे हैं।",
        "ज्ञान-बुद्धि के सागर स्वामी, जन-जन ढोल बजाय रहे हैं।",
        "दास अमोल करे नित सेवा, भक्ति का दान दिलाय रहे हैं।",
        "जय-जयकार भई तिहुं लोक, वो प्रथम पूज्य कहाय रहे हैं।"
      ],

      roman: [
        "Ang sindoor ki kaanti suhaani, dushtan tej nasaani rahe hain.",
        "Gyaan-buddhi ke saagar Swami, jan-jan dhol bajaye rahe hain.",
        "Daas Amol kare nit seva, bhakti ka daan dilaye rahe hain.",
        "Jai-jaikaar bhayi tihun lok, vo pratham poojya kahaye rahe hain."
      ]
    }
  ]
}
    ]
  }

];
