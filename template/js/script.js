$(document).ready(function(){
    createGrid(16);
    var prev;
    var mouseDown = false;
    var color = "black";
    $(".grid").on({
        mousedown: function(event){
            event.preventDefault();
            mouseDown = true;
        },
        mouseup: function(){
            mouseDown = false;
        },
        mouseenter: function(){
            if(mouseDown){
                $(this).addClass('filled');
                $('.filled').css('background-color',color)
                prev = color;
            } else{
            prev  = $(this).css("background-color");
            $(this).css("background-color", color)
            }
        },
        mouseleave: function(){
            $(this).css("background-color", prev)
        }
    }

    
    )
    
    $(".canvas").on("mouseleave",function(){
        mouseDown=false;
    })

    $('#reset').on("click",()=>{
        $('.grid').css("background-color", "");
        $('.grid').removeClass('filled');
      
    })
    
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

