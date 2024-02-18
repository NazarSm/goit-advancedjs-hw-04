import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const API_KEY = '42430851-e611567fbd1b8d73c000ca0dd';
const API_URL = 'https://pixabay.com/api/';

const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let itemsCount = 0;
let fetchedItemCount = 0;
let page = 1;
let searchValue = '';

const showError = (error) => {
  loader.classList.add('visually-hidden');

  iziToast.error({ message: error.message });
};

const showCards = (data) => {
  const markup = data.map((
    {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `
    <div class='photo-card'>
      <a class='photo_link' href='${largeImageURL}'>
        <img class='photo' src='${webformatURL}' alt='${tags}' loading='lazy' />
      </a>
      <div class='info'>
        <div class='info-item'>
          <b>Likes</b>
          <p>${likes}</p>
        </div>
        <div class='info-item'>
          <b>Views</b>
           <p>${views}</p>
        </div>
        <div class='info-item'>
          <b>Comments</b>
          <p>${comments}</p>
        </div>
        <div class='info-item'>
          <b>Downloads</b>
          <p>${downloads}</p>
        </div>
      </div>
    </div>
  `).join('');

  fetchedItemCount += data.length;

  gallery.insertAdjacentHTML('beforeend', markup);
}

const resetParams = ()  =>{
  page = 1;
  searchValue = '';
  itemsCount = 0;
  fetchedItemCount = 0;

  gallery.textContent = '';
};

const handleSubmit = async (event) => {
  event.preventDefault();

  resetParams();

  searchValue = event.target.elements.searchQuery.value.trim();

  if (!searchValue) {
    searchForm.reset();

    return;
  }

  loader.classList.remove('visually-hidden');

  try {
    const response = await fetchImages(searchValue, page);
    const imageData = response.data;

    itemsCount = imageData.totalHits;

    if (!itemsCount) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again.',
      });
    }

    showCards(imageData.hits);

    loader.classList.add('visually-hidden');

    window.addEventListener('scroll', handleScroll);
  } catch (error) {
    showError(error);
  }
};

const handleScroll = async () => {
  const isBottom = window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight;

  if (!isBottom) {
    return;
  }

  if (itemsCount > fetchedItemCount) {
    window.removeEventListener('scroll', handleScroll);

    gallery.insertAdjacentHTML(
      'beforeend',
      "<p>We're sorry, but you've reached the end of search results.</p>",
    );

    return;
  }

  try {
    const response = await fetchImages(
      searchValue,
      page++
    );

  } catch (error) {
    showError(error);
  }

  showCards(response.data.hits);

  loader.classList.add('visually-hidden');
};

searchForm.addEventListener('submit', handleSubmit);

const pixabay = axios.create({
  baseURL: API_URL,
});

const fetchImages = (q, page) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
    q,
  });

  return pixabay.get(`?${searchParams}`);
}
