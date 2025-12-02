const chatContainer = document.querySelector(".chat_container");
const container = document.querySelector(".chat");
// BOT

// USER
// container user
// Mensaje del User
const btnOpciones = [
	"Formación presencial",
	"Aula virtual en directo",
	"Teleformación 24/7",
];
const datos = [
	{
		curso: "",
	},
];
// Ahora vamos hacer que sea visible e invisible el chatbot
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

function addMensajeUser(texto) {
	const mensajeContainer = document.createElement("div");
	mensajeContainer.classList.add("mensaje_user");
	const mensajeUser = document.createElement("div");
	mensajeUser.classList.add("user_burbuja");

	mensajeContainer.appendChild(mensajeUser);
	container.appendChild(mensajeContainer);

	mensajeUser.textContent = texto;
	scrollToBottom();
}

function addMensajeBot(texto) {
	const botContainer = document.createElement("div");
	botContainer.classList.add("mensaje_bot");
	const imagenContainer = document.createElement("div");
	imagenContainer.classList.add("imagen_container");
	const imagenBot = document.createElement("img");
	imagenBot.classList.add("imagen");
	imagenBot.src = "./img/estrella.webp";
	const mensajeBot = document.createElement("div");
	mensajeBot.classList.add("bot_burbuja");

	imagenContainer.appendChild(imagenBot);
	botContainer.appendChild(imagenBot);
	botContainer.appendChild(mensajeBot);
	container.appendChild(botContainer);

	mensajeBot.textContent = texto;

	scrollToBottom();
}
// Con esta funcion, forzaremos el texto abajo.
function scrollToBottom() {
	const chat = document.querySelector(".chat");
	chat.scrollTop = chat.scrollHeight;
}

function inicial() {
	const btnContainer = document.createElement("div");
	btnContainer.classList.add("btn_container");
	datos.length = 0;
	datos.push({ curso: "" });
	container.innerHTML = "";
	addMensajeBot("Hola, soy Estrella, tu asistenta virtual en Polaris Data.");
	addMensajeBot(
		"Estoy aquí para ayudarte a encontrar la formación que mejor encaje contigo o tu empresa."
	);
	addMensajeBot("¿En qué tipo de información estás interesad@?");
	btnOpciones.forEach((e, i) => {
		const btn = document.createElement("button");
		btn.textContent = e;
		btn.classList.add("btn_opcion");
		btnContainer.appendChild(btn);

		container.appendChild(btnContainer);
	});
	const btnOpcion = document.querySelectorAll(".btn_opcion");
	btnOpcion.forEach(e => {
		e.addEventListener("click", () => {
			datos[0].curso = e.textContent;
			console.log(datos);
			btnOpcion.forEach(btn => (btn.disabled = true));
		});
	});
}
inicial();

document.getElementById("reset").addEventListener("click", inicial);
document.getElementById("times").addEventListener("click", showChat);
document.getElementById("iconChat").addEventListener("click", showChat);
