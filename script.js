const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyPngUTqScOmxc5chKU1gYg8I2M_369JA_drkiNN-z0kawc__V-5y9JFqIqKO9qSBzA/exec';

// ── PERSONAS ──────────────────────────────────────────────────────────
const PERSONAS = [
  {
    key:'maria', name:'María', age:38, tag:'Texas · here 15 years',
    color:'#C0DD97', dark:'#3B6D11', shape:'circle',
    lines:[
      'Came from Mexico without papers 15 years ago.',
      'Has two children born here who are American citizens.',
      'Runs a small cleaning business and pays taxes.',
      'Has never gone back. This is her whole life.'
    ],
    fact:'42% of undocumented immigrants in the US entered legally on a valid visa — they did not cross a border without papers.',
    cite:{text:'Pew Research Center, 2022 — "Unauthorized Immigrant Population"', url:'https://www.pewresearch.org/short-reads/2023/11/16/what-we-know-about-unauthorized-immigrants-living-in-the-us/'}
  },
  {
    key:'connor', name:'Connor', age:29, tag:'Boston · here 4 years',
    color:'#B5D4F4', dark:'#185FA5', shape:'square',
    lines:[
      'Irish, came on a tourist visa four years ago and never left.',
      'Works construction in South Boston, paid in cash.',
      'White, English is his first language.',
      'No legal status — the same situation as María on paper.'
    ],
    fact:'Irish nationals are among the larger undocumented populations in the US, with estimates ranging from 10,000 to over 50,000.',
    cite:{text:'Irish International Immigrant Center / Migration Policy Institute estimates', url:'https://www.migrationpolicy.org'}
  },
  {
    key:'fatima', name:'Fatima', age:34, tag:'Michigan · here 9 years',
    color:'#F5C4B3', dark:'#993C1D', shape:'circle',
    lines:[
      'Fled Syria in 2015 with her two children.',
      'Spent two years being vetted by US agencies before being admitted.',
      'Works as a medical interpreter. Wears a hijab.',
      'Is applying for US citizenship.'
    ],
    fact:'The US refugee admissions process involves 9 separate federal agencies and takes an average of 18–24 months — it is the most rigorous legal entry process available.',
    cite:{text:'US State Department, Bureau of Population, Refugees, and Migration, 2023', url:'https://www.state.gov/refugee-admissions/'}
  },
  {
    key:'jamal', name:'Jamal', age:44, tag:'Minneapolis · US citizen since 2010',
    color:'#FAC775', dark:'#854F0B', shape:'hexagon',
    lines:[
      'Came from Somalia as a refugee in 2003.',
      'Became a US citizen in 2010 — took the oath, has the passport.',
      'Has lived here for over 20 years and owns a restaurant.',
      'Is still regularly asked where he is "really from."'
    ],
    fact:'A landmark study found that résumés with white-sounding names received 50% more callbacks than identical résumés with Black-sounding names.',
    cite:{text:'Bertrand & Mullainathan, "Are Emily and Greg More Employable than Lakisha and Jamal?" American Economic Review, 2004', url:'https://www.aeaweb.org/articles?id=10.1257/0002828042002561'}
  },
  {
    key:'diego', name:'Diego', age:24, tag:'San Antonio · arrived age 2',
    color:'#9FE1CB', dark:'#0F6E56', shape:'diamond',
    lines:[
      'His parents brought him from Honduras when he was two years old.',
      'Grew up in San Antonio, speaks only English, has never been back.',
      'Works as a high school PE teacher.',
      'His legal protection must be renewed every two years and can be cancelled at any time.'
    ],
    fact:'Approximately 580,000 people in the US are in Diego\'s situation — brought here as children, living in the only country they know, with a legal status that depends on political decisions.',
    cite:{text:'US Citizenship and Immigration Services, DACA data, 2024', url:'https://www.uscis.gov/DACA'}
  },
  {
    key:'lena', name:'Lena', age:19, tag:'Ohio · adopted from China at age 3',
    color:'#CEC6F6', dark:'#534AB7', shape:'square',
    lines:[
      'Adopted from China at age three by American parents in Ohio.',
      'Has no memory of China and speaks no Mandarin.',
      'Found out at 16 — when she applied for a driver\'s license — that she had no legal status.',
      'Her parents never filed the required paperwork. It is taking years to fix.'
    ],
    fact:'Tens of thousands of international adoptees in the US may lack citizenship due to incomplete paperwork — a gap in the law that Congress has not fully closed despite multiple attempts.',
    cite:{text:'Adoptee Rights Campaign; Child Citizenship Act of 2000 legislative history', url:'https://www.adopteerightslaw.com'}
  },
  {
    key:'priya', name:'Priya', age:38, tag:'California · here 12 years',
    color:'#F5C4B3', dark:'#993C1D', shape:'triangle',
    lines:[
      'Came from India on a student visa, completed a PhD in engineering.',
      'Has worked at a tech company for 10 years on a visa tied to her employer — if she loses her job she has 60 days to leave.',
      'Earns $210,000 a year. Has been in the legal green card queue for 11 years.',
      'At current processing rates, she may wait another 30–50 years.'
    ],
    fact:'Due to per-country caps on green cards, an Indian national applying today for an employment-based green card faces a wait time estimated at 50 to over 100 years.',
    cite:{text:'Bier, D., CATO Institute, "Employment-Based Green Card Backlog," 2020', url:'https://www.cato.org/blog/employment-based-green-card-backlog-reached-record-12-years'}
  },
  {
    key:'yemi', name:'Yemi', age:35, tag:'Columbus, Ohio · born here',
    color:'#F4C0D1', dark:'#993356', shape:'diamond',
    lines:[
      'Born in Columbus, Ohio. Both parents came from Nigeria in the 1980s.',
      'Has never lived anywhere outside Ohio. Speaks no Yoruba.',
      'Holds an American passport — same as anyone born here.',
      'Is regularly asked where she is "really from."'
    ],
    fact:'A Pew Research study found that 2nd-generation Americans — born here to at least one immigrant parent — report frequent experiences of being treated as foreign, including being asked where they "really" come from.',
    cite:{text:'Pew Research Center, "Second-Generation Americans," 2013', url:'https://www.pewresearch.org/social-trends/2013/02/07/second-generation-americans/'}
  },
  {
    key:'nadia', name:'Nadia', age:28, tag:'Tehran-born · just arrived in the US',
    color:'#FAC775', dark:'#854F0B', shape:'circle',
    lines:[
      'Born in Tehran to an American mother and Iranian father.',
      'Grew up entirely in Iran — went to school there, speaks Farsi as her first language.',
      'Just arrived in the US for the first time at age 28.',
      'She is a US citizen by birth. The passport was always hers. She just never used it.'
    ],
    fact:'US citizenship can be passed to a child born abroad if at least one parent is a US citizen who has lived in the US for at least 5 years — no application required at birth.',
    cite:{text:'Immigration and Nationality Act, Section 301; US State Department Consular Affairs', url:'https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Citizenship-By-Birth-Abroad.html'}
  }
];

