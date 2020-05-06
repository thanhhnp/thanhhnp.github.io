jQuery(document).ready(function(){

    //initialising fullpage.js in the jQuery way
    jQuery('#myPage').fullpage({
        navigation: true,
        slidesNavigation: true,
        css3: true,
        scrollingSpeed: 1200,
        slidesNavigation: false,
        onLeave: function(i, nextIndex, direction){
            if(i.index==0){
                setTimeout(()=>{
                    jQuery("#staticImg").addClass("moveDown")
                },500);
            }
            else if (nextIndex.index ==0)
            {
                jQuery("#staticImg").removeClass("moveDown");
            }
            else if (i.index==1)
            {
                setTimeout(()=>{
                    jQuery("#staticImg2").addClass("moveUp")
                },500);
            }
            else if (i.index==3)
            {   
                jQuery("#staticImg2").removeClass("moveUp");
                setTimeout(()=>{
                    jQuery("#staticImg2").addClass("moveDown")
                },500);
            }
        },
        responsiveWidth: 1025,
    });
    jQuery(".projectsList").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows:2,
        responsive: [
            {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 3,
              infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows: 2,
                  dots: true,
                }
              },
        ]
    })
});