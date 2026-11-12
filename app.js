'use strict';
/* ---------- icons ---------- */
const P={
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
 plus:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>',
 plain:'<path d="M12 5v14M5 12h14"/>',
 bell:'<path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 004 0"/>',
 trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
 fire:'<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 2.5 1.5 2.5C10.5 9 11 6 12 3z"/>',
 loc:'<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.5-4 3.5-6 7.5-6s7 2 7.5 6"/>',
 sliders:'<path d="M3 8h9M16 8h5M3 16h3M10 16h11"/><circle cx="14" cy="8" r="2"/><circle cx="8" cy="16" r="2"/>',
 home:'<path d="M3.5 11L12 4l8.5 7v9a1 1 0 01-1 1H15v-6H9v6H4.5a1 1 0 01-1-1z"/>',
 org:'<circle cx="12" cy="7" r="3"/><circle cx="5.5" cy="10.5" r="2.2"/><circle cx="18.5" cy="10.5" r="2.2"/><path d="M7 20v-2.5a5 5 0 0110 0V20M1.5 18v-1a3.5 3.5 0 014-3.4M22.5 18v-1a3.5 3.5 0 00-4-3.4"/>',
 store:'<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M9 12h6M9 15.5h6"/>',
 chat:'<path d="M12 4a8 8 0 00-6.8 12.2L4 20l4-1.1A8 8 0 1012 4z"/><circle cx="8.5" cy="12" r=".6"/><circle cx="12" cy="12" r=".6"/><circle cx="15.5" cy="12" r=".6"/>',
 back:'<path d="M20 12H5M11 6l-6 6 6 6"/>',
 dots:'<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>',
 up:'<path d="M12 4l8 9h-5v7H9v-7H4z" fill="currentColor"/>',
 cmt:'<path d="M4 4h16v12H11l-5 4v-4H4z" fill="currentColor"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
 lock:'<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/><circle cx="12" cy="15" r="1"/>',
 eye:'<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 eyeoff:'<path d="M2 12s3.6-6.5 10-6.5c2 0 3.700.5 5.200 1.300M22 12s-3.600 6.500-10 6.500c-2 0-3.700-.5-5.200-1.300M4 4l16 16"/><path d="M9.500 9.500a3 3 0 004.200 4.200"/>',
 id:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.5-2 5.500-2 6 0M14 10h4M14 13h3"/>',
 grad:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.500V16c0 1.500 3 3 6 3s6-1.500 6-3v-4.500"/>',
 brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 12h18"/>',
 check:'<path d="M5 12.500l4.500 4.500L19 7.500"/>',
 megaphone:'<path d="M3 10v4l10 4V6zM13 8l6-3v14l-6-3"/>',
 swap:'<path d="M7 4v14M3 14l4 4 4-4M17 20V6M13 10l4-4 4 4"/>',
 flag:'<path d="M5 21V4h13l-2 4.500L18 13H5"/>',
 hide:'<path d="M2 12s3.600-6.500 10-6.500S22 12 22 12s-3.600 6.500-10 6.500S2 12 2 12zM4 4l16 16"/>',
 photo:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.800"/><path d="M4 18l5-5 4 4 3-3 5 5"/>',
 chev:'<path d="M9 5l7 7-7 7"/>',
 chevd:'<path d="M6 9l6 6 6-6"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.400 15a1.700 1.700 0 00.300 1.800l.1.100a2 2 0 11-2.800 2.800l-.1-.1a1.700 1.700 0 00-1.800-.3 1.700 1.700 0 00-1 1.500V21a2 2 0 11-4 0v-.1a1.700 1.700 0 00-1.100-1.500 1.700 1.700 0 00-1.800.3l-.1.100a2 2 0 11-2.800-2.800l.1-.1a1.700 1.700 0 00.3-1.800 1.700 1.700 0 00-1.500-1H3a2 2 0 110-4h.1a1.700 1.700 0 001.500-1.100 1.700 1.700 0 00-.3-1.800l-.1-.1a2 2 0 112.800-2.800l.1.100a1.700 1.700 0 001.800.3H9a1.700 1.700 0 001-1.500V3a2 2 0 114 0v.1a1.700 1.700 0 001 1.500 1.700 1.700 0 001.800-.3l.1-.1a2 2 0 112.800 2.800l-.1.100a1.700 1.700 0 00-.3 1.800V9a1.700 1.700 0 001.500 1H21a2 2 0 110 4h-.1a1.700 1.700 0 00-1.500 1z"/>',
 logout:'<path d="M9 4H5a1 1 0 00-1 1v14a1 1 0 001 1h4M16 8l4 4-4 4M20 12H9"/>',
 doc:'<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
 send:'<path d="M3 11l18-8-8 18-2-8z"/>',
 pen:'<path d="M4 20l1-4L17 4l3 3L8 19z"/>',
 cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
 pin:'<path d="M12 21s-6-5.500-6-10.500a6 6 0 0112 0C18 15.500 12 21 12 21z"/><circle cx="12" cy="10" r="2"/>',
 download:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
 camera:'<path d="M4 8h3l1.500-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.500"/>',
 food:'<path d="M4 11h16a6 6 0 00-16 0zM3 14h18M5 17h14l-1 3H6z"/>',
 shirt:'<path d="M8 3L3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 01-8 0z"/>',
 calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M8 15h2M12 15h2M16 11v6"/>',
 head:'<path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.500"/><rect x="17" y="14" width="4" height="6" rx="1.500"/>',
 brush:'<path d="M14 4l6 6-8 8-6-6zM8 16l-4 4M6 14l4 4"/>',
 clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 14l2 2 4-4"/>',
 bag:'<path d="M5 8h14l1 12H4zM9 8V6a3 3 0 016 0v2"/>',
 users:'<circle cx="9" cy="8" r="3.500"/><path d="M2 20c.500-3.500 3-5 7-5s6.500 1.500 7 5M16 4.500a3.500 3.500 0 010 7M18 15c2 .6 3.500 2 4 5"/>',
};
const ic=(n,s=20,c='currentColor',sw=1.7,fill='none')=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" style="flex:none">${P[n]}</svg>`;
const homeFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><path d="M12 3.2L2.700 11.500h2.300V20a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-8.500h2.300z"/></svg>`;
const orgFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><circle cx="12" cy="7" r="3.200"/><circle cx="5" cy="10.500" r="2.400"/><circle cx="19" cy="10.500" r="2.400"/><path d="M6 20v-2a6 6 0 0112 0v2zM1 18c0-2 1.500-3.500 3.500-3.800C3.700 15.200 3.200 16.500 3.200 18zM23 18c0-2-1.500-3.500-3.500-3.800.8 1 1.300 2.300 1.300 3.800z"/></svg>`;
const storeFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V5.500A1.500 1.500 0 0110.500 4h3A1.500 1.500 0 0115 5.500V7" fill="none" stroke="#ac2626" stroke-width="1.700"/><path d="M9 12h6M9 15.500h6" stroke="#fff" stroke-width="1.500" stroke-linecap="round"/></svg>`;
const chatFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><path d="M12 3a9 9 0 00-7.700 13.700L3 21l4.500-1.200A9 9 0 1012 3z"/><circle cx="8.500" cy="12" r="1" fill="#fff"/><circle cx="12" cy="12" r="1" fill="#fff"/><circle cx="15.500" cy="12" r="1" fill="#fff"/></svg>`;
const userFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><circle cx="12" cy="8" r="4.500"/><path d="M3.500 21c.5-4.500 3.500-6.500 8.500-6.500s8 2 8.500 6.500z"/></svg>`;
const verified=(s=12)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><path d="M12 1.500l2.500 2 3.200-.3 1 3 2.800 1.700-.8 3.100.8 3.100-2.800 1.700-1 3-3.200-.3-2.500 2-2.500-2-3.200.3-1-3L2.500 14.100l.8-3.100-.8-3.100L5.300 6.200l1-3 3.200.3z" fill="#9d1f1f"/><path d="M8 12.200l3 3 5-5.800" stroke="#fff" stroke-width="2.200" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const statusBar=`<div class="status"><span>9:41</span><svg viewBox="0 0 81 14" width="81" height="14" fill="#fff"><rect x="0" y="9" width="3.500" height="5" rx="1"/><rect x="5.500" y="6.500" width="3.500" height="7.500" rx="1"/><rect x="11" y="3.500" width="3.500" height="10.500" rx="1"/><rect x="16.500" y="0" width="3.500" height="14" rx="1" opacity=".4"/><path d="M33 3.500a11 11 0 0115 0l-1.500 1.600a8.800 8.800 0 00-12 0zM36 7a7 7 0 019 0l-1.500 1.600a4.800 4.800 0 00-6 0zM39.500 10.500a2 2 0 013 0l-1.500 1.800z"/><rect x="55" y="1.500" width="22" height="11" rx="3.500" fill="none" stroke="#fff" stroke-opacity=".5"/><rect x="57" y="3.500" width="18" height="7" rx="2"/><rect x="78" y="5" width="2" height="4" rx="1" opacity=".5"/></svg></div><div class="home-ind"></div>`;
const A=f=>'a/'+f;

