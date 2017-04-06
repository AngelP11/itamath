var page = require('page')
var empty = require('empty-element')
var yo = require('yo-yo')

var template = yo` <div class="modelo-articulos">
        <img src="datos-curiosos-1.jpg" alt="" class="img-article">
        <div class="container">
          <h2 class="title-article text-left">Datos curiosos #1</h2>
          <p class="autor">por Valentina Torres</p>
          <div class="contenido-article">
            <ol>
              <li>Las ecuaciones de Navier-Stokes se utilizan todo el tiempo en la aproximación de flujos de fluidos turbulentos cerca de una aeronave y en el torrente sanguíneo, pero las matemáticas que hay detrás de ellas todavía no se entienden.</li>
              <li>Algunos problemas de matemáticas están pensados para ser confusos, como la paradoja del filósofo británico Bertrand Russell: “el conjunto de todos los conjuntos que no son miembros de sí mismos.” Si el conjunto de Russell no es un miembro de sí mismo, entonces, por definición, es un miembro de sí mismo.</li>
              <li>Russell usa un argumento matemático para poner a prueba los límites exteriores de la lógica (¡y la cordura!).</li>
              <li>Kurt Gödel, el famoso lógico austriaco, empeoró las cosas en 1931 con su primer teorema de incompletitud, que dice que cualquier sistema matemático suficientemente poderoso debe contener declaraciones que sean verdaderas pero indemostrables. Gödel se dejó morir de hambre en 1978.</li>
              <li>los pensadores y aficionados dispuestos a  resolver problemas matemáticos no descansan. Millones de ellos lucharon durante 358 años con el último teorema de Fermat, una nota inacabada que el político y matemático amateur del siglo 17 Pierre de Fermat garabateó en el margen de un libro.</li>
              <li>¿Sabes que 3^2 + 4^2 = 5^2? Fermat afirmó que no hay números que encajen en el patrón (a^n + b^n = c^n) cuando se eleva a una potencia superior a 2.  Finalmente, en 1995, el matemático inglés Andrew Wiles demostró que Fermat tenía razón, pero para hacerlo tuvo que usar matemáticas que Fermat nunca conoció. En la introducción de las 109 páginas deprueba de Wiles también cita decenas de colegas, vivos y muertos, de los cuales aprovechó su conocimiento.</li>
              <li>En una conferencia en París en 1900, el matemático alemán David Hilbert decidió aclarar algunos misterios matemáticos persistentes mediante el establecimiento de 23 problemas clave. Para el año 2000 los matemáticos habían resuelto todos los problemas de Hilbert excepto una hipótesis planteada en 1859 por Bernhard Riemann.</li>
              <li>La hipótesis de Riemann es considerada el problema sin resolver más importante en matemáticas. Se afirma que hay un patrón oculto en la distribución de los números primos (los números que no se pueden factorizar, como 5, 7, 41, y, oh, 1000033).
              La hipótesis se ha demostrado experimentalmente para los primeros 100 mil millones de casos, lo que sería una prueba suficiente para un contable o incluso un físico. Pero no para un matemático.</li>
            </ol>
          </div>
        </div>
      </div>`

page('/datos-curiosos-1', function (ctx, next) {
  var main = document.getElementById('main-container')
  empty(main).appendChild(template)
})