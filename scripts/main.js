"use strict";
window.LADV = window.LADV || {}, window.LADV.Index = function() {
    var i = {}, n = $(".index");
    var window_Width = n.width();
    return i.init = function() {
        if (!n.length)
            return !1;
        if (
                n.find(".section-owlcarousel-full").length &&
                n.find(".section-owlcarousel-full").owlCarousel({
                    center: !0,
                    items: 1,
                    loop: !0,
                    dots: !0,
                    nav: !0,
                    navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                    margin: 0
                }),
              n.find(".section-vos-envies").length && n.find(".section-team").length
          ) {
                       n.find(".section-vos-envies .owlcarousel-content").owlCarousel({
                                center:true,                          
                                items: 4,
                                loop: !0,
                                nav: !0,
                                navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                                merge: !0,
                                dots: !1,
                                responsive:{
                                    0:{
                                        items:1,
                                        margin: 10,
                                        stagePadding:20,
                                        dots: true
                                    },
                                    600:{
                                        items:4,
                                        margin: 20
                                    }
                                }
                        })
                var i = 5, e = !0, o = !0;
                if (n.find(".section-team").attr("data-item") &&  (i = n.find(".section-team").attr("data-item"), e = !1),  n.find(".section-team").attr("data-center")) 
                {
                    var t = n.find(".section-team").attr("data-center");
                     o = "true" === t
                }
         
                    n.find(".section-team .owlcarousel-content").owlCarousel({
                        center: o,
                        items: i,
                        loop: !0,
                        nav: !0,
                        navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                        merge: e,
                        margin: 10,
                        dots: !1,
                                responsive:{
                                    0:{
                                        items:1,
                                        dots: true,
                                    },
                                    600:{
                                        items:i
                                    }
                                }
                    })
            }
            if(n.find(".slider-decouvrez-aussi").length ){
               n.find(".slider-decouvrez-aussi .owlcarousel-content").owlCarousel({
                   center: !1,
                   items: 4,
                   loop: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                   margin: 20,
                   responsive:
                            {
                               0: {
                                    items: 1,
                                    dots: true,
                                    nav: true,
                                    stagePadding:10,
                                    margin:5
                                },
                                676: {
                                    items: 4,
                                    margin: 20
                                }
                            }
                   
               })
            }
            
            if (n.find(".section-nos-conseillers").length) {
                var c = n.find(".section-nos-conseillers .owlcarousel-content");
                c.owlCarousel({
                    center: !0,
                    items: 1,
                    loop: !0,
                    nav: !0,
                    navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                    margin: 0,
                    stagePadding:0,
                    responsive:
                        {
                               0: {
                                    items: 1,
                                    dots: true,
                                    nav: true,
                                    stagePadding:10,
                                    margin:5
                                },
                                767:{
                                    stagePadding:0,
                                    margin:0
                                }
                            }
                    }).on("change.owl.carousel", function(i) {
                        var e = i.page.index;
                        n.find(".section-owlcarousel-item .navigation a").removeClass("active"),
                        $(n.find(".section-owlcarousel-item .navigation a")[e]).addClass("active")
                     }), 
                   n.find(".section-owlcarousel-item .navigation a").click(function(i) {
                        i.preventDefault(),
                        n.find(".section-owlcarousel-item .navigation a").removeClass("active"), 
                        $(this).addClass("active");
                        var e = parseInt($(this).attr("data-id")) - 1;
                        c.trigger("to.owl.carousel", e)
                   })
            }
            
            
            
            n.find(".block-nos-brochures").length && n.find(".block-nos-brochures .owlcarousel-content").owlCarousel({
                center: !0,
                items: 1,
                loop: !0,
                nav: !0,
                navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],margin: 0
            }),
            n.find(".block-service").length && n.find(".block-service .owlcarousel-content").owlCarousel({
                    center: !0,
                    items: 1,
                    loop: !0,
                    nav: !0,
                    navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                    margin: 0
                })
             n.find(".section-nos-brochures .owlcarousel-content").length && n.find(".section-nos-brochures .owlcarousel-content").owlCarousel({
                items: 2,
                nav: true,
                dots:false,
                margin:20,
                navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],

             })

    }, i
}(jQuery), 
window.LADV.TourDetail = function() {
    var i = {}, n = $(".tour-detail");
    return i.initUI = function() {
        n.find(".block-slider-day").length && n.find(".block-slider-day .owlcarousel-full").owlCarousel({
            center: !1,
            items: 10,
            loop: !1,
            dots: !1,
            nav: !0,
            autoWidth: !0,
            navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],margin: 1
        })
	if(n.find(".section-decouvrez-aussi").length){
            n.find(".section-decouvrez-aussi .owlcarousel-content").owlCarousel({
                    center: !1,
                    items: 4,
                    loop: !0,
                    dots: !1,
                    nav: !0,
                    navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                    margin: 20,
                    responsive:{
                        0:{
                            items: 1,
                            stagePadding:20,
                            margin:10,
                            dots:true
                        },
                        767:{
                            items: 4
                        }
                    }
                })
        } 
        n.find(".section-block-service").length && 
	n.find(".section-block-service .owlcarousel-content").owlCarousel({
			 center: !0,
			 items: 1,
			 loop: !0,
			 dots: !1,
			 nav: !0,
			 navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
			 margin: 0,
                         responsive:{
                             0:{
                                dots: true
                               }
                         }
	})
	var i = 5, e = !0, o = !0;
        if (n.find(".section-team").attr("data-item") &&  (i = n.find(".section-team").attr("data-item"), e = !1),  n.find(".section-team").attr("data-center")) 
        {
            var t = n.find(".section-team").attr("data-center");
             o = "true" === t
        }
        n.find(".section-team .owlcarousel-content").owlCarousel({
                center: o,
                items: i,
                loop: !0,
                nav: !0,
                navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
                merge: e,
                margin: 10,
                dots: !1,
                responsive:{
                    0:{
                        items:1,
                        dots: true
                    },
                    600:{
                        items:i
                    }
                }
        })
         n.find(".block-silder-pointer-address").length && 
         n.find(".block-silder-pointer-address").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>'],
            margin: 0
        })
    }, i.init = function() {
        return n.length ? void i.initUI() : !1
    }, i
}(jQuery), 
        
