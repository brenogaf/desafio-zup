const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const img4 = document.querySelector('#img4')
const name1 = document.querySelector('#name1')
const name2 = document.querySelector('#name2')
const name3 = document.querySelector('#name3')
const name4 = document.querySelector('#name4')
const numeroMaximoDePersonagens = 671;
let nomeDoPersonagem;

pegarPersonagem = (img, name) => {
    let numeroAleatorio = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        img.src = data.image;
        img.alt = 'Imagem do personagem: ' + data.name;
        name.innerHTML = data.name; 
        })
        
}
generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
    }
 
img1.onload = pegarPersonagem(img1, name1)
img2.onload = pegarPersonagem(img2, name2)
img3.onload = pegarPersonagem(img3, name3)
img4.onload = pegarPersonagem(img4, name4) 