const EMOTIONS = [
  {val:'sympathetic',label:'Sympathetic'},
  {val:'concerned',  label:'Concerned'},
  {val:'conflicted', label:'Conflicted'},
  {val:'indifferent',label:'Indifferent'},
  {val:'afraid',     label:'Afraid'},
  {val:'unsure',     label:'Unsure'}
];

const J_QUESTIONS = {
  immigrant: 'Does this person feel like an immigrant to you?',
  belongs:   'Does this person belong here?',
  stay:      'Should this person be allowed to stay?'
};

const BEAT_ORDER   = ['emotion','immigrant','belongs','stay'];
const BEAT_LABELS  = {emotion:'First reaction',immigrant:'Feels like immigrant?',belongs:'Belongs here?',stay:'Allowed to stay?'};



const TIMELINE = [
  {
    title: "Chinese Exclusion Act",
    year: "1882",
    subtitle: "First major federal immigration restriction",

    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chinese_exclusion_cartoon.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Angel_Island_Immigration_Station.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Chinese_railroad_workers.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/SF_chinatown_1880.jpg"
    ],

    allowed: "Non-Chinese immigrants",
    excluded: "Chinese laborers",
    citizenship: "Chinese immigrants could never become citizens",

    change: "Immigration became about filtering people, not just movement",

    reflection: "You likely didn’t apply the word 'immigrant' evenly. Some people felt like immigrants immediately. Others didn’t. That instinct has a history."
  }
];

