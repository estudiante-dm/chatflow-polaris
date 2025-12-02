const chatContainer = document.querySelector(".chat_container");

chatContainer.style.display = "none";
let visible = false;

function showChat() {
	if (!visible) {
		chatContainer.style.display = "flex";
		scrollToBottom();
	} else {
		chatContainer.style.display = "none";
	}

	visible = !visible;
}

// Con esta funcion, forzaremos el texto abajo.
function scrollToBottom() {
	const chat = document.querySelector(".chat");
	chat.scrollTop = chat.scrollHeight;
}

document.getElementById("times").addEventListener("click", showChat);
document.getElementById("iconChat").addEventListener("click", showChat);
