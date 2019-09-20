$(document).ready(function(){
    $('#userSelector').change(function(){
        $("#users").hide(); 
        $('#' + $(this).val()).show();
    });  
    
    $("#reg").click(function(){
        var fname = $("#nombre").val();
        var lname = $("#apellido").val();
        var uname = $("#usuario").val();
        var tuser = $("#userSelector").val();
        
        if( fname != "" && lname != "" ){
            alert(fname+" "+lname+" "+uname+" "+tuser);
             $.ajax({
                url:'registro.php',
                type:'post',
                data:{nombre:fname,apellido:lname,usuario:uname,tipousuario:tuser},
                success:function(response){
//                    if(response != "Error"){
                        alert(response);
                        //window.location = "home.php";
//                    }else{
//                        msg = "Usuario o Contraseña Invalidas!";
//                        alert("No Exito!");
//                    }
                }
            });
        }else{
            alert("Faltan Datos");
        }
    });     
});