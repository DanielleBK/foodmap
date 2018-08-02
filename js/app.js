// Add your JavaScript
// $(document).ready(function() {
//   $('.home').slideUp( 300 ).delay( 800 ).fadeIn( 400 );
// });

// <Splash>
$(document).ready(function() {
  $('.home').delay('3000').fadeIn('slow')

  $.each(restaurantes, function (index, restaurante) {
    $("<img>").attr("src", restaurante.image).appendTo(".vitrine").addClass(restaurante.name);

    // $(".input").focusout(function(){
    //     var busca = $("this").val();
    //     alert(busca);
    // }); Valor do que foi digitado
})
});
// <Map>
var map;
  function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   zoom: 15,
   center: new google.maps.LatLng(-23.5578108, -46.6625469),
   mapTypeId: 'roadmap'
 });
 // Pegando dados Json
 var features = restaurantes.map(function(r){
  return {
      position: new google.maps.LatLng(r.latitude, r.longitude),
      type: 'info'
    }
});
// Criando os pontos.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      // icon: icons[feature.type],
      map: map
    });
  });
}
