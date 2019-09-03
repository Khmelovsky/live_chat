// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');

newChatForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => {
            newChatForm.reset()
        })
        .catch(err => console.log(err));
});

newNameForm.addEventListener('submit', event =>{
    event.preventDefault();
    const userName = newNameForm.name.value.trim();

    chatroom.updateName(userName);

    newNameForm.reset();
      
    updateMsg.innerText = `Your name was updated to ${userName}`;

    setTimeout(() => {
        updateMsg.innerText = '';
    }, 3000);
});

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general','anton');


// get chats & render
chatroom.getChats((data) => {
    chatUI.render(data);
});