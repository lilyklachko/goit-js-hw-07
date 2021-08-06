const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery')

const makeGallry = images.reduce((string, image) => 
    string + `<li><img src = "${image.url}" alt = "${image.alt}" class = image ></img></li>`, " "
)
galleryEl.insertAdjacentHTML('afterbegin', makeGallry)
console.log(galleryEl)

// const createLiEl = images.map(image => {
//     const liEl = document.createElement('li')
//     console.log(liEl)
//     return liEl 
// })
// const createImgEl = images.map(image => {

//     const imgEl = document.createElement('img')
//     imgEl.setAttribute('src', image.url)
//     imgEl.setAttribute('alt', image.alt)
//     console.log(imgEl)
//     return imgEl
// })

// galleryEl.insertAdjacentHTML('afterbegin', createImgEl)
// console.log(galleryEl)