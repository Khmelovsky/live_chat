class ChatUI {
    constructor(list) {
        this.list = list;
    }
    render(data) {
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <span class="time">${data.created_at.toDate()}</span>
            </li>
            `;

        //console.log(html)
        this.list.innerHTML += html;
       
    }
}