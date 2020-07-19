$(".Text").click(function(){
    $(".display").text($(".input").val());
});

$(".HTML").click(function(){
    $(".display").html($(".input").val());
});

$(".Append").click(function(){
    $(".display").append($(".input").val());
});

$(".Prepend").click(function(){
    $(".display").prepend($(".input").val());
});

$(".After").click(function(){
    $(".display").after($(".input").val());
});

$(".Before").click(function(){
    $(".display").before($(".input").val());
});

$(".Evaluate").click(function(){
    var result=eval($(".input").val());
    $(".display").text(result);
});

$(".Prompt").click(function(){
    var name= prompt("Enter Your Name");
    $(".display").text("Your Name Is "+name);
});

$(".AddClass").click(function(){
    $(".display").addClass("ok");
});

$(".RemoveClass").click(function(){
    $(".display").removeClass("ok");
});

$(".Hide").click(function(){
    $(".display").hide(1000);
});
$(".Show").click(function(){
    $(".display").show('slow');
});

$(".FadeOut").click(function(){
    $(".display").fadeOut(1000);
});
$(".FadeIn").click(function(){
    $(".display").fadeIn(1000);
});

$(".FadeTo").click(function(){
    $(".display").fadeTo(1000,prompt("enter the opacity:"));
});

$(".SlideUp").click(function(){
    $(".display").slideUp(1000);
});
$(".SlideDown").click(function(){
    $(".display").slideDown(4000);
});

$(".Toggle").click(function(){
    $(".display").toggle('fast');
});

$(".FadeToggle").click(function(){
    $(".display").fadeToggle(1000);
});
$(".SlideToggle").click(function(){
    $(".display").slideToggle(1000);
});
$(".CSS").click(function(){
    $(".display").css("color","white");
});
$(".Stop").click(function(){
    $(".display").stop();
});

$(".ANIMATE").click(function(){
    $(".display").css("background",'red').css("overflowY",'hidden').text(" ");
    $(".display").animate({width:"100px",height:"100px",borderRadius:"50%",left:"50%"},1000).animate({left:"0%"},2000,function(){
        $(".display").css("background","yellow");
    });
    $(".display").animate({top:"400px"},1000,function(){
        $(".display").css("background","blue");
    }).animate({left:'1225px'},1000,function(){
        $(".display").css("background","red");
    }).animate({top:"0px"},1000).animate({left:"591px"});

    $(".display").animate({width:"100px",height:"100px",borderRadius:"0%",left:"50%"},1000).animate({left:"0%"},2000);
    $(".display").animate({top:"400px"},1000).animate({left:'1225px'},1000).animate({top:"0px"},1000).animate({left:"591px"});
    $('.display').animate({width:"200px"},2000).animate({height:"200px"},2000).animate({width:"50px",height:"50px"},2000).slideUp(1000).slideDown(1000);

    
});

$(".CallBack").click(function(){
    $(".display").animate({width:"200px",left:"50%",top:"30px",height:"200px"},3000,function(){
        alert("animation is done.")
    });
});

$(".GetHTML").click(function(){
    var get_everything=$(".display").html();
    $(".input").val(get_everything);
});
$(".Link").click(function(){
    $(".display").html("<a href='https://google.com'>Google</a>");
});
$(".GetAttr").click(function(){
    alert($(".display a").attr("href"));
});
$(".SetAttr").click(function(){
    $(".display a").attr("href",prompt("Give The URL:"));
    $(".display a").attr("title",prompt("Give The Title:"));
});

$(".Round").click(function(){
   var result= $(".display").text();
   $(".display").text(Math.round(result));
});

$(".Floor").click(function(){
    var result= $(".display").text();
    $(".display").text(Math.floor(result));
 });

 $(".Ceiling").click(function(){
    var result= $(".display").text();
    $(".display").text(Math.ceil(result));
 });

 $(".Random").click(function(){
    $(".display").text(Math.ceil(Math.random()*100));
 });
 $(".Height").click(function(){
    $(".display").text($(".display").height() );
 });
 $(".InnerWidth").click(function(){
    $(".display").text($(".display").innerWidth() );
 });