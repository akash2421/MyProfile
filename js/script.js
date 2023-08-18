const  sendchatbtn = document.querySelector(".chat-input span");
const  chatInput = document.querySelector(".chat-input input");
const  chatbottoggle = document.querySelector(".chatbot-toggle");
    const  chatbotclose = document.querySelector(".close-btn");

const chatbox=document.querySelector(".chatbox")

chatbottoggle.addEventListener("click", () =>{
    document.body.classList.toggle("show-chatbot")
})
chatbotclose.addEventListener("click", () =>{document.body.classList.remove("show-chatbot")})


sendchatbtn.addEventListener("click", handleChat);


