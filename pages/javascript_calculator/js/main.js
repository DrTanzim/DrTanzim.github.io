$(".get_text").click(function(){
    var my_text= $(".display_p").text();
    alert(my_text);
});
$(".get_text2").click(function(){
    var my_text= $(".input").val();
    alert(my_text);
});
$(".set_text").click(function(){
    var my_text= $(".input").val();
    var put_text=$(".display_p").text(my_text);
});
$(".get_html").click(function(){
    var my_text= $(".display_p").html();
    alert(my_text);
});
$(".set_html").click(function(){
    var my_text= $(".input").val();
    $(".display_p").html(my_text);
});