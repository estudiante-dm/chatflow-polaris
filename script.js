const chatContainer = document.querySelector(".chat_container");
const btnTimes = document.getElementById("times");
const btnReset = document.getElementById("reset");
const btnIconChat = document.getElementById("iconChat");
const btnContainer = document.querySelector(".btn_container");
const btnOpcion = document.querySelectorAll(".btn_opcion");
const chat = document.querySelector(".chat");

/** Array PERSISTENCIA DE DATOS */
const datosUsuario = [
    {
        curso: "",
        nombre: "",
    },
];

function showChat() {
    chatContainer.classList.toggle("menu");
    scrollToBottom();
}

btnIconChat.addEventListener("click", showChat);
btnTimes.addEventListener("click", showChat);
btnReset.addEventListener("click", () => {
    inicial();
});

function scrollToBottom() {
    chat.scrollTop = chat.scrollHeight;
}

/************************************************************************************
 **************************BOTONES DE SELECCION DE CURSO
 ***********************************************************************************/
function inicial() {
    // Limpiar datos
    datosUsuario[0] = {
        curso: "",
        nombre: "",
    };

    // Ocultar contenedor de botones
    btnContainer.style.display = "none";
    btnContainer.dataset.busy = "false";

    // Limpiar mensajes del usuario e inputs
    chat.querySelectorAll(".mensaje_user, .user_input").forEach(n => n.remove());

    // Esconder todos los mensajes del bot
    const mensajeBot = document.querySelectorAll(".mensaje_bot");
    mensajeBot.forEach(e => e.style.display = "none");

    // Mostrar mensajes del bot uno a uno
    mensajeBot.forEach((e, i) => {
        setTimeout(() => {
            e.style.display = "inline-flex";
            scrollToBottom();
            // Si es el último mensaje, mostrar botones
            if (i === mensajeBot.length - 1) {
                mostrarBtn();
            }
        }, (i + 1) * 1000);
    });

    scrollToBottom();
}
inicial();

function mostrarBtn() {
    setTimeout(() => {
        btnContainer.querySelectorAll(".btn_opcion").forEach(b => {
            b.style.display = "";
            b.disabled = false;
        });
        btnContainer.style.display = "flex";
        btnContainer.dataset.busy = "false";
        scrollToBottom();
    }, 200);
}

/**
 * Evento click de los botones
 */
btnOpcion.forEach(e => {
    e.addEventListener("click", () => {
        // Bloquear clicks rápidos
        if (btnContainer.dataset.busy === "true") return;
        btnContainer.dataset.busy = "true";

        const mensajeUserDiv = document.createElement("div");
        mensajeUserDiv.classList.add("mensaje_user");

        const burbuja = document.createElement("div");
        burbuja.classList.add("user_burbuja");
        burbuja.textContent = e.textContent.trim();

        mensajeUserDiv.appendChild(burbuja);
        chat.appendChild(mensajeUserDiv);

        // Ocultar botones inmediatamente
        btnContainer.style.display = "none";
        btnContainer.querySelectorAll(".btn_opcion").forEach(b => {
            b.style.display = "none";
            b.disabled = true;
        });

        scrollToBottom();
        datosUsuario[0].curso = e.textContent.trim();
        console.log(datosUsuario[0].curso);

        nombreUser();
    });
});

function nombreUser() {
    setTimeout(() => {
        const mensajeBotDiv = document.createElement("div");
        mensajeBotDiv.classList.add("mensaje_bot");
        mensajeBotDiv.style.display = "inline-flex";

        const imagen = document.createElement("img");
        imagen.src = "img/estrella.webp";
        imagen.classList.add("imagen");

        const burbuja = document.createElement("div");
        burbuja.classList.add("bot_burbuja");
        burbuja.textContent = "Perfecto. Para dirigirme a ti, ¿cómo te llamas?";

        mensajeBotDiv.appendChild(imagen);
        mensajeBotDiv.appendChild(burbuja);
        chat.appendChild(mensajeBotDiv);
        scrollToBottom();
    }, 1000);

    setTimeout(() => {
        const userInputDiv = document.createElement("div");
        userInputDiv.classList.add("user_input");
        userInputDiv.style.display = "flex";
        
        const userInput = document.createElement("input");
        userInput.type = "text";
        userInput.id = "userInput";
        userInput.placeholder = "Nombre:";

        userInputDiv.appendChild(userInput);
        chat.appendChild(userInputDiv);
        userInput.focus();
        scrollToBottom();
    }, 1000);
}

