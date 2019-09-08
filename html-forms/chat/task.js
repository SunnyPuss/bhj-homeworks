const widget = document.querySelector(`.chat-widget`);
const input = document.getElementById(`chat-widget__input`);
const messages = document.querySelector( '.chat-widget__messages' );
const roboMessages = document.querySelectorAll(`.messages`);

/*function getRobo() {
  randomAnswer = Math.floor(Math.random() * roboMessages.length);
  return roboMessages[randomAnswer];
}*/

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

      /*
      messages.innerHTML += `
      ${getRobo()}`
      */
  }
}) 