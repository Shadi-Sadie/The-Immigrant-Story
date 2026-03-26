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
  {val:'unsure',     label:'Unsure'}
];

const J_QUESTIONS = {
  immigrant: 'Does this person feel like an immigrant to you?',
  belongs:   'Does this person belong here?',
  stay:      'Should this person be allowed to stay?'
};

const BEAT_ORDER   = ['emotion','immigrant','belongs','stay'];
const BEAT_LABELS  = {emotion:'How it made you feel',immigrant:'Feels like immigrant?',belongs:'Belongs here?',stay:'Allowed to stay?'};



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
  // lean: -1 = maximally restrictive, +1 = maximally expansive
  { lean: -0.50, year: "1600s-1770s", title: "Colonial Settlement", type: "Exclusion", description: "European settlers sought economic and political freedom while forced migrants—enslaved Africans and indentured servants—had no choice.", impact: "Set foundation for race-based hierarchy in America.", note: "Quick naturalization incentivized settlement but excluded non-Europeans." },
  { lean: -0.70, year: "1790", title: "Naturalization Act", type: "Citizenship", description: "First federal naturalization law established citizenship exclusively for 'free white persons' of good moral character after 2 years of residency.", impact: "Explicitly written racial exclusion into US law.", note: "Non-whites, indentured servants, and enslaved people categorically barred." },
  { lean: -0.80, year: "1798", title: "Alien and Sedition Acts", type: "Enforcement", description: "Residency requirement for naturalization jumped from 5 to 14 years. President granted sweeping power to arrest and deport 'dangerous' aliens without due process.", impact: "Turned immigration enforcement into a political weapon.", note: "Targeted noncitizens from 'hostile nations' and anyone deemed a threat." },
  { lean: -0.20, year: "1808", title: "Slave Trade Prohibition", type: "Exclusion", description: "Federal law banned the transatlantic slave trade, effective January 1, 1808. However, enslavement continued and was never addressed.", impact: "Slavery remained legal; enslaved people stayed ineligible for citizenship.", note: "Weak enforcement allowed illegal smuggling for decades." },
  { lean: -0.95, year: "1857", title: "Dred Scott v. Sandford", type: "Court Decision", description: "Supreme Court ruled that no Black person—enslaved or free—could be a US citizen. Chief Justice Taney declared Blacks had 'no rights which the white man was bound to respect.'", impact: "Stripped citizenship from free Black Americans.", note: "Directly precipitated Civil War tensions. Overturned 87 years later." },
  { lean:  0.85, year: "1868", title: "14th Amendment", type: "Constitutional Reform", description: "Birthright citizenship established for all persons born or naturalized in the US, regardless of race. This overturned Dred Scott and extended citizenship to freed enslaved people.", impact: "Citizenship based on birth, not race.", note: "Racial bars for naturalization of immigrants remained until 1952." },
  { lean: -0.60, year: "1875", title: "Page Act", type: "Exclusion", description: "Barred entry of criminals, prostitutes, and Chinese contract laborers. Established port inspections and required ship manifests—the first continual tracking of arrivals.", impact: "Created bureaucratic apparatus for exclusion.", note: "In practice, heavily targeted Chinese women on suspicion of prostitution." },
  { lean: -0.95, year: "1882", title: "Chinese Exclusion Act", type: "Exclusion", description: "Suspended Chinese laborers' entry for 10 years (later made indefinite). Chinese immigrants explicitly barred from naturalization. Imposed head tax and mandated deportation.", impact: "First US law to exclude an entire nationality by race.", note: "Remained the most restrictive immigration law until 1924." },
  { lean: -0.50, year: "1891", title: "Immigration Act", type: "Enforcement", description: "Established the Bureau of Immigration. Expanded grounds for exclusion: polygamists, contagious disease, felons. Deportation possible within 1 year of unlawful entry.", impact: "Centralized federal immigration control.", note: "Gave immigration inspectors final authority with minimal due process." },
  { lean: -0.65, year: "1917", title: "Literacy Act", type: "Exclusion", description: "Required literacy tests for adults over 16. Excluded immigrants from the 'Asiatic Barred Zone' (most of Asia and Pacific), chronic alcoholics, and those with 'psychopathic inferiority.'", impact: "Literacy test had disparate impact on many groups.", note: "Head tax raised to $8—enormous sum for poor immigrants." },
  { lean: -0.90, year: "1924", title: "National Origins Act", type: "Quota System", description: "Capped immigration at 2% of 1890 census, heavily favoring Northwestern Europeans. Asians completely barred. Western Hemisphere exempt from caps (aimed at Mexico).", impact: "Codified racist hierarchy in law. Created US Border Patrol.", note: "Remained in effect until 1965. Explicitly intended to maintain Anglo-Saxon dominance." },
  { lean: -0.55, year: "1940", title: "Alien Registration Act", type: "Enforcement", description: "All aliens over 14 required to register and be fingerprinted. Targeted Communists, Fascists, and Nazis. Made alien smuggling a crime.", impact: "Massive surveillance apparatus during WWII.", note: "Set precedent for wartime immigration control." },
  { lean: -1.00, year: "1942", title: "Japanese American Internment", type: "Wartime Internment", description: "120,000+ people of Japanese descent—two-thirds US citizens—forcibly removed and incarcerated without charges or trial in 10 War Relocation Authority camps.", impact: "Citizenship offered zero protection.", note: "Upheld by Supreme Court in Korematsu v. US (1944). Redress in 1988." },
  { lean:  0.15, year: "1943", title: "Magnuson Act", type: "Partial Reform", description: "Repealed complete Chinese exclusion (1882) and allowed limited immigration. Chinese, Indians, and Filipinos finally eligible for naturalization, but under tiny national quotas.", impact: "First crack in racial bars.", note: "Still excluded large numbers. A response to Chinese alliance during WWII." },
  { lean:  0.05, year: "1952", title: "McCarran-Walter Act", type: "Comprehensive Reform", description: "Eliminated all racial and gender barriers to naturalization. Centralized and standardized immigration law. Created preference system for high-skilled workers and family reunification.", impact: "End of explicit racial bars to naturalization.", note: "But tightened deportation grounds and expanded 'subversive' definitions." },
  { lean:  0.90, year: "1965", title: "Hart-Celler Act", type: "Liberal Reform", description: "Abolished national origin and race quotas entirely. Massive preference (74%) for family reunification. First numerical cap on Western Hemisphere (120,000).", impact: "Landmark civil rights era legislation.", note: "Unexpected consequence: dramatic shift in immigration sources." },
  { lean:  0.65, year: "1975", title: "Indochina Refugee Act", type: "Refugee Admission", description: "130,000+ Vietnamese, Cambodian, and Laotian refugees admitted following fall of Saigon and Khmer Rouge takeover. Used emergency parole authority to bypass normal quotas.", impact: "Federal resettlement funding provided to states.", note: "Set stage for formal asylum system. Demonstrated US Cold War commitment." },
  { lean:  0.60, year: "1980", title: "Refugee Act", type: "Formal System", description: "Established formal domestic resettlement and asylum procedures aligned with UN protocols. Refugees fleeing persecution based on race, religion, nationality, or politics could apply.", impact: "Created legal framework for asylum.", note: "Separated refugee admissions from regular immigration caps." },
  { lean:  0.20, year: "1986", title: "Immigration Reform Act", type: "Amnesty + Enforcement", description: "Amnestied nearly 3 million undocumented immigrants present since 1982. Simultaneously imposed employer sanctions and increased Border Patrol by 50%.", impact: "Only comprehensive legalization in modern US history.", note: "Employer sanctions spawned document fraud industry." },
  { lean: -0.60, year: "1994", title: "Operation Gatekeeper", type: "Enforcement", description: "Massively expanded border fencing and surveillance, especially San Diego. 'Prevention through deterrence' strategy intentionally pushed crossings into deadlier desert terrain.", impact: "Thousands died in subsequent years. Shifted patterns to Arizona and Texas.", note: "Part of broader militarization of southern border." },
  { lean: -0.80, year: "1996", title: "IIRIRA & AEDPA", type: "Enforcement Expansion", description: "Created expedited removal with minimal due process. Established 3- and 10-year bars for unlawful presence. Mandatory detention. Allowed secret evidence in terrorism cases.", impact: "Massive expansion of deportation grounds.", note: "Applied retroactively. Started era of mass deportation infrastructure." },
  { lean: -0.85, year: "2001-06", title: "Post-9/11 Security Acts", type: "Security Enforcement", description: "Created Department of Homeland Security, ICE, CBP. Authorized 850 miles of border fencing. Instituted NSEERS registry targeting Muslims and Arabs. Biometric visa system.", impact: "Transformed immigration into national security issue.", note: "Sweeping surveillance powers. Remains most expansive period." },
  { lean:  0.45, year: "2012", title: "DACA", type: "Executive Reform", description: "Executive action granted temporary reprieve and work permits to ~700,000 unauthorized immigrants brought as children. No path to citizenship; not a law.", impact: "First positive action for undocumented immigrants in decades.", note: "Precarious: dependent on executive goodwill, no legislative permanence." },
  { lean: -0.90, year: "2017-18", title: "Travel Ban & Family Separation", type: "Restrictive Enforcement", description: "Executive travel ban on multiple Muslim-majority countries (upheld by Supreme Court). Zero tolerance policy criminally prosecuted all border crossers; ~5,500 children separated from parents.", impact: "Most controversial policies in recent history.", note: "Thousands of children traumatized. Reunification efforts continued for years." }
];

