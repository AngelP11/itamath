var page = require('page')
var empty = require('empty-element')
var yo = require('yo-yo')

var template = yo`<div class="modelo-articulos">
        <img src="background.jpeg" alt="" class="img-article">
        <div class="container">
          <h2 class="title-article text-left">Phi "El Número Más Bello"</h2>
          <p class="autor">por Ivana Pinto</p>
          <div class="contenido-article">
            <p>
              Phi "el número de oro". No es nada más que una cifra: 1,61803... seguido por infinitos decimales, este numero guarda muchos mas secretos de lo que creen...<br><br>

              El hecho de encontrar este numero prácticamente en todo lo que podemos ver es impresionante; además de esto existen muchas cosas que no sabemos de este numero de oro<br><br>

              A continuación tenemos datos que te dejaran pensando a cerca de PHI:<br><br>

              Uno de los motivos por los que esta cifra lleva siglos fascinando a los que la estudian es que se encuentra de forma natural en los lugares más insospechados. Por ejemplo, la proporción entre abejas hembra y macho en una colmena suele ser similar a la proporción áurea <br><br>

              La fascinación por la proporción áurea ha sido tal a lo largo de la historia que en 1509 el matemático y teólogo italiano Luca Pacioli publicó un libro titulado La Divina Proporción en el que daba cinco razones por los que el número áureo era eso, divino: <br><br>
              a) La unicidad del número, que asemeja a la de Dios;<br>
              b) El hecho de que esté definido por tres segmentos de una recta, que asemeja a la Trinidad;<br>
              c) La inconmensurabilidad del número, igual que Dios es inconmensurable;<br>
              d) Dios es omnipresente e invariable, igual que lo es este número;<br>
              e) Dios dio ser al universo a través de la quinta esencia, representada por un dodecaedro, y el número áureo dio ser al dodecaedro. <br><br>

              También en el cuerpo humano podemos encontrarnos con la proporción áurea. Jasper Veguts, ginecólogo del Hospital Universitario de Lovaina, en Bélgica, asegura que se puede determinar si el útero de una paciente tiene un aspecto normal basándose en sus medidas: que al dividir su altura por su anchura, el resultado sea cercano a 1,618. <br><br>

              Se supone que es la representación ideal de la belleza, y sería, expresada sencillamente, la siguiente: la altura total debe ser igual a la distancia entre las puntas de los dedos teniendo los brazos y las manos totalmente abiertos. Esto equivale a ocho palmos, ocho veces la cara o seis veces los pies. En total, es la misma distancia que obtendríamos si multiplicásemos por 1,618 la distancia que separa nuestro ombligo del suelo. <br><br>

              Datos super interesantes ¿no?, si quieres saber mas datos como este adentrate en itamath tenemos muchos que aguardan por ti Itamatematico! <br><br>
            </p>
          </div>
        </div>
      </div>`

page('/numero-phi', function (ctx, next) {
  var main = document.getElementById('main-container')
  empty(main).appendChild(template)
})