/* ---------- data ---------- */
const ME={name:'Siegfred Calayag',type:'Student',id:'404-02025',dept:'CCMS Department',year:'BSCS 3rd Year',org:'Pet Society',email:'siegfred.calayag@mseuf.edu.ph',phone:'',bday:'',av:A('profile.jpg')};
const ORGS=[
 {id:'uscs',name:'University Collegiate Student Council',short:'USCS',type:'University',logo:A('uscss.jpg'),cover:A('uscs.jpg'),mem:'1.2k',desc:'Representing the voice of the student body and promotes student welfare and participation.',about:'The University Collegiate Student Council (UCSC) is the official student governing body of Manuel S. Enverga University Foundation. We represent the voice of the student body, organize events, and work hand in hand with university administration to promote student welfare, leadership, and participation.',founded:'1958',loc:'MSEUF Main Campus',hl:['Student Advocacy','Student Advocacy','Student Advocacy'],period:'Sept 1, 2025 - Sept 30, 2025'},
 {id:'pet',name:'Pet Society',short:'Pet Society',type:'University',logo:A('petsoc.jpg'),cover:A('pet-soc.png'),mem:'1.2k',desc:'Representing the voice of the student body and promotes student welfare and participation.',about:'Pet Society is a community of animal lovers at MSEUF. We run pet-care drives, vaccination campaigns and adoption events for the campus community.',founded:'2023',loc:'MSEUF Main Campus',hl:['Pet Care','Adoption','Vaccination'],period:'Aug 1, 2025 - Aug 30, 2025'},
 {id:'mastech',name:'MSEUF Association of Multimedia Artists and Technologists',short:'Mastech',type:'Department',dept:'CCMS',logo:A('maslogo.jpg'),cover:A('mastech.jpg'),mem:'1.2k',desc:'Representing the voice of the student body and promotes student welfare and participation.',about:'Mastech brings together multimedia artists and technologists of the College of Computing and Multimedia Studies.',founded:'2015',loc:'CCMS Building',hl:['Multimedia','Workshops','Tech Talks'],period:'Sept 1, 2025 - Sept 30, 2025'},
 {id:'chess',name:'Chess Society',short:'Chess Society',type:'University',logo:A('chess.png'),cover:A('chess-soc.jpg'),mem:'1.2k',desc:'Representing the voice of the student body and promotes student welfare and participation.',about:'The MSEUF Chess Society trains and organizes tournaments for chess enthusiasts across the university.',founded:'2010',loc:'MSEUF Main Campus',hl:['Tournaments','Training','Community'],period:'Aug 15, 2025 - Sept 15, 2025'},
 {id:'comsoc',name:'Communication Society',short:'Communication Society',type:'Department',dept:'CCMS',logo:A('com-logo.jpg'),cover:A('com-soc.png'),mem:'1.2k',desc:'Representing the voice of the student body and promotes student welfare and participation.',about:'MSEUF Communication Society (MCS) is the organization for communication and media students.',founded:'2012',loc:'CCMS Building',hl:['Broadcast','Campus Mic','Media'],period:'Sept 1, 2025 - Sept 30, 2025'},
 {id:'hms',name:'Hospitality Management Society',short:'Hospitality Management Society',type:'Department',dept:'CHTM',logo:A('hospi-soc.jpg'),cover:A('hospi-soc.jpg'),mem:'1.2k',desc:'Representing the voice of the student body and promotes student welfare and participation.',about:'The Hospitality Management Society serves students of the College of International Hospitality and Tourism Management.',founded:'2009',loc:'CHTM Building',hl:['Hospitality','Culinary','Events'],period:'Sept 1, 2025 - Sept 30, 2025'},
];
const OFFICERS=[['Juan Dela Cruz','President',A('user2.jpg')],['Maria Santos','Vice President',A('user5.jpg')],['Kristel Reyes','Secretary',A('user4.jpg')],['Angela Garcia','Treasurer',A('user3.jpg')],['Carlos Mendoza','Auditor',A('profile2.jpg')],['Isabella Torres','P.R.O.',A('user5.jpg')]];
const REQS=['Be part of the University Collegiate Student Council','Must be a currently enrolled MSEUF student.','Must have a good academic standing (no failing grades).','Willing to participate in the organization\'s activities and responsibilities.'];
const ACTS=[['UCSC Official','General Assembly for all MSEUF Students','Join us this Friday, September 12, 2025 at the MSEUF Gymnasium. Your presence is highly encouraged.'],['UCSC Events','MSEUF Week 2026: Opening Day','Let\'s kick off MSEUF Week with a bang featuring performances, games and booths.'],['UCSC Official','MSEUF Week 2026: Celebrating...','Be part of the biggest celebration in MSEUF history. Join us for a week of events.'],['UCSC Scholarship','Apply Now: Student Leader Scholarship','Open for all qualified and active student leaders. Deadline: Sept 30, 2025.']];
let POSTS=[
 {id:1,cat:['trending'],user:'Angelo Sarmiento',sub:'BSCS 2nd Year',t:'2h',m:120,av:A('user4.jpg'),title:'Open for Commissions! ✏️🥰',img:A('commision.png'),h:183,fit:'contain',bg:'#d9d9d9',up:240,c:12},
 {id:2,cat:['trending'],user:'USC_Official',v:1,sub:'UCSC Organization',t:'5h',m:300,av:A('uscss.jpg'),title:'World Mental Health Month.',text:'we encourage all college students to wear <i>blue shirts every Wednesday of October</i>',up:240,c:12},
 {id:3,cat:['trending'],user:'University_Admin',v:1,sub:'BSCS 2nd Year',t:'2h',m:120,av:A('uscss.jpg'),title:'14-Day Intensive Training',img:A('euflight.jpg'),h:183,fit:'contain',bg:'#f5f5f5',up:240,c:12},
 {id:4,cat:['campus'],user:'University_Admin',v:1,sub:'BSCS 2nd Year',t:'2h',m:120,av:A('uscss.jpg'),title:'Class suspension September 18, 2026',img:A('sus.jpg'),h:210,fit:'contain',bg:'#fff',up:240,c:12},
 {id:5,cat:['campus'],user:'University_Admin',v:1,sub:'BSCS 2nd Year',t:'2h',m:120,av:A('uscss.jpg'),title:'Enrollment for 2nd Semester is now open',text:'Please check the official enrollment schedules and requirements on the student portal',up:240,c:12},
 {id:6,cat:['campus'],user:'USC_Official',v:1,sub:'UCSC Organization',t:'5h',m:300,av:A('uscss.jpg'),title:'World Mental Health Month.',text:'we encourage all college students to wear <i>blue shirts every Wednesday of October</i>',img:A('mentalhealthoct.jpg'),h:300,fit:'cover',up:240,c:12},
 {id:7,cat:['social'],user:'Aljin Robis',sub:'BSCS 2nd Year',t:'2h',m:120,av:A('user3.jpg'),title:'Paheram calcu',text:'sino may calcu na pwedeng pahiram?',up:240,c:12},
 {id:8,cat:['social'],user:'Elija Galvan',sub:'BSCS 3rd Year',t:'3h',m:180,av:A('user2.jpg'),title:'Baka po may nakakita sainyo ng ID ko?',text:'CCMS ID lace po',up:240,c:12},
 {id:9,cat:['social'],user:'Vince David',sub:'BSCS 2nd Year',t:'2h',m:120,av:A('profile2.jpg'),title:'Looking for this kind of book!',text:'Bka po meron kayong kakilala nag bebenta or nag papaheram ng gantong book. Thank you po!',img:A('macapagal-experimental-psychology.jpg'),h:207,fit:'contain',bg:'#fff',up:240,c:12},
 {id:10,cat:['org'],user:'Pet Society',v:1,sub:'University Organization',t:'2h',m:120,av:A('petsoc.jpg'),title:"It's Meow-ntal Health Month!",img:A('mentalpet.jpg'),h:195,fit:'cover',up:240,c:12},
 {id:11,cat:['org'],user:'USC_Official',v:1,sub:'UCSC Organization',t:'2h',m:125,av:A('uscss.jpg'),title:'Mental Health Month',img:A('mentalhealthoct.jpg'),h:240,fit:'cover',up:240,c:12},
 {id:12,cat:['mine'],user:ME.name,sub:'CCMS · BSCS 3rd Year',t:'1d',m:1440,av:ME.av,title:'Join the Pet Society to take care our pets in university',img:A('pet-doc.jpg'),h:180,fit:'cover',up:98,c:12},
];
const HAPPEN=[['Announcement','Class Suspension\non Oct 15','University Admin',A('clsssus.jpg')],['Event','Intramurals 2026\nOpening Day','USC Events',A('lenovo.jpg')],['Announcement','10% OFF on\nall items','University Admin',A('com-org.jpg')],['Announcement','Admissions now\nopen','University Admin',A('admin-open.jpg')],['Event','Teacher\'s Day\n2026','University Admin',A('teachers-day.jpg')]];
const NOTIFS=[['Announcement','megaphone','University Announcement','Class suspension on Sep 18','8m','linear-gradient(90deg,#ffe3ee,#f6dfe9)'],['Organization','org','Organization Update','Pet Society posted a new announcement','30m','linear-gradient(90deg,#f7e0e7,#f4d6dd)'],['Social','swap','Reaction','Someone reacted to your post','1h','linear-gradient(90deg,#fbe9c9,#f4dccf)'],['Social','chat','New Message','You have 3 new messages','1h','linear-gradient(90deg,#d9e6ea,#cdd9df)']];
const CONVOS=[
 {id:'vince',name:'Vince David',av:A('profile2.jpg'),last:"Got it! Thanks for the reminder.",time:'9:24 AM',badge:2,msgs:[['l','Are you coming to the event tomorrow?','9:23 AM'],['r',"Yes! I'll be there. What time are you going?",'9:24 AM'],['l','Around 5. See you there!','9:23 AM'],['r','Alright see you!','9:24 AM'],['n','1 new message'],['l',"Also, don't forget to bring your ID. They'll check it at the entrance.",'9:23 AM'],['r','Got it! Thanks for the reminder.','9:24 AM']]},
 {id:'bscs',name:'BSCS 3rd Year',group:1,av:'',last:'Marife: May quiz daw bukas sa OS...',time:'8:47 AM',badge:9,msgs:[['l','May quiz daw bukas sa OS...','8:47 AM']]},
 {id:'alyssa',name:'Alyssa Santos',av:A('user5.jpg'),last:'Thank you 😊',time:'Yesterday',msgs:[['r','Here are the notes','Yesterday'],['l','Thank you 😊','Yesterday']]},
 {id:'mark',name:'Mark Rivera',av:A('user2.jpg'),last:'Pwede bukas? Need lang...',time:'Mon',msgs:[['l','Pwede bukas? Need lang po for exam','Mon']]},
];
const MK=[
 {id:'calc',name:'Scientific Calculator',p:650,d:'Slightly used, graduating na hindi ko na gagamitin',img:A('calcu.jpg'),st:'For Sale',ago:'5 days ago',cond:'Slightly used',cat:'Electronics'},
 {id:'tee',name:'Second hand T-shirt',p:250,d:'Isang beses ko lang siya nasuot, sobrang laki sakin',img:A('tshirt.jpg'),st:'For Sale',ago:'1 week ago',cond:'Used once',cat:'Clothing'},
 {id:'cookies',name:'Different Flavor Cookies',p:50,d:'Bili na kayo fresh bake cookies with different flavors. CBA building',img:A('cookies.jpg'),st:'For Sale',ago:'30 mins ago',cond:'Freshly baked',cat:'Foods'},
 {id:'gram',name:'Graham  Balls',p:5,d:'Get some bef graham balls ₱5 only! Message me for more info.',img:A('gramballs.jpg'),st:'Sold Out',ago:'4 hrs ago',cond:'Freshly made',cat:'Foods',sold:1},
 {id:'cam',name:'Photographer/Videographer',p:0,d:'Available for events, grad shoots and org coverage',img:A('camera.jpg'),st:'Service',ago:'2 days ago',cond:'Available',cat:'Services'},
 {id:'draw',name:'Portrait commissions',p:300,d:'Pencil portraits, open for commissions',img:A('commision.png'),st:'Service',ago:'3 days ago',cond:'Made to order',cat:'Art & Craft'},
 {id:'boq',name:'Pink fuzzy wire bouquet',p:150,d:'Handmade fuzzy wire bouquet, perfect gift',img:A('boq.jpg'),st:'For Sale',ago:'1 day ago',cond:'Brand new',cat:'Art & Craft'},
 {id:'attire',name:'Formal attire  for rent (Men)',p:200,d:'Maroon formal suit for rent, good for events',img:A('attire.jpg'),st:'For Rent',ago:'6 days ago',cond:'Good',cat:'Rentals'},
 {id:'mouse',name:'2nd Hand Logitech MX mouse',p:900,d:'Works perfectly, with box',img:A('mouse.jpg'),st:'For Sale',ago:'1 week ago',cond:'Good',cat:'Electronics'},
];
const S={stack:[],feed:'trending',orgFilter:'All',listFilter:'All',notifFilter:'All',filt:{sort:'Latest',range:'All'},hidden:new Set(),liked:new Set(),joined:new Set(),q:'',signup:{type:'Student'},convoMsgs:{}};
const $=s=>document.querySelector(s);const phone=$('#phone');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

