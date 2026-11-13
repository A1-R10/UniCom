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
 trash:'<path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0v10m4-10v10m4-10v10"/>',
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
 crown:'<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z"/>'
};
const ic=(n,s=20,c='currentColor',sw=1.7,fill='none')=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" style="flex:none">${P[n]||''}</svg>`;
const homeFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><path d="M12 3.2L2.700 11.500h2.300V20a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-8.500h2.300z"/></svg>`;
const orgFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><circle cx="12" cy="7" r="3.200"/><circle cx="5" cy="10.500" r="2.400"/><circle cx="19" cy="10.500" r="2.400"/><path d="M6 20v-2a6 6 0 0112 0v2zM1 18c0-2 1.500-3.500 3.500-3.800C3.700 15.200 3.200 16.500 3.200 18zM23 18c0-2-1.500-3.500-3.500-3.800.8 1 1.300 2.300 1.300 3.800z"/></svg>`;
const storeFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V5.500A1.500 1.500 0 0110.500 4h3A1.500 1.500 0 0115 5.500V7" fill="none" stroke="#ac2626" stroke-width="1.700"/><path d="M9 12h6M9 15.500h6" stroke="#fff" stroke-width="1.500" stroke-linecap="round"/></svg>`;
const chatFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><path d="M12 3a9 9 0 00-7.700 13.700L3 21l4.500-1.200A9 9 0 1012 3z"/><circle cx="8.500" cy="12" r="1" fill="#fff"/><circle cx="12" cy="12" r="1" fill="#fff"/><circle cx="15.500" cy="12" r="1" fill="#fff"/></svg>`;
const userFill=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="#ac2626"><circle cx="12" cy="8" r="4.500"/><path d="M3.500 21c.5-4.500 3.500-6.500 8.500-6.500s8 2 8.500 6.500z"/></svg>`;
const verified=(s=12)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><path d="M12 1.500l2.500 2 3.200-.3 1 3 2.800 1.700-.8 3.100.8 3.100-2.800 1.700-1 3-3.200-.3-2.500 2-2.500-2-3.200.3-1-3L2.500 14.100l.8-3.100-.8-3.100L5.300 6.200l1-3 3.200.3z" fill="#9d1f1f"/><path d="M8 12.200l3 3 5-5.800" stroke="#fff" stroke-width="2.200" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const statusBar=`<div class="status"><span>9:41</span><svg viewBox="0 0 81 14" width="81" height="14" fill="#fff"><rect x="0" y="9" width="3.500" height="5" rx="1"/><rect x="5.500" y="6.500" width="3.500" height="7.500" rx="1"/><rect x="11" y="3.500" width="3.500" height="10.500" rx="1"/><rect x="16.500" y="0" width="3.500" height="14" rx="1" opacity=".4"/><path d="M33 3.500a11 11 0 0115 0l-1.500 1.600a8.800 8.800 0 00-12 0zM36 7a7 7 0 019 0l-1.500 1.600a4.800 4.800 0 00-6 0zM39.500 10.500a2 2 0 013 0l-1.500 1.800z"/><rect x="55" y="1.500" width="22" height="11" rx="3.500" fill="none" stroke="#fff" stroke-opacity=".5"/><rect x="57" y="3.500" width="18" height="7" rx="2"/><rect x="78" y="5" width="2" height="4" rx="1" opacity=".5"/></svg></div><div class="home-ind"></div>`;
const A=f=>'a/'+f;

/* ---------- data & users ---------- */
const DEFAULT_USERS=[
 {name:'Siegfred Calayag',email:'siegfred.calayag@mseuf.edu.ph',password:'password123',type:'Student',id:'404-02025',dept:'CCMS Department',year:'BSCS 3rd Year',org:'Pet Society',phone:'+63 900 000 0000',bday:'01/01/2004',av:A('profile.jpg')},
 {name:'Maria Santos',email:'maria.santos@mseuf.edu.ph',password:'password123',type:'Student',id:'404-01042',dept:'CCMS Department',year:'BSCS 2nd Year',org:'University Collegiate Student Council',phone:'+63 912 345 6789',bday:'05/14/2004',av:A('user5.jpg')}
];
let USERS=[...DEFAULT_USERS];
let ME={...USERS[0]};

let ORGS=[
 {
  id:'uscs',
  name:'University Collegiate Student Council',
  short:'USCS',
  type:'University',
  logo:A('uscss.jpg'),
  cover:A('uscs.jpg'),
  mem:'1.2k',
  desc:'Representing the voice of the student body and promotes student welfare and participation.',
  about:'The University Collegiate Student Council (UCSC) is the official student governing body of Manuel S. Enverga University Foundation. We represent the voice of the student body, organize events, and work hand in hand with university administration to promote student welfare, leadership, and participation.',
  founded:'1958',
  loc:'MSEUF Main Campus',
  hl:['Student Advocacy','Campus Welfare','Leadership'],
  period:'Sept 1, 2025 - Sept 30, 2025',
  creatorId:'admin_usc',
  creatorName:'University Admin',
  admins:['admin_usc'],
  officers:[
   {name:'Juan Dela Cruz',role:'President',av:A('user2.jpg'),canEdit:true,id:'juan'},
   {name:'Maria Santos',role:'Vice President',av:A('user5.jpg'),canEdit:true,id:'maria'},
   {name:'Kristel Reyes',role:'Secretary',av:A('user4.jpg'),canEdit:false,id:'kristel'},
   {name:'Angela Garcia',role:'Treasurer',av:A('user3.jpg'),canEdit:false,id:'angela'},
   {name:'Carlos Mendoza',role:'Auditor',av:A('profile2.jpg'),canEdit:false,id:'carlos'}
  ],
  reqs:[
   'Be part of the University Collegiate Student Council and attend general assemblies.',
   'Must be a currently enrolled MSEUF student.',
   'Must have a good academic standing (no failing grades).',
   'Willing to participate in the organization\'s activities and responsibilities.'
  ],
  acts:[
   ['UCSC Official','General Assembly for all MSEUF Students','Join us this Friday, September 12, 2025 at the MSEUF Gymnasium. Your presence is highly encouraged.'],
   ['UCSC Events','MSEUF Week 2026: Opening Day','Let\'s kick off MSEUF Week with a bang featuring performances, games and booths.'],
   ['UCSC Official','MSEUF Week 2026: Celebrating...','Be part of the biggest celebration in MSEUF history. Join us for a week of events.'],
   ['UCSC Scholarship','Apply Now: Student Leader Scholarship','Open for all qualified and active student leaders. Deadline: Sept 30, 2025.']
  ]
 },
 {
  id:'pet',
  name:'Pet Society',
  short:'Pet Society',
  type:'University',
  logo:A('petsoc.jpg'),
  cover:A('pet-soc.png'),
  mem:'1.2k',
  desc:'Promoting animal welfare, pet-care drives, and a loving community for pets on campus.',
  about:'Pet Society is a community of animal lovers at MSEUF. We run pet-care drives, vaccination campaigns, rescue support, and adoption events for the campus community.',
  founded:'2023',
  loc:'MSEUF Main Campus',
  hl:['Pet Care','Adoption','Vaccination'],
  period:'Aug 1, 2025 - Aug 30, 2025',
  creatorId:'404-02025',
  creatorName:'Siegfred Calayag',
  admins:['404-02025'],
  officers:[
   {name:'Siegfred Calayag',role:'Founder & President',av:A('profile.jpg'),canEdit:true,id:'404-02025'},
   {name:'Alyssa Santos',role:'Vice President',av:A('user5.jpg'),canEdit:true,id:'alyssa'},
   {name:'Elija Galvan',role:'Secretary',av:A('user2.jpg'),canEdit:false,id:'elija'},
   {name:'Angela Garcia',role:'Treasurer',av:A('user3.jpg'),canEdit:false,id:'angela'},
   {name:'Vince David',role:'P.R.O.',av:A('profile2.jpg'),canEdit:false,id:'vince'}
  ],
  reqs:[
   'Love and care for animals and campus pets.',
   'Currently enrolled MSEUF student.',
   'Willing to participate in feeding and rescue activities.',
   'Attend monthly pet-care orientations.'
  ],
  acts:[
   ['Pet Society','Campus Cat & Dog Vaccination Drive','Free anti-rabies and health checkup this Saturday at the Quadrangle.'],
   ['Pet Society','Adoption Day: Find your study buddy','Meet rescued campus kittens and puppies looking for a warm home.'],
   ['Pet Society','Meow-ntal Health Month Pet Therapy','Come de-stress with friendly pets before midterms week!']
  ]
 },
 {
  id:'mastech',
  name:'MSEUF Association of Multimedia Artists and Technologists',
  short:'Mastech',
  type:'Department',
  dept:'CCMS',
  logo:A('maslogo.jpg'),
  cover:A('mastech.jpg'),
  mem:'1.2k',
  desc:'Bringing together multimedia artists and technologists for innovation and creative design.',
  about:'Mastech brings together multimedia artists and technologists of the College of Computing and Multimedia Studies.',
  founded:'2015',
  loc:'CCMS Building',
  hl:['Multimedia','Workshops','Tech Talks'],
  period:'Sept 1, 2025 - Sept 30, 2025',
  creatorId:'mastech_admin',
  creatorName:'Angelo Sarmiento',
  admins:['mastech_admin'],
  officers:[
   {name:'Angelo Sarmiento',role:'President',av:A('user4.jpg'),canEdit:true,id:'angelo'},
   {name:'Aljin Robis',role:'Vice President',av:A('user3.jpg'),canEdit:true,id:'aljin'},
   {name:'Mark Rivera',role:'Creative Director',av:A('user2.jpg'),canEdit:false,id:'mark'}
  ],
  reqs:[
   'Enrolled CCMS Multimedia or Tech student.',
   'Passionate about design, animation, video editing, or tech.',
   'Submit at least 1 creative portfolio sample or artwork.'
  ],
  acts:[
   ['Mastech Workshop','Introduction to Blender 3D','Learn 3D modeling fundamentals this coming Friday in Mac Lab 2.'],
   ['Mastech Exhibit','Digital Arts Showcase 2026','Featuring works from CCMS artists and animators.']
  ]
 },
 {
  id:'chess',
  name:'Chess Society',
  short:'Chess Society',
  type:'University',
  logo:A('chess.png'),
  cover:A('chess-soc.jpg'),
  mem:'1.2k',
  desc:'Fostering critical thinking, strategy, and camaraderie through competitive and casual chess.',
  about:'The MSEUF Chess Society trains and organizes tournaments for chess enthusiasts across the university.',
  founded:'2010',
  loc:'MSEUF Main Campus',
  hl:['Tournaments','Training','Community'],
  period:'Aug 15, 2025 - Sept 15, 2025',
  creatorId:'carlos_admin',
  creatorName:'Carlos Mendoza',
  admins:['carlos_admin'],
  officers:[
   {name:'Carlos Mendoza',role:'President',av:A('profile2.jpg'),canEdit:true,id:'carlos'},
   {name:'David Santos',role:'Team Captain',av:A('user2.jpg'),canEdit:true,id:'david'}
  ],
  reqs:[
   'Open to all MSEUF students with a passion for chess.',
   'Must attend weekend training matches.',
   'Willing to represent MSEUF in inter-school tournaments.'
  ],
  acts:[
   ['Chess Soc','Annual MSEUF Rapid Chess Tournament','Open to all colleges! Cash prizes and medals for top 3 winners.'],
   ['Chess Soc','Grandmaster Strategy Masterclass','Analyzing legendary Queen\'s Gambit and Sicilian defense games.']
  ]
 },
 {
  id:'comsoc',
  name:'Communication Society',
  short:'Communication Society',
  type:'Department',
  dept:'CCMS',
  logo:A('com-logo.jpg'),
  cover:A('com-soc.png'),
  mem:'1.2k',
  desc:'The home for student broadcasters, journalists, and media innovators at MSEUF.',
  about:'MSEUF Communication Society (MCS) is the organization for communication and media students.',
  founded:'2012',
  loc:'CCMS Building',
  hl:['Broadcast','Campus Mic','Media'],
  period:'Sept 1, 2025 - Sept 30, 2025',
  creatorId:'com_admin',
  creatorName:'Kristel Reyes',
  admins:['com_admin'],
  officers:[
   {name:'Kristel Reyes',role:'President',av:A('user4.jpg'),canEdit:true,id:'kristel'},
   {name:'Isabella Torres',role:'Station Manager',av:A('user5.jpg'),canEdit:true,id:'isabella'}
  ],
  reqs:[
   'Enrolled in BA Communication or related CCMS program.',
   'Interested in broadcasting, hosting, news writing, or radio.'
  ],
  acts:[
   ['ComSoc On-Air','Campus Radio Live Broadcast','Tune in every Wednesday at 4 PM for university news and student music.']
  ]
 },
 {
  id:'hms',
  name:'Hospitality Management Society',
  short:'Hospitality Management Society',
  type:'Department',
  dept:'CHTM',
  logo:A('hospi-soc.jpg'),
  cover:A('sus.jpg'),
  mem:'1.2k',
  desc:'Serving students of hospitality and tourism with world-class events and industry skills.',
  about:'The Hospitality Management Society serves students of the College of International Hospitality and Tourism Management.',
  founded:'2009',
  loc:'CHTM Building',
  hl:['Hospitality','Culinary','Events'],
  period:'Sept 1, 2025 - Sept 30, 2025',
  creatorId:'hms_admin',
  creatorName:'Chef Marco',
  admins:['hms_admin'],
  officers:[
   {name:'Maria Santos',role:'President',av:A('user5.jpg'),canEdit:true,id:'maria'},
   {name:'Angela Garcia',role:'Culinary Head',av:A('user3.jpg'),canEdit:true,id:'angela'}
  ],
  reqs:[
   'Enrolled CHTM student in good standing.',
   'Complies with food safety and kitchen uniform standards.'
  ],
  acts:[
   ['HMS Culinary','Annual Flambé & Cocktail Competition','Witness our top hospitality students demonstrate flair bartending and table service!']
  ]
 },
];

function isOrgAdmin(o){
 if(!o)return false;
 return o.creatorId===ME.id||(o.admins&&o.admins.includes(ME.id))||o.creatorName===ME.name;
}
function isOrgOfficer(o){
 if(!o)return false;
 if(isOrgAdmin(o))return true;
 const off=(o.officers||[]).find(x=>x.id===ME.id||x.name.toLowerCase()===ME.name.toLowerCase());
 return !!(off&&off.canEdit);
}
function isAnyOfficer(o){
 if(!o)return false;
 if(isOrgAdmin(o))return true;
 return (o.officers||[]).some(x=>x.id===ME.id||x.name.toLowerCase()===ME.name.toLowerCase());
}

let POSTS=[
 {id:1,cat:['trending'],user:'Angelo Sarmiento',sub:'BSCS 2nd Year',t:'2h',m:120,av:A('user4.jpg'),title:'Open for Commissions! ✏️🥰',text:'Feel free to message me for portrait or digital artwork orders!',img:A('commision.png'),h:183,fit:'contain',bg:'#d9d9d9',up:240,c:12,comments:[{user:'Elija Galvan',av:A('user2.jpg'),t:'1h',text:'How much for colored portrait?'}]},
 {id:2,cat:['trending','org'],user:'USC_Official',v:1,orgId:'uscs',sub:'UCSC Organization',t:'5h',m:300,av:A('uscss.jpg'),title:'World Mental Health Month.',text:'we encourage all college students to wear <i>blue shirts every Wednesday of October</i>',up:240,c:12,comments:[{user:'Siegfred Calayag',av:A('profile.jpg'),t:'3h',text:'Noted on this! Let’s support mental health month.'}]},
 {id:3,cat:['trending'],user:'University_Admin',v:1,sub:'BSCS 2nd Year',t:'2h',m:120,av:A('uscss.jpg'),title:'14-Day Intensive Training',img:A('euflight.jpg'),h:183,fit:'contain',bg:'#f5f5f5',up:240,c:12,comments:[]},
 {id:4,cat:['campus'],user:'University_Admin',v:1,sub:'Administration',t:'2h',m:120,av:A('uscss.jpg'),title:'Class suspension September 18, 2026',text:'Due to weather conditions, classes in all levels are suspended.',img:A('sus.jpg'),h:210,fit:'contain',bg:'#fff',up:240,c:12,comments:[{user:'Vince David',av:A('profile2.jpg'),t:'1h',text:'Ingat po ang lahat!'}]},
 {id:5,cat:['campus'],user:'University_Admin',v:1,sub:'Administration',t:'2h',m:120,av:A('uscss.jpg'),title:'Enrollment for 2nd Semester is now open',text:'Please check the official enrollment schedules and requirements on the student portal',up:240,c:12,comments:[]},
 {id:6,cat:['campus'],user:'USC_Official',v:1,orgId:'uscs',sub:'UCSC Organization',t:'5h',m:300,av:A('uscss.jpg'),title:'World Mental Health Month.',text:'we encourage all college students to wear <i>blue shirts every Wednesday of October</i>',img:A('mentalhealthoct.jpg'),h:300,fit:'cover',up:240,c:12,comments:[]},
 {id:7,cat:['social'],user:'Aljin Robis',sub:'BSCS 2nd Year',t:'2h',m:120,av:A('user3.jpg'),title:'Paheram calcu',text:'sino may calcu na pwedeng pahiram?',up:240,c:12,comments:[{user:'Mark Rivera',av:A('user2.jpg'),t:'30m',text:'Meron ako bro, daan ka sa CCMS'}]},
 {id:8,cat:['social'],user:'Elija Galvan',sub:'BSCS 3rd Year',t:'3h',m:180,av:A('user2.jpg'),title:'Baka po may nakakita sainyo ng ID ko?',text:'CCMS ID lace po',up:240,c:12,comments:[]},
 {id:9,cat:['social'],user:'Vince David',sub:'BSCS 2nd Year',t:'2h',m:120,av:A('profile2.jpg'),title:'Looking for this kind of book!',text:'Bka po meron kayong kakilala nag bebenta or nag papaheram ng gantong book. Thank you po!',img:A('macapagal-experimental-psychology.jpg'),h:207,fit:'contain',bg:'#fff',up:240,c:12,comments:[]},
 {id:10,cat:['org','campus'],user:'Pet Society',v:1,orgId:'pet',sub:'University Organization',t:'2h',m:120,av:A('petsoc.jpg'),title:"It's Meow-ntal Health Month!",text:'Pet therapy and adoption drive this week at the main quadrangle!',img:A('mentalpet.jpg'),h:195,fit:'cover',up:240,c:12,comments:[]},
 {id:11,cat:['org'],user:'USC_Official',v:1,orgId:'uscs',sub:'UCSC Organization',t:'2h',m:125,av:A('uscss.jpg'),title:'Mental Health Month',img:A('mentalhealthoct.jpg'),h:240,fit:'cover',up:240,c:12,comments:[]},
 {id:12,cat:['mine','social'],user:'Siegfred Calayag',userId:'404-02025',sub:'CCMS · BSCS 3rd Year',t:'1d',m:1440,av:A('profile.jpg'),title:'Join the Pet Society to take care our pets in university',img:A('pet-doc.jpg'),h:180,fit:'cover',up:98,c:12,comments:[{user:'Alyssa Santos',av:A('user5.jpg'),t:'5h',text:'Count me in! Where can I submit requirements?'}]},
];