function recogeNombre(nombre) {
    datosUsuario[0].nombre = nombre;
    setTimeout(() => {
        const mensajeBotDiv = document.createElement("div");
        mensajeBotDiv.classList.add("mensaje_bot");
        mensajeBotDiv.style.display = "inline-flex";

        const imagen = document.createElement("img");
        imagen.src = "img/estrella.webp";
        imagen.classList.add("imagen");

        const burbuja = document.createElement("div");
        burbuja.classList.add("bot_burbuja");
        burbuja.textContent = `Encantada, ${nombre}. Ahora te doy la información que necesitas.`;

        mensajeBotDiv.appendChild(imagen);
        mensajeBotDiv.appendChild(burbuja);
        chat.appendChild(mensajeBotDiv);
        scrollToBottom();
    }, 500);
    console.log(datosUsuario[0].nombre);
}

// Evento del teclado para enviar nombre
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        const userInput = document.getElementById("userInput");
        if (userInput) {
            const nombre = userInput.value.trim();
            if (nombre) {
                recogeNombre(nombre);
            }
        }
        const container = document.querySelector(".user_input");
        if (container) {
            container.style.display = "none";
        }
    }
});
// const chatContainer = document.querySelector(".chat_container");
// const btnTimes = document.getElementById("times");
// const btnReset = document.getElementById("reset");
// const btnIconChat = document.getElementById("iconChat");
// const btnContainer = document.querySelector(".btn_container");
// const btnOpcion = document.querySelectorAll(".btn_opcion");
// const chat = document.querySelector(".chat");

// /** Array PESISTENCIA DE DATOS */
// const datosUsuario = [
// 	{
// 		curso: "",
// 		nombre: "",
// 	},
// ];
// /***********************************************************************************************************************************************************************************
//  *********************MENU ICONO ***************************
//  *********************************************************************************************************************************************************
//  */
// function showChat() {
// 	chatContainer.classList.toggle("menu");
// 	scrollToBottom();
// }

// btnIconChat.addEventListener("click", showChat);
// btnTimes.addEventListener("click", showChat);
// btnReset.addEventListener("click", () => {
// 	inicial();
// });

// // Con esta funcion, forzaremos el texto abajo.
// function scrollToBottom() {
// 	chat.scrollTop = chat.scrollHeight;
// }

// /************************************************************************************
//  **********************************************************************************BOTONES DE SELECCION DE CURSO
//  ***********************************************************************************/
// function inicial() {
// 	btnContainer.style.display = "none";

// 	const mensajeBot = document.querySelectorAll(".mensaje_bot");
	
// 	mensajeBot.forEach((e, i) => {
// 		e.style.display = "none";
// 		setTimeout(() => {
// 			e.style.display = "inline-flex";
// 		}, (i + 1) * 1000,mostrarBtn());
// 	});
// 	scrollToBottom();
// }
// inicial();

// function mostrarBtn() {
// 	setTimeout(() => {
// 		btnContainer.style.display = "flex";
// 	}, 3000);
// 	btnContainer.style.display = "none";
// 	scrollToBottom();
// }

// /**
//  * Evento click de los botones
//  */

// btnOpcion.forEach(e => {
// 	e.addEventListener("click", () => {
// 		const mensajeUserDiv = document.createElement("div");
// 		mensajeUserDiv.classList.add("mensaje_user");

// 		const burbuja = document.createElement("div");
// 		burbuja.classList.add("user_burbuja");
// 		burbuja.textContent = e.textContent.trim();

// 		mensajeUserDiv.appendChild(burbuja);
// 		chat.appendChild(mensajeUserDiv);

// 		btnContainer.style.display = "none";
// 		scrollToBottom();
// 		datosUsuario[0].curso = e.textContent.trim();
// 		console.log(datosUsuario[0].curso);

// 		nombreUser();
// 	});
// });

// function nombreUser() {
// 	setTimeout(() => {
// 		const mensajeBotDiv = document.createElement("div");
// 		mensajeBotDiv.classList.add("mensaje_bot");
// 		mensajeBotDiv.style.display = "inline-flex";