/* ---------- router ---------- */
function go(name,p={},replace){if(replace)S.stack.pop();S.stack.push({name,p});render()}
function back(){if(S.stack.length>1){S.stack.pop();render()}}
function reset(name,p={}){S.stack=[{name,p}];render()}
function cur(){return S.stack[S.stack.length-1]}
function render(){const {name,p}=cur();phone.innerHTML=(V[name]?V[name](p):'')+'<div id="ov"></div>';(B[name]||(()=>{}))(p);window.scrollTo(0,0)}
function toast(t){const e=document.createElement('div');e.className='toast';e.textContent=t;phone.appendChild(e);setTimeout(()=>e.remove(),1800)}
const bgLayer=(login)=>`<img class="bg" src="${A('background.png')}"><div class="bgov ${login?'login':''}"></div>`;

/* ---------- shared ---------- */
function navbar(on){const it=[['home','Home',homeFill,'home'],['org','Organization',orgFill,'org'],['market','Marketplace',storeFill,'store'],['msg','Message',chatFill,'chat'],['profile','Profile',userFill,'user']];
 return `<div class="navshade"></div><div class="nav glass">${it.map(([k,l,f,i])=>`<button data-nav="${k}" class="${on===k?'on':''}">${on===k?f(22):ic(i,22,'#fff',1.6)}<span>${l}</span></button>`).join('')}</div>`}
function topbar(extra=''){return `<div class="top"><img class="avatar36" src="${ME.av}" data-nav="profile" style="cursor:pointer"><div class="search glass">${ic('search',18,'#fff',1.6)}<input id="q" placeholder="Search people, group..." value="${esc(S.q)}"></div><button class="circ glass" style="left:296px" data-act="newpost">${ic('plus',20,'#fff',1.5)}</button><button class="circ glass" style="left:341px" data-go="notif">${ic('bell',20,'#fff',1.5)}</button>${extra}</div>`}
function postCard(p,{menu=true}={}){const lk=S.liked.has(p.id);return `<div class="card post" data-pid="${p.id}">
 <div class="hd"><img src="${p.av||A('uscss.jpg')}"><div><div class="nm">${esc(p.user)}${p.v?verified(11):''}<i></i><s>${p.t}</s></div><div class="sub">${esc(p.sub)}</div></div>${menu?`<button class="dots" data-act="pmenu" data-id="${p.id}" style="color:#777">${ic('dots',20)}</button>`:''}</div>
 <h4>${esc(p.title)}</h4>${p.text?`<p class="tx">${p.text}</p>`:''}
 ${p.img?`<img class="im" src="${p.img}" style="height:${p.h}px;object-fit:${p.fit||'cover'};background:${p.bg||'transparent'}">`:''}
 <div class="line" style="${p.img?'display:none':''}"></div>
 <div class="ft"><button class="${lk?'on':''}" data-act="like" data-id="${p.id}">${ic('up',13,'currentColor',0,'currentColor')}<span>${p.up+(lk?1:0)}</span></button><span style="margin-left:-12px;transform:scaleY(-1);display:inline-flex">${ic('up',13,'#a3a1a1',0,'#a3a1a1')}</span><button data-act="cmt" style="margin-left:36px">${ic('cmt',13,'#a3a1a1',0,'#a3a1a1')}<span>${p.c}</span></button></div></div>`}

/* ---------- views ---------- */
const V={};const B={};
const ob=[['onboarding-logo.png','','Welcome to your University App\nConnect. Share. Discover.\nAll in one place.'],['onboarding-connect.png','Connect','Join organizations, find study groups, ask questions, and connect with fellow students and staff.'],['onboarding-share.png','Share','Share announcements, ideas, questions, experiences, and helpful information with fellow students and staff.'],['onboarding-discover.png','Discover','Stay updated with university news, events, and announcements that matter to you.']];
V.onb=({i=0})=>{const [img,h,t]=ob[i];return `<div class="screen">${bgLayer()}${statusBar}
 ${i===0?`<img src="${A(img)}" style="position:absolute;left:41px;top:208px;width:320px;height:320px;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.35))"><div style="position:absolute;left:0;right:0;top:518px;text-align:center;font-size:11px;font-weight:600;color:#fff;line-height:1.3;white-space:pre-line">${t}</div>
 <button class="btn lg" data-act="next" style="position:absolute;left:23px;top:752px;width:356px;height:40px;font-size:13px;box-shadow:none;background:rgba(172,38,38,.92)">Get Started</button>
 <div style="position:absolute;left:0;right:0;top:812px;display:flex;gap:6px;justify-content:center">${[0,1,2,3].map(k=>`<i style="width:7px;height:7px;border-radius:50%;background:${k===0?'#ff5959':'rgba(255,255,255,.5)'}"></i>`).join('')}</div>`
 :`<div style="position:absolute;left:0;right:0;top:128px;text-align:center;font-size:35px;font-weight:700;text-shadow:0 2px 8px rgba(0,0,0,.3)">${h}</div><div style="position:absolute;left:50px;right:50px;top:182px;text-align:center;font-size:11px;color:rgba(255,255,255,.7);line-height:1.35">${t}</div>
 <img src="${A(img)}" style="position:absolute;left:41px;top:235px;width:320px;height:320px;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.35))">
 <button class="glass" data-act="prev" style="position:absolute;left:19px;top:774px;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.25)">${ic('back',22,'#fff',1.8)}</button>
 <div style="position:absolute;left:0;right:0;top:790px;display:flex;gap:6px;justify-content:center">${[1,2,3].map(k=>`<i style="width:7px;height:7px;border-radius:50%;background:${k===i?'#ff5959':'rgba(255,255,255,.55)'}"></i>`).join('')}</div>
 <button data-act="next" style="position:absolute;left:339px;top:774px;width:44px;height:44px;border-radius:50%;background:#e8222a;display:grid;place-items:center;box-shadow:0 4px 10px rgba(0,0,0,.35)">${ic('chev',20,'#fff',2.2).replace('M9 5l7 7-7 7','M5 12h14M13 6l6 6-6 6')}</button>`}</div>`};
B.onb=({i=0})=>{phone.querySelectorAll('[data-act=next]').forEach(b=>b.onclick=()=>i<3?go('onb',{i:i+1},true):reset('login'));phone.querySelectorAll('[data-act=prev]').forEach(b=>b.onclick=()=>go('onb',{i:i-1},true))};

const pw=(ph,id)=>`<div class="field"><span style="display:grid">${ic('lock',20,'#a3a1a1',1.4)}</span><input id="${id}" type="password" placeholder="${ph}"><button data-eye="${id}" style="display:grid">${ic('eyeoff',20,'#a3a1a1',1.4)}</button></div>`;
V.login=()=>`<div class="screen">${bgLayer(1)}
 <div style="position:absolute;left:27px;top:100px;line-height:1.05"><div style="font-size:51px;font-weight:700">Welcome</div><div style="display:flex;align-items:center;gap:11px"><span style="font-size:34px">to</span><span style="font-size:51px;font-weight:800;background:linear-gradient(90deg,#fd5050,#ca2e2e 42%,#bb2a2a 64%,#ac2626);-webkit-background-clip:text;color:transparent">UNICOM!</span></div></div>
 <div style="position:absolute;left:33px;top:225px;width:319px;font-size:14.5px;font-weight:500;color:rgba(255,255,255,.56)">Login to continue to your University Community.</div>
 <div class="sheetcard" style="top:287px;height:614px;left:-2px;width:406px"></div>
 <div style="position:absolute;left:37px;top:325px;font-size:36px;font-weight:600">Login</div><div style="position:absolute;left:37px;top:373px;font-size:13px;font-weight:500;color:rgba(255,255,255,.56)">Enter your credentials to enter your account.</div>
 <div style="position:absolute;left:36px;right:36px;top:443px;display:flex;flex-direction:column;gap:19px">
 <div class="field"><span style="display:grid">${ic('mail',22,'#a3a1a1',1.4)}</span><input id="em" type="email" placeholder="Enter your email..." value="siegfred.calayag@mseuf.edu.ph"></div>${pw('Enter your password...','pw')}</div>
 <div style="position:absolute;right:36px;top:565px;font-size:12px;font-weight:500;color:#712222;cursor:pointer" data-act="forgot">Forget password?</div>
 <button class="btn" data-act="login" style="position:absolute;left:36px;right:30px;top:597px;width:auto">Login</button>
 <div style="position:absolute;left:0;right:0;top:732px;text-align:center;font-size:16px;font-weight:500;color:rgba(255,255,255,.87)">Don’t have an account yet? <a data-go="signup" style="color:#ac2626;text-decoration:underline;cursor:pointer;margin-left:2px">Sign in</a></div>${statusBar}</div>`;
