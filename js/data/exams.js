const EXAMS = [
 {id:"e1",name:"JEE Main",courses:["c1","c9"],eligibility:"10+2 with PCM, min 75% (or top 20 percentile)",info:"Conducted twice a year (Jan & Apr) by NTA; gateway to NITs, IIITs & JEE Advanced.",deadline:"2026-11-15"},
 {id:"e2",name:"JEE Advanced",courses:["c1"],eligibility:"Top 2.5 lakh rankers of JEE Main",info:"Required for admission to the IITs.",deadline:"2027-05-04"},
 {id:"e3",name:"NEET-UG",courses:["c3"],eligibility:"10+2 with PCB, min 50%",info:"Single national entrance exam for all MBBS/BDS seats in India.",deadline:"2027-03-09"},
 {id:"e4",name:"CLAT",courses:["c8"],eligibility:"10+2 any stream, min 45%",info:"National entrance for 22 National Law Universities.",deadline:"2026-11-30"},
 {id:"e5",name:"UCEED",courses:["c6"],eligibility:"10+2 any stream (2026 or 2027 pass)",info:"For B.Des at IITs and IIITDM Jabalpur.",deadline:"2026-10-31"},
 {id:"e6",name:"CUET-UG",courses:["c4","c7","c10","c11"],eligibility:"10+2 any stream",info:"Common entrance for central & many state universities.",deadline:"2027-02-28"},
 {id:"e7",name:"IPMAT",courses:["c11"],eligibility:"10+2 any stream, min 60%",info:"Entrance to 5-year integrated management programmes at IIMs.",deadline:"2027-04-20"}
];
/* NOTE: dates are indicative — always confirm on the official exam website. */
EXAMS.find(e=>e.id==='e1').courses.push('c19','c20','c25','c14');
EXAMS.find(e=>e.id==='e3').courses.push('c22','c12');
EXAMS.find(e=>e.id==='e6').courses.push('c18','c15','c21');
EXAMS.push(...rows(`
e8|NDA & NA (UPSC)|c24|Unmarried, 10+2 (PCM for Air Force/Navy), age 16.5-19.5|Entry to Army, Navy & Air Force wings; written test + SSB interview.|2026-12-30
e9|UPSC Civil Services|c18|Any graduate, age 21-32 (relaxations apply)|IAS/IPS/IFS: Prelims, Mains & Interview. Start prep during graduation.|2027-02-24
e10|BITSAT|c1;c20;c25|10+2 PCM, min 75% aggregate|Computer-based test for BITS Pilani, Goa & Hyderabad campuses.|2027-04-15
e11|VITEEE|c1;c20;c25|10+2 PCM/PCB, min 60%|VIT Vellore, Chennai, Bhopal & Amaravati campuses.|2027-03-31
e12|MHT-CET (Maharashtra)|c1;c9;c13;c19;c20;c25|10+2 PCM/PCB, Maharashtra domicile seats|State engineering & pharmacy entrance.|2027-02-28
e13|TG EAPCET (Telangana)|c1;c9;c13;c19;c20;c25|10+2 with PCM/PCB, min 45%|Engineering, pharmacy & agriculture in Telangana (formerly TS EAMCET).|2027-03-25
e14|AP EAPCET (Andhra Pradesh)|c1;c9;c13;c19;c20;c25|10+2 with PCM/PCB, min 45%|Engineering, agriculture & pharmacy seats in Andhra Pradesh.|2027-03-20
e15|KCET (Karnataka)|c1;c9;c13;c15;c19;c20;c25|10+2 PCM/PCB, Karnataka study rule|Engineering, farm science & pharmacy seats via KEA.|2027-02-15
e16|KEAM (Kerala)|c1;c9;c13;c14;c19;c20;c25|10+2 with PCM (Engg) / PCB (Pharm)|Kerala engineering, architecture, pharmacy & medical.|2027-02-10
e17|WBJEE (West Bengal)|c1;c9;c13;c19;c20;c25|10+2 with PCM|Engineering & pharmacy seats in West Bengal.|2027-01-31
e18|GUJCET (Gujarat)|c1;c9;c13;c19;c20;c25|10+2 with PCM/PCB, Gujarat board|Gujarat engineering & pharmacy admissions.|2027-01-25
e19|OJEE (Odisha)|c1;c9;c13;c19;c20;c25|10+2 with PCM, Odisha seats|Odisha engineering, pharmacy & architecture entrance.|2027-03-10
e20|TNEA (Tamil Nadu)|c1;c9;c19;c20;c25|10+2 PCM — merit by board marks (no entrance)|Anna University-run counselling for engineering colleges.|2027-05-15
e21|COMEDK UGET|c1;c9;c19;c20;c25|10+2 with PCM, min 45%|Private engineering colleges in Karnataka.|2027-03-15
e22|NATA|c14|10+2 with Maths, min 50%|National Aptitude Test in Architecture (Council of Architecture).|2027-03-31
e23|NID DAT|c6|10+2 any stream|Design Aptitude Test for NID campuses (B.Des).|2026-11-30
e24|NIFT Entrance|c6|10+2 any stream, age limit applies|Fashion, textile & accessory design at NIFT campuses across India.|2026-12-31
e25|NCHM JEE|c16|10+2 any stream|Entrance for BSc Hospitality at IHMs across India.|2027-04-15
e26|IISER IAT / NEST|c21|10+2 with Science, min 60%|Research-oriented BS-MS at IISERs, NISER & others.|2027-04-30
e27|NCET (ITEP)|c17|10+2 any stream|Integrated Teacher Education Programme entrance by NTA.|2027-04-10
e28|IGRUA Aptitude Test|c23|10+2 PCM, medical fitness|Pilot training at Indira Gandhi Rashtriya Uran Akademi.|2027-05-31
`).map(([id,name,c,eligibility,info,deadline])=>({id,name,courses:c.split(';'),eligibility,info,deadline})));
