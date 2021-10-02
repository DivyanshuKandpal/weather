let init = () => {
    username = prompt("Enter your name");
}

window.addEventListener('load', init);


form.addEventListener('submit', e => {
    e.preventDefault();
    const text = message.value.trim();
    msg.innerHTML = '';

    if(!text) {
        msg.innerHTML = '* Please enter a message';
    }
    const data = {
        name: username,
        text: text
    };

    msgRef.push(data);
    message.value = "";
})

const updateMessages = data => {
    const {name, text} = data.val();
    const msg = `<li class="${name == username ? "message right": "message left"}">
                    <i class = "name">${name}: </i>${text}
                </li>`;

    messagesArea.innerHTML += msg;
    //auto scroll to bottom
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
}

msgRef.on('child_added', updateMessages);
