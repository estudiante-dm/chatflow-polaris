const chatContainer = document.querySelector(".chat_container");
const btnTimes = document.getElementById("times");
const btnReset = document.getElementById("reset");
const btnIconChat = document.getElementById("iconChat");
const btnContainer = document.querySelector(".btn_container");
const btnPresencial = document.getElementById("btnPresencial");
const btnVirtual = document.getElementById("btnVirtual");
const btnTele = document.getElementById("btnTele");
/***********************************************************************************************************************************************************************************
 *********************MENU ICONO ***************************
 *********************************************************************************************************************************************************
 */
function showChat() {
	chatContainer.classList.toggle("menu");
	scrollToBottom();
}

btnIconChat.addEventListener("click", showChat);
btnTimes.addEventListener("click", showChat);
btnReset.addEventListener("click", () => {
	inicial();
});

// Con esta funcion, forzaremos el texto abajo.
function scrollToBottom() {
	const chat = document.querySelector(".chat");
	chat.scrollTop = chat.scrollHeight;
}

/************************************************************************************
 **********************************************************************************BOTONES DE SELECCION DE CURSO
 ***********************************************************************************/
function inicial() {
	btnContainer.style.display = "none";

	const mensajeBot = document.querySelectorAll(".mensaje_bot");
	mensajeBot.forEach((e, i) => {
		e.style.display = "none";
		setTimeout(() => {
			e.style.display = "inline-flex";
			mostrarBtn();
		}, (i + 1) * 1000);
	});
	scrollToBottom();
}
inicial();

function mostrarBtn() {
	setTimeout(() => {
		btnContainer.style.display = "flex";
	}, 2000);
	btnContainer.style.display = "none";
	btnOpcion(e);
	scrollToBottom();
}

/**
 * Evento click de los botones
 */

btnPresencial.addEventListener("click", () => {
	const chat = document.querySelector(".chat");
	const mensajeUserDiv = document.createElement("div");
	mensajeUserDiv.classList.add("mensaje_user");

	const burbuja = document.createElement("div");
	burbuja.classList.add("user_burbuja");
	burbuja.textContent = btnPresencial.textContent;

	mensajeUserDiv.appendChild(burbuja);
	chat.appendChild(mensajeUserDiv);

	btnContainer.style.display = "none";
	scrollToBottom();
});

btnVirtual.addEventListener("click", () => {
	const chat = document.querySelector(".chat");
	const mensajeUserDiv = document.createElement("div");
	mensajeUserDiv.classList.add("mensaje_user");

	const burbuja = document.createElement("div");
	burbuja.classList.add("user_burbuja");
	burbuja.textContent = btnVirtual.textContent;

	mensajeUserDiv.appendChild(burbuja);
	chat.appendChild(mensajeUserDiv);

	btnContainer.style.display = "none";
	scrollToBottom();
});

btnTele.addEventListener("click", () => {
	const chat = document.querySelector(".chat");
	const mensajeUserDiv = document.createElement("div");
	mensajeUserDiv.classList.add("mensaje_user");

	const burbuja = document.createElement("div");
	burbuja.classList.add("user_burbuja");
	burbuja.textContent = btnTele.textContent;

	mensajeUserDiv.appendChild(burbuja);
	chat.appendChild(mensajeUserDiv);

	btnContainer.style.display = "none";
	scrollToBottom();
});
// function showChat() {
// 	if (!visible) {
// 		chatContainer.style.display = "flex";
// 		scrollToBottom();
// 	} else {
// 		chatContainer.style.display = "none";
// 	}
// 	visible = !visible;
// }

// const container = document.querySelector(".chat");
// // BOT

// // USER
// // container user
// // Mensaje del User
// const btnOpciones = [
// 	"Formación presencial",
// 	"Aula virtual en directo",
// 	"Teleformación 24/7",
// ];
// const datos = [
// 	{
// 		curso: "",
// 		nombre: ""
// 	},
// ];

// function addMensajeUser(texto) {
// 	const mensajeContainer = document.createElement("div");
// 	mensajeContainer.classList.add("mensaje_user");
// 	const mensajeUser = document.createElement("div");
// 	mensajeUser.classList.add("user_burbuja");

// 	mensajeContainer.appendChild(mensajeUser);
// 	container.appendChild(mensajeContainer);

// 	mensajeUser.textContent = texto;
// 	scrollToBottom();
// }

// function addMensajeBot(texto) {
// 	const botContainer = document.createElement("div");
// 	botContainer.classList.add("mensaje_bot");
// 	const imagenContainer = document.createElement("div");
// 	imagenContainer.classList.add("imagen_container");
// 	const imagenBot = document.createElement("img");
// 	imagenBot.classList.add("imagen");
// 	imagenBot.src = "./img/estrella.webp";
// 	const mensajeBot = document.createElement("div");
// 	mensajeBot.classList.add("bot_burbuja");

// 	imagenContainer.appendChild(imagenBot);
// 	botContainer.appendChild(imagenBot);
// 	botContainer.appendChild(mensajeBot);
// 	container.appendChild(botContainer);

// 	mensajeBot.textContent = texto;

// 	scrollToBottom();
// }

// function inicial() {
// 	const btnContainer = document.createElement("div");
// 	btnContainer.classList.add("btn_container");
// 	datos.length = 0;
// 	datos.push({ curso: "" });
// 	container.innerHTML = "";
// 	addMensajeBot("Hola, soy Estrella, tu asistenta virtual en Polaris Data.");
// 	addMensajeBot(
// 		"Estoy aquí para ayudarte a encontrar la formación que mejor encaje contigo o tu empresa."
// 	);
// 	addMensajeBot("¿En qué tipo de información estás interesad@?");
// 	btnOpciones.forEach((e, i) => {
// 		const btn = document.createElement("button");
// 		btn.textContent = e;
// 		btn.classList.add("btn_opcion");
// 		btnContainer.appendChild(btn);

// 		container.appendChild(btnContainer);
// 	});
// 	const btnOpcion = document.querySelectorAll(".btn_opcion");
// 	btnOpcion.forEach(e => {
// 		e.addEventListener("click", () => {
// 			datos[0].curso = e.textContent;
// 			console.log(datos);
// 			btnOpcion.forEach(btn => (btn.disabled = true));
// 		});
// 	});
// }
// inicial();
