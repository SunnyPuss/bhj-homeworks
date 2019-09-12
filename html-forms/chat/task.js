const widget = document.querySelector(`.chat-widget`);
const input = document.getElementById(`chat-widget__input`);
const messages = document.querySelector( '.chat-widget__messages' );
const roboMessages = [ 
  `<div class="message">
  <div class="message__time">22:10</div>
  <div class="message__text">Добрый день! (нет)</div>
  </div>`,
  `<div class="message">
  <div class="message__time">22:10</div>
  <div class="message__text">А ваши денежки то тю-тю!</div>
  </div>`,
  `<div class="message">
  <div class="message__time">22:10</div>
  <div class="message__text">Я пришёл сюда  писать в чатик и обоссывать лица, и, как видишь, в чатик я уже написал.</div>
  </div>`,
  `<div class="message">
  <div class="message__time">22:10</div>
  <div class="message__text">Я бы иногда мимолётом думал о Вас, но у меня даже ИИ нет, так что сори. 8(</div>
  </div>`
];

console.log (roboMessages.length);

function getRobo() {
  randomAnswer = Math.floor(Math.random() * roboMessages.length);
  return roboMessages[randomAnswer];
}

widget.addEventListener(`click`, function() {
    widget.classList.add(`chat-widget_active`);
});

input.addEventListener(`keypress`, function(e) {
  if (e.keyCode === 13) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${new Date()}</div>
      <div class="message__text">${input.value}</div>`
      input.value = ``;

      
      messages.innerHTML += `
      ${getRobo()}`
      
  }
}) 