const INTERNSHIPS = [
 {id:"i1",title:"Software Development Intern",skills:["Programming","Problem Solving"],eligibility:"B.Tech/BCA students, 2nd yr+",location:"Bengaluru / Remote",duration:"3 months",deadline:"2026-10-10",link:"internshala.com"},
 {id:"i2",title:"Data Analytics Intern",skills:["Statistics","Python"],eligibility:"Any UG student with basic Python",location:"Hyderabad / Remote",duration:"2 months",deadline:"2026-10-18",link:"internshala.com"},
 {id:"i3",title:"UX Design Intern",skills:["Figma","Design Thinking"],eligibility:"Design/any student with portfolio",location:"Mumbai",duration:"6 months",deadline:"2026-11-05",link:"internshala.com"},
 {id:"i4",title:"Legal Research Intern",skills:["Research","Writing"],eligibility:"Law students",location:"Delhi",duration:"1 month",deadline:"2026-10-25",link:"lawctopus.com"},
 {id:"i5",title:"Content & Journalism Intern",skills:["Writing","Communication"],eligibility:"Any stream, strong writing",location:"Remote",duration:"3 months",deadline:"2026-10-12",link:"internshala.com"},
 {id:"i6",title:"Business Development Intern",skills:["Communication","Business Acumen"],eligibility:"BBA/B.Com students",location:"Pune",duration:"2 months",deadline:"2026-11-01",link:"internshala.com"}
];
INTERNSHIPS.push(...rows(`
i7|ISRO Research Intern|Physics;Research|Engineering/Science students, 7th sem+|Bengaluru / Thiruvananthapuram / Ahmedabad|1-2 months|2026-11-15|isro.gov.in
i8|DRDO Project Intern|Programming;Math|B.Tech/M.Tech, min 60%|Delhi / Hyderabad / Pune|2-6 months|2026-11-30|drdo.gov.in
i9|NITI Aayog Policy Intern|Research;Writing|UG/PG students|Delhi|6-8 weeks|2026-10-31|niti.gov.in
i10|Finance & Audit Intern|Accounting;Analytical Thinking|B.Com/CA students|Mumbai / Kolkata|3 months|2026-10-28|internshala.com
i11|Hospital Clinical Observership|Biology;Empathy|MBBS/Nursing/BDS students|Chennai / Vellore / Delhi|1 month|2026-11-05|hospital HR portals
i12|Civil Engineering Site Intern|CAD;Problem Solving|B.Tech Civil students|Hyderabad / Pune / Kolkata|2 months|2026-10-22|internshala.com
i13|Agri-Tech Field Intern|Biology;Research|B.Sc Agriculture students|Ludhiana / Coimbatore / Pantnagar|2 months|2026-11-12|icar.gov.in
i14|Teaching Intern|Communication;Patience|Any graduate/UG student|Pan-India / Remote|1-3 months|2026-10-30|internshala.com
i15|Hospitality Management Trainee|Communication;Leadership|BHM students|Goa / Jaipur / Kerala|6 months|2026-11-20|internshala.com
i16|AI/ML Research Intern|Python;Machine Learning|B.Tech CS/AI students|Hyderabad / Bengaluru / Remote|3 months|2026-10-15|internshala.com
i17|Digital Marketing Intern|Communication;Writing|Any stream|Remote|2 months|2026-10-14|internshala.com
i18|Cybersecurity Intern|Programming;Problem Solving|B.Tech/BCA students|Noida / Pune|3 months|2026-11-08|internshala.com
i19|Fashion & Design Intern|Design Thinking;Creativity|NIFT/NID/any design student|Delhi / Jaipur|3 months|2026-11-18|internshala.com
i20|Regional Media Intern|Writing;Research|Any stream|Kolkata / Chennai / Lucknow|1 month|2026-10-26|internshala.com
i21|Pharma R&D Intern|Chemistry;Research|B.Pharm/B.Sc Chemistry|Hyderabad / Ahmedabad|2 months|2026-11-02|internshala.com
i22|Electronics Design Intern|Physics;Programming|B.Tech ECE/EEE|Bengaluru / Chennai|3 months|2026-10-24|internshala.com
`).map(([id,title,sk,eligibility,location,duration,deadline,link])=>({id,title,skills:sk.split(';'),eligibility,location,duration,deadline,link})));