const HAPPEN=[['Announcement','Class Suspension\non Oct 15','University Admin',A('clsssus.jpg')],['Event','Intramurals 2026\nOpening Day','USC Events',A('lenovo.jpg')],['Announcement','10% OFF on\nall items','University Admin',A('com-org.jpg')],['Announcement','Admissions now\nopen','University Admin',A('admin-open.jpg')],['Event','Teacher\'s Day\n2026','University Admin',A('teachers-day.jpg')]];

const NOTIFS=[
 ['Announcement','megaphone','University Announcement','Class suspension on Sep 18','8m','linear-gradient(90deg,#ffe3ee,#f6dfe9)',{type:'post',id:4}],
 ['Organization','org','Organization Update','Pet Society posted a new announcement','30m','linear-gradient(90deg,#f7e0e7,#f4d6dd)',{type:'post',id:10}],
 ['Social','swap','Reaction','Someone reacted to your post','1h','linear-gradient(90deg,#fbe9c9,#f4dccf)',{type:'post',id:12}],
 ['Social','chat','New Message','You have 3 new messages','1h','linear-gradient(90deg,#d9e6ea,#cdd9df)',{type:'convo',id:'vince'}]
];

const CONVOS=[
 {id:'vince',name:'Vince David',av:A('profile2.jpg'),last:"Got it! Thanks for the reminder.",time:'9:24 AM',badge:2,msgs:[['l','Are you coming to the event tomorrow?','9:23 AM'],['r',"Yes! I'll be there. What time are you going?",'9:24 AM'],['l','Around 5. See you there!','9:23 AM'],['r','Alright see you!','9:24 AM'],['n','1 new message'],['l',"Also, don't forget to bring your ID. They'll check it at the entrance.",'9:23 AM'],['r','Got it! Thanks for the reminder.','9:24 AM']]},
 {id:'bscs',name:'BSCS 3rd Year',group:1,av:'',last:'Marife: May quiz daw bukas sa OS...',time:'8:47 AM',badge:9,msgs:[['l','May quiz daw bukas sa OS...','8:47 AM']]},
 {id:'alyssa',name:'Alyssa Santos',av:A('user5.jpg'),last:'Thank you 😊',time:'Yesterday',msgs:[['r','Here are the notes','Yesterday'],['l','Thank you 😊','Yesterday']]},
 {id:'mark',name:'Mark Rivera',av:A('user2.jpg'),last:'Pwede bukas? Need lang...',time:'Mon',msgs:[['l','Pwede bukas? Need lang po for exam','Mon']]},
];

let MK=[
 {id:'calc',name:'Scientific Calculator',p:650,d:'Slightly used, graduating na hindi ko na gagamitin',img:A('calcu.jpg'),st:'For Sale',ago:'5 days ago',cond:'Slightly used',cat:'Electronics',seller:'Mark Rivera'},
 {id:'tee',name:'Second hand T-shirt',p:250,d:'Isang beses ko lang siya nasuot, sobrang laki sakin',img:A('tshirt.jpg'),st:'For Sale',ago:'1 week ago',cond:'Used once',cat:'Clothing',seller:'Angelo Sarmiento'},
 {id:'cookies',name:'Different Flavor Cookies',p:50,d:'Bili na kayo fresh bake cookies with different flavors. CBA building',img:A('cookies.jpg'),st:'For Sale',ago:'30 mins ago',cond:'Freshly baked',cat:'Foods',seller:'Maria Santos'},
 {id:'gram',name:'Graham Balls',p:5,d:'Get some beef graham balls ₱5 only! Message me for more info.',img:A('gramballs.jpg'),st:'Sold Out',ago:'4 hrs ago',cond:'Freshly made',cat:'Foods',sold:1,seller:'Elija Galvan'},
 {id:'cam',name:'Photographer/Videographer',p:0,d:'Available for events, grad shoots and org coverage',img:A('camera.jpg'),st:'Service',ago:'2 days ago',cond:'Available',cat:'Services',seller:'Vince David'},
 {id:'draw',name:'Portrait commissions',p:300,d:'Pencil portraits, open for commissions',img:A('commision.png'),st:'Service',ago:'3 days ago',cond:'Made to order',cat:'Art & Craft',seller:'Angelo Sarmiento'},
 {id:'boq',name:'Pink fuzzy wire bouquet',p:150,d:'Handmade fuzzy wire bouquet, perfect gift',img:A('boq.jpg'),st:'For Sale',ago:'1 day ago',cond:'Brand new',cat:'Art & Craft',seller:'Alyssa Santos'},
 {id:'attire',name:'Formal attire for rent (Men)',p:200,d:'Maroon formal suit for rent, good for events',img:A('attire.jpg'),st:'For Rent',ago:'6 days ago',cond:'Good',cat:'Rentals',seller:'Mark Rivera'},
 {id:'mouse',name:'2nd Hand Logitech MX mouse',p:900,d:'Works perfectly, with box',img:A('mouse.jpg'),st:'For Sale',ago:'1 week ago',cond:'Good',cat:'Electronics',seller:'Vince David'},
];

const S={
 stack:[],
 feed:'trending',
 orgFilter:'All',
 listFilter:'All',
 notifFilter:'All',
 filt:{sort:'Latest',range:'All'},
 orgFilt:{type:'All',dept:'All',sort:'Default'},
 marketFilt:{price:'All',status:'All',sort:'Latest'},
 marketCat:'All',
 hidden:new Set(),
 liked:new Set(),
 disliked:new Set(),
 joined:new Set(),
 q:'',
 signup:{type:'Student'},
 pendingUser:null,
 convoMsgs:{}
};

const $=s=>document.querySelector(s);
const phone=$('#phone');
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

/* ---------- router ---------- */
function go(name,p={},replace){if(replace)S.stack.pop();S.stack.push({name,p});render()}
function back(){if(S.stack.length>1){S.stack.pop();render()}}
function reset(name,p={}){S.stack=[{name,p}];render()}
function cur(){return S.stack[S.stack.length-1]||{name:'onb',p:{}}}
function render(){const {name,p}=cur();phone.innerHTML=(V[name]?V[name](p):'')+'<div id="ov"></div>';(B[name]||(()=>{}))(p);window.scrollTo(0,0)}
function toast(t){const e=document.createElement('div');e.className='toast';e.textContent=t;phone.appendChild(e);setTimeout(()=>e.remove(),1800)}
const bgLayer=(login)=>`<img class="bg" src="${A('background.png')}"><div class="bgov ${login?'login':''}"></div>`;

/* ---------- shared components ---------- */
function navbar(on){const it=[['home','Home',homeFill,'home'],['org','Organization',orgFill,'org'],['market','Marketplace',storeFill,'store'],['msg','Message',chatFill,'chat'],['profile','Profile',userFill,'user']];
 return `<div class="navshade"></div><div class="nav glass">${it.map(([k,l,f,i])=>`<button data-nav="${k}" class="${on===k?'on':''}">${on===k?f(22):ic(i,22,'#fff',1.6)}<span>${l}</span></button>`).join('')}</div>`}
function topbar(extra=''){return `<div class="top"><img class="avatar36" src="${ME.av}" data-nav="profile" style="cursor:pointer" title="Go to Profile"><div class="search glass">${ic('search',18,'#fff',1.6)}<input id="q" placeholder="Search people, group..." value="${esc(S.q)}"></div><button class="circ glass" style="left:296px" data-act="create-menu" title="Create">${ic('plus',20,'#fff',1.5)}</button><button class="circ glass" style="left:341px" data-go="notif" title="Notifications">${ic('bell',20,'#fff',1.5)}</button>${extra}</div>`}

function getOrgForPost(p){
 if(p.orgId)return ORGS.find(o=>o.id===p.orgId);
 return ORGS.find(o=>o.short.toLowerCase()===p.user.toLowerCase()||o.name.toLowerCase()===p.user.toLowerCase()||(p.sub&&p.sub.toLowerCase().includes(o.short.toLowerCase())));
}

/* ownership: a post/listing belongs to its author, not to whoever is logged in */
const isMyPost=p=>!!p&&((!!p.userId&&p.userId===ME.id)||p.user===ME.name);
const isMyListing=m=>!!m&&(!!m.mine||m.seller===ME.name||(!!m.sellerId&&m.sellerId===ME.id));

/* upvote / downvote (with its own count) / comment footer */
function voteBar(p){
 const lk=S.liked.has(p.id);
 const dk=S.disliked.has(p.id);
 const up=(p.up||0)+(lk?1:0);
 const down=(p.down||0)+(dk?1:0);
 const commCount=p.comments?p.comments.length:(p.c||0);
 return `<button class="${lk?'on':''}" data-act="like" data-id="${p.id}" title="Upvote" style="display:flex;gap:7px;align-items:center">
    ${ic('up',13,lk?'#ac2626':'currentColor',0,lk?'#ac2626':'currentColor')}
    <span style="color:${lk?'#ac2626':''}">${up}</span>
  </button>
  <button class="${dk?'on':''}" data-act="dislike" data-id="${p.id}" title="Downvote" style="margin-left:-12px;display:flex;gap:7px;align-items:center;cursor:pointer">
    <span style="display:inline-flex;transform:scaleY(-1)">${ic('up',13,dk?'#ac2626':'#a3a1a1',0,dk?'#ac2626':'#a3a1a1')}</span>
    <span style="color:${dk?'#ac2626':''}">${down}</span>
  </button>
  <button data-act="cmt" data-id="${p.id}" style="margin-left:24px;cursor:pointer" title="Comments">
    ${ic('cmt',13,'#a3a1a1',0,'#a3a1a1')}
    <span>${commCount}</span>
  </button>`;
}

function postCard(p,{menu=true}={}){
 const orgMatch=getOrgForPost(p);
 const orgAttr=orgMatch?`data-act="go-org" data-oid="${orgMatch.id}" style="cursor:pointer"`:'';
 return `<div class="card post" data-pid="${p.id}" id="post-${p.id}">
  <div class="hd">
    <img src="${p.av||A('uscss.jpg')}" ${orgAttr}>
    <div ${orgAttr}>
      <div class="nm">${esc(p.user)}${p.v?verified(11):''}<i></i><s>${esc(p.t)}</s></div>
      <div class="sub">${esc(p.sub)}</div>
    </div>
    ${menu?`<button class="dots" data-act="pmenu" data-id="${p.id}" style="color:#777;cursor:pointer">${ic('dots',20)}</button>`:''}
  </div>
  <h4>${esc(p.title)}</h4>
  ${p.text?`<p class="tx">${p.text}</p>`:''}
  ${p.img?`<img class="im" src="${p.img}" data-act="view-img" data-img="${p.img}" data-caption="${esc(p.title)}" style="height:${p.h||190}px;object-fit:${p.fit||'cover'};background:${p.bg||'transparent'};cursor:pointer" title="Click to view full photo">`:''}
  <div class="line" style="${p.img?'display:none':''}"></div>
  <div class="ft">${voteBar(p)}</div>
 </div>`;
}

/* ---------- views ---------- */
const V={};const B={};
const ob=[['onboarding-logo.png','','Welcome to your University App\nConnect. Share. Discover.\nAll in one place.'],['onboarding-connect.png','Connect','Join organizations, find study groups, ask questions, and connect with fellow students and staff.'],['onboarding-share.png','Share','Share announcements, ideas, questions, experiences, and helpful information with fellow students and staff.'],['onboarding-discover.png','Discover','Stay updated with university news, events, and announcements that matter to you.']];
V.onb=({i=0}={})=>{const [img,h,t]=ob[i];return `<div class="screen">${bgLayer()}${statusBar}
 ${i===0?`<img src="${A(img)}" style="position:absolute;left:41px;top:208px;width:320px;height:320px;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.35))"><div style="position:absolute;left:0;right:0;top:518px;text-align:center;font-size:11px;font-weight:600;color:#fff;line-height:1.3;white-space:pre-line">${t}</div>
 <button class="btn lg" data-act="next" style="position:absolute;left:23px;top:752px;width:356px;height:40px;font-size:13px;box-shadow:none;background:rgba(172,38,38,.92)">Get Started</button>
 <div style="position:absolute;left:0;right:0;top:812px;display:flex;gap:6px;justify-content:center">${[0,1,2,3].map(k=>`<i style="width:7px;height:7px;border-radius:50%;background:${k===0?'#ff5959':'rgba(255,255,255,.5)'}"></i>`).join('')}</div>`
 :`<div style="position:absolute;left:0;right:0;top:128px;text-align:center;font-size:35px;font-weight:700;text-shadow:0 2px 8px rgba(0,0,0,.3)">${h}</div><div style="position:absolute;left:50px;right:50px;top:182px;text-align:center;font-size:11px;color:rgba(255,255,255,.7);line-height:1.35">${t}</div>
 <img src="${A(img)}" style="position:absolute;left:41px;top:235px;width:320px;height:320px;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.35))">
 <button class="glass" data-act="prev" style="position:absolute;left:19px;top:774px;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.25)">${ic('back',22,'#fff',1.8)}</button>
 <div style="position:absolute;left:0;right:0;top:790px;display:flex;gap:6px;justify-content:center">${[1,2,3].map(k=>`<i style="width:7px;height:7px;border-radius:50%;background:${k===i?'#ff5959':'rgba(255,255,255,.55)'}"></i>`).join('')}</div>
 <button data-act="next" style="position:absolute;left:339px;top:774px;width:44px;height:44px;border-radius:50%;background:#e8222a;display:grid;place-items:center;box-shadow:0 4px 10px rgba(0,0,0,.35)">${ic('chev',20,'#fff',2.2).replace('M9 5l7 7-7 7','M5 12h14M13 6l6 6-6 6')}</button>`}</div>`};
B.onb=({i=0})=>{phone.querySelectorAll('[data-act=next]').forEach(b=>b.onclick=()=>i<3?go('onb',{i:i+1},true):reset('login'));phone.querySelectorAll('[data-act=prev]').forEach(b=>b.onclick=()=>go('onb',{i:i-1},true))};

const pw=(ph,id)=>`<div class="field"><span style="display:grid">${ic('lock',20,'#a3a1a1',1.4)}</span><input id="${id}" type="password" placeholder="${ph}"><button data-eye="${id}" style="display:grid;cursor:pointer">${ic('eyeoff',20,'#a3a1a1',1.4)}</button></div>`;
V.login=()=>`<div class="screen">${bgLayer(1)}
 <div style="position:absolute;left:27px;top:100px;line-height:1.05"><div style="font-size:51px;font-weight:700">Welcome</div><div style="display:flex;align-items:center;gap:11px"><span style="font-size:34px">to</span><span style="font-size:51px;font-weight:800;background:linear-gradient(90deg,#fd5050,#ca2e2e 42%,#bb2a2a 64%,#ac2626);-webkit-background-clip:text;color:transparent">UNICOM!</span></div></div>
 <div style="position:absolute;left:33px;top:225px;width:319px;font-size:14.5px;font-weight:500;color:rgba(255,255,255,.56)">Login to continue to your University Community.</div>
 <div class="sheetcard" style="top:287px;height:614px;left:-2px;width:406px"></div>
 <div style="position:absolute;left:37px;top:325px;font-size:36px;font-weight:600">Login</div><div style="position:absolute;left:37px;top:373px;font-size:13px;font-weight:500;color:rgba(255,255,255,.56)">Enter your credentials to enter your account.</div>
 <div style="position:absolute;left:36px;right:36px;top:443px;display:flex;flex-direction:column;gap:19px">
 <div class="field"><span style="display:grid">${ic('mail',22,'#a3a1a1',1.4)}</span><input id="em" type="email" placeholder="Enter your email..." value="${esc(ME.email)}"></div>${pw('Enter your password...','pw')}</div>
 <div style="position:absolute;right:36px;top:565px;font-size:12px;font-weight:500;color:#712222;cursor:pointer" data-act="forgot">Forget password?</div>
 <button class="btn" data-act="login" style="position:absolute;left:36px;right:30px;top:597px;width:auto">Login</button>
 <div style="position:absolute;left:0;right:0;top:732px;text-align:center;font-size:16px;font-weight:500;color:rgba(255,255,255,.87)">Don’t have an account yet? <a data-go="signup" style="color:#ac2626;text-decoration:underline;cursor:pointer;margin-left:2px">Sign in</a></div>${statusBar}</div>`;
