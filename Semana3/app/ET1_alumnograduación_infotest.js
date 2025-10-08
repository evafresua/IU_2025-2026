
let alumnograduacion_def_tests = Array(
    // ADD
    Array('alumnograduacion', 'alumnograduacion_login', 1,   'ADD', 'Tamaño < 4', 'alumnograduacion_login_min_size_KO', 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'ADD', 'Tamaño > 15', 'alumnograduacion_login_max_size_KO', 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 'ADD', 'No alfabetico', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'ADD', 'No acentuados', 'alumnograduacion_login_accented_KO', 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 'ADD', 'Válido', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 6, 'ADD', 'Tamaño < 8', 'alumnograduacion_password_min_size_KO', 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 7, 'ADD', 'Tamaño > 64', 'alumnograduacion_password_max_size_KO', 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 8, 'ADD', 'No alfabéticos ni espacios en blanco', 'alumnograduacion_password_alpha_KO', 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 9, 'ADD', 'Tiene acentos ', 'alumnograduacion_password_accented_KO', 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'ADD', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'ADD', 'Tamaño < 2', 'alumnograduacion_nombre_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'ADD', 'Tamaño > 25', 'alumnograduacion_nombre_max_size_KO', 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 13, 'ADD', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'ADD', 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 15, 'ADD', 'Tamaño < 2', 'alumnograduacion_apellidos_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 16, 'ADD', 'Tamaño > 35', 'alumnograduacion_apellidos_max_size_KO', 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'ADD', 'No alfabetico', 'alumnograduacion_apellidos_num_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 18, 'ADD', 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 19, 'ADD', 'Opción no válida', 'alumnograduacion_titulacion_format_KO', 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 20, 'ADD', 'Opción válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 21, 'ADD', 'Tamaño != 9', 'alumnograduacion_dni_min_size_KO', 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 22, 'ADD', 'Solo numeros', 'alumnograduacion_dni_num_KO', 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'ADD', 'Letra invalida', 'alumnograduacion_dni_letter_KO', 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 24, 'ADD', 'Longitud y formato adecuados', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_telefono', 25, 'ADD', 'Tamaño < 9', 'alumnograduacion_telefono_min_size_KO', 'El tamaño debe ser de 9, ahora es menos'),
    Array('alumnograduacion','alumnograduacion_telefono', 26, 'ADD', 'Tamaño > 9', 'alumnograduacion_telefono_max_size_KO', 'El tamaño debe ser de 9, ahora es mas'),
    Array('alumnograduacion','alumnograduacion_telefono', 27, 'ADD', 'No dígitos', 'alumnograduacion_telefono_num_KO', 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 28, 'ADD', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 29, 'ADD', 'Tamaño > 100', 'alumnograduacion_email_max_size_KO', 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 30, 'ADD', 'Tamaño < 0', 'alumnograduacion_direccion_min_size_KO', 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 31, 'ADD', 'No alfanumerico', 'alumnograduacion_direccion_alpha_KO', 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 32, 'ADD', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 33, 'ADD', 'Correo vacío', 'alumnograduacion_email_empty_KO', 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 34, 'ADD', 'Tamaño < 5', 'alumnograduacion_email_min_size_KO', 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 35, 'ADD', 'Tamaño > 100', 'alumnograduacion_email_max_size_KO', 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 36, 'ADD', 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', 'alumnograduacion_email_format_KO', 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 37, 'ADD', 'Caracteres no permitidos', 'alumnograduacion_email_characters_KO', 'Solo puede contener caracteres alfabéticos, números, signos de puntuación, -, _  y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 38, 'ADD', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_login', 39, 'ADD', 'Login solo espacios', 'alumnograduacion_login_empty_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 40, 'ADD', 'Login con espacios en medio', 'alumnograduacion_login_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 41, 'ADD', 'Login con números', 'alumnograduacion_login_num_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 42, 'ADD', 'Login con símbolos', 'alumnograduacion_login_symbols_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 43, 'ADD', 'Login formato correcto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 44, 'ADD', 'Password solo espacios', 'alumnograduacion_password_empty_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 45, 'ADD', 'Password con números', 'alumnograduacion_password_num_KO', 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 46, 'ADD', 'Password con símbolos', 'alumnograduacion_password_symbols_KO', 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 47, 'ADD', 'Password límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_password', 48, 'ADD', 'Password límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 49, 'ADD', 'Nombre solo espacios', 'alumnograduacion_nombre_empty_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 50, 'ADD', 'Nombre con números', 'alumnograduacion_nombre_num_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 51, 'ADD', 'Nombre con símbolos', 'alumnograduacion_nombre_symbols_KO' , 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 52, 'ADD', 'Nombre con ñ válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 53, 'ADD', 'Nombre con acentos válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 54, 'ADD', 'Nombre límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 55, 'ADD', 'Nombre límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 56, 'ADD', 'Apellidos solo espacios', 'alumnograduacion_apellidos_only_spaces_KO', 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 57, 'ADD', 'Apellidos con números', 'alumnograduacion_apellidos_num_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 58, 'ADD', 'Apellidos con símbolos', 'alumnograduacion_apellidos_symbols_KO', 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 59, 'ADD', 'Apellidos múltiples válidos', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 60, 'ADD', 'Apellidos con guión inválido', 'alumnograduacion_apellidos_hypen_KO', 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 61, 'ADD', 'Apellidos límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 62, 'ADD', 'Apellidos límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 63, 'ADD', 'Titulación vacía', 'alumnograduacion_titulacion_empty_KO', 'Debe seleccionar una titulación'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 64, 'ADD', 'Titulación GRIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 65, 'ADD', 'Titulación MEI válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 66, 'ADD', 'Titulación MIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 67, 'ADD', 'Titulación PCEO válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 68, 'ADD', 'Titulación GREI válida', true, 'Éxito'),   

    Array('alumnograduacion', 'alumnograduacion_dni', 69, 'ADD', 'DNI con espacios', 'alumnograduacion_dni_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_dni', 70, 'ADD', 'DNI solo números', 'alumnograduacion_dni_numbers_KO', 'Debe incluir la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 'ADD', 'DNI letra minúscula o mayuscula formato válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 72, 'ADD', 'NIE formato invalido', 'alumnograduacion_nie_format_KO', 'No es formato de nie, es una letra inicial (X, Y o Z), seguida de siete dígitos, y finalmente una letra de control X1234567Z'),
    Array('alumnograduacion', 'alumnograduacion_dni', 73, 'ADD', 'NIE válido formato', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 'ADD', 'Teléfono con espacios', 'alumnograduacion_telefono_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 75, 'ADD', 'Teléfono con guiones', 'alumnograduacion_telefono_hyphens_KO', 'Solo puede contener dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 'ADD', 'Teléfono que empiece por 6', true, 'Éxito'),
    Array('al    umnograduacion', 'alumnograduacion_telefono', 77, 'ADD', 'Teléfono que empiece por 7', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 'ADD', 'Teléfono que empiece por 9', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 79, 'ADD', 'Dirección solo espacios', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 80, 'ADD', 'Dirección con números válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 81, 'ADD', 'Dirección con comas inválida', 'alumnograduacion_direccion_format_KO', 'Sin las comas porfavor'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 82, 'ADD', 'Dirección límite máximo exacto', true, 'Éxito'),
    // https://snov.io/knowledgebase/what-is-a-valid-email-address-format/
    Array('alumnograduacion', 'alumnograduacion_email', 83, 'ADD', 'Email sin @ inválido', 'alumnograduacion_email_no_at_KO', 'Debe contener @'),
    Array('alumnograduacion', 'alumnograduacion_email', 84, 'ADD', 'Email sin dominio inválido', 'alumnograduacion_email_no_domain_KO', 'Formato de dominio incorrecto'),
    Array('alumnograduacion', 'alumnograduacion_email', 85, 'ADD', 'Email múltiples @ inválido', 'alumnograduacion_email_multiple_at_KO', 'Solo puede contener un @'),
    Array('alumnograduacion', 'alumnograduacion_email', 86, 'ADD', 'Email con subdominios válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 87, 'ADD', 'Email con dominio y subdominios con longitud inadecuada', 'alumnograduacion_email_domain_format_KO', 'Debe usarse un dominio valido'),
    Array('alumnograduacion', 'alumnograduacion_email', 88, 'ADD', 'Puede contener caracteres especiales . - _ pero nunca al principio o al final', 'alumnograduacion_email_special_char_KO', 'Los caracteres especiales permitidos nunca ban al principio o al final. (. - _)'),
    Array('alumnograduacion', 'alumnograduacion_email', 89, 'ADD', 'Caracteres especiales bien colocados', true, 'Éxito'),
    //Tipos mime permitidos: image/jpeg, image/png
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 90, 'ADD', 'Foto vacía inválida', 'alumnograduacion_fotoacto_empty_KO', 'Campo obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 91, 'ADD', 'Foto con extensión jpg válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 92, 'ADD', 'Foto con caracteres invalidos', 'alumnograduacion_fotoacto_invalid_characters_KO', 'Caracter inválido'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 93, 'ADD', 'Foto con espacios inválida', 'alumnograduacion_fotoacto_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 94, 'ADD', 'Foto sin extensión válida', 'alumnograduacion_fotoacto_no_extension_KO', 'Debe incluir extensión válida'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 95, 'EDIT', 'Tamaño < 4', 'alumnograduacion_login_too_short_KO', 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 96, 'EDIT', 'Tamaño > 15', 'alumnograduacion_login_too_long_KO', 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 97, 'EDIT', 'No alfabetico', 'alumnograduacion_login_not_alphabetic_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 98, 'EDIT', 'Tiene acentos ', 'alumnograduacion_login_has_accents_KO', 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 99, 'EDIT', 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 100, 'EDIT', 'Tamaño < 8', 'alumnograduacion_password_too_short_KO', 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 101, 'EDIT', 'Tamaño > 64', 'alumnograduacion_password_too_long_KO', 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 102, 'EDIT', 'No alfabéticos ni espacios en blanco', 'alumnograduacion_password_not_alphabetic_KO', 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 103, 'EDIT', 'Tiene acentos ', 'alumnograduacion_password_has_accents_KO', 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 104, 'EDIT', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 105, 'EDIT', 'Tamaño < 2', 'alumnograduacion_nombre_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 106, 'EDIT', 'Tamaño > 25', 'alumnograduacion_nombre_max_size_KO', 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 107, 'EDIT', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 108, 'EDIT', 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 109, 'EDIT', 'Tamaño < 2', 'alumnograduacion_apellidos_min_size_KO', 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 110, 'EDIT', 'Tamaño > 35', 'alumnograduacion_apellidos_max_size_KO', 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 111, 'EDIT', 'No alfabetico', 'alumnograduacion_apellidos_format_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 112, 'EDIT', 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 113, 'EDIT', 'Opción no válida', 'alumnograduacion_titulacion_invalid_KO', 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 114, 'EDIT', 'Titulación GRIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 115, 'EDIT', 'Titulación MEI válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 116, 'EDIT', 'Titulación MIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 117, 'EDIT', 'Titulación PCEO válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 118, 'EDIT', 'Titulación GREI válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 119, 'EDIT', 'Tamaño != 9', 'alumnograduacion_dni_min_size_KO', 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 120, 'EDIT', 'Son 8 numeros y una letra', 'alumnograduacion_dni_format_KO', 'No se ha introducido en el formato correcto, son 8 numeros seguidos de una letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 121, 'EDIT', 'Letra invalida', 'alumnograduacion_dni_invalid_letter_KO', 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 122, 'EDIT', 'Longitud y formato adecuados', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_telefono', 123, 'EDIT', 'Tamaño < 9', 'alumnograduacion_telefono_min_size_KO', 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 124, 'EDIT', 'Tamaño > 9', 'alumnograduacion_telefono_max_size_KO', 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 125, 'EDIT', 'No dígitos', 'alumnograduacion_telefono_format_KO', 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 126, 'EDIT', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 128, 'EDIT', 'Tamaño > 100', 'alumnograduacion_email_too_long_KO', 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 129, 'EDIT', 'Tamaño < 0', 'alumnograduacion_direccion_too_short_KO', 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 130, 'EDIT', 'No alfanumerico', 'alumnograduacion_direccion_not_alphanumeric_KO', 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 131, 'EDIT', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 132, 'EDIT', 'Correo vacío', 'alumnograduacion_email_empty_KO', 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 133, 'EDIT', 'Tamaño < 5', 'alumnograduacion_email_min_size_KO', 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 134, 'EDIT', 'Tamaño > 100', 'alumnograduacion_email_max_size_KO', 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 135, 'EDIT', 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', 'alumnograduacion_email_format_KO', 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 136, 'EDIT', 'Caracteres no permitidos', 'alumnograduacion_email_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 137, 'EDIT', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),
    // Tipos mime permitidos: image/jpeg, image/png
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 132, 'EDIT', 'Foto vacía válida', true, 'Campo opcional'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 133, 'EDIT', 'Foto con formato jpg válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 134, 'EDIT', 'Foto con caracteres no válidos', 'alumnograduacion_fotoacto_invalid_characters_KO', 'Caracteres invalidos'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 135, 'EDIT', 'Foto con espacios inválida', 'alumnograduacion_fotoacto_invalid_spaces_KO', 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 136, 'EDIT', 'Foto sin extensión inválida', 'alumnograduacion_fotoacto_invalid_no_extension_KO', 'Debe incluir extensión válida'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_login', 137, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_login', 138, 'SEARCH', 'Búsqueda por login exacto', true, 'Se encuentra el usuario por login exacto'),
    Array('alumnograduacion', 'alumnograduacion_login', 139, 'SEARCH', 'Búsqueda por login parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_login', 140, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_password', 141, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_password', 142, 'SEARCH', 'Búsqueda por password parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_password', 143, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_password_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos y espacios sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 144, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 145, 'SEARCH', 'Búsqueda por nombre parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 146, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_nombre_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 147, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 148, 'SEARCH', 'Búsqueda por apellidos parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 149, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_apellidos_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 150, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 151, 'SEARCH', 'Búsqueda por titulacion válida', true, 'Se encuentra usuario por titulacion válida'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 152, 'SEARCH', 'Búsqueda por titulacion no válida', 'alumnograduacion_titulacion_format_KO', 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),

    Array('alumnograduacion', 'alumnograduacion_dni', 153, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_dni', 154, 'SEARCH', 'Búsqueda por DNI exacto', true, 'Se encuentra el usuario por DNI exacto'),
    Array('alumnograduacion', 'alumnograduacion_dni', 155, 'SEARCH', 'Búsqueda por DNI parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_dni', 156, 'SEARCH', 'Búsqueda con longitud excesiva', 'alumnograduacion_dni_max_KO', 'Formato nif o nie incorrecto'),
    Array('alumnograduacion', 'alumnograduacion_dni', 157, 'SEARCH', 'Búsqueda con formato incorrecto', 'alumnograduacion_dni_format_KO', 'Formato nif o nie incorrecto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 158, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 159, 'SEARCH', 'Búsqueda por teléfono exacto', true, 'Se encuentra el usuario por teléfono exacto'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 160, 'SEARCH', 'Búsqueda por teléfono parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 161, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_telefono_invalid_characters_KO', 'Solo puede contener dígitos'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 162, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 163, 'SEARCH', 'Búsqueda por dirección parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 164, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_direccion_invalid_characters_KO', 'Solo puede contener caracteres alfanuméricos con acentos y ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_email', 165, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_email', 166, 'SEARCH', 'Búsqueda por email exacto', true, 'Se encuentra el usuario por email exacto'),
    Array('alumnograduacion', 'alumnograduacion_email', 167, 'SEARCH', 'Búsqueda por email parcial', true, 'Se encuentran usuarios por coincidencia parcial'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 168, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 169, 'SEARCH', 'Búsqueda por nombre de foto exacto', true, 'Se encuentra la foto por nombre exacto'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 170, 'SEARCH', 'Búsqueda por nombre de foto parcial', true, 'Se encuentran fotos por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 171, 'SEARCH', 'Búsqueda con caracteres no permitidos', 'alumnograduacion_fotoacto_invalid_characters_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ ni espacios y punto')

   );

let alumnograduacion_tests_fields = Array(
    // ADD
    Array('alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',4,4,'ADD',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_accented_KO'),
    Array('alumnograduacion','alumnograduacion_login',5,5,'ADD',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',6,6,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',7,7,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',8,8,'ADD',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_alpha_KO'),
    Array('alumnograduacion','alumnograduacion_password',9,9,'ADD',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_accented_KO'),
    Array('alumnograduacion','alumnograduacion_password',10,10,'ADD',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',11,11,'ADD',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',12,12,'ADD',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',13,13,'ADD',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',14,14,'ADD',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',15,15,'ADD',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',16,16,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',17,17,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_num_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',18,18,'ADD',[{alumnograduacion_apellidos:'García López'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',19,19,'ADD',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',20,20,'ADD',[{alumnograduacion_titulacion:'GREI'}],true),

    Array('alumnograduacion','alumnograduacion_dni',21,21,'ADD',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',22,22,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_num_KO'),
    Array('alumnograduacion','alumnograduacion_dni',23,23,'ADD',[{alumnograduacion_dni:'12345678Z'}],'alumnograduacion_dni_letter_KO'),
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
    Array('alumnograduacion', 'alumnograduacion_email', 37, 37 'ADD', [{alumnograduacion_email:'#######mmmm@drtg.nmm'}], 'alumnograduacion_email_characters_KO'),
    Array('alumnograduacion','alumnograduacion_email',38,38,'ADD',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    Array('alumnograduacion','alumnograduacion_login',38,38,'ADD',[{alumnograduacion_login:'    '}],'alumnograduacion_login_only_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_login',39,39,'ADD',[{alumnograduacion_login:'ab cd'}],'alumnograduacion_login_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_login',40,40,'ADD',[{alumnograduacion_login:'abc123'}],'alumnograduacion_login_num_KO'),
    Array('alumnograduacion','alumnograduacion_login',41,41,'ADD',[{alumnograduacion_login:'abc@'}],'alumnograduacion_login_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_login',42,42,'ADD',[{alumnograduacion_login:'abcd'}],true),
    Array('alumnograduacion','alumnograduacion_login',43,43,'ADD',[{alumnograduacion_login:'abcdefghijklmno'}],true),

    Array('alumnograduacion','alumnograduacion_password',44,44,'ADD',[{alumnograduacion_password:'        '}],'alumnograduacion_password_empty_KO'),
    Array('alumnograduacion','alumnograduacion_password',45,45,'ADD',[{alumnograduacion_password:'abc123def'}],'alumnograduacion_password_num_KO'),
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

    Array('alumnograduacion','alumnograduacion_apellidos',56,56,'ADD',[{alumnograduacion_apellidos:'   '}],'alumnograduacion_nombre_empty_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',57,57,'ADD',[{alumnograduacion_apellidos:'García123'}],'alumnograduacion_apellidos_num_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',58,58,'ADD',[{alumnograduacion_apellidos:'García@'}],'alumnograduacion_apellidos_symbols_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',59,59,'ADD',[{alumnograduacion_apellidos:'García López Martínez'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',60,60,'ADD',[{alumnograduacion_apellidos:'García-López'}],'alumnograduacion_apellidos_hyphens_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',61,61,'ADD',[{alumnograduacion_apellidos:'Ga'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',62,62,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghi'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',63,63,'ADD',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',64,64,'ADD',[{alumnograduacion_titulacion:'GRIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',65,65,'ADD',[{alumnograduacion_titulacion:'MEI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',66,66,'ADD',[{alumnograduacion_titulacion:'MIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',67,67,'ADD',[{alumnograduacion_titulacion:'PCEO'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',68,68,'ADD',[{alumnograduacion_titulacion:'GREI'}],true),

    //Revisar formato nie
    Array('alumnograduacion','alumnograduacion_dni',69,69,'ADD',[{alumnograduacion_dni:'12345678 A'}],'alumnograduacion_dni_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_dni',70,70,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni',71,71,'ADD',[{alumnograduacion_dni:'12345678z'}],true),
    Array('alumnograduacion','alumnograduacion_dni',72,72,'ADD',[{alumnograduacion_dni:'X1234567'}],'alumnograduacion_nie_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',73,73,'ADD',[{alumnograduacion_dni:' X1234567Z'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',74,74,'ADD',[{alumnograduacion_telefono:'123 456 789'}],'alumnograduacion_telefono_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',75,75,'ADD',[{alumnograduacion_telefono:'123-456-789'}],'alumnograduacion_telefono_hyphens_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',76,76,'ADD',[{alumnograduacion_telefono:'612345678'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',77,77,'ADD',[{alumnograduacion_telefono:'712345678'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',78,78,'ADD',[{alumnograduacion_telefono:'912345678'}],true),

    Array('alumnograduacion','alumnograduacion_direccion',79,79,'ADD',[{alumnograduacion_direccion:'     '}],true),
    Array('alumnograduacion','alumnograduacion_direccion',80,80,'ADD',[{alumnograduacion_direccion:'Calle Mayor 123'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',81,81,'ADD',[{alumnograduacion_direccion:'Av. de la Constitución, 45'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',82,82,'ADD',[{alumnograduacion_direccion:'Calle muy larga con muchos caracteres para superar el limite de cien caracteres permitidos'}],true),

    Array('alumnograduacion','alumnograduacion_email',83,83,'ADD',[{alumnograduacion_email:'usuariodominio.com'}],'alumnograduacion_email_no_at_KO'),
    Array('alumnograduacion','alumnograduacion_email',84,84,'ADD',[{alumnograduacion_email:'usuario@'}],'alumnograduacion_email_no_domain_KO'),
    Array('alumnograduacion','alumnograduacion_email',85,85,'ADD',[{alumnograduacion_email:'us@er@dominio.com'}],'alumnograduacion_email_multiple_at_KO'),
    Array('alumnograduacion','alumnograduacion_email',86,86,'ADD',[{alumnograduacion_email:'usuario@mail.dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',87,87,'ADD',[{alumnograduacion_email:'usuario123@d.com'}],'alumnograduacion_email_domain_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',88,88,'ADD',[{alumnograduacion_email:'-a@usuario.c'}],'alumnograduacion_email_special_char_KO'),
    Array('alumnograduacion','alumnograduacion_email',89,89,'ADD',[{alumnograduacion_email:'usu_ario@b.co'}],true),

    Array('alumnograduacion','alumnograduacion_fotoacto',90,90,'ADD',[{alumnograduacion_fotoacto:''}],'alumnograduacion_fotoacto_empty_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',91,91,'ADD',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',92,92,'ADD',[{alumnograduacion_fotoacto:'#@~kn.jpg'}],'alumnograduacion_fotoacto_invalid_characters_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',93,93,'ADD',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',94,94,'ADD',[{alumnograduacion_fotoacto:'imagen'}],'alumnograduacion_fotoacto_no_extension_KO'),

    // EDIT
    Array('alumnograduacion','alumnograduacion_login',95,95,'EDIT',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',96,96,'EDIT',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',97,97,'EDIT',[{alumnograduacion_login:'abc1'}],'alumnograduacion_password_not_alphabetic_KO'),
    Array('alumnograduacion','alumnograduacion_login',98,98,'EDIT',[{alumnograduacion_login:'ábc'}],'alumnograduacion_password_has_accents_KO'),
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
    Array('alumnograduacion','alumnograduacion_titulacion',114,114,'EDIT',[{alumnograduacion_titulacion:'GRIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',115,115,'EDIT',[{alumnograduacion_titulacion:'MEI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',116,116,'EDIT',[{alumnograduacion_titulacion:'MIA'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',117,117,'EDIT',[{alumnograduacion_titulacion:'PCEO'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',118,118,'EDIT',[{alumnograduacion_titulacion:'GREI'}],true),


    Array('alumnograduacion','alumnograduacion_dni',119,119,'EDIT',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',120,120,'EDIT',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',121,121,'EDIT',[{alumnograduacion_dni:'12345678Z'}],'alumnograduacion_dni_invalid_letter_KO'),
    Array('alumnograduacion','alumnograduacion_dni',122,122,'EDIT',[{alumnograduacion_dni:'12345678A'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',123,123,'EDIT',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',124,124,'EDIT',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',125,125,'EDIT',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',126,126,'EDIT',[{alumnograduacion_telefono:'123456789'}],true),

    Array('alumnograduacion','alumnograduacion_email',128,128,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',129,129,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',130,130,'EDIT',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',131,131,'EDIT',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_email',132,132,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email',133,133,'EDIT',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',134,134,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',135,135,'EDIT',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',136,136,'EDIT',[{alumnograduacion_email:'usu#ario@dominio.com'}],'alumnograduacion_email_invalid_characters_KO'),
    Array('alumnograduacion','alumnograduacion_email',137,137,'EDIT',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    // Tipos mime
    Array('alumnograduacion','alumnograduacion_fotoacto',132,132,'EDIT',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',133,133,'EDIT',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',134,134,'EDIT',[{alumnograduacion_fotoacto:'#@~kn.jpg'}],'alumnograduacion_fotoacto_invalid_characters_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',135,135,'EDIT',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',136,136,'EDIT',[{alumnograduacion_fotoacto:'imagen'}],'alumnograduacion_fotoacto_no_extension_KO'),
    
    // SEARCH
    Array('alumnograduacion','alumnograduacion_login',137,137,'SEARCH',[{alumnograduacion_login:''}],true),
    Array('alumnograduacion','alumnograduacion_login',138,138,'SEARCH',[{alumnograduacion_login:'abcd'}],true),
    Array('alumnograduacion','alumnograduacion_login',139,139,'SEARCH',[{alumnograduacion_login:'ab'}],true),
    Array('alumnograduacion','alumnograduacion_login',140,140,'SEARCH',[{alumnograduacion_login:'abcñ'}],'alumnograduacion_login_format_KO'),

    Array('alumnograduacion','alumnograduacion_password',141,141,'SEARCH',[{alumnograduacion_password:''}],true),
    Array('alumnograduacion','alumnograduacion_password',142,142,'SEARCH',[{alumnograduacion_password:'abc'}],true),
    Array('alumnograduacion','alumnograduacion_password',143,143,'SEARCH',[{alumnograduacion_password:'abcñ'}],'alumnograduacion_password_format_KO'),

    Array('alumnograduacion','alumnograduacion_nombre',144 ,144,'SEARCH',[{alumnograduacion_nombre:''}],true),
    Array('alumnograduacion','alumnograduacion_nombre',145,145,'SEARCH',[{alumnograduacion_nombre:'José'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',146,146,'SEARCH',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),

    Array('alumnograduacion','alumnograduacion_apellidos',147,147,'SEARCH',[{alumnograduacion_apellidos:''}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',148,148,'SEARCH',[{alumnograduacion_apellidos:'García'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',149,149,'SEARCH',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),

    Array('alumnograduacion','alumnograduacion_titulacion',150,150,'SEARCH',[{alumnograduacion_titulacion:''}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',151,151 ,'SEARCH',[{alumnograduacion_titulacion:'GREI'}],true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 151,152, 'SEARCH', [{alumnograduacion_titulacion:'GREI'}] , true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 151,153, 'SEARCH', [{alumnograduacion_titulacion:'M'}], true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 151,154, 'SEARCH', [{alumnograduacion_titulacion:'MIA'}], true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 151,155, 'SEARCH', [{alumnograduacion_titulacion:'PCEO'}], true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 151,156, 'SEARCH', [{alumnograduacion_titulacion:'GREI'}], true, 'Éxito'),
    Array('alumnograduacion','alumnograduacion_titulacion',152,157,'SEARCH',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),

    Array('alumnograduacion','alumnograduacion_dni',153,158,'SEARCH',[{alumnograduacion_dni:''}],true),
    Array('alumnograduacion','alumnograduacion_dni',154,159,'SEARCH',[{alumnograduacion_dni:'12345678A'}],true),
    Array('alumnograduacion','alumnograduacion_dni',155,160,'SEARCH',[{alumnograduacion_dni:'1234567A'}],true),
    Array('alumnograduacion','alumnograduacion_dni',156,161,'SEARCH',[{alumnograduacion_dni:'128888834567A'}],'alumnograduacion_dni_max_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 157, 162, 'SEARCH', [{alumnograduacion_dni:'12345672aaa34D'}],true, 'alumnograduacion_dni_format_KO'),

    Array('alumnograduacion','alumnograduacion_telefono',158,163,'SEARCH',[{alumnograduacion_telefono:''}],true),
    Array('alumnograduacion','alumnograduacion_telefono',159,164,'SEARCH',[{alumnograduacion_telefono:'123456789'}],true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 160, 165, 'SEARCH', [{alumnograduacion_telefono:'98162'}], true),
    Array('alumnograduacion','alumnograduacion_telefono',161,166,'SEARCH',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',162,167,'SEARCH',[{alumnograduacion_direccion:''}],true),
    Array('alumnograduacion','alumnograduacion_direccion',163,168,'SEARCH',[{alumnograduacion_direccion:'Calle Mayor'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',164,169,'SEARCH',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),

    Array('alumnograduacion','alumnograduacion_email',165,170,'SEARCH',[{alumnograduacion_email:''}],true),
    Array('alumnograduacion','alumnograduacion_email',160,165,'SEARCH',[{alumnograduacion_email:'usuario@dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',161,166,'SEARCH',[{alumnograduacion_email:'usuario@dominio'}],true),

    Array('alumnograduacion','alumnograduacion_fotoacto',162,167,'SEARCH',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',163,168,'SEARCH',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',164,169,'SEARCH',[{alumnograduacion_fotoacto:'.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',165,170,'SEARCH',[{alumnograduacion_fotoacto:'mi@#~foto.jpg'}],'alumnograduacion_fotoacto_invalid_characters_KO')
);

