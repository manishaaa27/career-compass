/* All 28 states + 8 Union Territories. Exam names/facts are indicative — verify officially. */
const STATES = rows(`
Andhra Pradesh|Amaravati|AP EAPCET|Andhra University, IIT Tirupati, NIT Andhra Pradesh, IIIT Sri City|IT, pharma, aquaculture
Arunachal Pradesh|Itanagar|JEE Main / CUET|NIT Arunachal Pradesh, Rajiv Gandhi University|Hydropower, tourism
Assam|Dispur|JEE Main / ASTU|IIT Guwahati, Gauhati University, Tezpur University|Tea, oil & gas
Bihar|Patna|BCECE|NIT Patna, IIT Patna, Patna University|Agriculture, civil-services prep
Chhattisgarh|Raipur|CG PET / JEE Main|NIT Raipur, IIIT Naya Raipur, AIIMS Raipur|Steel, mining, power
Goa|Panaji|Goa CET / JEE Main|BITS Goa, NIT Goa, Goa University|Tourism, pharma
Gujarat|Gandhinagar|GUJCET|NID, CEPT, IIT Gandhinagar, GNLU|Textiles, chemicals, diamonds
Haryana|Chandigarh|JEE Main via HSTES|NIT Kurukshetra, IIM Rohtak, MDU|Automobile, IT (Gurugram)
Himachal Pradesh|Shimla|HP CET / JEE Main|NIT Hamirpur, IIT Mandi, IIIT Una|Hydropower, tourism, horticulture
Jharkhand|Ranchi|JCECEB|BIT Mesra, IIT (ISM) Dhanbad, XLRI|Mining, steel
Karnataka|Bengaluru|KCET / COMEDK|IISc, IIIT Bangalore, NITK, RVCE|IT & startups, aerospace, biotech
Kerala|Thiruvananthapuram|KEAM|NIT Calicut, IIST, CUSAT, IISER TVM|Healthcare, IT, tourism
Madhya Pradesh|Bhopal|MP PET / JEE Main|MANIT, IIT Indore, IIM Indore, AIIMS Bhopal|Agriculture, pharma, auto
Maharashtra|Mumbai|MHT-CET|IIT Bombay, ICT, COEP, TISS|Finance, film, auto, IT
Manipur|Imphal|JEE Main / CUET|NIT Manipur, Manipur University|Handloom, sports
Meghalaya|Shillong|JEE Main / CUET|NEHU, IIM Shillong, NIT Meghalaya|Tourism, horticulture
Mizoram|Aizawl|CUET|Mizoram University, NIT Mizoram|Horticulture, bamboo
Nagaland|Kohima|CUET|Nagaland University, NIT Nagaland|Handicrafts, agriculture
Odisha|Bhubaneswar|OJEE|NIT Rourkela, IIT Bhubaneswar, NISER, KIIT|Mining, steel, IT
Punjab|Chandigarh|JEE Main / state counselling|Thapar, PAU, IIT Ropar, PEC|Agriculture, textiles
Rajasthan|Jaipur|REAP (JEE Main)|BITS Pilani, MNIT Jaipur, NLU Jodhpur, IIT Jodhpur|Tourism, mining, Kota coaching hub
Sikkim|Gangtok|JEE Main / CUET|SMIT, Sikkim University|Tourism, organic farming
Tamil Nadu|Chennai|TNEA (board marks)|IIT Madras, Anna University, NIT Trichy, VIT|Auto, electronics, textiles
Telangana|Hyderabad|TG EAPCET|IIIT Hyderabad, IIT Hyderabad, NALSAR, Osmania|IT, pharma, biotech
Tripura|Agartala|JEE Main / CUET|NIT Agartala, Tripura University|Rubber, bamboo
Uttar Pradesh|Lucknow|JEE Main via UPTAC|IIT Kanpur, BHU, AKTU, KGMU|Agriculture, handicrafts, IT (Noida)
Uttarakhand|Dehradun|JEE Main / UKSEE|IIT Roorkee, GB Pant University, IIM Kashipur|Tourism, pharma, hydropower
West Bengal|Kolkata|WBJEE|IIT Kharagpur, Jadavpur, Presidency, ISI|Jute, IT, arts, tea
Delhi|New Delhi|CUET / JEE Main|DU, JNU, IIT Delhi, AIIMS, DTU|Government, media, services
Jammu & Kashmir|Srinagar / Jammu|JKBOSE CET / JEE Main|NIT Srinagar, IIT Jammu, SKUAST|Horticulture, handicrafts
Ladakh|Leh|CUET|University of Ladakh|Tourism, solar energy
Chandigarh|Chandigarh|JEE Main / CUET|PEC, Panjab University, PGIMER|IT, education
Puducherry|Puducherry|JEE Main / NEET|JIPMER, Pondicherry University|Healthcare, tourism
Andaman & Nicobar Islands|Port Blair|CUET / JEE Main|Pondicherry University campus, local colleges|Tourism, fisheries
Lakshadweep|Kavaratti|CUET|Affiliated colleges (Kerala universities)|Fisheries, coconut
Dadra & Nagar Haveli and Daman & Diu|Daman|CUET|Local colleges, nearby Gujarat/Maharashtra institutes|Manufacturing
`).map(([name,capital,exam,institutes,strengths])=>({name,capital,exam,institutes,strengths}));