B.login=()=>{$('[data-act=login]').onclick=()=>{if(!$('#pw').value&&false)return;go('skeleton',{},true)};$('[data-act=forgot]').onclick=()=>toast('Password reset link sent to your email')};

V.signup=()=>{const st=S.signup.type==='Student';return `<div class="screen">${bgLayer()}${statusBar}
 <button class="back glass" data-back style="border-radius:50%;width:32px;height:32px;left:30px;top:72px">${ic('back',18,'#fff')}</button>
 <div style="position:absolute;left:0;right:0;top:80px;text-align:center"><div style="font-size:22px;font-weight:700">Create Account</div><div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:4px;line-height:1.3">Join the University Community<br>and stay connected.</div></div>
 <div class="steps"><div class="stp on"><b>1</b>Account</div><div class="dash"></div><div class="stp"><b>2</b>Verify</div><div class="dash"></div><div class="stp"><b>3</b>Complete</div></div>
 <div class="sheetcard" style="top:292px;height:600px;border-top-left-radius:30px;border-top-right-radius:30px;background:rgba(40,20,20,.35)"></div>
 <div style="position:absolute;left:26px;top:306px;font-size:10px;font-weight:600">Account Type</div>
 <div style="position:absolute;left:26px;right:26px;top:324px;display:flex;gap:10px">
 <button data-type="Student" class="acct ${st?'on':''}" style="${tp(st)}">${ic('grad',16,st?'#a31f1f':'#555',1.5)}<span>Student</span></button><button data-type="Employee" class="acct ${!st?'on':''}" style="${tp(!st)}">${ic('brief',16,!st?'#a31f1f':'#555',1.5)}<span>Employee</span></button></div>
 <div style="position:absolute;left:26px;right:26px;top:378px;display:flex;flex-direction:column;gap:12px">
 <div class="field" style="height:38px"><span>${ic('user',17,'#a3a1a1',1.4)}</span><input placeholder="Enter your full name..." id="fn"></div>
 <div class="field" style="height:38px"><span>${ic('mail',17,'#a3a1a1',1.4)}</span><input placeholder="Enter your school email..." id="se"></div>
 <div class="field" style="height:38px"><span>${ic('id',17,'#a3a1a1',1.4)}</span><input placeholder="${st?'Enter your student number...':'Enter your employee number...'}"></div>
 ${pw2('Enter your password...','p1')}${pw2('Re-enter your password...','p2')}</div>
 <label style="position:absolute;left:26px;top:630px;display:flex;gap:8px;align-items:center;font-size:9px;color:#fff;cursor:pointer"><span id="agree" style="width:14px;height:14px;border-radius:3px;background:#e23d3d;display:grid;place-items:center">${ic('check',11,'#fff',3)}</span>I agree to the <b style="color:#ff6a6a;font-weight:500">Terms of Services</b> and <b style="color:#ff6a6a;font-weight:500">Privacy Policy</b></label>
 <button class="btn" data-act="next" style="position:absolute;left:26px;right:26px;top:658px;width:auto;font-size:13px">NEXT</button>
 <div style="position:absolute;left:0;right:0;top:716px;text-align:center;font-size:10px">Already have an account? <a data-back style="color:#ff6a6a;text-decoration:underline;cursor:pointer">Login</a></div></div>`};
const tp=on=>`flex:1;height:38px;border-radius:8px;background:${on?'#ffd9d9':'#fff'};border:${on?'1.5px solid #c42b2b':'1px solid #ddd'};color:${on?'#a31f1f':'#555'};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;font-size:9px;font-weight:600`;
const pw2=(ph,id)=>`<div class="field" style="height:38px"><span>${ic('lock',17,'#a3a1a1',1.4)}</span><input id="${id}" type="password" placeholder="${ph}"><button data-eye="${id}" style="display:grid">${ic('eyeoff',17,'#a3a1a1',1.4)}</button></div>`;
B.signup=()=>{phone.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{S.signup.type=b.dataset.type;render()});
 let ag=true;$('#agree').onclick=e=>{ag=!ag;e.currentTarget.style.background=ag?'#e23d3d':'rgba(255,255,255,.5)';e.currentTarget.innerHTML=ag?ic('check',11,'#fff',3):''};
 $('[data-act=next]').onclick=()=>{if(!ag)return toast('Please agree to the Terms and Privacy Policy');if($('#p1').value!==$('#p2').value)return toast('Passwords do not match');S.signup.email=$('#se').value;go('verify')}};

V.verify=()=>`<div class="screen">${bgLayer()}${statusBar}
 <button class="back glass" data-back style="border-radius:50%;width:32px;height:32px;left:30px;top:72px">${ic('back',18,'#fff')}</button>
 <div style="position:absolute;left:0;right:0;top:80px;text-align:center"><div style="font-size:22px;font-weight:700">Verify Account</div><div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:4px;line-height:1.3">Join the University Community<br>and stay connected.</div></div>
 <div class="steps"><div class="stp done"><b>${ic('check',16,'#fff',3)}</b>Account</div><div class="dash"></div><div class="stp on"><b>2</b>Verify</div><div class="dash"></div><div class="stp"><b>3</b>Complete</div></div>
 <div class="sheetcard" style="top:292px;height:600px;border-top-left-radius:30px;border-top-right-radius:30px;background:rgba(40,20,20,.2)"></div>
 <img src="${A('email.png')}" style="position:absolute;left:121px;top:308px;width:160px;height:160px;object-fit:contain">
 <div style="position:absolute;left:0;right:0;top:462px;text-align:center;font-size:20px;font-weight:600">Verify your Email</div>
 <div style="position:absolute;left:40px;right:40px;top:492px;text-align:center;font-size:9px;color:rgba(255,255,255,.7);line-height:1.35">Please check your Outlook, we send 6-digit verification code to your university email.</div>
 <div class="otp" style="position:absolute;left:0;right:0;top:524px">${[0,1,2,3,4,5].map(i=>`<input maxlength="1" inputmode="numeric" data-i="${i}">`).join('')}</div>
 <div style="position:absolute;right:46px;top:574px;font-size:9px;color:#ff6a6a;text-decoration:underline;cursor:pointer" data-act="resend">Resend Code</div>
 <button class="btn" data-act="next" style="position:absolute;left:26px;right:26px;top:598px;width:auto;font-size:13px">Verify Email</button>
 <div style="position:absolute;left:0;right:0;top:703px;text-align:center;font-size:10px">Having a problem? <a style="color:#ff6a6a;text-decoration:underline">Contact Support</a></div></div>`;
B.verify=()=>{const ins=[...phone.querySelectorAll('.otp input')];ins[0].focus();ins.forEach((el,i)=>{el.oninput=()=>{el.value=el.value.replace(/\D/g,'');if(el.value&&ins[i+1])ins[i+1].focus()};el.onkeydown=e=>{if(e.key==='Backspace'&&!el.value&&ins[i-1])ins[i-1].focus()}});
 $('[data-act=resend]').onclick=()=>toast('A new code was sent');$('[data-act=next]').onclick=()=>{if(ins.some(x=>!x.value))return toast('Enter the 6-digit code (any digits work in this demo)');go('success')}};

V.success=()=>`<div class="screen">${bgLayer()}${statusBar}
 <div style="position:absolute;left:0;right:0;top:80px;text-align:center"><div style="font-size:22px;font-weight:700">Verification Successful</div></div>
 <div class="steps"><div class="stp done"><b>${ic('check',16,'#fff',3)}</b>Account</div><div class="dash"></div><div class="stp done"><b>${ic('check',16,'#fff',3)}</b>Verify</div><div class="dash"></div><div class="stp on"><b>3</b>Complete</div></div>
 <div class="sheetcard" style="top:292px;height:600px;border-top-left-radius:30px;border-top-right-radius:30px;background:rgba(40,20,20,.2)"></div>
 <img src="${A('verify.png')}" style="position:absolute;left:111px;top:318px;width:180px;height:180px;object-fit:contain;animation:pop .6s cubic-bezier(.2,1.4,.4,1)">
 <div style="position:absolute;left:0;right:0;top:514px;text-align:center;font-size:25px;font-weight:700">Account Created!</div>
 <div style="position:absolute;left:60px;right:60px;top:552px;text-align:center;font-size:11px;color:rgba(255,255,255,.75);line-height:1.35">Welcome to University App.<br>Lets build connections and create opportunities together.</div>
 <div class="confetti" id="cf"></div><style>@keyframes pop{from{transform:scale(.2);opacity:0}to{transform:scale(1);opacity:1}}</style></div>`;
B.success=()=>{const c=$('#cf'),col=['#ff6fa8','#a7e66b','#6bb5ff','#ffd24a','#b07bff','#ff8a4d'];for(let i=0;i<46;i++){const e=document.createElement('i');e.style.left=Math.random()*100+'%';e.style.background=col[i%6];e.style.setProperty('--dx',(Math.random()*120-60)+'px');e.style.setProperty('--rx',(360+Math.random()*720)+'deg');e.style.setProperty('--ry',(360+Math.random()*720)+'deg');e.style.setProperty('--rz',(Math.random()*720)+'deg');e.style.animationDuration=(2.2+Math.random()*2)+'s';e.style.animationDelay=(Math.random()*.9)+'s';e.style.width=(8+Math.random()*8)+'px';e.style.height=(14+Math.random()*12)+'px';c.appendChild(e)}
 setTimeout(()=>{if(cur().name==='success')go('skeleton',{},true)},3200)};