// ── PART THREE: POLICY DATA ────────────────────────────────────────────
const policies = [
  { year: "1600s-1770s", title: "Colonial Settlement", type: "Exclusion", description: "European settlers sought economic and political freedom while forced migrants—enslaved Africans and indentured servants—had no choice.", impact: "Set foundation for race-based hierarchy in America.", note: "Quick naturalization incentivized settlement but excluded non-Europeans." },
  { year: "1790", title: "Naturalization Act", type: "Citizenship", description: "First federal naturalization law established citizenship exclusively for 'free white persons' of good moral character after 2 years of residency.", impact: "Explicitly written racial exclusion into US law.", note: "Non-whites, indentured servants, and enslaved people categorically barred." },
  { year: "1798", title: "Alien and Sedition Acts", type: "Enforcement", description: "Residency requirement for naturalization jumped from 5 to 14 years. President granted sweeping power to arrest and deport 'dangerous' aliens without due process.", impact: "Turned immigration enforcement into a political weapon.", note: "Targeted noncitizens from 'hostile nations' and anyone deemed a threat." },
  { year: "1808", title: "Slave Trade Prohibition", type: "Exclusion", description: "Federal law banned the transatlantic slave trade, effective January 1, 1808. However, enslavement continued and was never addressed.", impact: "Slavery remained legal; enslaved people stayed ineligible for citizenship.", note: "Weak enforcement allowed illegal smuggling for decades." },
  { year: "1857", title: "Dred Scott v. Sandford", type: "Court Decision", description: "Supreme Court ruled that no Black person—enslaved or free—could be a US citizen. Chief Justice Taney declared Blacks had 'no rights which the white man was bound to respect.'", impact: "Stripped citizenship from free Black Americans.", note: "Directly precipitated Civil War tensions. Overturned 87 years later." },
  { year: "1868", title: "14th Amendment", type: "Constitutional Reform", description: "Birthright citizenship established for all persons born or naturalized in the US, regardless of race. This overturned Dred Scott and extended citizenship to freed enslaved people.", impact: "Citizenship based on birth, not race.", note: "Racial bars for naturalization of immigrants remained until 1952." },
  { year: "1875", title: "Page Act", type: "Exclusion", description: "Barred entry of criminals, prostitutes, and Chinese contract laborers. Established port inspections and required ship manifests—the first continual tracking of arrivals.", impact: "Created bureaucratic apparatus for exclusion.", note: "In practice, heavily targeted Chinese women on suspicion of prostitution." },
  { year: "1882", title: "Chinese Exclusion Act", type: "Exclusion", description: "Suspended Chinese laborers' entry for 10 years (later made indefinite). Chinese immigrants explicitly barred from naturalization. Imposed head tax and mandated deportation.", impact: "First US law to exclude an entire nationality by race.", note: "Remained the most restrictive immigration law until 1924." },
  { year: "1891", title: "Immigration Act", type: "Enforcement", description: "Established the Bureau of Immigration. Expanded grounds for exclusion: polygamists, contagious disease, felons. Deportation possible within 1 year of unlawful entry.", impact: "Centralized federal immigration control.", note: "Gave immigration inspectors final authority with minimal due process." },
  { year: "1917", title: "Literacy Act", type: "Exclusion", description: "Required literacy tests for adults over 16. Excluded immigrants from the 'Asiatic Barred Zone' (most of Asia and Pacific), chronic alcoholics, and those with 'psychopathic inferiority.'", impact: "Literacy test had disparate impact on many groups.", note: "Head tax raised to $8—enormous sum for poor immigrants." },
  { year: "1924", title: "National Origins Act", type: "Quota System", description: "Capped immigration at 2% of 1890 census, heavily favoring Northwestern Europeans. Asians completely barred. Western Hemisphere exempt from caps (aimed at Mexico).", impact: "Codified racist hierarchy in law. Created US Border Patrol.", note: "Remained in effect until 1965. Explicitly intended to maintain Anglo-Saxon dominance." },
  { year: "1940", title: "Alien Registration Act", type: "Enforcement", description: "All aliens over 14 required to register and be fingerprinted. Targeted Communists, Fascists, and Nazis. Made alien smuggling a crime.", impact: "Massive surveillance apparatus during WWII.", note: "Set precedent for wartime immigration control." },
  { year: "1942", title: "Japanese American Internment", type: "Wartime Internment", description: "120,000+ people of Japanese descent—two-thirds US citizens—forcibly removed and incarcerated without charges or trial in 10 War Relocation Authority camps.", impact: "Citizenship offered zero protection.", note: "Upheld by Supreme Court in Korematsu v. US (1944). Redress in 1988." },
  { year: "1943", title: "Magnuson Act", type: "Partial Reform", description: "Repealed complete Chinese exclusion (1882) and allowed limited immigration. Chinese, Indians, and Filipinos finally eligible for naturalization, but under tiny national quotas.", impact: "First crack in racial bars.", note: "Still excluded large numbers. A response to Chinese alliance during WWII." },
  { year: "1952", title: "McCarran-Walter Act", type: "Comprehensive Reform", description: "Eliminated all racial and gender barriers to naturalization. Centralized and standardized immigration law. Created preference system for high-skilled workers and family reunification.", impact: "End of explicit racial bars to naturalization.", note: "But tightened deportation grounds and expanded 'subversive' definitions." },
  { year: "1965", title: "Hart-Celler Act", type: "Liberal Reform", description: "Abolished national origin and race quotas entirely. Massive preference (74%) for family reunification. First numerical cap on Western Hemisphere (120,000).", impact: "Landmark civil rights era legislation.", note: "Unexpected consequence: dramatic shift in immigration sources." },
  { year: "1975", title: "Indochina Refugee Act", type: "Refugee Admission", description: "130,000+ Vietnamese, Cambodian, and Laotian refugees admitted following fall of Saigon and Khmer Rouge takeover. Used emergency parole authority to bypass normal quotas.", impact: "Federal resettlement funding provided to states.", note: "Set stage for formal asylum system. Demonstrated US Cold War commitment." },
  { year: "1980", title: "Refugee Act", type: "Formal System", description: "Established formal domestic resettlement and asylum procedures aligned with UN protocols. Refugees fleeing persecution based on race, religion, nationality, or politics could apply.", impact: "Created legal framework for asylum.", note: "Separated refugee admissions from regular immigration caps." },
  { year: "1986", title: "Immigration Reform Act", type: "Amnesty + Enforcement", description: "Amnestied nearly 3 million undocumented immigrants present since 1982. Simultaneously imposed employer sanctions and increased Border Patrol by 50%.", impact: "Only comprehensive legalization in modern US history.", note: "Employer sanctions spawned document fraud industry." },
  { year: "1994", title: "Operation Gatekeeper", type: "Enforcement", description: "Massively expanded border fencing and surveillance, especially San Diego. 'Prevention through deterrence' strategy intentionally pushed crossings into deadlier desert terrain.", impact: "Thousands died in subsequent years. Shifted patterns to Arizona and Texas.", note: "Part of broader militarization of southern border." },
  { year: "1996", title: "IIRIRA & AEDPA", type: "Enforcement Expansion", description: "Created expedited removal with minimal due process. Established 3- and 10-year bars for unlawful presence. Mandatory detention. Allowed secret evidence in terrorism cases.", impact: "Massive expansion of deportation grounds.", note: "Applied retroactively. Started era of mass deportation infrastructure." },
  { year: "2001-06", title: "Post-9/11 Security Acts", type: "Security Enforcement", description: "Created Department of Homeland Security, ICE, CBP. Authorized 850 miles of border fencing. Instituted NSEERS registry targeting Muslims and Arabs. Biometric visa system.", impact: "Transformed immigration into national security issue.", note: "Sweeping surveillance powers. Remains most expansive period." },
  { year: "2012", title: "DACA", type: "Executive Reform", description: "Executive action granted temporary reprieve and work permits to ~700,000 unauthorized immigrants brought as children. No path to citizenship; not a law.", impact: "First positive action for undocumented immigrants in decades.", note: "Precarious: dependent on executive goodwill, no legislative permanence." },
  { year: "2017-18", title: "Travel Ban & Family Separation", type: "Restrictive Enforcement", description: "Executive travel ban on multiple Muslim-majority countries (upheld by Supreme Court). Zero tolerance policy criminally prosecuted all border crossers; ~5,500 children separated from parents.", impact: "Most controversial policies in recent history.", note: "Thousands of children traumatized. Reunification efforts continued for years." }
];

