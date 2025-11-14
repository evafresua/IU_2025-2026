// ET2_infotest.js
// Definiciones de tests adaptadas al formato ET2
// Fecha: 2025-11-02

// Estructura de cada entrada en nombreentidad_def_tests:
// [ entidad, campo, elemento_formulario, numero_test, descripcion, accion, resultado_esperado, mensaje ]

let alumnograduacion_def_tests = Array(
    // ADD
    Array('alumnograduacion','alumnograduacion_login','input',1,'Tamaño < 4','ADD','alumnograduacion_login_min_size_KO','alumnograduacion_login_too_short_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',2,'Tamaño > 15','ADD','alumnograduacion_login_max_size_KO','alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',3,'No alfabetico','ADD','alumnograduacion_login_format_KO','alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',4,'No acentuados','ADD','alumnograduacion_login_accented_KO','alumnograduacion_login_accented_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',5,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_password','input',6,'Tamaño < 8','ADD','alumnograduacion_password_min_size_KO','alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',7,'Tamaño > 64','ADD','alumnograduacion_password_max_size_KO','alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',8,'No alfabéticos ni espacios en blanco','ADD','alumnograduacion_password_alpha_KO','alumnograduacion_password_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',9,'Tiene acentos','ADD','alumnograduacion_password_accented_KO','alumnograduacion_login_accented_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',10,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_nombre','input',11,'Tamaño < 2','ADD','alumnograduacion_nombre_min_size_KO','alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',12,'Tamaño > 25','ADD','alumnograduacion_nombre_max_size_KO','alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',13,'No alfabetico','ADD','alumnograduacion_apellidos_alpha_KO','alumnograduacion_apellidos_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',14,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_apellidos','input',15,'Tamaño < 2','ADD','alumnograduacion_apellidos_min_size_KO','alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',16,'Tamaño > 35','ADD','alumnograduacion_apellidos_max_size_KO','alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',17,'No alfabetico','ADD','alumnograduacion_apellidos_alpha_KO','alumnograduacion_apellidos_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',18,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_titulacion','select',19,'Opción no válida','ADD','alumnograduacion_titulacion_valid_KO','alumnograduacion_titulacion_valid_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',20,'Opción válida','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_dni','input',21,'Tamaño != 9','ADD','alumnograduacion_dni_min_size_KO','alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',22,'Solo numeros','ADD','alumnograduacion_dni_num_KO','alumnograduacion_dni_num_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',23,'Letra invalida','ADD','alumnograduacion_dni_letter_KO','alumnograduacion_dni_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',24,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_telefono','input',25,'Tamaño != 9','ADD','alumnograduacion_telefono_min_size_KO','alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono','input',26,'No dígitos','ADD','alumnograduacion_telefono_num_KO','alumnograduacion_telefono_num_KO'),
    Array('alumnograduacion','alumnograduacion_telefono','input',27,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_email','input',28,'Tamaño > 100','ADD','alumnograduacion_email_max_size_KO','alumnograduacion_email_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_direccion','textarea',29,'Tamaño < 0','ADD','alumnograduacion_direccion_min_size_KO','alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',30,'No alfanumerico','ADD','alumnograduacion_direccion_alpha_KO','alumnograduacion_direccion_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',31,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_email','input',32,'Correo vacío','ADD','alumnograduacion_email_empty_KO','alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',33,'Tamaño < 5','ADD','alumnograduacion_email_min_size_KO','alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',34,'Tamaño > 100','ADD','alumnograduacion_email_max_size_KO','alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',35,'Formato incorrecto','ADD','alumnograduacion_email_format_KO','alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',36,'Caracteres no permitidos','ADD','alumnograduacion_email_characters_KO','alumnograduacion_email_characters_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',37,'Válido','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_login','input',38,'Login solo espacios','ADD','alumnograduacion_login_empty_KO','alumnograduacion_login_empty_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',39,'Login con espacios en medio','ADD','alumnograduacion_login_spaces_KO','alumnograduacion_login_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',40,'Login con números','ADD','alumnograduacion_login_num_KO','alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',41,'Login con símbolos','ADD','alumnograduacion_login_symbols_KO','alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',42,'Login límite mínimo exacto','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_login','input',43,'Login límite máximo exacto','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_password','input',44,'Password solo espacios','ADD','alumnograduacion_password_empty_KO','alumnograduacion_login_empty_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',45,'Password con números','ADD','alumnograduacion_password_num_KO','alumnograduacion_password_num_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',46,'Password con símbolos','ADD','alumnograduacion_password_symbols_KO','alumnograduacion_password_num_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',47,'Password límite mínimo exacto','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_password','input',48,'Password límite máximo exacto','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_nombre','input',49,'Nombre solo espacios','ADD','alumnograduacion_nombre_empty_KO','alumnograduacion_login_empty_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',50,'Nombre con números','ADD','alumnograduacion_nombre_num_KO','alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',51,'Nombre con símbolos','ADD','alumnograduacion_nombre_symbols_KO','alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',52,'Nombre con ñ válido','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_nombre','input',53,'Nombre con acentos válido','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_nombre','input',54,'Nombre límite mínimo exacto','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_nombre','input',55,'Nombre límite máximo exacto','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_apellidos','input',56,'Apellidos solo espacios','ADD','alumnograduacion_apellidos_only_spaces_KO','alumnograduacion_login_empty_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',57,'Apellidos con números','ADD','alumnograduacion_apellidos_num_KO','alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',58,'Apellidos con símbolos','ADD','alumnograduacion_apellidos_symbols_KO','alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',59,'Apellidos múltiples válidos','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',60,'Apellidos con guión válido','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',61,'Apellidos límite mínimo exacto','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',62,'Apellidos límite máximo exacto','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_titulacion','select',63,'Titulación vacía','ADD','alumnograduacion_titulacion_empty_KO','alumnograduacion_titulacion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',64,'Titulación GRIA válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',65,'Titulación MEI válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',66,'Titulación MIA válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',67,'Titulación PCEO válida','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_dni','input',68,'DNI con espacios','ADD','alumnograduacion_dni_spaces_KO','alumnograduacion_login_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',69,'DNI solo números','ADD','alumnograduacion_dni_numbers_KO','alumnograduacion_dni_numbers_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',70,'DNI letra minúscula válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_dni','input',71,'NIE válido formato X','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_dni','input',72,'NIE válido formato Y','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_dni','input',73,'NIE válido formato Z','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_telefono','input',74,'Teléfono con espacios','ADD','alumnograduacion_telefono_spaces_KO','alumnograduacion_login_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_telefono','input',75,'Teléfono con guiones','ADD','alumnograduacion_telefono_dashes_KO','alumnograduacion_telefono_num_KO'),
    Array('alumnograduacion','alumnograduacion_telefono','input',76,'Teléfono que empiece por 6','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_telefono','input',77,'Teléfono que empiece por 7','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_telefono','input',78,'Teléfono que empiece por 9','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_direccion','textarea',79,'Dirección solo espacios','ADD','alumnograduacion_direccion_only_spaces_KO','alumnograduacion_login_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',80,'Dirección con números válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',81,'Dirección con comas válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',82,'Dirección límite máximo exacto','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_email','input',83,'Email sin @ inválido','ADD','alumnograduacion_email_no_at_KO','alumnograduacion_email_no_at_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',84,'Email sin dominio inválido','ADD','alumnograduacion_email_no_domain_KO','alumnograduacion_email_no_domain_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',85,'Email múltiples @ inválido','ADD','alumnograduacion_email_multiple_at_KO','alumnograduacion_email_multiple_at_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',86,'Email con subdominios válido','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_email','input',87,'Email con números válido','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_email','input',88,'Email límite mínimo exacto','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_email','input',89,'Email límite máximo exacto','ADD',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',90,'Foto vacía válida','ADD',true,'msg_campo_opcional'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',91,'Foto con extensión jpg válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',92,'Foto con extensión png válida','ADD',true,'msg_exito'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',93,'Foto con espacios inválida','ADD','alumnograduacion_fotoacto_spaces_KO','alumnograduacion_login_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',94,'Foto sin extensión inválida','ADD','alumnograduacion_fotoacto_no_extension_KO','alumnograduacion_fotoacto_no_extension_KO'),

    // EDIT (se mantienen los mismos números que en ET1 para trazabilidad)
    Array('alumnograduacion','alumnograduacion_login','input',95,'Tamaño < 4','EDIT','alumnograduacion_login_too_short_KO','alumnograduacion_login_too_short_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',96,'Tamaño > 15','EDIT','alumnograduacion_login_too_long_KO','alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',97,'No alfabetico','EDIT','alumnograduacion_login_not_alphabetic_KO','alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',98,'Tiene acentos','EDIT','alumnograduacion_login_has_accents_KO','alumnograduacion_login_accented_KO'),
    Array('alumnograduacion','alumnograduacion_login','input',99,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_password','input',100,'Tamaño < 8','EDIT','alumnograduacion_password_too_short_KO','alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',101,'Tamaño > 64','EDIT','alumnograduacion_password_too_long_KO','alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',102,'No alfabéticos ni espacios en blanco','EDIT','alumnograduacion_password_not_alphabetic_KO','alumnograduacion_password_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',103,'Tiene acentos','EDIT','alumnograduacion_password_has_accents_KO','alumnograduacion_login_accented_KO'),
    Array('alumnograduacion','alumnograduacion_password','input',104,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_nombre','input',105,'Tamaño < 2','EDIT','alumnograduacion_nombre_too_short_KO','alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',106,'Tamaño > 25','EDIT','alumnograduacion_nombre_too_long_KO','alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',107,'No alfabetico','EDIT','alumnograduacion_apellidos_not_alphabetic_KO','alumnograduacion_apellidos_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_nombre','input',108,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_apellidos','input',109,'Tamaño < 2','EDIT','alumnograduacion_apellidos_too_short_KO','alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',110,'Tamaño > 35','EDIT','alumnograduacion_apellidos_too_long_KO','alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',111,'No alfabetico','EDIT','alumnograduacion_apellidos_not_alphabetic_KO','alumnograduacion_apellidos_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',112,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_titulacion','select',113,'Opción no válida','EDIT','alumnograduacion_titulacion_invalid_KO','alumnograduacion_titulacion_valid_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',114,'Opción válida','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_dni','input',115,'Tamaño != 9','EDIT','alumnograduacion_dni_invalid_length_KO','alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',116,'Solo numeros','EDIT','alumnograduacion_dni_not_numeric_KO','alumnograduacion_dni_num_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',117,'Letra invalida','EDIT','alumnograduacion_dni_invalid_letter_KO','alumnograduacion_dni_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni','input',118,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_telefono','input',119,'Tamaño != 9','EDIT','alumnograduacion_telefono_invalid_length_KO','alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono','input',120,'No dígitos','EDIT','alumnograduacion_telefono_not_numeric_KO','alumnograduacion_telefono_num_KO'),
    Array('alumnograduacion','alumnograduacion_telefono','input',121,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_email','input',122,'Tamaño > 100','EDIT','alumnograduacion_email_too_long_KO','alumnograduacion_email_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_direccion','textarea',123,'Tamaño < 0','EDIT','alumnograduacion_direccion_too_short_KO','alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',124,'No alfanumerico','EDIT','alumnograduacion_direccion_not_alphanumeric_KO','alumnograduacion_direccion_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',125,'Válido','EDIT',true,'msg_exito'),

    Array('alumnograduacion','alumnograduacion_email','input',126,'Correo vacío','EDIT','alumnograduacion_email_empty_KO','alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',127,'Tamaño < 5','EDIT','alumnograduacion_email_too_short_KO','alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',128,'Tamaño > 100','EDIT','alumnograduacion_email_too_long_KO','alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',129,'Formato incorrecto','EDIT','alumnograduacion_email_invalid_format_KO','alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',130,'Caracteres no permitidos','EDIT','alumnograduacion_email_invalid_characters_KO','alumnograduacion_email_characters_KO'),
    Array('alumnograduacion','alumnograduacion_email','input',131,'Válido','EDIT',true,'msg_exito'),

    // SEARCH
    Array('alumnograduacion','alumnograduacion_login','input',132,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_login','input',133,'Búsqueda por login exacto','SEARCH',true,'msg_se_encuentra_el_usuario_por_login_exacto'),
    Array('alumnograduacion','alumnograduacion_login','input',134,'Búsqueda por login parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_login','input',135,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_login_format_KO','alumnograduacion_login_format_KO'),

    Array('alumnograduacion','alumnograduacion_password','input',136,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_password','input',137,'Búsqueda por password parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_password','input',138,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_password_invalid_characters_KO','alumnograduacion_password_invalid_characters_KO'),

    Array('alumnograduacion','alumnograduacion_nombre','input',139,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_nombre','input',140,'Búsqueda por nombre parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_nombre','input',141,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_nombre_invalid_characters_KO','alumnograduacion_apellidos_alpha_KO'),

    Array('alumnograduacion','alumnograduacion_apellidos','input',142,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',143,'Búsqueda por apellidos parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_apellidos','input',144,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_apellidos_invalid_characters_KO','alumnograduacion_apellidos_alpha_KO'),

    Array('alumnograduacion','alumnograduacion_titulacion','select',145,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',146,'Búsqueda por titulacion válida','SEARCH',true,'msg_se_encuentra_usuario_por_titulacion_valida'),
    Array('alumnograduacion','alumnograduacion_titulacion','select',147,'Búsqueda por titulacion no válida','SEARCH','alumnograduacion_titulacion_format_KO','alumnograduacion_titulacion_valid_KO'),

    Array('alumnograduacion','alumnograduacion_dni','input',148,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_dni','input',149,'Búsqueda por DNI exacto','SEARCH',true,'msg_se_encuentra_el_usuario_por_dni_exacto'),
    Array('alumnograduacion','alumnograduacion_dni','input',150,'Búsqueda por DNI parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_dni','input',151,'Búsqueda con formato incorrecto','SEARCH','alumnograduacion_dni_format_KO','alumnograduacion_dni_format_KO'),

    Array('alumnograduacion','alumnograduacion_telefono','input',152,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_telefono','input',153,'Búsqueda por teléfono exacto','SEARCH',true,'msg_se_encuentra_el_usuario_por_telefono_exacto'),
    Array('alumnograduacion','alumnograduacion_telefono','input',154,'Búsqueda por teléfono parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_telefono','input',155,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_telefono_invalid_characters_KO','alumnograduacion_telefono_num_KO'),

    Array('alumnograduacion','alumnograduacion_direccion','textarea',156,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',157,'Búsqueda por dirección parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_direccion','textarea',158,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_direccion_invalid_characters_KO','alumnograduacion_direccion_invalid_characters_KO'),

    Array('alumnograduacion','alumnograduacion_email','input',159,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_email','input',160,'Búsqueda por email exacto','SEARCH',true,'msg_se_encuentra_el_usuario_por_email_exacto'),
    Array('alumnograduacion','alumnograduacion_email','input',161,'Búsqueda por email parcial','SEARCH',true,'msg_se_encuentran_usuarios_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_email','input',162,'Búsqueda con formato incorrecto','SEARCH','alumnograduacion_email_format_KO','alumnograduacion_email_format_KO'),

    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',163,'Búsqueda vacía','SEARCH',true,'msg_se_permite_busqueda_vacia'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',164,'Búsqueda por nombre de foto exacto','SEARCH',true,'msg_se_encuentra_la_foto_por_nombre_exacto'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',165,'Búsqueda por nombre de foto parcial','SEARCH',true,'msg_se_encuentran_fotos_por_coincidencia_parcial'),
    Array('alumnograduacion','alumnograduacion_fotoacto','inputfile',166,'Búsqueda con caracteres no permitidos','SEARCH','alumnograduacion_fotoacto_invalid_characters_KO','alumnograduacion_fotoacto_invalid_characters_KO')
);

// Copia de los casos de prueba por campo (formato original) renombrados para ET2
let alumnograduacion_tests_fields = Array(
    // ADD (copiados de ET1)
    Array('alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',4,4,'ADD',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_accented_KO'),
    Array('alumnograduacion','alumnograduacion_login',5,5,'ADD',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',6,6,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',7,7,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',8,8,'ADD',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',9,9,'ADD',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',10,10,'ADD',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',11,11,'ADD',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',12,12,'ADD',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',13,13,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',14,14,'ADD',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',15,15,'ADD',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',16,16,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',17,17,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',18,18,'ADD',[{alumnograduacion_apellidos:'García López'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',19,19,'ADD',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',20,20,'ADD',[{alumnograduacion_titulacion:'GREI'}],true),

    Array('alumnograduacion','alumnograduacion_dni',21,21,'ADD',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',22,22,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',23,23,'ADD',[{alumnograduacion_dni:'12345678Z'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',24,24,'ADD',[{alumnograduacion_dni:'12345678A'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',25,25,'ADD',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',26,26,'ADD',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',27,27,'ADD',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',28,28,'ADD',[{alumnograduacion_telefono:'123456789'}],true),

    Array('alumnograduacion','alumnograduacion_email',29,29,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',30,30,'ADD',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',31,31,'ADD',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',32,32,'ADD',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_email',33,33,'ADD',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email',34,34,'ADD',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',35,35,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',36,36,'ADD',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',37,37,'ADD',[{alumnograduacion_email:'usuario@dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_login',38,38,'ADD',[{alumnograduacion_login:'    '}],'alumnograduacion_login_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_login',39,39,'ADD',[{alumnograduacion_login:'ab cd'}],'alumnograduacion_login_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_login',40,40,'ADD',[{alumnograduacion_login:'abc123'}],'alumnograduacion_login_numbers_KO'),
    Array('alumnograduacion','alumnograduacion_login',41,41,'ADD',[{alumnograduacion_login:'abc@'}],'alumnograduacion_login_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_login',42,42,'ADD',[{alumnograduacion_login:'abcd'}],true),
    Array('alumnograduacion','alumnograduacion_login',43,43,'ADD',[{alumnograduacion_login:'abcdefghijklmno'}],true),

    Array('alumnograduacion','alumnograduacion_password',44,44,'ADD',[{alumnograduacion_password:'        '}],'alumnograduacion_password_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_password',45,45,'ADD',[{alumnograduacion_password:'abc123def'}],'alumnograduacion_password_numbers_KO'),
    Array('alumnograduacion','alumnograduacion_password',46,46,'ADD',[{alumnograduacion_password:'abc@def'}],'alumnograduacion_password_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_password',47,47,'ADD',[{alumnograduacion_password:'abcdefgh'}],true),
    Array('alumnograduacion','alumnograduacion_password',48,48,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',49,49,'ADD',[{alumnograduacion_nombre:'  '}],'alumnograduacion_nombre_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',50,50,'ADD',[{alumnograduacion_nombre:'José123'}],'alumnograduacion_nombre_numbers_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',51,51,'ADD',[{alumnograduacion_nombre:'José@'}],'alumnograduacion_nombre_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',52,52,'ADD',[{alumnograduacion_nombre:'Begoña'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',53,53,'ADD',[{alumnograduacion_nombre:'José María'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',54,54,'ADD',[{alumnograduacion_nombre:'Jo'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',55,55,'ADD',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxy'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',56,56,'ADD',[{alumnograduacion_apellidos:'   '}],'alumnograduacion_apellidos_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',57,57,'ADD',[{alumnograduacion_apellidos:'García123'}],'alumnograduacion_apellidos_numbers_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',58,58,'ADD',[{alumnograduacion_apellidos:'García@'}],'alumnograduacion_apellidos_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',59,59,'ADD',[{alumnograduacion_apellidos:'García López Martínez'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',60,60,'ADD',[{alumnograduacion_apellidos:'García-López'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',61,61,'ADD',[{alumnograduacion_apellidos:'Ga'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',62,62,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghi'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',63,63,'ADD',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',64,64,'ADD',[{alumnograduacion_titulacion:'GRIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',65,65,'ADD',[{alumnograduacion_titulacion:'MEI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',66,66,'ADD',[{alumnograduacion_titulacion:'MIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',67,67,'ADD',[{alumnograduacion_titulacion:'PCEO'}],true),

    Array('alumnograduacion','alumnograduacion_dni',68,68,'ADD',[{alumnograduacion_dni:'12345678 A'}],'alumnograduacion_dni_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_dni',69,69,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni',70,70,'ADD',[{alumnograduacion_dni:'12345678z'}],true),
    Array('alumnograduacion','alumnograduacion_dni',71,71,'ADD',[{alumnograduacion_dni:'X1234567L'}],true),
    Array('alumnograduacion','alumnograduacion_dni',72,72,'ADD',[{alumnograduacion_dni:'Y1234567X'}],true),
    Array('alumnograduacion','alumnograduacion_dni',73,73,'ADD',[{alumnograduacion_dni:'Z1234567R'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',74,74,'ADD',[{alumnograduacion_telefono:'123 456 789'}],'alumnograduacion_telefono_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',75,75,'ADD',[{alumnograduacion_telefono:'123-456-789'}],'alumnograduacion_telefono_hyphens_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',76,76,'ADD',[{alumnograduacion_telefono:'612345678'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',77,77,'ADD',[{alumnograduacion_telefono:'712345678'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',78,78,'ADD',[{alumnograduacion_telefono:'912345678'}],true),

    Array('alumnograduacion','alumnograduacion_direccion',79,79,'ADD',[{alumnograduacion_direccion:'     '}],'alumnograduacion_direccion_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',80,80,'ADD',[{alumnograduacion_direccion:'Calle Mayor 123'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',81,81,'ADD',[{alumnograduacion_direccion:'Av. de la Constitución, 45'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',82,82,'ADD',[{alumnograduacion_direccion:'Calle muy larga con muchos caracteres para superar el limite de cien caracteres permitidos'}],true),

    Array('alumnograduacion','alumnograduacion_email',83,83,'ADD',[{alumnograduacion_email:'usuariodominio.com'}],'alumnograduacion_email_no_at_KO'),
    Array('alumnograduacion','alumnograduacion_email',84,84,'ADD',[{alumnograduacion_email:'usuario@'}],'alumnograduacion_email_no_domain_KO'),
    Array('alumnograduacion','alumnograduacion_email',85,85,'ADD',[{alumnograduacion_email:'us@er@dominio.com'}],'alumnograduacion_email_multiple_at_KO'),
    Array('alumnograduacion','alumnograduacion_email',86,86,'ADD',[{alumnograduacion_email:'usuario@mail.dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',87,87,'ADD',[{alumnograduacion_email:'usuario123@dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',88,88,'ADD',[{alumnograduacion_email:'a@b.c'}],true),
    Array('alumnograduacion','alumnograduacion_email',89,89,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@b.co'}],true),

    Array('alumnograduacion','alumnograduacion_fotoacto',90,90,'ADD',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',91,91,'ADD',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',92,92,'ADD',[{alumnograduacion_fotoacto:'imagen.png'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',93,93,'ADD',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',94,94,'ADD',[{alumnograduacion_fotoacto:'imagen'}],'alumnograduacion_fotoacto_no_extension_KO'),

    // EDIT (copiados)
    Array('alumnograduacion','alumnograduacion_login',95,95,'EDIT',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',96,96,'EDIT',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',97,97,'EDIT',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',98,98,'EDIT',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',99,99,'EDIT',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',100,100,'EDIT',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',101,101,'EDIT',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',102,102,'EDIT',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',103,103,'EDIT',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',104,104,'EDIT',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',105,105,'EDIT',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',106,106,'EDIT',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',107,107,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',108,108,'EDIT',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',109,109,'EDIT',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',110,110,'EDIT',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',111,111,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',112,112,'EDIT',[{alumnograduacion_apellidos:'García López'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',113,113,'EDIT',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',114,114,'EDIT',[{alumnograduacion_titulacion:'GREI'}],true),

    Array('alumnograduacion','alumnograduacion_dni',115,115,'EDIT',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',116,116,'EDIT',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',117,117,'EDIT',[{alumnograduacion_dni:'12345678Z'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',118,118,'EDIT',[{alumnograduacion_dni:'12345678A'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',119,119,'EDIT',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',120,120,'EDIT',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',121,121,'EDIT',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',122,122,'EDIT',[{alumnograduacion_telefono:'123456789'}],true),

    Array('alumnograduacion','alumnograduacion_email',123,123,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',124,124,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',125,125,'EDIT',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',126,126,'EDIT',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),
    Array('alumnograduacion','alumnograduacion_email',127,127,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email',128,128,'EDIT',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',129,129,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',130,130,'EDIT',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',131,131,'EDIT',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    // SEARCH (copiados)
    Array('alumnograduacion','alumnograduacion_login',132,132,'SEARCH',[{alumnograduacion_login:''}],true),
    Array('alumnograduacion','alumnograduacion_login',133,133,'SEARCH',[{alumnograduacion_login:'abcd'}],true),
    Array('alumnograduacion','alumnograduacion_login',134,134,'SEARCH',[{alumnograduacion_login:'ab'}],true),
    Array('alumnograduacion','alumnograduacion_login',135,135,'SEARCH',[{alumnograduacion_login:'abcñ'}],'alumnograduacion_login_format_KO'),

    Array('alumnograduacion','alumnograduacion_password',136,136,'SEARCH',[{alumnograduacion_password:''}],true),
    Array('alumnograduacion','alumnograduacion_password',137,137,'SEARCH',[{alumnograduacion_password:'abc'}],true),
    Array('alumnograduacion','alumnograduacion_password',138,138,'SEARCH',[{alumnograduacion_password:'abcñ'}],'alumnograduacion_password_format_KO'),

    Array('alumnograduacion','alumnograduacion_nombre',139,139,'SEARCH',[{alumnograduacion_nombre:''}],true),
    Array('alumnograduacion','alumnograduacion_nombre',140,140,'SEARCH',[{alumnograduacion_nombre:'José'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',141,141,'SEARCH',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),

    Array('alumnograduacion','alumnograduacion_apellidos',142,142,'SEARCH',[{alumnograduacion_apellidos:''}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',143,143,'SEARCH',[{alumnograduacion_apellidos:'García'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',144,144,'SEARCH',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),

    Array('alumnograduacion','alumnograduacion_titulacion',145,145,'SEARCH',[{alumnograduacion_titulacion:''}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',146,146,'SEARCH',[{alumnograduacion_titulacion:'GREI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',147,147,'SEARCH',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),

    Array('alumnograduacion','alumnograduacion_dni',148,148,'SEARCH',[{alumnograduacion_dni:''}],true),
    Array('alumnograduacion','alumnograduacion_dni',149,149,'SEARCH',[{alumnograduacion_dni:'12345678A'}],true),
    Array('alumnograduacion','alumnograduacion_dni',150,150,'SEARCH',[{alumnograduacion_dni:'1234567A'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',150,152,'SEARCH',[{alumnograduacion_telefono:''}],true),
    Array('alumnograduacion','alumnograduacion_telefono',151,153,'SEARCH',[{alumnograduacion_telefono:'123456789'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',153,155,'SEARCH',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',154,156,'SEARCH',[{alumnograduacion_direccion:''}],true),
    Array('alumnograduacion','alumnograduacion_direccion',155,157,'SEARCH',[{alumnograduacion_direccion:'Calle Mayor'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',156,158,'SEARCH',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),

    Array('alumnograduacion','alumnograduacion_email',157,159,'SEARCH',[{alumnograduacion_email:''}],true),
    Array('alumnograduacion','alumnograduacion_email',158,160,'SEARCH',[{alumnograduacion_email:'usuario@dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',159,162,'SEARCH',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),

    Array('alumnograduacion','alumnograduacion_fotoacto',160,163,'SEARCH',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',161,164,'SEARCH',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',162,165,'SEARCH',[{alumnograduacion_fotoacto:'imagen.png'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',163,166,'SEARCH',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO')
);

// Nota: Los arrays con sufijo _ET2 permiten mantener los casos originales sin colisiones
// Si quieres que los nombres sean exactamente los de ET1 (por compatibilidad), puedo renombrarlos.
// -------------------------------
// ENTIDAD: articulo (definiciones ET2 + casos y generador)
// -------------------------------
let articulo_def_tests = Array(
    Array('articulo','CodigoA','input',167,'Código negativo','ADD','CodigoA_negative_KO','El código debe ser entero positivo'),
    Array('articulo','CodigoA','input',168,'Código no numérico','ADD','CodigoA_not_numeric_KO','CodigoA_not_numeric_KO'),
    Array('articulo','AutoresA','input',169,'Autores demasiado largo','ADD','AutoresA_maxlen_KO','AutoresA_maxlen_KO'),
    Array('articulo','TituloA','input',170,'Título vacío','ADD','TituloA_empty_KO','TituloA_empty_KO'),
    Array('articulo','TituloR','input',171,'Título revista demasiado largo','ADD','TituloR_maxlen_KO','TituloR_maxlen_KO'),
    Array('articulo','ISSN','input',172,'ISSN formato inválido','ADD','ISSN_format_KO','Formato ISSN inválido (ej. 1234-567X)'),
    Array('articulo','PagIniA','input',173,'Página inicio negativa','ADD','PagIniA_negative_KO','PagIniA_negative_KO'),
    Array('articulo','PagFinA','input',174,'Página fin menor que inicio','ADD','PagFinA_invalid_range_KO','PagFinA_invalid_range_KO'),
    Array('articulo','FechaPublicacionR','input',175,'Fecha inválida','ADD','FechaPublicacionR_format_KO','FechaPublicacionR_format_KO'),
    Array('articulo','FicheropdfA','inputfile',176,'PDF con extensión válida','ADD',true,'msg_exito'),
    Array('articulo','FicheropdfA','inputfile',177,'PDF con extensión no permitida','ADD','FicheropdfA_type_KO','FicheropdfA_type_KO'),
    Array('articulo','EstadoA','select',178,'Estado inválido','ADD','EstadoA_invalid_KO','EstadoA_invalid_KO'),
    Array('articulo','EstadoA','select',179,'Estado válido','ADD',true,'msg_exito'),
    // entradas adicionales extraídas de formatosPermitidos.txt
    Array('articulo','VolumenR','input',192,'Volumen demasiado largo','ADD','VolumenR_maxlen_KO','VolumenR_maxlen_KO'),
    Array('articulo','FicheropdfA','inputfile',193,'Nombre fichero con espacios inválido','ADD','FicheropdfA_name_KO','Formato nombre inválido (no permite espacios ni caracteres especiales)'),
    Array('articulo','FicheropdfA','inputfile',194,'Fichero demasiado grande','ADD','FicheropdfA_size_KO','FicheropdfA_size_KO')
);

let articulo_tests_fields = Array(
    Array('articulo','CodigoA',167,167,'ADD',[{CodigoA:-1}],'CodigoA_negative_KO'),
    Array('articulo','CodigoA',168,168,'ADD',[{CodigoA:'ABC'}],'CodigoA_not_numeric_KO'),
    Array('articulo','AutoresA',169,169,'ADD',[{AutoresA:'Autor Uno; Autor Dos'}],true),
    Array('articulo','AutoresA',169,170,'ADD',[{AutoresA:new Array(201).join('a')}],'AutoresA_maxlen_KO'),
    Array('articulo','TituloA',170,171,'ADD',[{TituloA:''}],'TituloA_empty_KO'),
    Array('articulo','TituloA',170,172,'ADD',[{TituloA:new Array(101).join('b')}],'TituloA_maxlen_KO'),
    Array('articulo','ISSN',172,173,'ADD',[{ISSN:'1234-56'}],'ISSN_format_KO'),
    Array('articulo','ISSN',172,174,'ADD',[{ISSN:'1234-567X'}],true),
    Array('articulo','PagIniA',173,175,'ADD',[{PagIniA:-5}],'PagIniA_negative_KO'),
    Array('articulo','PagFinA',174,176,'ADD',[{PagIniA:10,PagFinA:5}],'PagFinA_invalid_range_KO'),
    Array('articulo','FechaPublicacionR',175,177,'ADD',[{FechaPublicacionR:'2025-13-01'}],'FechaPublicacionR_format_KO'),
    Array('articulo','FicheropdfA',176,178,'ADD',[{FicheropdfA:'document.pdf'}],true),
    Array('articulo','FicheropdfA',176,179,'ADD',[{FicheropdfA:'document.txt'}],'FicheropdfA_type_KO'),
    Array('articulo','FicheropdfA',176,180,'ADD',[{FicheropdfA:'document'}],'FicheropdfA_no_extension_KO'),
    Array('articulo','EstadoA',178,181,'ADD',[{EstadoA:'Publicado'}],true),
    Array('articulo','EstadoA',178,182,'ADD',[{EstadoA:'Desconocido'}],'EstadoA_invalid_KO'),
    Array('articulo','VolumenR',192,195,'ADD',[{VolumenR:'12345'}],'VolumenR_maxlen_KO'),
    Array('articulo','FicheropdfA',193,196,'ADD',[{FicheropdfA:'mi archivo.pdf'}],'FicheropdfA_name_KO'),
    Array('articulo','FicheropdfA',194,197,'ADD',[{FicheropdfA:'bigfile.pdf', size:6000000 }],'FicheropdfA_size_KO'),
    Array('articulo','FicheropdfA',176,198,'ADD',[{FicheropdfA:'documento_ok.pdf'}],true)
);



// -------------------------------
// ENTIDAD: ubicacion (definiciones ET2 + casos y generador)
// -------------------------------
let ubicacion_def_tests = Array(
    Array('ubicacion','id_site','input',183,'id no numérico','ADD','id_site_not_numeric_KO','id_site debe ser numérico'),
    Array('ubicacion','site_latitud','input',184,'latitud fuera de rango','ADD','site_latitud_range_KO','site_latitud_range_KO'),
    Array('ubicacion','site_longitud','input',185,'longitud fuera de rango','ADD','site_longitud_range_KO','site_longitud_range_KO'),
    Array('ubicacion','site_altitude','input',186,'altitud no numérica','ADD','site_altitude_not_numeric_KO','site_altitude_not_numeric_KO'),
    Array('ubicacion','site_locality','input',187,'localidad demasiado larga','ADD','site_locality_maxlen_KO','site_locality_maxlen_KO'),
    Array('ubicacion','site_provider_login','input',188,'provider_login vacío','ADD','site_provider_login_empty_KO','site_provider_login_empty_KO'),
    Array('ubicacion','site_north_photo','inputfile',189,'foto norte con extensión válida','ADD',true,'msg_exito'),
    Array('ubicacion','site_north_photo','inputfile',190,'foto norte tipo inválido','ADD','site_north_photo_type_KO','site_north_photo_type_KO'),
    Array('ubicacion','site_south_photo','inputfile',191,'foto sur con espacios inválidos','ADD','site_south_photo_name_KO','site_south_photo_name_KO'),
    Array('ubicacion','site_east_photo','inputfile',199,'foto este con extensión válida','ADD',true,'msg_exito'),
    Array('ubicacion','site_east_photo','inputfile',200,'foto este tipo inválido','ADD','site_east_photo_type_KO','site_north_photo_type_KO'),
    Array('ubicacion','site_east_photo','inputfile',201,'foto este nombre inválido (espacios)','ADD','site_east_photo_name_KO','site_south_photo_name_KO'),
    Array('ubicacion','site_west_photo','inputfile',202,'foto oeste con extensión válida','ADD',true,'msg_exito'),
    Array('ubicacion','site_west_photo','inputfile',203,'foto oeste tipo inválido','ADD','site_west_photo_type_KO','site_north_photo_type_KO'),
    Array('ubicacion','site_west_photo','inputfile',204,'foto oeste sin extensión','ADD','site_west_photo_no_extension_KO','alumnograduacion_fotoacto_no_extension_KO'),
    Array('ubicacion','site_latitud','input',205,'Latitud límite inferior válido','ADD',true,'msg_latitud_-90_aceptada'),
    Array('ubicacion','site_latitud','input',206,'Latitud límite superior válido','ADD',true,'msg_latitud_90_aceptada'),
    Array('ubicacion','site_longitud','input',207,'Longitud límite inferior válido','ADD',true,'msg_longitud_-180_aceptada'),
    Array('ubicacion','site_longitud','input',208,'Longitud límite superior válido','ADD',true,'msg_longitud_180_aceptada'),
    Array('ubicacion','site_provider_login','input',209,'Provider login demasiado largo','ADD','site_provider_login_maxlen_KO','site_provider_login_maxlen_KO')
);

let ubicacion_tests_fields = Array(
    Array('ubicacion','id_site',183,183,'ADD',[{id_site:'ABC'}],'id_site_not_numeric_KO'),
    Array('ubicacion','site_latitud',184,184,'ADD',[{site_latitud:95.123456}],'site_latitud_range_KO'),
    Array('ubicacion','site_longitud',185,185,'ADD',[{site_longitud:-190.000000}],'site_longitud_range_KO'),
    Array('ubicacion','site_altitude',186,186,'ADD',[{site_altitude:'notanumber'}],'site_altitude_not_numeric_KO'),
    Array('ubicacion','site_locality',187,187,'ADD',[{site_locality:new Array(41).join('x')}],'site_locality_maxlen_KO'),
    Array('ubicacion','site_provider_login',188,188,'ADD',[{site_provider_login:''}],'site_provider_login_empty_KO'),
    Array('ubicacion','site_north_photo',189,189,'ADD',[{site_north_photo:'north.jpg'}],true),
    Array('ubicacion','site_north_photo',189,190,'ADD',[{site_north_photo:'north.bmp'}],'site_north_photo_type_KO'),
    Array('ubicacion','site_south_photo',191,191,'ADD',[{site_south_photo:'mi foto.jpg'}],'site_south_photo_name_KO'),
    Array('ubicacion','site_east_photo',199,199,'ADD',[{site_east_photo:'east.jpg'}],true),
    Array('ubicacion','site_east_photo',200,200,'ADD',[{site_east_photo:'east.bmp'}],'site_east_photo_type_KO'),
    Array('ubicacion','site_east_photo',201,201,'ADD',[{site_east_photo:'mi foto.jpg'}],'site_east_photo_name_KO'),
    Array('ubicacion','site_west_photo',202,202,'ADD',[{site_west_photo:'west.png'}],true),
    Array('ubicacion','site_west_photo',203,203,'ADD',[{site_west_photo:'west.gif'}],'site_west_photo_type_KO'),
    Array('ubicacion','site_west_photo',204,204,'ADD',[{site_west_photo:'west'}],'site_west_photo_no_extension_KO'),
    Array('ubicacion','site_latitud',205,205,'ADD',[{site_latitud:-90.000000}],true),
    Array('ubicacion','site_latitud',206,206,'ADD',[{site_latitud:90.000000}],true),
    Array('ubicacion','site_longitud',207,207,'ADD',[{site_longitud:-180.000000}],true),
    Array('ubicacion','site_longitud',208,208,'ADD',[{site_longitud:180.000000}],true),
    Array('ubicacion','site_provider_login',209,209,'ADD',[{site_provider_login:new Array(31).join('x')}],'site_provider_login_maxlen_KO')
);

// Casos de prueba para ficheros (inputfile) siguiendo formatosPermitidos.txt
let alumnograduacion_tests_files = Array(
    // ADD
    Array('alumnograduacion','alumnograduacion_fotoacto',90,1,'ADD','empty_file',Array({format_name_file:''},{type_file:''},{max_size_file:0}),'alumnograduacion_fotoacto_empty_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',91,2,'ADD','valid_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:5242880}),true),
    Array('alumnograduacion','alumnograduacion_fotoacto',92,3,'ADD','invalid_format_file',Array({format_name_file:'foto.txt'},{type_file:'text/plain'},{max_size_file:200}),'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',93,4,'ADD','oversized_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:6000000}),'alumnograduacion_fotoacto_size_KO'),
    // EDIT
    Array('alumnograduacion','alumnograduacion_fotoacto',90,5,'EDIT','empty_file',Array({format_name_file:''},{type_file:''},{max_size_file:0}),'alumnograduacion_fotoacto_empty_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',91,6,'EDIT','valid_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:5242880}),true),
    Array('alumnograduacion','alumnograduacion_fotoacto',92,7,'EDIT','invalid_format_file',Array({format_name_file:'foto.txt'},{type_file:'text/plain'},{max_size_file:200}),'alumnograduacion_fotoacto_format_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',93,8,'EDIT','oversized_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:6000000}),'alumnograduacion_fotoacto_size_KO')
);

let ubicacion_tests_files = Array(
    // site_north_photo (max_size=3145728, types=jpg|jpeg|png)
    Array('ubicacion','site_north_photo',189,1,'ADD','empty_file',Array({format_name_file:''},{type_file:''},{max_size_file:0}),'site_north_photo_empty_KO'),
    Array('ubicacion','site_north_photo',189,2,'ADD','valid_file',Array({format_name_file:'north.jpg'},{type_file:'image/jpeg'},{max_size_file:3145728}),true),
    Array('ubicacion','site_north_photo',190,3,'ADD','invalid_format_file',Array({format_name_file:'north.bmp'},{type_file:'image/bmp'},{max_size_file:100}),'site_north_photo_type_KO'),
    Array('ubicacion','site_north_photo',189,4,'ADD','oversized_file',Array({format_name_file:'north.jpg'},{type_file:'image/jpeg'},{max_size_file:4000000}),'site_north_photo_size_KO'),
    // site_south_photo
    Array('ubicacion','site_south_photo',191,5,'ADD','invalid_name_file',Array({format_name_file:'mi foto.jpg'},{type_file:'image/jpeg'},{max_size_file:3145728}),'site_south_photo_name_KO'),
    // EDIT variants
    Array('ubicacion','site_east_photo',199,6,'EDIT','valid_file',Array({format_name_file:'east.png'},{type_file:'image/png'},{max_size_file:3145728}),true),
    Array('ubicacion','site_west_photo',202,7,'EDIT','invalid_format_file',Array({format_name_file:'west.gif'},{type_file:'image/gif'},{max_size_file:100}),'site_west_photo_type_KO')
);

let articulo_tests_files = Array(
    // FicheropdfA (types=pdf, max_size=5242880, name regex) 
    Array('articulo','FicheropdfA',176,1,'ADD','empty_file',Array({format_name_file:''},{type_file:''},{max_size_file:0}),'FicheropdfA_empty_KO'),
    Array('articulo','FicheropdfA',176,2,'ADD','valid_file',Array({format_name_file:'documento.pdf'},{type_file:'application/pdf'},{max_size_file:5242880}),true),
    Array('articulo','FicheropdfA',193,3,'ADD','invalid_name_file',Array({format_name_file:'mi archivo.pdf'},{type_file:'application/pdf'},{max_size_file:5242880}),'FicheropdfA_name_KO'),
    Array('articulo','FicheropdfA',194,4,'ADD','oversized_file',Array({format_name_file:'bigfile.pdf'},{type_file:'application/pdf'},{max_size_file:6000000}),'FicheropdfA_size_KO')
);

