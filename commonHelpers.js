import{S as w,a as P,i as h}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="42430851-e611567fbd1b8d73c000ca0dd",E="https://pixabay.com/api/",p=document.getElementById("search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader");let l=0,m=0,d=1,a="";const $=new w(".photo_link"),f=r=>{n.classList.add("visually-hidden"),h.error({message:r.message})},y=r=>{const t=r.map(({webformatURL:o,largeImageURL:c,tags:e,likes:s,views:i,comments:b,downloads:L})=>`
    <div class='photo-card'>
      <a class='photo_link' href='${c}'>
        <img class='photo' src='${o}' alt='${e}' loading='lazy' />
      </a>
      <div class='info'>
        <div class='info-item'>
          <b>Likes</b>
          <p>${s}</p>
        </div>
        <div class='info-item'>
          <b>Views</b>
           <p>${i}</p>
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
  `).join("");m+=r.length,u.insertAdjacentHTML("beforeend",t),$.refresh()},x=()=>{d=1,a="",l=0,m=0,u.textContent=""},I=async r=>{if(r.preventDefault(),x(),a=r.target.elements.searchQuery.value.trim(),!a){p.reset();return}n.classList.remove("visually-hidden");try{const o=(await v(a,d)).data;l=o.totalHits,l||h.error({message:"Sorry, there are no images matching your search query. Please try again."}),y(o.hits),n.classList.add("visually-hidden"),window.addEventListener("scroll",g)}catch(t){f(t)}},g=async()=>{if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){if(l<m){window.removeEventListener("scroll",g),u.insertAdjacentHTML("beforeend","<p>We're sorry, but you've reached the end of search results.</p>");return}d++,n.classList.remove("visually-hidden");try{const t=await v(a,d);y(t.data.hits),n.classList.add("visually-hidden")}catch(t){f(t)}}};p.addEventListener("submit",I);const O=P.create({baseURL:E}),v=(r,t)=>{const o=new URLSearchParams({key:S,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t,q:r});return O.get(`?${o}`)};
//# sourceMappingURL=commonHelpers.js.map
