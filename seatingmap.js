$(document).ready(function(){

    getMapHeight();
    // makeFixed();


    $( ".MapSectionInfo .section" ).hover(
        function() {
            var thisID = $( this ).attr('id');
            var imgID = '#map_'+thisID;
            $(imgID).siblings('.detailedImg').addClass('faded');
        }, function() {
            $('.detailedImg').removeClass('faded');
        }
    );


    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            getMapHeight();
            // makeFixed();
        }, 250);
    });

    // $(window).scroll(function (event) {
    //     makeFixed();
    // });




    $('.triCard h2 a').click(function(){
        var id = $(this).attr('id');

        $('.MapSectionInfo ._fullSeason').css('display','none');
        $('.MapSectionInfo ._halfSeason').css('display','none');
        $('.MapSectionInfo ._flexPack').css('display','none');

        $('.smallCopy ._fullSeason').css('display','none');
        $('.smallCopy ._halfSeason').css('display','none');
        $('.smallCopy ._flexPack').css('display','none');

        $('.MapSectionInfo .'+ id ).css('display','block');
        $('.smallCopy .'+ id ).css('display','block');


    });

});

function getMapHeight(){
    var imgHeight = $('#mapNumbers').height();
    $('#MapCanvasWrapper').css('height',imgHeight+'px');

}

// function makeFixed(){
//     var scrollPos = $(window).scrollTop();
//     var winWidth = $(window).width();

//     var topPos = $('#MapChartHolder').offset().top - 100;
//     var holdHeight = $('#MapChartHolder').height() - 100;
//     var imgHeight = $('#mapNumbers').height();
//     var bottomPos = (topPos + holdHeight) - (imgHeight - 50 );
//     console.log(scrollPos +'  '+ topPos);

//     var addedTop = scrollPos - topPos;
//     if(winWidth > 800){
//         if(scrollPos > topPos && bottomPos > scrollPos ){
//             $('#MapCanvasWrapper').css('top', addedTop+'px');
//         }else{
            
//         }

//     }else{
//         $('#MapCanvasWrapper').css('top', '0');
//     }
// }