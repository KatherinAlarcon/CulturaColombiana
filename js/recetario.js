const recetas = [
    {
        nombre: "Ajiaco",
        ingredientes: ["pollo", "papa", "maíz"],
        tipo: "Plato principal",
        imagen: "img/Ajiaco.jpg",
        descripcion: "Un delicioso caldo de pollo con mazorca y papas criollas, típico de Bogotá.",
        region: "Cundinamarca",
        tiempo: "1 hora 30 minutos"
    },
    {
        nombre: "Bandeja Paisa",
        ingredientes: ["frijoles", "arroz", "huevo", "chorizo", "chicharrón"],
        tipo: "Plato principal",
        imagen: "img/bandeja-paisa.jpg",
        descripcion: "Un plato típico paisa que combina frijoles, arroz, chorizo, y otros deliciosos ingredientes.",
        region: "Antioquia",
        tiempo: "1 hora"
    },
    {
        nombre: "Arepas",
        ingredientes: ["maíz", "queso"],
        tipo: "Entrada",
        imagen: "img/arepas.jpg",
        descripcion: "Un pan plano de maíz que puede rellenarse con diferentes ingredientes.",
        region: "Toda Colombia",
        tiempo: "20 minutos"
    },
    {
        nombre: "Postre de Natas",
        ingredientes: ["leche", "azúcar", "canela"],
        tipo: "Postre",
        imagen: "img/postre-natas.jpg",
        descripcion: "Un dulce típico colombiano hecho a base de nata de leche.",
        region: "Toda Colombia",
        tiempo: "1 hora"
    },
    {
        nombre: "Sancocho",
        ingredientes: ["pollo", "yuca", "papa", "plátano"],
        tipo: "Plato principal",
        imagen: "img/sancocho.jpg",
        descripcion: "Un caldo sustancioso con pollo, yuca, plátano y papa.",
        region: "Valle del Cauca",
        tiempo: "2 horas"
    },
    {
        nombre: "Empanadas",
        ingredientes: ["carne", "papa", "maíz"],
        tipo: "Entrada",
        imagen: "img/empanadas.jpg",
        descripcion: "Deliciosas empanadas fritas rellenas de carne y papa.",
        region: "Toda Colombia",
        tiempo: "40 minutos"
    },
    {
        nombre: "Tamales",
        ingredientes: ["harina de maíz", "pollo", "cerdo", "arroz"],
        tipo: "Plato principal",
        imagen: "img/tamales.jpg",
        descripcion: "Hojas de plátano rellenas con una mezcla de arroz, carne y vegetales.",
        region: "Tolima",
        tiempo: "3 horas"
    },
    {
        nombre: "Lechona",
        ingredientes: ["cerdo", "arroz", "arvejas"],
        tipo: "Plato principal",
        imagen: "img/lechona.jpg",
        descripcion: "Cerdo relleno con arroz y arvejas, cocinado lentamente.",
        region: "Tolima",
        tiempo: "5 horas"
    },
    {
        nombre: "Arroz con Coco",
        ingredientes: ["arroz", "coco", "panela"],
        tipo: "Plato principal",
        imagen: "img/arroz-coco.jpg",
        descripcion: "Un arroz dulce y salado, típico de la costa caribeña.",
        region: "Caribe",
        tiempo: "40 minutos"
    },
    {
        nombre: "Mote de Queso",
        ingredientes: ["queso costeño", "ñame", "cebolla"],
        tipo: "Plato principal",
        imagen: "img/mote-queso.jpg",
        descripcion: "Una sopa cremosa con ñame y queso costeño.",
        region: "Caribe",
        tiempo: "1 hora"
    },
    {
        nombre: "Pescado Frito",
        ingredientes: ["pescado", "limón", "harina"],
        tipo: "Plato principal",
        imagen: "img/pescado-frito.jpg",
        descripcion: "Un pescado fresco frito, acompañado de arroz con coco y patacones.",
        region: "Caribe",
        tiempo: "30 minutos"
    },
    {
        nombre: "Patacones",
        ingredientes: ["platano verde", "aceite", "pico de gallo", "sal"],
        tipo: "Entrada",
        imagen: "img/patacones.jpg",
        descripcion: "Rodajas de plátano verde fritas y aplastadas, típicas de la región caribeña.",
        region: "Caribe",
        tiempo: "20 minutos"
    },
    {
        nombre: "Cazuela de Mariscos",
        ingredientes: ["mariscos", "leche de coco", "verduras"],
        tipo: "Plato principal",
        imagen: "img/cazuela-mariscos.jpg",
        descripcion: "Un plato caribeño que combina mariscos frescos y leche de coco.",
        region: "Caribe",
        tiempo: "1 hora"
    },
    {
        nombre: "Chicharrón",
        ingredientes: ["cerdo", "sal", "limon"],
        tipo: "Entrada",
        imagen: "img/chicharron.jpg",
        descripcion: "Un chicharrón crujiente, perfecto como entrada o acompañamiento.",
        region: "Antioquia",
        tiempo: "1 hora"
    },
    {
        nombre: "Natilla",
        ingredientes: ["leche", "fécula de maíz", "canela"],
        tipo: "Postre",
        imagen: "img/natilla.jpg",
        descripcion: "Un postre dulce típico de Navidad en Colombia.",
        region: "Toda Colombia",
        tiempo: "30 minutos"
    },
    {
        nombre: "Arroz Atollado",
        ingredientes: ["arroz", "pollo", "chorizo"],
        tipo: "Plato principal",
        imagen: "img/arroz-atollado.jpg",
        descripcion: "Un arroz cremoso cocido con pollo y chorizo, típico del Valle del Cauca.",
        region: "Valle del Cauca",
        tiempo: "1 hora 30 minutos"
    },

];

