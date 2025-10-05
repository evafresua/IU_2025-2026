let alumnograduacion_def_tests = Array(
    // ADD
    Array('alumnograduacion', 'alumnograduacion_login', 1, 'Tamaño < 4', 'ADD', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'Tamaño > 15', 'ADD', false, 'El tamaño debe ser de máximo 15'),
    //Array('alumnograduacion', 'alumnograduacion_login', 3, 'ADD', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'Tiene acentos', 'ADD', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 5,  'Tamaño entre 4 y 15 y solo caracteres alfabéticos', 'ADD',true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 6,'Tamaño < 8', 'ADD',  false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 7,  'Tamaño > 64', 'ADD', false, 'El tamaño debe ser de máximo 64 caracteres'),
   //Array('alumnograduacion', 'alumnograduacion_password', 8, 'ADD', 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    //Array('alumnograduacion', 'alumnograduacion_password', 9, 'ADD', 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'ADD', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'ADD', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'Tamaño < 2', 'ADD', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'Tamaño > 25', 'ADD', false, 'El tamaño debe ser de máximo 25'),
    //Array('alumnograduacion', 'alumnograduacion_apellidos', 13, 'No alfabetico', 'ADD', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 15, 'Tamaño < 2', 'ADD', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 16, 'Tamaño > 35', 'ADD', false, 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'No alfabetico', 'ADD', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 18, 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', 'ADD', true, 'Éxito'),
    //Array('alumnograduacion', 'alumnograduacion_titulacion', 19, 'Opción no válida, o no seleccionada', 'ADD', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 20, 'Opción válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 21, 'Tamaño != 9', 'ADD', false, 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 22, 'Solo numeros', 'ADD', false, 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'Letra invalida', 'ADD', false, 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 24, 'Longitud y formato adecuados', 'ADD', true, 'Éxito'),
    Array('alumnograduacion','alumnograduacion_telefono', 25, 'Tamaño != 9', 'ADD', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 26, 'No dígitos', 'ADD', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 27, 'Tamaño = 9 y solo dígitos', 'ADD', true, 'Éxito'),
    Array('alumnograduacion','alumnograduacion_email', 28, 'Tamaño > 100', 'ADD', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_direccion', 29, 'Tamaño < 0', 'ADD', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 30, 'No alfanumerico', 'ADD', false, 'alfanuméricos con acentos y ñ y espacios'),

    Array('alumnograduacion','alumnograduacion_email', 28, 'ADD', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 29, 'ADD', 'Tamaño < 0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 30, 'ADD', 'No alfanumerico', false, 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 31, 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', 'ADD', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 32, 'Correo vacío', 'ADD', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 33, 'Tamaño < 5', 'ADD', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 34, 'Tamaño > 100', 'ADD', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 35, 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', 'ADD', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 36, 'Caracteres no permitidos', 'ADD', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 37, 'Tamaño entre 6 y 100 y formato correcto', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_login', 38, 'Login solo espacios', 'ADD', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 39, 'Login con espacios en medio', 'ADD', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 40, 'Login con números', 'ADD', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 41, 'Login con símbolos', 'ADD', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 42, 'Login límite mínimo exacto', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_login', 43, 'Login límite máximo exacto', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 44, 'Password solo espacios', 'ADD', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 45, 'Password con números', 'ADD', false, 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 46, 'Password con símbolos', 'ADD', false, 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 47, 'Password límite mínimo exacto', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_password', 48, 'Password límite máximo exacto', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 49, 'Nombre solo espacios', 'ADD', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 50, 'Nombre con números', 'ADD', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 51, 'Nombre con símbolos', 'ADD', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 52, 'Nombre con ñ válido', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 53, 'Nombre con acentos válido', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 54, 'Nombre límite mínimo exacto', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 55, 'Nombre límite máximo exacto', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 56, 'Apellidos solo espacios', 'ADD', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 57, 'Apellidos con números', 'ADD', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 58, 'Apellidos con símbolos', 'ADD', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 59, 'Apellidos múltiples válidos', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 60, 'Apellidos con guión válido', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 61, 'Apellidos límite mínimo exacto', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 62, 'Apellidos límite máximo exacto', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 63, 'Titulación vacía', 'ADD', false, 'Debe seleccionar una titulación'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 64, 'Titulación GRIA válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 65, 'Titulación MEI válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 66, 'Titulación MIA válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 67, 'Titulación PCEO válida', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 68, 'DNI con espacios', 'ADD', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 'DNI solo números', 'ADD', false, 'Debe incluir la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 70, 'DNI letra minúscula válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 71, 'NIE válido formato X', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 72, 'NIE válido formato Y', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 73, 'NIE válido formato Z', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 'Teléfono con espacios', 'ADD', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 75, 'Teléfono con guiones', 'ADD', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 'Teléfono que empiece por 6', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 77, 'Teléfono que empiece por 7', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 'Teléfono que empiece por 9', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 79, 'Dirección solo espacios', 'ADD', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 80, 'Dirección con números válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 81, 'Dirección con comas válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 82, 'Dirección límite máximo exacto', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_email', 83, 'Email sin @ inválido', 'ADD', false, 'Debe contener @'),
    Array('alumnograduacion', 'alumnograduacion_email', 84, 'Email sin dominio inválido', 'ADD', false, 'Formato de dominio incorrecto'),
    Array('alumnograduacion', 'alumnograduacion_email', 85, 'Email múltiples @ inválido', 'ADD', false, 'Solo puede contener un @'),
    Array('alumnograduacion', 'alumnograduacion_email', 86, 'Email con subdominios válido', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 87, 'Email con números válido', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 88, 'Email límite mínimo exacto', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 89, 'Email límite máximo exacto', 'ADD', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 90, 'Foto vacía válida', 'ADD', true, 'Campo opcional'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 91, 'Foto con extensión jpg válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 92, 'Foto con extensión png válida', 'ADD', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 93, 'Foto con espacios inválida', 'ADD', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 94, 'Foto sin extensión inválida', 'ADD', false, 'Debe incluir extensión válida'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 95, 'Tamaño < 4', 'EDIT', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 96, 'Tamaño > 15', 'EDIT', false, 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 97, 'No alfabetico', 'EDIT', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 98, 'Tiene acentos ', 'EDIT', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 99, 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 100, 'Tamaño < 8', 'EDIT', false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 101, 'Tamaño > 64', 'EDIT', false, 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 102, 'No alfabéticos ni espacios en blanco', 'EDIT', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 103, 'Tiene acentos ', 'EDIT', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 104, 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 105, 'Tamaño < 2', 'EDIT', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 106, 'Tamaño > 25', 'EDIT', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 107, 'No alfabetico', 'EDIT', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 108, 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 109, 'Tamaño < 2', 'EDIT', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 110, 'Tamaño > 35', 'EDIT', false, 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 111, 'No alfabetico', 'EDIT', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 112, 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 113, 'Opción no válida', 'EDIT', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 114, 'Opción válida', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 115, 'Tamaño != 9', 'EDIT', false, 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 116, 'Solo numeros', 'EDIT', false, 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 117, 'Letra invalida', 'EDIT', false, 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 118, 'Longitud y formato adecuados', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_telefono', 119, 'Tamaño != 9', 'EDIT', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 120, 'No dígitos', 'EDIT', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 121, 'Tamaño = 9 y solo dígitos', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 122, 'Tamaño > 100', 'EDIT', false, 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 123, 'Tamaño < 0', 'EDIT', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 124, 'No alfanumerico', 'EDIT', false, 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 125, 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', 'EDIT', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 126, 'Correo vacío', 'EDIT', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 127, 'Tamaño < 5', 'EDIT', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 128, 'Tamaño > 100', 'EDIT', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 129, 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', 'EDIT', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 130, 'Caracteres no permitidos', 'EDIT', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 131, 'Tamaño entre 6 y 100 y formato correcto', 'EDIT', true, 'Éxito'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_login', 132, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_login', 133, 'Búsqueda por login exacto', 'SEARCH', true, 'Se encuentra el usuario por login exacto'),
    Array('alumnograduacion', 'alumnograduacion_login', 134, 'Búsqueda por login parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_login', 135, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_password', 136, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_password', 137, 'Búsqueda por password parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_password', 138, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener caracteres alfabéticos y espacios sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 139, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 140, 'Búsqueda por nombre parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 141, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 142, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 143, 'Búsqueda por apellidos parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 144, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 145, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 146, 'Búsqueda por titulacion válida', 'SEARCH', true, 'Se encuentra usuario por titulacion válida'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 147, 'Búsqueda por titulacion no válida', 'SEARCH', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),

    Array('alumnograduacion', 'alumnograduacion_dni', 148, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_dni', 149, 'Búsqueda por DNI exacto', 'SEARCH', true, 'Se encuentra el usuario por DNI exacto'),
    Array('alumnograduacion', 'alumnograduacion_dni', 150, 'Búsqueda por DNI parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_dni', 151, 'Búsqueda con formato incorrecto', 'SEARCH', false, 'Formato nif o nie incorrecto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 152, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 153, 'Búsqueda por teléfono exacto', 'SEARCH', true, 'Se encuentra el usuario por teléfono exacto'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 154, 'Búsqueda por teléfono parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 155, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener dígitos'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 156, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 157, 'Búsqueda por dirección parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 158, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener caracteres alfanuméricos con acentos y ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_email', 159, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_email', 160, 'Búsqueda por email exacto', 'SEARCH', true, 'Se encuentra el usuario por email exacto'),
    Array('alumnograduacion', 'alumnograduacion_email', 161, 'Búsqueda por email parcial', 'SEARCH', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_email', 162, 'Búsqueda con formato incorrecto', 'SEARCH', false, 'El correo electrónico debe tener un formato válido'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 163, 'Búsqueda vacía', 'SEARCH', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 164, 'Búsqueda por nombre de foto exacto', 'SEARCH', true, 'Se encuentra la foto por nombre exacto'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 165, 'Búsqueda por nombre de foto parcial', 'SEARCH', true, 'Se encuentran fotos por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 166, 'Búsqueda con caracteres no permitidos', 'SEARCH', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ ni espacios y punto')

   );

let alumnograduacion_tests_fields = [
    // ADD
    Array('alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    //Array('alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',4,4,'ADD',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_tilde_KO'),
    Array('alumnograduacion','alumnograduacion_login',5,5,'ADD',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',6,6,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',7,7,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm'}],'alumnograduacion_password_max_size_KO'),
    //Array('alumnograduacion','alumnograduacion_password',8,8,'ADD',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'),
    //Array('alumnograduacion','alumnograduacion_password',9,9,'ADD',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',10,10,'ADD',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',11,11,'ADD',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',12,12,'ADD',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    //Array('alumnograduacion','alumnograduacion_apellidos',13,13,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',14,14,'ADD',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',15,15,'ADD',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',16,16,'ADD',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    //Array('alumnograduacion','alumnograduacion_apellidos',17,17,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',18,18,'ADD',[{alumnograduacion_apellidos:'García López'}],true),

    //Array('alumnograduacion','alumnograduacion_titulacion',19,19,'ADD',[{alumnograduacion_titulacion:'AAAAAAA'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',20,20,'ADD',[{alumnograduacion_titulacion:'GREI'}],true),

    Array('alumnograduacion','alumnograduacion_dni',21,21,'ADD',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',22,22,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'),
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
    Array('alumnograduacion','alumnograduacion_email',89,89,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@b.co'}],alumnograduacion_email_max_size_KO),

    Array('alumnograduacion','alumnograduacion_fotoacto',90,90,'ADD',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',91,91,'ADD',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',92,92,'ADD',[{alumnograduacion_fotoacto:'imagen.png'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',93,93,'ADD',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO'),
    Array('alumnograduacion','alumnograduacion_fotoacto',94,94,'ADD',[{alumnograduacion_fotoacto:'imagen'}],'alumnograduacion_fotoacto_no_extension_KO'),

    // EDIT
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

    Array('alumnograduacion','alumnograduacion_email',123,122,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',124,123,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',125,124,'EDIT',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',126,125,'EDIT',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_email',127,126,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email',128,127,'EDIT',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',129,128,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemail@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',130,129,'EDIT',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',131,131,'EDIT',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    // SEARCH
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
    Array('alumnograduacion','alumnograduacion_dni',150,150,'SEARCH',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_format_KO'),

    Array('alumnograduacion','alumnograduacion_telefono',151,152,'SEARCH',[{alumnograduacion_telefono:''}],true),
    Array('alumnograduacion','alumnograduacion_telefono',152,153,'SEARCH',[{alumnograduacion_telefono:'123456789'}],true),
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
];
