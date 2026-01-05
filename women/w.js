const btn = document.querySelector('.btn button');
const womenItem = document.querySelector('.women_item');

const newProducts = [
  {
    img: '../img/w_item13.jpg',
    backImg: '../img/w_item13_back.jpg',
    title: 'WOOL MINI SKIRT DEEP BROWN',
    price: 'KRW 129,000',
    sale: 'KRW 90,300'
  },
  {
    img: '../img/w_item14.jpg',
    backImg: '../img/w_item14_back.jpg',
    title: 'FLANNEL PLEATS MIDI SKIRT BROWN CHECK',
    price: 'KRW 159,000',
    sale: 'KRW 151,100'
  },
  {
    img: '../img/w_item15.jpg',
    backImg: '../img/w_item15_back.jpg',
    title: 'FLANNEL PLEATS MIDI SKIRT BLACK',
    price: 'KRW 159,000',
    sale: 'KRW 111,300'
  },
  {
    img: '../img/w_item16.jpg',
    backImg: '../img/w_item16_back.jpg',
    title: 'LINEAR PLEATS LONG SKIRT BLACK',
    price: 'KRW 159,000',
    sale: 'KRW 151,100'
  },
  {
    img: '../img/w_item17.jpg',
    backImg: '../img/w_item17_back.jpg',
    title: 'MINI SKIRT BLACK',
    price: 'KRW 129,000',
    sale: 'KRW 122,600'
  },
  {
    img: '../img/w_item18.jpg',
    backImg: '../img/w_item18_back.jpg',
    title: 'H-LINE WOOL MIDI SKIRT DARK KHAKI',
    price: 'KRW 139,000',
    sale: 'KRW 83,400'
  },
  {
    img: '../img/w_item19.jpg',
    backImg: '../img/w_item19_back.jpg',
    title: 'H-LINE WOOL MIDI SKIRT CHARCOAL GREY',
    price: 'KRW 139,000',
    sale: 'KRW 132,100'
  }
];

const perPage = 4;
let page = 0;

btn.addEventListener('click', () => {
  const start = page * perPage;
  const end = start + perPage;
  const itemsToShow = newProducts.slice(start, end);

  itemsToShow.forEach(product => {
    const productDiv = document.createElement('div');

    productDiv.innerHTML = `
      <div class="item_box" style="background-image: url('${product.backImg}')">
        <img src="${product.img}" alt="${product.title}">
      </div>
      <div class="title_item">
        <p>${product.title}</p>
        <p>${product.price}</p>
        <p>${product.sale}</p>
      </div>
    `;

    const img = productDiv.querySelector('img');
    img.addEventListener('mouseenter', () => img.style.opacity = '0');
    img.addEventListener('mouseleave', () => img.style.opacity = '1');

    womenItem.appendChild(productDiv);
  });

  page++;

  if (page * perPage >= newProducts.length) {
    btn.style.display = 'none';
  }
});