// ── STATE ─────────────────────────────────────────────────────────────
let ci = 0;
let reasoning = null;
let etymResponse = null;
const demos = {age:'',gender:'',race:[],born_us:'',family_imm:'',state:''};
const CA = PERSONAS.map(()=>({emotion:null,immigrant:null,belongs:null,stay:null}));

// ── TIMELINE STATE ─────────────────────────────────────────────────────
let tlInitialized = false;
let tlActiveCard = null;
let tlActivePhoto = null;
let tlCurrentIndex = -1;

// ── SCREEN NAV ────────────────────────────────────────────────────────
function goTo(id) {
  document.querySelectorAll('[id^="s-"]').forEach(el=>el.style.display='none');
  const el = document.getElementById(id);
  el.style.display = 'block';
  setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),30);
}

// ── DEMOGRAPHICS ──────────────────────────────────────────────────────
function setD(key,val,btn) {
  demos[key]=val;
  document.querySelectorAll(`[onclick*="setD('${key}'"]`).forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}
function toggleRace(val,btn) {
  if(val==='prefer_not'){demos.race=['prefer_not'];document.querySelectorAll('.rtile').forEach(b=>b.classList.remove('on'));btn.classList.add('on');return;}
  const pni=demos.race.indexOf('prefer_not');
  if(pni>-1){demos.race.splice(pni,1);document.querySelector('[onclick*="prefer_not"].rtile')?.classList.remove('on');}
  const i=demos.race.indexOf(val);
  if(i>-1){demos.race.splice(i,1);btn.classList.remove('on');}
  else{demos.race.push(val);btn.classList.add('on');}
}

// ── CARDS ─────────────────────────────────────────────────────────────
function startCards(){goTo('s-cards');renderCard();}

function isCardComplete(index=ci){
  return BEAT_ORDER.every(beat=>CA[index][beat]!==null);
}

function updateProg(){
  const dots=document.getElementById('prog-dots');
  dots.innerHTML='';
  PERSONAS.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='prog-dot'+(i===ci?' current':isCardComplete(i)?' done':'');
    dots.appendChild(d);
  });
  document.getElementById('prog-label').textContent=`${ci+1} of ${PERSONAS.length}`;
}

function updateCardNav(){
  const nextBtn=document.getElementById('next-btn');
  const complete=isCardComplete(ci);
  nextBtn.style.display='block';
  if(ci<PERSONAS.length-1){
    nextBtn.textContent=complete?'Next person →':'Skip to next person →';
  } else {
    nextBtn.textContent=complete?'See your results →':'Skip to results →';
  }
}