V.skeleton=()=>`<div class="screen">${bgLayer()}${statusBar}
 <div class="sk" style="position:absolute;left:19px;top:71px;width:36px;height:36px;border-radius:50%"></div><div class="sk" style="position:absolute;left:66px;top:71px;width:222px;height:36px;border-radius:22px"></div><div class="sk" style="position:absolute;left:296px;top:71px;width:36px;height:36px;border-radius:50%"></div><div class="sk" style="position:absolute;left:341px;top:71px;width:36px;height:36px;border-radius:50%"></div>
 <div class="sk" style="position:absolute;left:22px;top:140px;width:104px;height:26px;border-radius:13px"></div><div class="sk" style="position:absolute;left:134px;top:144px;width:79px;height:18px"></div><div class="sk" style="position:absolute;left:236px;top:144px;width:79px;height:18px"></div>
 <div class="sk" style="position:absolute;left:16px;top:186px;width:370px;height:196px"></div>
 <div class="sk" style="position:absolute;left:16px;top:392px;width:370px;height:280px"></div><div class="sk" style="position:absolute;left:16px;top:682px;width:370px;height:140px"></div>
 <div class="sk" style="position:absolute;left:13px;top:772px;width:377px;height:60px;border-radius:50px"></div></div>`;
B.skeleton=()=>setTimeout(()=>{if(cur().name==='skeleton')reset('home')},2200);

function filteredPosts(cat){let l=POSTS.filter(p=>p.cat.includes(cat)&&!S.hidden.has(p.id));if(S.q)l=l.filter(p=>(p.title+' '+(p.text||'')+p.user).toLowerCase().includes(S.q.toLowerCase()));
 const r=S.filt.range,lim={Today:1440,'This week':10080,'This month':43200}[r];if(lim)l=l.filter(p=>p.m<=lim);
 if(S.filt.sort==='Latest')l=[...l].sort((a,b)=>a.m-b.m);if(S.filt.sort==='Most like')l=[...l].sort((a,b)=>b.up-a.up);if(S.filt.sort==='Most comment')l=[...l].sort((a,b)=>b.c-a.c);return l}
V.home=()=>{const f=S.feed;const pills=[['trending','Trending','fire',-3],['campus','Campus','loc',104],['social','Social','user',208]];
 const list=filteredPosts(f);
 return `<div class="screen">${bgLayer()}${statusBar}
 <div class="scroll" id="sc" style="top:178px;bottom:0;padding:8px 0 130px">
 ${f==='trending'?`<div class="card happen"><div class="t">${ic('trend',16,'#681d2a',2)}<span>Happening Now</span></div><div class="hs" id="hs" style="margin-top:14px;padding:0 0 0 16px;scroll-padding-left:16px">${HAPPEN.map(h=>`<div class="hc"><img src="${h[3]}"><span class="tag">${h[0]}</span><div class="tt">${h[1].replace('\n','<br>')}<small>${h[2]}</small></div></div>`).join('')}<div style="flex:none;width:7px"></div></div><div class="dots3" id="hd">${[0,1,2].map(k=>`<i class="${k?'':'on'}"></i>`).join('')}</div></div>`:''}
 ${list.map(p=>postCard(p)).join('')||'<div style="text-align:center;padding:60px;opacity:.7;font-size:13px">No posts to show</div>'}</div>
 ${topbar(`<div class="pills">${pills.map(([k,l,i,x])=>`<button class="pill ${f===k?'on':''}" data-feed="${k}" style="left:${x}px">${ic(i,17,f===k?'#fff':'#a3a1a1',1.6)}${l}</button>`).join('')}<button data-act="filter" style="position:absolute;left:341px;top:1px;color:#fff">${ic('sliders',23,'#fff',1.5)}</button></div>`)}${navbar('home')}</div>`};
B.home=()=>{const hs=$('#hs');if(hs)hs.onscroll=()=>{const k=Math.min(2,Math.round(hs.scrollLeft/139/1.5));[...$('#hd').children].forEach((d,i)=>d.classList.toggle('on',i===k))};
 phone.querySelectorAll('[data-feed]').forEach(b=>b.onclick=()=>{S.feed=b.dataset.feed;render()})};

V.notif=()=>{const fs=['All','Announcement','Social','Organization'];const l=NOTIFS.filter(n=>S.notifFilter==='All'||n[0]===S.notifFilter);
 return `<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back style="left:20px;top:74px">${ic('back',22,'#fff',1.8)}</button><div style="position:absolute;left:55px;top:72px;font-size:21px;font-weight:700">Notification</div><button style="position:absolute;right:20px;top:76px">${ic('swap',20,'#fff',1.5).replace('M7 4v14M3 14l4 4 4-4M17 20V6M13 10l4-4 4 4','M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4')}</button>
 <div style="position:absolute;left:22px;top:122px;display:flex;gap:8px">${fs.map(f=>`<button class="pill ${S.notifFilter===f?'on':''}" data-nf="${f}" style="position:static;height:20px;font-size:10px;padding:0 9px;font-weight:${S.notifFilter===f?700:500};color:${S.notifFilter===f?'#fff':'rgba(255,255,255,.6)'}">${f}</button>`).join('')}</div>
 <div style="position:absolute;left:0;right:0;top:162px">${l.map(n=>`<div class="lg" style="margin:0 14px 7px;border-radius:12px;padding:8px 10px;display:flex;gap:10px;align-items:center;background:${n[5]};backdrop-filter:blur(14px);color:#000;box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),0 2px 6px rgba(0,0,0,.15)"><span style="width:30px;height:30px;border-radius:50%;background:#fff;display:grid;place-items:center;flex:none">${ic(n[1],16,'#a31f1f',1.7)}</span><div style="flex:1"><b style="font-size:10.5px;display:block">${n[2]}</b><small style="font-size:8px;color:#555">${n[3]}</small></div><small style="font-size:7px;color:#666;align-self:flex-start">${n[4]}</small></div>`).join('')}</div>${navbar('home')}</div>`};
B.notif=()=>phone.querySelectorAll('[data-nf]').forEach(b=>b.onclick=()=>{S.notifFilter=b.dataset.nf;render()});

function orgPills(act){return `<div style="position:absolute;left:16px;top:176px;display:flex;gap:6px;align-items:center">${['All','University','Department'].map(f=>`<button class="pill ${S[act]===f?'on':''}" data-of="${f}" data-st="${act}" style="position:static;height:26px;padding:0 ${f==='All'?16:10}px;font-size:13px;font-weight:${S[act]===f?700:600};color:${S[act]===f?'#fff':'rgba(255,255,255,.85)'};text-shadow:${S[act]===f?'none':'0 1px 3px rgba(0,0,0,.4)'}">${f}</button>`).join('')}</div><button style="position:absolute;left:366px;top:178px">${ic('sliders',22,'#fff',1.5)}</button>`}
const fo=(act)=>ORGS.filter(o=>S[act]==='All'||o.type===S[act]);
V.org=()=>{const l=fo('orgFilter');return `<div class="screen">${bgLayer()}${statusBar}${topbar()}
 <div class="h-title" style="top:140px">Organization Feed</div>${orgPills('orgFilter').replace('top:176px','top:176px')}
 <div class="scroll" style="top:218px;bottom:0;padding:0 0 130px">
 <div class="card" style="margin:0 16px 12px;padding:10px 0 10px;height:212px;border-radius:12px;overflow:visible"><div style="display:flex;justify-content:space-between;padding:0 11px 8px;font-size:12px;font-weight:700;color:#681d2a">Featured Organization<a data-go="featured" style="color:#681d2a;cursor:pointer">See all</a></div>
 <div class="hs" style="padding:0 0 0 11px;scroll-padding-left:11px;height:158px;padding-bottom:0;overflow-y:hidden">${l.map(o=>`<div class="org-card" data-go="orgd" data-p='{"id":"${o.id}"}' style="cursor:pointer"><img src="${o.cover}" style="object-fit:cover;${o.id==='chess'?'object-position:center':''}"><b>${o.short.length>14?o.short.slice(0,12)+'…':o.short.toUpperCase()===o.short?o.short:o.short}</b><small>${o.type} Organization</small><em>${o.mem} Members</em></div>`).join('')}<div style="flex:none;width:11px"></div></div>
 <div class="dots3" style="margin-top:8px">${[0,1,2].map(k=>`<i class="${k?'':'on'}" style="width:5px;height:5px"></i>`).join('')}</div></div>
 <div style="font-size:18px;font-weight:600;margin:6px 16px 10px;text-shadow:0 2px 4px rgba(0,0,0,.3)">Latest Updates</div>
 ${POSTS.filter(p=>p.cat.includes('org')&&!S.hidden.has(p.id)).map(p=>postCard(p)).join('')}</div>${navbar('org')}</div>`};
B.org=()=>wireOF();
function wireOF(){phone.querySelectorAll('[data-of]').forEach(b=>b.onclick=()=>{S[b.dataset.st]=b.dataset.of;render()})}
V.featured=()=>{const l=fo('listFilter');return `<div class="screen">${bgLayer()}${statusBar}${topbar()}<div class="h-title" style="top:140px">Featured Organization</div>${orgPills('listFilter')}
 <div class="scroll" style="top:216px;bottom:0;padding:4px 0 130px">${l.map((o,i)=>`<div class="lg orgrow" data-go="orgd" data-p='{"id":"${o.id}"}' style="cursor:pointer;background:${['linear-gradient(120deg,rgba(255,225,235,.85),rgba(245,215,225,.7))','linear-gradient(120deg,rgba(250,235,200,.8),rgba(225,230,235,.7))','linear-gradient(120deg,rgba(235,238,245,.8),rgba(215,225,240,.7))'][i%3]}"><img class="lg-i" src="${o.logo}"><div><b>${o.short}</b><small>${o.type} Organization</small><p>${o.desc}</p></div><span style="position:absolute;right:12px;top:12px">${ic('chev',14,'#777',1.6)}</span><span class="mem">👥 ${o.mem} Members</span></div>`).join('')}</div>${navbar('org')}</div>`};
B.featured=()=>wireOF();