B.login=()=>{
 $('[data-act=login]').onclick=()=>{
  const em=$('#em').value.trim();
  const pass=$('#pw').value;
  if(!em)return toast('Please enter your email');
  let u=USERS.find(x=>x.email.toLowerCase()===em.toLowerCase());
  if(u){
   if(pass&&u.password&&u.password!==pass){
    return toast('Incorrect password');
   }
   ME={...u};
  }else{
   const namePart=em.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
   u={name:namePart||'Student User',email:em,password:pass||'password123',type:'Student',id:'404-'+Math.floor(10000+Math.random()*90000),dept:'CCMS Department',year:'BSCS 2nd Year',org:'Pet Society',phone:'',bday:'',av:A('user2.jpg')};
   USERS.push(u);
   ME={...u};
  }
  toast(`Logged in as ${ME.name}`);
  go('skeleton',{},true);
 };
 $('[data-act=forgot]').onclick=()=>toast('Password reset link sent to your email');
};

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
 <div class="field" style="height:38px"><span>${ic('id',17,'#a3a1a1',1.4)}</span><input id="sn" placeholder="${st?'Enter your student number...':'Enter your employee number...'}"></div>
 ${pw2('Enter your password...','p1')}${pw2('Re-enter your password...','p2')}</div>
 <label style="position:absolute;left:26px;top:630px;display:flex;gap:8px;align-items:center;font-size:9px;color:#fff;cursor:pointer"><span id="agree" style="width:14px;height:14px;border-radius:3px;background:#e23d3d;display:grid;place-items:center">${ic('check',11,'#fff',3)}</span>I agree to the <b style="color:#ff6a6a;font-weight:500">Terms of Services</b> and <b style="color:#ff6a6a;font-weight:500">Privacy Policy</b></label>
 <button class="btn" data-act="next" style="position:absolute;left:26px;right:26px;top:658px;width:auto;font-size:13px">NEXT</button>
 <div style="position:absolute;left:0;right:0;top:716px;text-align:center;font-size:10px">Already have an account? <a data-back style="color:#ff6a6a;text-decoration:underline;cursor:pointer">Login</a></div></div>`};
const tp=on=>`flex:1;height:38px;border-radius:8px;background:${on?'#ffd9d9':'#fff'};border:${on?'1.5px solid #c42b2b':'1px solid #ddd'};color:${on?'#a31f1f':'#555'};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;font-size:9px;font-weight:600`;
const pw2=(ph,id)=>`<div class="field" style="height:38px"><span>${ic('lock',17,'#a3a1a1',1.4)}</span><input id="${id}" type="password" placeholder="${ph}"><button data-eye="${id}" style="display:grid;cursor:pointer">${ic('eyeoff',17,'#a3a1a1',1.4)}</button></div>`;
B.signup=()=>{phone.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{S.signup.type=b.dataset.type;render()});
 let ag=true;$('#agree').onclick=e=>{ag=!ag;e.currentTarget.style.background=ag?'#e23d3d':'rgba(255,255,255,.5)';e.currentTarget.innerHTML=ag?ic('check',11,'#fff',3):''};
 $('[data-act=next]').onclick=()=>{
  if(!ag)return toast('Please agree to the Terms and Privacy Policy');
  const fn=$('#fn').value.trim();
  const se=$('#se').value.trim();
  const sn=$('#sn').value.trim();
  const p1=$('#p1').value;
  const p2=$('#p2').value;
  if(!fn)return toast('Please enter your full name');
  if(!se)return toast('Please enter your school email');
  if(!sn)return toast(S.signup.type==='Student'?'Please enter your student number':'Please enter your employee number');
  if(!p1)return toast('Please enter a password');
  if(p1!==p2)return toast('Passwords do not match');
  S.pendingUser={
   name:fn,
   email:se,
   id:sn,
   type:S.signup.type,
   dept:'',
   year:'',
   org:'',
   phone:'',
   bday:'',
   av:A('user3.jpg'),
   password:p1
  };
  go('verify');
 }};

V.verify=()=>`<div class="screen">${bgLayer()}${statusBar}
 <button class="back glass" data-back style="border-radius:50%;width:32px;height:32px;left:30px;top:72px">${ic('back',18,'#fff')}</button>
 <div style="position:absolute;left:0;right:0;top:80px;text-align:center"><div style="font-size:22px;font-weight:700">Verify Account</div><div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:4px;line-height:1.3">Join the University Community<br>and stay connected.</div></div>
 <div class="steps"><div class="stp done"><b>${ic('check',16,'#fff',3)}</b>Account</div><div class="dash"></div><div class="stp on"><b>2</b>Verify</div><div class="dash"></div><div class="stp"><b>3</b>Complete</div></div>
 <div class="sheetcard" style="top:292px;height:600px;border-top-left-radius:30px;border-top-right-radius:30px;background:rgba(40,20,20,.2)"></div>
 <img src="${A('email.png')}" style="position:absolute;left:121px;top:308px;width:160px;height:160px;object-fit:contain">
 <div style="position:absolute;left:0;right:0;top:462px;text-align:center;font-size:20px;font-weight:600">Verify your Email</div>
 <div style="position:absolute;left:40px;right:40px;top:492px;text-align:center;font-size:9px;color:rgba(255,255,255,.7);line-height:1.35">Please check your Outlook, we sent a 6-digit verification code to your university email.</div>
 <div class="otp" style="position:absolute;left:0;right:0;top:524px">${[0,1,2,3,4,5].map(i=>`<input maxlength="1" inputmode="numeric" data-i="${i}">`).join('')}</div>
 <div style="position:absolute;right:46px;top:574px;font-size:9px;color:#ff6a6a;text-decoration:underline;cursor:pointer" data-act="resend">Resend Code</div>
 <button class="btn" data-act="next" style="position:absolute;left:26px;right:26px;top:598px;width:auto;font-size:13px">Verify Email</button>
 <div style="position:absolute;left:0;right:0;top:703px;text-align:center;font-size:10px">Having a problem? <a style="color:#ff6a6a;text-decoration:underline">Contact Support</a></div></div>`;
B.verify=()=>{const ins=[...phone.querySelectorAll('.otp input')];ins[0].focus();ins.forEach((el,i)=>{el.oninput=()=>{el.value=el.value.replace(/\D/g,'');if(el.value&&ins[i+1])ins[i+1].focus()};el.onkeydown=e=>{if(e.key==='Backspace'&&!el.value&&ins[i-1])ins[i-1].focus()}});
 $('[data-act=resend]').onclick=()=>toast('A new code was sent');
 $('[data-act=next]').onclick=()=>{
  if(S.pendingUser){
   USERS.push(S.pendingUser);
   ME={...S.pendingUser};
  }
  go('success');
 }};

V.success=()=>`<div class="screen">${bgLayer()}${statusBar}
 <div style="position:absolute;left:0;right:0;top:80px;text-align:center"><div style="font-size:22px;font-weight:700">Verification Successful</div></div>
 <div class="steps"><div class="stp done"><b>${ic('check',16,'#fff',3)}</b>Account</div><div class="dash"></div><div class="stp done"><b>${ic('check',16,'#fff',3)}</b>Verify</div><div class="dash"></div><div class="stp on"><b>3</b>Complete</div></div>
 <div class="sheetcard" style="top:292px;height:600px;border-top-left-radius:30px;border-top-right-radius:30px;background:rgba(40,20,20,.2)"></div>
 <img src="${A('verify.png')}" style="position:absolute;left:111px;top:318px;width:180px;height:180px;object-fit:contain;animation:pop .6s cubic-bezier(.2,1.4,.4,1)">
 <div style="position:absolute;left:0;right:0;top:514px;text-align:center;font-size:25px;font-weight:700">Account Created!</div>
 <div style="position:absolute;left:60px;right:60px;top:552px;text-align:center;font-size:11px;color:rgba(255,255,255,.75);line-height:1.35">Welcome ${esc(ME.name)} to University App.<br>Let's build connections and create opportunities together.</div>
 <button class="btn" data-act="setup-profile" style="position:absolute;left:30px;right:30px;top:608px;width:auto;height:42px;font-size:13px">${ic('pen',14,'#fff',1.6)}&nbsp; Edit Personal Details & ID</button>
 <div style="position:absolute;left:0;right:0;top:664px;text-align:center;font-size:10px"><a data-act="skip-home" style="color:rgba(255,255,255,.8);text-decoration:underline;cursor:pointer">Skip to Feed</a></div>
 <div class="confetti" id="cf"></div><style>@keyframes pop{from{transform:scale(.2);opacity:0}to{transform:scale(1);opacity:1}}</style></div>`;
B.success=()=>{const c=$('#cf'),col=['#ff6fa8','#a7e66b','#6bb5ff','#ffd24a','#b07bff','#ff8a4d'];for(let i=0;i<46;i++){const e=document.createElement('i');e.style.left=Math.random()*100+'%';e.style.background=col[i%6];e.style.setProperty('--dx',(Math.random()*120-60)+'px');e.style.setProperty('--rx',(360+Math.random()*720)+'deg');e.style.setProperty('--ry',(360+Math.random()*720)+'deg');e.style.setProperty('--rz',(Math.random()*720)+'deg');e.style.animationDuration=(2.2+Math.random()*2)+'s';e.style.animationDelay=(Math.random()*.9)+'s';e.style.width=(8+Math.random()*8)+'px';e.style.height=(14+Math.random()*12)+'px';c.appendChild(e)}
 const setupBtn=$('[data-act=setup-profile]');if(setupBtn)setupBtn.onclick=()=>go('edit');
 const skipBtn=$('[data-act=skip-home]');if(skipBtn)skipBtn.onclick=()=>go('skeleton',{},true);
 setTimeout(()=>{if(cur().name==='success')go('skeleton',{},true)},4500)};

V.skeleton=()=>`<div class="screen">${bgLayer()}${statusBar}
 <div class="sk" style="position:absolute;left:19px;top:71px;width:36px;height:36px;border-radius:50%"></div><div class="sk" style="position:absolute;left:66px;top:71px;width:222px;height:36px;border-radius:22px"></div><div class="sk" style="position:absolute;left:296px;top:71px;width:36px;height:36px;border-radius:50%"></div><div class="sk" style="position:absolute;left:341px;top:71px;width:36px;height:36px;border-radius:50%"></div>
 <div class="sk" style="position:absolute;left:22px;top:140px;width:104px;height:26px;border-radius:13px"></div><div class="sk" style="position:absolute;left:134px;top:144px;width:79px;height:18px"></div><div class="sk" style="position:absolute;left:236px;top:144px;width:79px;height:18px"></div>
 <div class="sk" style="position:absolute;left:16px;top:186px;width:370px;height:196px"></div>
 <div class="sk" style="position:absolute;left:16px;top:392px;width:370px;height:280px"></div><div class="sk" style="position:absolute;left:16px;top:682px;width:370px;height:140px"></div>
 <div class="sk" style="position:absolute;left:13px;top:772px;width:377px;height:60px;border-radius:50px"></div></div>`;
B.skeleton=()=>setTimeout(()=>{if(cur().name==='skeleton')reset('home')},2000);

function filteredPosts(cat){
 let l=POSTS.filter(p=>p.cat.includes(cat)&&!S.hidden.has(p.id));
 if(S.q)l=l.filter(p=>(p.title+' '+(p.text||'')+' '+p.user+' '+(p.sub||'')).toLowerCase().includes(S.q.toLowerCase()));
 const r=S.filt.range,lim={Today:1440,'This week':10080,'This month':43200}[r];if(lim)l=l.filter(p=>p.m<=lim);
 if(S.filt.sort==='Latest')l=[...l].sort((a,b)=>a.m-b.m);
 if(S.filt.sort==='Most like')l=[...l].sort((a,b)=>b.up-a.up);
 if(S.filt.sort==='Most comment')l=[...l].sort((a,b)=>(b.c||(b.comments?b.comments.length:0))-(a.c||(a.comments?a.comments.length:0)));
 return l;
}

V.home=()=>{
 const f=S.feed;
 const pills=[['trending','Trending','fire',-3],['campus','Campus','loc',104],['social','Social','user',208]];
 const list=filteredPosts(f);
 return `<div class="screen">${bgLayer()}${statusBar}
 <div class="scroll" id="sc" style="top:178px;bottom:0;padding:8px 0 130px">
  <div id="home-happen">${f==='trending'?`<div class="card happen"><div class="t">${ic('trend',16,'#681d2a',2)}<span>Happening Now</span></div><div class="hs" id="hs" style="margin-top:14px;padding:0 0 0 16px;scroll-padding-left:16px">${HAPPEN.map(h=>`<div class="hc"><img src="${h[3]}"><span class="tag">${h[0]}</span><div class="tt">${h[1].replace('\n','<br>')}<small>${h[2]}</small></div></div>`).join('')}<div style="flex:none;width:7px"></div></div><div class="dots3" id="hd">${[0,1,2].map(k=>`<i class="${k?'':'on'}"></i>`).join('')}</div></div>`:''}</div>
  <div id="home-posts">${list.map(p=>postCard(p)).join('')||'<div style="text-align:center;padding:60px;opacity:.7;font-size:13px">No posts to show</div>'}</div>
 </div>
 ${topbar(`<div class="pills">${pills.map(([k,l,i,x])=>`<button class="pill ${f===k?'on':''}" data-feed="${k}" style="left:${x}px">${ic(i,17,f===k?'#fff':'#a3a1a1',1.6)}${l}</button>`).join('')}<button data-act="filter" style="position:absolute;left:341px;top:1px;color:#fff">${ic('sliders',23,'#fff',1.5)}</button></div>`)}${navbar('home')}</div>`;
};
B.home=()=>{
 const hs=$('#hs');
 if(hs)hs.onscroll=()=>{const k=Math.min(2,Math.round(hs.scrollLeft/139/1.5));const hd=$('#hd');if(hd)[...hd.children].forEach((d,i)=>d.classList.toggle('on',i===k))};
 phone.querySelectorAll('[data-feed]').forEach(b=>b.onclick=()=>{S.feed=b.dataset.feed;render()});
};

V.notif=()=>{
 const fs=['All','Announcement','Social','Organization'];
 const l=NOTIFS.filter(n=>S.notifFilter==='All'||n[0]===S.notifFilter);
 return `<div class="screen">${bgLayer()}${statusBar}
 <button class="back" data-back style="left:20px;top:74px">${ic('back',22,'#fff',1.8)}</button>
 <div style="position:absolute;left:55px;top:72px;font-size:21px;font-weight:700">Notification</div>
 <div style="position:absolute;left:22px;top:122px;display:flex;gap:8px">${fs.map(f=>`<button class="pill ${S.notifFilter===f?'on':''}" data-nf="${f}" style="position:static;height:20px;font-size:10px;padding:0 9px;font-weight:${S.notifFilter===f?700:500};color:${S.notifFilter===f?'#fff':'rgba(255,255,255,.6)'}">${f}</button>`).join('')}</div>
 <div class="scroll" style="position:absolute;left:0;right:0;top:162px;bottom:0;padding-bottom:130px">
  ${l.map((n,idx)=>`<div class="lg" data-act="notif-click" data-idx="${idx}" style="margin:0 14px 7px;border-radius:12px;padding:8px 10px;display:flex;gap:10px;align-items:center;background:${n[5]};backdrop-filter:blur(14px);color:#000;box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),0 2px 6px rgba(0,0,0,.15);cursor:pointer">
    <span style="width:30px;height:30px;border-radius:50%;background:#fff;display:grid;place-items:center;flex:none">${ic(n[1],16,'#a31f1f',1.7)}</span>
    <div style="flex:1"><b style="font-size:10.5px;display:block">${n[2]}</b><small style="font-size:8px;color:#555">${n[3]}</small></div>
    <small style="font-size:7px;color:#666;align-self:flex-start">${n[4]}</small>
  </div>`).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:12px">No notifications</div>'}
 </div>
 ${navbar('home')}</div>`;
};
B.notif=()=>phone.querySelectorAll('[data-nf]').forEach(b=>b.onclick=()=>{S.notifFilter=b.dataset.nf;render()});

function orgPills(act){
 return `<div style="position:absolute;left:16px;top:176px;display:flex;gap:6px;align-items:center">${['All','University','Department'].map(f=>`<button class="pill ${S[act]===f?'on':''}" data-of="${f}" data-st="${act}" style="position:static;height:26px;padding:0 ${f==='All'?16:10}px;font-size:13px;font-weight:${S[act]===f?700:600};color:${S[act]===f?'#fff':'rgba(255,255,255,.85)'};text-shadow:${S[act]===f?'none':'0 1px 3px rgba(0,0,0,.4)'}">${f}</button>`).join('')}</div><button data-act="filter-org" style="position:absolute;left:366px;top:178px;cursor:pointer" title="Filter Organizations">${ic('sliders',22,'#fff',1.5)}</button>`;
}

const fo=(act)=>{
 let list=ORGS.filter(o=>{
  if(S[act]!=='All'&&o.type!==S[act])return false;
  if(S.orgFilt.type!=='All'&&o.type!==S.orgFilt.type)return false;
  if(S.orgFilt.dept!=='All'&&o.dept!==S.orgFilt.dept)return false;
  if(S.q){
   const s=(o.name+' '+o.short+' '+(o.desc||'')+' '+(o.about||'')).toLowerCase();
   if(!s.includes(S.q.toLowerCase()))return false;
  }
  return true;
 });
 if(S.orgFilt.sort==='Name (A-Z)')list=[...list].sort((a,b)=>a.short.localeCompare(b.short));
 if(S.orgFilt.sort==='Most Members')list=[...list].sort((a,b)=>(parseFloat(b.mem)||0)-(parseFloat(a.mem)||0));
 return list;
};

function filteredOrgPosts(){
 let l=POSTS.filter(p=>p.cat.includes('org')&&!S.hidden.has(p.id));
 if(S.orgFilter!=='All'){
  l=l.filter(p=>{
   const o=getOrgForPost(p);
   return o&&o.type===S.orgFilter;
  });
 }
 if(S.q)l=l.filter(p=>(p.title+' '+(p.text||'')+' '+p.user+' '+(p.sub||'')).toLowerCase().includes(S.q.toLowerCase()));
 return l;
}

V.org=()=>{
 const l=fo('orgFilter');
 const orgPosts=filteredOrgPosts();
 return `<div class="screen">${bgLayer()}${statusBar}${topbar()}
 <div class="h-title" style="top:140px">Organization Feed</div>${orgPills('orgFilter')}
 <div class="scroll" id="org-scroll" style="top:218px;bottom:0;padding:0 0 130px">
 <div class="card" style="margin:0 16px 12px;padding:10px 0 10px;height:212px;border-radius:12px;overflow:visible">
  <div style="display:flex;justify-content:space-between;padding:0 11px 8px;font-size:12px;font-weight:700;color:#681d2a">Featured Organization<a data-go="featured" style="color:#681d2a;cursor:pointer">See all</a></div>
  <div class="hs" style="padding:0 0 0 11px;scroll-padding-left:11px;height:158px;padding-bottom:0;overflow-y:hidden">
   ${l.map(o=>`<div class="org-card" data-go="orgd" data-p='{"id":"${o.id}"}' style="cursor:pointer"><img src="${o.cover}" style="object-fit:cover;${o.id==='chess'?'object-position:center':''}"><b>${o.short.length>14?o.short.slice(0,12)+'…':o.short}</b><small>${o.type} Organization</small><em>${o.mem} Members</em></div>`).join('')||'<div style="padding:40px 10px;font-size:11px;color:#777">No organizations match</div>'}
   <div style="flex:none;width:11px"></div>
  </div>
  <div class="dots3" style="margin-top:8px">${[0,1,2].map(k=>`<i class="${k?'':'on'}" style="width:5px;height:5px"></i>`).join('')}</div>
 </div>
 <div style="font-size:18px;font-weight:600;margin:6px 16px 10px;text-shadow:0 2px 4px rgba(0,0,0,.3)">Latest Updates</div>
 <div id="org-posts">${orgPosts.map(p=>postCard(p)).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:12px">No organization updates to show</div>'}</div>
 </div>${navbar('org')}</div>`;
};
B.org=()=>wireOF();

function wireOF(){
 phone.querySelectorAll('[data-of]').forEach(b=>b.onclick=()=>{S[b.dataset.st]=b.dataset.of;render()});
}

V.featured=()=>{
 const l=fo('listFilter');
 return `<div class="screen">${bgLayer()}${statusBar}${topbar()}
 <div class="h-title" style="top:140px">Featured Organization</div>${orgPills('listFilter')}
 <div class="scroll" style="top:216px;bottom:0;padding:4px 0 130px">
  ${l.map((o,i)=>`<div class="lg orgrow" data-go="orgd" data-p='{"id":"${o.id}"}' style="cursor:pointer;background:${['linear-gradient(120deg,rgba(255,225,235,.85),rgba(245,215,225,.7))','linear-gradient(120deg,rgba(250,235,200,.8),rgba(225,230,235,.7))','linear-gradient(120deg,rgba(235,238,245,.8),rgba(215,225,240,.7))'][i%3]}"><img class="lg-i" src="${o.logo}"><div><b>${o.short}</b><small>${o.type} Organization</small><p>${o.desc}</p></div><span style="position:absolute;right:12px;top:12px">${ic('chev',14,'#777',1.6)}</span><span class="mem">👥 ${o.mem} Members</span></div>`).join('')||'<div style="text-align:center;padding:60px;opacity:.7;font-size:13px">No organizations found</div>'}
 </div>${navbar('org')}</div>`;
};
B.featured=()=>wireOF();

V.orgd=({id,tab='Overview'}={})=>{
 const o=ORGS.find(x=>x.id===id)||ORGS[0];
 const tabs=['Overview','Officers','Requirements','Activities'];
 const joined=S.joined.has(o.id);
 const isAdmin=isOrgAdmin(o);
 const isOfficer=isOrgOfficer(o);
 const isAnyOff=isAnyOfficer(o);
 
 let body='';
 if(tab==='Overview')body=`<div class="sec">${ic('doc',17,'#a31f1f',1.6)}About Us</div><p style="font-size:8.5px;color:#666;line-height:1.35;margin:8px 0 14px">${esc(o.about||o.desc)}</p>
 <div style="display:flex;gap:8px">${[['users',o.mem||'1.2k','Members'],['pin','MSEUF',o.loc||'Main Campus'],['cal','Founded',o.founded||'2026']].map(x=>`<div style="flex:1;background:#fff;border-radius:8px;padding:8px;display:flex;gap:6px;align-items:center;box-shadow:0 1px 3px rgba(0,0,0,.1)">${ic(x[0],14,'#a31f1f',1.6)}<div style="font-size:7px;color:#a31f1f"><b style="font-size:9px;display:block">${x[1]}</b>${x[2]}</div></div>`).join('')}</div>
 <div class="sec" style="margin:16px 0 8px">${ic('check',15,'#a31f1f',2.5).replace('M5 12.500l4.500 4.500L19 7.500','M12 3l2.600 5.600 6 .8-4.400 4.200 1.100 6L12 16.700 6.700 19.600l1.100-6L3.400 9.400l6-.8z')}Highlights</div><div style="display:flex;gap:10px">${(o.hl||['Leadership','Events','Community']).map(h=>`<div style="flex:1;height:72px;background:#fdeaea;border-radius:8px;border:1px solid #f0c9c9;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;font-size:8px;color:#a31f1f;font-weight:600">${ic('grad',18,'#a31f1f',1.5)}${h}</div>`).join('')}</div>`;
 
 if(tab==='Officers'){
  const offList=o.officers||[];
  body=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
    <div class="sec">${ic('org',18,'#a31f1f',1.6)}Officers</div>
    ${isAdmin?`<button data-act="open-add-officer" data-oid="${o.id}" style="font-size:9px;color:#c42b2b;font-weight:700;display:flex;gap:4px;align-items:center;cursor:pointer">${ic('plain',12,'#c42b2b',2)} Add Officer</button>`:''}
  </div>
  <div style="font-size:8px;color:#888;margin:2px 0 10px">${isAdmin?'You are Page Admin. Manage officers and grant edit permissions below:':'Meet the leaders of our organization'}</div>
  ${offList.map((x,i)=>`<div style="display:flex;gap:10px;align-items:center;margin-bottom:12px;background:#fff;padding:8px 10px;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.08)">
    <img src="${x.av||A('profile.jpg')}" style="width:30px;height:30px;border-radius:50%;object-fit:cover">
    <div style="flex:1">
      <div style="display:flex;align-items:center;gap:6px"><b style="font-size:10.5px;color:#a31f1f">${esc(x.name)}</b>${x.canEdit?`<span style="font-size:7px;padding:1px 5px;background:#ffdcdc;color:#c42b2b;border-radius:4px;font-weight:600">Can Edit</span>`:''}</div>
      <div style="font-size:8px;color:#666">${esc(x.role)}</div>
    </div>
    ${isAdmin?`<button data-act="toggle-officer-perm" data-oid="${o.id}" data-idx="${i}" style="font-size:7.5px;padding:3px 8px;border-radius:10px;background:${x.canEdit?'#c42b2b':'#e0e0e0'};color:${x.canEdit?'#fff':'#666'};font-weight:700;cursor:pointer" title="Admin: Toggle edit access">${x.canEdit?'Edit: ON':'Edit: OFF'}</button>`:''}
  </div>`).join('')||'<div style="text-align:center;padding:30px;font-size:10px;color:#888">No officers assigned yet</div>'}`;
 }

 if(tab==='Requirements'){
  const reqList=o.reqs||[];
  body=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
    <div class="sec">${ic('doc',17,'#a31f1f',1.6)}Requirements to Join</div>
    ${isOfficer?`<button data-act="open-edit-reqs" data-oid="${o.id}" style="font-size:9px;color:#c42b2b;font-weight:700;display:flex;gap:4px;align-items:center;cursor:pointer">${ic('pen',12,'#c42b2b',2)} Edit Requirements</button>`:''}
  </div>
  <div style="font-size:8px;color:#888;margin:2px 0 10px">Be part of ${esc(o.short)} and make a difference!</div>
  ${reqList.map(r=>`<div style="display:flex;gap:9px;align-items:center;background:#fff;border-radius:8px;padding:8px 10px;margin-bottom:8px;font-size:8.5px;color:#a31f1f;font-weight:500;box-shadow:0 1px 3px rgba(0,0,0,.1)"><span style="width:16px;height:16px;border-radius:50%;background:#c42b2b;display:grid;place-items:center;flex:none">${ic('check',10,'#fff',3.5)}</span>${esc(r)}</div>`).join('')}
  <div class="sec" style="font-size:10px;margin-top:8px">${ic('doc',13,'#a31f1f',1.6)}Application Form</div>
  <div style="background:#fff;border-radius:8px;padding:8px;margin:6px 0;box-shadow:0 1px 3px rgba(0,0,0,.1)"><div style="display:flex;gap:8px;align-items:center;font-size:8px;color:#a31f1f"><span style="width:22px;height:26px;background:#fde0e0;border-radius:4px;display:grid;place-items:center">${ic('doc',14,'#c42b2b',1.5)}</span><div><b>Application Form</b><br><span style="color:#999">PDF • 158 KB</span></div></div><button data-act="dl" style="width:100%;height:20px;margin-top:6px;border-radius:5px;background:#b42222;color:#fff;font-size:8px;font-weight:600">⬇ Download</button></div>
  <div class="sec" style="font-size:10px">${ic('cal',13,'#a31f1f',1.6)}Application Period</div>
  <div style="background:#fff;border-radius:8px;padding:7px 10px;margin-top:6px;font-size:8.5px;color:#a31f1f;font-weight:600">${esc(o.period||'Sept 1 - Sept 30, 2025')}<div style="color:#999;font-weight:400;font-size:7px">12:00 AM - 11:59 PM</div></div>`;
 }

 if(tab==='Activities'){
  const actList=o.acts||[];
  body=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
    <div class="sec">${ic('megaphone',17,'#a31f1f',1.6)}Activities</div>
    ${isOfficer?`<button data-act="open-add-act" data-oid="${o.id}" style="font-size:9px;color:#c42b2b;font-weight:700;display:flex;gap:4px;align-items:center;cursor:pointer">${ic('plain',12,'#c42b2b',2)} Add Activity</button>`:''}
  </div>
  <div style="font-size:8px;color:#888;margin:2px 0 10px">Stay updated with our latest announcements, events, and activities.</div>
  ${actList.map((a,i)=>`<div style="background:#fff;border-radius:8px;padding:8px 10px;margin-bottom:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);position:relative">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:7.5px;color:#666;font-weight:600">${esc(a[0])}</div>
      ${isOfficer?`<button data-act="del-act" data-oid="${o.id}" data-idx="${i}" style="color:#c42b2b;font-size:11px;cursor:pointer" title="Delete Activity">✕</button>`:''}
    </div>
    <div style="font-size:9.5px;font-weight:700;margin:3px 0;color:#000">${esc(a[1])}</div>
    <div style="font-size:7.5px;color:#999;line-height:1.3">${esc(a[2])}</div>
  </div>`).join('')||'<div style="text-align:center;padding:30px;font-size:10px;color:#888">No activities listed yet</div>'}`;
 }

 let actionBtn='';
 if(isAdmin){
  actionBtn=`<div class="btn" style="position:absolute;left:30px;right:30px;bottom:50px;width:auto;z-index:5;font-size:13px;background:rgba(113,34,34,.95);border-color:rgba(255,255,255,.5);cursor:default">${ic('crown',16,'#fff',1.8)} &nbsp; Page Admin (Creator)</div>`;
 }else if(isAnyOff){
  actionBtn=`<div class="btn" style="position:absolute;left:30px;right:30px;bottom:50px;width:auto;z-index:5;font-size:13px;background:rgba(80,80,80,.95);border-color:rgba(255,255,255,.4);cursor:default">${ic('check',14,'#fff',2.5)} &nbsp; Organization Officer</div>`;
 }else{
  actionBtn=`<button class="btn" data-act="apply" style="position:absolute;left:30px;right:30px;bottom:50px;width:auto;z-index:5;font-size:13px;${joined?'background:#777':''}">${joined?'Application sent':'Apply now'}</button>`;
 }

 return `<div class="screen">${bgLayer()}${statusBar}
 <div style="position:absolute;left:0;top:0;width:402px;height:224px;overflow:hidden;z-index:1">
   <img src="${o.cover||A('sus.jpg')}" data-act="view-img" data-img="${o.cover||A('sus.jpg')}" data-caption="${esc(o.name)} Cover Photo" style="width:100%;height:100%;object-fit:cover;filter:brightness(.65);cursor:pointer">
   <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(70,15,15,.25) 50%,#460f0f 100%)"></div>
 </div>
 <button class="back" data-back style="z-index:5">${ic('back',22,'#fff',1.8)}</button>
 <div class="ptitle" style="z-index:5">Organization</div>
 <img src="${o.logo}" data-act="view-img" data-img="${o.logo}" data-caption="${esc(o.name)} Logo" style="position:absolute;left:44px;top:115px;width:66px;height:66px;border-radius:50%;object-fit:cover;background:#fff;z-index:2;box-shadow:0 3px 8px rgba(0,0,0,.4);cursor:pointer">
 <div style="position:absolute;left:120px;top:118px;width:240px;z-index:2">
   <div style="font-size:16px;font-weight:700;line-height:1.15;text-shadow:0 1px 3px rgba(0,0,0,.6)">${esc(o.name)}</div>
   <div style="font-size:9px;color:rgba(255,255,255,.9);margin-top:3px">${o.type} Organization</div>
   <div style="font-size:8px;margin-top:3px;color:rgba(255,255,255,.9)">${ic('users',10,'#fff',1.6)} ${o.mem} Members</div>
 </div>
 <div class="sheetcard lg" style="top:224px;height:640px;border-radius:30px 30px 0 0;background:rgba(255,235,235,.55);z-index:2"></div>
 <div class="tabbar" style="position:absolute;left:30px;right:30px;top:238px;margin:0;z-index:3;background:rgba(255,255,255,.92)">${tabs.map(t=>`<button class="${t===tab?'on':''}" data-tab="${t}">${t}</button>`).join('')}</div>
 <div class="scroll" style="top:274px;bottom:84px;padding:6px 30px;color:#000;z-index:3">${body}</div>
 ${actionBtn}
 </div>`;
};
B.orgd=({id})=>{
 phone.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>go('orgd',{id,tab:b.dataset.tab},true));
 const o=ORGS.find(x=>x.id===id)||ORGS[0];
 const appBtn=$('[data-act=apply]');
 if(appBtn){
  appBtn.onclick=()=>{
   if(o.type==='Department'&&o.dept&&!ME.dept.includes(o.dept))return toast(`Only ${o.dept} students can join this organization`);
   S.joined.add(o.id);
   toast('Application submitted successfully!');
   render();
  };
 }
 const d=$('[data-act=dl]');if(d)d.onclick=()=>toast('Downloading application form (PDF)…');
};

