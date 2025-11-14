$(document).ready(function(){
    $("#Signup_form").validate({
        rules:{
            fname:{
            required:true,
            minlength:4,
            maxlength:6
        },
            sname:{
            required:true,
            minlength:4
        },
            email:{
                required:true,
                email:true
        },
            pass:{
                minlength:6
        },

            day:{
                required:true

        },
            gender:{
                required:true
            }

        },
        messages:{
            fnames:{
            minlength:"enter atleast 6 numbers",
            required:"Enter full"
            }
        }
    })
})