V.orgd=({id,tab='Overview'})=>{const o=ORGS.find(x=>x.id===id);const tabs=['Overview','Officers','Requirements','Activities'];const joined=S.joined.has(id);
 let body='';
 if(tab==='Overview')body=`<div class="sec">${ic('doc',17,'#a31f1f',1.6)}About Us</div><p style="font-size:8.5px;color:#666;line-height:1.35;margin:8px 0 14px">${o.about}</p>
 <div style="display:flex;gap:8px">${[['users','1.2k','Members'],['pin','MSEUF','Main Campus'],['cal','Founded',o.founded]].map(x=>`<div style="flex:1;background:#fff;border-radius:8px;padding:8px;display:flex;gap:6px;align-items:center;box-shadow:0 1px 3px rgba(0,0,0,.1)">${ic(x[0],14,'#a31f1f',1.6)}<div style="font-size:7px;color:#a31f1f"><b style="font-size:9px;display:block">${x[1]}</b>${x[2]}</div></div>`).join('')}</div>
 <div class="sec" style="margin:16px 0 8px">${ic('check',15,'#a31f1f',2.5).replace('M5 12.500l4.500 4.500L19 7.500','M12 3l2.600 5.600 6 .8-4.400 4.200 1.100 6L12 16.700 6.700 19.600l1.100-6L3.400 9.400l6-.8z')}Highlights</div><div style="display:flex;gap:10px">${o.hl.map(h=>`<div style="flex:1;height:72px;background:#fdeaea;border-radius:8px;border:1px solid #f0c9c9;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;font-size:8px;color:#a31f1f;font-weight:600">${ic('grad',18,'#a31f1f',1.5)}${h}</div>`).join('')}</div>`;
 if(tab==='Officers')body=`<div class="sec">${ic('org',18,'#a31f1f',1.6)}Officers</div><div style="font-size:8px;color:#888;margin:2px 0 10px">Meet the leaders of our organization</div>${OFFICERS.map(x=>`<div style="display:flex;gap:10px;align-items:center;margin-bottom:12px"><img src="${x[2]}" style="width:28px;height:28px;border-radius:50%;object-fit:cover"><div><b style="font-size:10px;color:#a31f1f">${x[0]}</b><div style="font-size:8px;color:#888">${x[1]}</div></div></div>`).join('')}`;
 if(tab==='Requirements')body=`<div class="sec">${ic('doc',17,'#a31f1f',1.6)}Requirements to Join</div><div style="font-size:8px;color:#888;margin:2px 0 10px">Be part of the ${o.short} and make a difference!</div>${REQS.map(r=>`<div style="display:flex;gap:9px;align-items:center;background:#fff;border-radius:8px;padding:8px 10px;margin-bottom:8px;font-size:8.5px;color:#a31f1f;font-weight:500;box-shadow:0 1px 3px rgba(0,0,0,.1)"><span style="width:16px;height:16px;border-radius:50%;background:#c42b2b;display:grid;place-items:center;flex:none">${ic('check',10,'#fff',3.5)}</span>${r.replace('University Collegiate Student Council',o.short)}</div>`).join('')}
 <div class="sec" style="font-size:10px;margin-top:4px">${ic('doc',13,'#a31f1f',1.6)}Application Form</div><div style="background:#fff;border-radius:8px;padding:8px;margin:6px 0;box-shadow:0 1px 3px rgba(0,0,0,.1)"><div style="display:flex;gap:8px;align-items:center;font-size:8px;color:#a31f1f"><span style="width:22px;height:26px;background:#fde0e0;border-radius:4px;display:grid;place-items:center">${ic('doc',14,'#c42b2b',1.5)}</span><div><b>Application Form</b><br><span style="color:#999">PDF • 158 KB</span></div></div><button data-act="dl" style="width:100%;height:20px;margin-top:6px;border-radius:5px;background:#b42222;color:#fff;font-size:8px;font-weight:600">⬇ Download</button></div>
 <div class="sec" style="font-size:10px">${ic('cal',13,'#a31f1f',1.6)}Application Period</div><div style="background:#fff;border-radius:8px;padding:7px 10px;margin-top:6px;font-size:8.5px;color:#a31f1f;font-weight:600">${o.period}<div style="color:#999;font-weight:400;font-size:7px">12:00 AM - 11:59 PM</div></div>`;
 if(tab==='Activities')body=`<div class="sec">${ic('megaphone',17,'#a31f1f',1.6)}Activities</div><div style="font-size:8px;color:#888;margin:2px 0 10px">Stay updated with our latest announcements, events, and activities.</div>${ACTS.map(a=>`<div style="background:#fff;border-radius:8px;padding:8px 10px;margin-bottom:8px;box-shadow:0 1px 3px rgba(0,0,0,.1)"><div style="font-size:7.5px;color:#666;font-weight:600">${a[0]}</div><div style="font-size:9.5px;font-weight:700;margin:3px 0;color:#000">${a[1]}</div><div style="font-size:7.5px;color:#999;line-height:1.3">${a[2]}</div></div>`).join('')}`;
 return `<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle">Organization</div>
 <img src="${o.logo}" style="position:absolute;left:44px;top:115px;width:66px;height:66px;border-radius:50%;object-fit:cover;background:#fff"><div style="position:absolute;left:120px;top:118px;width:240px"><div style="font-size:16px;font-weight:700;line-height:1.15">${o.name}</div><div style="font-size:9px;color:rgba(255,255,255,.8);margin-top:3px">${o.type} Organization</div><div style="font-size:8px;margin-top:3px;color:rgba(255,255,255,.8)">${ic('users',10,'#fff',1.6)} ${o.mem} Members</div></div>
 <div class="sheetcard lg" style="top:224px;height:640px;border-radius:30px 30px 0 0;background:rgba(255,235,235,.55)"></div>
 <div class="tabbar" style="position:absolute;left:30px;right:30px;top:238px;margin:0;z-index:3;background:rgba(255,255,255,.92)">${tabs.map(t=>`<button class="${t===tab?'on':''}" data-tab="${t}">${t}</button>`).join('')}</div>
 <div class="scroll" style="top:274px;bottom:84px;padding:6px 30px;color:#000;z-index:3">${body}</div>
 <button class="btn" data-act="apply" style="position:absolute;left:30px;right:30px;bottom:50px;width:auto;z-index:5;font-size:13px;${joined?'background:#777':''}">${joined?'Application sent':'Apply now'}</button></div>`};
B.orgd=({id})=>{phone.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>go('orgd',{id,tab:b.dataset.tab},true));const o=ORGS.find(x=>x.id===id);
 $('[data-act=apply]').onclick=()=>{if(o.type==='Department'&&o.dept!=='CCMS')return toast(`Only ${o.dept} students can join this organization`);S.joined.add(id);toast('Application submitted!');render()};const d=$('[data-act=dl]');if(d)d.onclick=()=>toast('Downloading application form…')};

V.msg=()=>`<div class="screen">${bgLayer()}${statusBar}<div style="position:absolute;left:17px;top:90px;font-size:24px;font-weight:700">Messages</div>
 <div class="search glass" style="left:17px;top:140px;width:368px;height:32px;border-radius:16px;background:rgba(255,255,255,.2)">${ic('search',16,'#fff',1.6)}<input placeholder="Search people, group..."></div>
 <div style="position:absolute;left:0;right:0;top:188px">${CONVOS.map((c,i)=>`<div class="lg msg-row" data-go="convo" data-p='{"id":"${c.id}"}' style="cursor:pointer;background:${i===0?'linear-gradient(120deg,rgba(255,225,200,.6),rgba(255,235,225,.45))':'rgba(255,255,255,.2)'}">${c.group?`<span style="width:32px;height:32px;border-radius:50%;background:#b42222;display:grid;place-items:center">${ic('users',16,'#fff',1.6)}</span>`:`<img src="${c.av}">`}<div style="flex:1;min-width:0"><b style="font-size:11px;display:block">${c.name}</b><span style="font-size:8.5px;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block">${c.last}</span></div><div style="text-align:right;font-size:8px;opacity:.85;align-self:flex-start">${c.time}${c.badge?`<div style="margin:6px 0 0 auto;width:15px;height:15px;border-radius:50%;background:#c42b2b;font-size:8px;font-weight:700;display:grid;place-items:center">${c.badge}</div>`:''}</div></div>`).join('')}</div>${navbar('msg')}</div>`;
V.convo=({id})=>{const c=CONVOS.find(x=>x.id===id);const m=[...c.msgs,...(S.convoMsgs[id]||[])];
 return `<div class="screen">${bgLayer()}${statusBar}<button class="glass" data-back style="position:absolute;left:18px;top:76px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;z-index:5">${ic('back',16,'#fff',2)}</button>
 <div style="position:absolute;left:58px;top:76px;display:flex;gap:10px;align-items:center;z-index:5">${c.group?`<span style="width:30px;height:30px;border-radius:50%;background:#b42222;display:grid;place-items:center">${ic('users',15,'#fff')}</span>`:`<img src="${c.av}" style="width:30px;height:30px;border-radius:50%;object-fit:cover">`}<b style="font-size:15px">${c.name}</b></div><div style="position:absolute;left:18px;right:18px;top:118px;height:1px;background:rgba(255,255,255,.5)"></div>
 <div class="scroll" id="cv" style="top:128px;bottom:84px;padding:10px 14px"><div style="text-align:center;margin-bottom:12px"><span class="glass" style="font-size:9px;padding:3px 12px;border-radius:10px;background:rgba(255,255,255,.2)">Oct 15</span></div>${m.map(x=>x[0]==='n'?`<div style="text-align:center;margin:8px 0"><span class="glass" style="font-size:9px;padding:3px 12px;border-radius:10px;background:rgba(255,255,255,.2)">${x[1]}</span></div>`:`<div style="display:flex;gap:6px;align-items:flex-end;margin-bottom:10px;${x[0]==='r'?'justify-content:flex-end':''}">${x[0]==='l'?(c.group?'<span style="width:22px;height:22px;border-radius:50%;background:#b42222"></span>':`<img src="${c.av}" style="width:22px;height:22px;border-radius:50%;object-fit:cover">`):''}<div><div class="bub ${x[0]}">${esc(x[1])}</div><div style="font-size:7px;opacity:.7;margin-top:2px;${x[0]==='r'?'text-align:right':''}">${x[2]||''}${x[0]==='r'?' ✓✓':''}</div></div></div>`).join('')}</div>
 <div style="position:absolute;left:14px;right:14px;top:800px;height:42px;display:flex;gap:10px;align-items:center;z-index:5"><button class="glass" style="width:34px;height:34px;border-radius:50%;display:grid;place-items:center">${ic('plain',18,'#fff',1.8)}</button><div class="glass" style="flex:1;height:36px;border-radius:18px;display:flex;align-items:center;padding:0 14px"><input id="mi" placeholder="Type a message..." style="background:none;color:#fff;font-size:11px;width:100%"></div><button class="glass" data-act="send" style="width:34px;height:34px;border-radius:50%;display:grid;place-items:center">${ic('send',16,'#fff',1.6)}</button></div></div>`};
