$(document).ready(() => {
    $(".classified" ).delay(3000).fadeOut(5000); // fades .classified

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    /*-----------------DATE HANDLERS------------------------*/
    let td = new Date();
    let dd = td.getDate();
    let mm = td.getMonth()+1; //January is 0!
    let yyyy = td.getFullYear();

    if(dd<10)
        dd='0'+dd;

    if(mm<10)
        mm='0'+mm;

    let date = $(".date");
    let d = $("#dateOut"); // holds dateOut Obj
    let today = yyyy+'-'+mm+'-'+dd;

    date.val(today);
    date.attr("min", today);


    $("#dateIn, #days").change(function(){
        let a = $("#days").val();
        let b = $("#price").val();
        let c = a*b;

        $("#numbers").val(c); // changes price

        today = $("#dateIn").val(); // console.log(today);

        td = new Date(today);

        a--;
        td.setDate(td.getDate() + a); // console.log(td.toLocaleDateString());

        dd = td.getDate();
        mm = td.getMonth()+1; //January is 0!
        yyyy = td.getFullYear();

        if(dd<10)
            dd='0'+dd;

        if(mm<10)
            mm='0'+mm;

        today = yyyy+'-'+mm+'-'+dd;

        d.val(today);
    });

    /*-----------------------ADMIN------------------------*/
    $(".hide").hide();
    $("#cars1").show();

    $("#cars").click(function(){
        _show(this);
        $("#cars1").show();
    });

    $("#resvs").click(function(){
        _show(this);
        $("#resvs1").show();
    });

    $("#users").click(function(){
        _show(this);
        $("#users1").show();
    });

    function _show(show) {
        $(".hide").hide();
        $("a").removeClass("active");
        $(show).addClass("active");
    }

    ///------------------ NOT WORKING!!!
    /*
    $("#cars, #resvs, #users").click(function(){
        _show(this);

        switch (show) {
            case $("#cars"):
                $("#cars1").show();
                break;

            case $("#resvs"):
                $("#resvs1").show();
                break;

            case $("#users"):
                $("#users1").show();
                break;
        }
    });*/
});
