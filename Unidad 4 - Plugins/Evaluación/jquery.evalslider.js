
jQuery.fn.evalslider = function(options){
    var config = $.extend({
        efecto: 'fadeIn',
        velocidadEfecto: 1000,
        tiempoPausa: 3000,
    }, options);

	this.each(function(){
		$('.imagenes div:gt(0)').hide();
		setInterval(function(){
		  $('.imagenes div:first-child').fadeOut(0)
			 .next('div')[config.efecto](config.velocidadEfecto)
			 .end().appendTo('.imagenes');}, config.tiempoPausa);
	});
    
	return this;
};