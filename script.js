const loader=document.getElementById("loader");
const loaderStars=document.getElementById("loaderStars");
const opening=document.getElementById("opening");
const story=document.getElementById("story");
const ending=document.getElementById("ending");
const startBtn=document.getElementById("startBtn");
const nextBtn=document.getElementById("nextBtn");
const finishBtn=document.getElementById("finishBtn");
const replay=document.getElementById("replay");
const messagesEl=document.getElementById("messages");
const counter=document.getElementById("counter");
const progress=document.getElementById("progress");
const music=document.getElementById("bgMusic");
const hearts=document.getElementById("hearts");
const stars=document.getElementById("stars");

const messages=[
 {time:"02 SEPTEMBER 2026 · البداية",side:"left",text:"فاكرة يوم ٢ سبتمبر ٢٠٢٦ يا وفاء؟ 🤍",sub:"ده اليوم اللي اتكلمنا فيه لأول مرة… يمكن وقتها كنا لسه بنكتشف بعض ولسه بنشوف هل هنبقي مناسبين ولا لا بس حقيقي دلوقتي بقيتي غاليه عندي ."},
 {time:"أول كلام بينا",side:"right",text:"من اليوم ده بقيتي حد مختلف بالنسبالي.",sub:"كل رسالة كانت بتفتحلي باب أعرفك أكتر، وكل مرة كنا بنتكلم فيها كنت بحس إني محظوظ إن طريقنا اتقابل."},
 {time:"تفاصيل صغيرة… ومشاعر كبيرة",side:"left",text:"في ناس بتدخل حياتنا بهدوء، وبعدين تبقى جزء من كل حاجة.",sub:"وانتي يا وفاء بقيتي من الناس اللي وجودهم بيفرق في اليوم، واللي رسالة منهم ممكن تغيّر المود كله وتخلّي الدنيا أحن."},
 {time:"24 SEPTEMBER 2026 · يوم العيلتين",side:"right",text:"ويوم ٢٤ سبتمبر ٢٠٢٦… أهلنا قعدوا سوا. 🤍",sub:"اليوم ده كان خطوة جميلة ومهمة، حسّيت فيه إن الحكاية مش بس مشاعر بين اتنين؛ دي بداية طريق نفسنا نمشيه بالحلال، وربنا يكتب لنا فيه الخير."},
 {time:"خطوة أقرب للحلم",side:"left",text:"كل خطوة بتقرّبنا من اللي بنتمناه بتفرّح قلبي.",sub:"نفسي دايمًا تكون خطواتنا فيها رضا ربنا وراحة بالنا ورضا أهلنا، ونفضل ناخد كل حاجة واحدة واحدة، بحب واحترام وصدق."},
 {time:"09 OCTOBER 2026 · قراءة الفاتحة",side:"right",text:"ويوم ٩ أكتوبر ٢٠٢٦… قرينا الفاتحة. ❤🌍",sub:"تاريخ هيفضل له مكان خاص في قلبي، لأنه بيفكّرني إن في حاجات جميلة بتبدأ بدعوة، وبنية صافية، وأمل كبير في ربنا."},
 {time:"يا وفاء…",side:"left",text:"أنا مش بحبك عشان حاجة واحدة بس.",sub:"بحب وجودك في حكايتي، وبحب إن قدامنا فرصة نعرف بعض أكتر ونبني بينا ثقة وونس وأمان. نفسي أكون الشخص اللي قلبك يرتاح معاه."},
 {time:"وعد من قلبي",side:"right",text:"مش هوعِدك إن كل الأيام هتبقى سهلة…",sub:"بس أوعدك إني أحاول أكون صادق معاكي، أسمعك، أحترمك، وأقدّر وجودك. الحب عندي مش كلام حلو وبس؛ الحب اهتمام ومواقف واحتواء."},
 {time:"حاجات نفسي نعيشها",side:"left",text:"نفسي يبقى لينا ألف ذكرى حلوة جاية.",sub:"ضحك من قلبنا، وكلام طويل من غير ما نحس بالوقت، وأيام عادية تبقى مميزة لمجرد إننا بنشاركها سوا… وربنا يسهّل طريقنا ويجمعنا على خير."},
 {time:"دعوة ليكي",side:"right",text:"ربنا يفرّح قلبك يا وفاء زي ما وجودك بيفرّح قلبي.",sub:"ويحفظك من كل زعل، ويكتبلك راحة البال والنجاح والخير، ويخلّي أيامك مليانة نور. وربنا يخلينا لبعض وميحرمناش من بعض، يا رب يتمّملنا على خير."},
 {time:"حاجة لازم تعرفيها",side:"left",text:"انتي مش صفحة عاديه في حياتي.",sub:"انتي إنسانة ليها مكانة خاصة، وحكاية نفسي أحافظ عليها وأديها حقها من الاهتمام والصدق. وكل تاريخ من التواريخ دي بقى علامة جميلة في بدايتنا."},
 {time:"عشان دي مش مجرد صورة، دي بداية حكاية نفسي تكمل للأبد. 💍❤️",side:"center",photo:true,text:"ودي اول صوره لينا مع بعض ومش قادر اوصفلك مشاعري كانت ازاي❤",sub:"يوم ما قرينا الفاتحة، مكنش مجرد يوم في حكايتنا… ده كان اليوم اللي دعيت فيه ربنا إنك تفضلي ليا عمر كامل، وإن كل خطوة جاية في حياتنا تكون سوا، لحد ما تبقي مراتي وأجمل نصيب كتبهولي ربنا يا وفاء. 🤍💍"},
 {time:"من قلبي ليكي",side:"right",text:"يا وفاء، وجودك نعمة بتمنى أحافظ عليها.",sub:"نفسي أفضل أشوفك مبسوطة، وأكون سبب في ابتسامتك مش في زعلك. ولو اختلفنا يوم، نعرف نتكلم ونفهم بعض بدل ما نسيب المسافة تكبر."},
 {time:"حكايتنا لسه في أولها",side:"left",text:"من ٢ سبتمبر، لـ٢٤ سبتمبر، لـ٩ أكتوبر… 🤍",sub:"ثلاث محطات هيفضلوا محفورين في ذاكرتي: أول كلام، وقعدة أهلنا، وقراءة الفاتحة. يا رب اللي جاي يكون أجمل وأهدى ومليان بركة."},
 {time:"آخر الكلام… وأول الحكاية",side:"right",text:"بحبك يا وفاء… وربنا يكتب لنا الخير سوا. ❤️",sub:"لو ليا أمنية أطلبها من ربنا، فهي إننا نكمّل الطريق بقلوب صافية، ونفضل نختار بعض بالاحترام والرحمة كل يوم. دي رسالتي ليكي، ودي حكايتنا اللي لسه بتتكتب."}
];

