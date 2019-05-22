$(document).ready(function(){

  //uso handlebars
  var template_html = $('#entry-template').html();
  var template_function = Handlebars.compile(template_html);



  $('button').click(function() {

    // recupero attributo input in una var
    var numero_scelto = $('.input_centro').val();
    //salvo il valore in un var da inserice nell'ajax
    var dato_ajax =  {
      'n': numero_scelto
    };
    console.log(dato_ajax);

    $.ajax({
      'url': 'https://www.boolean.careers/api/array/basket?n=numberPlayers',
      'method': 'GET',
      'data' : dato_ajax,
      'success': function(data){
        output(data);
        console.log(data);
      },
      'error': function(){

      }
    });

    function output(info){

      var numero = info.response;
      console.log(numero);

      for (var i = 0; i < numero.length; i++) {
        // numero[i].fouls
        console.log(numero[i].fouls);

        var variabile_hldbar = {
          'codice': numero[i].playerCode,
          'punti': numero[i].points,
          'rimbalzi': numero[i].rebounds,
          'falli': numero[i].fouls,
          'perc_2': numero[i].twoPoints,
          'perc_3': numero[i].threePoints
        };
        var html_finale = template_function(variabile_hldbar);
        // appendo questo var all id che è nell'html
        $('.cont').append(html_finale);

      }

      //fine funzione ajax
    }





  //fine click
  });





















});
