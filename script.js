const button = document.querySelector('.button3');

button.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    console.log("Button 3 was clicked!");
});

const button2 = document.querySelector('.button4');

button2.addEventListener('click', function() {
    document.body.classList.toggle('switch');
    console.log("Button 4 was clicked!");
});


const modal = document.getElementById("myModal");
const modalText = document.getElementById("modal-text");

function showPopup(message) {
    modalText.innerText = message;
    modal.showModal();
}

document.querySelector('.button11').onclick = () => showPopup("The <button> tag wasn’t part of the original early versions of HTML. It was officially introduced in HTML 4.0 specification (1997) because developers needed something more flexible than input type=button");

document.querySelector('.button19').onclick = () => showPopup("Unlike <input>, the new <button> element could contain actual HTML inside it, like text, images, or even other elements, which made it way more versatile for designing interactive interfaces.");

document.querySelector('.button21').onclick = () => showPopup("it turns out I actually I hate Mariah Carey. I'm just not a fan of her, her music, specifically, all I want for Christmas is you. I actually wrote a article about it in high school, and I actually got gaggled for it, because I said that her that that song specifically brought me so much pain and torment, and me in oodles and oodles of anguish.");

document.querySelector('.button15').onclick = () => showPopup("Someimes I think about how one day my friends are probably going to stop being my friends. Not that that's unnatural or like a bad thing normal. It's something that people people sometimes need to grow. Even still, sometimes I sit and think about it and it's just just, you know, sad.");

document.querySelector('.button18').onclick = () => showPopup("아리랑 아리랑 아라리요, 아리랑 고개로 넘어간다 나를 버리고 가시는님은 십리도 못가서 발병난다 청청하늘엔 별도 많고 우리네 가슴엔 꿈도 많다");