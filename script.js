const imagePath = (name) => {
  if (!name) return '';
  if (/^https?:\/\//.test(name) || name.startsWith('/')) return name;
  if (name.startsWith('assets/images/')) return name;
  return `assets/images/${name}`;
};
async function loadProjects(){
  try { const r=await fetch('projects.json'); if(!r.ok) throw new Error('Could not load projects'); const data=await r.json(); return data.projects||[]; }
  catch(e){ console.error(e); return []; }
}
function projectCard(p){
  return `<article class="project-card"><a href="project.html?slug=${encodeURIComponent(p.slug)}"><div class="project-thumb"><img src="${imagePath(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy"></div><div class="project-meta"><span>${escapeHtml(p.category)}</span><span>${escapeHtml(p.type||'Design')}</span></div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p></a></article>`;
}
function escapeHtml(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
document.addEventListener('DOMContentLoaded', async()=>{
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(toggle&&nav) toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  const projects=await loadProjects();
  const featured=document.getElementById('featured-projects');
  if(featured) featured.innerHTML=projects.filter(p=>p.featured).slice(0,6).map(projectCard).join('');
  const all=document.getElementById('all-projects');
  if(all){
    const render=(filter='All')=>{const visible=filter==='All'?projects:projects.filter(p=>p.category===filter);all.innerHTML=visible.map(projectCard).join('')||'<p>No projects in this category yet.</p>';};
    render();
    document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter);}));
  }
  const detail=document.getElementById('project-detail');
  if(detail){
    const slug=new URLSearchParams(location.search).get('slug'), p=projects.find(x=>x.slug===slug);
    if(p){document.title=`${p.title} — Yasanga P.`;document.getElementById('detail-category').textContent=`${p.category} / ${p.type}`;document.getElementById('detail-title').textContent=p.title;document.getElementById('detail-description').textContent=p.description;const im=document.getElementById('detail-image');im.src=imagePath(p.image);im.alt=p.title;}
    else {document.getElementById('detail-title').textContent='Project not found';document.getElementById('detail-description').textContent='This project may have been moved or removed. Browse the portfolio to see available work.';}
  }
  const form=document.getElementById('contact-form');
  if(form) form.addEventListener('submit',e=>{
    e.preventDefault(); const d=new FormData(form);
    const subject=encodeURIComponent(`Project inquiry from ${d.get('name')}`);
    const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany: ${d.get('company')||'Not provided'}\nProject type: ${d.get('project')}\nEstimated budget: ${d.get('budget')||'Not provided'}\n\nProject details:\n${d.get('details')}`);
    location.href=`mailto:rasinduy@gmail.com?subject=${subject}&body=${body}`;
  });
});