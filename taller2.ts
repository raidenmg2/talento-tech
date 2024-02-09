/**Parte 1: Tipos de Datos
Declaración de Variables:
Declaren variables utilizando diferentes tipos de datos: número, cadena, booleano, arreglo, objeto, etc.
 *  
 */

let var1:number = 25;
let var2:string = "Este es un string";
let var3: boolean = true;
let var4: number[] = [1,2,3,4,5,6,7];
let persona: object = {
     nombre: "Luis Carlos",
     Id:57,
     edad:27
    };
/**
 * Uso de Tipos de Literales:
    Utilicen tipos de literales para limitar los valores de una variable.
 * 
 * 
 * 
 */
    type mascotas = 'perro'|'gato'|'pez';
    let mascota1 = 'perro';
    console.log('La mascota elegida es un :',`${mascota1}`);

 /**Parte 2: Condicionales
    Estructuras Condicionales:
    Resuelvan un problema utilizando estructuras condicionales (if, else if, else).
  *  */   

 /**Definir si el usuario tiene la edad para ingresar a una plataforma */


 let edad: number =12;

 if (edad >=18){
    console.log('ingreso exitoso')
}else{
    console.log('ingreso fallido , no tiene la edad para ingresar')
}
  
  
/**
 * Parte 3: Funciones Funciones Básicas:
Creen funciones básicas con diferentes tipos de parámetros y tipos de retorno.
 * 
 */
  function sumar(a: number,b: number): number{
        return a+b;
}

let resultado = sumar(1,7);
console.log(resultado);


function login (usuario: string, contrasena: number): void{
    if (contrasena===1234){
       console.log('ingreso exitoso');
    }else{
        console.log('Contraseña invalida');
    }
}


login("Luis",1234);

/**
 * Funciones con Parámetros Opcionales y Predeterminados:
    Creen funciones que utilicen parámetros opcionales y con valores predeterminados.
 * 
 * 
 */
/**funcion con parametro opcionales */
 function datosUsuario(nombre: string, identificacion: number, edad: number,email?:string){
        if(nombre && identificacion && edad){
            console.log('Los datos ingresados son : ',nombre,identificacion,edad)

        }else
        console.log('Los datos ingresados son : ',nombre,identificacion,edad,email)

 }

 datosUsuario('Luis',11111111,22);
 datosUsuario('Luis',11111111,22,'ejemplo@ejemplo.com');

 /**funcion con valores predeterminados */


 function perimetroDeUnCuadrado(lado:number = 7 ) : number{
    let perimetro = lado *4;
    console.log('El perimetro del cuadrado es ',perimetro);
    return perimetro ;
 }

perimetroDeUnCuadrado(); 
