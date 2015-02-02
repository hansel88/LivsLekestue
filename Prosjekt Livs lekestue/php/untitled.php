



<?php
$('#form').on('submit', function(e) {
  // stopp formet i å bli submitted
  e.preventDefault();
  
  // en referanse til form-taggen
  var $form = $(this);
  
  // lag et options-objekt som gir info til $.ajax etterpå
  var opts = {
    url: 'contact.php', // send ajax-request til denne filen
    type: 'POST', // http-verb
    content: $form.serialize() // serialiser skjemaet og legg det i post-bodyen
  };
  
  $.when($.ajax(opts)).then(function() {
    // suksess - dvs 200 i respons fra server
    alert('hurra, vi har fått mailen din!');
  }, function() {
    // epic fail - dvs 500 i respons fra server
    alert('oj, noe gikk feil - skrev du feil epostadresse?')
  });
});
?>