
this.clearActiveLinks = function(){
	$('#aboutLink').removeClass("activeLink");
	$('#galleryLink').removeClass("activeLink");
	$('#referencesLink').removeClass("activeLink");
	$('#contactLink').removeClass("activeLink");
}

$('#home').click( function() { 
	clearActiveLinks();
	$("#about").hide();
	$("#gallery").hide();
	$("#references").hide();
	$("#contact").hide();
} );

this.setActiveLink = function(link){
	$(link).addClass("activeLink");
}

$('#aboutLink').click( function() { 

	clearActiveLinks();
	if($('#about').css("display") === "block")
	{
		$("#about").hide();
	}
	else{
		$("#about").show();
		$("#gallery").hide();
		$("#references").hide();
		$("#contact").hide();
		setActiveLink($('#aboutLink'));
	}
} );

$('#galleryLink').click( function() { 
	clearActiveLinks();
	if($('#gallery').css("display") === "block")
	{
		$("#gallery").hide();
	}
	else{
		$("#about").hide();
		$("#gallery").show();
		$("#references").hide();
		$("#contact").hide();
		setActiveLink($('#galleryLink'));
	}

} );

$('#referencesLink').click( function() { 
	clearActiveLinks();
	if($('#references').css("display") === "block")
	{
		$("#references").hide();
	}
	else{
		$("#about").hide();
		$("#gallery").hide();
		$("#references").show();
		$("#contact").hide();
		setActiveLink($('#referencesLink'));
	}
} );

$('#contactLink').click( function() { 
	clearActiveLinks();
	if($('#contact').css("display") === "block")
	{
		$("#contact").hide();
	}
	else{
		$("#about").hide();
		$("#gallery").hide();
		$("#references").hide();
		$("#contact").show();
		setActiveLink($('#contactLink'));
	}
} );

$('#thumb1Link').click( function() { 
	var newSrc = $('#thumb1').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb2Link').click( function() { 
	var newSrc = $('#thumb2').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb3Link').click( function() { 
	var newSrc = $('#thumb3').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb4Link').click( function() { 
	var newSrc = $('#thumb4').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb5Link').click( function() { 
	var newSrc = $('#thumb5').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb6Link').click( function() { 
	var newSrc = $('#thumb6').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb7Link').click( function() { 
	var newSrc = $('#thumb7').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb8Link').click( function() { 
	var newSrc = $('#thumb8').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb9Link').click( function() { 
	var newSrc = $('#thumb9').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb10Link').click( function() { 
	var newSrc = $('#thumb10').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb11Link').click( function() { 
	var newSrc = $('#thumb11').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#thumb12Link').click( function() { 
	var newSrc = $('#thumb12').attr('src');
	$('#bigImg').attr('src', newSrc);
	$("#bigImgBox").css("display", "block");
} );

$('#closeImg').click( function() { 
	$("#bigImgBox").css("display", "none");
} );

/* functions for arrows in gallery */
$('#arrowLeft').click( function() { 
	var current = $('#bigImg').attr('src');
	if (current.toLowerCase().indexOf("bilde1.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde12.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde2.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde1.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde3.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde2.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde4.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde3.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde5.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde4.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde6.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde5.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde7.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde6.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde8.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde7.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde9.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde8.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde10.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde9.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde11.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde10.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde12.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde11.jpg');
	}

} );

$('#arrowRight').click( function() { 
	var current = $('#bigImg').attr('src');
	if (current.toLowerCase().indexOf("bilde1.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde2.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde2.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde3.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde3.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde4.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde4.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde5.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde5.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde6.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde6.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde7.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde7.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde8.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde8.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde9.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde9.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde10.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde10.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde11.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde11.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde12.jpg');
	}
	else if (current.toLowerCase().indexOf("bilde12.jpg") >= 0)
	{
		$('#bigImg').attr('src', 'bilder/galleri/bilde1.jpg');
	}
} );

$(document).mouseup(function (e)
{
    var container = $("#bigImgBox");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});

this.fadeBackgroundImage1 = function(){
	$('#backgroundImage1').fadeOut(1000);
	$('#backgroundImage2').fadeIn(1000);

	setTimeout(function(){ fadeBackgroundImage2(); }, 10000);
}

this.fadeBackgroundImage2 = function(){
	$('#backgroundImage2').fadeOut(1000);
	$('#backgroundImage3').fadeIn(1000);

	setTimeout(function(){ fadeBackgroundImage3(); }, 10000);
}

this.fadeBackgroundImage3 = function(){
	$('#backgroundImage3').fadeOut(1000);
	$('#backgroundImage4').fadeIn(1000);
	setTimeout(function(){ fadeBackgroundImage4(); }, 10000);
}

this.fadeBackgroundImage4 = function(){
	$('#backgroundImage4').fadeOut(1000);
	$('#backgroundImage').fadeIn(1000);
	setTimeout(function(){ fadeBackgroundImage1(); }, 10000);
}

setTimeout(function(){ fadeBackgroundImage1(); }, 12000);

 $('#mailForm').on('submit', function(e) {
    e.preventDefault();

  // stopp formet i å bli submitted

  
  // en referanse til form-taggen
  var $form = $(this);
  
  // lag et options-objekt som gir info til $.ajax etterpå
  var opts = {
    url: 'php/contact.php', // send ajax-request til denne filen
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

 //$(document).ready(function() {
//});