function makeAvatar(p){
  const{color:c,dark:dk,shape:s}=p;
  const sh={
    circle:`<circle cx="29" cy="29" r="19" fill="${c}" opacity="0.2"/><circle cx="29" cy="29" r="13" fill="${c}" opacity="0.5"><animate attributeName="r" values="13;15;13" dur="3s" repeatCount="indefinite"/></circle><circle cx="29" cy="29" r="7" fill="${dk}" opacity="0.9"/>`,
    square:`<rect x="7" y="7" width="44" height="44" rx="3" fill="${c}" opacity="0.18"/><rect x="14" y="14" width="30" height="30" rx="2" fill="${c}" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 29 29" to="360 29 29" dur="14s" repeatCount="indefinite"/></rect><rect x="21" y="21" width="16" height="16" rx="2" fill="${dk}" opacity="0.9"/>`,
    triangle:`<polygon points="29,4 55,52 3,52" fill="${c}" opacity="0.15"/><polygon points="29,11 49,48 9,48" fill="${c}" opacity="0.45"><animate attributeName="opacity" values="0.45;0.65;0.45" dur="2.8s" repeatCount="indefinite"/></polygon><polygon points="29,20 43,44 15,44" fill="${dk}" opacity="0.9"/>`,
    hexagon:`<polygon points="29,3 51,16 51,42 29,55 7,42 7,16" fill="${c}" opacity="0.15"/><polygon points="29,10 45,20 45,38 29,48 13,38 13,20" fill="${c}" opacity="0.45"><animate attributeName="opacity" values="0.45;0.65;0.45" dur="3.5s" repeatCount="indefinite"/></polygon><polygon points="29,18 41,25 41,33 29,40 17,33 17,25" fill="${dk}" opacity="0.9"/>`,
    diamond:`<polygon points="29,3 55,29 29,55 3,29" fill="${c}" opacity="0.15"/><polygon points="29,10 50,29 29,48 8,29" fill="${c}" opacity="0.45"><animate attributeName="opacity" values="0.45;0.65;0.45" dur="3s" repeatCount="indefinite"/></polygon><polygon points="29,19 39,29 29,39 19,29" fill="${dk}" opacity="0.9"/>`
  };
  return`<svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">${sh[s]}</svg>`;
}

function renderCard(){
  updateProg();
  const p=PERSONAS[ci];
  const backBtn=document.getElementById('back-btn');
  backBtn.disabled=ci===0;
  updateCardNav();

  document.getElementById('card-el').innerHTML=`
    <div class="card">
      <div class="card-header">
        <div class="avatar">${makeAvatar(p)}</div>
        <div>
          <div class="char-name">${p.name}, ${p.age}</div>
          <div class="char-tag">${p.tag}</div>
        </div>
      </div>
      <div class="card-story">
        ${p.lines.map((l,i)=>`<span class="sline" style="transition-delay:${i*0.14}s">${l}</span>`).join('')}
      </div>
      <div class="card-beats" id="beats"></div>
    </div>`;

  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    document.querySelectorAll('.sline').forEach(l=>l.classList.add('vis'));
  }));
  renderBeats();
}

function renderBeats(){
  const p=PERSONAS[ci];
  const ans=CA[ci];
  const beats=document.getElementById('beats');
  if(!beats)return;
  beats.innerHTML='';
  let reachedCurrent=false;

  BEAT_ORDER.forEach(beat=>{
    if(reachedCurrent)return;
    if(ans[beat]!==null){
      const row=document.createElement('div');
      row.className='b-answered';
      const pc=beat==='emotion'?'p-emotion':`p-${ans[beat]}`;
      const pl=beat==='emotion'?cap(ans[beat]):fmtJ(ans[beat]);
      row.innerHTML=`
        <span class="b-answered-q">${BEAT_LABELS[beat]}</span>
        <div class="b-answered-r">
          <span class="b-pill ${pc}">${pl}</span>
          <button class="b-change" onclick="changeBeat('${beat}')">change</button>
        </div>`;
      beats.appendChild(row);

      if(beat==='emotion'){
        const fw=document.createElement('div');
        fw.className='b-fact-wrap';
        fw.innerHTML=`
          <div class="b-fact">${p.fact}</div>
          <span class="b-cite">Source: <a href="${p.cite.url}" target="_blank" rel="noopener">${p.cite.text}</a></span>`;
        beats.appendChild(fw);
        requestAnimationFrame(()=>requestAnimationFrame(()=>fw.querySelector('.b-fact').classList.add('vis')));
      }
    } else {
      reachedCurrent=true;
      const cur=document.createElement('div');
      cur.className='b-current';
      if(beat==='emotion'){
        cur.innerHTML=`
          <p class="b-q">What is your first reaction to this person's situation?</p>
          <div class="e-tiles" id="et">
            ${EMOTIONS.map(o=>`<button class="e-tile" onclick="selEmotion('${o.val}',this)">${o.label}</button>`).join('')}
          </div>`;
      } else {
        cur.innerHTML=`
          <p class="b-q">${J_QUESTIONS[beat]}</p>
          <div class="j-tiles" id="jt-${beat}">
            <button class="j-tile" onclick="selJ('${beat}','yes',this)">Yes</button>
            <button class="j-tile" onclick="selJ('${beat}','not_sure',this)">Not sure</button>
            <button class="j-tile" onclick="selJ('${beat}','no',this)">No</button>
          </div>`;
      }
      beats.appendChild(cur);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        cur.querySelector('.b-q')?.classList.add('vis');
        cur.querySelector('.e-tiles,[id^="jt-"]')?.classList.add('vis');
      }));
    }
  });
}

