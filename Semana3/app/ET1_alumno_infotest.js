//Van los test para ADD, EDIT....
//Comparar con los test de la libreta
let alumnograduacion_def_tests = Array(
    //campo alumnograduacion_login
    Array('alumnograduacion', 'alumnograduacion_login', 1, 'Tamaño < 4', false, 'El tamaño debe ser como min 4'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 'Tamaño > 15', false, 'El tamaño debe ser de máximo 15'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 'Tamaño entre 4 y 15 y solo caracteres alfabéticos', true, 'Éxito'),

    //campo alumnograduacion_password
    Array('alumnograduacion', 'alumnograduacion_password', 6, 'Tamaño < 8', false, 'El campo no puede tener una longitud menor a 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 7, 'Tamaño > 64', false, 'El tamaño debe ser de máximo 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 8, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'), //sin acentos poner un test mas
    Array('alumnograduacion', 'alumnograduacion_password', 9, 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    //campo alumnograduacion_nombre
    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'Tamaño > 25', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'Tamaño entre 2 y 25 y  alfabéticos con acentos, ñ y espacios', true, 'Éxito'),
    //campo alumnograduacion_apellidos
    Array('alumnograduacion', 'alumnograduacion_apellidos', 15, 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 16, 'Tamaño > 35', false, 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos con acentos, ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 18, 'Tamaño entre 2 y 35 y alfabéticos con acentos, ñ y espacios', true, 'Éxito'),

    //campo alumnograduacion_titulacion
    //Tendría que elegir una opción en el formulario no escribir, ns como hacwer un campo donde elijo de una lista
    //Valores posibles: 'GREI','GRIA','MEI','MIA','PCEO'
    Array('alumnograduacion', 'alumnograduacion_titulacion', 19, 'Opción no válida', false, 'Debe seleccionar una opción válida: GREI, GRIA, MEI, MIA, PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 20, 'Opción válida', true, 'Éxito'),


    //campo alumnograduacion_dni
    //Debería validar que es un dni valido
    Array('alumnograduacion', 'alumnograduacion_dni', 21, 'Tamaño != 9', false, 'El tamaño debe ser 9'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'Solo numeros', false, 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'Letra invalida', 'Formato nif o nie incorrecto, letra y número no se corresponden'),
    Array('alumnograduacion', 'alumnograduacion_dni', 24, 'Longitud y formato adecuados', true, 'Éxito'),

    //campo alumnograduacion_telefono
    Array('alumnograduacion','alumnograduacion_telefono', 25, 'Tamaño != 9', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 27, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 28, 'Tamaño = 9 y solo dígitos', true, 'Éxito'),

    //campo alumnograduacion_direccion
    Array('alumnograduacion','alumnograduacion_email', 34, 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_direccion', 30, 'Tamaño < 0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 17, 'No alfanumerico', false, 'alfanuméricos con acentos y ñ y espacios'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 18, 'Tamaño entre 0 y 100 y alfabético o espacios en blanco', true, 'Éxito'),
    //campo alumnograduacion_email
    //falta ver si @ si punto...
    Array('alumnograduacion','alumnograduacion_email', 1, 'Correo vacío', false, 'El campo correo electrónico no puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_email', 2, 'Tamaño < 5', false, 'El tamaño debe ser de mínimo 5'),
    Array('alumnograduacion','alumnograduacion_email', 3, 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100'),
    Array('alumnograduacion','alumnograduacion_email', 4, 'Formato incorrecto; tiene que haber un @, seguido de caracteres alfanumericos un punto y algun caracter alfanumérico mas', false, 'El correo electrónico debe tener un formato válido'),
    Array('alumnograduacion','alumnograduacion_email', 5, 'Caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
    Array('alumnograduacion','alumnograduacion_email', 6, 'Tamaño entre 6 y 100 y formato correcto', true, 'Éxito'),

    //campo alumnograduacion_fotoacto
    Array('publicacion', 'alumnograduacion_fotoacto', 99, 'Tamaño < 7', false, 'El tamaño debe ser de mínimo 7'),
    Array('publicacion', 'alumnograduacion_fotoacto', 100, 'Tamaño > 40', false, 'El tamaño debe ser de máximo 40'),
    Array('publicacion', 'alumnograduacion_fotoacto', 101, 'Contiene acentos o espacios en blanco', false, 'Solo puede contener caracteres alfabéticos sin acentos u espacios'),
    Array('publicacion', 'alumnograduacion_fotoacto', 102, 'La extensión no es .jpg o .jpeg', false, 'Sólo admite como extensiones .jpg o .jpeg'),
    Array('publicacion', 'alumnograduacion_fotoacto', 103, 'Tamaño de fichero mayor a 2.000.000 bytes', false, 'Imagen demasiado grande. El tamaño máximo permitido es 2.000.000 bytes'),    
    Array('publicacion', 'alumnograduacion_fotoacto', 103, 'Alfabéticos sin acentos, tamaño entre 7 y 40 y es .jpg o .jpeg', true, 'Éxito')