let index=0,started=false,locked=false;

function makeStars(container,count){
 for(let i=0;i<count;i++){
  const s=document.createElement("i");
  s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";
  s.style.animationDelay=Math.random()*5+"s";
  s.style.animationDuration=3+Math.random()*5+"s";
  container.appendChild(s);
 }
}
function createHeart(){
 const h=document.createElement("span");
 h.className="heart";h.textContent=["♡","♥","✦","·"][Math.floor(Math.random()*4)];
 h.style.left=Math.random()*100+"%";h.style.setProperty("--dx",(Math.random()-.5)*150+"px");
 h.style.setProperty("--dur",3+Math.random()*3+"s");
 hearts.appendChild(h);setTimeout(()=>h.remove(),6500);
}
function rain(n=18){for(let i=0;i<n;i++)setTimeout(createHeart,i*100)}

function sleep(ms){return new Promise(r=>setTimeout(r,ms))}
async function typeText(el,text,speed=18){
 el.textContent="";
 for(const c of text){el.textContent+=c;await sleep(speed)}
}
function startMusic(){
 music.volume=0;
 music.play().then(()=>{
  let v=0;const f=setInterval(()=>{v+=.025;music.volume=Math.min(v,.42);if(v>=.42)clearInterval(f)},70)
 }).catch(()=>{});
}
function fadeMusic(){
 let v=music.volume;const f=setInterval(()=>{v-=.035;music.volume=Math.max(v,0);if(v<=0){clearInterval(f);music.pause();music.currentTime=0}},60)
}

