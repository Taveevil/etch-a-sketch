$(document).ready(function(){
    createGrid(16);
    var prev;
    var mouseDown = false;
    var defaultColor = "black";
    var color;

    color = defaultColor;

    $('#color-picker').on('input',() => {
        color = $('#color-picker').val();
        console.log(color);
    })

    $(".grid").on({
        mousedown: function(event){
            event.preventDefault();
            mouseDown = true;
            $(this).css('background-color',color)
            prev = color;
        },
        mouseup: function(){
            mouseDown = false;
        },
        mouseenter: function(){
            if(mouseDown){
                $(this).css('background-color',color)
                prev = color;
                console.log(mouseDown)
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
    })

    $('#pencil').on("click",()=>{
        color = $('#color-picker').val();   
    })

    $('#eraser').on("click",()=>{
        color = "white";    
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

