let alumnograduacion_def_tests = Array(
    // ADD
    Array('alumnograduacion', 'alumnograduacion_login', 1, 'ADD', 'Tamaño < 4', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'ADD', 'Tamaño > 15', false, 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 'ADD', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'ADD', 'Tiene acentos', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 'ADD', 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 6, 'ADD', 'Tamaño < 8', false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 7, 'ADD', 'Tamaño > 64', false, 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 8, 'ADD', 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 9, 'ADD', 'Tiene acentos', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'ADD', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'ADD', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'ADD', 'Tamaño > 25', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 13, 'ADD', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'ADD', 'Tamaño entre 2 y 25 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

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

    Array('alumnograduacion', 'alumnograduacion_telefono', 25, 'ADD', 'Tamaño != 9', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 26, 'ADD', 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 27, 'ADD', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_email', 28, 'ADD', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion', 'alumnograduacion_email', 29, 'ADD', 'Correo vacío', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_email', 30, 'ADD', 'Tamaño < 5', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion', 'alumnograduacion_email', 31, 'ADD', 'Formato incorrecto', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion', 'alumnograduacion_email', 32, 'ADD', 'Caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_email', 33, 'ADD', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 34, 'ADD', 'Tamaño < 0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 35, 'ADD', 'No alfanumerico', false, 'Solo puede contener caracteres alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 36, 'ADD', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 37, 'ADD', 'Foto vacía válida', true, 'Campo opcional'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 38, 'EDIT', 'Tamaño < 4', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 39, 'EDIT', 'Tamaño > 15', false, 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 40, 'EDIT', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 41, 'EDIT', 'Tiene acentos', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 42, 'EDIT', 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_password', 43, 'EDIT', 'Tamaño < 8', false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 44, 'EDIT', 'Tamaño > 64', false, 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 45, 'EDIT', 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_password', 46, 'EDIT', 'Tiene acentos', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 47, 'EDIT', 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_nombre', 48, 'EDIT', 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 49, 'EDIT', 'Tamaño > 25', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 50, 'EDIT', 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 51, 'EDIT', 'Tamaño entre 2 y 25 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

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

    Array('alumnograduacion', 'alumnograduacion_telefono', 62, 'EDIT', 'Tamaño != 9', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 63, 'EDIT', 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 64, 'EDIT', 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_email', 65, 'EDIT', 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion', 'alumnograduacion_email', 66, 'EDIT', 'Correo vacío', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_email', 67, 'EDIT', 'Tamaño < 5', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion', 'alumnograduacion_email', 68, 'EDIT', 'Formato incorrecto', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion', 'alumnograduacion_email', 69, 'EDIT', 'Caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion', 'alumnograduacion_email', 70, 'EDIT', 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_direccion', 71, 'EDIT', 'Tamaño < 0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 72, 'EDIT', 'No alfanumerico', false, 'Solo puede contener caracteres alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 73, 'EDIT', 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),

    Array('alumnograduacion', 'alumnograduacion_fotoacto', 74, 'EDIT', 'Foto vacía válida', true, 'Campo opcional'),

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
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 109, 'SEARCH', 'Búsqueda con caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ ni espacios y punto')
);

let alumnograduacion_tests_fields = Array(
    // ADD
    Array('alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',4,4,'ADD',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',5,5,'ADD',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',6,6,'ADD',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',7,7,'ADD',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',8,8,'ADD',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'),
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
    Array('alumnograduacion','alumnograduacion_dni',22,22,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',23,23,'ADD',[{alumnograduacion_dni:'12345678X'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',24,24,'ADD',[{alumnograduacion_dni:'12345678A'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',25,25,'ADD',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',26,26,'ADD',[{alumnograduacion_telefono:'123456789A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',27,27,'ADD',[{alumnograduacion_telefono:'123456789'}],true),

    Array('alumnograduacion','alumnograduacion_email',28,28,'ADD',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemailtestmaximo@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',29,29,'ADD',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email',30,30,'ADD',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',31,31,'ADD',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',32,32,'ADD',[{alumnograduacion_email:'usuario@dominio.co'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',33,33,'ADD',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    Array('alumnograduacion','alumnograduacion_direccion',34,34,'ADD',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',35,35,'ADD',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',36,36,'ADD',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_fotoacto',37,37,'ADD',[{alumnograduacion_fotoacto:''}],true),

    // EDIT
    Array('alumnograduacion','alumnograduacion_login',38,38,'EDIT',[{alumnograduacion_login:'abc'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',39,39,'EDIT',[{alumnograduacion_login:'abcdefghijklmnop'}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',40,40,'EDIT',[{alumnograduacion_login:'abc1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',41,41,'EDIT',[{alumnograduacion_login:'ábc'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',42,42,'EDIT',[{alumnograduacion_login:'abcd'}],true),

    Array('alumnograduacion','alumnograduacion_password',43,43,'EDIT',[{alumnograduacion_password:'abc'}],'alumnograduacion_password_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',44,44,'EDIT',[{alumnograduacion_password:'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm'}],'alumnograduacion_password_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_password',45,45,'EDIT',[{alumnograduacion_password:'abc1'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',46,46,'EDIT',[{alumnograduacion_password:'ábcdefgh'}],'alumnograduacion_password_format_KO'),
    Array('alumnograduacion','alumnograduacion_password',47,47,'EDIT',[{alumnograduacion_password:'abcdefgh'}],true),

    Array('alumnograduacion','alumnograduacion_nombre',48,48,'EDIT',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',49,49,'EDIT',[{alumnograduacion_nombre:'abcdefghijklmnopqrstuvwxyz'}],'alumnograduacion_nombre_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',50,50,'EDIT',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),
    Array('alumnograduacion','alumnograduacion_nombre',51,51,'EDIT',[{alumnograduacion_nombre:'José'}],true),

    Array('alumnograduacion','alumnograduacion_apellidos',52,52,'EDIT',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',53,53,'EDIT',[{alumnograduacion_apellidos:'abcdefghijklmnopqrstuvwxyzabcdefghij'}],'alumnograduacion_apellidos_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',54,54,'EDIT',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),
    Array('alumnograduacion','alumnograduacion_apellidos',55,55,'EDIT',[{alumnograduacion_apellidos:'García López'}],true),

    Array('alumnograduacion','alumnograduacion_titulacion',56,56,'EDIT',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),
    Array('alumnograduacion','alumnograduacion_titulacion',57,57,'EDIT',[{alumnograduacion_titulacion:'GREI'}],true),

    Array('alumnograduacion','alumnograduacion_dni',58,58,'EDIT',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_dni',59,59,'EDIT',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',60,60,'EDIT',[{alumnograduacion_dni:'12345678X'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',61,61,'EDIT',[{alumnograduacion_dni:'12345678A'}],true),

    Array('alumnograduacion','alumnograduacion_telefono',62,62,'EDIT',[{alumnograduacion_telefono:'12345678'}],'alumnograduacion_telefono_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',63,63,'EDIT',[{alumnograduacion_telefono:'123456789A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',64,64,'EDIT',[{alumnograduacion_telefono:'123456789'}],true),

    Array('alumnograduacion','alumnograduacion_email',65,65,'EDIT',[{alumnograduacion_email:'usuariomuylargoquesuperaloslimitesdecaracterespermitidosparaelemailtestmaximo@dominio.com'}],'alumnograduacion_email_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',66,66,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_empty_KO'),
    Array('alumnograduacion','alumnograduacion_email',67,67,'EDIT',[{alumnograduacion_email:'a@b'}],'alumnograduacion_email_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_email',68,68,'EDIT',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',69,69,'EDIT',[{alumnograduacion_email:'usuario@dominio.co'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',70,70,'EDIT',[{alumnograduacion_email:'usuario@dominio.com'}],true),

    Array('alumnograduacion','alumnograduacion_direccion',71,71,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_empty_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',72,72,'EDIT',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),
    Array('alumnograduacion','alumnograduacion_direccion',73,73,'EDIT',[{alumnograduacion_direccion:'Calle Mayor 1'}],true),

    Array('alumnograduacion','alumnograduacion_fotoacto',74,74,'EDIT',[{alumnograduacion_fotoacto:''}],true),

    // SEARCH
    Array('alumnograduacion','alumnograduacion_login',75,75,'SEARCH',[{alumnograduacion_login:''}],true),
    Array('alumnograduacion','alumnograduacion_login',76,76,'SEARCH',[{alumnograduacion_login:'abcd'}],true),
    Array('alumnograduacion','alumnograduacion_login',77,77,'SEARCH',[{alumnograduacion_login:'ab'}],true),
    Array('alumnograduacion','alumnograduacion_login',78,78,'SEARCH',[{alumnograduacion_login:'abcñ'}],'alumnograduacion_login_format_KO'),

    Array('alumnograduacion','alumnograduacion_password',79,79,'SEARCH',[{alumnograduacion_password:''}],true),
    Array('alumnograduacion','alumnograduacion_password',80,80,'SEARCH',[{alumnograduacion_password:'abc'}],true),
    Array('alumnograduacion','alumnograduacion_password',81,81,'SEARCH',[{alumnograduacion_password:'abcñ'}],'alumnograduacion_password_format_KO'),

    Array('alumnograduacion','alumnograduacion_nombre',82,82,'SEARCH',[{alumnograduacion_nombre:''}],true),
    Array('alumnograduacion','alumnograduacion_nombre',83,83,'SEARCH',[{alumnograduacion_nombre:'José'}],true),
    Array('alumnograduacion','alumnograduacion_nombre',84,84,'SEARCH',[{alumnograduacion_nombre:'abc1'}],'alumnograduacion_nombre_format_KO'),

    Array('alumnograduacion','alumnograduacion_apellidos',85,85,'SEARCH',[{alumnograduacion_apellidos:''}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',86,86,'SEARCH',[{alumnograduacion_apellidos:'García'}],true),
    Array('alumnograduacion','alumnograduacion_apellidos',87,87,'SEARCH',[{alumnograduacion_apellidos:'abc1'}],'alumnograduacion_apellidos_format_KO'),

    Array('alumnograduacion','alumnograduacion_titulacion',88,88,'SEARCH',[{alumnograduacion_titulacion:''}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',89,89,'SEARCH',[{alumnograduacion_titulacion:'GREI'}],true),
    Array('alumnograduacion','alumnograduacion_titulacion',90,90,'SEARCH',[{alumnograduacion_titulacion:'INVALIDO'}],'alumnograduacion_titulacion_format_KO'),

    Array('alumnograduacion','alumnograduacion_dni',91,91,'SEARCH',[{alumnograduacion_dni:''}],true),
    Array('alumnograduacion','alumnograduacion_dni',92,92,'SEARCH',[{alumnograduacion_dni:'12345678A'}],true),
    Array('alumnograduacion','alumnograduacion_dni',93,93,'SEARCH',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_format_KO'),
    Array('alumnograduacion','alumnograduacion_dni',94,94,'SEARCH',[{alumnograduacion_dni:'1234567A'}],'alumnograduacion_dni_format_KO'),

    Array('alumnograduacion','alumnograduacion_telefono',95,95,'SEARCH',[{alumnograduacion_telefono:''}],true),
    Array('alumnograduacion','alumnograduacion_telefono',96,96,'SEARCH',[{alumnograduacion_telefono:'123456789'}],true),
    Array('alumnograduacion','alumnograduacion_telefono',97,97,'SEARCH',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),
    Array('alumnograduacion','alumnograduacion_telefono',98,98,'SEARCH',[{alumnograduacion_telefono:'12345678A'}],'alumnograduacion_telefono_format_KO'),

    Array('alumnograduacion','alumnograduacion_direccion',99,99,'SEARCH',[{alumnograduacion_direccion:''}],true),
    Array('alumnograduacion','alumnograduacion_direccion',100,100,'SEARCH',[{alumnograduacion_direccion:'Calle Mayor'}],true),
    Array('alumnograduacion','alumnograduacion_direccion',101,101,'SEARCH',[{alumnograduacion_direccion:'@#'}],'alumnograduacion_direccion_format_KO'),

    Array('alumnograduacion','alumnograduacion_email',102,102,'SEARCH',[{alumnograduacion_email:''}],true),
    Array('alumnograduacion','alumnograduacion_email',103,103,'SEARCH',[{alumnograduacion_email:'usuario@dominio.com'}],true),
    Array('alumnograduacion','alumnograduacion_email',104,104,'SEARCH',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),
    Array('alumnograduacion','alumnograduacion_email',105,105,'SEARCH',[{alumnograduacion_email:'usuario@dominio'}],'alumnograduacion_email_format_KO'),

    Array('alumnograduacion','alumnograduacion_fotoacto',106,106,'SEARCH',[{alumnograduacion_fotoacto:''}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',107,107,'SEARCH',[{alumnograduacion_fotoacto:'foto.jpg'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',108,108,'SEARCH',[{alumnograduacion_fotoacto:'imagen.png'}],true),
    Array('alumnograduacion','alumnograduacion_fotoacto',109,109,'SEARCH',[{alumnograduacion_fotoacto:'mi foto.jpg'}],'alumnograduacion_fotoacto_spaces_KO')
);