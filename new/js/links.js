$(document).ready(function(){

    $( ".accordion" ).accordion({
        collapsible:true,
        active:false,
        heightStyle:"content",
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
    });

    $( ".sub-accordion" ).accordion({
        collapsible:true,
        active:false,
        heightStyle:"content",
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
    });

    $(".links-info").hide();

    if (location.hash == '#elearning') {
        $("#elearning").fadeIn(200);
    };
    if (location.hash == '#language') {
        $("#language").fadeIn(200);
    };
    if (location.hash == '#staff') {
        $("#staff").fadeIn(200);
    };
    if (location.hash == '#student') {
        $("#student").fadeIn(200);
    };
    if (location.hash == '#visitor') {
        $("#visitor").fadeIn(200);
    };
    if (location.hash == '#library') {
        $("#library").fadeIn(200);
    };

    if (location.hash == '#staff') {
        $(".links-info").hide();
        $("#staff").show();
    };


    if (location.hash == '#student') {
        $(".links-info").hide();
        $("#student").show();
    };


    if (location.hash == '#visitor') {
        $(".links-info").hide();
        $("#visitor").show();
    };

    $(".stafflink").click(function() {
        $(".links-info").hide();
        $("#staff").fadeIn(200);
    });
    $(".studentlink").click(function() {
        $(".links-info").hide();
        $("#student").fadeIn(200);
    });
    $(".visitorlink").click(function() {
        $(".links-info").hide();
        $("#visitor").fadeIn(200);
    });

    $("#elearning-nav").click(function(){
        $(".links-info").hide();
        $("#"+this.id.substr(0,(this.id.length-4))).fadeIn(200);
    });

    $("#language-nav").click(function(){
        $(".links-info").hide();
        $("#"+this.id.substr(0,(this.id.length-4))).fadeIn(200);
    });

    $("#staff-nav").click(function(){
        $(".links-info").hide();
        $("#"+this.id.substr(0,(this.id.length-4))).fadeIn(200);
    });

    $("#student-nav").click(function(){
        $(".links-info").hide();
        $("#"+this.id.substr(0,(this.id.length-4))).fadeIn(200);
    });

    $("#visitor-nav").click(function(){
        $(".links-info").hide();
        $("#"+this.id.substr(0,(this.id.length-4))).fadeIn(200);
    });

}); 