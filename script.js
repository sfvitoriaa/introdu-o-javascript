const titulodahome = document.getElementById("title-home")

titulodahome.innerHTML = "Sofia"
titulodahome.style.color = "#c2c2c2"
titulodahome.setAttribute("style", "color: #101010; font-size: 80px")

const buttonHome = document.getElementById("bnt-home")

buttonHome.innerHTML = "Clique aqui!"
buttonHome.addEventListener('click', () => {titulodahome.innerHTML = "Seu futuro começa hoje!!!"; document.querySelector(".bg2").setAttribute("style", "background-color: red;");});


