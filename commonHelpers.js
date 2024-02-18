import{a as w,i as p}from"./assets/vendor-db25513e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const P="42430851-e611567fbd1b8d73c000ca0dd",E="https://pixabay.com/api/",f=document.getElementById("search-form"),d=document.querySelector(".gallery"),c=document.querySelector(".loader");let l=0,u=0,m=1,i="";const h=r=>{c.classList.add("visually-hidden"),p.error({message:r.message})},y=r=>{const t=r.map(({webformatURL:o,largeImageURL:n,tags:e,likes:s,views:a,comments:b,downloads:L})=>`
    <div class='photo-card'>
      <a class='photo_link' href='${n}'>
        <img class='photo' src='${o}' alt='${e}' loading='lazy' />
      </a>
      <div class='info'>
        <div class='info-item'>
          <b>Likes</b>
          <p>${s}</p>
        </div>
        <div class='info-item'>
          <b>Views</b>
           <p>${a}</p>
        </div>
        <div class='info-item'>
          <b>Comments</b>
          <p>${b}</p>
        </div>
        <div class='info-item'>
          <b>Downloads</b>
          <p>${L}</p>
        </div>
      </div>
    </div>
  `).join("");u+=r.length,d.insertAdjacentHTML("beforeend",t)},$=()=>{m=1,i="",l=0,u=0,d.textContent=""},S=async r=>{if(r.preventDefault(),$(),i=r.target.elements.searchQuery.value.trim(),!i){f.reset();return}c.classList.remove("visually-hidden");try{const o=(await v(i,m)).data;l=o.totalHits,l||p.error({message:"Sorry, there are no images matching your search query. Please try again."}),y(o.hits),c.classList.add("visually-hidden"),window.addEventListener("scroll",g)}catch(t){h(t)}},g=async()=>{if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){if(l>u){window.removeEventListener("scroll",g),d.insertAdjacentHTML("beforeend","<p>We're sorry, but you've reached the end of search results.</p>");return}try{const t=await v(i,m++)}catch(t){h(t)}y(response.data.hits),c.classList.add("visually-hidden")}};f.addEventListener("submit",S);const I=w.create({baseURL:E}),v=(r,t)=>{const o=new URLSearchParams({key:P,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t,q:r});return I.get(`?${o}`)};
//# sourceMappingURL=commonHelpers.js.map
