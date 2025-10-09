class Unit_Test {
    
    constructor(){

        this.clases = [
            {
                stringclase : 'persona',
                attributes : [  'dni',
                                'nombre_persona',
                                'apellidos_persona',
                                'fechanacimiento_persona',  // Corregido: sin mayúscula en la N
                                'direccion_persona',
                                'telefono_persona',
                                'email_persona',
                                'foto_persona',
                                'nuevo_foto_persona'
                            ],
            },
            {
                stringclase : "alumnograduacion",
                attributes : [  'login',
                                'password',
                                'nombre',
                                'apellidos',
                                'titulacion',
                                'dni',
                                'telefono',
                                'direccion',
                                'email',
                                'fotoacto'
                            ],
            }
        ];

        this.actions = ["ADD","EDIT","SEARCH"]
        
        var test_result = this.test_class_and_method_validation();

        this.dom = new dom;

        let marcados =	{
                    existe: {value:false, style:'background-color: red'}
        };

        this.dom.showData('IU_Test_result', test_result, marcados);
    }

    /** 
     *    test if class exists due the class definition file is included
     *    If class exists test if validation methods are presented
     * 
     *      @return an object with object in format {clase, accion, metodo, existe}
    */
    test_class_and_method_validation(){
        
        const entidad = this.clases;
        
        // creo el objeto de salida que incluira todos los objetos de comprobacion de metodos de validacion
        var output = [];
        
        let output_count = 0;

        // recorro todas las clases definidas
        for (let i=0;i<entidad.length;i++){
        
            // creo el objeto de cada comprobacion de metodo de validacion
            var partial_output = {
                clase: "",
                accion: "",
                metodo : "",
                existe: "",
                error: ""
            };

            var validclass = true;
            partial_output.clase = entidad[i].stringclase;
            
            // compruebo si la clase esta definida
            // hago try catch para evitar el pete por referenceError si no existe
            try{
               if (typeof eval(entidad[i].stringclase) == 'function'){
                    validclass = true;
               }
            }
            // en caso contrario podria intentar cargar el fichero de definicion para solucionarlo [pull request]
            catch(e){
                partial_output.existe = false; 
                partial_output.error = `Clase ${entidad[i].stringclase} no encontrada`;
                output[output_count] = partial_output;
                output_count++;
                validclass = false;
            }
                
            if (validclass){
                // para instanciar la clase necesita que el eval del string que la identifica
                var claseacrear =  eval(entidad[i].stringclase);               
                this.objetocomprobar = new claseacrear('test');
                

                // el metodo __proto__ devuelve un array con todos los metodos que tiene el objeto
                var listametodos = this.objetocomprobar.__proto__;

                // recorro las acciones para las cuales tengo validaciones
                for (let j=0;j<this.actions.length;j++){
                    var action = this.actions[j];

                    // al entrar en la accion compruebo si existe la validacion de submit de accion

                    // creo el nombre del metodo de submit de accion
                    var misubmitfunction = action+'_submit_'+entidad[i].stringclase;
                    // creo el registro de comprobacion del submit de accion para el resultado
                    var submit_partial_output = {
                            clase : entidad[i].stringclase,
                            accion : action,
                            metodo : misubmitfunction,
                            existe : false,
                            error : 'No verificado'
                        };
                    // si el metodo de submit de accion esta en los metodos de la clase actualizo la propiedad existe
                    if (misubmitfunction in listametodos){
                        submit_partial_output.existe = true;
                        
                        // ACTIVAR VERIFICACIÓN: Ejecutar el método para comprobar que funciona
                        try {
                            var result = this.objetocomprobar[misubmitfunction]();
                            submit_partial_output.error = `Resultado: ${result}`;
                        } catch (error) {
                            submit_partial_output.error = `Error: ${error.message}`;
                        }
                    }
                    else{
                        submit_partial_output.existe = false;
                    }
                    // almaceno el registro de comprobacion del submit de accion en la salida
                    output[output_count] = submit_partial_output;
                    // actualizo el indice de la salida
                    output_count++;

                    // recorro todos los atributos para ver si tengo las validaciones para cada una de las acciones
                    for (let x=0;x<entidad[i].attributes.length;x++){

                        var atributo = entidad[i].attributes[x];
                        var mifunction = action+"_"+atributo+"_validation";
                        
                        var validation_output = {
                            clase: entidad[i].stringclase,
                            accion: action,
                            metodo: mifunction,
                            existe: false,
                            error: "No verificado"
                        };

                        // compruebo si existe el nombre del metodo esperado en la lista de metodos del objeto.
                        // si no es asi pongo el existe a false sino a true
                        if (mifunction in listametodos){
                            validation_output.existe = true;
                            
                            // ACTIVAR VERIFICACIÓN: Ejecutar el método para comprobar que funciona
                            try {
                                var result = this.objetocomprobar[mifunction]();
                                validation_output.error = `Resultado: ${result}`;
                            } catch (error) {
                                validation_output.error = `Error: ${error.message}`;
                            }
                        }
                        else{
                            validation_output.existe = false;
                        }

                        output[output_count] = validation_output;
                        output_count++;
                    }
                }

                // Verificar métodos createForm
                var actions_createForm = ['ADD','EDIT','DELETE','SEARCH','SHOWCURRENT'];

                for (var k=0;k<actions_createForm.length;k++){
                    // compruebo create_form

                    // creo el nombre del metodo de submit de accion
                    var micreateFormfunction = 'createForm_'+actions_createForm[k];
                    // creo el registro de comprobacion del submit de accion para el resultado
                    var createForm_output = {
                            clase : entidad[i].stringclase,
                            accion : 'FORM',
                            metodo : micreateFormfunction,
                            existe : false,
                            error : 'No verificado'
                        };
                    // si el metodo de submit de accion esta en los metodos de la clase actualizo la propiedad existe
                    if (micreateFormfunction in listametodos){
                        createForm_output.existe = true;
                        
                        // ACTIVAR VERIFICACIÓN: Ejecutar el método para comprobar que funciona
                        try {
                            var result = this.objetocomprobar[micreateFormfunction]();
                            createForm_output.error = `Resultado: ${result}`;
                        } catch (error) {
                            createForm_output.error = `Error: ${error.message}`;
                        }
                    }
                    else{
                        createForm_output.existe = false;
                    }
                    // almaceno el registro de comprobacion del submit de accion en la salida
                    output[output_count] = createForm_output;
                    // actualizo el indice de la salida
                    output_count++;
                }
            }
        }

        console.log(output);
        return output;
    }

    /**
     * Método para comprobar si un método funciona correctamente
     * @param {string} nombreMetodo - Nombre del método a comprobar
     * @return {string} Resultado de la verificación
     */
    comprobar_metodo_funciona(nombreMetodo){
        try {
            if (typeof this.objetocomprobar[nombreMetodo] === 'function') {
                var resultado = this.objetocomprobar[nombreMetodo]();
                return `Funciona: ${resultado}`;
            } else {
                return `No es función`;
            }
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
}