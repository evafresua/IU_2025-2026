
let alumnograduacion_def_tests = Array(
    // ADD
    Array('alumnograduacion', 'alumnograduacion_login', 1,   'ADD', 'Tamaño < 4', 'alumnograduacion_login_min_size_KO', 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'ADD', 'Tamaño > 15', 'alumnograduacion_login_max_size_KO', 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 'ADD', 'No alfabetico', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'ADD', 'No acentuados', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 'ADD', 'Válido', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 6, 'ADD', 'Tamaño < 8', 'alumnograduacion_password_min_size_KO', 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 7, 'ADD', 'Tamaño > 64', 'alumnograduacion_password_max_size_KO', 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 8, 'ADD', 'No alfabéticos ni espacios en blanco', 'alumnograduacion_password_alpha_KO', 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 9, 'ADD', 'Tiene acentos ', 'alumnograduacion_password_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'ADD', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'ADD', 'Tamaño < 2', 'alumnograduacion_nombre_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'ADD', 'Tamaño > 25', 'alumnograduacion_nombre_max_size_KO', 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 13, 'ADD', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'ADD', 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 15, 'ADD', 'Tamaño < 2', 'alumnograduacion_apellidos_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 16, 'ADD', 'Tamaño > 35', 'alumnograduacion_apellidos_max_size_KO', 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'ADD', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 18, 'ADD', 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 19, 'ADD', 'Opción no válida', 'alumnograduacion_titulacion_format_KO', 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 20, 'ADD', 'Opción válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 21, 'ADD', 'Tamaño != 9', 'alumnograduacion_dni_min_size_KO', 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 22, 'ADD', 'Solo numeros', 'alumnograduacion_dni_no_letter_KO', 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'ADD', 'Letra invalida', true, 'Éxito' ),
    Array('alumnograduacion', 'alumnograduacion_dni', 24, 'ADD', 'Longitud y formato adecuados','dni_validate_KO', 'Formato nif o nie incorrecto, letra y número no se corresponden'),

    Array('alumnograduacion','alumnograduacion_telefono', 25, 'ADD', 'Tamaño < 9', 'alumnograduacion_telefono_min_size_KO', 'El tamaño debe ser de 9, ahora es menos'),
    Array('alumnograduacion','alumnograduacion_telefono', 26, 'ADD', 'Tamaño > 9', 'alumnograduacion_telefono_max_size_KO', 'El tamaño debe ser de 9, ahora es mas'),
    Array('alumnograduacion','alumnograduacion_telefono', 27, 'ADD', 'No dígitos', 'alumnograduacion_telefono_format_KO', 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 28, 'ADD', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    
    //Array('alumnograduacion','alumnograduacion_email', 29, 'ADD', 'Tamaño > 320', 'alumnograduacion_email_max_size_KO', 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 29, 'ADD', 'Tamaño < 0', 'alumnograduacion_direccion_min_size_KO', 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 30, 'ADD', 'No alfanumerico', 'alumnograduacion_direccion_alpha_KO', 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 31, 'ADD', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 32, 'ADD', 'Correo vacío', 'alumnograduacion_email_empty_KO', 'El campo correo electrónico no puede estar vacío'),
    //Array('alumnograduacion','alumnograduacion_email', 34, 'ADD', 'Tamaño < 5', 'alumnograduacion_email_min_size_KO', 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 33, 'ADD', 'Tamaño > 320', 'alumnograduacion_email_max_size_KO', 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 34, 'ADD', 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', 'alumnograduacion_email_format_KO', 'El correo electrónico debe tener un formato válido'),
    //Array('alumnograduacion','alumnograduacion_email', 37, 'ADD', 'Caracteres no permitidos', 'alumnograduacion_email_characters_KO', 'Solo puede contener caracteres alfabéticos, números, signos de puntuación, -, _  y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 35, 'ADD', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_login', 36, 'ADD', 'Login solo espacios', 'alumnograduacion_login_empty_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 37, 'ADD', 'Login con espacios en medio', 'alumnograduacion_login_format_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 38, 'ADD', 'Login con números', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 39, 'ADD', 'Login con símbolos', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos'),
    //Array('alumnograduacion', 'alumnograduacion_login', 43, 'ADD', 'Login formato correcto', true, 'Éxito'),

    //Array('alumnograduacion', 'alumnograduacion_password', 44, 'ADD', 'Password solo espacios', 'alumnograduacion_password_empty_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 40, 'ADD', 'Password con números', 'alumnograduacion_password_format_KO', 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 41, 'ADD', 'Password con símbolos', 'alumnograduacion_password_format_KO', 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 42, 'ADD', 'Password límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_password', 43, 'ADD', 'Password límite máximo exacto', true, 'Éxito'),

    // Array('alumnograduacion', 'alumnograduacion_nombre', 49, 'ADD', 'Nombre solo espacios', 'alumnograduacion_nombre_empty_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 44, 'ADD', 'Nombre con números', 'alumnograduacion_nombre_num_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 45, 'ADD', 'Nombre con símbolos', 'alumnograduacion_nombre_format_KO' , 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 46, 'ADD', 'Nombre con ñ válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 47, 'ADD', 'Nombre con acentos válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 48, 'ADD', 'Nombre límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 49, 'ADD', 'Nombre límite máximo exacto', true, 'Éxito'),

    //Array('alumnograduacion', 'alumnograduacion_apellidos', 56, 'ADD', 'Apellidos solo espacios', 'alumnograduacion_nombre_min_size_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 50, 'ADD', 'Apellidos con números', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 51, 'ADD', 'Apellidos con símbolos', 'alumnograduacion_apellidos_symbols_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 52, 'ADD', 'Apellidos múltiples válidos', true, 'Éxito'),
    //Array('alumnograduacion', 'alumnograduacion_apellidos', 60, 'ADD', 'Apellidos con guión inválido', 'alumnograduacion_apellidos_symbols_KO', 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 53, 'ADD', 'Apellidos límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 54, 'ADD', 'Apellidos límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 55, 'ADD', 'Titulación vacía', 'alumnograduacion_titulacion_min_size_KO', 'Debe seleccionar una titulación'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 56, 'ADD', 'Titulación GRIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 57, 'ADD', 'Titulación MEI válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 58, 'ADD', 'Titulación MIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 59, 'ADD', 'Titulación PCEO válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 60, 'ADD', 'Titulación GREI válida', true, 'Éxito'),

    //Array('alumnograduacion', 'alumnograduacion_dni', 69, 'ADD', 'DNI con espacios', 'alumnograduacion_dni_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 'ADD', 'DNI solo números', 'alumnograduacion_dni_numbers_KO', 'Debe incluir la letra'),
    //Array('alumnograduacion', 'alumnograduacion_dni', 71, 'ADD', 'DNI letra minúscula o mayuscula formato válido', 'alumnograduacion_dni_wrong_letter_case_KO', 'La letra debe ser mayúscula'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 'ADD', 'NIE formato invalido', 'dni_nie_format_KO', 'No es formato de nie, es una letra inicial (X, Y o Z), seguida de siete dígitos, y finalmente una letra de control X1234567Z'),
    Array('alumnograduacion', 'alumnograduacion_dni', 63, 'ADD', 'NIE válido formato', true, 'Éxito'),

    //Array('alumnograduacion', 'alumnograduacion_telefono', 74, 'ADD', 'Teléfono con espacios', 'alumnograduacion_telefono_spaces_KO', 'No puede contener espacios'),
    //Array('alumnograduacion', 'alumnograduacion_telefono', 75, 'ADD', 'Teléfono con guiones', 'alumnograduacion_telefono_hyphens_KO', 'Solo puede contener dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 'ADD', 'Teléfono que empiece por 6', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 65, 'ADD', 'Teléfono que empiece por 7', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 66, 'ADD', 'Teléfono que empiece por 9', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 'ADD', 'Dirección con números válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 68, 'ADD', 'Dirección con comas inválida', 'alumnograduacion_direccion_format_KO', 'Sin las comas porfavor'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 69, 'ADD', 'Dirección límite máximo exacto', true, 'Éxito'),
    // https://snov.io/knowledgebase/what-is-a-valid-email-address-format/
    Array('alumnograduacion', 'alumnograduacion_email', 70, 'ADD', 'Email sin @ inválido', 'alumnograduacion_email_no_at_KO', 'Debe contener @'),
    Array('alumnograduacion', 'alumnograduacion_email', 71, 'ADD', 'Email sin dominio inválido', 'alumnograduacion_email_no_domain_KO', 'Formato de dominio incorrecto'),
    Array('alumnograduacion', 'alumnograduacion_email', 72, 'ADD', 'Email múltiples @ inválido', 'alumnograduacion_email_multiple_at_KO', 'Solo puede contener un @'),
    Array('alumnograduacion', 'alumnograduacion_email', 73, 'ADD', 'Email con subdominios válido', true, 'Éxito'),
    // Array('alumnograduacion', 'alumnograduacion_email', 87, 'ADD', 'Email con dominio y subdominios con longitud inadecuada', 'alumnograduacion_email_domain_format_KO', 'Debe usarse un dominio valido'),
    // Array('alumnograduacion', 'alumnograduacion_email', 88, 'ADD', 'Puede contener caracteres especiales . - _ pero nunca al principio o al final', 'alumnograduacion_email_special_char_KO', 'Los caracteres especiales permitidos nunca ban al principio o al final. (. - _)'),
    Array('alumnograduacion', 'alumnograduacion_email', 74, 'ADD', 'Caracteres especiales bien colocados', true, 'Éxito'),
    //Tipos mime permitidos: image/jpeg, image/png
    
    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 75, 'EDIT', 'Tamaño < 4', 'alumnograduacion_login_min_size_KO', 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 76, 'EDIT', 'Tamaño > 15', 'alumnograduacion_login_max_size_KO', 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 77, 'EDIT', 'No alfabetico', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 78, 'EDIT', 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 79, 'EDIT', 'Tamaño < 8', 'alumnograduacion_password_min_size_KO', 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 80, 'EDIT', 'Tamaño > 64', 'alumnograduacion_password_max_size_KO', 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 81, 'EDIT', 'No alfabéticos ni espacios en blanco', 'alumnograduacion_password_format_KO', 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 82, 'EDIT', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 83, 'EDIT', 'Tamaño < 2', 'alumnograduacion_nombre_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 84, 'EDIT', 'Tamaño > 25', 'alumnograduacion_nombre_max_size_KO', 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 85, 'EDIT', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 86, 'EDIT', 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 87, 'EDIT', 'Tamaño < 2', 'alumnograduacion_apellidos_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 88, 'EDIT', 'Tamaño > 35', 'alumnograduacion_apellidos_max_size_KO', 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 89, 'EDIT', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 90, 'EDIT', 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 91, 'EDIT', 'Opción no válida', 'alumnograduacion_titulacion_invalid_KO', 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 92, 'EDIT', 'Titulación GRIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 93, 'EDIT', 'Titulación MEI válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 94, 'EDIT', 'Titulación MIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 95, 'EDIT', 'Titulación PCEO válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 96, 'EDIT', 'Titulación GREI válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 97, 'EDIT', 'Tamaño != 9', 'alumnograduacion_dni_min_size_KO', 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 98, 'EDIT', 'Son 8 numeros y una letra valida', 'alumnograduacion_dni_no_letter_KO', 'No se ha introducido en el formato correcto, son 8 numeros seguidos de una letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 99, 'EDIT', 'Letra invalida', 'dni_validate_KO', 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 100, 'EDIT', 'Longitud y formato adecuados', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_telefono', 101, 'EDIT', 'Tamaño < 9', 'alumnograduacion_telefono_min_size_KO', 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 102, 'EDIT', 'Tamaño > 9', 'alumnograduacion_telefono_max_size_KO', 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 103, 'EDIT', 'No dígitos', 'alumnograduacion_telefono_format_KO', 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 104, 'EDIT', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),


    Array('alumnograduacion','alumnograduacion_direccion', 105, 'EDIT', 'Tamaño < 0', 'alumnograduacion_direccion_min_size_KO', 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 106, 'EDIT', 'No alfanumerico', 'alumnograduacion_direccion_format_KO', 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 107, 'EDIT', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 108, 'EDIT', 'Tamaño < 5', 'alumnograduacion_email_min_size_KO', 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 109, 'EDIT', 'Tamaño > 100', 'alumnograduacion_email_max_size_KO', 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 110, 'EDIT', 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', 'alumnograduacion_email_format_KO', 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 111, 'EDIT', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),
    

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_login', 112, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_login', 113, 'SEARCH', 'Búsqueda por login exacto', true, 'Se encuentra el usuario por login exacto'),
    Array('alumnograduacion', 'alumnograduacion_login', 114, 'SEARCH', 'Búsqueda por login parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_login', 115, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_password', 116, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_password', 117, 'SEARCH', 'Búsqueda por password parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_password', 120, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_password_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos y espacios sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 121, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 122, 'SEARCH', 'Búsqueda por nombre parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 123, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_nombre_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 124, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 125, 'SEARCH', 'Búsqueda por apellidos parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 126, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_apellidos_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 127, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 128, 'SEARCH', 'Búsqueda por titulacion válida', true, 'Se encuentra usuario por titulacion válida'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 129, 'SEARCH', 'Búsqueda por titulacion no válida', 'alumnograduacion_titulacion_format_KO', 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),

    Array('alumnograduacion', 'alumnograduacion_dni', 130, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_dni', 131, 'SEARCH', 'Búsqueda por DNI exacto', true, 'Se encuentra el usuario por DNI exacto'),
    Array('alumnograduacion', 'alumnograduacion_dni', 132, 'SEARCH', 'Búsqueda por DNI parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_dni', 133, 'SEARCH', 'Búsqueda con longitud excesiva', 'alumnograduacion_dni_max_size_KO', 'Formato nif o nie incorrecto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 134, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 135, 'SEARCH', 'Búsqueda por teléfono exacto', true, 'Se encuentra el usuario por teléfono exacto'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 136, 'SEARCH', 'Búsqueda por teléfono parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 137, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_telefono_invalid_characters_KO', 'Solo puede contener dígitos'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 138, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 139, 'SEARCH', 'Búsqueda por dirección parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 140, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_direccion_invalid_characters_KO', 'Solo puede contener caracteres alfanuméricos con acentos y ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_email', 141, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_email', 142, 'SEARCH', 'Búsqueda por email exacto', true, 'Se encuentra el usuario por email exacto'),
    Array('alumnograduacion', 'alumnograduacion_email', 143, 'SEARCH', 'Búsqueda por email parcial', true, 'Se encuentran usuarios por coincidencia parcial'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 144, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 145, 'SEARCH', 'Búsqueda por nombre de foto exacto', true, 'Se encuentra la foto por nombre exacto'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 146, 'SEARCH', 'Búsqueda por nombre de foto parcial', true, 'Se encuentran fotos por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 147, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_fotoacto_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ ni espacios y punto'),

    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 148, 'ADD', 'Archivo vacío inválido', 'nuevo_fotoacto_empty_ko', 'El campo foto del acto es obligatorio y no puede estar vacío'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 149, 'ADD', 'Archivo JPG válido con tipo MIME correcto', true, 'Archivo subido correctamente'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 150, 'ADD', 'Archivo con tipo MIME no permitido', 'nuevo_fotoacto_format_ko', 'Solo se permiten archivos de imagen (JPEG)'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 151, 'ADD', 'Archivo que supera el tamaño máximo permitido', 'nuevo_fotoacto_size_ko', 'El archivo no puede superar los 200KB de tamaño'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 152, 'EDIT', 'Foto vacía válida', true, 'Campo opcional'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 153, 'EDIT', 'Foto con formato jpg válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 154, 'EDIT', 'Foto con caracteres no válidos', 'alumnograduacion_fotoacto_invalid_characters_KO', 'Caracteres invalidos'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 155, 'EDIT', 'Foto con espacios inválida', 'alumnograduacion_fotoacto_invalid_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 156, 'EDIT', 'Foto sin extensión inválida', 'alumnograduacion_fotoacto_invalid_no_extension_KO', 'Debe incluir extensión válida'),
   );

let alumnograduacion_tests_fields = Array(
    // ADD
    Array('alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',4,4,'ADD',[{alumnograduacion_login:'ábcad'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',5,5,'ADD',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',6,6,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',7,7,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmopqrmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmstuvwxyzabcdefghmmijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',8,8,'ADD',[{alumnograduacion_password:'abcannnna1'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',9,9,'ADD',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',10,10,'ADD',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',11,11,'ADD',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',12,12,'ADD',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',13,13,'ADD',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',14,14,'ADD',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',15,15,'ADD',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',16,16,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',17,17,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',18,18,'ADD',[{alumnograduacion_apellidos:'García López'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',19,19,'ADD',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',20,20,'ADD',[{alumnograduacion_titulacion:'GREI'}],true),

    Array('alumnograduacion','alumnograduacion_dni',21,21,'ADD',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',22,22,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni',23,23,'ADD',[{alumnograduacion_dni:'12345678Z'}],true),
    Array('alumnograduacion','alumnograduacion_dni',24,24,'ADD',[{alumnograduacion_dni:'12345678A'}],'dni_validate_KO'),

    Array('alumnograduacion','alumnograduacion_telefono',25,25,'ADD',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',26,26,'ADD',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'),
     Array('alumnograduacion','alumnograduacion_telefono',26,27,'ADD',[{alumnograduacion_telefono:'123 456 789'}],'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',26,28,'ADD',[{alumnograduacion_telefono:'123-456-789'}],'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',27,29,'ADD',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',28,30,'ADD',[{alumnograduacion_telefono:'123456789'}],true),

    //Array('alumnograduacion','alumnograduacion_email',29,29,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemailaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd@dominio.com'}],'alumnograduacion_email_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',29,31,'ADD',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',30,32,'ADD',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',31,33,'ADD',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_email',32,34,'ADD',[{alumnograduacion_email:''}],'alumnograduacion_email_min_size_KO'),
    //Array('alumnograduacion','alumnograduacion_email',34,34,'ADD',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',33,35,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemailaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',34,36,'ADD',[{alumnograduacion_email:'usuario@l'}],'alumnograduacion_email_format_KO'),
    //Array('alumnograduacion', 'alumnograduacion_email', 37, 37, 'ADD', [{alumnograduacion_email:'#######mmmm@drtg.nmm'}], 'alumnograduacion_email_characters_KO'),
    Array('alumnograduacion','alumnograduacion_email',35,37,'ADD',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    Array('alumnograduacion','alumnograduacion_login',36,38,'ADD',[{alumnograduacion_login:'    '}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',37,39,'ADD',[{alumnograduacion_login:'ab cd'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',38,40,'ADD',[{alumnograduacion_login:'abc123'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',38,41,'ADD',[{alumnograduacion_login:'abc@'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',39,42,'ADD',[{alumnograduacion_login:'abcd'}],true),
    //Array('alumnograduacion','alumnograduacion_login',43,43,'ADD',[{alumnograduacion_login:'abcdefgmno'}],true),

    //Array('alumnograduacion','alumnograduacion_password',44,44,'ADD',[{alumnograduacion_password:'        '}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',40,43,'ADD',[{alumnograduacion_password:'abc123def'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',41,44,'ADD',[{alumnograduacion_password:'abaaaac@def'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',42,45,'ADD',[{alumnograduacion_password:'abcdefgh'}],true),
    Array('alumnograduacion','alumnograduacion_password',43,46,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk'}],true),

    //Array('alumnograduacion','alumnograduacion_nombre',49,49,'ADD',[{alumnograduacion_nombre:'  '}],'alumnograduacion_nombre_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',44,47,'ADD',[{alumnograduacion_nombre:'José123'}],'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',45,48,'ADD',[{alumnograduacion_nombre:'José@'}],'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',46,49,'ADD',[{alumnograduacion_nombre:'Begoña'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',47,50,'ADD',[{alumnograduacion_nombre:'José María'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',48,51,'ADD',[{alumnograduacion_nombre:'Jo'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',49,52,'ADD',[{alumnograduacion_nombre:'abcdefghijklmny'}],true),
    //Array('alumnograduacion','alumnograduacion_apellidos',56,56,'ADD',[{alumnograduacion_apellidos:'   '}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',50,53,'ADD',[{alumnograduacion_apellidos:'García123'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',51,54,'ADD',[{alumnograduacion_apellidos:'García@'}],'alumnograduacion_apellidos_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',51,55,'ADD',[{alumnograduacion_apellidos:'García-López'}],'alumnograduacion_apellidos_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',52,56,'ADD',[{alumnograduacion_apellidos:'García López Martínez'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',53,57,'ADD',[{alumnograduacion_apellidos:'Ga'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',54,58,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghi'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',55,59,'ADD',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',56,60,'ADD',[{alumnograduacion_titulacion:'GRIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',57,61,'ADD',[{alumnograduacion_titulacion:'MEI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',62,62,'ADD',[{alumnograduacion_titulacion:'MIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',63,63,'ADD',[{alumnograduacion_titulacion:'PCEO'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',64,64,'ADD',[{alumnograduacion_titulacion:'GREI'}],true),

    //Revisar formato nie
    //Array('alumnograduacion','alumnograduacion_dni',69,69,'ADD',[{alumnograduacion_dni:'12345678 A'}],'alumnograduacion_max size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',61,65,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni',62,66,'ADD',[{alumnograduacion_dni:'12345678z'}],'dni_nie_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',62,67,'ADD',[{alumnograduacion_dni:'X12345967'}],'dni_nie_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',63,68,'ADD',[{alumnograduacion_dni:' X1234567Z'}],true),

   
    Array('alumnograduacion','alumnograduacion_telefono',64,69,'ADD',[{alumnograduacion_telefono:'612345678'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',65,70,'ADD',[{alumnograduacion_telefono:'712345678'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',66,71,'ADD',[{alumnograduacion_telefono:'912345678'}],true),

    Array('alumnograduacion','alumnograduacion_direccion',67,71,'ADD',[{alumnograduacion_direccion:'Calle Mayor 123'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',68,72,'ADD',[{alumnograduacion_direccion:'Av. de la Constitución, 45'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',69,72,'ADD',[{alumnograduacion_direccion:'Calle muy larga con muchos caracteres para superar el limite de cien caracteres permitidos'}],true),

    Array('alumnograduacion','alumnograduacion_email',70,73,'ADD',[{alumnograduacion_email:'usuariodominio.com'}],'alumnograduacion_email_no_at_KO'),
    Array('alumnograduacion','alumnograduacion_email',71,74,'ADD',[{alumnograduacion_email:'usuario@'}],'alumnograduacion_email_no_domain_KO'),
    Array('alumnograduacion','alumnograduacion_email',72,75,'ADD',[{alumnograduacion_email:'us@er@dominio.com'}],'alumnograduacion_email_multiple_at_KO'),
    Array('alumnograduacion','alumnograduacion_email',73,76,'ADD',[{alumnograduacion_email:'usuario@mail.dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',74,79,'ADD',[{alumnograduacion_email:'usu_ario@b.co'}],true),

    // EDIT
    Array('alumnograduacion','alumnograduacion_login',75,80,'EDIT',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',76,81,'EDIT',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',77,82,'EDIT',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',77,83,'EDIT',[{alumnograduacion_login:'ábca'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',78,84,'EDIT',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',79,85,'EDIT',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password', 80,86,'EDIT',[{alumnograduacion_password:'abcdefghijlllllklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefglllllllllllllllllllllllllllllllllllllhijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',81,87,'EDIT',[{alumnograduacion_password:'abc1sdvfgbhnmrfghj'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',81,88,'EDIT',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',82,89,'EDIT',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',83,90,'EDIT',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',84,91,'EDIT',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',85,92,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',86,93,'EDIT',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',87,94,'EDIT',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',88,95,'EDIT',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',89,96,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',90,97,'EDIT',[{alumnograduacion_apellidos:'García López'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',91,98,'EDIT',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',92,99,'EDIT',[{alumnograduacion_titulacion:'GRIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',93,100,'EDIT',[{alumnograduacion_titulacion:'MEI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',94,101,'EDIT',[{alumnograduacion_titulacion:'MIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',95,102,'EDIT',[{alumnograduacion_titulacion:'PCEO'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',96,103,'EDIT',[{alumnograduacion_titulacion:'GREI'}],true),


    Array('alumnograduacion','alumnograduacion_dni',97,104,'EDIT',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',98,105,'EDIT',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni',99,106,'EDIT',[{alumnograduacion_dni:'12345678A'}],'dni_validate_KO'),
    Array('alumnograduacion','alumnograduacion_dni',100,107,'EDIT',[{alumnograduacion_dni:'12345678Z'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',101,108,'EDIT',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',102,109,'EDIT',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',103,110,'EDIT',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',104,111,'EDIT',[{alumnograduacion_telefono:'123456789'}],true),


    Array('alumnograduacion','alumnograduacion_direccion',105,112,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',106,113,'EDIT',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',107,114,'EDIT',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_email',108,115,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',109,116,'EDIT',[{alumnograduacion_email:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaausuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',110,117,'EDIT',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',111,118,'EDIT',[{alumnograduacion_email:'usu#ario@dominio.com'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',112,119,'EDIT',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    
    // SEARCH
    Array('alumnograduacion','alumnograduacion_login',113,120,'SEARCH',[{alumnograduacion_login:''}],true),
    Array('alumnograduacion','alumnograduacion_login',114,121,'SEARCH',[{alumnograduacion_login:'abcd'}],true),
    Array('alumnograduacion','alumnograduacion_login',115,122,'SEARCH',[{alumnograduacion_login:'ab'}],true),
    Array('alumnograduacion','alumnograduacion_login',116,123,'SEARCH',[{alumnograduacion_login:'abcñ'}],'alumnograduacion_login_format_KO'),

    Array('alumnograduacion','alumnograduacion_password',116,124,'SEARCH',[{alumnograduacion_password:''}],true),
    Array('alumnograduacion','alumnograduacion_password',117,125,'SEARCH',[{alumnograduacion_password:'abc'}],true),
    Array('alumnograduacion','alumnograduacion_password',120,126,'SEARCH',[{alumnograduacion_password:'abcñ'}],'alumnograduacion_password_format_KO'),

    Array('alumnograduacion','alumnograduacion_nombre',121 ,127,'SEARCH',[{alumnograduacion_nombre:''}],true),
    Array('alumnograduacion','alumnograduacion_nombre',122,128,'SEARCH',[{alumnograduacion_nombre:'José'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',123,129,'SEARCH',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),

    Array('alumnograduacion','alumnograduacion_apellidos',124,130,'SEARCH',[{alumnograduacion_apellidos:''}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',125,131,'SEARCH',[{alumnograduacion_apellidos:'García'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',126,132,'SEARCH',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),

    Array('alumnograduacion','alumnograduacion_titulacion',127,133,'SEARCH',[{alumnograduacion_titulacion:''}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',128,134 ,'SEARCH',[{alumnograduacion_titulacion:'GREI'}],true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 128,135, 'SEARCH', [{alumnograduacion_titulacion:'GREI'}] , true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 128,136, 'SEARCH', [{alumnograduacion_titulacion:'MEI'}], true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 128,137, 'SEARCH', [{alumnograduacion_titulacion:'MIA'}], true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 128,138, 'SEARCH', [{alumnograduacion_titulacion:'PCEO'}], true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 128,138, 'SEARCH', [{alumnograduacion_titulacion:'GREI'}], true, 'Éxito'),
    Array('alumnograduacion','alumnograduacion_titulacion',129,139,'SEARCH',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),

    Array('alumnograduacion','alumnograduacion_dni',130,140,'SEARCH',[{alumnograduacion_dni:''}],true),
    Array('alumnograduacion','alumnograduacion_dni',131,141,'SEARCH',[{alumnograduacion_dni:'12345678A'}],true),
    Array('alumnograduacion','alumnograduacion_dni',132,142,'SEARCH',[{alumnograduacion_dni:'1234567A'}],true),
    Array('alumnograduacion','alumnograduacion_dni',133,143,'SEARCH',[{alumnograduacion_dni:'128888834567A'}],'alumnograduacion_dni_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_telefono',134,144,'SEARCH',[{alumnograduacion_telefono:''}],true),
    Array('alumnograduacion','alumnograduacion_telefono',135,145,'SEARCH',[{alumnograduacion_telefono:'123456789'}],true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 136, 146, 'SEARCH', [{alumnograduacion_telefono:'98162'}], true),
    Array('alumnograduacion','alumnograduacion_telefono',137,147,'SEARCH',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',138,148,'SEARCH',[{alumnograduacion_direccion:''}],true),
    Array('alumnograduacion','alumnograduacion_direccion',139,149,'SEARCH',[{alumnograduacion_direccion:'Calle Mayor'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',140,150,'SEARCH',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),

    Array('alumnograduacion','alumnograduacion_email',141,151,'SEARCH',[{alumnograduacion_email:''}],true),
    Array('alumnograduacion','alumnograduacion_email',142,152,'SEARCH',[{alumnograduacion_email:'usuario@dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',143,153,'SEARCH',[{alumnograduacion_email:'usuario@dominio'}],true),

    Array('alumnograduacion','alumnograduacion_fotoacto',144,154,'SEARCH',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',145,155,'SEARCH',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',146,156,'SEARCH',[{alumnograduacion_fotoacto:'.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',147,157,'SEARCH',[{alumnograduacion_fotoacto:'mi@#~foto.jpg'}],'alumnograduacion_fotoacto_invalid_characters_KO')

    );

let alumnograduacion_tests_files = Array(
    //Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',148,1,'ADD','empty_file',Array({format_name_file:''},{type_file:''},{max_size_file:200}),'alumnograduacion_fotoacto_empty_KO'),
    Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',149,2,'ADD','valid_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:200}),true),
    Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',150,3,'ADD','invalid_format_file',Array({format_name_file:'foto.txt'},{type_file:'text/plain'},{max_size_file:200}),'nuevo_fotoacto_format_ko'),
    Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',151,4,'ADD','oversized_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:250}),'alumnograduacion_fotoacto_size_KO'),
    //Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',152,5,'EDIT','empty_file',Array({format_name_file:''},{type_file:''},{max_size_file:200}),'alumnograduacion_fotoacto_empty_KO'),
    Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',153,6,'EDIT','valid_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:200}),true),
    Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',154,7,'EDIT','invalid_format_file',Array({format_name_file:'foto.txt'},{type_file:'text/plain'},{max_size_file:200}),'nuevo_fotoacto_format_ko'),
    Array('alumnograduacion','nuevo_alumnograduacion_fotoacto',155,8,'EDIT','oversized_file',Array({format_name_file:'foto.jpg'},{type_file:'image/jpeg'},{max_size_file:250}),'alumnograduacion_fotoacto_size_KO')
);