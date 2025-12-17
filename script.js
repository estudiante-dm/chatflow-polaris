const chatContainer = document.querySelector(".chat_container");
const btnIconChat = document.getElementById("iconChat");
const btnTimes = document.getElementById("times");
const btnReset = document.getElementById("reset");
const btnOpcion = document.querySelectorAll(".btn_opcion");
const chat = document.querySelector(".chat");
const btnContainer = document.querySelector(".btn_container");

const datosUsuario = { curso: "", nombre: "", email: "", telefono: "" };
// Hacer accesible globalmente
window.datosUsuario = datosUsuario;
let chatInicializado = false;

// Abrir/cerrar chat
if (btnIconChat) {
	btnIconChat.addEventListener("click", ()=> {
		if (chatContainer.classList.contains("menu")) {
			chatContainer.classList.remove("menu");
		} else {
			chatContainer.classList.add("menu");
			if (!chatInicializado) {
				iniciarChat();
				chatInicializado = true;
			}
		}
	});
}

// Cerrar chat
if (btnTimes) {
	btnTimes.addEventListener("click",  ()=> {
		chatContainer.classList.remove("menu");
	});
}

// Reset chat
if (btnReset) {
	btnReset.addEventListener("click",  ()=> {
		resetChat();
	});
}

// Información de cursos
const infoCursos = [
	"Nuestra formación presencial se realiza directamente en tus instalaciones o en las nuestras, y se adapta totalmente a las necesidades de tu equipo. Es ideal para empresas que buscan sesiones prácticas, personalizadas y con un formador especializado.",
	"El aula virtual en directo te permite asistir a clases en tiempo real por videoconferencia, con un formador que guía cada sesión. Es flexible, cómodo y mantiene toda la interacción propia de un curso presencial.",
	"La teleformación 24/7 te permite formarte a tu ritmo, sin horarios y con acceso a los contenidos desde cualquier dispositivo. Es perfecta si buscas flexibilidad total o si tu equipo necesita avanzar de forma independiente.",
];

// Botones de opciones
btnOpcion.forEach((e, i) => {
	e.addEventListener("click",  ()=> {
		// Crear mensaje del usuario
		const mensajeUser = document.createElement("div");
		mensajeUser.className = "mensaje_user";
		mensajeUser.innerHTML = `<div class="user_burbuja">${e.textContent.trim()}</div>`;
		chat.appendChild(mensajeUser);
		// ocultando los botones 
		btnContainer.style.display = "none";

		// Guardar selección e índice
		datosUsuario.curso = e.textContent.trim();
		datosUsuario.cursoIndex = i;

		scrollToBottom();

		// Mostrar pregunta del nombre después de 1 segundo
		setTimeout(() => {
			const mensajeNombre = chat.querySelector(".mensaje_bot.nombre");
			if (mensajeNombre) {
				mensajeNombre.style.display = "inline-flex";
			}
			scrollToBottom();

			/**
			 *  Crear input despues de mostrar el mensaje
			 * 
			 * me imagino que abrá una mejor manera que  encadenar setTimeout(()=>{
			 * Este mensaje es para el tutor.
			 * })
			 *  */

			setTimeout(() => {
				const userInput = document.createElement("div");
				userInput.className = "user_input";
				userInput.innerHTML = `<input type="text" id="userInput" placeholder="Nombre:" />`;
				chat.appendChild(userInput);

				const input = userInput.querySelector("input");
				input.focus();

				// Manejar Enter
				input.addEventListener("keydown", e=> {
					if (e.key === "Enter" && input.value.trim()) {
						const nombre = input.value.trim();
						datosUsuario.nombre = nombre;

						// Ocultar input
						userInput.style.display = "none";

						// Respuesta de saludo
						setTimeout(() => {
							const respuestaBot = document.createElement("div");
							respuestaBot.className = "mensaje_bot";
							respuestaBot.innerHTML = `
								<img src="img/estrella.webp" class="imagen" />
								<div class="bot_burbuja">Encantada, ${nombre}. Ahora te doy la información que necesitas.</div>
							`;
							chat.appendChild(respuestaBot);
							scrollToBottom();

							// Mostrar información del curso después de 1 segundo
							setTimeout(() => {
								const infoCurso = document.createElement("div");
								infoCurso.className = "mensaje_bot";
								infoCurso.innerHTML = `
									<img src="img/estrella.webp" class="imagen" />
									<div class="bot_burbuja">${infoCursos[datosUsuario.cursoIndex]}</div>
								`;
								chat.appendChild(infoCurso);
								scrollToBottom();

								// Pedir datos de contacto después de 1.5 segundos
								setTimeout(() => {
									const contactoMsg = document.createElement("div");
									contactoMsg.className = "mensaje_bot";
									contactoMsg.innerHTML = `
										<img src="img/estrella.webp" class="imagen" />
										<div class="bot_burbuja">Si quieres que el equipo de Polaris Data se ponga en contacto contigo para enviarte información detallada o un presupuesto, déjame por favor tu correo electrónico. Si lo prefieres, también puedes añadir tu teléfono.</div>
									`;
									chat.appendChild(contactoMsg);
									scrollToBottom();

									// Crear input para email
									setTimeout(() => {
										const emailInputDiv = document.createElement("div");
										emailInputDiv.className = "user_input";
										emailInputDiv.innerHTML = `<input type="email" id="emailInput" placeholder="Email" />`;
										chat.appendChild(emailInputDiv);

										// Crear input para tlfno
										const telefonoInputDiv = document.createElement("div");
										telefonoInputDiv.className = "user_input";
										telefonoInputDiv.innerHTML = `<input type="tel" id="telefonoInput" placeholder="*Teléfono (opcional)" />`;
										chat.appendChild(telefonoInputDiv);

										const emailInput =
											emailInputDiv.querySelector("#emailInput");
										const telefonoInput =
											telefonoInputDiv.querySelector("#telefonoInput");
										emailInput.focus();

										function enviarContacto() {
											const email = emailInput.value.trim();
											const telefono = telefonoInput.value.trim();

											if (email) {
												datosUsuario.email = email;
												datosUsuario.telefono = telefono;

												console.log(datosUsuario);

												emailInputDiv.style.display = "none";
												telefonoInputDiv.style.display = "none";

												setTimeout(() => {
													const finalMsg = document.createElement("div");
													finalMsg.className = "mensaje_bot";
													finalMsg.innerHTML = `
														<img src="img/estrella.webp" class="imagen" />
														<div class="bot_burbuja">Gracias, ${datosUsuario.nombre}. He registrado tus datos. Un/a asesor/a de Polaris Data se pondrá en contacto contigo muy pronto. Si tienes más preguntas, aquí estoy para ayudarte.</div>
													`;
													chat.appendChild(finalMsg);
													scrollToBottom();
												}, 500);
												
											}
											// async ()=> {
												// 	const datos = await fetch(datosUsuario.nombre);
											// 	const resp =await datos.json();
											// 	console.log(resp);
											// }
										}

										
										emailInput.addEventListener("keydown",e => {
											if (e.key === "Enter") {
												enviarContacto();
												enviaPHP();
											} 
										});

										telefonoInput.addEventListener("keydown", e=> {
											if (e.key === "Enter") enviarContacto();
										});

										scrollToBottom();
									}, 500);
								}, 1500);
							}, 1000);
						}, 500);
					}
				});
				
				scrollToBottom();
			}, 500);
		}, 1000);
	});
});
// Aqui la función para enviar el codigo, no funciona y lo probé con el server xamp y tampoco
function enviaPHP() {
	console.log('hola');
	
	const email = 'estudiante2684@stafbarcelona.com';
	
	fetch('./envia.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `datos=${encodeURIComponent(JSON.stringify(datosUsuario))}&email=${encodeURIComponent(email)}`
	})
	.then(response => response.text())
	.then(data => console.log(data));
}

