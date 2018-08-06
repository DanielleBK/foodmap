// Add your JavaScript
$(document).ready(function() {
  $('.box-2').delay('2000').fadeIn('slow')
});
  function showRestaurants(restaurantsArray) {
    $('#img-restaurant').html('');
    $.each(restaurantsArray, function (index, restaurantes) {
      $('<img>').attr('src', restaurantes.image).attr('id', restaurantes.name).on('click', openModal).addClass(restaurantes.type).appendTo('#img-restaurant');
  })
}
// MODAL
function openModal(event) {
  var restaurantName = $(event.target).attr('id');
  var restaurantData =
    $(restaurantes).filter(function (index, restaurantes) {
      if (restaurantName === restaurantes.name) {
        return true;
      } else {
        return false;
      }
      })[0];
      $('#modal-restaurant-name').text(restaurantData.name);
      $('#modal-restaurant-type').text(restaurantData.type);
      $('#modal-restaurant-description').text(restaurantData.description);
      $('#modal-restaurant-image').attr('src', restaurantData.image);
      $('#modal-restaurant').modal('show');
      $('.form-control').val('');
      showRestaurants(restaurantes);
    }
// BUSCA RESTAURANTES
  function search() {
    $('.form-control').keyup(function() {
      var search = $(this).val().toLowerCase();
      var filteredRestaurants =
        $(restaurantes).filter(function (index, restaurant) {
          if (search === '') {
            return true;
          }
          if (restaurant.type.toLowerCase() === search) {
            return true;
          } else {
            return false;
          }
        })
        $('#img-restaurant').html('');
        showRestaurants(filteredRestaurants);
      });
    }
    $(document).ready(function() {
    showRestaurants(restaurantes);
    search();
  });
//MAP
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14,
  center: new google.maps.LatLng(-23.5578108, -46.6625469),
  mapTypeId: 'roadmap'
  });


  var features = restaurantes.map(function(r){
  return {
    position: new google.maps.LatLng(r.latitude, r.longitude),
    type: 'info'
    }
  });

// MARCAÇÕES
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      map: map
    });
  });
  }