jQuery(document).ready(function(i) {
    var body = jQuery('body').width();
    i(".gotop a").click(function(n) {
        n.preventDefault(), i("html, body").animate({scrollTop: 0}, 800)
    }), window.LADV.Index.init(), window.LADV.TourDetail.init()
    if(body < 767){
       jQuery('.section-asie-list-conseillers .conseillers-list .row').owlCarousel({
           dots:true,
           nav: true,
           items:1,
           navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>']
       });
       jQuery('.block-content-team').owlCarousel({
           dots:true,
           nav: true,
           items:1,
           navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>']
       });
    }
    jQuery( window ).resize(function() {
        var body = jQuery('body').width();
        if(body < 767){
            /*MOBILE*/
             jQuery('.section-asie-list-conseillers .conseillers-list .row').owlCarousel({
                dots:true,
                nav: true,
                items:1,
                navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>']
             })
             jQuery('.block-content-team').owlCarousel({
                dots:true,
                nav: true,
                items:1,
                navText: ['<i class="icon icon-prev"></i>', '<i class="icon icon-next"></i>']
            });
        }else{
            /*desktop destroy.owl.carousel*/
            jQuery('.section-asie-list-conseillers .conseillers-list .row').owlCarousel().trigger('destroy.owl.carousel');
            jQuery('.block-content-team').owlCarousel().trigger('destroy.owl.carousel')
            
        }
    });
    jQuery('#bs-example-navbar-collapse-1').css('height','1px')
    /**pge pays-region*/
    jQuery('.block-info-pratiques h4 a,.block-culture h4 a,.tour-detail-day .panel-title a').click(function(){
        if(jQuery(this).hasClass('active')){
            jQuery(this).removeClass('active');
        }else{
            jQuery(this).addClass('active');
        }
    })
    //tour detail
    jQuery('.block-slider-day a').click(function(e){
        e.preventDefault();
        if(!jQuery(this).hasClass('active')){
            jQuery('.block-slider-day a').removeClass('active')
            jQuery(this).addClass('active')
            var id = jQuery(this).attr('href');
            id = id.replace("#","")
            jQuery('.block-detail-tour .block-detail-day').removeClass('active');
            jQuery('.block-detail-tour .block-detail-day').each(function(e){
                if(jQuery(this).attr("id") == id ){
                    jQuery(this).addClass('active');
                }
            })
        }
    })
});
