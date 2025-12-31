const menuLinks = document.querySelectorAll('.side_menu a');
const sideImg = document.querySelector('.side_img');

const imageData = {
  25: ['side2025_1.jpg',  'side2025_2.jpg', 'side2025_3.jpg', 'side2025_4.jpg'],
  24: ['side2024_1.jpg', 'side2024_2.jpg', 'side2024_3.jpg', 'side2024_4.jpg' , 'side2024_5.jpg', 'side2024_6.jpg' , 'side2024_7.jpg'],
  23: ['side2023_1.jpg' , 'side2023_2.jpg'],
  22: ['side2022_1.jpg' , 'side2022_2.jpg' , 'side2022_3.jpg'],
  21: ['side2021_1.jpg', 'side2021_2.jpg']
};

function renderImages(year) {
  sideImg.innerHTML = '';

  imageData[year].forEach(img => {
    const image = document.createElement('img');
    image.src = `../img/${img}`;
    sideImg.appendChild(image);
  });
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    menuLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const year = link.dataset.archive;
    renderImages(year);
  });
});

renderImages('25');
