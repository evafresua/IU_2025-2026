class alumnograduacion extends Validations{

    constructor(esTest){
        super();
        this.dom = new dom();
        this.nombreentidad = 'alumnograduacion';

        if (esTest == 'test'){
            
        }
        else{
            this.dom.fillform(this.manual_form_creation(),'IU_form');
        }
    }   

    /**
     * replace the content of section element with a particular entity menu
     * @returns 
     */
    manual_form_creation(){
        var form_content = `
            <form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

            <label class="label_alumnograduacion_login">login</label>
            <input type='text' id='alumnograduacion_login' name='alumnograduacion_login' onblur=" return entidad.ADD_alumnograduacion_login_validation();"></input>
            <span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
            <br>

            <label class="label_alumnograduacion_password">Contraseña</label>
            <input type='text' id='alumnograduacion_password' name='alumnograduacion_password' onblur=" return entidad.ADD_alumnograduacion_password_validation();"></input>
            <span id="span_error_alumnograduacion_password"><a id="error_alumnograduacion_password"></a></span>
            <br>

            <label class="label_alumnograduacion_nombre">Nombre</label>
            <input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' onblur=" return entidad.ADD_alumnograduacion_nombre_validation();"></input>
            <span id="span_error_alumnograduacion_nombre"><a id="error_alumnograduacion_nombre"></a></span>
            <br>

            <label class="label_alumnograduacion_apellidos">Apellidos</label>
            <input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos' onblur=" return entidad.ADD_alumnograduacion_apellidos_validation();"></input>
            <span id="span_error_alumnograduacion_apellidos"><a id="error_alumnograduacion_apellidos"></a></span>
            <br>

            <label class="labelalumnograduacion_titulacion">Titulacion</label>
            <input type='text' id='alumnograduacion_titulacion' name='alumnograduacion_titulacion' onblur=" return entidad.ADD_alumnograduacion_titulacion_validation();"></input>
            <span id="span_error_alumnograduacion_titulacion"><a id="error_alumnograduacion_titulacion"></a></span>
            <br>

            <label class="label_alumnograduacion_dni">Dni</label>
            <input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni' onblur=" return entidad.ADD_alumnograduacion_dni_validation();""></input>
            <span id="span_error_alumnograduacion_dni"><a id="error_alumnograduacion_dni"></a></span>
            <br>
            
            <label class="label_alumnograduacion_telefono">Telefono</label>
            <input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono' onblur=" return entidad.ADD_alumnograduacion_telefono_validation();"></input>
            <span id="span_error_alumnograduacion_telefono"><a id="error_alumnograduacion_telefono"></a></span>
            <br>

            <label class="label_alumnograduacion_direccion">Direccion</label>
            <input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion' onblur=" return entidad.ADD_alumnograduacion_direccion_validation();"></input>
            <span id="span_error_alumnograduacion_direccion"><a id="error_alumnograduacion_direccion"></a></span>
            <br>

            <label class="label_alumnograduacion_email">Email</label>
            <input type='text' id='alumnograduacion_email' name='alumnograduacion_email' onblur=" return entidad.ADD_alumnograduacion_email_validation();"></input>
            <span id="span_error_alumnograduacion_email"><a id="error_alumnograduacion_email"></a></span>
            <br>

            <label id="label_alumnograduacion_fotoacto" class="label_foto_persona">Foto Persona</label>
            <input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
            <span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
            <a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
            
            <label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_alumnograduacion_fotoacto">Nueva Foto Persona</label>
            <input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
            <span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>
            <br>

            <input id="submit_button" type="submit" value="Submit">

        </form>
        `;
        return form_content;
        
    }

    /**********************************************************************************************
        fields validations for ADD
    ***********************************************************************************************/

    /** 
        
        @param 
        @return
            {string} Error code of field value (fieldname_validationfunction_KO) 
            or
            {bool} true due the field value is correct

    */
    ADD_alumnograduacion_login_validation(){
        if(!(this.max_size('alumnograduacion_login', 14))){
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
            return "alumnograduacion_login_max_size_KO";
        }
        if(!(this.min_size('alumnograduacion_login', 4))){
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
            return "alumnograduacion_login_min_size_KO";
        }
        // Validar que no haya tildes antes de validar el formato
/*         if (/[áéíóúÁÉÍÓÚñÑ]/.test(document.getElementById('alumnograduacion_login').value)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_accented_KO');
            return "alumnograduacion_login_accented_KO";
        } */
        if(!(this.format('alumnograduacion_login', '^[a-zA-Z]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return "alumnograduacion_login_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    ADD_alumnograduacion_password_validation(){
        if(!(this.min_size('alumnograduacion_password', 8))){
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
            return "alumnograduacion_password_min_size_KO";
        }
        if(!(this.max_size('alumnograduacion_password', 100))){
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
            return "alumnograduacion_password_max_size_KO";
        }
        if(!(this.format('alumnograduacion_password', '^[a-zA-Z ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return "alumnograduacion_password_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    ADD_alumnograduacion_nombre_validation(){
        if (!(this.min_size('alumnograduacion_nombre',2))){
            this.dom.mostrar_error_campo('alumnograduacion_nombre','alumnograduacion_nombre_min_size_KO');
            return "alumnograduacion_nombre_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_nombre',15))){
            this.dom.mostrar_error_campo('alumnograduacion_nombre','alumnograduacion_nombre_max_size_KO');
            return "alumnograduacion_nombre_max_size_KO";
        }
        // allowed format aA to zZ letter
        if (!(this.format('alumnograduacion_nombre', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_nombre','alumnograduacion_nombre_format_KO');
            return "alumnograduacion_nombre_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }


    ADD_alumnograduacion_apellidos_validation(){
        if (!(this.min_size('alumnograduacion_apellidos',2))){
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_min_size_KO');
            return "alumnograduacion_apellidos_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_apellidos',35))){
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_max_size_KO');
            return "alumnograduacion_apellidos_max_size_KO";
        }
        
        var value = document.getElementById('alumnograduacion_apellidos').value;
        
        // Check for numbers
        if (/[0-9]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_format_KO');
            return "alumnograduacion_apellidos_format_KO";
        }
        
        // Check for symbols (excluding allowed characters: letters, spaces, accents)
        if (/[^A-Za-záéíóúÁÉÍÓÚñÑ ]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_symbols_KO');
            return "alumnograduacion_apellidos_symbols_KO";
        }
        
        // Check for hyphens specifically
        if (/-/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_hyphens_KO');
            return "alumnograduacion_apellidos_hyphens_KO";
        }
        
        // Final format validation - only letters (with accents) and spaces
        if (!(this.format('alumnograduacion_apellidos', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_format_KO');
            return "alumnograduacion_apellidos_format_KO";
        }
        
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }


    ADD_alumnograduacion_titulacion_validation(){
        if (!(this.min_size('alumnograduacion_titulacion',1))){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion','alumnograduacion_titulacion_min_size_KO');
            return "alumnograduacion_titulacion_min_size_KO";
        }
        const valor=document.getElementById('alumnograduacion_titulacion').value;
        const valoresPermitidos=['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        if(!valoresPermitidos.includes(valor)){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return "alumnograduacion_titulacion_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;
    }

    ADD_alumnograduacion_dni_validation(){
    
        if(!(this.min_size('alumnograduacion_dni',9))){
            this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_dni_min_size_KO');
            return "alumnograduacion_dni_min_size_KO";
        }
        if(!(this.max_size('alumnograduacion_dni',9))){
            this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_dni_max_size_KO');
            return "alumnograduacion_dni_max_size_KO";
        }
        
        var value = document.getElementById('alumnograduacion_dni').value;
        
        // Check for spaces in DNI/NIE
        if (/\s/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_dni_spaces_KO');
            return "alumnograduacion_dni_spaces_KO";
        }
        
        // Check if it's only numbers (no letter at the end)
        if (/^[0-9]+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_dni_no_letter_KO');
            return "alumnograduacion_dni_no_letter_KO";
        }
        
        // Check if it's a NIE format but incomplete (missing letter at the end)
        if (/^[XYZ][0-9]{7}$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_nie_format_KO');
            return "alumnograduacion_nie_format_KO";
        }
        
        // Validate DNI format and letter calculation
        if (/^[0-9]{8}[A-Z]$/.test(value)) {
            if (!this.personalize_validate_dni(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_validate_KO');
                return "dni_validate_KO";
            }
        }
        // Validate NIE format and letter calculation
        else if (/^[XYZ][0-9]{7}[A-Z]$/.test(value)) {
            if (!this.personalize_validate_nie(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'nie_validate_KO');
                return "nie_validate_KO";
            }
        }
        // Invalid format
        else {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_nie_format_KO');
            return "dni_nie_format_KO";
        }
        
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }
    
    ADD_alumnograduacion_telefono_validation(){
        if (!(this.min_size('alumnograduacion_telefono', 9))){
            this.dom.mostrar_error_campo('alumnograduacion_telefono','alumnograduacion_telefono_min_size_KO');
            return "alumnograduacion_telefono_min_size_KO";
        }
        if (!(this.max_size('alumnograduacion_telefono', 9))){
            this.dom.mostrar_error_campo('alumnograduacion_telefono','alumnograduacion_telefono_max_size_KO');
            return "alumnograduacion_telefono_max_size_KO";
        }
        if (!(this.format('alumnograduacion_telefono', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_telefono','alumnograduacion_telefono_format_KO');
            return "alumnograduacion_telefono_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }
    
    ADD_alumnograduacion_direccion_validation(){
        if (!(this.min_size('alumnograduacion_direccion',1))){
            this.dom.mostrar_error_campo('alumnograduacion_direccion','alumnograduacion_direccion_min_size_KO');
            return "alumnograduacion_direccion_min_size_KO";
        }
        if (!(this.format('alumnograduacion_direccion', '^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_direccion','alumnograduacion_direccion_format_KO');
            return "alumnograduacion_direccion_format_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    ADD_alumnograduacion_email_validation() {
        if (!(this.min_size('alumnograduacion_email', 1))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO');
            return "alumnograduacion_email_min_size_KO";
        }
        
        var value = document.getElementById('alumnograduacion_email').value;
        
        // Check if email has no @ symbol
        if (!/@/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_no_at_KO');
            return "alumnograduacion_email_no_at_KO";
        }
        
        // Check if email has multiple @ symbols
        if ((value.match(/@/g) || []).length > 1) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_multiple_at_KO');
            return "alumnograduacion_email_multiple_at_KO";
        }
        
        // Check if there's no domain after @
        if (/@$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_no_domain_KO');
            return "alumnograduacion_email_no_domain_KO";
        }
        
        if (!(this.format('alumnograduacion_email', '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return "alumnograduacion_email_format_KO";
        }

        if (!(this.max_size('alumnograduacion_email', 320))) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
            return "alumnograduacion_email_max_size_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }
    /**
        
        @param 
        @return
            {string} Error code of field value (fieldname_validationfunction_KO) 
            or
            {bool} true due the field value is correct

    */

    ADD_nuevo_alumnograduacion_fotoacto_validation() {
    if(!(this.not_exist_file('nuevo_alumnograduacion_fotoacto'))){
        this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_fotoacto_fichero_not_exist_ko');
        return "nuevo_fotoacto_fichero_not_exist_ko";
    }
    
    /*if (!(this.min_size('nuevo_alumnograduacion_fotoacto', 7))) {
        this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_min_size_KO');
        return "nuevo_alumnograduacion_fotoacto_min_size_KO";
    }*/
    if (!(this.max_size_file('nuevo_alumnograduacion_fotoacto', 2000))) {
        this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_fotoacto_fichero_size_ko');
        return "nuevo_fotoacto_fichero_size_ko";
    }
    if (!(this.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z0-9._/-]+$'))) {
        this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_fotoacto_formato_fichero_ko');
        return "nuevo_fotoacto_formato_fichero_ko";
    }
     if (!(this.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
        this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_fotoacto_format_ko');
        return "nuevo_fotoacto_format_ko";
    }
    
    this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
    return true;
}

EDIT_nuevo_alumnograduacion_fotoacto_validation() {
    return this.ADD_nuevo_alumnograduacion_fotoacto_validation();
}

SEARCH_alumnograduacion_fotoacto_validation() {
    if (document.getElementById('alumnograduacion_fotoacto').value !== '') {
        if (!(this.max_size('alumnograduacion_fotoacto', 40))) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_max_size_KO');
            return "alumnograduacion_fotoacto_max_size_KO";
        }
        if (!(this.format('alumnograduacion_fotoacto', '^[a-zA-Z0-9._/-]+$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO');
            return "alumnograduacion_fotoacto_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
    return true;
}


    ADD_alumnograduacion_nuevo_fotoacto_validation() {
        if (!(this.not_exist_file('alumnograduacion_nuevo_fotoacto'))) {
            this.dom.mostrar_error_campo('alumnograduacion_nuevo_fotoacto', 'alumnograduacion_nuevo_fotoacto_empty_file_KO');
            return "alumnograduacion_nuevo_fotoacto_not_exist_file_KO";
        }
        if (!(this.max_size_file('alumnograduacion_nuevo_fotoacto', 2000000))) { // 2MB
            this.dom.mostrar_error_campo('alumnograduacion_nuevo_fotoacto', 'alumnograduacion_nuevo_fotoacto_max_size_file_KO');
            return "alumnograduacion_nuevo_fotoacto_max_size_file_KO";
        }
        if (!(this.type_file('alumnograduacion_nuevo_fotoacto', ['image/jpeg']))) {
            this.dom.mostrar_error_campo('alumnograduacion_nuevo_fotoacto', 'alumnograduacion_nuevo_fotoacto_type_file_KO');
            return "alumnograduacion_nuevo_fotoacto_type_file_KO";
        }
        if (!(this.format_name_file('alumnograduacion_nuevo_fotoacto', '^[a-zA-Z0-9._-]+$'))) {
            this.dom.mostrar_error_campo('alumnograduacion_nuevo_fotoacto', 'alumnograduacion_nuevo_fotoacto_format_name_file_KO');
            return "alumnograduacion_nuevo_fotoacto_format_name_file_KO";
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nuevo_fotoacto');
        return true;
    }

    /**
        
        @param 
        @return
            {bool} true if all field validations are correct or false if any field validation is false

    */
ADD_submit_alumnograduacion(){
    let result = (this.ADD_alumnograduacion_login_validation() & 
                  this.ADD_alumnograduacion_password_validation() & 
                  this.ADD_alumnograduacion_nombre_validation() & 
                  this.ADD_alumnograduacion_apellidos_validation() & 
                  this.ADD_alumnograduacion_titulacion_validation() & 
                  this.ADD_alumnograduacion_telefono_validation() & 
                  this.ADD_alumnograduacion_dni_validation() & 
                  this.ADD_alumnograduacion_direccion_validation() & 
                  this.ADD_alumnograduacion_email_validation() & // Faltaban paréntesis aquí
                  this.ADD_alumnograduacion_fotoacto_validation() & // Agregar esta validación
                  this.ADD_alumnograduacion_nuevo_fotoacto_validation())
    result = Boolean(result);
    return result;
}

    EDIT_alumnograduacion_login_validation(){
        return this.ADD_alumnograduacion_login_validation();
    }

    EDIT_alumnograduacion_password_validation(){
        return this.ADD_alumnograduacion_password_validation();
    }

    EDIT_alumnograduacion_nombre_validation(){
        return this.ADD_alumnograduacion_nombre_validation();
    }

    EDIT_alumnograduacion_apellidos_validation(){
        return this.ADD_alumnograduacion_apellidos_validation();
    }

    EDIT_alumnograduacion_titulacion_validation(){
        return this.ADD_alumnograduacion_titulacion_validation();
    }

    EDIT_alumnograduacion_dni_validation(){
        return this.ADD_alumnograduacion_dni_validation();
    }

    EDIT_alumnograduacion_telefono_validation(){
        return this.ADD_alumnograduacion_telefono_validation();
    }

    EDIT_alumnograduacion_direccion_validation(){
        return this.ADD_alumnograduacion_direccion_validation();
    }

    EDIT_alumnograduacion_email_validation(){
        return this.ADD_alumnograduacion_email_validation();
    }

    EDIT_alumnograduacion_nuevo_fotoacto_validation(){
        return this.ADD_alumnograduacion_nuevo_fotoacto_validation();
    }

EDIT_submit_alumnograduacion(){
    let result = (this.EDIT_alumnograduacion_login_validation() & 
                  this.EDIT_alumnograduacion_password_validation() & 
                  this.EDIT_alumnograduacion_nombre_validation() & 
                  this.EDIT_alumnograduacion_apellidos_validation() & 
                  this.EDIT_alumnograduacion_titulacion_validation() & 
                  this.EDIT_alumnograduacion_telefono_validation() & 
                  this.EDIT_alumnograduacion_dni_validation() & 
                  this.EDIT_alumnograduacion_direccion_validation() & 
                  this.EDIT_alumnograduacion_email_validation() & // Faltaban paréntesis aquí
                  this.EDIT_alumnograduacion_fotoacto_validation() & // Agregar esta validación
                  this.EDIT_alumnograduacion_nuevo_fotoacto_validation())
    result = Boolean(result);
    return result;
}

    SEARCH_alumnograduacion_login_validation(){
    // Para búsqueda, las validaciones pueden ser más flexibles
    if(document.getElementById('alumnograduacion_login').value !== ''){
        if(!(this.max_size('alumnograduacion_login', 14))){
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
            return "alumnograduacion_login_max_size_KO";
        }
        if(!(this.format('alumnograduacion_login', '^[a-zA-Z]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return "alumnograduacion_login_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_login');
    return true;
}

SEARCH_alumnograduacion_password_validation(){
    if(document.getElementById('alumnograduacion_password').value !== ''){
        if(!(this.max_size('alumnograduacion_password', 100))){ // CORREGIDO: cambiado de max_size a max_size
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
            return "alumnograduacion_password_max_size_KO";
        }
    }
    if(!(this.format('alumnograduacion_password', '^[a-zA-Z ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return "alumnograduacion_password_format_KO";
        }
    this.dom.mostrar_exito_campo('alumnograduacion_password');
    return true;
}

SEARCH_alumnograduacion_nombre_validation(){
    if(document.getElementById('alumnograduacion_nombre').value !== ''){
        if (!(this.max_size('alumnograduacion_nombre',15))){
            this.dom.mostrar_error_campo('alumnograduacion_nombre','alumnograduacion_nombre_max_size_KO');
            return "alumnograduacion_nombre_max_size_KO";
        }
        if (!(this.format('alumnograduacion_nombre', '^[A-Za-záéíóúÁÉÍÓÚñÑ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_nombre','alumnograduacion_nombre_format_KO');
            return "alumnograduacion_nombre_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_nombre');
    return true;
}

SEARCH_alumnograduacion_apellidos_validation(){
    if(document.getElementById('alumnograduacion_apellidos').value !== ''){
        if (!(this.max_size('alumnograduacion_apellidos',35))){
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_max_size_KO');
            return "alumnograduacion_apellidos_max_size_KO";
        }
        if (!(this.format('alumnograduacion_apellidos', '^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_apellidos','alumnograduacion_apellidos_format_KO');
            return "alumnograduacion_apellidos_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
    return true;
}

SEARCH_alumnograduacion_titulacion_validation(){
    if(document.getElementById('alumnograduacion_titulacion').value !== ''){
        const valor=document.getElementById('alumnograduacion_titulacion').value;
        const valoresPermitidos=['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        if(!valoresPermitidos.includes(valor)){
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return "alumnograduacion_titulacion_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
    return true;
}

SEARCH_alumnograduacion_dni_validation(){
    if(document.getElementById('alumnograduacion_dni').value !== ''){
        if (!(this.max_size('alumnograduacion_dni',9))){
            this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_dni_max_size_KO');
            return "alumnograduacion_dni_max_size_KO";
        }
        // Para búsqueda, solo validar formato básico, no cálculo de letra
        // if (!(this.format('alumnograduacion_dni', '^([0-9]{8}[A-Z]|[XYZ][0-9]{7}[A-Z])$'))){
        //     this.dom.mostrar_error_campo('alumnograduacion_dni','alumnograduacion_dni_format_KO');
        //     return "alumnograduacion_dni_format_KO";
        // }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_dni');
    return true;
}

SEARCH_alumnograduacion_telefono_validation(){
    if(document.getElementById('alumnograduacion_telefono').value !== ''){
        if (!(this.max_size('alumnograduacion_telefono', 9))){
            this.dom.mostrar_error_campo('alumnograduacion_telefono','alumnograduacion_telefono_max_size_KO');
            return "alumnograduacion_telefono_max_size_KO";
        }
        if (!(this.format('alumnograduacion_telefono', '^[0-9]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_telefono','alumnograduacion_telefono_format_KO');
            return "alumnograduacion_telefono_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_telefono');
    return true;
}

SEARCH_alumnograduacion_direccion_validation(){
    if(document.getElementById('alumnograduacion_direccion').value !== ''){
        if (!(this.format('alumnograduacion_direccion', '^[A-Za-záéíóúÁÉÍÓÚñÑ0-9 ]*$'))){
            this.dom.mostrar_error_campo('alumnograduacion_direccion','alumnograduacion_direccion_format_KO');
            return "alumnograduacion_direccion_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_direccion');
    return true;
}

SEARCH_alumnograduacion_email_validation(){
    if(document.getElementById('alumnograduacion_email').value !== ''){
        if (!(this.format('alumnograduacion_email', '^[^@]+@[^@]+\.[a-zA-Z]{2,}$'))){
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return "alumnograduacion_email_format_KO";
        }
    }
    this.dom.mostrar_exito_campo('alumnograduacion_email');
    return true;
}

SEARCH_submit_alumnograduacion(){
    let result = (this.SEARCH_alumnograduacion_login_validation() & 
                  this.SEARCH_alumnograduacion_password_validation() & 
                  this.SEARCH_alumnograduacion_nombre_validation() & 
                  this.SEARCH_alumnograduacion_apellidos_validation() & 
                  this.SEARCH_alumnograduacion_titulacion_validation() & 
                  this.SEARCH_alumnograduacion_telefono_validation() & 
                  this.SEARCH_alumnograduacion_dni_validation() & 
                  this.SEARCH_alumnograduacion_direccion_validation() & 
                  this.SEARCH_alumnograduacion_email_validation())
    result = Boolean(result);
    return result;
}

SEARCH_submit_alumnograduacion(){
    let result = (this.SEARCH_alumnograduacion_login_validation() & 
                  this.SEARCH_alumnograduacion_password_validation() & 
                  this.SEARCH_alumnograduacion_nombre_validation() & 
                  this.SEARCH_alumnograduacion_apellidos_validation() & 
                  this.SEARCH_alumnograduacion_titulacion_validation() & 
                  this.SEARCH_alumnograduacion_telefono_validation() & 
                  this.SEARCH_alumnograduacion_dni_validation() & 
                  this.SEARCH_alumnograduacion_direccion_validation() & 
                  this.SEARCH_alumnograduacion_email_validation() & 
                  this.SEARCH_alumnograduacion_fotoacto_validation()) // Agregar esta validación
    result = Boolean(result);
    return result;
}

    /**
     * 
     * test dni format in the regular expression
     * @param {string} 
     * @return {bool} true is regular expression is satified false otherwise  
     * */ 

    personalize_dni_nie(){
    // Buscar el elemento en el contexto correcto
    var dniElement = document.getElementById('alumnograduacion_dni');
    if (!dniElement) {
        // Si no se encuentra en el DOM global, buscar dentro del formulario de test
        var formElement = document.getElementById('form');
        if (formElement) {
            dniElement = formElement.querySelector('#alumnograduacion_dni');
        }
    }
    
    if (!dniElement) {
        return "ELEMENT_NOT_FOUND";
    }
    
    var dni = dniElement.value;
    if (this.personalize_dni_format() == true){
        if (!(this.personalize_validate_dni(dni))){
            return "dni_validate_KO";
        }
    }
    else{
        if (this.personalize_nie_format() === true){
                if (!(this.personalize_validate_nie(dni))){
                    return "nie_validate_KO";
                }
        }
        else{
            return "dni_nie_format_KO";
        }
    }

    return true;
}

personalize_dni_format(){
    // Buscar el elemento en el contexto correcto
    var dniElement = document.getElementById('alumnograduacion_dni');
    if (!dniElement) {
        var formElement = document.getElementById('form');
        if (formElement) {
            dniElement = formElement.querySelector('#alumnograduacion_dni');
        }
    }
    
    if (!dniElement) {
        return false;
    }
    
    var dniValue = dniElement.value;
    var dniRegex = /^[0-9]{8}[A-Z]$/;
    if (!dniRegex.test(dniValue)){
        this.dom.mostrar_error_campo('alumnograduacion_dni','dni_format_KO');
        return false;
    }
    return true;
}

personalize_nie_format(){
    // Buscar el elemento en el contexto correcto
    var dniElement = document.getElementById('alumnograduacion_dni');
    if (!dniElement) {
        var formElement = document.getElementById('form');
        if (formElement) {
            dniElement = formElement.querySelector('#alumnograduacion_dni');
        }
    }
    
    if (!dniElement) {
        return false;
    }
    
    var dniValue = dniElement.value;
    var nieRegex = /^[XYZ][0-9]{7}[A-Z]$/;
    if (!nieRegex.test(dniValue)){
        this.dom.mostrar_error_campo('alumnograduacion_dni','nie_format_KO');
        return false;
    }
    return true;
}
    personalize_validate_dni(dni){
        
        //var dni = document.getElementById('dni').value;
        var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
        
        return letter == dni.charAt(8);
    }

    /**
     * get nie as parameter, split firts letter, calculate
     * the formatber from this letter and create dni for validating in 
     * personalizate method
     * 
     * @param nie value
     * @returns true if nie is valid false otherwise
     */
    personalize_validate_nie(nie){
        
        //var nie = document.getElementById('dni').value;
        // Change the initial letter for the corresponding formatber and validate as DNI
        var nie_prefix = nie.charAt( 0 );

        switch (nie_prefix) {
        case 'X': nie_prefix = 0; break;
        case 'Y': nie_prefix = 1; break;
        case 'Z': nie_prefix = 2; break;
        }

        return this.personalize_validate_dni( nie_prefix + nie.substr(1) );
    
    }



}

