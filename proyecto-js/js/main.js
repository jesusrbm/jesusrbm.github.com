$(document).ready(() => {

    // Slider
    if (window.location.href.indexOf('index.html') > -1) 
    {
        $('.galeria').bxSlider({
            auto: false,
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true
          });
    }
        
      


      // Posts
      if (window.location.href.indexOf('index.html') > -1){
        var posts = [
            {
              title: 'Prueba de titulo 1',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Nam sit amet massa a tellus dictum elementum. Nam sit amet mi ut ipsum pharetra accumsan. Suspendisse potenti. Nullam eleifend scelerisque quam, quis ultrices lorem convallis it nec venenatis. Aenean sit amet lectus vitae orci sodales consectetur. Nulla et vehiculLorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              title: 'Prueba de titulo 2',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content:  'Nam sit amet massa a tellus dictum elementum. Nam sit amet mi ut ipsum pharetra accumsan. Suspendisse potenti. Nullam eleifend scelerisque quam, quis ultrices lorem convallis it nec venenatis. Aenean sit amet lectus vitae orci sodales consectetur. Nulla et vehiculLorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              title: 'Prueba de titulo 3',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content:  'Nam sit amet massa a tellus dictum elementum. Nam sit amet mi ut ipsum pharetra accumsan. Suspendisse potenti. Nullam eleifend scelerisque quam, quis ultrices lorem convallis it nec venenatis. Aenean sit amet lectus vitae orci sodales consectetur. Nulla et vehiculLorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              title: 'Prueba de titulo 4',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Nam sit amet massa a tellus dictum elementum. Nam sit amet mi ut ipsum pharetra accumsan. Suspendisse potenti. Nullam eleifend scelerisque quam, quis ultrices lorem convallis it nec venenatis. Aenean sit amet lectus vitae orci sodales consectetur. Nulla et vehiculLorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              title: 'Prueba de titulo 5',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Nam sit amet massa a tellus dictum elementum. Nam sit amet mi ut ipsum pharetra accumsan. Suspendisse potenti. Nullam eleifend scelerisque quam, quis ultrices lorem convallis it nec venenatis. Aenean sit amet lectus vitae orci sodales consectetur. Nulla et vehiculLorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              title: 'Prueba de titulo 6',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Nam sit amet massa a tellus dictum elementum. Nam sit amet mi ut ipsum pharetra accumsan. Suspendisse potenti. Nullam eleifend scelerisque quam, quis ultrices lorem convallis it nec venenatis. Aenean sit amet lectus vitae orci sodales consectetur. Nulla et vehiculLorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },

        ];
        
        posts.forEach((item, index ) =>{
              var post = `
                          <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span> 
                            <p>
                                ${item.content}
                            </p>    
                        <a href="#" class="button-more">Leer más</a>
                      </article>
              
              `;
          $("#posts").append(post);
        });
    }
      // Selector de tema
      var theme = $("#theme");
      $("#to-green").click(function(){
          theme.attr("href", "css/green.css");
      });
      
      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
  });

    // Scroll arriba de la web
    $(".subir").click(function (e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;

    });
    // Login Falso

    $("#login form").submit(function () 
    {
      var form_name = $("#form_name").val();

      localStorage.setItem("form_name", form_name);

    });
    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") 
    {
      var about_parrafo = $("#about p");
      about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
      about_parrafo.append("<br> <a href='#' id= 'logout'>Cerrar sesión</a> ");


      $("#login").hide();
      
      $("#logout").click(function()
      {
        localStorage.clear();
        window.location.reload();
      });
    }
    if (window.location.href.indexOf('about') > -1)
    {
      $("#acordeon").accordion();

    }

    // Reloj
    if (window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
          },1000);
    }
      // Validación
      if (window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

         $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true
        });
    }


});