B.convo=({id})=>{const cv=$('#cv');cv.scrollTop=cv.scrollHeight;const send=()=>{const v=$('#mi').value.trim();if(!v)return;(S.convoMsgs[id]=S.convoMsgs[id]||[]).push(['r',v,'9:25 AM']);render()};$('[data-act=send]').onclick=send;$('#mi').onkeydown=e=>{if(e.key==='Enter')send()}};

const catIc=[['Foods','food'],['Services','shirt'],['Rentals','calc'],['Electronics','head'],['Art & Craft','brush']];
V.market=()=>`<div class="screen">${bgLayer()}${statusBar}${topbar()}<div class="h-title" style="top:128px;font-size:22px">Marketplace</div><button style="position:absolute;left:366px;top:136px">${ic('sliders',22,'#fff',1.5)}</button>
 <div class="scroll" style="top:172px;bottom:0;padding:0 16px 130px"><div class="card" style="padding:12px 12px 8px;border-radius:12px;margin-bottom:16px"><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:#681d2a;margin-bottom:10px">Categories<span style="font-size:10px">See all</span></div><div style="display:flex;justify-content:space-between">${catIc.map(c=>`<div style="text-align:center;font-size:8px;font-weight:700"><span style="width:54px;height:54px;border-radius:50%;background:#e7e5e5;display:grid;place-items:center;margin-bottom:6px">${ic(c[1],26,'#681d2a',1.5)}</span>${c[0]}</div>`).join('')}</div></div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${MK.map(m=>`<div class="mk" data-go="mkd" data-p='{"id":"${m.id}"}' style="cursor:pointer"><img src="${m.img}" style="${m.id==='tee'?'object-fit:contain;background:#fff':''}"><div class="p ${m.sold?'sold':''}">${m.p?'₱'+m.p:'Inquire'}</div><div class="n">${m.name}</div><div class="d">${m.d}</div><div class="m">${m.st} &nbsp;• ${m.ago}</div></div>`).join('')}</div></div>
 <button data-act="postitem" style="position:absolute;left:267px;top:716px;width:118px;height:40px;border-radius:20px;background:#b42222;color:#fff;font-weight:600;font-size:13px;z-index:48;box-shadow:inset 0 0 14px rgba(255,255,255,.35),0 6px 14px rgba(0,0,0,.3)">＋ Post Item</button>${navbar('market')}</div>`;
V.mkd=({id})=>{const m=MK.find(x=>x.id===id);return `<div class="screen" style="background:#f5f5f5;color:#000"><div style="position:absolute;left:20px;top:0;width:362px;height:360px;background:#fff"><img src="${m.img}" style="width:100%;height:100%;object-fit:${['tee','calc','attire','mouse'].includes(m.id)?'contain':'cover'}"></div><div style="position:absolute;left:0;right:0;top:0;height:110px;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(255,255,255,0))"></div>
 ${statusBar}<button class="back" data-back style="top:68px">${ic('back',22,'#fff',2)}</button><button style="position:absolute;right:14px;top:68px;color:#fff;z-index:50">${ic('dots',24)}</button>
 <div style="position:absolute;left:25px;top:378px;right:20px"><div style="font-size:19px;font-weight:700">${m.name}</div><div style="font-size:23px;font-weight:700;color:#712222;margin-top:6px">${m.p?'₱'+m.p:'Inquire'}</div><div style="font-size:11px;font-weight:600;color:#777;margin-top:4px">${m.st} <span style="font-weight:400;font-size:9px">&nbsp;• ${m.ago}</span></div><div style="font-size:12.5px;color:#777;margin-top:10px;line-height:1.3;width:240px">${m.d}</div></div>
 <div style="position:absolute;left:22px;right:25px;top:565px">${[['clip','Condition',m.cond],['bag','Category',m.cat],['user','Seller','Ask seller']].map(r=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;font-size:13.500px;font-weight:600">${ic(r[0],22,'#712222',1.6)}<span style="flex:1">${r[1]}</span><b>${r[2]}</b></div>`).join('')}</div>
 <button class="btn soft" data-act="msgseller" style="position:absolute;left:23px;right:23px;top:760px;width:auto;height:48px;font-size:15px">Message Seller</button><div class="home-ind" style="background:#fff"></div></div>`};
B.mkd=()=>$('[data-act=msgseller]').onclick=()=>go('convo',{id:'mark'});

V.profile=()=>{const mine=POSTS.filter(p=>p.cat.includes('mine'));return `<div class="screen">${bgLayer()}${statusBar}<div class="ptitle" style="top:84px;font-size:15px">Profile</div><button data-go="settings" style="position:absolute;right:18px;top:82px;z-index:50">${ic('gear',22,'#fff',1.4)}</button>
 <div class="lg" style="position:absolute;left:16px;right:16px;top:118px;height:358px;border-radius:30px;background:rgba(255,255,255,.12)"></div>
 <img src="${ME.av}" style="position:absolute;left:146px;top:130px;width:110px;height:110px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.7)">
 <div style="position:absolute;left:0;right:0;top:256px;text-align:center;font-size:17px;font-weight:700">${ME.name}</div><div style="position:absolute;left:0;right:0;top:282px;text-align:center;font-size:10px;opacity:.85">${ME.type} &nbsp;|&nbsp; ${ME.id}</div>
 <div style="position:absolute;left:34px;top:322px;font-size:14px;font-weight:700">Personal Details</div>
 <div style="position:absolute;left:34px;top:356px;display:flex;flex-direction:column;gap:18px;font-size:11px;font-weight:500">${[['id',ME.dept],['grad',ME.year],['org',ME.org]].map(r=>`<div style="display:flex;gap:12px;align-items:center">${ic(r[0],17,'#fff',1.4)}${r[1]}</div>`).join('')}</div>
 <div style="position:absolute;left:18px;top:494px;font-size:16px;font-weight:700">All post</div>
 <div class="scroll" style="top:524px;bottom:0;padding:0 0 130px">${mine.map(p=>postCard(p,{menu:true})).join('')}</div>${navbar('profile')}</div>`};
V.settings=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">Settings</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:112px;height:56px;border-radius:16px;display:flex;align-items:center;gap:10px;padding:0 10px"><img src="${ME.av}" style="width:42px;height:42px;border-radius:50%;object-fit:cover"><div><b style="font-size:12px">${ME.name}</b><div style="font-size:8px;opacity:.8">${ME.type} | ${ME.id}</div></div></div>
 <div style="position:absolute;left:21px;top:190px;font-size:12px;font-weight:700">Account</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:212px;border-radius:16px;padding:4px 10px">${[['Edit Profile','Update your personal information','user','edit'],['Change Password','Keep your account secure','lock','pass']].map((r,i)=>`<div data-go="${r[3]}" style="display:flex;gap:10px;align-items:center;height:46px;cursor:pointer;${i?'border-top:1px solid rgba(255,255,255,.2)':''}"><span style="width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.25);display:grid;place-items:center">${ic(r[2],13,'#fff',1.6)}</span><div style="flex:1"><b style="font-size:10px">${r[0]}</b><div style="font-size:7.5px;opacity:.75">${r[1]}</div></div>${ic('chev',14,'#fff',1.6)}</div>`).join('')}</div>
 <div style="position:absolute;left:21px;top:334px;font-size:12px;font-weight:700">Support & Other</div>
 <div class="lg" data-go="about" style="position:absolute;left:19px;right:19px;top:356px;border-radius:16px;padding:4px 10px;cursor:pointer"><div style="display:flex;gap:10px;align-items:center;height:46px"><span style="width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.25);display:grid;place-items:center">${ic('lock',13,'#fff',1.6)}</span><div style="flex:1"><b style="font-size:10px">About UNICOM</b><div style="font-size:7.5px;opacity:.75">App Version 1.0.0</div></div>${ic('chev',14,'#fff',1.6)}</div></div>
 <button class="btn" data-act="logout" style="position:absolute;left:30px;right:30px;top:752px;width:auto;font-size:13px">${ic('logout',16,'#fff',1.8)}&nbsp; Log Out</button></div>`;
