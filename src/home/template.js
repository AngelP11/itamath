var yo = require('yo-yo')

module.exports = yo`<div class="home">
      <section id="slideshow">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="background.jpeg" alt="">
              <div class="carousel-caption">
                ...
              </div>
            </div>
            <div class="item">
              <img src="background-2.jpeg" alt="">
              <div class="carousel-caption">
                ...
              </div>
            </div>
            <div class="item">
              <img src="background-3.jpeg" alt="">
              <div class="carousel-caption">
                ...
              </div>
            </div>
          </div>

          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section class="inicio">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <article class="descripcion">
                <img src="" alt="Mi foto" class="foto">
                <h1>Hola, soy Jose Itamar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, harum blanditiis voluptas! Est repellendus praesentium illo tempore quidem architecto, voluptatibus at quasi, facilis adipisci excepturi tempora magnam, officiis eos, doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maxime soluta autem fuga laboriosam quasi commodi quae perferendis, fugit, explicabo unde doloribus incidunt accusantium, praesentium fugiat! Iure esse perspiciatis nesciunt.</p>
              </article>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <article class="contenido">
                <div class="tips">
                  <img src="tips.png" height="128" width="128" alt="tips">
                  <h3>Tips</h3>
                  <a href="/tips">Ver mas</a>
                </div>
                <div class="guias">
                  <img src="guias.png" height="128" width="128" alt="guias">
                  <h3>Guias</h3>
                  <a href="/guias">Ver mas</a>
                </div>
                <div class="reflexiones">
                  <img src="reflexciones.png" height="128" width="128" alt="reflexiones">
                  <h3>Reflexiones</h3>
                  <a href="/reflexiones">Ver mas</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>`