function cap(s){return s?s.charAt(0).toUpperCase()+s.slice(1):'';}
function fmtJ(v){return v==='yes'?'Yes':v==='not_sure'?'Not sure':v==='no'?'No':v;}

function selEmotion(val,btn){
  CA[ci].emotion=val;
  document.querySelectorAll('.e-tile').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  setTimeout(()=>{
    renderBeats();
    updateCardNav();
  },280);
}

function selJ(beat,val,btn){
  CA[ci][beat]=val;
  document.querySelectorAll(`#jt-${beat} .j-tile`).forEach(b=>b.classList.remove('on-yes','on-not_sure','on-no'));
  btn.classList.add(`on-${val}`);
  setTimeout(()=>{
    renderBeats();
    updateCardNav();
  },280);
}

function changeBeat(beat){
  BEAT_ORDER.slice(BEAT_ORDER.indexOf(beat)).forEach(b=>{CA[ci][b]=null;});
  renderBeats();
  updateCardNav();
}

function prevCard(){if(ci>0){ci--;renderCard();document.getElementById('s-cards').scrollIntoView({behavior:'smooth',block:'start'});}}
function nextCard(){
  if(ci<PERSONAS.length-1){ci++;renderCard();document.getElementById('s-cards').scrollIntoView({behavior:'smooth',block:'start'});}
  else goTo('s-reasoning');
}

function backToCards(){
  goTo('s-cards');
  renderCard();
}

// ── REASONING ─────────────────────────────────────────────────────────
function setReasoning(val,btn){
  reasoning=val;
  document.querySelectorAll('.r-tile').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('r-next').style.display='block';
}

// ── PATTERN ───────────────────────────────────────────────────────────
function goToPattern(){goTo('s-pattern');buildPattern();submitToSheet();}

function ppill(val,type){
  if(!val)return`<span style="color:var(--ink-faint);font-size:0.75rem">—</span>`;
  if(type==='emotion')return`<span class="ppill" style="background:#eeedfe;color:#3c3489">${cap(val)}</span>`;
  const bg=val==='yes'?'#e8f4ed':val==='not_sure'?'#fef3e2':'#fcecea';
  const fg=val==='yes'?'#1a5c35':val==='not_sure'?'#7a4f10':'#7a2020';
  return`<span class="ppill" style="background:${bg};color:${fg}">${fmtJ(val)}</span>`;
}

function buildPattern(){
  document.getElementById('ptable-wrap').innerHTML=`
    <table class="ptable">
      <thead><tr><th>Person</th><th>Reaction</th><th>Immigrant?</th><th>Belongs?</th><th>Stay?</th></tr></thead>
      <tbody>
        ${PERSONAS.map((p,i)=>{const a=CA[i];return`<tr>
          <td class="p-name">${p.name}</td>
          <td>${ppill(a.emotion,'emotion')}</td>
          <td>${ppill(a.immigrant,'j')}</td>
          <td>${ppill(a.belongs,'j')}</td>
          <td>${ppill(a.stay,'j')}</td>
        </tr>`;}).join('')}
      </tbody>
    </table>`;

  const obs=buildObs();
  const wrap=document.getElementById('obs-wrap');
  if(obs.length){
    wrap.innerHTML=`<p class="obs-head">What we notice</p>`+obs.map(t=>`<div class="obs">${t}</div>`).join('');
  }
}

function getA(key,field){const i=PERSONAS.findIndex(p=>p.key===key);return i>=0?CA[i][field]:null;}

