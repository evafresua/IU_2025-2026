class alumnograduacion extends EntidadAbstracta{

	constructor(esTest){
		// initialize base entity behavior (dom, validations, access_functions, etc.)
		super(esTest);
		// set entity name to alumnograduacion so validations/live UI use correct entity id
		this.nombreentidad = 'alumnograduacion';

		// personalize wrappers moved into the class (previously in alumnograduacion_personalize_wrappers.js)
		// These add methods like personalize_alumnograduacion_<field>_ADD/EDIT/SEARCH delegating
		// to existing ADD_/EDIT_/SEARCH_ validation functions when available.
		var _fields = ['login','password','nombre','apellidos','titulacion','dni','telefono','email','direccion','fotoacto'];
		for (var _i = 0; _i < _fields.length; _i++){
			(function(suffix, self){
				var field = 'alumnograduacion_' + suffix;

				// ADD
				self['personalize_' + field + '_ADD'] = function(){
					var cand1 = 'ADD_' + field + '_validation';
					if (typeof self[cand1] === 'function') return self[cand1]();

					var alt1 = 'ADD_' + suffix + '_validation';
					if (typeof self[alt1] === 'function') return self[alt1]();
					var alt2 = 'ADD_' + suffix + '_persona_validation';
					if (typeof self[alt2] === 'function') return self[alt2]();

					var altMap = {
						'nombre': 'nombre_persona',
						'apellidos': 'apellidos_persona',
						'email': 'email_persona',
						'direccion': 'direccion_persona',
						'telefono': 'telefono_persona',
						'dni': 'dni'
					};
					if (altMap[suffix]){
						var alt3 = 'ADD_' + altMap[suffix] + '_validation';
						if (typeof self[alt3] === 'function') return self[alt3]();
					}

					if (suffix === 'fotoacto'){
						if (typeof self['ADD_nuevo_foto_persona_validation'] === 'function') return self['ADD_nuevo_foto_persona_validation']();
						if (typeof self['ADD_foto_persona_validation'] === 'function') return self['ADD_foto_persona_validation']();
					}

					return true;
				};

				// EDIT
				self['personalize_' + field + '_EDIT'] = function(){
					var cand1 = 'EDIT_' + field + '_validation';
					if (typeof self[cand1] === 'function') return self[cand1]();

					var alt1 = 'EDIT_' + suffix + '_validation';
					if (typeof self[alt1] === 'function') return self[alt1]();
					var alt2 = 'EDIT_' + suffix + '_persona_validation';
					if (typeof self[alt2] === 'function') return self[alt2]();

					var altMap = {
						'nombre': 'nombre_persona',
						'apellidos': 'apellidos_persona',
						'email': 'email_persona',
						'direccion': 'direccion_persona',
						'telefono': 'telefono_persona',
						'dni': 'dni'
					};
					if (altMap[suffix]){
						var alt3 = 'EDIT_' + altMap[suffix] + '_validation';
						if (typeof self[alt3] === 'function') return self[alt3]();
					}

					if (suffix === 'fotoacto'){
						if (typeof self['EDIT_nuevo_foto_persona_validation'] === 'function') return self['EDIT_nuevo_foto_persona_validation']();
						if (typeof self['EDIT_foto_persona_validation'] === 'function') return self['EDIT_foto_persona_validation']();
					}

					return true;
				};

				// SEARCH
				self['personalize_' + field + '_SEARCH'] = function(){
					var cand1 = 'SEARCH_' + field + '_validation';
					if (typeof self[cand1] === 'function') return self[cand1]();

					var alt1 = 'SEARCH_' + suffix + '_validation';
					if (typeof self[alt1] === 'function') return self[alt1]();
					var alt2 = 'SEARCH_' + suffix + '_persona_validation';
					if (typeof self[alt2] === 'function') return self[alt2]();

					var altMap = {
						'nombre': 'nombre_persona',
						'apellidos': 'apellidos_persona',
						'email': 'email_persona',
						'direccion': 'direccion_persona',
						'telefono': 'telefono_persona',
						'dni': 'dni'
					};
					if (altMap[suffix]){
						var alt3 = 'SEARCH_' + altMap[suffix] + '_validation';
						if (typeof self[alt3] === 'function') return self[alt3]();
					}

					return true;
				};

			})(_fields[_i], this);
		}
	}

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
		var form_content = `
			<form id='form_iu' action='' method='POST' enctype='multipart/form-data' class='formulario'>

			<label class="label_dni">dni</label>
			<input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>
			
			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona' onblur=" return entidad.ADD_nombre_persona_validation();"></input>
			<span id="span_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
			<br>
			
			<label class="label_apellidos_persona">apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
			<span id="span_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
			<br>
			
			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='date' id='fechaNacimiento_persona' name='fechaNacimiento_persona' onblur="return entidad.ADD_fechanacimiento_persona_validation();"></input>
			<span id="span_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
			
			<br>
			<label class="label_direccion_persona">Dirección Postal</label>
			<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
			<span id="span_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona'></input>
			<span id="span_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
			
			<br>
			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona'></input>
			<span id="span_error_email_persona" ><a id="error_email_persona"></a></span>

			<br>
			<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='foto_persona' name='foto_persona'></input>
			<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
			<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
			<br>

		</form>
		`;
		return form_content;
		
	}



	/**
	 * createForm_ADD: prepare the form for ADD action (used by the UI ADD button)
	 */
	createForm_ADD(){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_ADD');

		// poner onsubmit a la comprobacion de ADD de esta entidad
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.ADD_submit_'+this.nombreentidad+'()');

		// poner action a ejecucion JS de ADD (usa peticionBackGeneral)
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// ocultar el campo foto_persona (solo se sube fichero)
		this.dom.hide_element_form('foto_persona');
		this.dom.hide_element('link_foto_persona');

		// colocar validaciones y boton
		this.dom.colocarvalidaciones('form_iu','ADD');
		this.dom.colocarboton('ADD');

		// set max on fechaNacimiento_persona to today to avoid future dates
		try{
			var elFecha = document.getElementById('fechaNacimiento_persona');
			if (elFecha){ elFecha.max = new Date().toISOString().split('T')[0]; }
		}catch(e){}

		setLang();
	}

	createForm_EDIT(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_EDIT');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// file-field UI: show text readonly and file input to allow replacement
		this.dom.hide_element_form('foto_persona');
		this.dom.hide_element('link_foto_persona');

		// colocar validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// set min/max on fecha input
		try{
			var elFecha = document.getElementById('fechaNacimiento_persona');
			if (elFecha){ elFecha.max = new Date().toISOString().split('T')[0]; elFecha.min = '1900-01-01'; }
		}catch(e){}

		// colocar boton
		this.dom.colocarboton('EDIT');

		setLang();
	}

	createForm_SEARCH(){

		// mostrar y preparar formulario para SEARCH
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SEARCH');

		// onsubmit -> SEARCH_submit_* and action -> entidad.SEARCH()
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad+'();');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// En SEARCH ocultar el input de fichero nuevo y dejar el campo texto para buscar
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.hide_element('link_foto_persona');

		// colocar validaciones y boton de SEARCH
		this.dom.colocarvalidaciones('form_iu','SEARCH');
		this.dom.colocarboton('SEARCH');

		setLang();
	}

	createForm_DELETE(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_DELETE');

		// poner onsubmit y action para DELETE (convencion ET2)
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.DELETE_submit_'+this.nombreentidad+'();');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// ocultar el campo nuevo fichero y mostrar link a fichero existente si aplica
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+(fila.foto_persona||''));

		// formatear fecha para mostrar
		fila.fechaNacimiento_persona = this.mostrarcambioatributo('fechaNacimiento_persona', fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang();
	}

	createForm_SHOWCURRENT(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos
		this.dom.colocartodosreadonly('form_iu');

		// hide file input and set link to existing file
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+(fila.foto_persona||''));

		setLang();
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
	ADD_dni_validation(){
		
		if (!(this.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_KO');
			return "dni_min_size_KO";
		}
		if (!(this.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_KO');
			return "dni_max_size_KO";
		}
				
		var resp = this.personalize_dni_nie();
		console.log(resp);
		if (!(resp === true)){
			this.dom.mostrar_error_campo('dni',resp);
			return resp;
		}
		
		this.dom.mostrar_exito_campo('dni');
		return true;

	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/

	ADD_nombre_persona_validation(){
		
		if (!(this.min_size('nombre_persona',4))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_min_size_KO');
			return "nombre_persona_min_size_KO";
		}
		if (!(this.max_size('nombre_persona',15))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_max_size_KO');
			return "nombre_persona_max_size_KO";
		}
		// allowed format aA to zZ letter
		if (!(this.format('nombre_persona', '^[A-Za-z]*$'))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_format_KO');
			return "nombre_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	ADD_nuevo_foto_persona_validation(){

		if (!(this.not_exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_empty_file_KO');
			return "nuevo_foto_persona_not_exist_file_KO";

		}
		if (!(this.max_size_file('nuevo_foto_persona',2000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_KO');
			return "nuevo_foto_persona_max_size_file_KO";
		}
		if (!(this.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_KO');
			return "nuevo_foto_persona_type_file_KO";
		}
		if (!(this.format_name_file('nuevo_foto_persona','[a-zA-Z.]'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_KO');
			return "nuevo_foto_persona_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	ADD_apellidos_persona_validation(){
		
		if (!(this.min_size('apellidos_persona',4))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_min_size_KO');
			return "apellidos_persona_min_size_KO";
		}
		if (!(this.max_size('apellidos_persona',30))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_max_size_KO');
			return "apellidos_persona_max_size_KO";
		}
		// allowed format aA to zZ letter and spaces
		if (!(this.format('apellidos_persona', '^[A-Za-z ]*$'))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_format_KO');
			return "apellidos_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	ADD_fechanacimiento_persona_validation(){
		var el = document.getElementById('fechaNacimiento_persona');
		var v = el ? el.value : '';
		if (v === ''){ this.dom.mostrar_exito_campo('fechaNacimiento_persona'); return true; }
		// Accept ISO date (YYYY-MM-DD) or DD/MM/YYYY or DD-MM-YYYY
		var iso = /^\d{4}-\d{2}-\d{2}$/;
		var dmy = /^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/;
		var year, month, day;
		if (iso.test(v)){
			var parts = v.split('-');
			year = parseInt(parts[0],10); month = parseInt(parts[1],10); day = parseInt(parts[2],10);
		} else if (dmy.test(v)){
			var parts = v.split(/[\/\-]/);
			day = parseInt(parts[0],10); month = parseInt(parts[1],10); year = parseInt(parts[2],10);
		} else {
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		var dt = new Date(year, month-1, day);
		if (dt.getFullYear() !== year || dt.getMonth() !== month-1 || dt.getDate() !== day){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_valid_KO');
			return 'fechaNacimiento_persona_valid_KO';
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	ADD_direccion_persona_validation(){
		
		if (!(this.min_size('direccion_persona',10))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_min_size_KO');
			return "direccion_persona_min_size_KO";
		}
		if (!(this.max_size('direccion_persona',100))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_max_size_KO');
			return "direccion_persona_max_size_KO";
		}
		// allowed format letters, numbers, spaces, commas and dots
		if (!(this.format('direccion_persona', '^[A-Za-z0-9 ,.]*$'))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_format_KO');
			return "direccion_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	ADD_telefono_persona_validation(){
		
		if (!(this.min_size('telefono_persona',9))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_min_size_KO');
			return "telefono_persona_min_size_KO";
		}
		if (!(this.max_size('telefono_persona',15))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_max_size_KO');
			return "telefono_persona_max_size_KO";
		}
		// Phone format (optional + followed by digits)
		if (!(this.format('telefono_persona', '^(\\+?[0-9])+$'))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_format_KO');
			return "telefono_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	ADD_email_persona_validation(){
		
		if (!(this.min_size('email_persona',5))){
			this.dom.mostrar_error_campo('email_persona','email_persona_min_size_KO');
			return "email_persona_min_size_KO";
		}
		if (!(this.max_size('email_persona',50))){
			this.dom.mostrar_error_campo('email_persona','email_persona_max_size_KO');
			return "email_persona_max_size_KO";
		}
		// Email format
		if (!(this.format('email_persona', '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))){
			this.dom.mostrar_error_campo('email_persona','email_persona_format_KO');
			return "email_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	ADD_foto_persona_validation(){
		
		if (!(this.min_size('foto_persona',1))){
			this.dom.mostrar_error_campo('foto_persona','foto_persona_min_size_KO');
			return "foto_persona_min_size_KO";
		}
		if (!(this.max_size('foto_persona',255))){
			this.dom.mostrar_error_campo('foto_persona','foto_persona_max_size_KO');
			return "foto_persona_max_size_KO";
		}
		// URL or filename format
		if (!(this.format('foto_persona', '^[a-zA-Z0-9._/-]+\\.(jpg|jpeg|png|gif)$'))){
			this.dom.mostrar_error_campo('foto_persona','foto_persona_format_KO');
			return "foto_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('foto_persona');
		return true;
	}

	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	ADD_submit_persona(){

		let result = (
					(this.ADD_dni_validation()) &
					(this.ADD_nombre_persona_validation()) &
					(this.ADD_apellidos_persona_validation()) &
					(this.ADD_fechanacimiento_persona_validation()) &
					(this.ADD_direccion_persona_validation()) &
					(this.ADD_telefono_persona_validation()) &
					(this.ADD_email_persona_validation()) &
					(this.ADD_foto_persona_validation()) &
					(this.ADD_nuevo_foto_persona_validation())
					)
		
		result = Boolean(result);
		
		return result;	


	}

	// ET2-compatible submit wrapper for this entity
	ADD_submit_alumnograduacion(){
		// delegate to existing ADD_submit_persona implementation
		return this.ADD_submit_persona();
	}

	EDIT_nombre_persona_validation(){

		return this.ADD_nombre_persona_validation();

	}

	EDIT_nuevo_foto_persona_validation(){

		if (!(this.not_exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_exito_campo('nuevo_foto_persona');
			return true;
		}
		if (!(this.max_size_file('nuevo_foto_persona',2000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_KO');
			return "nuevo_foto_persona_max_size_file_KO";
		}
		if (!(this.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_KO');
			return "nuevo_foto_persona_type_file_KO";
		}
		if (!(this.format_name_file('nuevo_foto_persona','[a-zA-Z.]'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_KO');
			return "nuevo_foto_persona_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}

	EDIT_apellidos_persona_validation(){
		return this.ADD_apellidos_persona_validation();
	}

	EDIT_fechanacimiento_persona_validation(){
		return this.ADD_fechanacimiento_persona_validation();
	}

	EDIT_direccion_persona_validation(){
		return this.ADD_direccion_persona_validation();
	}

	EDIT_telefono_persona_validation(){
		return this.ADD_telefono_persona_validation();
	}

	EDIT_email_persona_validation(){
		return this.ADD_email_persona_validation();
	}

	EDIT_foto_persona_validation(){
		return this.ADD_foto_persona_validation();
	}

	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	EDIT_submit_persona(){

		let result = (
					(this.EDIT_dni_validation()) &
					(this.EDIT_nombre_persona_validation()) &
					(this.EDIT_apellidos_persona_validation()) &
					(this.EDIT_fechanacimiento_persona_validation()) &
					(this.EDIT_direccion_persona_validation()) &
					(this.EDIT_telefono_persona_validation()) &
					(this.EDIT_email_persona_validation()) &
					(this.EDIT_foto_persona_validation()) &
					(this.EDIT_nuevo_foto_persona_validation())
					)
		
		result = Boolean(result);
		
		return result;	


	}

	/**********************************************************************************************
		fields validations for SEARCH
	***********************************************************************************************/

	SEARCH_submit_persona(){
		// Para búsquedas, generalmente no se requieren validaciones estrictas
		return true;
	}

	SEARCH_dni_validation(){
		// Para búsquedas, permitir campos vacíos o validación menos estricta
		let dni = document.getElementById('dni').value;
		if (dni === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_dni_validation();
	}

	SEARCH_nombre_persona_validation(){
		let nombre = document.getElementById('nombre_persona').value;
		if (nombre === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_nombre_persona_validation();
	}

	SEARCH_apellidos_persona_validation(){
		let apellidos = document.getElementById('apellidos_persona').value;
		if (apellidos === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_apellidos_persona_validation();
	}

	SEARCH_fechanacimiento_persona_validation(){
		let fecha = document.getElementById('fechaNacimiento_persona').value;
		if (fecha === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_fechanacimiento_persona_validation();
	}

	SEARCH_direccion_persona_validation(){
		let direccion = document.getElementById('direccion_persona').value;
		if (direccion === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_direccion_persona_validation();
	}

	SEARCH_telefono_persona_validation(){
		let telefono = document.getElementById('telefono_persona').value;
		if (telefono === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_telefono_persona_validation();
	}

	SEARCH_email_persona_validation(){
		let email = document.getElementById('email_persona').value;
		if (email === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_email_persona_validation();
	}

	SEARCH_foto_persona_validation(){
		let foto = document.getElementById('foto_persona').value;
		if (foto === '') return true; // Campo vacío permitido en búsquedas
		return this.ADD_foto_persona_validation();
	}

	SEARCH_nuevo_foto_persona_validation(){
		// En búsquedas, este campo generalmente no se usa
		return true;
	}

	/**********************************************************************************************
		Custom validation methods
	***********************************************************************************************/

	/**
	 * 
	 * test dni format in the regular expression
	 * @param {string} 
	 * @return {bool} true is regular expression is satified false otherwise  
	 * */ 

	personalize_dni_nie(){
		
		dni = document.getElementById('dni').value;
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

	/*
	 * Add explicit ADD_/EDIT_ methods for ET2 fields so the test harness
	 * can call entidad.ADD_alumnograduacion_<field>_validation() directly.
	 * These delegate to the dynamic/global stubs when available, otherwise
	 * perform lightweight checks mirroring the stubs in ET2_validation_stubs.js
	 */
	ADD_alumnograduacion_login_validation(){
		if (typeof window !== 'undefined' && window.ADD_alumnograduacion_login_validation) return window.ADD_alumnograduacion_login_validation();
		var id='alumnograduacion_login';
		var el = document.getElementById(id); if(!el) return true;
		var v = (el.value||'').trim();
		if(v.length===0) return true;
		if(v.length<4) { this.dom.mostrar_error_campo(id,'alumnograduacion_login_min_size_KO'); return 'alumnograduacion_login_min_size_KO'; }
		if(v.length>15) { this.dom.mostrar_error_campo(id,'alumnograduacion_login_max_size_KO'); return 'alumnograduacion_login_max_size_KO'; }
		if(!/^[A-Za-z0-9_]+$/.test(v)) { this.dom.mostrar_error_campo(id,'alumnograduacion_login_format_KO'); return 'alumnograduacion_login_format_KO'; }
		this.dom.mostrar_exito_campo(id); return true;
	}
	EDIT_alumnograduacion_login_validation(){ return this.ADD_alumnograduacion_login_validation(); }

	ADD_alumnograduacion_password_validation(){
		if (typeof window !== 'undefined' && window.ADD_alumnograduacion_password_validation) return window.ADD_alumnograduacion_password_validation();
		var id='alumnograduacion_password'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length<8){ this.dom.mostrar_error_campo(id,'alumnograduacion_password_min_size_KO'); return 'alumnograduacion_password_min_size_KO'; } if(v.length>64){ this.dom.mostrar_error_campo(id,'alumnograduacion_password_max_size_KO'); return 'alumnograduacion_password_max_size_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_password_validation(){ return this.ADD_alumnograduacion_password_validation(); }

	ADD_alumnograduacion_nombre_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_nombre_validation) return window.ADD_alumnograduacion_nombre_validation(); var id='alumnograduacion_nombre'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length<2){ this.dom.mostrar_error_campo(id,'alumnograduacion_nombre_min_size_KO'); return 'alumnograduacion_nombre_min_size_KO'; } if(v.length>25){ this.dom.mostrar_error_campo(id,'alumnograduacion_nombre_too_long_KO'); return 'alumnograduacion_nombre_too_long_KO'; } if(!/^[A-Za-z\sñÑáéíóúÁÉÍÓÚ-]+$/.test(v)){ this.dom.mostrar_error_campo(id,'alumnograduacion_nombre_format_KO'); return 'alumnograduacion_nombre_format_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_nombre_validation(){ return this.ADD_alumnograduacion_nombre_validation(); }

	ADD_alumnograduacion_apellidos_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_apellidos_validation) return window.ADD_alumnograduacion_apellidos_validation(); var id='alumnograduacion_apellidos'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length<2){ this.dom.mostrar_error_campo(id,'alumnograduacion_apellidos_min_size_KO'); return 'alumnograduacion_apellidos_min_size_KO'; } if(v.length>35){ this.dom.mostrar_error_campo(id,'alumnograduacion_apellidos_too_long_KO'); return 'alumnograduacion_apellidos_too_long_KO'; } if(!/^[A-Za-z\s-]+$/.test(v)){ this.dom.mostrar_error_campo(id,'alumnograduacion_apellidos_format_KO'); return 'alumnograduacion_apellidos_format_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_apellidos_validation(){ return this.ADD_alumnograduacion_apellidos_validation(); }

	ADD_alumnograduacion_titulacion_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_titulacion_validation) return window.ADD_alumnograduacion_titulacion_validation(); var id='alumnograduacion_titulacion'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v===''||v==='0'){ this.dom.mostrar_error_campo(id,'alumnograduacion_titulacion_empty_KO'); return 'alumnograduacion_titulacion_empty_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_titulacion_validation(){ return this.ADD_alumnograduacion_titulacion_validation(); }

	ADD_alumnograduacion_dni_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_dni_validation) return window.ADD_alumnograduacion_dni_validation(); var id='alumnograduacion_dni'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length!==9){ this.dom.mostrar_error_campo(id,'alumnograduacion_dni_invalid_length_KO'); return 'alumnograduacion_dni_invalid_length_KO'; } if(!/^[0-9]{8}[A-Za-z]$/.test(v)){ this.dom.mostrar_error_campo(id,'alumnograduacion_dni_not_numeric_KO'); return 'alumnograduacion_dni_not_numeric_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_dni_validation(){ return this.ADD_alumnograduacion_dni_validation(); }

	ADD_alumnograduacion_telefono_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_telefono_validation) return window.ADD_alumnograduacion_telefono_validation(); var id='alumnograduacion_telefono'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length<9){ this.dom.mostrar_error_campo(id,'alumnograduacion_telefono_invalid_length_KO'); return 'alumnograduacion_telefono_invalid_length_KO'; } if(!/^\+?[0-9]{9,15}$/.test(v)){ this.dom.mostrar_error_campo(id,'alumnograduacion_telefono_not_numeric_KO'); return 'alumnograduacion_telefono_not_numeric_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_telefono_validation(){ return this.ADD_alumnograduacion_telefono_validation(); }

	ADD_alumnograduacion_direccion_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_direccion_validation) return window.ADD_alumnograduacion_direccion_validation(); var id='alumnograduacion_direccion'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length<1){ this.dom.mostrar_error_campo(id,'alumnograduacion_direccion_too_short_KO'); return 'alumnograduacion_direccion_too_short_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_direccion_validation(){ return this.ADD_alumnograduacion_direccion_validation(); }

	ADD_alumnograduacion_email_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_email_validation) return window.ADD_alumnograduacion_email_validation(); var id='alumnograduacion_email'; var el=document.getElementById(id); if(!el) return true; var v=(el.value||'').trim(); if(v.length===0) return true; if(v.length<5){ this.dom.mostrar_error_campo(id,'alumnograduacion_email_too_short_KO'); return 'alumnograduacion_email_too_short_KO'; } if(v.length>100){ this.dom.mostrar_error_campo(id,'alumnograduacion_email_too_long_KO'); return 'alumnograduacion_email_too_long_KO'; } if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)){ this.dom.mostrar_error_campo(id,'alumnograduacion_email_invalid_format_KO'); return 'alumnograduacion_email_invalid_format_KO'; } this.dom.mostrar_exito_campo(id); return true; }
	EDIT_alumnograduacion_email_validation(){ return this.ADD_alumnograduacion_email_validation(); }

	ADD_alumnograduacion_fotoacto_validation(){ if (typeof window !== 'undefined' && window.ADD_alumnograduacion_fotoacto_validation) return window.ADD_alumnograduacion_fotoacto_validation(); var el=document.getElementById('nuevo_alumnograduacion_fotoacto'); if(!el) return true; if(!el.files || el.files.length===0) return true; var f=el.files[0]; if(f.size>5*1024*1024){ this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','alumnograduacion_fotoacto_size_KO'); return 'alumnograduacion_fotoacto_size_KO'; } if(['image/jpeg','image/png'].indexOf(f.type)===-1){ this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','alumnograduacion_fotoacto_invalid_characters_KO'); return 'alumnograduacion_fotoacto_invalid_characters_KO'; } if(/\s/.test(f.name)){ this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','alumnograduacion_fotoacto_spaces_KO'); return 'alumnograduacion_fotoacto_spaces_KO'; } this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto'); return true; }
	EDIT_alumnograduacion_fotoacto_validation(){ return this.ADD_alumnograduacion_fotoacto_validation(); }
	/**
	 * get dni as parameter, split letter and numbers, calculate
	 * %23 from number to obtain corresponding letter and compares with letter in dni value
	 * 
	 * @param dni value
	 * @returns true if dni is valid false otherwise
	 */
	personalize_dni_format(){
		
		if (!(this.format('dni', '[0-9]{8}[A-Z]'))){
			this.dom.mostrar_error_campo('dni','dni_format_KO');
			return "dni_format_KO";
		}
		return true;

	}

	personalize_nie_format(){
		if (!(this.format('dni', '[XYZ][0-9]{7}[A-Z]'))){
			this.dom.mostrar_error_campo('dni','nie_format_KO');
			return "nie_format_KO";
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
	 * the number from this letter and create dni for validating in 
	 * personalizate method
	 * 
	 * @param nie value
	 * @returns true if nie is valid false otherwise
	 */
	personalize_validate_nie(nie){
		
		//var nie = document.getElementById('dni').value;
		// Change the initial letter for the corresponding number and validate as DNI
		var nie_prefix = nie.charAt( 0 );

		switch (nie_prefix) {
		case 'X': nie_prefix = 0; break;
		case 'Y': nie_prefix = 1; break;
		case 'Z': nie_prefix = 2; break;
		}

		return this.personalize_validate_dni( nie_prefix + nie.substr(1) );
	
	}



}