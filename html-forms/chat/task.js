const widget = document.querySelector(`.chat-widget`);
const input = document.getElementById(`chat-widget__input`);
const messages = document.querySelector( '.chat-widget__messages' );
const roboMessages = [ 
  `Добрый день! (нет)`,
  `А ваши денежки то тю-тю!`,
  `Я пришёл сюда  писать в чатик и обоссывать лица, и, как видишь, в чатик я уже написал.`,
  `Я бы иногда мимолётом думал о Вас, но у меня даже ИИ нет, так что сори. 8(`
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
      <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
      <div class="message__text">${input.value}</div>`
      input.value = ``;

      
      messages.innerHTML += `<div class="message">
      <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
      <div class="message__text">${getRobo()}</div>
      </div>`
      
  }
}) 