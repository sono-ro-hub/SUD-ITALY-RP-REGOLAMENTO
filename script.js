const body=document.body;
window.addEventListener("load",()=>{setTimeout(()=>{document.getElementById("loader").classList.add("done");body.classList.remove("loading")},650)});

const navbar=document.querySelector(".navbar"), topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",scrollY>40);
  topBtn.classList.toggle("show",scrollY>600);
  document.querySelectorAll("section[id]").forEach(s=>{
    const a=document.querySelector(`nav a[href="#${s.id}"]`);
    if(!a)return;
    const r=s.getBoundingClientRect();
    if(r.top<=150 && r.bottom>150){
      document.querySelectorAll("nav a").forEach(x=>x.classList.remove("active"));
      a.classList.add("active");
    }
  });
},{passive:true});
topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener("click",e=>{
  const id=a.getAttribute("href");
  if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:"smooth"})}
  document.querySelector(".navbar")?.classList.remove("open");
 });
});

const menu=document.querySelector(".menu-btn");
menu?.addEventListener("click",()=>document.querySelector(".navbar").classList.toggle("open"));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
 glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";
},{passive:true});

const counters=document.querySelectorAll("[data-count]");
const countObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  const el=entry.target, target=el.dataset.count;
  if(target==="∞")return;
  let n=0; const end=Number(target), step=Math.max(1,Math.ceil(end/35));
  const timer=setInterval(()=>{n=Math.min(end,n+step);el.textContent=n;if(n>=end)clearInterval(timer)},35);
  countObserver.unobserve(el);
 });
},{threshold:.7});
counters.forEach(x=>countObserver.observe(x));

document.querySelectorAll(".hero").forEach(hero=>{
 hero.addEventListener("pointermove",e=>{
   const x=(e.clientX/innerWidth-.5)*8, y=(e.clientY/innerHeight-.5)*8;
   document.querySelector(".hero-logo").style.transform=`translate(${x}px,${y}px)`;
 });
 hero.addEventListener("pointerleave",()=>document.querySelector(".hero-logo").style.transform="");
});