V.msg=()=>{
 const list=CONVOS.map(c=>{
  const extra=S.convoMsgs[c.id]||[];
  const lastItem=extra.length?extra[extra.length-1]:(c.msgs.length?c.msgs[c.msgs.length-1]:null);
  const lastTxt=lastItem?(lastItem[0]==='n'?(extra.length>1?extra[extra.length-2][1]:c.last):lastItem[1]):c.last;
  const lastTime=lastItem&&lastItem[2]?lastItem[2]:c.time;
  return {...c,last:lastTxt,time:lastTime};
 });
 const convos=list.filter(c=>!S.q||(c.name+' '+c.last).toLowerCase().includes(S.q.toLowerCase()));
 return `<div class="screen">${bgLayer()}${statusBar}<div style="position:absolute;left:17px;top:90px;font-size:24px;font-weight:700">Messages</div>
 <div class="search glass" style="left:17px;top:140px;width:368px;height:32px;border-radius:16px;background:rgba(255,255,255,.2)">${ic('search',16,'#fff',1.6)}<input id="q" placeholder="Search people, group..." value="${esc(S.q)}"></div>
 <div class="scroll" id="msg-list" style="position:absolute;left:0;right:0;top:188px;bottom:0;padding-bottom:130px">
  ${convos.map((c,i)=>`<div class="lg msg-row" data-go="convo" data-p='{"id":"${c.id}"}' style="cursor:pointer;background:${(c.badge&&i===0)?'linear-gradient(120deg,rgba(255,225,200,.6),rgba(255,235,225,.45))':'rgba(255,255,255,.2)'}">
    ${c.group?`<span style="width:32px;height:32px;border-radius:50%;background:#b42222;display:grid;place-items:center">${ic('users',16,'#fff',1.6)}</span>`:`<img src="${c.av}">`}
    <div style="flex:1;min-width:0"><b style="font-size:11px;display:block">${esc(c.name)}</b><span style="font-size:8.5px;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block">${esc(c.last)}</span></div>
    <div style="text-align:right;font-size:8px;opacity:.85;align-self:flex-start">${c.time}${c.badge?`<div style="margin:6px 0 0 auto;width:15px;height:15px;border-radius:50%;background:#c42b2b;font-size:8px;font-weight:700;display:grid;place-items:center">${c.badge}</div>`:''}</div>
  </div>`).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:12px">No conversations found</div>'}
 </div>${navbar('msg')}</div>`;
};

V.convo=({id}={})=>{
 const targetId=id||(cur().p&&cur().p.id)||(CONVOS[0]&&CONVOS[0].id);
 const c=CONVOS.find(x=>x.id===targetId)||CONVOS[0];
 c.badge=0;
 const m=[...c.msgs,...(S.convoMsgs[c.id]||[])];
 return `<div class="screen">${bgLayer()}${statusBar}
 <button class="glass" data-back style="position:absolute;left:18px;top:76px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;z-index:5">${ic('back',16,'#fff',2)}</button>
 <div style="position:absolute;left:58px;top:76px;display:flex;gap:10px;align-items:center;z-index:5">${c.group?`<span style="width:30px;height:30px;border-radius:50%;background:#b42222;display:grid;place-items:center">${ic('users',15,'#fff')}</span>`:`<img src="${c.av}" style="width:30px;height:30px;border-radius:50%;object-fit:cover">`}<b style="font-size:15px">${esc(c.name)}</b></div><div style="position:absolute;left:18px;right:18px;top:118px;height:1px;background:rgba(255,255,255,.5)"></div>
 <div class="scroll" id="cv" style="top:128px;bottom:84px;padding:10px 14px"><div style="text-align:center;margin-bottom:12px"><span class="glass" style="font-size:9px;padding:3px 12px;border-radius:10px;background:rgba(255,255,255,.2)">Oct 15</span></div>${m.map(x=>x[0]==='n'?`<div style="text-align:center;margin:8px 0"><span class="glass" style="font-size:9px;padding:3px 12px;border-radius:10px;background:rgba(255,255,255,.2)">${x[1]}</span></div>`:`<div style="display:flex;gap:6px;align-items:flex-end;margin-bottom:10px;${x[0]==='r'?'justify-content:flex-end':''}">${x[0]==='l'?(c.group?'<span style="width:22px;height:22px;border-radius:50%;background:#b42222"></span>':`<img src="${c.av}" style="width:22px;height:22px;border-radius:50%;object-fit:cover">`):''}<div><div class="bub ${x[0]}">${esc(x[1])}</div><div style="font-size:7px;opacity:.7;margin-top:2px;${x[0]==='r'?'text-align:right':''}">${x[2]||''}${x[0]==='r'?' ✓✓':''}</div></div></div>`).join('')}</div>
 <div style="position:absolute;left:14px;right:14px;top:800px;height:42px;display:flex;gap:10px;align-items:center;z-index:5"><button class="glass" style="width:34px;height:34px;border-radius:50%;display:grid;place-items:center">${ic('plain',18,'#fff',1.8)}</button><div class="glass" style="flex:1;height:36px;border-radius:18px;display:flex;align-items:center;padding:0 14px"><input id="mi" placeholder="Type a message..." style="background:none;color:#fff;font-size:11px;width:100%"></div><button class="glass" data-act="send" style="width:34px;height:34px;border-radius:50%;display:grid;place-items:center">${ic('send',16,'#fff',1.6)}</button></div></div>`;
};
B.convo=({id}={})=>{
 const targetId=id||(cur().p&&cur().p.id)||(CONVOS[0]&&CONVOS[0].id);
 const c=CONVOS.find(x=>x.id===targetId)||CONVOS[0];
 const cv=$('#cv');
 const scrollBottom=(smooth=false)=>{
  if(cv){
   if(smooth&&cv.scrollTo)cv.scrollTo({top:cv.scrollHeight+1000,behavior:'smooth'});
   else cv.scrollTop=cv.scrollHeight+1000;
  }
 };
 scrollBottom();
 if(typeof requestAnimationFrame==='function')requestAnimationFrame(()=>scrollBottom());
 setTimeout(()=>scrollBottom(),40);
 setTimeout(()=>scrollBottom(),120);

 const send=()=>{
  const inp=$('#mi');
  if(!inp)return;
  const v=inp.value.trim();
  if(!v)return;
  const timeStr='Just now';
  (S.convoMsgs[c.id]=S.convoMsgs[c.id]||[]).push(['r',v,timeStr]);
  c.last=v;
  c.time=timeStr;
  const idx=CONVOS.findIndex(x=>x.id===c.id);
  if(idx>0){
   const [item]=CONVOS.splice(idx,1);
   CONVOS.unshift(item);
  }
  inp.value='';
  if(cv){
   const bubble=document.createElement('div');
   bubble.style.cssText='display:flex;gap:6px;align-items:flex-end;margin-bottom:10px;justify-content:flex-end';
   bubble.innerHTML=`<div><div class="bub r">${esc(v)}</div><div style="font-size:7px;opacity:.7;margin-top:2px;text-align:right">${timeStr} ✓✓</div></div>`;
   cv.appendChild(bubble);
   scrollBottom(true);
  }else{
   render();
  }
 };
 const sBtn=$('[data-act=send]');
 if(sBtn)sBtn.onclick=send;
 const miInp=$('#mi');
 if(miInp){
  miInp.onkeydown=e=>{if(e.key==='Enter')send()};
  setTimeout(()=>miInp.focus(),100);
 }
};