// Función para buscar recetas
function normalizarTexto(texto) {
    return texto
        .normalize("NFD") // Descompone los caracteres con diacríticos
        .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos
        .toLowerCase(); // Convierte a minúsculas
}

// Función para buscar recetas
function buscarRecetas() {
    const ingredientesInput = document.getElementById("ingredientes").value.trim();
    const tipoPlatoInput = document.getElementById("tipo-plato").value;

    // Validaciones
    if (ingredientesInput === "" && tipoPlatoInput === "") {
        alert("Por favor, ingrese ingredientes o seleccione un tipo de plato.");
        return;
    }

    // Normalizar el texto de entrada del usuario
    const ingredientesNormalizados = normalizarTexto(ingredientesInput);
    const tipoPlatoNormalizado = normalizarTexto(tipoPlatoInput);

    const resultados = recetas.filter(receta => {
        const tipoRecetaNormalizado = normalizarTexto(receta.tipo);

        const ingredientesRecetaNormalizados = receta.ingredientes.map(ing => normalizarTexto(ing));

        const coincideIngredientes =
            ingredientesNormalizados === "" ||
            ingredientesNormalizados.split(",").every(ing => ingredientesRecetaNormalizados.includes(ing.trim()));

        const coincideTipo = tipoPlatoNormalizado === "" || tipoRecetaNormalizado === tipoPlatoNormalizado;

        return coincideIngredientes && coincideTipo;
    });
    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const contenedorResultados = document.getElementById("resultados-recetas");

    contenedorResultados.innerHTML = "";

    if (resultados.length === 0) {
        contenedorResultados.innerHTML = "<p class='text-center text-danger'>No se encontraron recetas.</p>";
        return;
    }
    
    resultados.forEach(receta => {
        const recetaHTML = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${receta.imagen}" class="img-fluid rounded-start" alt="${receta.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${receta.nombre}</h2>
              <p class="card-text"><strong>Descripción:</strong> ${receta.descripcion}</p>
              <p class="card-text"><strong>Ingredientes:</strong> ${receta.ingredientes.join(", ")}</p>
              <p class="card-text"><strong>Región:</strong> ${receta.region}</p>
              <p class="card-text"><strong>Tiempo de preparación:</strong> ${receta.tiempo}</p>
              <p class="card-text"><small class="text-muted">${receta.tipo}</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
        contenedorResultados.innerHTML += recetaHTML;
    });
}

// Escuchar el evento DOMContentLoaded para inicializar scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Aplicación cargada.");
});

