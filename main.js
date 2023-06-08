// Suponiendo que tienes el JSON almacenado en una variable llamada "data"
const data = {
    "Seccion1": {
      "Hora": "12:00",
      "Descripcion": "Apertura del evento"
    },
    "Seccion2":[
      ["12:00", "12:45", "Apertura del evento."], 
      ["1:00", "2:00", "Charla a cargo de Direccion de Tecnologia."],
      ["2:00", "2:45", "Preguntas."],
      ["2:45", "3:40", "Lunch y esparcimiento."],
      ["4:15", "4:30", "Cierre del evento."]
    ]
  };
  
  // Obtener el elemento HTML donde se mostrará la agenda del evento
  const agendaAccordion = document.getElementById("agendaAccordion");
  
  // Obtener la sección "Seccion2" del JSON
  const seccion2 = data.Seccion2;
  
  // Construir el contenido del accordion dinámicamente
  let accordionHTML = "";
  for (let i = 0; i < seccion2.length; i++) {
    const horaInicio = seccion2[i][0];
    const horaFin = seccion2[i][1];
    const descripcion = seccion2[i][2];
  
    const accordionItemHTML = `
      <div class="accordion-item">
        <h3 class="accordion-header" id="accordionHeading${i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
            ${horaInicio} - ${horaFin}
          </button>
        </h3>
        <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="accordionHeading${i}" data-bs-parent="#agendaAccordion">
          <div class="accordion-body">
            ${descripcion}
          </div>
        </div>
      </div>
    `;
    accordionHTML += accordionItemHTML;
  }
  
  // Insertar el contenido en el elemento HTML
  agendaAccordion.innerHTML = accordionHTML;
  