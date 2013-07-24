jQuery.noConflict();
  jQuery(document).ready(function($) {
    
	//auto generate promotion flag on catolog thumbnails by adding '_promotion_new','_promotion_20off',etc.. on backend thumbnails
	$('ul.catalogueList li').each(function(){
		if($(this).has('img[src*="_promotion_"]').length){
			//get original img src
			var src_orig = $(this).find('img[src*="_promotion_"]').attr("src");
			var src_parts = src_orig.split('_');
			var src_promo = src_parts.pop();
			var src_promo_type = src_promo.split('.');
			//get promotion tyle name
			var src_promo_type_name = src_promo_type.shift();
			var src = $(this).find('img[src*="_promotion_"]').attr("src").replace("_promotion_" + src_promo, ".jpg");
            $(this).find('img[src*="_promotion_"]').attr("src", src);
			//switch overlap style according to promotion tyle
			if( src_promo_type_name.indexOf('new') != -1 ) {
				$(this).find('img.flagBuyNow').addClass('promotion_new').removeClass('flagBuyNow').attr({
					src: '/images/overlap/overlap_' + src_promo_type_name +'.png',
					display: 'block'
				});
			}
			else if( src_promo_type_name.indexOf('off') != -1 ) {
				$(this).find('img.flagBuyNow').addClass('promotion_off').removeClass('flagBuyNow').attr({
					src: '/images/overlap/overlap_' + src_promo_type_name +'.png',
					display: 'block'
				});
			}
			else {
				$(this).find('img.flagBuyNow').addClass('promotion_default').removeClass('flagBuyNow').attr({
					src: '/images/overlap/overlap_' + src_promo_type_name +'.png',
					display: 'block'
				});
			}
			
		}
		
	});

  });