// ── STATE ─────────────────────────────────────────────────────────────
let ci = 0;
let demoStep = 1;
let cardTransitionActive = false;
const factShownFor = new Set();
let factOverlayTimer = null;
let reasoning = null;
let etymGuess = null;
let patternRevealStartY = null;
const demos = {age:'',gender:'',race:[],born_us:'',family_imm:'',state:''};
const CA = PERSONAS.map(()=>({emotion:null,immigrant:null,belongs:null,stay:null}));

// ── TIMELINE STATE ─────────────────────────────────────────────────────
let tlInitialized = false;
let tlActiveCard = null;
let tlActivePhoto = null;
let tlCurrentIndex = -1;

function clearTimelineOverlays() {
  if (tlActiveCard) { tlActiveCard.remove(); tlActiveCard = null; }
  if (tlActivePhoto) { tlActivePhoto.remove(); tlActivePhoto = null; }
  tlCurrentIndex = -1;
}

// ── SCREEN NAV ────────────────────────────────────────────────────────
function goTo(id) {
  document.querySelectorAll('[id^="s-"]').forEach(el=>el.style.display='none');
  const el = document.getElementById(id);
  el.style.display = 'block';
  const history=document.getElementById('policy-history');
  if(history)history.classList.remove('is-active');
  document.getElementById('s-reasoning')?.classList.remove('is-active','is-revealed');
  document.getElementById('s-pattern')?.classList.remove('is-active','is-revealed');
  clearTimelineOverlays();
  setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),30);
}

function skipToPartTwo(){
  goToEtymology();
}

window.goTo = goTo;
window.skipToPartTwo = skipToPartTwo;

// ── DEMOGRAPHICS ──────────────────────────────────────────────────────
function goToDemo(){
  goTo('s-demo');
  renderDemoProgression(true);
}

function renderDemoProgression(animateCurrent=false){
  document.querySelectorAll('#s-demo .demo-step').forEach(stepEl=>{
    const step=Number(stepEl.dataset.step||'1');
    const wasHidden=stepEl.style.display==='none';
    const wasCurrent=stepEl.classList.contains('current');
    const shouldShow=step===demoStep;
    const isCurrent=step===demoStep;
    stepEl.style.display=shouldShow?'block':'none';
    stepEl.classList.toggle('current', isCurrent);
    if(isCurrent && (animateCurrent || wasHidden || !wasCurrent)){
      stepEl.classList.remove('is-entering');
      void stepEl.offsetWidth;
      stepEl.classList.add('is-entering');
    }
  });
  const stateSelect=document.getElementById('demo-state');
  if(stateSelect)stateSelect.value=demos.state||'';
}

