const COLLEGES = [
 {id:"g1",name:"IIT Bombay",course:"c1",location:"Mumbai",lat:19.13,lng:72.91,fees:"₹2.2L/yr",cutoff:"JEE Adv rank < 500",placement:"₹21 LPA avg"},
 {id:"g2",name:"NIT Trichy",course:"c1",location:"Tiruchirappalli",lat:10.76,lng:78.81,fees:"₹1.6L/yr",cutoff:"JEE Main rank < 3000",placement:"₹14 LPA avg"},
 {id:"g3",name:"VIT Vellore",course:"c1",location:"Vellore",lat:12.97,lng:79.16,fees:"₹2.4L/yr",cutoff:"VITEEE rank < 8000",placement:"₹9 LPA avg"},
 {id:"g4",name:"AIIMS Delhi",course:"c3",location:"Delhi",lat:28.57,lng:77.21,fees:"₹0.15L/yr",cutoff:"NEET rank < 100",placement:"NA (Govt service)"},
 {id:"g5",name:"Christian Medical College Vellore",course:"c3",location:"Vellore",lat:12.92,lng:79.13,fees:"₹1.1L/yr",cutoff:"NEET rank < 1500",placement:"NA (Govt/private hospitals)"},
 {id:"g6",name:"Shri Ram College of Commerce",course:"c4",location:"Delhi",lat:28.68,lng:77.21,fees:"₹0.4L/yr",cutoff:"CUET 98+ percentile",placement:"₹8 LPA avg"},
 {id:"g7",name:"National Institute of Design, Ahmedabad",course:"c6",location:"Ahmedabad",lat:23.03,lng:72.58,fees:"₹4L/yr",cutoff:"DAT/CEED top 5%",placement:"₹10 LPA avg"},
 {id:"g8",name:"National Law School Bangalore",course:"c8",location:"Bengaluru",lat:12.97,lng:77.59,fees:"₹2.5L/yr",cutoff:"CLAT AIR < 80",placement:"₹18 LPA avg"},
 {id:"g9",name:"Osmania University",course:"c1",location:"Hyderabad",lat:17.41,lng:78.53,fees:"₹0.6L/yr",cutoff:"TS EAMCET rank < 5000",placement:"₹6 LPA avg"},
 {id:"g10",name:"Symbiosis Institute (BBA)",course:"c11",location:"Pune",lat:18.52,lng:73.85,fees:"₹3.5L/yr",cutoff:"SET percentile 90+",placement:"₹7 LPA avg"},
 {id:"g11",name:"University of Hyderabad (Psychology)",course:"c7",location:"Hyderabad",lat:17.46,lng:78.33,fees:"₹0.3L/yr",cutoff:"CUET 85+ percentile",placement:"₹5 LPA avg"},
 {id:"g12",name:"IIMC Delhi",course:"c10",location:"Delhi",lat:28.59,lng:77.22,fees:"₹1.2L/yr",cutoff:"IIMC entrance top 10%",placement:"₹7 LPA avg"}
];
/* Figures (fees, cutoffs, placements) are approximate & change yearly — verify on official sites. */
"g1:Maharashtra,g2:Tamil Nadu,g3:Tamil Nadu,g4:Delhi,g5:Tamil Nadu,g6:Delhi,g7:Gujarat,g8:Karnataka,g9:Telangana,g10:Maharashtra,g11:Telangana,g12:Delhi".split(',').forEach(x=>{const[i,s]=x.split(':');COLLEGES.find(g=>g.id===i).state=s;});
COLLEGES.push(...rows(`
IIT Madras|c1|Chennai|Tamil Nadu|12.99|80.23|₹2.2L/yr|JEE Adv rank < 400|₹22 LPA avg
IIT Delhi|c1|Delhi|Delhi|28.55|77.19|₹2.3L/yr|JEE Adv rank < 300|₹23 LPA avg
IIT Kanpur|c1|Kanpur|Uttar Pradesh|26.51|80.23|₹2.2L/yr|JEE Adv rank < 900|₹20 LPA avg
IIT Kharagpur|c9|Kharagpur|West Bengal|22.32|87.31|₹2.2L/yr|JEE Adv rank < 4000|₹18 LPA avg
IIT Hyderabad|c25|Hyderabad|Telangana|17.59|78.12|₹2.3L/yr|JEE Adv rank < 1500|₹20 LPA avg
IIT Roorkee|c19|Roorkee|Uttarakhand|29.86|77.90|₹2.2L/yr|JEE Adv rank < 4500|₹16 LPA avg
IIT Guwahati|c20|Guwahati|Assam|26.19|91.69|₹2.2L/yr|JEE Adv rank < 3000|₹17 LPA avg
NIT Warangal|c1|Warangal|Telangana|17.98|79.53|₹1.6L/yr|JEE Main rank < 3500|₹15 LPA avg
NIT Surathkal|c20|Mangaluru|Karnataka|13.01|74.79|₹1.6L/yr|JEE Main rank < 8000|₹14 LPA avg
NIT Calicut|c1|Kozhikode|Kerala|11.32|75.93|₹1.6L/yr|JEE Main rank < 6000|₹13 LPA avg
NIT Rourkela|c19|Rourkela|Odisha|22.25|84.90|₹1.5L/yr|JEE Main rank < 15000|₹12 LPA avg
NIT Srinagar|c1|Srinagar|Jammu & Kashmir|34.13|74.84|₹1.5L/yr|JEE Main rank < 30000|₹9 LPA avg
NIT Patna|c19|Patna|Bihar|25.62|85.17|₹1.5L/yr|JEE Main rank < 25000|₹10 LPA avg
NIT Raipur|c20|Raipur|Chhattisgarh|21.25|81.60|₹1.5L/yr|JEE Main rank < 30000|₹9 LPA avg
NIT Hamirpur|c20|Hamirpur|Himachal Pradesh|31.71|76.53|₹1.5L/yr|JEE Main rank < 30000|₹9 LPA avg
NIT Agartala|c1|Agartala|Tripura|23.83|91.28|₹1.4L/yr|JEE Main rank < 60000|₹7 LPA avg
NIT Arunachal Pradesh|c20|Yupia|Arunachal Pradesh|27.15|93.75|₹1.4L/yr|JEE Main rank < 90000|₹6 LPA avg
NIT Nagaland|c20|Dimapur|Nagaland|25.75|93.79|₹1.4L/yr|JEE Main rank < 90000|₹6 LPA avg
MANIT Bhopal|c19|Bhopal|Madhya Pradesh|23.21|77.41|₹1.5L/yr|JEE Main rank < 20000|₹10 LPA avg
IIIT Hyderabad|c1|Hyderabad|Telangana|17.45|78.35|₹3.6L/yr|JEE Main / UGEE|₹32 LPA avg
BITS Pilani|c1|Pilani|Rajasthan|28.36|75.59|₹5L/yr|BITSAT 330+|₹22 LPA avg
BITS Goa|c1|Zuarinagar|Goa|15.39|73.88|₹5L/yr|BITSAT 300+|₹18 LPA avg
Thapar Institute|c1|Patiala|Punjab|30.35|76.37|₹4L/yr|JEE Main rank < 40000|₹11 LPA avg
Punjab Engineering College|c9|Chandigarh|Chandigarh|30.77|76.79|₹1.9L/yr|JEE Main rank < 15000|₹13 LPA avg
BIT Mesra|c1|Ranchi|Jharkhand|23.41|85.44|₹2.5L/yr|JEE Main rank < 30000|₹10 LPA avg
Andhra University|c1|Visakhapatnam|Andhra Pradesh|17.73|83.32|₹0.5L/yr|AP EAPCET rank < 3000|₹6 LPA avg
Anna University (CEG)|c9|Chennai|Tamil Nadu|13.01|80.24|₹0.6L/yr|TNEA cutoff 195+|₹8 LPA avg
COEP Technological University|c9|Pune|Maharashtra|18.53|73.86|₹1L/yr|MHT-CET 99+ percentile|₹10 LPA avg
Jadavpur University|c20|Kolkata|West Bengal|22.50|88.37|₹0.03L/yr|WBJEE rank < 800|₹12 LPA avg
College of Engineering Trivandrum|c20|Thiruvananthapuram|Kerala|8.55|76.91|₹0.5L/yr|KEAM rank < 1500|₹7 LPA avg
Tezpur University|c1|Tezpur|Assam|26.63|92.80|₹0.9L/yr|CUET / JEE Main|₹6 LPA avg
SMIT (Sikkim Manipal)|c1|Majhitar|Sikkim|27.20|88.50|₹2.2L/yr|JEE Main / SMU test|₹5 LPA avg
JIPMER|c3|Puducherry|Puducherry|11.95|79.80|₹0.1L/yr|NEET rank < 800|NA (Govt service)
Maulana Azad Medical College|c3|Delhi|Delhi|28.64|77.24|₹0.1L/yr|NEET rank < 300|NA (Govt service)
Madras Medical College|c3|Chennai|Tamil Nadu|13.08|80.28|₹0.05L/yr|NEET rank < 2500|NA (Govt service)
Grant Medical College|c3|Mumbai|Maharashtra|18.97|72.83|₹0.2L/yr|NEET rank < 2000|NA (Govt service)
King George's Medical University|c3|Lucknow|Uttar Pradesh|26.87|80.91|₹0.6L/yr|NEET rank < 2500|NA (Govt service)
Christian Medical College Ludhiana|c3|Ludhiana|Punjab|30.90|75.87|₹0.9L/yr|NEET rank < 12000|NA (Hospitals)
AIIMS Bhubaneswar|c3|Bhubaneswar|Odisha|20.19|85.77|₹0.1L/yr|NEET rank < 900|NA (Govt service)
Maulana Azad Inst. of Dental Sciences|c22|Delhi|Delhi|28.64|77.24|₹0.2L/yr|NEET rank < 8000|₹4 LPA avg
AIIMS College of Nursing|c12|Delhi|Delhi|28.57|77.21|₹0.02L/yr|AIIMS Nursing Entrance|NA (Govt service)
Jamia Hamdard|c13|Delhi|Delhi|28.50|77.28|₹1.5L/yr|JH entrance / CUET|₹5 LPA avg
ICT Mumbai|c13|Mumbai|Maharashtra|19.02|72.85|₹0.9L/yr|MHT-CET 98+ percentile|₹8 LPA avg
Manipal College of Pharmaceutical Sciences|c13|Manipal|Karnataka|13.35|74.79|₹2.4L/yr|MET / KCET|₹5 LPA avg
SPA Delhi|c14|Delhi|Delhi|28.63|77.24|₹0.9L/yr|JEE Main Paper 2 rank < 300|₹9 LPA avg
CEPT University|c14|Ahmedabad|Gujarat|23.04|72.55|₹3.5L/yr|NATA 140+|₹7 LPA avg
TNAU|c15|Coimbatore|Tamil Nadu|11.02|76.93|₹0.4L/yr|TNAU counselling|₹5 LPA avg
Punjab Agricultural University|c15|Ludhiana|Punjab|30.90|75.81|₹0.6L/yr|CUET / PAU test|₹5 LPA avg
GB Pant University|c15|Pantnagar|Uttarakhand|29.02|79.49|₹0.5L/yr|CUET / state test|₹5 LPA avg
IHM Pusa|c16|Delhi|Delhi|28.64|77.16|₹1.2L/yr|NCHM JEE rank < 500|₹5 LPA avg
WGSHA Manipal|c16|Manipal|Karnataka|13.35|74.79|₹3.2L/yr|Manipal HM test|₹6 LPA avg
Regional Institute of Education|c17|Bhopal|Madhya Pradesh|23.20|77.42|₹0.3L/yr|NCET|NA (Govt schools)
Hindu College (DU)|c18|Delhi|Delhi|28.69|77.21|₹0.3L/yr|CUET 98+ percentile|₹8 LPA avg
Presidency University|c18|Kolkata|West Bengal|22.57|88.36|₹0.1L/yr|WB college admission / CUET|₹5 LPA avg
Tata Institute of Social Sciences|c7|Mumbai|Maharashtra|19.04|72.92|₹0.5L/yr|TISS-NET / CUET|₹6 LPA avg
Lady Shri Ram College|c7|Delhi|Delhi|28.57|77.24|₹0.3L/yr|CUET 97+ percentile|₹7 LPA avg
NEHU|c7|Shillong|Meghalaya|25.61|91.90|₹0.2L/yr|CUET / NEHU test|₹4 LPA avg
Christ University|c11|Bengaluru|Karnataka|12.93|77.60|₹2.2L/yr|Christ CET|₹7 LPA avg
NMIMS|c11|Mumbai|Maharashtra|19.10|72.84|₹3.5L/yr|NPAT / CUET|₹8 LPA avg
IIM Indore (IPM)|c11|Indore|Madhya Pradesh|22.53|75.92|₹4.5L/yr|IPMAT top percentile|₹25 LPA avg
IIM Rohtak (IPM)|c11|Rohtak|Haryana|28.87|76.62|₹3.5L/yr|IPMAT top percentile|₹15 LPA avg
Loyola College|c4|Chennai|Tamil Nadu|13.06|80.23|₹0.3L/yr|Merit / CUET|₹6 LPA avg
St. Xavier's College Kolkata|c4|Kolkata|West Bengal|22.55|88.35|₹0.3L/yr|Merit / CUET|₹6 LPA avg
IIITDM Jabalpur|c6|Jabalpur|Madhya Pradesh|23.18|80.02|₹1.8L/yr|UCEED rank < 300|₹10 LPA avg
NALSAR|c8|Hyderabad|Telangana|17.59|78.58|₹3L/yr|CLAT AIR < 150|₹17 LPA avg
NLU Delhi|c8|Delhi|Delhi|28.59|77.03|₹3L/yr|AILET rank < 100|₹18 LPA avg
WBNUJS|c8|Kolkata|West Bengal|22.58|88.43|₹2.6L/yr|CLAT AIR < 250|₹12 LPA avg
NLU Jodhpur|c8|Jodhpur|Rajasthan|26.24|73.02|₹2.6L/yr|CLAT AIR < 300|₹12 LPA avg
GNLU|c8|Gandhinagar|Gujarat|23.22|72.68|₹2.8L/yr|CLAT AIR < 400|₹10 LPA avg
Asian College of Journalism|c10|Chennai|Tamil Nadu|13.00|80.24|₹3L/yr|ACJ entrance|₹6 LPA avg
IISER Pune|c21|Pune|Maharashtra|18.53|73.83|₹0.3L/yr|IISER IAT rank < 500|₹8 LPA avg
IISc Bengaluru (UG)|c21|Bengaluru|Karnataka|13.02|77.57|₹0.3L/yr|JEE/KVPY/CUET route|₹10 LPA avg
NISER Bhubaneswar|c21|Bhubaneswar|Odisha|20.17|85.71|₹0.3L/yr|NEST top 200|₹8 LPA avg
IGRUA|c23|Raebareli|Uttar Pradesh|26.23|81.24|₹40L total|IGRUA test + medical|₹15 LPA avg
NDA Khadakwasla|c24|Pune|Maharashtra|18.44|73.77|Govt funded|NDA exam + SSB|Commissioned officer
`).map(([name,course,location,state,lat,lng,fees,cutoff,placement],i)=>({id:'g'+(13+i),name,course,location,state,lat:+lat,lng:+lng,fees,cutoff,placement})));
