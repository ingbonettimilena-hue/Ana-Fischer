const form = document.querySelector("form");
const mensaje = document.getElementById("mensaje-enviado");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    mensaje.style.display = "block";
    form.reset();
  } else {
    alert("Hubo un error al enviar");
  }
});