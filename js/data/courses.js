const COURSES = [
 {id:"c1",name:"B.Tech Computer Science",career:["swe","ds"],duration:"4 years",eligibility:"10+2 with PCM, min 60%",admission:"JEE Main / JEE Advanced / State CET"},
 {id:"c2",name:"BCA",career:["swe"],duration:"3 years",eligibility:"10+2 any stream with Math",admission:"Merit / University entrance test"},
 {id:"c3",name:"MBBS",career:["doc"],duration:"5.5 years",eligibility:"10+2 with PCB, min 50%",admission:"NEET-UG"},
 {id:"c4",name:"B.Com (Hons)",career:["ca","entre"],duration:"3 years",eligibility:"10+2 any stream",admission:"Merit / CUET"},
 {id:"c5",name:"CA Foundation",career:["ca"],duration:"4-5 years total",eligibility:"10+2 passed, any stream",admission:"ICAI registration + entrance"},
 {id:"c6",name:"B.Des (Product/UX Design)",career:["design"],duration:"4 years",eligibility:"10+2 any stream",admission:"UCEED / NID DAT / CEED"},
 {id:"c7",name:"B.A Psychology",career:["psych"],duration:"3 years",eligibility:"10+2 any stream",admission:"Merit / CUET"},
 {id:"c8",name:"BA LLB (Integrated)",career:["lawyer"],duration:"5 years",eligibility:"10+2 any stream, min 45%",admission:"CLAT / LSAT / AILET"},
 {id:"c9",name:"B.Tech Mechanical Engineering",career:["mech"],duration:"4 years",eligibility:"10+2 with PCM",admission:"JEE Main / State CET"},
 {id:"c10",name:"BA Journalism & Mass Comm",career:["journo"],duration:"3 years",eligibility:"10+2 any stream",admission:"Merit / IIMC entrance"},
 {id:"c11",name:"BBA",career:["entre","ca"],duration:"3 years",eligibility:"10+2 any stream",admission:"Merit / IPMAT / CUET"}
];
COURSES.push(...rows(`
c12|B.Sc Nursing|nurse|4 years|10+2 with PCB, min 45-50%|NEET-UG / state nursing CET
c13|B.Pharm|pharm|4 years|10+2 with PCM/PCB|State CET (MHT-CET, TG EAPCET etc.) / merit
c14|B.Arch|arch|5 years|10+2 with Maths, min 50%|NATA / JEE Main Paper 2
c15|B.Sc Agriculture|agri|4 years|10+2 with PCB/PCM|CUET-UG (ICAR seats) / state agri CETs
c16|BHM (Hotel Management)|hotel|3-4 years|10+2 any stream|NCHM JEE / university tests
c17|B.Ed / ITEP|teacher|2-4 years|Graduation (B.Ed) or 10+2 (ITEP)|NCET (ITEP) / state B.Ed CETs
c18|BA Political Science / Public Admin|civil|3 years|10+2 any stream|CUET-UG; then UPSC Civil Services after graduation
c19|B.Tech Civil Engineering|civile|4 years|10+2 with PCM|JEE Main / JEE Advanced / State CET
c20|B.Tech ECE / EEE|ece|4 years|10+2 with PCM|JEE Main / JEE Advanced / State CET
c21|BS / B.Sc (Research: Physics, Maths, Bio)|sci|3-5 years|10+2 with Science|IISER IAT / NEST / CUET-UG / JEE Adv
c22|BDS (Dental)|dent|5 years|10+2 with PCB, min 50%|NEET-UG
c23|Commercial Pilot Licence (CPL)|pilot|1.5-3 years|10+2 with Physics & Maths|DGCA medical + flying academy / IGRUA test
c24|NDA / Defence Entry|def|3 yrs training + degree|10+2 (PCM for Air Force/Navy), age 16.5-19.5|NDA exam (UPSC) + SSB interview
c25|B.Tech AI & Data Science|ai;ds|4 years|10+2 with PCM|JEE Main / VITEEE / BITSAT / State CET
`).map(([id,name,c,duration,eligibility,admission])=>({id,name,career:c.split(';'),duration,eligibility,admission})));
COURSES.find(c=>c.id==='c1').career.push('ai');