function advanceDemoStep(step){
  demoStep=Math.max(demoStep,step);
  renderDemoProgression(true);
  setTimeout(()=>{
    document.querySelector(`#s-demo .demo-step[data-step="${step}"]`)?.scrollIntoView({behavior:'smooth',block:'start'});
  },40);
}

window.goToDemo = goToDemo;
window.advanceDemoStep = advanceDemoStep;

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

window.startCards = startCards;

// Click-anywhere-to-advance (only when card is complete, ignore interactive elements)
document.addEventListener('click', e=>{
  const section=document.getElementById('s-cards');
  if(!section||section.style.display==='none')return;
  if(!isCardComplete())return;
  if(document.getElementById('fact-overlay')?.classList.contains('visible'))return;
  const skip=['button','a','input','select','textarea'];
  if(skip.includes(e.target.tagName.toLowerCase()))return;
  nextCard();
});

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


function makeAvatar(p){
  const{color:c,dark:dk}=p;
  // Faceless cartoon person — same silhouette for everyone, only color varies.
  // The blank face oval is intentional: you're asked to judge without seeing a face.
  return`<svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <!-- soft color halo -->
    <circle cx="29" cy="29" r="27" fill="${c}" opacity="0.13">
      <animate attributeName="opacity" values="0.13;0.22;0.13" dur="4s" repeatCount="indefinite"/>
    </circle>
    <!-- body / torso -->
    <path d="M9,58 C9,37 49,37 49,58 Z" fill="${dk}" opacity="0.88"/>
    <!-- neck -->
    <rect x="24" y="27" width="10" height="10" rx="3" fill="${dk}" opacity="0.88"/>
    <!-- head -->
    <circle cx="29" cy="17" r="12" fill="${dk}" opacity="0.88"/>
    <!-- blank face — no features -->
    <ellipse cx="29" cy="16" rx="8" ry="8.5" fill="${c}" opacity="0.55"/>
  </svg>`;
}

function renderCard(){
  updateProg();
  const p=PERSONAS[ci];
  // Set persona color variable for question accent + progress dot
  document.getElementById('s-cards').style.setProperty('--pcol', p.color);


  // Remove story box if it migrated to right column on previous persona
  const prevBox=document.getElementById('story-box');
  if(prevBox && !prevBox.closest('#card-el')) prevBox.remove();

  document.getElementById('card-el').innerHTML=`
    <div class="card">
      <div class="story-box" id="story-box">
        <div class="card-story">
          ${p.lines.map(l=>`<span class="sline"><span class="sline-bullet">▸</span>${l}</span>`).join('')}
        </div>
      </div>
      <div class="card-beats" id="beats"></div>
    </div>`;

  const figEl=document.getElementById('card-figure');
  if(figEl){
    // Clear any inline styles left by a previous transition
    figEl.style.opacity='';
    figEl.style.transform='';
    figEl.classList.remove('is-entering');
    const[loc,stay]=p.tag.split(' · ');
    figEl.innerHTML=`
      ${makeAvatar(p)}
      <div class="figure-info">
        <div class="figure-name">${p.name}, ${p.age}</div>
        ${loc?`<div class="figure-tag-line">${loc}</div>`:''}
        ${stay?`<div class="figure-tag-line">${stay}</div>`:''}
      </div>`;
    if(cardTransitionActive){
      // Keep figure invisible — the flying overlay will land here and swap
      figEl.style.opacity='0';
      figEl.style.transform='translateY(0)';
    } else {
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        figEl.classList.add('is-entering');
      }));
    }
  }

  const hasAnswers=Object.values(CA[ci]).some(v=>v!==null);
  const lines=document.querySelectorAll('.sline');
  if(hasAnswers){
    // Already answered — everything immediate
    lines.forEach(l=>l.classList.add('vis'));
    moveStoryToRight(true);
    renderBeats();
  } else {
    // Lines appear one at a time inside glass box
    const perLine=460;
    lines.forEach((l,i)=>setTimeout(()=>l.classList.add('vis'), i*perLine));
    // After last line, show click-to-continue prompt
    const afterLines=lines.length*perLine+350;
    setTimeout(()=>{
      const cont=document.createElement('div');
      cont.className='story-continue';
      cont.textContent='Continue ↓';
      const box=document.getElementById('story-box');
      if(box){
        box.appendChild(cont);
        requestAnimationFrame(()=>requestAnimationFrame(()=>cont.classList.add('vis')));
        cont.addEventListener('click',()=>{
          cont.remove();
          moveStoryToRight(false);
          setTimeout(()=>renderBeats(), 900);
        },{once:true});
      }
    }, afterLines);
  }
}

