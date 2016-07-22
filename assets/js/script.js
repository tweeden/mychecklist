// Check off specific items by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete items
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
    // grabbing new item text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span>x</span> " + todoText + "</li>");
    }
});
