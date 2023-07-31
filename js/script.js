const  sendchatbtn = document.querySelector(".chat-input span");
const  chatInput = document.querySelector(".chat-input input");
const  chatbottoggle = document.querySelector(".chatbot-toggle");
const  chatbotclose = document.querySelector(".close-btn");

const chatbox=document.querySelector(".chatbox")

const apikey = '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'
let userMessage;

const createChatLi = (message,className) =>{
const chatLi = document.createElement("li");
chatLi.classList.add("chat",className);
let chatcontent = className === `outcoming` ? `<p></p>` : 
` <span class="material-symbols-outlined">smart_toy</span> <p></p>`
chatLi.innerHTML = chatcontent;
chatLi.querySelector("p").textContent=message

return chatLi;

}


const generateResponse = (incomingChildLi) =>
{
 const apiurl = `https://api.openai.com/v1/chat/completions`
 const messageElemnt = incomingChildLi.querySelector("p")

 const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apikey}`
     },
     body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "system","content": "You are a helpful assistant."},{"role": "user","content": userMessage}]
 })
}

fetch(apiurl,requestOptions).then(res => res.json()).then(data => {
    messageElemnt.textContent = data.choices[0].message.content;
}).catch((e) =>{
    messageElemnt.textContent = "Oops! Something went wrong"
})
}






const handleChat = () =>
{
 userMessage= chatInput.value.trim();
   if(!userMessage) return ;

chatInput.value= ""
   chatbox.appendChild(createChatLi(userMessage,"outcoming"))
    console.log(userMessage);



    setTimeout(() =>{
        const incomingChildLi = createChatLi("Thinking...","incoming")
        chatbox.appendChild(incomingChildLi)
        generateResponse(incomingChildLi);

    },600)
}

chatbottoggle.addEventListener("click", () =>{
    document.body.classList.toggle("show-chatbot")
})
chatbotclose.addEventListener("click", () =>{document.body.remove("show-chatbot")})


sendchatbtn.addEventListener("click", handleChat);


