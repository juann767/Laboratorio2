// Saludo personalizado
document.getElementById("btnSaludar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    document.getElementById("titulo").textContent = "Hola, " + nombre + "   :)";
    document.getElementById("mensaje").textContent = "Bienvenido al panel interactivo";
});

// Cambio de tema
document.getElementById("btnTema").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Agregar tareas
document.getElementById("btnAgregar").addEventListener("click", () => {
    const tarea = document.getElementById("tarea").value;
    if (tarea !== "") {
        const li = document.createElement("li");
        li.textContent = tarea;
        document.getElementById("lista").appendChild(li);
        document.getElementById("tarea").value = "";
    }
});

// Marcar tarea completada
document.querySelector("#lista").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
    }
});

// Barra de progreso
document.getElementById("btnProgreso").addEventListener("click", () => {
    const barra = document.getElementById("barra");
    const texto = document.getElementById("porcentaje");

    if (barra.value < 100) {
        barra.value += 10;
        texto.textContent = barra.value + "%";
    }
});