const catIc=[['Foods','food'],['Services','shirt'],['Rentals','calc'],['Electronics','head'],['Art & Craft','brush']];

function filteredMarket(){
 let list=MK.filter(m=>{
  if(S.marketCat!=='All'&&m.cat!==S.marketCat)return false;
  if(S.marketFilt.status!=='All'){
   if(S.marketFilt.status==='Available'&&m.sold)return false;
   if(S.marketFilt.status!=='Available'&&m.st!==S.marketFilt.status)return false;
  }
  if(S.marketFilt.price==='Under ₱100'&&m.p>=100)return false;
  if(S.marketFilt.price==='₱100 - ₱500'&&(m.p<100||m.p>500))return false;
  if(S.marketFilt.price==='Above ₱500'&&m.p<=500)return false;
  if(S.marketFilt.price==='Free / Inquire'&&m.p>0)return false;
  if(S.q){
   const s=(m.name+' '+m.d+' '+(m.cat||'')+' '+(m.st||'')).toLowerCase();
   if(!s.includes(S.q.toLowerCase()))return false;
  }
  return true;
 });
 if(S.marketFilt.sort==='Price: Low to High')list=[...list].sort((a,b)=>a.p-b.p);
 if(S.marketFilt.sort==='Price: High to Low')list=[...list].sort((a,b)=>b.p-a.p);
 return list;
}

V.market=()=>{
 const list=filteredMarket();
 return `<div class="screen">${bgLayer()}${statusBar}${topbar()}
 <div class="h-title" style="top:128px;font-size:22px">Marketplace</div>
 <button data-act="filter-market" style="position:absolute;left:366px;top:136px;cursor:pointer" title="Filter Marketplace">${ic('sliders',22,'#fff',1.5)}</button>
 <div class="scroll" id="market-scroll" style="top:172px;bottom:0;padding:0 16px 130px">
  <div class="card" style="padding:12px 12px 8px;border-radius:12px;margin-bottom:16px">
   <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:#681d2a;margin-bottom:10px">
     Categories<span data-act="market-see-all" style="font-size:10px;cursor:pointer;color:#681d2a;text-decoration:${S.marketCat==='All'?'underline':'none'}">See all</span>
   </div>
   <div style="display:flex;justify-content:space-between">
    ${catIc.map(c=>`<div data-act="select-mcat" data-cat="${c[0]}" style="text-align:center;font-size:8px;font-weight:700;cursor:pointer">
      <span style="width:54px;height:54px;border-radius:50%;background:${S.marketCat===c[0]?'var(--red2)':'#e7e5e5'};color:${S.marketCat===c[0]?'#fff':'#681d2a'};display:grid;place-items:center;margin-bottom:6px;transition:.2s;box-shadow:${S.marketCat===c[0]?'0 3px 8px rgba(172,38,38,.4)':'none'}">
        ${ic(c[1],26,S.marketCat===c[0]?'#fff':'#681d2a',1.5)}
      </span>
      <span style="color:${S.marketCat===c[0]?'var(--red2)':'#000'}">${c[0]}</span>
    </div>`).join('')}
   </div>
  </div>
  <div id="market-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
   ${list.map(m=>`<div class="mk" data-go="mkd" data-p='{"id":"${m.id}"}' style="cursor:pointer">
     <img src="${m.img}" style="${m.id==='tee'?'object-fit:contain;background:#fff':''}">
     <div class="p ${m.sold?'sold':''}">${m.p?'₱'+m.p:'Inquire'}</div>
     <div class="n">${esc(m.name)}</div>
     <div class="d">${esc(m.d)}</div>
     <div class="m">${esc(m.st)} &nbsp;• ${esc(m.ago)}</div>
   </div>`).join('')||'<div style="grid-column:1/span 2;text-align:center;padding:40px;color:#fff;opacity:.7;font-size:12px">No items match your search</div>'}
  </div>
 </div>
 <button data-act="postitem" style="position:absolute;left:267px;top:716px;width:118px;height:40px;border-radius:20px;background:#b42222;color:#fff;font-weight:600;font-size:13px;z-index:48;box-shadow:inset 0 0 14px rgba(255,255,255,.35),0 6px 14px rgba(0,0,0,.3);cursor:pointer">＋ Post Item</button>
 ${navbar('market')}</div>`;
};