function buildObs(){
  const obs=[];
  const mIm=getA('maria','immigrant'),cIm=getA('connor','immigrant');
  const mSt=getA('maria','stay'),    cSt=getA('connor','stay');

  if(mIm&&cIm&&mIm!==cIm)
    obs.push(`You answered differently for <strong>María</strong> and <strong>Connor</strong> — even though they are in exactly the same legal situation. Whatever drove the difference isn't in the law.`);
  else if(mSt&&cSt&&mSt!==cSt)
    obs.push(`You gave different "allowed to stay" answers for <strong>María</strong> and <strong>Connor</strong> despite their identical legal status. Something beyond paperwork shaped that.`);

  if(getA('jamal','immigrant')==='yes')
    obs.push(`You said <strong>Jamal</strong> feels like an immigrant. He became a US citizen fifteen years ago. The label is staying past the point the law releases it.`);

  if(getA('nadia','immigrant')==='yes')
    obs.push(`You said <strong>Nadia</strong> feels like an immigrant — she is a US citizen by birth who has never lived here before. The legal status and the feeling are pointed in opposite directions.`);

  if(getA('yemi','immigrant')==='yes')
    obs.push(`You said <strong>Yemi</strong> feels like an immigrant — she was born in Columbus, Ohio. The label traveled across a generation without anyone crossing a border.`);

  if(getA('diego','immigrant')==='yes'&&getA('lena','immigrant')==='no')
    obs.push(`You said <strong>Diego</strong> feels like an immigrant but <strong>Lena</strong> doesn't — both were brought here as young children with no say in the matter. Something different about their situations shaped your answer.`);

  if(getA('priya','immigrant')==='no')
    obs.push(`You said <strong>Priya</strong> doesn't feel like an immigrant — she has lived here for 12 years on a visa and earns $210,000. High income and education appear to move the label.`);

  PERSONAS.forEach((p,i)=>{
    if(CA[i].belongs==='yes'&&CA[i].stay==='no')
      obs.push(`You said <strong>${p.name}</strong> belongs here — but shouldn't be allowed to stay. That gap between belonging and legal permission is one of the most contested questions in immigration policy.`);
  });

  if(!obs.length)
    obs.push(`Your answers were consistent across all nine people. The patterns will become clearer as we move into the history and data sections.`);

  return obs.slice(0,3);
}

// ── ETYMOLOGY ─────────────────────────────────────────────────────────
function makeGuess(btn){
  document.querySelectorAll('#etym-guess .etym-tile').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  setTimeout(()=>{document.getElementById('etym-reveal').style.display='block';},300);
}

function toggleLabel(card){
  const wasOpen=card.classList.contains('open');
  document.querySelectorAll('.label-card').forEach(c=>c.classList.remove('open'));
  if(!wasOpen)card.classList.add('open');
}

function setEtymResponse(val,btn){
  etymResponse=val;
  document.querySelectorAll('#etym-response .etym-tile').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('etym-next').style.display='block';
}

// ── GOOGLE SHEETS ─────────────────────────────────────────────────────
async function submitToSheet(){
  const payload={
    age:demos.age,gender:demos.gender,race:demos.race.join(', '),
    born_us:demos.born_us,family_imm:demos.family_imm,
    state:demos.state,reasoning:reasoning||''
  };
  PERSONAS.forEach((p,i)=>{
    payload[`${p.key}_emotion`]   =CA[i].emotion   ||'';
    payload[`${p.key}_immigrant`] =CA[i].immigrant ||'';
    payload[`${p.key}_belongs`]   =CA[i].belongs   ||'';
    payload[`${p.key}_stay`]      =CA[i].stay      ||'';
  });
  try{
    await fetch(SHEET_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    document.getElementById('saved-note').textContent='Your answers have been saved anonymously.';
  }catch(e){}
}

function continueEssay() {
  goTo('s-timeline');
  document.body.classList.add('tl-mode');
  window.scrollTo(0, 0);
  setTimeout(initPolicyTimeline, 100);
}
function resetAll(){
  ci=0;reasoning=null;etymResponse=null;
  Object.assign(demos,{age:'',gender:'',race:[],born_us:'',family_imm:'',state:''});
  PERSONAS.forEach((_,i)=>{CA[i]={emotion:null,immigrant:null,belongs:null,stay:null};});
  goTo('s-opening');
}

function buildTimeline() {
  const bar = document.getElementById('timeline-bar');
  bar.innerHTML = '';

  TIMELINE.forEach((item, i) => {
    const dot = document.createElement('div');
    dot.className = 'timeline-dot';
    dot.innerHTML = `<div>${item.year}</div><div>${item.title}</div>`;
    dot.onclick = () => loadTimelineCard(i);
    bar.appendChild(dot);
  });

  loadTimelineCard(0);
}

function loadTimelineCard(i) {
  const item = TIMELINE[i];

  document.querySelectorAll('.timeline-dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === i);
  });

  const card = document.getElementById('timeline-card');

  card.innerHTML = `
    <div class="timeline-card">
      <h3>${item.title}</h3>
      <div class="timeline-meta">${item.year} · ${item.subtitle}</div>

      <div class="timeline-images">
        ${item.images.map(src => `<img src="${src}" loading="lazy">`).join('')}
      </div>

      <div class="timeline-block">
        <strong>Who could come</strong>
        ${item.allowed}
      </div>

      <div class="timeline-block">
        <strong>Who was excluded</strong>
        ${item.excluded}
      </div>

      <div class="timeline-block">
        <strong>Citizenship</strong>
        ${item.citizenship}
      </div>

      <div class="timeline-block">
        <strong>What changed</strong>
        ${item.change}
      </div>

      <div class="timeline-reflection">
        ${item.reflection}
      </div>
    </div>
  `;
}

