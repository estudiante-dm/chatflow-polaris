const chatContainer = document.querySelector(".chat_container");

chatContainer.style.display = "none";

let chatVisible = false;

function showChat() {
	if (!chatVisible) {
		chatContainer.style.display = "flex";
	} else {
		chatContainer.style.display = "none";
	}
	chatVisible = !chatVisible;
}

// Boton Cerrar del chat
document.getElementById("times").addEventListener("click", showChat);
// Boton para acceder al chat
document.getElementById("iconChat").addEventListener("click", showChat);