async function renderMessage(i){
 locked=true;
 counter.textContent=String(i+1).padStart(2,"0");
 progress.style.width=((i+1)/messages.length*100)+"%";
 messagesEl.innerHTML="";
 const m=messages[i];

 if(m.photo){
  const pc=document.createElement("div");pc.className="photo-message";
  pc.innerHTML=`<div class="photo-card"><div class="photo-glow"></div><img src="photo.jpeg" alt="وفاء"><div class="scan"></div><span>الصورة دي هتفضل من أحب الصور لقلبي طول العمر. 🤍</span></div>`;
  messagesEl.appendChild(pc);
  await sleep(750);
 }
 const meta=document.createElement("div");meta.className="message-meta";meta.textContent=m.time;messagesEl.appendChild(meta);
 const bubble=document.createElement("article");bubble.className="bubble "+m.side;
 const main=document.createElement("div");main.className="main-line";
 const sub=document.createElement("p");sub.className="sub-line";
 bubble.append(main,sub);messagesEl.appendChild(bubble);
 await sleep(280);
 await typeText(main,m.text,m.text.length>55?13:22);
 await sleep(180);
 await typeText(sub,m.sub,12);
 if(m.photo||i===5||i===8||i===14)rain(24);
 if(i===messages.length-1){
  nextBtn.classList.add("hidden");finishBtn.classList.remove("hidden");
 }else{
  nextBtn.classList.remove("hidden");finishBtn.classList.add("hidden");
 }
 locked=false;
}

async function begin(){
 if(started)return;started=true;startMusic();
 opening.classList.add("exit");await sleep(850);
 opening.classList.add("hidden");story.classList.remove("hidden");
 await sleep(350);renderMessage(0);
}
async function next(){
 if(!started||locked)return;
 if(index<messages.length-1){index++;await renderMessage(index)}
}
function finish() {
  if (locked) return;
  story.classList.add("fade-out");
  setTimeout(() => {
    story.classList.add("hidden");
    ending.classList.remove("hidden");
    ending.classList.add("show");
    rain(35);
  }, 700);
}
function reset(){
 ending.classList.remove("show");ending.classList.add("hidden");
 story.classList.remove("fade-out");story.classList.add("hidden");
 opening.classList.remove("hidden","exit");
 index=0;started=false;messagesEl.innerHTML="";progress.style.width="0%";
 nextBtn.classList.remove("hidden");finishBtn.classList.add("hidden");
}
startBtn.addEventListener("click",begin);
nextBtn.addEventListener("click",next);
finishBtn.addEventListener("click",finish);
replay.addEventListener("click",()=>{reset();setTimeout(begin,300)});
document.addEventListener("keydown",e=>{
 if(passwordGate.isConnected)return;if(e.code==="Space"||e.code==="ArrowDown"||e.code==="Enter"){e.preventDefault();started?next():begin()}
});
let touchStart=0;
story.addEventListener("touchstart",e=>touchStart=e.touches[0].clientY,{passive:true});
story.addEventListener("touchend",e=>{
 const dy=touchStart-e.changedTouches[0].clientY;
 if(Math.abs(dy)>45)dy>0?next():null;
},{passive:true});

const passwordGate=document.getElementById("passwordGate");
const passwordForm=document.getElementById("passwordForm");
const passwordInput=document.getElementById("passwordInput");
const passwordError=document.getElementById("passwordError");
passwordForm.addEventListener("submit",e=>{
 e.preventDefault();
 if(passwordInput.value==="12122005"){passwordError.textContent="";passwordGate.classList.add("gate-open");setTimeout(()=>passwordGate.remove(),850);}
 else {passwordError.textContent="الباسورد مش صح يا قمر… جربي تاني 🤍";passwordInput.value="";passwordInput.focus();passwordForm.classList.remove("shake");void passwordForm.offsetWidth;passwordForm.classList.add("shake");}
});
makeStars(stars,80);makeStars(loaderStars,110);
setInterval(createHeart,1200);

window.addEventListener("load",()=>{
 setTimeout(()=>loader.classList.add("loaded"),2800);
});
