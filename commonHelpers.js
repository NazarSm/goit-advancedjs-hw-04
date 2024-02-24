import{S as P,a as E,i as h}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="42430851-e611567fbd1b8d73c000ca0dd",$="https://pixabay.com/api/",p=document.getElementById("search-form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");let n=0,f=0,m=1,c="",i=!1;const C=new P(".photo_link"),g=r=>{l.classList.add("visually-hidden"),i=!1,h.error({message:r.message})},y=r=>{const t=r.map(({webformatURL:o,largeImageURL:d,tags:e,likes:s,views:a,comments:L,downloads:w})=>`
    <div class='photo-card'>
      <a class='photo_link' href='${d}'>
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
  `).join("");f+=r.length,u.insertAdjacentHTML("beforeend",t),C.refresh()},H=()=>{m=1,c="",n=0,f=0,u.textContent=""},x=async r=>{if(r.preventDefault(),H(),c=r.target.elements.searchQuery.value.trim(),!c){p.reset();return}l.classList.remove("visually-hidden"),i=!0;try{const o=(await b(c,m)).data;n=o.totalHits,n?h.success({message:`Hooray! We found ${n} images.`}):h.error({message:"Sorry, there are no images matching your search query. Please try again."}),y(o.hits),i=!1,l.classList.add("visually-hidden"),window.addEventListener("scroll",v)}catch(t){g(t)}},v=async()=>{if(!(!(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight)||i)){if(n<=f){window.removeEventListener("scroll",v),u.insertAdjacentHTML("beforeend","<p>We're sorry, but you've reached the end of search results.</p>");return}m++,l.classList.remove("visually-hidden"),i=!0;try{const t=await b(c,m);y(t.data.hits),i=!1,l.classList.add("visually-hidden");const{height:o}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*1.5,behavior:"smooth"})}catch(t){g(t)}}};p.addEventListener("submit",x);const I=E.create({baseURL:$}),b=(r,t)=>{const o=new URLSearchParams({key:S,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t,q:r});return I.get(`?${o}`)};
//# sourceMappingURL=commonHelpers.js.map