B.settings=()=>$('[data-act=logout]').onclick=()=>reset('login');
const lab=t=>`<div style="font-size:8.5px;font-weight:700;margin:0 0 4px 4px;color:#fff">${t}</div>`;
V.edit=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">Edit Profile</div>
 <div style="position:absolute;left:151px;top:112px"><img src="${ME.av}" style="width:100px;height:100px;border-radius:50%;object-fit:cover"><span style="position:absolute;right:-4px;bottom:-4px;width:28px;height:28px;border-radius:50%;background:#fff;display:grid;place-items:center">${ic('camera',15,'#a31f1f',1.6)}</span></div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:250px;border-radius:18px;padding:12px 12px 14px"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:10px">Account Details ${ic('pen',14,'#fff',1.6)}</div>
 ${[['Full Name',ME.name],['Email',ME.email],['Phone Number (Optional)','+63 900 000 0000'],['Birthday','01/01/2004']].map(r=>`${lab(r[0])}<div class="field" style="height:28px;border-radius:7px;margin-bottom:12px;padding:0 10px"><input value="${r[1]}" style="font-size:9px"></div>`).join('')}</div>
 <button class="btn" data-act="saveprof" style="position:absolute;left:30px;right:30px;top:752px;width:auto;font-size:13px">Save Changes</button></div>`;
B.edit=()=>$('[data-act=saveprof]').onclick=()=>{toast('Profile updated');setTimeout(back,700)};
V.pass=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">Change Password</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:112px;border-radius:18px;padding:14px 12px 14px">${[['Current Password','cp'],['New Password','np'],['Re-enter Password','rp']].map(r=>`${lab(r[0])}<div style="margin-bottom:14px">${pw2('',r[1]).replace('height:38px','height:28px;border-radius:7px').replace(/width="17"/g,'width="14"')}</div>`).join('')}<button class="btn" data-act="savepw" style="height:28px;font-size:10px;margin-top:6px">Save Password</button><div style="text-align:center;font-size:8px;margin-top:10px;cursor:pointer" data-back>Discard</div></div></div>`;
B.pass=()=>$('[data-act=savepw]').onclick=()=>{if($('#np').value!==$('#rp').value)return toast('Passwords do not match');toast('Password updated');setTimeout(back,700)};
V.about=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">About</div>
 <img src="${A('settings-logo.png')}" style="position:absolute;left:131px;top:110px;width:140px;height:140px;object-fit:contain"><div style="position:absolute;left:0;right:0;top:258px;text-align:center;font-size:19px;font-weight:700">UNICOM</div><div style="position:absolute;left:0;right:0;top:284px;text-align:center;font-size:9px;opacity:.8">Version 1.0.0</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:310px;border-radius:14px;padding:12px;font-size:8.5px;line-height:1.4;background:rgba(255,255,255,.2)">Unicom (Campus Feed) is a university community social app for MSEUF, built to facilitate the students and staff. It gives students a safe, verified community where they can share announcements and Q&A, join organizations, trade in the marketplace, and chat through direct messaging — all in one place for the university community.</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:424px;border-radius:14px;padding:2px 12px">${[['Terms of Services','doc'],['Privacy Policy','lock'],['Developed by','user']].map((r,i)=>`<div style="display:flex;gap:10px;align-items:center;height:36px;font-size:9.5px;font-weight:600;${i?'border-top:1px solid rgba(255,255,255,.2)':''}">${ic(r[1],14,'#fff',1.5)}<span style="flex:1">${r[0]}${r[0]==='Developed by'?'<div style="font-size:7px;font-weight:400;opacity:.7">UNICOM Team</div>':''}</span>${r[0]!=='Developed by'?ic('chev',13,'#fff',1.6):''}</div>`).join('')}</div></div>`;

/* ---------- overlays ---------- */
function overlay(html){$('#ov').innerHTML=html;}
function closeOv(){$('#ov').innerHTML=''}
function openFilter(){const f=S.filt;let t={...f};const draw=()=>{overlay(`<div class="dim" data-close></div><div class="pop lg" style="left:176px;top:287px;width:214px;height:272px;padding:14px;background:rgba(255,255,255,.55)">
 <div style="color:#a31f1f;font-size:14px;font-weight:600;display:flex;gap:8px;align-items:center" ><span data-close style="cursor:pointer">✕</span>Filter Post</div><div style="font-size:12px;font-weight:600;margin:14px 0 8px">Sort by</div>${['Latest','Most like','Most comment'].map(x=>`<span class="chip ${t.sort===x?'on':''}" data-s="${x}">${x}</span>`).join('')}
 <div style="font-size:12px;font-weight:600;margin:6px 0 8px">Time range</div>${['All','Today','This week','This month'].map(x=>`<span class="chip ${t.range===x?'on':''}" data-r="${x}">${x}</span>`).join('')}
 <button class="btn soft" data-ap style="height:26px;font-size:11px;margin-top:20px">Apply filter</button><div style="text-align:center;color:#a31f1f;font-size:10px;margin-top:10px;cursor:pointer" data-rs>Reset</div></div>`);
 $('#ov').querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);$('#ov').querySelectorAll('[data-s]').forEach(e=>e.onclick=()=>{t.sort=e.dataset.s;draw()});$('#ov').querySelectorAll('[data-r]').forEach(e=>e.onclick=()=>{t.range=e.dataset.r;draw()});$('[data-ap]').onclick=()=>{S.filt=t;render()};$('[data-rs]').onclick=()=>{S.filt={sort:'Latest',range:'All'};render()}};draw()}
function openNewPost(){let cat='Campus',cm=false,img=null;const draw=(keep)=>{const txt=keep?$('#pt').value:'';overlay(`<div class="dim" data-close></div><div class="sheet sheetcard lg" style="height:640px;background:rgba(255,235,235,.55);backdrop-filter:blur(26px);color:#000;padding:0 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff">
 <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:8px auto 0"></div><div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-top:10px;position:relative">New post<span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span></div>
 <div style="display:flex;gap:10px;align-items:center;margin-top:20px"><img src="${ME.av}" style="width:34px;height:34px;border-radius:50%;object-fit:cover"><b style="font-size:13px">${ME.name}</b></div>
 <textarea id="pt" placeholder="What's on your mind?" style="width:100%;height:62px;margin-top:14px;border-radius:10px;padding:10px;font-size:11px;resize:none;background:#fff;color:#000">${esc(txt)}</textarea>
 <label style="display:flex;gap:8px;align-items:center;margin-top:14px;font-size:10px;color:#777;cursor:pointer">${ic('photo',18,'#777',1.4)}${img?'Photo added ✓':'Add photo'}<input id="pf" type="file" accept="image/*,video/*" hidden></label>
 <div style="display:flex;gap:8px;align-items:center;margin-top:16px;font-size:11px">${ic('users',14,'#333',1.5)}Post to:</div>
 ${[['Campus','Visible to all students, faculty, and staff'],['Social','Only visible to students'],['Organization','']].map(r=>`<div data-c="${r[0]}" style="display:flex;gap:12px;align-items:flex-start;margin-top:14px;cursor:pointer"><span class="radio ${cat===r[0]?'on':''}"></span><div><b style="font-size:11px">${r[0]}</b><div style="font-size:7.5px;color:#888">${r[1]}</div>${r[0]==='Organization'?`<select id="os" ${cat==='Organization'?'':'disabled'} style="margin-top:6px;width:168px;height:22px;font-size:8px;border-radius:6px;background:rgba(255,255,255,.7);color:#777;padding:0 6px">${ORGS.map(o=>`<option>${o.short}</option>`).join('')}</select>`:''}</div></div>`).join('')}
 <div style="display:flex;gap:8px;align-items:center;justify-content:space-between;margin-top:20px;font-size:11px"><span style="display:flex;gap:8px;align-items:center">${ic('chat',15,'#333',1.5)}Allows comments</span><button id="tg" class="toggle ${cm?'on':''}"></button></div>
 <button class="btn soft" data-sub style="margin-top:22px;height:34px;font-size:13px">Post</button></div>`);
 const o=$('#ov');o.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);o.querySelectorAll('[data-c]').forEach(e=>e.onclick=()=>{const v=$('#pt').value;cat=e.dataset.c;draw(1);$('#pt').value=v});$('#tg').onclick=()=>{cm=!cm;$('#tg').classList.toggle('on',cm)};
 $('#pf').onchange=e=>{const f=e.target.files[0];if(f){const v=$('#pt').value;img=URL.createObjectURL(f);draw(1);$('#pt').value=v}};
 $("[data-sub]").onclick=()=>{const v=$('#pt').value.trim();if(!v&&!img)return toast('Write something first');const os=$('#os')?$('#os').value:'';const cats={Campus:'campus',Social:'social',Organization:'org'};POSTS.unshift({id:Date.now(),cat:[cats[cat],'mine'],user:ME.name,sub:cat==='Organization'?os:ME.year,t:'now',m:0,av:ME.av,title:v.split('\n')[0],text:v.split('\n').slice(1).join(' ')||'',img,h:180,fit:'cover',up:0,c:0});if(cat!=='Organization')S.feed=cats[cat];closeOv();if(cur().name!=='home'&&cat!=='Organization')reset('home');else render();toast('Posted to '+cat)}};draw()}
function openPostMenu(id,btn){const r=btn.getBoundingClientRect(),pr=phone.getBoundingClientRect(),sc=pr.width/402;const y=(r.bottom-pr.top)/sc,x=Math.min(190,(r.right-pr.left)/sc-200);
 overlay(`<div class="dim" data-close style="background:transparent"></div><div class="pop lg" style="left:${x}px;top:${y}px;width:200px;padding:6px 0;background:rgba(255,255,255,.7)">${[['flag','Report Post','rep'],['hide','Hide Post','hid']].map((m,i)=>`<div data-m="${m[2]}" style="display:flex;gap:14px;align-items:center;padding:12px 18px;font-size:13px;cursor:pointer;${i?'':''}">${ic(m[0],20,'#222',1.5)}${m[1]}</div>`).join('')}</div>`);
 $('[data-close]').onclick=closeOv;$('[data-m=rep]').onclick=()=>{closeOv();toast('Post reported. Thank you!')};$('[data-m=hid]').onclick=()=>{S.hidden.add(id);closeOv();render();toast('Post hidden')}}

/* ---------- global events ---------- */
phone.addEventListener('click',e=>{const t=e.target.closest('[data-go],[data-back],[data-nav],[data-act],[data-eye]');if(!t)return;
 if(t.dataset.back!==undefined)return back();
 if(t.dataset.go){return go(t.dataset.go,t.dataset.p?JSON.parse(t.dataset.p):{})}
 if(t.dataset.nav){const m={home:'home',org:'org',market:'market',msg:'msg',profile:'profile'};return reset(m[t.dataset.nav])}
 if(t.dataset.eye){const i=document.getElementById(t.dataset.eye);i.type=i.type==='password'?'text':'password';return}
 const a=t.dataset.act;
 if(a==='newpost')openNewPost();else if(a==='filter')openFilter();else if(a==='pmenu')openPostMenu(+t.dataset.id,t);
 else if(a==='like'){const id=+t.dataset.id;S.liked.has(id)?S.liked.delete(id):S.liked.add(id);const sc=$('#sc')?$('#sc').scrollTop:0;render();if($('#sc'))$('#sc').scrollTop=sc}
 else if(a==='cmt')toast('Comments coming soon in this prototype');else if(a==='postitem')toast('Post Item form is not part of the design file');
});
phone.addEventListener('input',e=>{if(e.target.id==='q'){S.q=e.target.value;const pos=e.target.selectionStart;if(['home'].includes(cur().name)){const sc=$('#sc');const old=sc.scrollTop;const l=filteredPosts(S.feed);render();const q=$('#q');q.focus();q.setSelectionRange(pos,pos)}}});

/* ---------- boot ---------- */
function fit(){const s=Math.min(1,(innerHeight-16)/874,(innerWidth-16)/402);phone.style.transform=`scale(${s})`}
addEventListener('resize',fit);fit();
const start=new URLSearchParams(location.search).get('s');
if(start&&V[start])reset(start,{});else reset('onb',{i:0});
