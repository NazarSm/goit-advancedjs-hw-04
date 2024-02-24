import{i as u,S as P,a as E}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const S="42430851-e611567fbd1b8d73c000ca0dd",$="https://pixabay.com/api/",p=document.getElementById("search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");let a=0,f=0,h=1,c="",i=!1;u.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:"300px"});const x=new P(".photo_link"),g=o=>{l.classList.add("visually-hidden"),i=!1,u.error({message:o.message})},y=o=>{const t=o.map(({webformatURL:r,largeImageURL:d,tags:e,likes:s,views:n,comments:L,downloads:w})=>`
    <div class='photo-card'>
      <a class='photo_link' href='${d}'>
        <img class='photo' src='${r}' alt='${e}' loading='lazy' />
      </a>
      <div class='info'>
        <div class='info-item'>
          <b>Likes</b>
          <p>${s}</p>
        </div>
        <div class='info-item'>
          <b>Views</b>
           <p>${n}</p>
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
  `).join("");f+=o.length,m.insertAdjacentHTML("beforeend",t),x.refresh()},I=()=>{h=1,c="",a=0,f=0,m.textContent=""},O=async o=>{if(o.preventDefault(),I(),c=o.target.elements.searchQuery.value.trim(),!c){p.reset();return}l.classList.remove("visually-hidden"),i=!0;try{const r=(await b(c,h)).data;a=r.totalHits,a?u.success({message:`Hooray! We found ${a} images.`}):u.error({message:"Sorry, there are no images matching your search query. Please try again."}),y(r.hits),i=!1,l.classList.add("visually-hidden"),window.addEventListener("scroll",v)}catch(t){g(t)}},v=async()=>{if(!(!(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight)||i)){if(a<=f){window.removeEventListener("scroll",v),m.insertAdjacentHTML("beforeend","<p>We're sorry, but you've reached the end of search results.</p>");return}h++,l.classList.remove("visually-hidden"),i=!0;try{const t=await b(c,h);y(t.data.hits),i=!1,l.classList.add("visually-hidden");const{height:r}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*1.5,behavior:"smooth"})}catch(t){g(t)}}};p.addEventListener("submit",O);const C=E.create({baseURL:$}),b=(o,t)=>{const r=new URLSearchParams({key:S,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t,q:o});return C.get(`?${r}`)};
//# sourceMappingURL=commonHelpers.js.map
