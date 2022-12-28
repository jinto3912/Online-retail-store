$(document).ready(function(){
    $("#signup").validate({
        rules:{
            flname:{
                required:true,
                minlength:8
            },
            mob:{
                required:true,
                minlength:10

            },
            pass:{
                required:true,
                minlength:6
            },
            
        }
    })
}
)