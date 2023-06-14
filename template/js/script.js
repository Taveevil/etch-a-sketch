$(document).ready(function(){
    createGrid(16);
    $(".grid").on({
        click: function(){
            $(this).css("background-color", "black")
        },
        mouseenter: function(){
            $(this).addClass('hovered')
            $('.hovered').css("background-color", "red");
        },
        mouseleave: function(){
            $(this).removeClass('hovered');
            $('.hovered').css("background-color", "red");
        }
    }
    )
    
    
})


function createGrid(x){
    const width = $('.canvas').width()/x;
    const height = $('.canvas').height()/x;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $(".canvas").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(width);
    $(".grid").height(height);
}

