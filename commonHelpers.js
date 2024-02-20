import{S as P,a as E,i as f}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="42430851-e611567fbd1b8d73c000ca0dd",$="https://pixabay.com/api/",p=document.getElementById("search-form"),d=document.querySelector(".gallery"),c=document.querySelector(".loader");let u=0,h=0,m=1,n="",i=!1;const C=new P(".photo_link"),y=r=>{c.classList.add("visually-hidden"),i=!1,f.error({message:r.message})},g=r=>{const t=r.map(({webformatURL:o,largeImageURL:l,tags:e,likes:s,views:a,comments:L,downloads:w})=>`
    <div class='photo-card'>
      <a class='photo_link' href='${l}'>
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
          <p>${L}</p>
        </div>
        <div class='info-item'>
          <b>Downloads</b>
          <p>${w}</p>
        </div>
      </div>
    </div>
  `).join("");h+=r.length,d.insertAdjacentHTML("beforeend",t),C.refresh()},x=()=>{m=1,n="",u=0,h=0,d.textContent=""},H=async r=>{if(r.preventDefault(),x(),n=r.target.elements.searchQuery.value.trim(),!n){p.reset();return}c.classList.remove("visually-hidden"),i=!0;try{const o=(await b(n,m)).data;u=o.totalHits,u||f.error({message:"Sorry, there are no images matching your search query. Please try again."}),g(o.hits),c.classList.add("visually-hidden"),i=!1,window.addEventListener("scroll",v)}catch(t){y(t)}},v=async()=>{if(!(!(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight)||i)){if(u<h){window.removeEventListener("scroll",v),d.insertAdjacentHTML("beforeend","<p>We're sorry, but you've reached the end of search results.</p>");return}m++,c.classList.remove("visually-hidden"),i=!0;try{const t=await b(n,m);g(t.data.hits),i=!1,c.classList.add("visually-hidden");const{height:o}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch(t){y(t)}}};p.addEventListener("submit",H);const I=E.create({baseURL:$}),b=(r,t)=>{const o=new URLSearchParams({key:S,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t,q:r});return I.get(`?${o}`)};
//# sourceMappingURL=commonHelpers.js.map
