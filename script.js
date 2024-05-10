// Función para establecer una cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Función para eliminar una cookie
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

// Función para manejar el clic en los botones
function handleClick(event) {
  var target = event.target;
  var firstLink = target.getAttribute('data-first-link');
  var secondLink = target.getAttribute('data-second-link');
  
  // Verificar si hay una cookie almacenada
  var cookieValue = getCookie("boton_clicked");
  if (cookieValue === null) {
    // Si no hay una cookie, establecerla y redirigir al primer enlace
    setCookie("boton_clicked", "true", 1);
    window.location.href = firstLink;
  } else {
    // Si hay una cookie, eliminarla y redirigir al segundo enlace
    eraseCookie("boton_clicked");
    window.location.href = secondLink;
  }
}

// Obtener todos los botones y agregar un event listener
var buttons = document.querySelectorAll(".button");
buttons.forEach(function(button) {
  button.addEventListener("click", handleClick);
});
