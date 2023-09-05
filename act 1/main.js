let usuario = prompt("ingrese su usuario");
let contraseña = prompt("ingrese su contraseña");

while((usuario != "tomas petrovich") && (contraseña != "coderhouse")){
    alert("usuario incorrecto. ingrese denuevo.");
    usuario = prompt("ingrese su usuario");
    contraseña = prompt("ingrese su contraseña");
    console.log(usuario)
    console.log(contraseña)
}

alert("Bienvenido");