function moveStoryToRight(instant){
  const box=document.getElementById('story-box');
  if(!box)return;
  const rightCol=document.querySelector('.cards-right');
  if(!rightCol)return;

  if(instant){
    rightCol.appendChild(box);
    return;
  }

  // Measure start (left column position)
  const startRect=box.getBoundingClientRect();

  // Create a fixed-position ghost that visually animates
  const ghost=document.createElement('div');
  ghost.className='story-box';
  ghost.innerHTML=box.innerHTML;
  ghost.style.cssText=
    'position:fixed;left:'+startRect.left+'px;top:'+startRect.top+'px;'+
    'width:'+startRect.width+'px;margin:0;z-index:200;pointer-events:none;'+
    'transition:left 0.78s cubic-bezier(0.22,1,0.36,1),'+
               'top 0.78s cubic-bezier(0.22,1,0.36,1),'+
               'width 0.78s cubic-bezier(0.22,1,0.36,1)';
  document.body.appendChild(ghost);

  // Move real box silently into right column
  box.style.opacity='0';
  box.style.pointerEvents='none';
  rightCol.appendChild(box);

  // Measure target (right column position)
  const endRect=box.getBoundingClientRect();

  // Animate ghost toward target
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    ghost.style.left=endRect.left+'px';
    ghost.style.top=endRect.top+'px';
    ghost.style.width=endRect.width+'px';
  }));

  // When animation ends: reveal real box, remove ghost
  setTimeout(()=>{
    box.style.transition='opacity 0.22s ease';
    box.style.opacity='1';
    box.style.pointerEvents='';
    setTimeout(()=>{
      ghost.remove();
      box.style.transition='';
    },240);
  },800);
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

    } else {
      reachedCurrent=true;
      // After emotion: show fact overlay before next question
      if(beat==='immigrant' && !factShownFor.has(ci)){
        showFactOverlay(p);
        return;
      }
      const cur=document.createElement('div');
      cur.className='b-current';
      if(beat==='emotion'){
        cur.innerHTML=`
          <p class="b-q">How does this person's situation make you feel?</p>
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

  // All beats answered — show the forward CTA
  if(!reachedCurrent){
    const cta=document.createElement('button');
    cta.className='card-cta';
    const isLast=ci===PERSONAS.length-1;
    cta.textContent=isLast?'See your results →':'Next person →';
    cta.onclick=()=>nextCard();
    requestAnimationFrame(()=>requestAnimationFrame(()=>cta.classList.add('vis')));
    beats.appendChild(cta);
  }
}

function showFactOverlay(p){
  let ov=document.getElementById('fact-overlay');
  if(!ov){ov=document.createElement('div');ov.id='fact-overlay';document.body.appendChild(ov);}
  ov.innerHTML=`
    <div class="fo-backdrop" onclick="dismissFactOverlay()"></div>
    <div class="fo-card">
      <div class="fo-eyebrow">— context —</div>
      <p class="fo-text">${p.fact}</p>
      <span class="fo-cite">Source: <a href="${p.cite.url}" target="_blank" rel="noopener">${p.cite.text}</a></span>
      <button class="fo-btn" onclick="dismissFactOverlay()">Continue →</button>
      <div class="fo-progress"><div class="fo-bar" id="fo-bar"></div></div>
    </div>`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    ov.classList.add('visible');
    setTimeout(()=>document.getElementById('fo-bar')?.classList.add('running'),50);
  }));
  factOverlayTimer=setTimeout(()=>dismissFactOverlay(), 8050);
}

function dismissFactOverlay(){
  clearTimeout(factOverlayTimer);
  factShownFor.add(ci);
  const ov=document.getElementById('fact-overlay');
  if(ov){
    ov.classList.remove('visible');
    setTimeout(()=>{ov.innerHTML='';},320);
  }
  renderBeats();
}
window.dismissFactOverlay=dismissFactOverlay;

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
  if(beat==='emotion') factShownFor.delete(ci);
  BEAT_ORDER.slice(BEAT_ORDER.indexOf(beat)).forEach(b=>{CA[ci][b]=null;});
  renderBeats();
}

function transitionCard(newCi){
  const p=PERSONAS[newCi];
  cardTransitionActive=true;

  // ── backdrop ──────────────────────────────────────────
  let bd=document.getElementById('ct-backdrop');
  if(!bd){
    bd=document.createElement('div');
    bd.id='ct-backdrop';
    document.body.appendChild(bd);
  }

  // ── large centered avatar overlay ─────────────────────
  let ov=document.getElementById('card-transition');
  if(!ov){
    ov=document.createElement('div');
    ov.id='card-transition';
    document.body.appendChild(ov);
  }

  const sz=340;
  const startLeft=window.innerWidth/2-sz/2;
  const startTop=window.innerHeight/2-sz/2-40;
  ov.style.cssText=
    'position:fixed;left:'+startLeft+'px;top:'+startTop+'px;'+
    'width:'+sz+'px;z-index:300;text-align:center;'+
    'opacity:0;pointer-events:none;transition:opacity 0.28s ease';
  ov.innerHTML=
    '<div class="ct-avatar">'+makeAvatar(p)+'</div>'+
    '<div class="ct-label">'+
      '<div class="ct-name">'+p.name+'</div>'+
      '<div class="ct-sub">'+p.tag+'</div>'+
    '</div>';

  // Size the SVG for the centered display
  const ovSvg=ov.querySelector('svg');
  if(ovSvg) ovSvg.style.cssText=
    'width:'+sz+'px;height:'+sz+'px;display:block;'+
    'filter:drop-shadow(0 18px 52px rgba(0,0,0,0.55))';

  // Fade in backdrop + overlay
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    bd.classList.add('visible');
    ov.style.opacity='1';
  }));

  // ── after hold: render card, fly avatar to its column ─
  setTimeout(()=>{
    ci=newCi;
    renderCard();
    document.getElementById('s-cards').scrollIntoView({behavior:'instant',block:'start'});

    // Measure target: the SVG inside the (hidden) card-figure
    const figEl=document.getElementById('card-figure');
    const figSvg=figEl?.querySelector('svg');
    const tgt=(figSvg||figEl).getBoundingClientRect();

    // Fade out label, start fading backdrop
    const label=ov.querySelector('.ct-label');
    if(label){label.style.transition='opacity 0.2s ease';label.style.opacity='0';}
    bd.classList.remove('visible');

    // Fly the overlay to the figure position
    ov.style.transition=
      'left 0.72s cubic-bezier(0.22,1,0.36,1),'+
      'top 0.72s cubic-bezier(0.22,1,0.36,1),'+
      'width 0.72s cubic-bezier(0.22,1,0.36,1)';
    ov.style.left=tgt.left+'px';
    ov.style.top=tgt.top+'px';
    ov.style.width=tgt.width+'px';
    if(ovSvg){
      ovSvg.style.transition=
        'width 0.72s cubic-bezier(0.22,1,0.36,1),'+
        'height 0.72s cubic-bezier(0.22,1,0.36,1)';
      ovSvg.style.width=tgt.width+'px';
      ovSvg.style.height=tgt.width+'px'; // square
    }
  }, 500);

  // ── avatar lands: swap overlay → real figure ──────────
  setTimeout(()=>{
    cardTransitionActive=false;
    const figEl=document.getElementById('card-figure');
    if(figEl){
      figEl.style.transition='opacity 0.18s ease';
      figEl.style.opacity='1';
      setTimeout(()=>{figEl.style.transition='';},200);
    }
    ov.style.transition='opacity 0.18s ease';
    ov.style.opacity='0';
    setTimeout(()=>{ov.style.cssText='';ov.innerHTML='';},200);
  }, 500+720+60);
}

function prevCard(){
  if(ci>0){
    transitionCard(ci-1);
  } else {
    goToDemo();
  }
}
function nextCard(){
  if(ci<PERSONAS.length-1){
    transitionCard(ci+1);
  } else {
    goTo('s-reasoning');
    renderReasoningState();
  }
}

function backToCards(){
  goTo('s-cards');
  renderCard();
}

function backToReasoning(){
  goTo('s-reasoning');
  renderReasoningState();
}

function updateReasoningReveal(){
  const section=document.getElementById('s-reasoning');
  if(!section||section.style.display==='none'){
    if(section)section.classList.remove('is-active','is-revealed');
    return;
  }

  const rect=section.getBoundingClientRect();
  const sectionTop=window.scrollY + rect.top;
  const sectionBottom=sectionTop + rect.height;
  const viewportMid=window.scrollY + (window.innerHeight * 0.5);
  const activeEnd=sectionBottom - Math.min(window.innerHeight * 0.18, 140);
  const revealOffset=Math.min(window.innerHeight * 0.18, 140);
  const sectionActive=viewportMid >= sectionTop && window.scrollY < activeEnd;
  const shouldReveal=sectionActive && window.scrollY >= sectionTop + revealOffset;

  section.classList.toggle('is-active', sectionActive);
  section.classList.toggle('is-revealed', shouldReveal);
}

function updatePatternReveal(){
  const section=document.getElementById('s-pattern');
  if(!section||section.style.display==='none'){
    patternRevealStartY=null;
    if(section)section.classList.remove('is-active','is-revealed');
    return;
  }

  const rect=section.getBoundingClientRect();
  const sectionTop=window.scrollY + rect.top;
  const sectionBottom=sectionTop + rect.height;
  if(patternRevealStartY===null){
    const nearHeader=Math.abs(window.scrollY - sectionTop) <= 4;
    if(!nearHeader){
      section.classList.remove('is-active','is-revealed');
      return;
    }
    patternRevealStartY=window.scrollY;
  }
  const viewportMid=window.scrollY + (window.innerHeight * 0.5);
  const activeEnd=sectionBottom - Math.min(window.innerHeight * 0.18, 140);
  const revealOffset=Math.min(window.innerHeight * 0.18, 140);
  const sectionActive=viewportMid >= sectionTop && window.scrollY < activeEnd;
  const scrolledPastHeader=Math.max(0, window.scrollY - patternRevealStartY);
  const shouldReveal=sectionActive && scrolledPastHeader >= revealOffset;

  section.classList.toggle('is-active', sectionActive);
  section.classList.toggle('is-revealed', shouldReveal);
}

function updateOverlayReveals(){
  updateReasoningReveal();
  updatePatternReveal();
}

window.addEventListener('scroll', updateOverlayReveals);
window.addEventListener('resize', updateOverlayReveals);

// ── REASONING ─────────────────────────────────────────────────────────
function renderReasoningState(){
  document.querySelectorAll('.r-tile').forEach(b=>b.classList.remove('on'));
  if(reasoning){
    document.querySelector(`[onclick*="setReasoning('${reasoning}'"]`)?.classList.add('on');
  }
  document.getElementById('r-next').style.display=reasoning?'block':'none';
  setTimeout(updateReasoningReveal,60);
}

function setReasoning(val,btn){
  reasoning=val;
  document.querySelectorAll('.r-tile').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('r-next').style.display='block';
}

// ── PATTERN ───────────────────────────────────────────────────────────
function goToPattern(){
  goTo('s-pattern');
  buildPattern();
  submitToSheet();
  setTimeout(()=>{
    patternRevealStartY=null;
    updatePatternReveal();
  },80);
}

function backToPattern(){
  goTo('s-pattern');
  buildPattern();
  setTimeout(()=>{
    patternRevealStartY=null;
    updatePatternReveal();
  },80);
}

function goToEtymology(){
  goTo('s-etymology');
  renderEtymologyState();
}

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
  etymGuess=btn.textContent.trim();
  document.querySelectorAll('#etym-guess .etym-tile').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  setTimeout(()=>{
    document.getElementById('s-etymology')?.classList.add('has-reveal');
    document.getElementById('etym-reveal').style.display='block';
    const history=document.getElementById('policy-history');
    if(history)history.style.display='block';
    if(!tlInitialized)setTimeout(initPolicyTimeline,100);
  },300);
}

function toggleLabel(card){
  const wasOpen=card.classList.contains('open');
  document.querySelectorAll('.label-card').forEach(c=>c.classList.remove('open'));
  if(!wasOpen)card.classList.add('open');
}

function renderEtymologyState(){
  const section=document.getElementById('s-etymology');
  const reveal=document.getElementById('etym-reveal');
  const history=document.getElementById('policy-history');
  if(!reveal)return;

  document.querySelectorAll('#etym-guess .etym-tile').forEach(btn=>{
    btn.classList.toggle('on', etymGuess!==null && btn.textContent.trim()===etymGuess);
  });

  reveal.style.display=etymGuess?'block':'none';
  section?.classList.toggle('has-reveal', !!etymGuess);
  if(history){
    history.style.display=etymGuess?'block':'none';
    if(!etymGuess)history.classList.remove('is-active');
  }
  if(etymGuess&&tlInitialized){
    setTimeout(()=>window.dispatchEvent(new Event('scroll')),60);
  }
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

function backToEtymology(){
  const etymology=document.getElementById('s-etymology');
  if(etymology)etymology.scrollIntoView({behavior:'smooth',block:'start'});
}
function resetAll(){
  ci=0;demoStep=1;reasoning=null;etymGuess=null;
  Object.assign(demos,{age:'',gender:'',race:[],born_us:'',family_imm:'',state:''});
  PERSONAS.forEach((_,i)=>{CA[i]={emotion:null,immigrant:null,belongs:null,stay:null};});
  document.querySelectorAll('#s-demo .dtile, #s-demo .rtile').forEach(btn=>btn.classList.remove('on'));
  const demoState=document.getElementById('demo-state');
  if(demoState)demoState.value='';
  renderDemoProgression();
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

function getPathDistanceToPoint(pathNode, len, point) {
  const pt = pathNode.getPointAtLength(len);
  const dx = pt.x - point.x;
  const dy = pt.y - point.y;
  return dx * dx + dy * dy;
}

function getNodePathLengths(pathNode, points, totalLen) {
  const coarseSteps = 8000;
  const coarseStepLen = totalLen / coarseSteps;
  const matches = points.map((_, index) => ({
    len: index === 0 ? 0 : index === points.length - 1 ? totalLen : 0,
    dist: Infinity
  }));

  for (let step = 0; step <= coarseSteps; step++) {
    const len = (step / coarseSteps) * totalLen;
    const pt = pathNode.getPointAtLength(len);

    points.forEach((point, index) => {
      const dx = pt.x - point.x;
      const dy = pt.y - point.y;
      const dist = dx * dx + dy * dy;
      if (dist < matches[index].dist) matches[index] = {dist, len};
    });
  }

  const lengths = matches.map((match, index) => {
    if (index === 0) return 0;
    if (index === points.length - 1) return totalLen;

    let bestLen = match.len;
    let bestDist = getPathDistanceToPoint(pathNode, bestLen, points[index]);
    let delta = coarseStepLen;

    for (let i = 0; i < 24; i++) {
      const leftLen = Math.max(0, bestLen - delta);
      const rightLen = Math.min(totalLen, bestLen + delta);
      const leftDist = getPathDistanceToPoint(pathNode, leftLen, points[index]);
      const rightDist = getPathDistanceToPoint(pathNode, rightLen, points[index]);

      if (leftDist < bestDist && leftDist <= rightDist) {
        bestLen = leftLen;
        bestDist = leftDist;
      } else if (rightDist < bestDist) {
        bestLen = rightLen;
        bestDist = rightDist;
      } else {
        delta /= 2;
      }
    }

    return bestLen;
  });

  for (let i = 1; i < lengths.length; i++) {
    if (lengths[i] < lengths[i - 1]) lengths[i] = lengths[i - 1];
  }

  return lengths;
}

// ── PART THREE: SCROLL-DRIVEN POLICY TIMELINE ─────────────────────────
function initPolicyTimeline() {
  if (tlInitialized) return;
  tlInitialized = true;

  const svgEl = document.getElementById('timeline-viz');
  if (!svgEl || typeof d3 === 'undefined') return;

  const svg = d3.select('#timeline-viz');
  const W = 1200, H = 800;
  const isMobileTimeline = window.matchMedia('(max-width: 768px)').matches;
  const tlXSpread = W * (isMobileTimeline ? 0.16 : 0.2);
  const tlYSpan = H * (isMobileTimeline ? 3.2 : 3.5);
  const bgPathWidth = isMobileTimeline ? 14 : 18;
  const animPathWidth = isMobileTimeline ? 12 : 16;
  const nodeRadius = isMobileTimeline ? 10 : 12;
  const nodeStrokeWidth = isMobileTimeline ? 2 : 2.5;
  const yearOffset = isMobileTimeline ? 22 : 28;
  const baseYearSize = isMobileTimeline ? 12 : 14;
  const activeYearSize = isMobileTimeline ? 18 : 28;
  const baseYearStrokeWidth = isMobileTimeline ? 2.5 : 3;
  const activeYearStrokeWidth = isMobileTimeline ? 3 : 4;

  // Build path points — x encodes lean (restrictive ← → expansive), y encodes time
  const points = policies.map((p, i) => {
    const t = i / (policies.length - 1);
    return {
      x: W * 0.5 + p.lean * tlXSpread,
      y: H * 0.15 + tlYSpan * t,
      index: i
    };
  });

  const line = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveMonotoneY);
  const pathData = line(points);

  // Gradient
  const defs = svg.append('defs');
  const grad = defs.append('linearGradient')
    .attr('id', 'tlGradient')
    .attr('x1', '0%').attr('y1', '0%')
    .attr('x2', '0%').attr('y2', '100%');
  [{offset:'0%',color:'#d4a574'},{offset:'50%',color:'#8b6f47'},{offset:'100%',color:'#c94a3a'}]
    .forEach(s => grad.append('stop').attr('offset', s.offset).attr('stop-color', s.color));

  // ── CAMERA GROUP — all path/node content moves together ───────────────
  const cameraGroup = svg.append('g').attr('class', 'tl-camera');

  // Overview highlight path (slightly brighter, fades out as you zoom in)
  const overviewBgPath = cameraGroup.append('path').attr('class', 'tl-overview-bg').attr('d', pathData)
    .attr('fill', 'none').attr('stroke', 'rgba(212,165,116,0.28)')
    .attr('stroke-width', bgPathWidth + 2).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round');

  // Background path
  cameraGroup.append('path').attr('class', 'tl-bg-path').attr('d', pathData)
    .attr('fill', 'none').attr('stroke', 'rgba(212,165,116,0.08)')
    .attr('stroke-width', bgPathWidth).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round');

  // Animated path
  const animPath = cameraGroup.append('path').attr('class', 'tl-anim-path').attr('d', pathData)
    .attr('fill', 'none').attr('stroke', 'url(#tlGradient)')
    .attr('stroke-width', animPathWidth).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round')
    .attr('stroke-dasharray', function() { return this.getTotalLength(); })
    .attr('stroke-dashoffset', function() { return this.getTotalLength(); });

  // Nodes
  const nodeGroups = cameraGroup.selectAll('.tl-node').data(points).enter()
    .append('g').attr('class', 'tl-node')
    .attr('transform', d => `translate(${d.x},${d.y})`);

  nodeGroups.append('circle').attr('r', nodeRadius)
    .attr('fill', 'rgba(212,165,116,0.3)')
    .attr('stroke', '#d4a574').attr('stroke-width', nodeStrokeWidth);

  nodeGroups.append('text')
    .attr('class', 'tl-node-year')
    .attr('x', d => d.x < W / 2 ? yearOffset : -yearOffset)
    .attr('y', 4)
    .attr('text-anchor', d => d.x < W / 2 ? 'start' : 'end')
    .attr('fill', '#d4a574')
    .style('font-family', "var(--serif)")
    .style('font-size', `${baseYearSize}px`).style('font-weight', '600')
    .style('font-style', 'italic')
    .style('letter-spacing', '0.02em')
    .style('paint-order', 'stroke')
    .style('stroke', 'rgba(10,17,40,0.9)')
    .style('stroke-width', `${baseYearStrokeWidth}px`)
    .style('opacity', 0)
    .text(d => policies[d.index].year);

  // Fixed axis overlay — NOT in cameraGroup, stays screen-fixed
  const axis = svg.append('g').attr('class', 'tl-axis');

  // Neutral center line
  axis.append('line')
    .attr('x1', W / 2).attr('y1', 0)
    .attr('x2', W / 2).attr('y2', H)
    .attr('stroke', 'rgba(212,165,116,0.12)')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '3,7');

  // Axis labels
  axis.append('text')
    .attr('x', W * 0.12).attr('y', 32)
    .attr('text-anchor', 'middle')
    .attr('fill', 'rgba(201,74,58,0.55)')
    .style('font-family', "'Space Mono', monospace")
    .style('font-size', '10px').style('letter-spacing', '1px')
    .text('← restrictive');

  axis.append('text')
    .attr('x', W * 0.88).attr('y', 32)
    .attr('text-anchor', 'middle')
    .attr('fill', 'rgba(100,190,130,0.55)')
    .style('font-family', "'Space Mono', monospace")
    .style('font-size', '10px').style('letter-spacing', '1px')
    .text('expansive →');

  // Connector — updated per-frame so it tracks the active node as camera moves
  const connector = axis.append('line')
    .attr('class', 'tl-connector')
    .attr('stroke', 'rgba(212,165,116,0.4)')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '4,5')
    .style('display', 'none');

  // SVG traveler dot — sits inside the active node's gold circle, tracks per-frame
  const travelerDot = axis.append('circle')
    .attr('r', 6)
    .attr('fill', '#c94a3a')
    .style('filter', 'drop-shadow(0 0 10px #c94a3a)')
    .style('display', 'none')
    .attr('cx', W / 2).attr('cy', H / 2);

  const totalLen = animPath.node().getTotalLength();
  const nodeAtLength = getNodePathLengths(animPath.node(), points, totalLen);
  const snapDistance = isMobileTimeline ? 40 : 34;

  // ── OVERVIEW CAMERA CONSTANTS ─────────────────────────────────────────
  // The path spans from y=H*0.15 to y=H*0.15+tlYSpan in SVG coordinates.
  // We scale the cameraGroup so the whole path fits in the viewport.
  // transform="translate(tx,ty) scale(s)" maps point P to: (P.x*s + tx, P.y*s + ty)
  const pathCenterX = W / 2;
  const pathCenterY = H * 0.15 + tlYSpan / 2;
  const pathTotalHeight = H * 0.15 + tlYSpan; // extent from SVG top to last node
  const overviewScale = (H * 0.82) / pathTotalHeight;
  const overviewTx = pathCenterX * (1 - overviewScale);       // centers x
  const overviewTy = H / 2 - overviewScale * pathCenterY;     // centers y

  // Phase thresholds (as fraction of total container scroll)
  const OVERVIEW_END = 0.06;   // hold overview for first 6% of scroll
  const ZOOMIN_END   = 0.14;   // zoom into first node by 14%

  let currentCardSide = 'left';

  function easeInOut(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; }

  function updatePolicyTimeline() {
    const etymologyEl = document.getElementById('s-etymology');
    const sectionEl = document.getElementById('policy-history');
    if (!etymologyEl || etymologyEl.style.display === 'none' || !sectionEl || sectionEl.style.display === 'none') {
      if (sectionEl) sectionEl.classList.remove('is-active');
      clearTimelineOverlays();
      return;
    }

    const containerEl = sectionEl.querySelector('.tl-timeline-container');
    if (!containerEl) return;

    const sectionTop = sectionEl.offsetTop;
    const sectionBottom = sectionTop + sectionEl.offsetHeight;
    const containerTop = sectionTop + containerEl.offsetTop;
    const scrollTop = window.scrollY;
    const activationBuffer = Math.min(window.innerHeight * 0.18, 180);
    const activationTop = containerTop + activationBuffer;
    const sectionActive = scrollTop >= activationTop && scrollTop < sectionBottom;
    sectionEl.classList.toggle('is-active', sectionActive);
    if (!sectionActive) {
      clearTimelineOverlays();
      return;
    }

    const rel = Math.max(0, scrollTop - activationTop);
    const maxScroll = Math.max(1, containerEl.offsetHeight - window.innerHeight - activationBuffer);
    const progress = Math.min(1, rel / maxScroll);
    const canActivateNode = rel > 2;

    // ── PHASE LOGIC: overview → zoom-in → follow ──────────────────────
    let camTx, camTy, camScale, followProgress;

    if (progress <= OVERVIEW_END) {
      // Phase 1: static overview — entire path visible
      camTx = overviewTx;
      camTy = overviewTy;
      camScale = overviewScale;
      followProgress = 0;

    } else if (progress <= ZOOMIN_END) {
      // Phase 2: zoom into the first node
      const t = easeInOut((progress - OVERVIEW_END) / (ZOOMIN_END - OVERVIEW_END));
      const firstPt = points[0];
      const followTx = W / 2 - firstPt.x;
      const followTy = H / 2 - firstPt.y;
      camTx = overviewTx + (followTx - overviewTx) * t;
      camTy = overviewTy + (followTy - overviewTy) * t;
      camScale = overviewScale + (1 - overviewScale) * t;
      followProgress = 0;

    } else {
      // Phase 3: follow the path tip
      followProgress = (progress - ZOOMIN_END) / (1 - ZOOMIN_END);
      const tipLen = followProgress * totalLen;

      let snapIdx = -1, snapGap = Infinity;
      nodeAtLength.forEach((nodeLen, index) => {
        const gap = Math.abs(tipLen - nodeLen);
        if (gap < snapGap) { snapGap = gap; snapIdx = index; }
      });
      const isSnapped = snapGap <= snapDistance;
      const tip = isSnapped ? points[snapIdx] : animPath.node().getPointAtLength(tipLen);
      camTx = W / 2 - tip.x;
      camTy = H / 2 - tip.y;
      camScale = 1;
    }

    // Apply unified camera transform to entire content group
    cameraGroup.attr('transform', `translate(${camTx},${camTy}) scale(${camScale})`);

    // Overview highlight fades out as zoom-in completes
    const overviewFade = progress <= OVERVIEW_END ? 1 :
      progress <= ZOOMIN_END ? 1 - (progress - OVERVIEW_END) / (ZOOMIN_END - OVERVIEW_END) : 0;
    overviewBgPath.style('opacity', overviewFade);

    // Year labels fade in during zoom-in, hidden in overview (they'd be 3px tall)
    const labelOpacity = progress <= OVERVIEW_END ? 0 :
      progress <= ZOOMIN_END ? (progress - OVERVIEW_END) / (ZOOMIN_END - OVERVIEW_END) : 1;
    cameraGroup.selectAll('.tl-node-year').style('opacity', labelOpacity);

    // Traveler dot only visible in follow phase
    travelerDot.style('display', progress > ZOOMIN_END ? null : 'none');
    travelerDot.attr('cx', W / 2).attr('cy', H / 2);

    // Stroke draws only in follow phase
    animPath.attr('stroke-dashoffset', totalLen * (1 - followProgress));

    // ── INDEX: which node has the tip passed / which is active ─────────
    const isFollowPhase = progress > ZOOMIN_END;

    let passedIndex = -1;
    let activeIndex = -1;

    if (isFollowPhase && canActivateNode) {
      const tipLen = followProgress * totalLen;
      for (let i = 0; i < nodeAtLength.length; i++) {
        if (tipLen >= nodeAtLength[i]) passedIndex = i;
        else break;
      }
      let snapIdx2 = -1, snapGap2 = Infinity;
      nodeAtLength.forEach((nodeLen, index) => {
        const gap = Math.abs(tipLen - nodeLen);
        if (gap < snapGap2) { snapGap2 = gap; snapIdx2 = index; }
      });
      if (snapGap2 <= snapDistance) activeIndex = snapIdx2;
    }

    // Connector (screen-space position = P * camScale + camTx/camTy)
    if (!isMobileTimeline && activeIndex >= 0) {
      const nodeScreenX = points[activeIndex].x * camScale + camTx;
      const nodeScreenY = points[activeIndex].y * camScale + camTy;
      connector
        .style('display', null)
        .attr('x1', nodeScreenX).attr('y1', nodeScreenY)
        .attr('x2', currentCardSide === 'left' ? 25 : W - 25)
        .attr('y2', nodeScreenY);
    } else {
      connector.style('display', 'none');
    }

    // Node glow every frame
    cameraGroup.selectAll('g.tl-node circle').each(function(d) {
      if (d.index === activeIndex)
        d3.select(this).style('filter', 'drop-shadow(0 0 20px rgba(201,74,58,0.9))');
      else if (d.index < passedIndex)
        d3.select(this).style('filter', 'drop-shadow(0 0 12px rgba(212,165,116,0.6))');
      else
        d3.select(this).style('filter', 'none');
    });

    cameraGroup.selectAll('g.tl-node text.tl-node-year').each(function(d) {
      const year = d3.select(this);
      if (d.index === activeIndex) {
        year
          .attr('fill', '#ffd7a1')
          .style('font-size', `${activeYearSize}px`)
          .style('font-weight', '700')
          .style('stroke', 'rgba(10,17,40,0.96)')
          .style('stroke-width', `${activeYearStrokeWidth}px`)
          .style('filter', 'drop-shadow(0 0 10px rgba(255,215,161,0.35))');
      } else if (d.index < passedIndex) {
        year
          .attr('fill', '#d4a574')
          .style('font-size', `${baseYearSize}px`)
          .style('font-weight', '600')
          .style('stroke', 'rgba(10,17,40,0.9)')
          .style('stroke-width', `${baseYearStrokeWidth}px`)
          .style('filter', 'none');
      } else {
        year
          .attr('fill', 'rgba(212,165,116,0.72)')
          .style('font-size', `${baseYearSize}px`)
          .style('font-weight', '600')
          .style('stroke', 'rgba(10,17,40,0.85)')
          .style('stroke-width', `${baseYearStrokeWidth}px`)
          .style('filter', 'none');
      }
    });

    if (activeIndex === -1) {
      clearTimelineOverlays();
      return;
    }

    // ── INDEX CHANGE: swap cards only when snapped to a node ──────────
    if (activeIndex === tlCurrentIndex || activeIndex >= policies.length) return;
    tlCurrentIndex = activeIndex;

    const policy    = policies[activeIndex];
    currentCardSide = activeIndex % 2 === 0 ? 'left' : 'right';
    const photoSide = currentCardSide === 'left' ? 'right' : 'left';

    if (tlActiveCard)  { tlActiveCard.remove();  tlActiveCard  = null; }
    if (tlActivePhoto) { tlActivePhoto.remove(); tlActivePhoto = null; }

    tlActiveCard = document.createElement('div');
    tlActiveCard.className = `policy-item ${currentCardSide} active`;
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
  }

  window.addEventListener('scroll', updatePolicyTimeline);
  updatePolicyTimeline();
}
