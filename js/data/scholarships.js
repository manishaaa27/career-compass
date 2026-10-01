const SCHOLARSHIPS = [
 {id:"s1",name:"National Merit Scholarship",eligibility:"Class 12 pass, family income < ₹8L, min 85%",documents:"Income cert, marksheets, Aadhaar",benefit:"₹12,000/year",deadline:"2026-10-20",link:"scholarships.gov.in"},
 {id:"s2",name:"INSPIRE Scholarship (SHE)",eligibility:"Top 1% in Class 12 board, pursuing B.Sc/B.S",documents:"Board marksheet, admission proof",benefit:"₹80,000/year",deadline:"2026-11-10",link:"online-inspire.gov.in"},
 {id:"s3",name:"AICTE Pragati Scholarship (Girls)",eligibility:"Girl students in technical diploma/degree, family income < ₹8L",documents:"Income cert, caste cert (if applicable), fee receipt",benefit:"₹50,000/year",deadline:"2026-12-01",link:"aicte-pragati-saksham.gov.in"},
 {id:"s4",name:"Post-Matric Scholarship (SC/ST/OBC)",eligibility:"SC/ST/OBC students, income criteria as per state",documents:"Caste cert, income cert, admission proof",benefit:"Tuition + maintenance allowance",deadline:"2026-11-25",link:"scholarships.gov.in"},
 {id:"s5",name:"Sitaram Jindal Scholarship",eligibility:"Merit-cum-means, all streams",documents:"Marksheet, income proof, photo",benefit:"₹15,000-₹60,000/year",deadline:"2027-01-15",link:"sitaramjindalfoundation.org"}
];
/* Deadlines/benefits are indicative — confirm on the official portal. */
SCHOLARSHIPS.push(...rows(`
s6|Central Sector Scholarship (CSSS)|Top 20 percentile in Class 12 board, family income < ₹4.5L|Marksheet, income cert, bank passbook|₹12,000-20,000/year|2026-12-31|scholarships.gov.in
s7|PM YASASVI (OBC/EBC/DNT)|OBC/EBC/DNT students, income < ₹2.5L|Caste cert, income cert, admission proof|₹75,000-1,25,000/year|2026-10-31|yet.nta.ac.in
s8|Minority Merit-cum-Means Scholarship|Minority communities, min 50%, income < ₹2.5L|Community cert, income cert, marksheet|Course fee + maintenance|2026-11-30|scholarships.gov.in
s9|Reliance Foundation UG Scholarship|First-year UG, merit + need based|Marksheet, income proof, admission letter|Up to ₹2,00,000 total|2026-10-15|scholarships.reliancefoundation.org
s10|HDFC Badhte Kadam (Crisis Support)|Class 11-UG students facing financial crisis, min 55%|Marksheet, crisis proof, ID|₹15,000-75,000|2026-10-30|buddy4study.com
s11|Telangana ePASS Scholarship|Telangana SC/ST/BC/Minority/EBC students|Caste & income cert, Aadhaar, fee receipt|Fee reimbursement + maintenance|2026-12-15|telanganaepass.cgg.gov.in
s12|Karnataka Vidyasiri / SSP Scholarship|Karnataka domicile, category-based, income limits|Caste/income cert, marksheet, bank details|Tuition + hostel allowance|2026-12-10|ssp.postmatric.karnataka.gov.in
s13|Maharashtra MahaDBT Scholarship|Maharashtra domicile, category & income based|Domicile, caste/income cert, admission proof|Fee waiver + allowance|2026-11-30|mahadbtmahait.gov.in
s14|Tamil Nadu Pudhumai Penn|Girls from govt schools pursuing UG/diploma|School cert, Aadhaar, admission proof|₹1,000/month|2026-12-20|pudhumaipenn.tn.gov.in
s15|West Bengal Swami Vivekananda Merit-cum-Means|West Bengal students, min 60%, income limit|Marksheet, income cert, admission proof|₹12,000-60,000/year|2026-11-20|svmcm.wbhed.gov.in
s16|Kerala e-Grantz|Kerala SC/ST/OBC/minority students|Caste cert, income cert, fee receipt|Fee concession + stipend|2026-12-05|egrantz.kerala.gov.in
s17|UP Post-Matric Scholarship|Uttar Pradesh students, category & income based|Caste/income cert, marksheet, Aadhaar|Fee reimbursement|2026-12-20|scholarship.up.gov.in
s18|Bihar Post-Matric Scholarship|Bihar students, category & income based|Domicile, caste cert, income cert|Fee + allowance|2026-12-15|scholarships.gov.in
s19|Ishan Uday (North-East)|North-East students in UG programmes|Domicile, marksheet, admission proof|₹5,400/month|2026-11-15|scholarships.gov.in
s20|Prime Minister's Scholarship (Armed Forces wards)|Wards of ex-servicemen/ex-Coast Guard|Service cert, marksheet, admission proof|₹2,500-3,000/month|2026-11-10|ksb.gov.in
`).map(([id,name,eligibility,documents,benefit,deadline,link])=>({id,name,eligibility,documents,benefit,deadline,link})));
