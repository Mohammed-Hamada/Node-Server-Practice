const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const getInputValue = () => {
  xhrRequest('POST', '/value', (data) => {}, searchInput.value);
};

searchBtn.addEventListener('click', getInputValue);
