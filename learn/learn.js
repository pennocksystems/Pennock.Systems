function handleButtonClick(option) {
    console.log("Button clicked:", option);
    const messages = document.getElementById("chatbot-messages");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = option;
    messages.appendChild(userMessage);
    scrollToBottom();

    const typingBubble = document.createElement("div");
    typingBubble.classList.add("message", "bot-message", "typing");

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("typing-dots");

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("div");
        dot.classList.add("typing-dot");
        dotsContainer.appendChild(dot);
    }

    typingBubble.appendChild(dotsContainer);
    messages.appendChild(typingBubble);
    scrollToBottom();

    setTimeout(() => {
        messages.removeChild(typingBubble);

        let botMessage = "";
                

switch (option) {
    case "Option 1️⃣":
        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.innerHTML = "<strong>Awesome!</strong> 👏 You're now interacting with our live demo chatbot. I'll show you some of the helpful features I can offer your business — from answering customer questions to pulling data from your site and more. Feel free to explore!";
        messages.appendChild(botResponse);
        scrollToBottom();
        return;


        case "Learn 📝":
            botMessage = "At Pennock Systems, we make sure your bot is <strong>built FOR you, BY you</strong>, by giving you the creative abilities to best support your clients! 📈";
            break;        
            case "Features ⚡":
                botMessage = 'Great choice! 🚀 Let me show you some <strong>powerful features</strong> this chatbot can offer your business.';
                break;
            case "Contact ✉️":
                botMessage = `Ready to build something awesome together?🤖<br>
                You can reach us anytime at <strong>pennocksystems
                @gmail.com</strong>.<br>Looking forward to hearing from you! 💬`;
                break;                                
            case "💬24/7 Support":
                botMessage = "Take a look at some of the <strong>unique benefits</strong> a chatbot can provide for your business!⬇️";
                break;
            case "👋 Instant Support":
                botMessage = 'Our FAQ chatbots provide immediate answers to common questions, even outside of business hours — <strong>improving accessibility and reducing wait times🕗</strong>';
                break;
            case "📉Operational Costs":
                botMessage = 'By automating repetitive tasks like answering FAQs, or collecting user information, chatbots <strong>significantly reduce the need for a large customer support team💼</strong>'
                break;
            case "⚙️Customizable":
                botMessage = "A customizable chatbot allows your business to <strong>reflect its unique brand identity</strong> while tailoring interactions to meet specific customer needs🚀";
                break;
            case "📊Real-Time Data":
                botMessage = "Pull <strong>specific data from your site</strong> to allow users to quickly access the information they need — all without having to wait or dig through pages🌊";
                break;
            case "👤 Workload":
                botMessage = 'By handling FAQs, the chatbot frees up your team to <strong>focus on more complex or high-priority tasks💡</strong>';
                break;
            case "🌐 Multilingual":
                botMessage = "Communicate with customers in their <strong>preferred language</strong> to widen your reach. Choose from upwards of <strong>10 languages</strong> to provide users with the best experience possible🌎<br> (Rates May Apply)";
                break;
            case "🔑 External Data":
                botMessage = "We can integrate some <strong>pretty cool features</strong> when it comes to external keys that improve functionality, as well as boost the user-experience! <br>Click <a href='/features/' target='_blank'><strong>HERE</strong></a> to see some features you can choose from!";                
                break;
            case "🚀 Scalability":
                botMessage = "Scalability is key to long-term success! A scalable bot means <strong>fewer growing pains and more room for innovation</strong>🧠";
                break;
            default:
                botMessage = "I'm not sure how to respond to that. Please choose a valid option.";
                break;
        }

        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.innerHTML = botMessage;
        messages.appendChild(botResponse);
        scrollToBottom();

        if (option === "Learn 📝") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("💬24/7 Support"));
                buttonContainer.appendChild(createButton("😄User-Experience", "userexperience.html"));
                buttonContainer.appendChild(createButton("📉Operational Costs"));
                buttonContainer.appendChild(createButton("⚙️Customizable"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "Features ⚡") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("📊Real-Time Data"));
                buttonContainer.appendChild(createButton("🌐 Multilingual"));
                buttonContainer.appendChild(createButton("🔑 External Data"));
                buttonContainer.appendChild(createButton("🚀 Scalability"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "💬24/7 Support") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("👋 Instant Support"));
                buttonContainer.appendChild(createButton("👤 Workload"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

    }, 1000);
}

function createButton(label, url = null) {
    let button;

    if (url) {
        button = document.createElement("a");
        button.href = url;
        button.target = "_blank";
        button.classList.add("chatbot-btn", "chatbot-link-btn");
    } else {
        button = document.createElement("button");
        button.classList.add("chatbot-btn");
        button.onclick = () => handleButtonClick(label);
    }

    button.textContent = label;
    return button;
}

function greetUser() {
    const messages = document.getElementById("chatbot-messages");

    // First greeting message
    const greetingMessage1 = document.createElement("div");
    greetingMessage1.classList.add("message", "bot-message");
    greetingMessage1.textContent = "Hi! 👋 I'm Pennock, the demo chatbot! Let's walk you through some functionality today!";
    messages.appendChild(greetingMessage1);

// Optional delay for realism (500ms)
setTimeout(() => {
    // Second follow-up message
    const greetingMessage2 = document.createElement("div");
    greetingMessage2.classList.add("message", "bot-message");
    greetingMessage2.innerHTML = "To start, select <strong>'Option 1'</strong> below! 🤖";
    messages.appendChild(greetingMessage2);
    scrollToBottom();
}, 500); // Adjust delay as needed

scrollToBottom();

}


window.onload = greetUser;

function scrollToBottom() {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: "smooth"
        });
    }
    
}
