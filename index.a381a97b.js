const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),l=document.querySelector(".cat-info");l.style.marginTop="20px",t.style.display="block",n.style.display="none",e.style.display="none",fetch("https://api.thecatapi.com/v1/breeds?api_key=live_EmGs6jOL30d1l0kberjYPFymaA6iwvan8lCTkcFsRIsLH8Vet0eBESBZovly0VeW").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((l=>{l.forEach((t=>{const n=document.createElement("option");n.value=t.id,n.textContent=t.name,e.appendChild(n)})),t.style.display="none",e.style.display="block",n.style.display="none"})).catch((e=>{t.style.display="none",n.style.display="block",n.style.color="red"})),e.addEventListener("change",(()=>{const o=e.value;var s;l.innerHTML="",n.style.display="none",t.style.display="block",l.style.display="none",(s=o,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${s}&api_key=live_EmGs6jOL30d1l0kberjYPFymaA6iwvan8lCTkcFsRIsLH8Vet0eBESBZovly0VeW`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{if(e.length>0)return e[0];throw new Error("No cat found for the selected breed.")}))).then((e=>{const n=e.breeds&&e.breeds.length>0?e.breeds[0]:null;if(n){const o=document.createElement("img");o.src=e.url,o.width=400,l.appendChild(o);const s=document.createElement("div");s.style.marginLeft="20px",s.style.width="500px";const d=document.createElement("h3");d.textContent=n.name,s.appendChild(d);const r=document.createElement("p");r.textContent=n.description,s.appendChild(r);const a=document.createElement("p"),c=document.createElement("strong");c.textContent="Temperament: ",a.appendChild(c);const i=document.createTextNode(n.temperament);a.appendChild(i),s.appendChild(a),l.appendChild(s),t.style.display="none",l.style.display="flex"}})).catch((e=>{t.style.display="none",n.style.display="block",n.style.color="red"}))}));
//# sourceMappingURL=index.a381a97b.js.map
