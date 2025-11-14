var textos_EN = {

	// textos titulos generales
	'text_titulo_app': 'IU ET2 Interface',
	'text_titulo_menu': 'Menu Options',
	'text_titulo_pie': 'Footer',
    'label_seleccioncolumnas': 'Select columns ',
    
    // textos de test
    /*'res_estructura_tests':'Tabla verificacion estructura de test',
	'resultadodef':'formato correcto estructura definicion tests',
	'res_estructura_pruebas':'Tabla verificacion estructura de pruebas',
	'resultadoprueba':'formato correcto estructura pruebas',
	'res_pruebas':'Tabla ejecución de pruebas',
	'resultadotest':'Resultado ejecucion pruebas',
    */

    // textos menu
	'text_menu_persona': 'Person Management',

    // textos entidad persona
	'text_titulo_page_persona' : 'Personal Data Management',
    'text_contenido_titulo_form_persona_ADD': 'Personal Data ADD Form',
	'text_contenido_titulo_form_persona_EDIT': 'Personal Data EDIT Form',
	'text_contenido_titulo_form_persona_DELETE': 'Personal Data DELETE Form',
	'text_contenido_titulo_form_persona_SHOWCURRENT': 'Personal Data SHOWCURRENT Form',
    'text_contenido_titulo_form_persona_SEARCH': 'Personal Data SEARCH Form',

	// atributos
	'dni': 'Identification',
    'nombre_persona': 'First Name',
    'apellidos_persona': 'Last Name',
    'fechaNacimiento_persona': 'Date of Birth',
    'direccion_persona': 'Address',
    'telefono_persona': 'Phone',
    'email_persona': 'Email',
    'foto_persona': 'Photo',

	// labels
	'label_dni': 'Identification',
	'label_nombre_persona': 'First Name',
	'label_apellidos_persona': 'Last Name',
	'label_fechaNacimiento_persona': 'Date of Birth',
	'label_direccion_persona': 'Address',
	'label_telefono_persona': 'Phone',
	'label_email_persona': 'Email',
	'label_foto_persona': 'Photo',
	'label_nuevo_foto_persona': 'New Photo',

	// errores validaciones formulario
	// ADD/EDIT

	// dni
	'dni_min_size_KO':'ID number too short. Must have 8 numbers and 1 alphabetical character',
    'dni_max_size_KO':'ID number too long. Must have 8 numbers and 1 alphabetical character',
    'dni_format_KO':'Incorrect ID/foreign ID format. ID number 8 digits 1 letter, foreign ID number 1 letter 7 digits 1 letter',
    // nombre_persona
    'nombre_persona_min_size_KO':'Name too short. Must have more than 4 alphabetical characters',
    'nombre_persona_max_size_KO':'Name too long. Must have less than 15 alphabetic characters',
    'nombre_persona_format_KO':'Incorrect name. Only alphabetic characters are allowed',

    // apellidos_persona
    'apellidos_persona_min_size_KO': 'Last name too short. Must have more than 4 alphabetic characters or spaces',
    'apellidos_persona_max_size_KO': 'Last name too long. Must have less than 20 alphabetic characters or spaces',
    'apellidos_persona_format_KO': 'Last name incorrect. Only alphabetic characters and spaces are allowed',

    //fechaNacimiento_persona
    'fechaNacimiento_persona_format_KO': 'Date is incorrect. Must be in dd/mm/yyyy format',
    'fechaNacimiento_persona_valid_KO': 'Date is invalid. The date must exist',


	// email persona
	'email_persona_min_size_KO': '',
	'email_persona_max_size_KO':'',
	'email_persona_format_KO':'',

	// nuevo foto persona	
	'nuevo_foto_persona_not_exist_file_KO':'The file does not exist. A photo in jpg format must be uploaded.',
	'nuevo_foto_persona_max_size_file_KO':'',
	'nuevo_foto_persona_type_file_KO':'',
	'nuevo_foto_persona_format_name_file_KO':'',
	'nuevo_foto_persona_min_size_KO':'',
	'nuevo_foto_persona_max_size_KO':'',

	//SEARCH
	// foto persona
	'foto_persona_max_size_KO':'',
	'foto_persona_format_KO':'',
	

	//errores acciones
	'RECORDSET_VACIO' : 'There are not results for your search',
	'dni_es_nulo_KO':'DNI can not be empty',

	'admin_no_se_puede_modificar_KO':'El admin no se puede modificar',

	// --- keys added from ET2_infotest (EN translations or ES literals as placeholders)
	'msg_exito': 'Success',
	'msg_campo_opcional': 'Optional field',
	'msg_se_permite_busqueda_vacia': 'Empty search allowed',
	'msg_se_encuentra_el_usuario_por_login_exacto': 'User found by exact login',
	'msg_se_encuentra_el_usuario_por_email_exacto': 'User found by exact email',
	'msg_se_encuentra_el_usuario_por_telefono_exacto': 'User found by exact phone',
	'msg_se_encuentra_el_usuario_por_dni_exacto': 'User found by exact DNI',
	'msg_se_encuentran_usuarios_por_coincidencia_parcial': 'Users found by partial match',
	'msg_se_encuentran_fotos_por_coincidencia_parcial': 'Photos found by partial match',
	'msg_se_encuentra_la_foto_por_nombre_exacto': 'Photo found by exact name',
	'msg_se_encuentra_usuario_por_titulacion_valida': 'User found by valid degree',

	// articulo
	'CodigoA_negative_KO': 'El código debe ser entero positivo',
	'CodigoA_not_numeric_KO': 'El código debe ser numérico',
	'AutoresA_maxlen_KO': 'Máximo 200 caracteres',
	'TituloA_empty_KO': 'El título no puede estar vacío',
	'TituloA_maxlen_KO': 'Máximo 100 caracteres',
	'TituloR_maxlen_KO': 'Máximo 100 caracteres',
	'ISSN_format_KO': 'Formato ISSN inválido (ej. 1234-567X)',
	'PagIniA_negative_KO': 'Debe ser entero >= 0',
	'PagFinA_invalid_range_KO': 'PagFinA debe ser >= PagIniA',
	'FechaPublicacionR_format_KO': 'Formato fecha YYYY-MM-DD',
	'FicheropdfA_empty_KO': 'El fichero no puede estar vacío',
	'FicheropdfA_type_KO': 'Solo se permiten ficheros .pdf',
	'FicheropdfA_no_extension_KO': 'Debe incluir extensión válida',
	'FicheropdfA_name_KO': 'Formato nombre inválido (no permite espacios ni caracteres especiales)',
	'FicheropdfA_size_KO': 'Tamaño máximo 5242880 bytes',
	'EstadoA_invalid_KO': 'Estado no permitido',
	'VolumenR_maxlen_KO': 'Máximo 4 caracteres',

	// alumnograduacion (validation keys)
	'alumnograduacion_login_min_size_KO': 'El tamaño debe ser como min 4',
	'alumnograduacion_login_max_size_KO': 'El tamaño debe ser de máximo 15',
	'alumnograduacion_login_format_KO': 'Solo puede contener caracteres alfabéticos sin acentos ni ñ',
	'alumnograduacion_login_accented_KO': 'Solo puede contener caracteres alfabéticos sin acentos',
	'alumnograduacion_login_empty_KO': 'No puede contener solo espacios',
	'alumnograduacion_login_spaces_KO': 'No puede contener espacios',
	'alumnograduacion_login_num_KO': 'Solo puede contener caracteres alfabéticos',
	'alumnograduacion_login_symbols_KO': 'Solo puede contener caracteres alfabéticos',
	'alumnograduacion_login_too_short_KO': 'El tamaño debe ser como min 4',
	'alumnograduacion_login_too_long_KO': 'El tamaño debe ser de máximo 15',

	'alumnograduacion_password_min_size_KO': 'El campo no puede tener una longitud menor a 8 caracteres',
	'alumnograduacion_password_max_size_KO': 'El tamaño debe ser de máximo 64 caracteres',
	'alumnograduacion_password_alpha_KO': 'Solo puede contener caracteres alfabéticos y espacios en blanco',
	'alumnograduacion_password_format_KO': 'Formato de contraseña no válido',
	'alumnograduacion_password_invalid_characters_KO': 'Solo puede contener caracteres alfabéticos y espacios sin acentos ni ñ',

	'alumnograduacion_nombre_min_size_KO': 'El tamaño debe ser de mínimo 2',
	'alumnograduacion_nombre_max_size_KO': 'El tamaño debe ser de máximo 25',
	'alumnograduacion_nombre_invalid_characters_KO': 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios',
	'alumnograduacion_nombre_empty_KO': 'No puede contener solo espacios',

	'alumnograduacion_apellidos_min_size_KO': 'El tamaño debe ser de mínimo 2',
	'alumnograduacion_apellidos_max_size_KO': 'El tamaño debe ser de máximo 35',
	'alumnograduacion_apellidos_alpha_KO': 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios',
	'alumnograduacion_apellidos_format_KO': 'Formato de apellidos no válido',
	'alumnograduacion_apellidos_invalid_characters_KO': 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios',

	'alumnograduacion_dni_min_size_KO': 'El tamaño debe ser 9',
	'alumnograduacion_dni_format_KO': 'Formato nif o nie incorrecto',
	'alumnograduacion_dni_num_KO': 'Falta la letra',
	'alumnograduacion_dni_spaces_KO': 'No puede contener espacios',

	'alumnograduacion_telefono_min_size_KO': 'El tamaño debe ser de 9',
	'alumnograduacion_telefono_num_KO': 'Solo puede contener dígitos',
	'alumnograduacion_telefono_format_KO': 'Formato de teléfono incorrecto',

	'alumnograduacion_email_min_size_KO': 'El tamaño debe ser de mínimo 5',
	'alumnograduacion_email_max_size_KO': 'El tamaño debe ser de máximo 100',
	'alumnograduacion_email_format_KO': 'El correo electrónico debe tener un formato válido',
	'alumnograduacion_email_no_at_KO': 'Debe contener @',
	'alumnograduacion_email_no_domain_KO': 'Formato de dominio incorrecto',
	'alumnograduacion_email_multiple_at_KO': 'Solo puede contener un @',

	'alumnograduacion_direccion_min_size_KO': 'El campo no puede estar vacío',
	'alumnograduacion_direccion_format_KO': 'Formato de dirección no válido',
	'alumnograduacion_direccion_invalid_characters_KO': 'Solo puede contener caracteres alfanuméricos con acentos y espacios',

	'alumnograduacion_fotoacto_empty_KO': 'El fichero no puede estar vacío',
	'alumnograduacion_fotoacto_format_KO': 'Formato de fichero no permitido',
	'alumnograduacion_fotoacto_size_KO': 'Fichero demasiado grande',
	'alumnograduacion_fotoacto_spaces_KO': 'No puede contener espacios',
	'alumnograduacion_fotoacto_no_extension_KO': 'Debe incluir extensión válida',

	// ubicacion
	'id_site_not_numeric_KO': 'id_site debe ser numérico',
	'site_latitud_range_KO': 'Latitud debe estar en [-90,90]',
	'site_longitud_range_KO': 'Longitud debe estar en [-180,180]',
	'site_altitude_not_numeric_KO': 'Altitud debe ser entero',
	'site_locality_maxlen_KO': 'Máximo 40 caracteres',
	'site_provider_login_empty_KO': 'No puede estar vacío',
	'site_provider_login_maxlen_KO': 'Máximo 30 caracteres',
	'site_north_photo_type_KO': 'Solo jpg|jpeg|png permitidos',
	'site_north_photo_empty_KO': 'El fichero no puede estar vacío',
	'site_north_photo_size_KO': 'Fichero demasiado grande',
	'site_south_photo_name_KO': 'Nombre de archivo no puede contener espacios',
	'site_east_photo_type_KO': 'Solo jpg|jpeg|png permitidos',
	'site_east_photo_name_KO': 'Nombre de archivo no puede contener espacios',
	'site_west_photo_type_KO': 'Solo jpg|jpeg|png permitidos',
	'site_west_photo_no_extension_KO': 'Debe incluir extensión válida',
	
}