// ── PART THREE: SCROLL-DRIVEN POLICY TIMELINE ─────────────────────────
function initPolicyTimeline() {
  if (tlInitialized) return;
  tlInitialized = true;

  const svgEl = document.getElementById('timeline-viz');
  if (!svgEl || typeof d3 === 'undefined') return;

  const svg = d3.select('#timeline-viz');
  const W = 1200, H = 800;

  // Build path points
  const points = policies.map((_d, i) => {
    const t = i / (policies.length - 1);
    const baseX = W * 0.2 + (W * 0.6) * t;
    const wave = Math.sin(t * Math.PI * 3) * 80;
    return { x: baseX + wave, y: H * 0.15 + (H * 3.5) * t, index: i };
  });

  const line = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveNatural);
  const pathData = line(points);

  // Gradient
  const defs = svg.append('defs');
  const grad = defs.append('linearGradient')
    .attr('id', 'tlGradient')
    .attr('x1', '0%').attr('y1', '0%')
    .attr('x2', '0%').attr('y2', '100%');
  [{offset:'0%',color:'#d4a574'},{offset:'50%',color:'#8b6f47'},{offset:'100%',color:'#c94a3a'}]
    .forEach(s => grad.append('stop').attr('offset', s.offset).attr('stop-color', s.color));

  // Background path
  svg.append('path').attr('d', pathData)
    .attr('fill', 'none').attr('stroke', 'rgba(212,165,116,0.08)')
    .attr('stroke-width', 12).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round');

  // Animated path
  const animPath = svg.append('path').attr('d', pathData)
    .attr('fill', 'none').attr('stroke', 'url(#tlGradient)')
    .attr('stroke-width', 12).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round')
    .attr('stroke-dasharray', function() { return this.getTotalLength(); })
    .attr('stroke-dashoffset', function() { return this.getTotalLength(); });

  // Nodes
  const nodes = svg.selectAll('.tl-node').data(points).enter()
    .append('g').attr('class', 'tl-node')
    .attr('transform', d => `translate(${d.x},${d.y})`);

  nodes.append('circle').attr('r', 10)
    .attr('fill', 'rgba(212,165,116,0.3)')
    .attr('stroke', '#d4a574').attr('stroke-width', 2);

  nodes.append('text').attr('y', -20).attr('text-anchor', 'middle')
    .attr('fill', '#d4a574')
    .style('font-family', "'Space Mono', monospace")
    .style('font-size', '11px').style('font-weight', '700')
    .text(d => policies[d.index].year);

  // Scroll handler
  window.addEventListener('scroll', function() {
    if (document.getElementById('s-timeline').style.display === 'none') return;

    const introEl = document.querySelector('.tl-intro-section');
    const containerEl = document.querySelector('.tl-timeline-container');
    if (!introEl || !containerEl) return;

    const introH = introEl.offsetHeight;
    const rel = Math.max(0, window.scrollY - introH);
    const maxScroll = Math.max(1, containerEl.offsetHeight - window.innerHeight);
    const progress = Math.min(1, rel / maxScroll);
    const index = Math.round(progress * (policies.length - 1));

    if (index === tlCurrentIndex || index >= policies.length) return;
    tlCurrentIndex = index;

    const policy = policies[index];
    const pt = points[index];

    // Remove previous cards
    if (tlActiveCard)  { tlActiveCard.remove();  tlActiveCard  = null; }
    if (tlActivePhoto) { tlActivePhoto.remove(); tlActivePhoto = null; }

    // Camera follow: translate everything so current point is at SVG center
    const tx = W / 2 - pt.x;
    const ty = H / 2 - pt.y;
    svg.selectAll('path, g.tl-node').attr('transform', `translate(${tx},${ty})`);

    // Path draw progress
    const len = animPath.node().getTotalLength();
    animPath.attr('stroke-dashoffset', len * (1 - progress));

    // Node glow
    svg.selectAll('.tl-node circle').each(function(d) {
      if (d.index === tlCurrentIndex)
        d3.select(this).style('filter', 'drop-shadow(0 0 20px rgba(201,74,58,0.9))');
      else if (d.index < tlCurrentIndex)
        d3.select(this).style('filter', 'drop-shadow(0 0 12px rgba(212,165,116,0.6))');
      else
        d3.select(this).style('filter', 'none');
    });

    // Create info card
    const cardSide  = index % 2 === 0 ? 'left'  : 'right';
    const photoSide = index % 2 === 0 ? 'right' : 'left';

    tlActiveCard = document.createElement('div');
    tlActiveCard.className = `policy-item ${cardSide} active`;
    tlActiveCard.innerHTML = `
      <div class="policy-card">
        <div class="policy-year">${policy.year}</div>
        <div class="policy-title">${policy.title}</div>
        <div class="policy-type">${policy.type}</div>
        <p class="policy-description">${policy.description}</p>
        <div class="policy-impact"><strong>Impact:</strong> ${policy.impact}</div>
        <div class="policy-note">${policy.note}</div>
      </div>`;
    document.body.appendChild(tlActiveCard);

    tlActivePhoto = document.createElement('div');
    tlActivePhoto.className = `policy-item ${photoSide} active`;
    tlActivePhoto.innerHTML = `<div class="policy-photo">📷 ${policy.title}</div>`;
    document.body.appendChild(tlActivePhoto);
  });
}