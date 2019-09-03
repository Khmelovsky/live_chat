// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

newChatForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => {
            newChatForm.reset()
        })
        .catch(err => console.log(err));
})

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general','anton');


// get chats & render
chatroom.getChats((data) => {
    chatUI.render(data);
});