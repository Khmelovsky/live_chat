// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const room = document.querySelector('.chat-rooms');

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

room.addEventListener('click', event => {
    event.preventDefault();
    
    console.log(event);

    if(event.target.tagName = "BUTTON") {
        chatUI.clear();
        chatroom.updateRoom(event.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});


//check username in localstorage

const username = localStorage.username ? localStorage.username : 'anon';
// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);


// get chats & render
chatroom.getChats((data) => {
    chatUI.render(data);
});