function scrollToBottom() {
	if (chat) {
		setTimeout(() => {
			chat.scrollTop = chat.scrollHeight;
		}, 10);
	}
}

function iniciarChat() {
	// Ocultar todos los mensajes y botones inicialmente
	const mensajesBot = chat.querySelectorAll(".mensaje_bot");
	mensajesBot.forEach(e => (e.style.display = "none"));
	btnContainer.style.display = "none";

	// Solo mostrar mensajes iniciales (no el de nombre)
	const mensajesIniciales = chat.querySelectorAll(".mensaje_bot.inicialBot");
	mensajesIniciales.forEach((e, i) => {
		setTimeout(() => {
			e.style.display = "inline-flex";
			scrollToBottom();

			// Mostrar botones despus del último mensaje inicial
			if (i === mensajesIniciales.length - 1) {
				setTimeout(() => {
					btnContainer.style.display = "flex";
					scrollToBottom();
				}, 500);
			}
		}, (i + 1) * 1000);
	});
}

function resetChat() {
	// Limpiar datos para reiniciar el chat.
	datosUsuario.curso = "";
	datosUsuario.nombre = "";
	datosUsuario.cursoIndex = null;
	datosUsuario.email = "";
	datosUsuario.telefono = "";

	// Eliminar mensajes dinamicos
	chat
		.querySelectorAll(".mensaje_user, .user_input")
		.forEach(e => e.remove());
	chat
		.querySelectorAll(".mensaje_bot:not(.inicialBot):not(.nombre)")
		.forEach(e => e.remove());

	// Ocultar todo y reiniciar
	const mensajesBot = chat.querySelectorAll(".mensaje_bot.inicialBot");
	const mensajeNombre = chat.querySelector(".mensaje_bot.nombre");
	mensajesBot.forEach(e => (e.style.display = "none"));
	if (mensajeNombre) mensajeNombre.style.display = "none";
	btnContainer.style.display = "none";

	
	chatInicializado = false;

	// Reiniciar animacion
	iniciarChat();
	chatInicializado = true;
}