V.mkd=({id}={})=>{
 const m=MK.find(x=>x.id===id)||MK[0];
 const isMyItem=isMyListing(m);
 return `<div class="screen" style="background:#f5f5f5;color:#000">
 <div style="position:absolute;left:20px;top:0;width:362px;height:360px;background:#fff">
  <img src="${m.img}" data-act="view-img" data-img="${m.img}" data-caption="${esc(m.name)}" style="width:100%;height:100%;object-fit:${['tee','calc','attire','mouse'].includes(m.id)?'contain':'cover'};cursor:pointer">
 </div>
 <div style="position:absolute;left:0;right:0;top:0;height:110px;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(255,255,255,0))"></div>
 ${statusBar}
 <button class="back" data-back style="top:68px">${ic('back',22,'#fff',2)}</button>
 ${isMyItem?`<button data-act="edit-item" data-id="${m.id}" style="position:absolute;right:14px;top:68px;color:#fff;z-index:50;display:flex;align-items:center;gap:4px;background:rgba(0,0,0,.45);border-radius:14px;padding:5px 11px;font-size:11px;font-weight:600;cursor:pointer;backdrop-filter:blur(10px)">${ic('pen',13,'#fff',2)} Edit</button>`:''}
 <div style="position:absolute;left:25px;top:378px;right:20px"><div style="font-size:19px;font-weight:700">${esc(m.name)}</div><div style="font-size:23px;font-weight:700;color:#712222;margin-top:6px">${m.p?'₱'+m.p:'Inquire'}</div><div style="font-size:11px;font-weight:600;color:#777;margin-top:4px">${esc(m.st)} <span style="font-weight:400;font-size:9px">&nbsp;• ${esc(m.ago)}</span></div><div style="font-size:12.5px;color:#777;margin-top:10px;line-height:1.3;width:240px">${esc(m.d)}</div></div>
 <div style="position:absolute;left:22px;right:25px;top:565px">${[['clip','Condition',m.cond||'Good'],['bag','Category',m.cat||'General'],['user','Seller',m.seller||'MSEUF Student']].map(r=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;font-size:13.500px;font-weight:600">${ic(r[0],22,'#712222',1.6)}<span style="flex:1">${r[1]}</span><b>${r[2]}</b></div>`).join('')}</div>
 ${isMyItem?`<button class="btn soft" data-act="edit-item" data-id="${m.id}" style="position:absolute;left:23px;right:23px;top:760px;width:auto;height:48px;font-size:15px;display:flex;align-items:center;justify-content:center;gap:6px">${ic('pen',16,'#712222',2)} Edit Listing</button>`:`<button class="btn soft" data-act="msgseller" data-seller="${esc(m.seller||'Mark Rivera')}" style="position:absolute;left:23px;right:23px;top:760px;width:auto;height:48px;font-size:15px">Message Seller</button>`}<div class="home-ind" style="background:#fff"></div></div>`;
};
B.mkd=()=>{
 const msgBtn=$('[data-act=msgseller]');
 if(msgBtn)msgBtn.onclick=()=>go('convo',{id:'mark'});
 const editBtn=$('[data-act=edit-item]');
 if(editBtn)editBtn.onclick=e=>openEditItem(e.currentTarget.dataset.id);
};

V.profile=()=>{
 const mine=POSTS.filter(isMyPost);
 return `<div class="screen">${bgLayer()}${statusBar}
 <div class="ptitle" style="top:74px;font-size:15px;z-index:50">Profile</div>
 <button data-go="settings" style="position:absolute;right:18px;top:72px;z-index:50;cursor:pointer" title="Settings">${ic('gear',22,'#fff',1.4)}</button>
 <div class="scroll" style="top:110px;bottom:0;padding:4px 0 130px">
  <div class="lg" style="margin:0 16px;padding:16px 18px 20px;border-radius:30px;background:rgba(255,255,255,.12);position:relative">
   <div style="display:flex;justify-content:center">
    <img src="${ME.av}" data-act="view-img" data-img="${ME.av}" data-caption="${esc(ME.name)}" style="width:104px;height:104px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.7);cursor:pointer">
   </div>
   <div style="text-align:center;font-size:17px;font-weight:700;margin-top:14px">${esc(ME.name)}</div>
   <div style="text-align:center;font-size:10px;opacity:.85;margin-top:4px">${esc(ME.type)} &nbsp;|&nbsp; ${esc(ME.id)}</div>
   <div style="font-size:14px;font-weight:700;margin-top:22px;margin-bottom:14px">Personal Details</div>
   <div style="display:flex;flex-direction:column;gap:16px;font-size:11px;font-weight:500">
    ${[['id',ME.dept],['grad',ME.year],['org',ME.org]].map(r=>`<div style="display:flex;gap:12px;align-items:center${r[1]?'':';opacity:.55'}">${ic(r[0],17,'#fff',1.4)}${r[1]?esc(r[1]):'Not set'}</div>`).join('')}
   </div>
  </div>
  <div style="font-size:16px;font-weight:700;margin:18px 18px 10px">All post</div>
  <div id="profile-posts">${mine.map(p=>postCard(p,{menu:true})).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:12px">No posts yet</div>'}</div>
 </div>${navbar('profile')}</div>`;
};

V.settings=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">Settings</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:112px;height:56px;border-radius:16px;display:flex;align-items:center;gap:10px;padding:0 10px"><img src="${ME.av}" style="width:42px;height:42px;border-radius:50%;object-fit:cover"><div><b style="font-size:12px">${esc(ME.name)}</b><div style="font-size:8px;opacity:.8">${esc(ME.type)} | ${esc(ME.id)}</div></div></div>
 <div style="position:absolute;left:21px;top:190px;font-size:12px;font-weight:700">Account</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:212px;border-radius:16px;padding:4px 10px">${[['Edit Profile','Update your personal information','user','edit'],['Change Password','Keep your account secure','lock','pass']].map((r,i)=>`<div data-go="${r[3]}" style="display:flex;gap:10px;align-items:center;height:46px;cursor:pointer;${i?'border-top:1px solid rgba(255,255,255,.2)':''}"><span style="width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.25);display:grid;place-items:center">${ic(r[2],13,'#fff',1.6)}</span><div style="flex:1"><b style="font-size:10px">${r[0]}</b><div style="font-size:7.5px;opacity:.75">${r[1]}</div></div>${ic('chev',14,'#fff',1.6)}</div>`).join('')}</div>
 <div style="position:absolute;left:21px;top:334px;font-size:12px;font-weight:700">Support & Other</div>
 <div class="lg" data-go="about" style="position:absolute;left:19px;right:19px;top:356px;border-radius:16px;padding:4px 10px;cursor:pointer"><div style="display:flex;gap:10px;align-items:center;height:46px"><span style="width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.25);display:grid;place-items:center">${ic('lock',13,'#fff',1.6)}</span><div style="flex:1"><b style="font-size:10px">About UNICOM</b><div style="font-size:7.5px;opacity:.75">App Version 1.0.0</div></div>${ic('chev',14,'#fff',1.6)}</div></div>
 <button class="btn" data-act="logout" style="position:absolute;left:30px;right:30px;top:752px;width:auto;font-size:13px">${ic('logout',16,'#fff',1.8)}&nbsp; Log Out</button></div>`;
B.settings=()=>$('[data-act=logout]').onclick=()=>{toast('Logged out');reset('login')};

const lab=t=>`<div style="font-size:8.5px;font-weight:700;margin:0 0 4px 4px;color:#fff">${t}</div>`;
V.edit=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">Edit Profile</div>
 <div class="scroll" style="top:92px;bottom:72px;padding:8px 19px 24px">
  <div style="display:flex;justify-content:center;margin-bottom:14px">
    <div style="position:relative;width:96px;height:96px">
      <img id="ep-avatar-img" src="${ME.av}" style="width:96px;height:96px;border-radius:50%;object-fit:cover;border:2.5px solid rgba(255,255,255,.8);box-shadow:0 4px 14px rgba(0,0,0,.35)">
      <label style="position:absolute;right:0;bottom:0;width:30px;height:30px;border-radius:50%;background:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.35)">
        ${ic('camera',15,'#a31f1f',1.6)}
        <input id="ep-avatar-input" type="file" accept="image/*" hidden>
      </label>
    </div>
  </div>
  <div class="lg" style="border-radius:18px;padding:12px 14px 14px;margin-bottom:12px">
   <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:10px">Account Details ${ic('pen',14,'#fff',1.6)}</div>
   ${lab('Full Name')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:10px;padding:0 10px"><input id="ep-name" value="${esc(ME.name)}" style="font-size:10px"></div>
   ${lab('Student / Employee Number')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:10px;padding:0 10px"><input id="ep-id" value="${esc(ME.id)}" placeholder="e.g. 404-02025" style="font-size:10px"></div>
   ${lab('Email')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:10px;padding:0 10px"><input id="ep-email" value="${esc(ME.email)}" style="font-size:10px"></div>
   ${lab('Phone Number (Optional)')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:10px;padding:0 10px"><input id="ep-phone" value="${esc(ME.phone||'')}" placeholder="e.g. +63 900 000 0000" style="font-size:10px"></div>
   ${lab('Birthday')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:4px;padding:0 10px"><input id="ep-bday" value="${esc(ME.bday||'')}" placeholder="MM/DD/YYYY" style="font-size:10px"></div>
  </div>

  <div class="lg" style="border-radius:18px;padding:12px 14px 14px;margin-bottom:12px">
   <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:10px">Personal & Academic Details ${ic('grad',14,'#fff',1.6)}</div>
   ${lab('Department')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:10px;padding:0 10px"><input id="ep-dept" value="${esc(ME.dept||'')}" placeholder="e.g. CCMS Department" style="font-size:10px"></div>
   ${lab('Year / Level')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:10px;padding:0 10px"><input id="ep-year" value="${esc(ME.year||'')}" placeholder="e.g. BSCS 3rd Year" style="font-size:10px"></div>
   ${lab('Affiliated Organization')}
   <div class="field" style="height:32px;border-radius:7px;margin-bottom:4px;padding:0 10px"><input id="ep-org" value="${esc(ME.org||'')}" placeholder="e.g. Pet Society" style="font-size:10px"></div>
  </div>
 </div>
 <button class="btn" data-act="saveprof" style="position:absolute;left:30px;right:30px;bottom:18px;width:auto;height:42px;font-size:13px;z-index:10">Save Changes</button>
</div>`;
B.edit=()=>{
 let newAv=ME.av;
 const avInput=$('#ep-avatar-input');
 if(avInput){
  avInput.onchange=e=>{
   const f=e.target.files[0];
   if(f){
    newAv=URL.createObjectURL(f);
    $('#ep-avatar-img').src=newAv;
   }
  };
 }
 $('[data-act=saveprof]').onclick=()=>{
  const n=$('#ep-name').value.trim();
  const idVal=$('#ep-id').value.trim();
  const em=$('#ep-email').value.trim();
  const ph=$('#ep-phone').value.trim();
  const bd=$('#ep-bday').value.trim();
  const dept=$('#ep-dept').value.trim();
  const yr=$('#ep-year').value.trim();
  const org=$('#ep-org').value.trim();

  if(!n)return toast('Full Name cannot be empty');
  if(!idVal)return toast('Student Number cannot be empty');
  if(!em)return toast('Email cannot be empty');

  const oldId=ME.id;
  const oldName=ME.name;
  ME.name=n;
  ME.id=idVal;
  ME.email=em;
  ME.phone=ph;
  ME.bday=bd;
  ME.dept=dept;
  ME.year=yr;
  ME.org=org;
  ME.av=newAv;

  const u=USERS.find(x=>x.id===oldId||x.id===ME.id||x.email===ME.email);
  if(u)Object.assign(u,ME);
  else USERS.push({...ME});

  POSTS.forEach(p=>{
   if(p.userId===oldId||p.userId===ME.id||p.user===oldName){
    p.user=ME.name;
    p.av=ME.av;
    p.userId=ME.id;
    if(!p.sub||p.sub.includes('Year')||p.sub.includes('BSCS')||p.sub.includes('Department'))p.sub=ME.year;
   }
  });

  ORGS.forEach(o=>{
   if(o.creatorId===oldId)o.creatorId=ME.id;
   if(o.admins)o.admins=o.admins.map(a=>a===oldId?ME.id:a);
   if(o.officers){
    o.officers.forEach(off=>{
     if(off.id===oldId||off.name===oldName){
      off.name=ME.name;
      off.id=ME.id;
      off.av=ME.av;
     }
    });
   }
  });

  toast('Personal details updated successfully!');
  setTimeout(back,600);
 };
};

V.pass=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">Change Password</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:112px;border-radius:18px;padding:14px 12px 14px">${[['Current Password','cp'],['New Password','np'],['Re-enter Password','rp']].map(r=>`${lab(r[0])}<div style="margin-bottom:14px">${pw2('',r[1]).replace('height:38px','height:28px;border-radius:7px').replace(/width="17"/g,'width="14"')}</div>`).join('')}<button class="btn" data-act="savepw" style="height:28px;font-size:10px;margin-top:6px">Save Password</button><div style="text-align:center;font-size:8px;margin-top:10px;cursor:pointer" data-back>Discard</div></div></div>`;
B.pass=()=>$('[data-act=savepw]').onclick=()=>{if($('#np').value!==$('#rp').value)return toast('Passwords do not match');if(!$('#np').value)return toast('Please enter a new password');ME.password=$('#np').value;const u=USERS.find(x=>x.id===ME.id);if(u)u.password=$('#np').value;toast('Password updated');setTimeout(back,700)};

V.about=()=>`<div class="screen">${bgLayer()}${statusBar}<button class="back" data-back>${ic('back',22,'#fff',1.8)}</button><div class="ptitle" style="font-size:15px">About</div>
 <img src="${A('settings-logo.png')}" style="position:absolute;left:131px;top:110px;width:140px;height:140px;object-fit:contain"><div style="position:absolute;left:0;right:0;top:258px;text-align:center;font-size:19px;font-weight:700">UNICOM</div><div style="position:absolute;left:0;right:0;top:284px;text-align:center;font-size:9px;opacity:.8">Version 1.0.0</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:310px;border-radius:14px;padding:12px;font-size:8.5px;line-height:1.4;background:rgba(255,255,255,.2)">Unicom (Campus Feed) is a university community social app for MSEUF, built to facilitate the students and staff. It gives students a safe, verified community where they can share announcements and Q&A, join organizations, trade in the marketplace, and chat through direct messaging — all in one place for the university community.</div>
 <div class="lg" style="position:absolute;left:19px;right:19px;top:424px;border-radius:14px;padding:2px 12px">${[['Terms of Services','doc'],['Privacy Policy','lock'],['Developed by','user']].map((r,i)=>`<div style="display:flex;gap:10px;align-items:center;height:36px;font-size:9.5px;font-weight:600;${i?'border-top:1px solid rgba(255,255,255,.2)':''}">${ic(r[1],14,'#fff',1.5)}<span style="flex:1">${r[0]}${r[0]==='Developed by'?'<div style="font-size:7px;font-weight:400;opacity:.7">UNICOM Team</div>':''}</span>${r[0]!=='Developed by'?ic('chev',13,'#fff',1.6):''}</div>`).join('')}</div></div>`;

/* ---------- overlays & modals ---------- */
function overlay(html){const ov=$('#ov');if(ov)ov.innerHTML=html;}
function closeOv(){const ov=$('#ov');if(ov)ov.innerHTML='';}

/* 1. Image Viewer / Lightbox */
function openImageViewer(src,caption=''){
 overlay(`<div class="dim" data-close style="background:rgba(0,0,0,.88);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99;animation:fadein .2s">
  <button data-close style="position:absolute;right:18px;top:44px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.2);color:#fff;font-size:18px;display:grid;place-items:center;cursor:pointer;z-index:100">✕</button>
  <div style="max-width:92%;max-height:78vh;display:flex;align-items:center;justify-content:center">
   <img src="${src}" style="max-width:100%;max-height:76vh;border-radius:12px;object-fit:contain;box-shadow:0 12px 40px rgba(0,0,0,.8)">
  </div>
  ${caption?`<div style="color:rgba(255,255,255,.9);font-size:12px;margin-top:14px;text-align:center;padding:0 24px;line-height:1.3">${esc(caption)}</div>`:''}
 </div>`);
 $('#ov').querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
}

/* 2. Create Selection Menu (+ Button) */
function openCreateMenu(){
 overlay(`<div class="dim" data-close></div>
 <div class="sheet sheetcard lg" style="height:270px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:16px 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff">
  <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:0 auto 12px"></div>
  <div style="text-align:center;color:#c42b2b;font-size:16px;font-weight:700;margin-bottom:16px;position:relative">
    Create
    <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px">
   <div data-act="open-cpost" style="display:flex;gap:14px;align-items:center;background:#fff;padding:12px 14px;border-radius:14px;box-shadow:0 2px 6px rgba(0,0,0,.08);cursor:pointer">
     <div style="width:38px;height:38px;border-radius:50%;background:#ffd9d9;display:grid;place-items:center;color:#c42b2b;flex:none">${ic('pen',18,'#c42b2b',1.8)}</div>
     <div style="flex:1"><b style="font-size:12.5px;color:#a31f1f;display:block">Create Post</b><span style="font-size:8.5px;color:#666">Share an update to Campus, Social, or Organization</span></div>
     ${ic('chev',16,'#999',1.8)}
   </div>
   <div data-act="open-cpage" style="display:flex;gap:14px;align-items:center;background:#fff;padding:12px 14px;border-radius:14px;box-shadow:0 2px 6px rgba(0,0,0,.08);cursor:pointer">
     <div style="width:38px;height:38px;border-radius:50%;background:#ffd9d9;display:grid;place-items:center;color:#c42b2b;flex:none">${ic('org',20,'#c42b2b',1.8)}</div>
     <div style="flex:1"><b style="font-size:12.5px;color:#a31f1f;display:block">Create Page / Organization</b><span style="font-size:8.5px;color:#666">Start a student club, society, or community page</span></div>
     ${ic('chev',16,'#999',1.8)}
   </div>
  </div>
 </div>`);
 const ov=$('#ov');
 ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
 $('[data-act=open-cpost]').onclick=()=>openNewPost();
 $('[data-act=open-cpage]').onclick=()=>openCreatePage();
}

/* 3. Create Page / Organization */
function openCreatePage(){
 let logoImg=null,coverImg=null;
 const draw=(keep)=>{
  const n=keep?$('#cp-name').value:'';
  const s=keep?$('#cp-short').value:'';
  const t=keep?$('#cp-type').value:'University';
  const d=keep?($('#cp-dept')?$('#cp-dept').value:'CCMS'):'CCMS';
  const ds=keep?$('#cp-desc').value:'';
  const ab=keep?$('#cp-about').value:'';
  overlay(`<div class="dim" data-close></div>
  <div class="sheet sheetcard lg" style="height:670px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:0 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
   <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:8px auto 0"></div>
   <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-top:10px;position:relative">
     Create Organization Page
     <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
   </div>
   <div class="scroll" style="position:static;flex:1;overflow-y:auto;padding:12px 0 16px">
     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Organization Name</div>
     <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="cp-name" placeholder="e.g. MSEUF Coding Society" value="${esc(n)}" style="font-size:10px"></div>
     
     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Short Code / Acronym</div>
     <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="cp-short" placeholder="e.g. CodeSoc" value="${esc(s)}" style="font-size:10px"></div>

     <div style="display:flex;gap:10px;margin-bottom:10px">
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Type</div>
         <select id="cp-type" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           <option value="University" ${t==='University'?'selected':''}>University</option>
           <option value="Department" ${t==='Department'?'selected':''}>Department</option>
         </select>
       </div>
       <div style="flex:1" id="dept-wrap">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Department</div>
         <select id="cp-dept" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['CCMS','CHTM','CBA','CAS','CEA'].map(x=>`<option value="${x}" ${d===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
     </div>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Short Description</div>
     <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="cp-desc" placeholder="Brief summary of the organization..." value="${esc(ds)}" style="font-size:10px"></div>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">About & Mission</div>
     <textarea id="cp-about" placeholder="Tell students about what your organization does..." style="width:100%;height:58px;border-radius:8px;padding:8px 10px;font-size:10px;resize:none;background:#fff;color:#000;margin-bottom:12px">${esc(ab)}</textarea>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:6px">Organization Logo</div>
     ${logoImg?`<div style="position:relative;width:100%;height:80px;border-radius:8px;overflow:hidden;background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:10px">
       <img src="${logoImg}" style="max-height:100%;max-width:100%;object-fit:contain">
       <button data-act="del-logo" style="position:absolute;top:6px;right:6px;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.65);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:700">✕</button>
       <label style="position:absolute;bottom:6px;left:6px;background:rgba(0,0,0,.65);color:#fff;padding:3px 8px;border-radius:12px;font-size:8px;cursor:pointer">${ic('photo',12,'#fff')} Replace<input id="cp-logo-change" type="file" accept="image/*" hidden></label>
     </div>`:`<label style="display:flex;gap:8px;align-items:center;height:34px;background:#fff;border-radius:8px;padding:0 12px;font-size:10px;color:#666;cursor:pointer;margin-bottom:10px">${ic('photo',16,'#666')} Add Logo Image<input id="cp-logo" type="file" accept="image/*" hidden></label>`}

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:6px">Cover Photo</div>
     ${coverImg?`<div style="position:relative;width:100%;height:90px;border-radius:8px;overflow:hidden;background:#222;display:flex;align-items:center;justify-content:center;margin-bottom:10px">
       <img src="${coverImg}" style="width:100%;height:100%;object-fit:cover">
       <button data-act="del-cover" style="position:absolute;top:6px;right:6px;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.65);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:700">✕</button>
       <label style="position:absolute;bottom:6px;left:6px;background:rgba(0,0,0,.65);color:#fff;padding:3px 8px;border-radius:12px;font-size:8px;cursor:pointer">${ic('photo',12,'#fff')} Replace<input id="cp-cover-change" type="file" accept="image/*" hidden></label>
     </div>`:`<label style="display:flex;gap:8px;align-items:center;height:34px;background:#fff;border-radius:8px;padding:0 12px;font-size:10px;color:#666;cursor:pointer;margin-bottom:10px">${ic('photo',16,'#666')} Add Cover Photo<input id="cp-cover" type="file" accept="image/*" hidden></label>`}

     <button class="btn soft" data-sub-page style="height:36px;font-size:13px;margin-top:6px">Create Page</button>
   </div>
  </div>`);

  const ov=$('#ov');
  ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  const lIn=$('#cp-logo');if(lIn)lIn.onchange=e=>{if(e.target.files[0]){logoImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const lcIn=$('#cp-logo-change');if(lcIn)lcIn.onchange=e=>{if(e.target.files[0]){logoImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const dLog=$('[data-act=del-logo]');if(dLog)dLog.onclick=()=>{logoImg=null;draw(1)};

  const cIn=$('#cp-cover');if(cIn)cIn.onchange=e=>{if(e.target.files[0]){coverImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const ccIn=$('#cp-cover-change');if(ccIn)ccIn.onchange=e=>{if(e.target.files[0]){coverImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const dCov=$('[data-act=del-cover]');if(dCov)dCov.onclick=()=>{coverImg=null;draw(1)};

  $('[data-sub-page]').onclick=()=>{
   const nameVal=$('#cp-name').value.trim();
   const shortVal=$('#cp-short').value.trim();
   const typeVal=$('#cp-type').value;
   const deptVal=$('#cp-dept')?$('#cp-dept').value:'CCMS';
   const descVal=$('#cp-desc').value.trim();
   const aboutVal=$('#cp-about').value.trim();

   if(!nameVal)return toast('Please enter organization name');
   if(!shortVal)return toast('Please enter short acronym');

   const newId='org_'+Date.now();
   const newOrg={
    id:newId,
    name:nameVal,
    short:shortVal,
    type:typeVal,
    dept:typeVal==='Department'?deptVal:undefined,
    logo:logoImg||A('uscss.jpg'),
    cover:coverImg||A('sus.jpg'),
    mem:'1',
    desc:descVal||'Promoting student participation, leadership, and campus community.',
    about:aboutVal||descVal||('Welcome to '+nameVal+'. Official student organization at MSEUF.'),
    founded:'2026',
    loc:'MSEUF Main Campus',
    hl:['Leadership','Events','Community'],
    period:'Open Year-round',
    creatorId:ME.id,
    creatorName:ME.name,
    admins:[ME.id],
    officers:[
     {name:ME.name,role:'Founder & Admin',av:ME.av,canEdit:true,id:ME.id}
    ],
    reqs:[
     'Must be a currently enrolled MSEUF student.',
     'Willing to participate in organization activities and general assemblies.'
    ],
    acts:[
     [shortVal+' Official','Welcome to '+nameVal,'We are officially open for new members! Stay tuned for upcoming activities and events.']
    ]
   };
   ORGS.unshift(newOrg);
   closeOv();
   toast('Organization Page created! You are the Admin.');
   go('orgd',{id:newId});
  };
 };
 draw();
}

/* 4. New Post Overlay (with Image Edit/Delete/Replace & Org Poster Support) */
function openNewPost(){
 let cat='Campus',cm=true,img=null,selectedOrg=ORGS[0]?ORGS[0].id:'uscs';
 const draw=(keep)=>{
  const txt=keep?$('#pt').value:'';
  const isOrg=cat==='Organization';
  const orgObj=ORGS.find(x=>x.id===selectedOrg||x.short===selectedOrg)||ORGS[0];

  overlay(`<div class="dim" data-close></div>
  <div class="sheet sheetcard lg" style="height:650px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:0 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
   <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:8px auto 0"></div>
   <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-top:10px;position:relative">New post<span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span></div>
   <div class="scroll" style="position:static;flex:1;overflow-y:auto;padding-bottom:16px">
     
     <div style="display:flex;gap:10px;align-items:center;margin-top:16px;background:rgba(255,255,255,.5);padding:8px 12px;border-radius:12px">
       <img src="${ME.av}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;box-shadow:0 2px 5px rgba(0,0,0,.15);border:1px solid #fff">
       <div>
         <b style="font-size:12.5px;display:flex;align-items:center;gap:4px;color:#222">${esc(ME.name)}</b>
         <span style="font-size:8px;color:${isOrg?'#c42b2b':'#666'};font-weight:600">${isOrg?`Posting to ${esc(orgObj.short)}`:(ME.year||'Posting as Student')}</span>
       </div>
     </div>

     <textarea id="pt" placeholder="What's on your mind?" style="width:100%;height:68px;margin-top:12px;border-radius:10px;padding:10px;font-size:11px;resize:none;background:#fff;color:#000">${esc(txt)}</textarea>
     
     ${img?`
     <div style="position:relative;margin-top:12px;border-radius:12px;overflow:hidden;width:100%;height:130px;background:#222;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.3)">
       <img src="${img}" style="width:100%;height:100%;object-fit:cover;cursor:pointer" data-act="view-img" data-img="${img}" data-caption="Selected post image">
       <button type="button" data-act="del-post-img" title="Remove image" style="position:absolute;top:8px;right:8px;width:26px;height:26px;border-radius:50%;background:rgba(0,0,0,.7);color:#fff;display:grid;place-items:center;font-size:13px;font-weight:700;cursor:pointer;z-index:2">✕</button>
       <label style="position:absolute;bottom:8px;left:8px;background:rgba(0,0,0,.7);color:#fff;padding:4px 10px;border-radius:14px;font-size:9.5px;font-weight:600;display:flex;gap:5px;align-items:center;cursor:pointer;z-index:2">
         ${ic('photo',13,'#fff',1.6)} Change photo
         <input id="pf-change" type="file" accept="image/*" hidden>
       </label>
     </div>`:
     `<label style="display:flex;gap:8px;align-items:center;margin-top:14px;font-size:10px;color:#777;cursor:pointer;background:#fff;padding:8px 12px;border-radius:8px">
       ${ic('photo',18,'#777',1.4)} Add photo
       <input id="pf" type="file" accept="image/*" hidden>
     </label>`}

     <div style="display:flex;gap:8px;align-items:center;margin-top:16px;font-size:11px">${ic('users',14,'#333',1.5)}Post to:</div>
     ${[['Campus','Visible to all students, faculty, and staff'],['Social','Only visible to students'],['Organization','Post in the organization community']].map(r=>`<div data-c="${r[0]}" style="display:flex;gap:12px;align-items:flex-start;margin-top:12px;cursor:pointer">
       <span class="radio ${cat===r[0]?'on':''}"></span>
       <div>
         <b style="font-size:11px">${r[0]}</b>
         <div style="font-size:7.5px;color:#888">${r[1]}</div>
         ${r[0]==='Organization'?`<div style="margin-top:6px" onclick="event.stopPropagation()"><select id="os" ${cat==='Organization'?'':'disabled'} style="width:190px;height:26px;font-size:9.5px;border-radius:6px;background:#fff;color:#333;padding:0 6px;border:1px solid #ddd">${ORGS.map(o=>`<option value="${esc(o.id)}" ${(selectedOrg===o.id||selectedOrg===o.short)?'selected':''}>${esc(o.short)} - ${esc(o.name.slice(0,18))}…</option>`).join('')}</select></div>`:''}
       </div>
     </div>`).join('')}
     <div style="display:flex;gap:8px;align-items:center;justify-content:space-between;margin-top:18px;font-size:11px"><span style="display:flex;gap:8px;align-items:center">${ic('chat',15,'#333',1.5)}Allows comments</span><button id="tg" class="toggle ${cm?'on':''}"></button></div>
     <button class="btn soft" data-sub style="margin-top:18px;height:36px;font-size:13px">Post</button>
   </div>
  </div>`);

  const o=$('#ov');
  o.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  o.querySelectorAll('[data-c]').forEach(e=>e.onclick=()=>{
   const v=$('#pt').value;
   cat=e.dataset.c;
   draw(1);
   $('#pt').value=v;
  });
  const osEl=$('#os');
  if(osEl){
   osEl.onchange=e=>{
    selectedOrg=e.target.value;
    const v=$('#pt').value;
    draw(1);
    $('#pt').value=v;
   };
  }
  $('#tg').onclick=()=>{cm=!cm;$('#tg').classList.toggle('on',cm)};

  const pf=$('#pf');
  if(pf)pf.onchange=e=>{const f=e.target.files[0];if(f){const v=$('#pt').value;img=URL.createObjectURL(f);draw(1);$('#pt').value=v}};
  const pfC=$('#pf-change');
  if(pfC)pfC.onchange=e=>{const f=e.target.files[0];if(f){const v=$('#pt').value;img=URL.createObjectURL(f);draw(1);$('#pt').value=v}};
  const delImg=$('[data-act=del-post-img]');
  if(delImg)delImg.onclick=()=>{const v=$('#pt').value;img=null;draw(1);$('#pt').value=v};

  $('[data-sub]').onclick=()=>{
   const v=$('#pt').value.trim();
   if(!v&&!img)return toast('Write something or add a photo first');
   const osSelect=$('#os');
   const osVal=osSelect?osSelect.value:selectedOrg;
   const cats={Campus:'campus',Social:'social',Organization:'org'};
   const orgTarget=cat==='Organization'?ORGS.find(x=>x.id===osVal||x.short===osVal):null;

   const newPost={
    id:Date.now(),
    cat:cat==='Organization'?['org','campus','mine']:[cats[cat],'mine'],
    userId:ME.id,
    user:ME.name,
    v:0,
    orgId:orgTarget?orgTarget.id:undefined,
    sub:cat==='Organization'?(orgTarget?`${ME.year} • ${orgTarget.short}`:ME.year):ME.year,
    t:'now',
    m:0,
    av:ME.av,
    title:v.split('\n')[0]||'New Update',
    text:v.split('\n').slice(1).join(' ')||'',
    img,
    h:190,
    fit:'cover',
    up:0,
    c:0,
    comments:[]
   };

   POSTS.unshift(newPost);
   closeOv();
   if(cat==='Organization'){
    S.feed='org';
    reset('org');
    toast(`Posted to ${orgTarget?orgTarget.short:'Organization'}`);
   }else{
    S.feed=cats[cat];
    reset('home');
    toast('Posted to '+cat);
   }
  };
 };
 draw();
}

/* 5. Post Item in Marketplace */
function openPostItem(){
 let itemImg=null;
 const draw=(keep)=>{
  const n=keep?$('#mi-name').value:'';
  const p=keep?$('#mi-price').value:'';
  const c=keep?$('#mi-cat').value:'Foods';
  const s=keep?$('#mi-st').value:'For Sale';
  const cd=keep?$('#mi-cond').value:'Brand new';
  const d=keep?$('#mi-desc').value:'';
  overlay(`<div class="dim" data-close></div>
  <div class="sheet sheetcard lg" style="height:670px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:0 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
   <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:8px auto 0"></div>
   <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-top:10px;position:relative">
     Post Item to Marketplace
     <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
   </div>
   <div class="scroll" style="position:static;flex:1;overflow-y:auto;padding:12px 0 16px">
     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Item Name / Title</div>
     <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="mi-name" placeholder="What are you offering?" value="${esc(n)}" style="font-size:10px"></div>
     
     <div style="display:flex;gap:10px;margin-bottom:10px">
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Price (₱)</div>
         <div class="field" style="height:34px;border-radius:8px;background:#fff;padding:0 12px"><input id="mi-price" type="number" placeholder="0 = Inquire" value="${esc(p)}" style="font-size:10px"></div>
       </div>
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Category</div>
         <select id="mi-cat" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['Foods','Services','Rentals','Electronics','Art & Craft','Clothing'].map(x=>`<option value="${x}" ${c===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
     </div>

     <div style="display:flex;gap:10px;margin-bottom:10px">
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Status</div>
         <select id="mi-st" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['For Sale','For Rent','Service'].map(x=>`<option value="${x}" ${s===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Condition</div>
         <select id="mi-cond" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['Brand new','Like new','Slightly used','Good','Freshly made','Made to order','Available'].map(x=>`<option value="${x}" ${cd===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
     </div>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Description</div>
     <textarea id="mi-desc" placeholder="Describe the item, meetup locations, terms..." style="width:100%;height:60px;border-radius:8px;padding:8px 10px;font-size:10px;resize:none;background:#fff;color:#000;margin-bottom:12px">${esc(d)}</textarea>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:6px">Item Photo</div>
     ${itemImg?`
     <div style="position:relative;width:100%;height:120px;border-radius:10px;overflow:hidden;background:#222;display:flex;align-items:center;justify-content:center;margin-bottom:14px">
       <img src="${itemImg}" style="width:100%;height:100%;object-fit:cover;cursor:pointer" data-act="view-img" data-img="${itemImg}">
       <button type="button" data-act="del-item-img" title="Remove picture" style="position:absolute;top:8px;right:8px;width:26px;height:26px;border-radius:50%;background:rgba(0,0,0,.7);color:#fff;display:grid;place-items:center;font-size:13px;font-weight:700;cursor:pointer">✕</button>
       <label style="position:absolute;bottom:8px;left:8px;background:rgba(0,0,0,.7);color:#fff;padding:4px 10px;border-radius:14px;font-size:9.5px;font-weight:600;display:flex;gap:5px;align-items:center;cursor:pointer">
         ${ic('photo',13,'#fff',1.6)} Change photo
         <input id="mi-file-change" type="file" accept="image/*" hidden>
       </label>
     </div>`:
     `<label style="display:flex;gap:8px;align-items:center;height:38px;background:#fff;border-radius:8px;padding:0 12px;font-size:10px;color:#666;cursor:pointer;margin-bottom:14px">
       ${ic('photo',18,'#666',1.4)} Attach item photo
       <input id="mi-file" type="file" accept="image/*" hidden>
     </label>`}

     <button class="btn soft" data-sub-item style="height:36px;font-size:13px">Post Item</button>
   </div>
  </div>`);

  const ov=$('#ov');
  ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  const fIn=$('#mi-file');if(fIn)fIn.onchange=e=>{if(e.target.files[0]){itemImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const fcIn=$('#mi-file-change');if(fcIn)fcIn.onchange=e=>{if(e.target.files[0]){itemImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const dImg=$('[data-act=del-item-img]');if(dImg)dImg.onclick=()=>{itemImg=null;draw(1)};

  $('[data-sub-item]').onclick=()=>{
   const nameVal=$('#mi-name').value.trim();
   const priceVal=parseFloat($('#mi-price').value)||0;
   const catVal=$('#mi-cat').value;
   const stVal=$('#mi-st').value;
   const condVal=$('#mi-cond').value;
   const descVal=$('#mi-desc').value.trim();

   if(!nameVal)return toast('Please enter item name');

   const newItem={
    id:'item_'+Date.now(),
    name:nameVal,
    p:priceVal,
    d:descVal||'Available at MSEUF campus. Message for inquiries.',
    img:itemImg||A('cookies.jpg'),
    st:stVal,
    ago:'Just now',
    cond:condVal,
    cat:catVal,
    seller:ME.name,
    sellerId:ME.id
   };

   MK.unshift(newItem);
   closeOv();
   toast('Item posted to Marketplace!');
   if(cur().name==='market')render();
   else reset('market');
  };
 };
 draw();
}

function openEditItem(itemId){
 const existing=MK.find(x=>x.id===itemId||String(x.id)===String(itemId));
 if(!existing)return toast('Item not found');
 if(!isMyListing(existing))return toast('Only the seller can edit this listing');
 let itemImg=existing.img;
 const draw=(keep)=>{
  const n=keep?$('#mi-name').value:existing.name;
  const p=keep?$('#mi-price').value:existing.p;
  const c=keep?$('#mi-cat').value:(existing.cat||'Foods');
  const s=keep?$('#mi-st').value:(existing.st||'For Sale');
  const cd=keep?$('#mi-cond').value:(existing.cond||'Good');
  const d=keep?$('#mi-desc').value:(existing.d||'');
  overlay(`<div class="dim" data-close></div>
  <div class="sheet sheetcard lg" style="height:670px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:0 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
   <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:8px auto 0"></div>
   <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-top:10px;position:relative">
     Edit Marketplace Item
     <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
   </div>
   <div class="scroll" style="position:static;flex:1;overflow-y:auto;padding:12px 0 16px">
     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Item Name / Title</div>
     <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="mi-name" placeholder="What are you offering?" value="${esc(n)}" style="font-size:10px"></div>
     
     <div style="display:flex;gap:10px;margin-bottom:10px">
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Price (₱)</div>
         <div class="field" style="height:34px;border-radius:8px;background:#fff;padding:0 12px"><input id="mi-price" type="number" placeholder="0 = Inquire" value="${esc(p)}" style="font-size:10px"></div>
       </div>
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Category</div>
         <select id="mi-cat" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['Foods','Services','Rentals','Electronics','Art & Craft','Clothing'].map(x=>`<option value="${x}" ${c===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
     </div>

     <div style="display:flex;gap:10px;margin-bottom:10px">
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Status</div>
         <select id="mi-st" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['For Sale','For Rent','Service'].map(x=>`<option value="${x}" ${s===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
       <div style="flex:1">
         <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Condition</div>
         <select id="mi-cond" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
           ${['Brand new','Like new','Slightly used','Good','Freshly made','Made to order','Available'].map(x=>`<option value="${x}" ${cd===x?'selected':''}>${x}</option>`).join('')}
         </select>
       </div>
     </div>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Description</div>
     <textarea id="mi-desc" placeholder="Describe the item, meetup locations, terms..." style="width:100%;height:60px;border-radius:8px;padding:8px 10px;font-size:10px;resize:none;background:#fff;color:#000;margin-bottom:12px">${esc(d)}</textarea>

     <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:6px">Item Photo</div>
     ${itemImg?`
     <div style="position:relative;width:100%;height:120px;border-radius:10px;overflow:hidden;background:#222;display:flex;align-items:center;justify-content:center;margin-bottom:14px">
       <img src="${itemImg}" style="width:100%;height:100%;object-fit:cover;cursor:pointer" data-act="view-img" data-img="${itemImg}">
       <button type="button" data-act="del-item-img" title="Remove picture" style="position:absolute;top:8px;right:8px;width:26px;height:26px;border-radius:50%;background:rgba(0,0,0,.7);color:#fff;display:grid;place-items:center;font-size:13px;font-weight:700;cursor:pointer">✕</button>
       <label style="position:absolute;bottom:8px;left:8px;background:rgba(0,0,0,.7);color:#fff;padding:4px 10px;border-radius:14px;font-size:9.5px;font-weight:600;display:flex;gap:5px;align-items:center;cursor:pointer">
         ${ic('photo',13,'#fff',1.6)} Change photo
         <input id="mi-file-change" type="file" accept="image/*" hidden>
       </label>
     </div>`:
     `<label style="display:flex;gap:8px;align-items:center;height:38px;background:#fff;border-radius:8px;padding:0 12px;font-size:10px;color:#666;cursor:pointer;margin-bottom:14px">
       ${ic('photo',18,'#666',1.4)} Attach item photo
       <input id="mi-file" type="file" accept="image/*" hidden>
     </label>`}

     <button class="btn soft" data-sub-saveitem style="height:36px;font-size:13px">Save Changes</button>
   </div>
  </div>`);

  const ov=$('#ov');
  ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  const fIn=$('#mi-file');if(fIn)fIn.onchange=e=>{if(e.target.files[0]){itemImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const fcIn=$('#mi-file-change');if(fcIn)fcIn.onchange=e=>{if(e.target.files[0]){itemImg=URL.createObjectURL(e.target.files[0]);draw(1)}};
  const dImg=$('[data-act=del-item-img]');if(dImg)dImg.onclick=()=>{itemImg=null;draw(1)};

  $('[data-sub-saveitem]').onclick=()=>{
   const nameVal=$('#mi-name').value.trim();
   const priceVal=parseFloat($('#mi-price').value)||0;
   const catVal=$('#mi-cat').value;
   const stVal=$('#mi-st').value;
   const condVal=$('#mi-cond').value;
   const descVal=$('#mi-desc').value.trim();

   if(!nameVal)return toast('Please enter item name');

   existing.name=nameVal;
   existing.p=priceVal;
   existing.cat=catVal;
   existing.st=stVal;
   existing.cond=condVal;
   existing.d=descVal;
   if(itemImg)existing.img=itemImg;

   closeOv();
   toast('Marketplace item updated!');
   render();
  };
 };
 draw();
}

/* 6. Post Comments Sheet */
function openComments(postId){
 const p=POSTS.find(x=>x.id===postId);
 if(!p)return;
 p.comments=p.comments||[];
 const draw=()=>{
  overlay(`<div class="dim" data-close></div>
  <div class="sheet sheetcard lg" style="height:540px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:0 18px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
   <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:8px auto 0"></div>
   <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-top:10px;position:relative">
     Comments (${p.comments.length})
     <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
   </div>
   <div class="scroll" id="cmt-list" style="position:static;flex:1;overflow-y:auto;padding:12px 0">
     ${p.comments.map(c=>`<div style="display:flex;gap:10px;margin-bottom:12px;background:#fff;padding:8px 10px;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.08)">
       <img src="${c.av||A('profile.jpg')}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex:none">
       <div style="flex:1">
         <div style="display:flex;justify-content:space-between;align-items:center">
           <b style="font-size:10px;color:#a31f1f">${esc(c.user)}</b>
           <small style="font-size:7.5px;color:#888">${esc(c.t||'now')}</small>
         </div>
         <p style="font-size:9.5px;color:#333;margin-top:2px;line-height:1.3">${esc(c.text)}</p>
       </div>
     </div>`).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:11px">No comments yet. Be the first to comment!</div>'}
   </div>
   <div style="padding:10px 0 18px;display:flex;gap:8px;align-items:center">
     <img src="${ME.av}" style="width:30px;height:30px;border-radius:50%;object-fit:cover;flex:none">
     <div style="flex:1;background:#fff;border-radius:20px;height:36px;display:flex;align-items:center;padding:0 12px;box-shadow:0 1px 4px rgba(0,0,0,.1)">
       <input id="ci" placeholder="Write a comment..." style="width:100%;font-size:11px;background:none;color:#333">
     </div>
     <button class="btn soft" data-send-cmt style="width:48px;height:36px;border-radius:18px;font-size:11px;padding:0;display:grid;place-items:center">${ic('send',16,'#fff',1.6)}</button>
   </div>
  </div>`);

  const ov=$('#ov');
  ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  const sendCmt=()=>{
   const input=$('#ci');
   const text=input?input.value.trim():'';
   if(!text)return;
   p.comments.push({user:ME.name,av:ME.av,t:'now',text});
   p.c=p.comments.length;
   draw();
   const listEl=$('#cmt-list');
   if(listEl)listEl.scrollTop=listEl.scrollHeight;
   updatePostVotes(p.id);
  };
  $('[data-send-cmt]').onclick=sendCmt;
  const cIn=$('#ci');if(cIn)cIn.onkeydown=e=>{if(e.key==='Enter')sendCmt()};
 };
 draw();
}

/* 7. Home Feed Filter Modal */
function openFilter(){
 const f=S.filt;let t={...f};
 const draw=()=>{
  overlay(`<div class="dim" data-close></div><div class="pop lg" style="left:176px;top:287px;width:214px;height:272px;padding:14px;background:rgba(255,255,255,.55)">
  <div style="color:#a31f1f;font-size:14px;font-weight:600;display:flex;gap:8px;align-items:center"><span data-close style="cursor:pointer">✕</span>Filter Post</div>
  <div style="font-size:12px;font-weight:600;margin:14px 0 8px">Sort by</div>${['Latest','Most like','Most comment'].map(x=>`<span class="chip ${t.sort===x?'on':''}" data-s="${x}">${x}</span>`).join('')}
  <div style="font-size:12px;font-weight:600;margin:6px 0 8px">Time range</div>${['All','Today','This week','This month'].map(x=>`<span class="chip ${t.range===x?'on':''}" data-r="${x}">${x}</span>`).join('')}
  <button class="btn soft" data-ap style="height:26px;font-size:11px;margin-top:20px">Apply filter</button>
  <div style="text-align:center;color:#a31f1f;font-size:10px;margin-top:10px;cursor:pointer" data-rs>Reset</div></div>`);
  $('#ov').querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  $('#ov').querySelectorAll('[data-s]').forEach(e=>e.onclick=()=>{t.sort=e.dataset.s;draw()});
  $('#ov').querySelectorAll('[data-r]').forEach(e=>e.onclick=()=>{t.range=e.dataset.r;draw()});
  $('[data-ap]').onclick=()=>{S.filt=t;closeOv();render()};
  $('[data-rs]').onclick=()=>{S.filt={sort:'Latest',range:'All'};closeOv();render()};
 };
 draw();
}

/* 8. Organization Filter Modal */
function openOrgFilter(){
 let t={...S.orgFilt};
 const draw=()=>{
  overlay(`<div class="dim" data-close></div>
  <div class="pop lg" style="left:150px;top:250px;width:240px;padding:16px;background:rgba(255,255,255,.65)">
   <div style="color:#a31f1f;font-size:14px;font-weight:600;display:flex;gap:8px;align-items:center"><span data-close style="cursor:pointer">✕</span>Filter Organization</div>
   <div style="font-size:11px;font-weight:600;margin:12px 0 6px">Organization Type</div>
   ${['All','University','Department'].map(x=>`<span class="chip ${t.type===x?'on':''}" data-ot="${x}">${x}</span>`).join('')}
   <div style="font-size:11px;font-weight:600;margin:8px 0 6px">Department</div>
   ${['All','CCMS','CHTM'].map(x=>`<span class="chip ${t.dept===x?'on':''}" data-od="${x}">${x}</span>`).join('')}
   <div style="font-size:11px;font-weight:600;margin:8px 0 6px">Sort by</div>
   ${['Default','Name (A-Z)','Most Members'].map(x=>`<span class="chip ${t.sort===x?'on':''}" data-os="${x}">${x}</span>`).join('')}
   <button class="btn soft" data-ap-org style="height:28px;font-size:11px;margin-top:14px">Apply filter</button>
   <div style="text-align:center;color:#a31f1f;font-size:10px;margin-top:8px;cursor:pointer" data-rs-org>Reset</div>
  </div>`);
  $('#ov').querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  $('#ov').querySelectorAll('[data-ot]').forEach(e=>e.onclick=()=>{t.type=e.dataset.ot;draw()});
  $('#ov').querySelectorAll('[data-od]').forEach(e=>e.onclick=()=>{t.dept=e.dataset.od;draw()});
  $('#ov').querySelectorAll('[data-os]').forEach(e=>e.onclick=()=>{t.sort=e.dataset.os;draw()});
  $('[data-ap-org]').onclick=()=>{S.orgFilt=t;closeOv();render()};
  $('[data-rs-org]').onclick=()=>{S.orgFilt={type:'All',dept:'All',sort:'Default'};closeOv();render()};
 };
 draw();
}

/* 9. Marketplace Filter Modal */
function openMarketFilter(){
 let t={...S.marketFilt};
 const draw=()=>{
  overlay(`<div class="dim" data-close></div>
  <div class="pop lg" style="left:140px;top:210px;width:250px;padding:16px;background:rgba(255,255,255,.65)">
   <div style="color:#a31f1f;font-size:14px;font-weight:600;display:flex;gap:8px;align-items:center"><span data-close style="cursor:pointer">✕</span>Filter Marketplace</div>
   <div style="font-size:11px;font-weight:600;margin:12px 0 6px">Price Range</div>
   ${['All','Under ₱100','₱100 - ₱500','Above ₱500','Free / Inquire'].map(x=>`<span class="chip ${t.price===x?'on':''}" data-mp="${x}">${x}</span>`).join('')}
   <div style="font-size:11px;font-weight:600;margin:8px 0 6px">Listing Status</div>
   ${['All','For Sale','For Rent','Service','Available'].map(x=>`<span class="chip ${t.status===x?'on':''}" data-mst="${x}">${x}</span>`).join('')}
   <div style="font-size:11px;font-weight:600;margin:8px 0 6px">Sort by</div>
   ${['Latest','Price: Low to High','Price: High to Low'].map(x=>`<span class="chip ${t.sort===x?'on':''}" data-msort="${x}">${x}</span>`).join('')}
   <button class="btn soft" data-ap-mk style="height:28px;font-size:11px;margin-top:14px">Apply filter</button>
   <div style="text-align:center;color:#a31f1f;font-size:10px;margin-top:8px;cursor:pointer" data-rs-mk>Reset</div>
  </div>`);
  $('#ov').querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
  $('#ov').querySelectorAll('[data-mp]').forEach(e=>e.onclick=()=>{t.price=e.dataset.mp;draw()});
  $('#ov').querySelectorAll('[data-mst]').forEach(e=>e.onclick=()=>{t.status=e.dataset.mst;draw()});
  $('#ov').querySelectorAll('[data-msort]').forEach(e=>e.onclick=()=>{t.sort=e.dataset.msort;draw()});
  $('[data-ap-mk]').onclick=()=>{S.marketFilt=t;closeOv();render()};
  $('[data-rs-mk]').onclick=()=>{S.marketFilt={price:'All',status:'All',sort:'Latest'};closeOv();render()};
 };
 draw();
}

/* 10. Post 3-Dots Menu */
function openPostMenu(id,btn){
 const p=POSTS.find(x=>x.id===id);
 const isMine=isMyPost(p);
 const r=btn.getBoundingClientRect(),pr=phone.getBoundingClientRect(),sc=pr.width/402;
 const y=Math.max(10,Math.min(700,(r.bottom-pr.top)/sc)),x=Math.max(10,Math.min(190,(r.right-pr.left)/sc-200));
 
 const items=[['flag','Report Post','rep'],['hide','Hide Post','hid']];
 if(isMine)items.push(['trash','Delete Post','del']);

 overlay(`<div class="dim" data-close style="background:transparent"></div>
 <div class="pop lg" style="left:${x}px;top:${y}px;width:190px;padding:6px 0;background:rgba(255,255,255,.85)">
   ${items.map((m,i)=>`<div data-m="${m[2]}" style="display:flex;gap:12px;align-items:center;padding:10px 16px;font-size:12px;cursor:pointer;color:${m[2]==='del'?'#c42b2b':'#222'}">${ic(m[0],18,m[2]==='del'?'#c42b2b':'#222',1.5)}${m[1]}</div>`).join('')}
 </div>`);

 $('[data-close]').onclick=closeOv;
 $('[data-m=rep]').onclick=()=>{closeOv();toast('Post reported. Thank you!')};
 $('[data-m=hid]').onclick=()=>{S.hidden.add(id);closeOv();render();toast('Post hidden')};
 const delBtn=$('[data-m=del]');
 if(delBtn){
  delBtn.onclick=()=>{
   POSTS=POSTS.filter(x=>x.id!==id);
   closeOv();
   render();
   toast('Post deleted');
  };
 }
}

/* 11. Organization Admin: Add Officer Sheet */
function openAddOfficer(orgId){
 const o=ORGS.find(x=>x.id===orgId||String(x.id)===String(orgId));
 if(!o)return;
 overlay(`<div class="dim" data-close></div>
 <div class="sheet sheetcard lg" style="height:360px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:16px 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff">
  <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:0 auto 12px"></div>
  <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-bottom:14px;position:relative">
    Add Organization Officer
    <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
  </div>
  <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Officer Full Name</div>
  <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="ao-name" placeholder="e.g. Christian Alcala" style="font-size:10px"></div>
  <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Position / Role</div>
  <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:12px;padding:0 12px"><input id="ao-role" placeholder="e.g. Public Relations Officer" style="font-size:10px"></div>
  <label style="display:flex;gap:8px;align-items:center;font-size:10px;font-weight:600;margin-bottom:16px;cursor:pointer">
    <input type="checkbox" id="ao-edit" checked style="accent-color:#c42b2b;width:16px;height:16px">
    Grant Edit Access (Can edit requirements & activities)
  </label>
  <button class="btn soft" data-sub-officer style="height:36px;font-size:13px">Add Officer</button>
 </div>`);
 const ov=$('#ov');
 ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
 $('[data-sub-officer]').onclick=()=>{
  const n=$('#ao-name').value.trim();
  const r=$('#ao-role').value.trim();
  const canEdit=$('#ao-edit').checked;
  if(!n||!r)return toast('Please enter name and role');
  o.officers=o.officers||[];
  o.officers.push({name:n,role:r,av:A('user2.jpg'),canEdit,id:'off_'+Date.now()});
  closeOv();
  toast(`Officer ${n} added!`);
  render();
 };
}

/* 12. Organization Officer: Edit Requirements Sheet */
function openEditRequirements(orgId){
 const o=ORGS.find(x=>x.id===orgId||String(x.id)===String(orgId));
 if(!o)return;
 const reqsText=(o.reqs||[]).join('\n');
 overlay(`<div class="dim" data-close></div>
 <div class="sheet sheetcard lg" style="height:440px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:16px 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
  <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:0 auto 10px"></div>
  <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-bottom:12px;position:relative">
    Edit Requirements & Period
    <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
  </div>
  <div class="scroll" style="position:static;flex:1;overflow-y:auto;padding-bottom:12px">
    <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Requirements List (One per line)</div>
    <textarea id="er-text" style="width:100%;height:140px;border-radius:8px;padding:8px 10px;font-size:10px;resize:none;background:#fff;color:#000;margin-bottom:10px">${esc(reqsText)}</textarea>
    <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Application Period</div>
    <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:14px;padding:0 12px"><input id="er-period" value="${esc(o.period||'Sept 1 - Sept 30, 2025')}" style="font-size:10px"></div>
    <button class="btn soft" data-sub-reqs style="height:36px;font-size:13px">Save Requirements</button>
  </div>
 </div>`);
 const ov=$('#ov');
 ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
 $('[data-sub-reqs]').onclick=()=>{
  const txt=$('#er-text').value.trim();
  const per=$('#er-period').value.trim();
  o.reqs=txt?txt.split('\n').map(s=>s.trim()).filter(Boolean):[];
  o.period=per||'Open Year-round';
  closeOv();
  toast('Requirements updated successfully!');
  render();
 };
}

/* 13. Organization Officer: Add Activity Sheet */
function openAddActivity(orgId){
 const o=ORGS.find(x=>x.id===orgId||String(x.id)===String(orgId));
 if(!o)return;
 overlay(`<div class="dim" data-close></div>
 <div class="sheet sheetcard lg" style="height:420px;background:rgba(255,235,235,.6);backdrop-filter:blur(26px);color:#000;padding:16px 20px;border-radius:36px 36px 0 0;box-shadow:inset 0 0 20px rgba(255,255,255,.6),inset 0 0 0 1px #fff;display:flex;flex-direction:column">
  <div style="width:42px;height:4px;border-radius:3px;background:#999;margin:0 auto 10px"></div>
  <div style="text-align:center;color:#c42b2b;font-size:15px;font-weight:700;margin-bottom:12px;position:relative">
    Add Organization Activity
    <span data-close style="position:absolute;right:0;top:-2px;font-size:20px;cursor:pointer;font-weight:400">✕</span>
  </div>
  <div class="scroll" style="position:static;flex:1;overflow-y:auto;padding-bottom:12px">
    <div style="display:flex;gap:10px;margin-bottom:10px">
      <div style="flex:1">
        <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Tag / Category</div>
        <select id="aa-tag" style="width:100%;height:34px;border-radius:8px;background:#fff;padding:0 8px;font-size:10px;color:#333">
          ${[o.short+' Official',o.short+' Events','Workshop','General Assembly','Announcement'].map(x=>`<option value="${x}">${x}</option>`).join('')}
        </select>
      </div>
    </div>
    <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Activity Title</div>
    <div class="field" style="height:34px;border-radius:8px;background:#fff;margin-bottom:10px;padding:0 12px"><input id="aa-title" placeholder="e.g. General Assembly 2026" style="font-size:10px"></div>
    <div style="font-size:9px;font-weight:700;color:#555;margin-bottom:4px">Details & Schedule</div>
    <textarea id="aa-desc" placeholder="Date, venue, guidelines..." style="width:100%;height:68px;border-radius:8px;padding:8px 10px;font-size:10px;resize:none;background:#fff;color:#000;margin-bottom:10px"></textarea>
    <label style="display:flex;gap:8px;align-items:center;font-size:10px;font-weight:600;margin-bottom:14px;cursor:pointer">
      <input type="checkbox" id="aa-post" checked style="accent-color:#c42b2b;width:16px;height:16px">
      Also publish to Campus & Org Feed as ${esc(o.short)}
    </label>
    <button class="btn soft" data-sub-act style="height:36px;font-size:13px">Add Activity</button>
  </div>
 </div>`);
 const ov=$('#ov');
 ov.querySelectorAll('[data-close]').forEach(e=>e.onclick=closeOv);
 $('[data-sub-act]').onclick=()=>{
  const tag=$('#aa-tag').value;
  const title=$('#aa-title').value.trim();
  const desc=$('#aa-desc').value.trim();
  const alsoPost=$('#aa-post').checked;
  if(!title||!desc)return toast('Please enter title and details');

  o.acts=o.acts||[];
  o.acts.unshift([tag,title,desc]);

  if(alsoPost){
   POSTS.unshift({
    id:Date.now(),
    cat:['org','campus'],
    user:o.short,
    orgId:o.id,
    v:1,
    sub:`${o.type} Organization`,
    t:'now',
    m:0,
    av:o.logo,
    title:title,
    text:desc,
    h:180,
    fit:'cover',
    up:0,
    c:0,
    comments:[]
   });
  }

  closeOv();
  toast('Activity added successfully!');
  render();
 };
}

function updatePostVotes(id){
 const p=POSTS.find(x=>x.id===id);
 if(!p)return;
 const card=$(`.post[data-pid="${id}"]`);
 if(!card){render();return;}
 const ft=card.querySelector('.ft');
 if(ft)ft.innerHTML=voteBar(p);
}

/* ---------- global events ---------- */
phone.addEventListener('click',e=>{
 const t=e.target.closest('[data-go],[data-back],[data-nav],[data-act],[data-eye],[data-mcat]');
 if(!t)return;

 if(t.dataset.back!==undefined)return back();
 if(t.dataset.go){return go(t.dataset.go,t.dataset.p?JSON.parse(t.dataset.p):{})}
 if(t.dataset.nav){
  S.q='';
  const m={home:'home',org:'org',market:'market',msg:'msg',profile:'profile'};
  return reset(m[t.dataset.nav]);
 }
 if(t.dataset.eye){const i=document.getElementById(t.dataset.eye);if(i)i.type=i.type==='password'?'text':'password';return}

 const a=t.dataset.act;
 if(a==='create-menu'||a==='newpost')openCreateMenu();
 else if(a==='filter')openFilter();
 else if(a==='filter-org')openOrgFilter();
 else if(a==='filter-market')openMarketFilter();
 else if(a==='pmenu')openPostMenu(+t.dataset.id,t);
 else if(a==='like'){
  const id=+t.dataset.id;
  if(S.liked.has(id)){
   S.liked.delete(id);
  }else{
   S.liked.add(id);
   S.disliked.delete(id);
  }
  updatePostVotes(id);
 }
 else if(a==='dislike'){
  const id=+t.dataset.id;
  if(S.disliked.has(id)){
   S.disliked.delete(id);
  }else{
   S.disliked.add(id);
   S.liked.delete(id);
  }
  updatePostVotes(id);
 }
 else if(a==='cmt')openComments(+t.dataset.id);
 else if(a==='postitem')openPostItem();
 else if(a==='edit-item')openEditItem(t.dataset.id);
 else if(a==='view-img')openImageViewer(t.dataset.img||t.src,t.dataset.caption||'');
 else if(a==='go-org'){const oId=t.dataset.oid;if(oId)go('orgd',{id:oId})}
 else if(a==='open-add-officer')openAddOfficer(t.dataset.oid||(cur().p&&cur().p.id));
 else if(a==='open-edit-reqs')openEditRequirements(t.dataset.oid||(cur().p&&cur().p.id));
 else if(a==='open-add-act')openAddActivity(t.dataset.oid||(cur().p&&cur().p.id));
 else if(a==='del-act'){
  const o=ORGS.find(x=>x.id===t.dataset.oid||String(x.id)===String(t.dataset.oid));
  if(o&&o.acts){
   o.acts.splice(+t.dataset.idx,1);
   toast('Activity removed');
   render();
  }
 }
 else if(a==='toggle-officer-perm'){
  const o=ORGS.find(x=>x.id===t.dataset.oid||String(x.id)===String(t.dataset.oid));
  if(o&&o.officers){
   const off=o.officers[+t.dataset.idx];
   if(off){
    off.canEdit=!off.canEdit;
    toast(`Edit access ${off.canEdit?'granted to':'revoked from'} ${off.name}`);
    render();
   }
  }
 }
 else if(a==='select-mcat'){
  const c=t.dataset.cat;
  S.marketCat=(S.marketCat===c)?'All':c;
  render();
 }
 else if(a==='market-see-all'){
  S.marketCat='All';
  render();
 }
 else if(a==='notif-click'){
  const idx=+t.dataset.idx;
  const n=NOTIFS[idx];
  if(n&&n[6]){
   const target=n[6];
   if(target.type==='post'){
    const postItem=POSTS.find(x=>x.id===target.id);
    if(target.id===12){
     reset('profile');
    }else if(postItem){
     if(postItem.cat.includes('campus')){
      S.feed='campus';
      reset('home');
     }else if(postItem.cat.includes('social')){
      S.feed='social';
      reset('home');
     }else if(postItem.cat.includes('org')){
      reset('org');
     }else{
      S.feed='trending';
      reset('home');
     }
    }else{
     reset('home');
    }
    setTimeout(()=>{
     const el=$(`.post[data-pid="${target.id}"]`);
     if(el){
      el.scrollIntoView({behavior:'smooth',block:'center'});
      el.style.transition='box-shadow .3s, transform .3s';
      el.style.boxShadow='0 0 18px rgba(172,38,38,.8)';
      el.style.transform='scale(1.02)';
      setTimeout(()=>{
       el.style.boxShadow='';
       el.style.transform='';
      },1600);
     }
    },350);
   }else if(target.type==='org'){
    go('orgd',{id:target.id});
   }else if(target.type==='convo'){
    reset('msg');
   }
  }
 }
});

/* Search input handler: filters content dynamically in-place without unmounting search input or triggering resize/jumps */
phone.addEventListener('input',e=>{
 if(e.target.id==='q'){
  S.q=e.target.value;
  const screenName=cur().name;
  if(screenName==='home'){
   const pContainer=$('#home-posts');
   if(pContainer){
    const list=filteredPosts(S.feed);
    pContainer.innerHTML=list.map(p=>postCard(p)).join('')||'<div style="text-align:center;padding:60px;opacity:.7;font-size:13px">No posts match your search</div>';
   }
  }else if(screenName==='org'){
   const pContainer=$('#org-posts');
   if(pContainer){
    const orgPosts=filteredOrgPosts();
    pContainer.innerHTML=orgPosts.map(p=>postCard(p)).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:12px">No organization updates match</div>';
   }
  }else if(screenName==='market'){
   const mGrid=$('#market-grid');
   if(mGrid){
    const list=filteredMarket();
    mGrid.innerHTML=list.map(m=>`<div class="mk" data-go="mkd" data-p='{"id":"${m.id}"}' style="cursor:pointer">
      <img src="${m.img}" style="${m.id==='tee'?'object-fit:contain;background:#fff':''}">
      <div class="p ${m.sold?'sold':''}">${m.p?'₱'+m.p:'Inquire'}</div>
      <div class="n">${esc(m.name)}</div>
      <div class="d">${esc(m.d)}</div>
      <div class="m">${esc(m.st)} &nbsp;• ${esc(m.ago)}</div>
    </div>`).join('')||'<div style="grid-column:1/span 2;text-align:center;padding:40px;color:#fff;opacity:.7;font-size:12px">No items match your search</div>';
   }
  }else if(screenName==='msg'){
   const mList=$('#msg-list');
   if(mList){
    const convos=CONVOS.filter(c=>!S.q||(c.name+' '+c.last).toLowerCase().includes(S.q.toLowerCase()));
    mList.innerHTML=convos.map((c,i)=>`<div class="lg msg-row" data-go="convo" data-p='{"id":"${c.id}"}' style="cursor:pointer;background:${i===0?'linear-gradient(120deg,rgba(255,225,200,.6),rgba(255,235,225,.45))':'rgba(255,255,255,.2)'}">
      ${c.group?`<span style="width:32px;height:32px;border-radius:50%;background:#b42222;display:grid;place-items:center">${ic('users',16,'#fff',1.6)}</span>`:`<img src="${c.av}">`}
      <div style="flex:1;min-width:0"><b style="font-size:11px;display:block">${esc(c.name)}</b><span style="font-size:8.5px;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block">${esc(c.last)}</span></div>
      <div style="text-align:right;font-size:8px;opacity:.85;align-self:flex-start">${c.time}${c.badge?`<div style="margin:6px 0 0 auto;width:15px;height:15px;border-radius:50%;background:#c42b2b;font-size:8px;font-weight:700;display:grid;place-items:center">${c.badge}</div>`:''}</div>
    </div>`).join('')||'<div style="text-align:center;padding:40px;opacity:.7;font-size:12px">No conversations found</div>';
   }
  }
 }
});

/* ---------- boot & responsive scaling ---------- */
let prevWidth=window.innerWidth;
function fit(){
 const active=document.activeElement;
 const isInputActive=active&&(active.tagName==='INPUT'||active.tagName==='TEXTAREA');
 if(isInputActive&&Math.abs(window.innerWidth-prevWidth)<25){
  return;
 }
 prevWidth=window.innerWidth;
 const s=Math.min(1,(window.innerHeight-16)/874,(window.innerWidth-16)/402);
 phone.style.transform=`scale(${s})`;
}
addEventListener('resize',fit);
fit();

const start=new URLSearchParams(location.search).get('s');
if(start&&V[start])reset(start,{});
else reset('onb',{i:0});