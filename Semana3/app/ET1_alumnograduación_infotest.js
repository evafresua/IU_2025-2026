let alumnograduacion_def_tests = Array(
    // ADD
    Array('alumnograduacion', 'alumnograduacion_login', 1, 'ADD', 'Tamaño < 4', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'ADD', 'Tamaño > 15', false, 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 'ADD', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'ADD', 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 'ADD', 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 6, 'ADD', 'Tamaño < 8', false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 7, 'ADD', 'Tamaño > 64', false, 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 8, 'ADD', 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 9, 'ADD', 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'ADD', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'ADD', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'ADD', 'Tamaño > 25', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 13, 'ADD', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'ADD', 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 15, 'ADD', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 16, 'ADD', 'Tamaño > 35', false, 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'ADD', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 18, 'ADD', 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 19, 'ADD', 'Opción no válida', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 20, 'ADD', 'Opción válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 21, 'ADD', 'Tamaño != 9', false, 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 22, 'ADD', 'Solo numeros', false, 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'ADD', 'Letra invalida', false, 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 24, 'ADD', 'Longitud y formato adecuados', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_telefono', 25, 'ADD', 'Tamaño != 9', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 26, 'ADD', 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 27, 'ADD', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 28, 'ADD', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 29, 'ADD', 'Tamaño < 0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 30, 'ADD', 'No alfanumerico', false, 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 31, 'ADD', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 32, 'ADD', 'Correo vacío', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 33, 'ADD', 'Tamaño < 5', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 34, 'ADD', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 35, 'ADD', 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 36, 'ADD', 'Caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 37, 'ADD', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 38, 'EDIT', 'Tamaño < 4', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 39, 'EDIT', 'Tamaño > 15', false, 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 40, 'EDIT', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 41, 'EDIT', 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 42, 'EDIT', 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 43, 'EDIT', 'Tamaño < 8', false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 44, 'EDIT', 'Tamaño > 64', false, 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 45, 'EDIT', 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 46, 'EDIT', 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 47, 'EDIT', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 48, 'EDIT', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 49, 'EDIT', 'Tamaño > 25', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 50, 'EDIT', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 51, 'EDIT', 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 52, 'EDIT', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 53, 'EDIT', 'Tamaño > 35', false, 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 54, 'EDIT', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 55, 'EDIT', 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 56, 'EDIT', 'Opción no válida', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 57, 'EDIT', 'Opción válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 58, 'EDIT', 'Tamaño != 9', false, 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 59, 'EDIT', 'Solo numeros', false, 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 60, 'EDIT', 'Letra invalida', false, 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 'EDIT', 'Longitud y formato adecuados', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_telefono', 62, 'EDIT', 'Tamaño != 9', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 63, 'EDIT', 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 64, 'EDIT', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 65, 'EDIT', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),

    Array('alumnograduacion','alumnograduacion_direccion', 66, 'EDIT', 'Tamaño < 0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 67, 'EDIT', 'No alfanumerico', false, 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 68, 'EDIT', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion','alumnograduacion_email', 69, 'EDIT', 'Correo vacío', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 70, 'EDIT', 'Tamaño < 5', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 71, 'EDIT', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 72, 'EDIT', 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 73, 'EDIT', 'Caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 74, 'EDIT', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_login', 75, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_login', 76, 'SEARCH', 'Búsqueda por login exacto', true, 'Se encuentra el usuario por login exacto'),
    Array('alumnograduacion', 'alumnograduacion_login', 77, 'SEARCH', 'Búsqueda por login parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_login', 78, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_password', 79, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_password', 80, 'SEARCH', 'Búsqueda por password parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_password', 81, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos y espacios sin acentos ni ñ'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 82, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 83, 'SEARCH', 'Búsqueda por nombre parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 84, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 85, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 86, 'SEARCH', 'Búsqueda por apellidos parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 87, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 88, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 89, 'SEARCH', 'Búsqueda por titulacion válida', true, 'Se encuentra usuario por titulacion válida'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 90, 'SEARCH', 'Búsqueda por titulacion no válida', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),

    Array('alumnograduacion', 'alumnograduacion_dni', 91, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_dni', 92, 'SEARCH', 'Búsqueda por DNI exacto', true, 'Se encuentra el usuario por DNI exacto'),
    Array('alumnograduacion', 'alumnograduacion_dni', 93, 'SEARCH', 'Búsqueda por DNI parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_dni', 94, 'SEARCH', 'Búsqueda con formato incorrecto', false, 'Formato nif o nie incorrecto'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 95, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 96, 'SEARCH', 'Búsqueda por teléfono exacto', true, 'Se encuentra el usuario por teléfono exacto'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 97, 'SEARCH', 'Búsqueda por teléfono parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 98, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener dígitos'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 99, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 100, 'SEARCH', 'Búsqueda por dirección parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 101, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfanuméricos con acentos y ñ y espacios'),

    Array('alumnograduacion', 'alumnograduacion_email', 102, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_email', 103, 'SEARCH', 'Búsqueda por email exacto', true, 'Se encuentra el usuario por email exacto'),
    Array('alumnograduacion', 'alumnograduacion_email', 104, 'SEARCH', 'Búsqueda por email parcial', true, 'Se encuentran usuarios por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_email', 105, 'SEARCH', 'Búsqueda con formato incorrecto', false, 'El correo electrónico debe tener un formato válido'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 106, 'SEARCH', 'Búsqueda vacía', true, 'Se permite búsqueda vacía'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 107, 'SEARCH', 'Búsqueda por nombre de foto exacto', true, 'Se encuentra la foto por nombre exacto'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 108, 'SEARCH', 'Búsqueda por nombre de foto parcial', true, 'Se encuentran fotos por coincidencia parcial'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 109, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ ni espacios y punto'),

    // DELETE Tests
    Array('alumnograduacion', 'alumnograduacion_login', 110, 'DELETE', 'Eliminación con ID válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_login', 111, 'DELETE', 'Eliminación con ID inexistente', false, 'El registro no existe'),
    Array('alumnograduacion', 'alumnograduacion_login', 112, 'DELETE', 'Eliminación sin ID', false, 'ID requerido para eliminar'),

    // SHOW Tests
    Array('alumnograduacion', 'alumnograduacion_login', 113, 'SHOW', 'Mostrar con ID válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_login', 114, 'SHOW', 'Mostrar con ID inexistente', false, 'El registro no existe'),
    Array('alumnograduacion', 'alumnograduacion_login', 115, 'SHOW', 'Mostrar sin ID', false, 'ID requerido para mostrar'),

    // Cases límite adicionales para ADD
    Array('alumnograduacion', 'alumnograduacion_login', 116, 'ADD', 'Login solo espacios', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 117, 'ADD', 'Login con espacios en medio', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_login', 118, 'ADD', 'Login con números', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 119, 'ADD', 'Login con símbolos', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_login', 120, 'ADD', 'Login límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_login', 121, 'ADD', 'Login límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 122, 'ADD', 'Password solo espacios', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 123, 'ADD', 'Password con números', false, 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 124, 'ADD', 'Password con símbolos', false, 'Solo puede contener caracteres alfabéticos y espacios'),
    Array('alumnograduacion', 'alumnograduacion_password', 125, 'ADD', 'Password límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_password', 126, 'ADD', 'Password límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 127, 'ADD', 'Nombre solo espacios', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 128, 'ADD', 'Nombre con números', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 129, 'ADD', 'Nombre con símbolos', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 130, 'ADD', 'Nombre con ñ válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 131, 'ADD', 'Nombre con acentos válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 132, 'ADD', 'Nombre límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 133, 'ADD', 'Nombre límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_apellidos', 134, 'ADD', 'Apellidos solo espacios', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 135, 'ADD', 'Apellidos con números', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 136, 'ADD', 'Apellidos con símbolos', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 137, 'ADD', 'Apellidos múltiples válidos', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 138, 'ADD', 'Apellidos con guión válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 139, 'ADD', 'Apellidos límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 140, 'ADD', 'Apellidos límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_titulacion', 141, 'ADD', 'Titulación vacía', false, 'Debe seleccionar una titulación'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 142, 'ADD', 'Titulación GRIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 143, 'ADD', 'Titulación MEI válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 144, 'ADD', 'Titulación MIA válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 145, 'ADD', 'Titulación PCEO válida', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_dni', 146, 'ADD', 'DNI con espacios', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_dni', 147, 'ADD', 'DNI solo números', false, 'Debe incluir la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 148, 'ADD', 'DNI letra minúscula válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 149, 'ADD', 'NIE válido formato X', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 150, 'ADD', 'NIE válido formato Y', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_dni', 151, 'ADD', 'NIE válido formato Z', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_telefono', 152, 'ADD', 'Teléfono con espacios', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 153, 'ADD', 'Teléfono con guiones', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 154, 'ADD', 'Teléfono que empiece por 6', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 155, 'ADD', 'Teléfono que empiece por 7', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 156, 'ADD', 'Teléfono que empiece por 9', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 157, 'ADD', 'Dirección solo espacios', false, 'No puede contener solo espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 158, 'ADD', 'Dirección con números válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 159, 'ADD', 'Dirección con comas válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 160, 'ADD', 'Dirección límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_email', 161, 'ADD', 'Email sin @ inválido', false, 'Debe contener @'),
    Array('alumnograduacion', 'alumnograduacion_email', 162, 'ADD', 'Email sin dominio inválido', false, 'Formato de dominio incorrecto'),
    Array('alumnograduacion', 'alumnograduacion_email', 163, 'ADD', 'Email múltiples @ inválido', false, 'Solo puede contener un @'),
    Array('alumnograduacion', 'alumnograduacion_email', 164, 'ADD', 'Email con subdominios válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 165, 'ADD', 'Email con números válido', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 166, 'ADD', 'Email límite mínimo exacto', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_email', 167, 'ADD', 'Email límite máximo exacto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 168, 'ADD', 'Foto vacía válida', true, 'Campo opcional'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 169, 'ADD', 'Foto con extensión jpg válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 170, 'ADD', 'Foto con extensión png válida', true, 'Éxito'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 171, 'ADD', 'Foto con espacios inválida', false, 'No puede contener espacios'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 172, 'ADD', 'Foto sin extensión inválida', false, 'Debe incluir extensión válida')
);
let alumnograduacion_tests_fields = [
    // ADD
    ['alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'],
    ['alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'a'.repeat(16)}],'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',4,4,'ADD',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',5,5,'ADD',[{alumnograduacion_login:'abcd'}],true,

    ['alumnograduacion','alumnograduacion_password',6,6,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion','alumnograduacion_password',7,7,'ADD',[{alumnograduacion_password:'a'.repeat(65)}],'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion','alumnograduacion_password',8,8,'ADD',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',9,9,'ADD',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',10,10,'ADD',[{alumnograduacion_password:'abcdefgh'}],true,

    ['alumnograduacion','alumnograduacion_nombre',11,11,'ADD',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',12,12,'ADD',[{alumnograduacion_nombre:'a'.repeat(26)}],'alumnograduacion_nombre_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',13,13,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_nombre',14,14,'ADD',[{alumnograduacion_nombre:'José'}],true,

    ['alumnograduacion','alumnograduacion_apellidos',15,15,'ADD',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',16,16,'ADD',[{alumnograduacion_apellidos:'a'.repeat(36)}],'alumnograduacion_apellidos_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',17,17,'ADD',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',18,18,'ADD',[{alumnograduacion_apellidos:'García López'}],true,

    ['alumnograduacion','alumnograduacion_titulacion',19,19,'ADD',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',20,20,'ADD',[{alumnograduacion_titulacion:'GREI'}],true,

    ['alumnograduacion','alumnograduacion_dni',21,21,'ADD',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',22,22,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'],
    ['alumnograduacion','alumnograduacion_dni',23,23,'ADD',[{alumnograduacion_dni:'12345678Z'}],'alumnograduacion_dni_format_KO'],
    ['alumnograduacion','alumnograduacion_dni',24,24,'ADD',[{alumnograduacion_dni:'12345678A'}],true,

    ['alumnograduacion','alumnograduacion_telefono',25,25,'ADD',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',26,26,'ADD',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',27,27,'ADD',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',28,28,'ADD',[{alumnograduacion_telefono:'123456789'}],true,

    ['alumnograduacion','alumnograduacion_email',29,29,'ADD',[{alumnograduacion_email:'a'.repeat(101)+'@dominio.com'}],'alumnograduacion_email_max_size_KO'],

    ['alumnograduacion','alumnograduacion_direccion',30,30,'ADD',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'],
    ['alumnograduacion','alumnograduacion_direccion',31,31,'ADD',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',32,32,'ADD',[{alumnograduacion_direccion:'Calle Mayor 1'}],true,

    ['alumnograduacion','alumnograduacion_email',33,33,'ADD',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'],
    ['alumnograduacion','alumnograduacion_email',34,34,'ADD',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'],
    ['alumnograduacion','alumnograduacion_email',35,35,'ADD',[{alumnograduacion_email:'a'.repeat(101)+'@dominio.com'}],'alumnograduacion_email_max_size_KO'],
    ['alumnograduacion','alumnograduacion_email',36,36,'ADD',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',37,37,'ADD',[{alumnograduacion_email:'usuario@dominio.com'}],true,

    // EDIT
    ['alumnograduacion','alumnograduacion_login',38,38,'EDIT',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'],
    ['alumnograduacion','alumnograduacion_login',39,39,'EDIT',[{alumnograduacion_login:'a'.repeat(16)}],'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion','alumnograduacion_login',40,40,'EDIT',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',41,41,'EDIT',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',42,42,'EDIT',[{alumnograduacion_login:'abcd'}],true,

    ['alumnograduacion','alumnograduacion_password',43,43,'EDIT',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion','alumnograduacion_password',44,44,'EDIT',[{alumnograduacion_password:'a'.repeat(65)}],'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion','alumnograduacion_password',45,45,'EDIT',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',46,46,'EDIT',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',47,47,'EDIT',[{alumnograduacion_password:'abcdefgh'}],true,

    ['alumnograduacion','alumnograduacion_nombre',48,48,'EDIT',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',49,49,'EDIT',[{alumnograduacion_nombre:'a'.repeat(26)}],'alumnograduacion_nombre_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',50,50,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_nombre',51,51,'EDIT',[{alumnograduacion_nombre:'José'}],true,

    ['alumnograduacion','alumnograduacion_apellidos',52,52,'EDIT',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',53,53,'EDIT',[{alumnograduacion_apellidos:'a'.repeat(36)}],'alumnograduacion_apellidos_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',54,54,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',55,55,'EDIT',[{alumnograduacion_apellidos:'García López'}],true,

    ['alumnograduacion','alumnograduacion_titulacion',56,56,'EDIT',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',57,57,'EDIT',[{alumnograduacion_titulacion:'GREI'}],true,

    ['alumnograduacion','alumnograduacion_dni',58,58,'EDIT',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',59,59,'EDIT',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'],
    ['alumnograduacion','alumnograduacion_dni',60,60,'EDIT',[{alumnograduacion_dni:'12345678Z'}],'alumnograduacion_dni_format_KO'],
    ['alumnograduacion','alumnograduacion_dni',61,61,'EDIT',[{alumnograduacion_dni:'12345678A'}],true,

    ['alumnograduacion','alumnograduacion_telefono',62,62,'EDIT',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',63,63,'EDIT',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',64,64,'EDIT',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',65,65,'EDIT',[{alumnograduacion_telefono:'123456789'}],true,

    ['alumnograduacion','alumnograduacion_email',66,66,'EDIT',[{alumnograduacion_email:'a'.repeat(101)+'@dominio.com'}],'alumnograduacion_email_max_size_KO'],

    ['alumnograduacion','alumnograduacion_direccion',67,67,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'],
    ['alumnograduacion','alumnograduacion_direccion',68,68,'EDIT',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',69,69,'EDIT',[{alumnograduacion_direccion:'Calle Mayor 1'}],true,

    ['alumnograduacion','alumnograduacion_email',70,70,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'],
    ['alumnograduacion','alumnograduacion_email',71,71,'EDIT',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'],
    ['alumnograduacion','alumnograduacion_email',72,72,'EDIT',[{alumnograduacion_email:'a'.repeat(101)+'@dominio.com'}],'alumnograduacion_email_max_size_KO'],
    ['alumnograduacion','alumnograduacion_email',73,73,'EDIT',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',74,74,'EDIT',[{alumnograduacion_email:'usuario@dominio.com'}],true,

    // SEARCH
    ['alumnograduacion','alumnograduacion_login',75,75,'SEARCH',[{alumnograduacion_login:''}],true],
    ['alumnograduacion','alumnograduacion_login',76,76,'SEARCH',[{alumnograduacion_login:'abcd'}],true],
    ['alumnograduacion','alumnograduacion_login',77,77,'SEARCH',[{alumnograduacion_login:'ab'}],true],
    ['alumnograduacion','alumnograduacion_login',78,78,'SEARCH',[{alumnograduacion_login:'abcñ'}],'alumnograduacion_login_format_KO'],

    ['alumnograduacion','alumnograduacion_password',79,79,'SEARCH',[{alumnograduacion_password:''}],true],
    ['alumnograduacion','alumnograduacion_password',80,80,'SEARCH',[{alumnograduacion_password:'abc'}],true],
    ['alumnograduacion','alumnograduacion_password',81,81,'SEARCH',[{alumnograduacion_password:'abcñ'}],'alumnograduacion_password_format_KO'],

    ['alumnograduacion','alumnograduacion_nombre',82,82,'SEARCH',[{alumnograduacion_nombre:''}],true],
    ['alumnograduacion','alumnograduacion_nombre',83,83,'SEARCH',[{alumnograduacion_nombre:'José'}],true],
    ['alumnograduacion','alumnograduacion_nombre',84,84,'SEARCH',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'],

    ['alumnograduacion','alumnograduacion_apellidos',85,85,'SEARCH',[{alumnograduacion_apellidos:''}],true],
    ['alumnograduacion','alumnograduacion_apellidos',86,86,'SEARCH',[{alumnograduacion_apellidos:'García'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',87,87,'SEARCH',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'],

    ['alumnograduacion','alumnograduacion_titulacion',88,88,'SEARCH',[{alumnograduacion_titulacion:''}],true],
    ['alumnograduacion','alumnograduacion_titulacion',89,89,'SEARCH',[{alumnograduacion_titulacion:'GREI'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',90,90,'SEARCH',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'],

    ['alumnograduacion','alumnograduacion_dni',91,91,'SEARCH',[{alumnograduacion_dni:''}],true],
    ['alumnograduacion','alumnograduacion_dni',92,92,'SEARCH',[{alumnograduacion_dni:'12345678A'}],true],
    ['alumnograduacion','alumnograduacion_dni',93,93,'SEARCH',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_format_KO'],

    ['alumnograduacion','alumnograduacion_telefono',94,94,'SEARCH',[{alumnograduacion_telefono:''}],true],
    ['alumnograduacion','alumnograduacion_telefono',95,95,'SEARCH',[{alumnograduacion_telefono:'123456789'}],true],
    ['alumnograduacion','alumnograduacion_telefono',96,96,'SEARCH',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'],

    ['alumnograduacion','alumnograduacion_direccion',97,97,'SEARCH',[{alumnograduacion_direccion:''}],true],
    ['alumnograduacion','alumnograduacion_direccion',98,98,'SEARCH',[{alumnograduacion_direccion:'Calle Mayor'}],true],
    ['alumnograduacion','alumnograduacion_direccion',99,99,'SEARCH',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'],

    ['alumnograduacion','alumnograduacion_email',100,100,'SEARCH',[{alumnograduacion_email:''}],true],
    ['alumnograduacion','alumnograduacion_email',101,101,'SEARCH',[{alumnograduacion_email:'usuario@dominio.com'}],true],
    ['alumnograduacion','alumnograduacion_email',102,102,'SEARCH',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'],

    // DELETE Tests
    ['alumnograduacion','alumnograduacion_login',103,110,'DELETE',[{alumnograduacion_id:1}],true],
    ['alumnograduacion','alumnograduacion_login',104,111,'DELETE',[{alumnograduacion_id:999}],'alumnograduacion_id_not_found_KO'],
    ['alumnograduacion','alumnograduacion_login',105,112,'DELETE',[{}],'alumnograduacion_id_required_KO'],

    // SHOW Tests
    ['alumnograduacion','alumnograduacion_login',106,113,'SHOW',[{alumnograduacion_id:1}],true],
    ['alumnograduacion','alumnograduacion_login',107,114,'SHOW',[{alumnograduacion_id:999}],'alumnograduacion_id_not_found_KO'],
    ['alumnograduacion','alumnograduacion_login',108,115,'SHOW',[{}],'alumnograduacion_id_required_KO'],

    // Casos límite adicionales para ADD
    ['alumnograduacion','alumnograduacion_login',109,116,'ADD',[{alumnograduacion_login:'    '}],'alumnograduacion_login_only_spaces_KO'],
    ['alumnograduacion','alumnograduacion_login',110,117,'ADD',[{alumnograduacion_login:'ab cd'}],'alumnograduacion_login_spaces_KO'],
    ['alumnograduacion','alumnograduacion_login',111,118,'ADD',[{alumnograduacion_login:'abc123'}],'alumnograduacion_login_numbers_KO'],
    ['alumnograduacion','alumnograduacion_login',112,119,'ADD',[{alumnograduacion_login:'abc@'}],'alumnograduacion_login_symbols_KO'],
    ['alumnograduacion','alumnograduacion_login',113,120,'ADD',[{alumnograduacion_login:'abcd'}],true],
    ['alumnograduacion','alumnograduacion_login',114,121,'ADD',[{alumnograduacion_login:'abcdefghijklmno'}],true],

    ['alumnograduacion','alumnograduacion_password',115,122,'ADD',[{alumnograduacion_password:'        '}],'alumnograduacion_password_only_spaces_KO'],
    ['alumnograduacion','alumnograduacion_password',116,123,'ADD',[{alumnograduacion_password:'abc123def'}],'alumnograduacion_password_numbers_KO'],
    ['alumnograduacion','alumnograduacion_password',117,124,'ADD',[{alumnograduacion_password:'abc@def'}],'alumnograduacion_password_symbols_KO'],
    ['alumnograduacion','alumnograduacion_password',118,125,'ADD',[{alumnograduacion_password:'abcdefgh'}],true],
    ['alumnograduacion','alumnograduacion_password',119,126,'ADD',[{alumnograduacion_password:'a'.repeat(64)}],true],

    ['alumnograduacion','alumnograduacion_nombre',120,127,'ADD',[{alumnograduacion_nombre:'  '}],'alumnograduacion_nombre_only_spaces_KO'],
    ['alumnograduacion','alumnograduacion_nombre',121,128,'ADD',[{alumnograduacion_nombre:'José123'}],'alumnograduacion_nombre_numbers_KO'],
    ['alumnograduacion','alumnograduacion_nombre',122,129,'ADD',[{alumnograduacion_nombre:'José@'}],'alumnograduacion_nombre_symbols_KO'],
    ['alumnograduacion','alumnograduacion_nombre',123,130,'ADD',[{alumnograduacion_nombre:'Begoña'}],true],
    ['alumnograduacion','alumnograduacion_nombre',124,131,'ADD',[{alumnograduacion_nombre:'José María'}],true],
    ['alumnograduacion','alumnograduacion_nombre',125,132,'ADD',[{alumnograduacion_nombre:'Jo'}],true],
    ['alumnograduacion','alumnograduacion_nombre',126,133,'ADD',[{alumnograduacion_nombre:'a'.repeat(25)}],true],

    ['alumnograduacion','alumnograduacion_apellidos',127,134,'ADD',[{alumnograduacion_apellidos:'   '}],'alumnograduacion_apellidos_only_spaces_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',128,135,'ADD',[{alumnograduacion_apellidos:'García123'}],'alumnograduacion_apellidos_numbers_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',129,136,'ADD',[{alumnograduacion_apellidos:'García@'}],'alumnograduacion_apellidos_symbols_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',130,137,'ADD',[{alumnograduacion_apellidos:'García López Martínez'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',131,138,'ADD',[{alumnograduacion_apellidos:'García-López'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',132,139,'ADD',[{alumnograduacion_apellidos:'Ga'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',133,140,'ADD',[{alumnograduacion_apellidos:'a'.repeat(35)}],true],

    ['alumnograduacion','alumnograduacion_titulacion',134,141,'ADD',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_empty_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',135,142,'ADD',[{alumnograduacion_titulacion:'GRIA'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',136,143,'ADD',[{alumnograduacion_titulacion:'MEI'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',137,144,'ADD',[{alumnograduacion_titulacion:'MIA'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',138,145,'ADD',[{alumnograduacion_titulacion:'PCEO'}],true],

    ['alumnograduacion','alumnograduacion_dni',139,146,'ADD',[{alumnograduacion_dni:'12345678 A'}],'alumnograduacion_dni_spaces_KO'],
    ['alumnograduacion','alumnograduacion_dni',140,147,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_no_letter_KO'],
    ['alumnograduacion','alumnograduacion_dni',141,148,'ADD',[{alumnograduacion_dni:'12345678z'}],true],
    ['alumnograduacion','alumnograduacion_dni',142,149,'ADD',[{alumnograduacion_dni:'X1234567L'}],true],
    ['alumnograduacion','alumnograduacion_dni',143,150,'ADD',[{alumnograduacion_dni:'Y1234567X'}],true],
    ['alumnograduacion','alumnograduacion_dni',144,151,'ADD',[{alumnograduacion_dni:'Z1234567R'}],true],

    ['alumnograduacion','alumnograduacion_telefono',145,152,'ADD',[{alumnograduacion_telefono:'123 456 789'}],'alumnograduacion_telefono_spaces_KO'],
    ['alumnograduacion','alumnograduacion_telefono',146,153,'ADD',[{alumnograduacion_telefono:'123-456-789'}],'alumnograduacion_telefono_hyphens_KO'],
    ['alumnograduacion','alumnograduacion_telefono',147,154,'ADD',[{alumnograduacion_telefono:'612345678'}],true],
    ['alumnograduacion','alumnograduacion_telefono',148,155,'ADD',[{alumnograduacion_telefono:'712345678'}],true],
    ['alumnograduacion','alumnograduacion_telefono',149,156,'ADD',[{alumnograduacion_telefono:'912345678'}],true],

    ['alumnograduacion','alumnograduacion_direccion',150,157,'ADD',[{alumnograduacion_direccion:'     '}],'alumnograduacion_direccion_only_spaces_KO'],
    ['alumnograduacion','alumnograduacion_direccion',151,158,'ADD',[{alumnograduacion_direccion:'Calle Mayor 123'}],true],
    ['alumnograduacion','alumnograduacion_direccion',152,159,'ADD',[{alumnograduacion_direccion:'Av. de la Constitución, 45'}],true],
    ['alumnograduacion','alumnograduacion_direccion',153,160,'ADD',[{alumnograduacion_direccion:'a'.repeat(100)}],true],

    ['alumnograduacion','alumnograduacion_email',154,161,'ADD',[{alumnograduacion_email:'usuariodominio.com'}],'alumnograduacion_email_no_at_KO'],
    ['alumnograduacion','alumnograduacion_email',155,162,'ADD',[{alumnograduacion_email:'usuario@'}],'alumnograduacion_email_no_domain_KO'],
    ['alumnograduacion','alumnograduacion_email',156,163,'ADD',[{alumnograduacion_email:'us@er@dominio.com'}],'alumnograduacion_email_multiple_at_KO'],
    ['alumnograduacion','alumnograduacion_email',157,164,'ADD',[{alumnograduacion_email:'usuario@mail.dominio.com'}],true],
    ['alumnograduacion','alumnograduacion_email',158,165,'ADD',[{alumnograduacion_email:'usuario123@dominio.com'}],true],
    ['alumnograduacion','alumnograduacion_email',159,166,'ADD',[{alumnograduacion_email:'a@b.c'}],true],
    ['alumnograduacion','alumnograduacion_email',160,167,'ADD',[{alumnograduacion_email:'a'.repeat(95)+'@b.co'}],true],

    ['alumnograduacion','alumnograduacion_fotoacto',161,168,'ADD',[{alumnograduacion_fotoacto:''}],true],
    ['alumnograduacion','alumnograduacion_fotoacto',162,169,'ADD',[{alumnograduacion_fotoacto:'foto.jpg'}],true],
    ['alumnograduacion','alumnograduacion_fotoacto',163,170,'ADD',[{alumnograduacion_fotoacto:'imagen.png'}],true],
    ['alumnograduacion','alumnograduacion_fotoacto',164,171,'ADD',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO'],
    ['alumnograduacion','alumnograduacion_fotoacto',165,172,'ADD',[{alumnograduacion_fotoacto:'imagen'}],'alumnograduacion_fotoacto_no_extension_KO']
];
    