// 		const imagen = document.createElement("img");
// 		imagen.src = "img/estrella.webp";
// 		imagen.classList.add("imagen");

// 		const burbuja = document.createElement("div");
// 		burbuja.classList.add("bot_burbuja");
// 		burbuja.textContent = "Perfecto. Para dirigirme a ti, ¿cómo te llamas?";

// 		mensajeBotDiv.appendChild(imagen);
// 		mensajeBotDiv.appendChild(burbuja);
// 		chat.appendChild(mensajeBotDiv);
// 		scrollToBottom();
// 	}, 1000);

// 	setTimeout(() => {
// 		const chat = document.querySelector(".chat");
// 		const userInputDiv = document.createElement("div");
// 		userInputDiv.classList.add("user_input");
// 		userInputDiv.style.display = "flex";
// 		const userInput = document.createElement("input");
// 		userInput.type = "text";
// 		userInput.id = "userInput";
// 		userInput.placeholder = "Nombre:";

// 		userInputDiv.appendChild(userInput);
// 		chat.appendChild(userInputDiv);
// 		userInput.focus();
// 		scrollToBottom();
// 	}, 1000);
// }

// function recogeNombre(nombre) {
// 	datosUsuario[0].nombre = nombre;
// 	setTimeout(() => {
// 		const chat = document.querySelector(".chat");
// 		const mensajeBotDiv = document.createElement("div");
// 		mensajeBotDiv.classList.add("mensaje_bot");
// 		mensajeBotDiv.style.display = "inline-flex";

// 		const imagen = document.createElement("img");
// 		imagen.src = "img/estrella.webp";
// 		imagen.classList.add("imagen");

// 		const burbuja = document.createElement("div");
// 		burbuja.classList.add("bot_burbuja");
// 		burbuja.textContent = `Encantada, ${nombre}. Ahora te doy la información que necesitas.`;

// 		mensajeBotDiv.appendChild(imagen);
// 		mensajeBotDiv.appendChild(burbuja);
// 		chat.appendChild(mensajeBotDiv);
// 		scrollToBottom();
// 	});
// 	console.log(datosUsuario[0].nombre);
// }

// // Aqui el evento del teclado para cuando se pone el nombre, mientras no tenga nada no manda nada
// document.addEventListener("keydown", event => {
// 	if (event.key === "Enter") {
// 		const userInput = document.getElementById("userInput");
// 		if (userInput) {
// 			const nombre = userInput.value.trim();
// 			if (nombre) {
// 				recogeNombre(nombre);
// 			}
// 		}
// 		const container = document.querySelector(".user_input");
// 		container.style.display = "none";
// 	}
// });

// btnPresencial.addEventListener("click", () => {
// 	const chat = document.querySelector(".chat");
// 	const mensajeUserDiv = document.createElement("div");
// 	mensajeUserDiv.classList.add("mensaje_user");

// 	const burbuja = document.createElement("div");
// 	burbuja.classList.add("user_burbuja");
// 	burbuja.textContent = btnPresencial.textContent;

// 	mensajeUserDiv.appendChild(burbuja);
// 	chat.appendChild(mensajeUserDiv);

// 	btnContainer.style.display = "none";
// 	scrollToBottom();
// });

// btnVirtual.addEventListener("click", () => {
// 	const chat = document.querySelector(".chat");
// 	const mensajeUserDiv = document.createElement("div");
// 	mensajeUserDiv.classList.add("mensaje_user");

// 	const burbuja = document.createElement("div");
// 	burbuja.classList.add("user_burbuja");
// 	burbuja.textContent = btnVirtual.textContent;

// 	mensajeUserDiv.appendChild(burbuja);
// 	chat.appendChild(mensajeUserDiv);

// 	btnContainer.style.display = "none";
// 	scrollToBottom();
// });

// btnTele.addEventListener("click", () => {
// 	const chat = document.querySelector(".chat");
// 	const mensajeUserDiv = document.createElement("div");
// 	mensajeUserDiv.classList.add("mensaje_user");

// 	const burbuja = document.createElement("div");
// 	burbuja.classList.add("user_burbuja");
// 	burbuja.textContent = btnTele.textContent;

// 	mensajeUserDiv.appendChild(burbuja);
// 	chat.appendChild(mensajeUserDiv);

// 	btnContainer.style.display = "none";
// 	scrollToBottom();
// });
/*********************************************************************/
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
