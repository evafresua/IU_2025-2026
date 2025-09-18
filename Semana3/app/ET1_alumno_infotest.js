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
    Array('alumnograduacion', 'alumnograduacion_password', 7, 'Tamaño > 100', false, 'El tamaño debe ser de máximo 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 8, 'No alfabéticos ni espacios en blanco', false, 'Solo puede contener caracteres alfabéticos y espacios en blanco'), //sin acentos poner un test mas
    Array('alumnograduacion', 'alumnograduacion_password', 9, 'Tiene acentos ', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('alumnograduacion', 'alumnograduacion_password', 10, 'Tamaño entre 8 y 100 y alfabético o espacio en blanco', true, 'Éxito'),

    //campo alumnograduacion_nombre
    Array('alumnograduacion', 'alumnograduacion_nombre', 11, 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 12, 'Tamaño > 25', false, 'El tamaño debe ser de máximo 25'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 13, 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 14, 'Tamaño entre 2 y 25 y alfabético sin acentos ni espacios en blanco',
        true, 'Éxito'),

    //campo alumnograduacion_apellidos
    Array('alumnograduacion', 'alumnograduacion_apellidos', 15, 'Tamaño < 2', false, 'El tamaño debe ser de mínimo 2'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 16, 'Tamaño > 35', false, 'El tamaño debe ser de máximo 35'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 17, 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 18, 'Tamaño entre 2 y 35 y alfabético o espacios en blanco', true, 'Éxito'),

    //campo alumnograduacion_titulacion
    //Tendría que elegir una opción en el formulario no escribir, ns como hacwer un campo donde elijo de una lista
    //Valores posibles: 'GREI','GRIA','MEI','MIA','PCEO'



    //campo alumnograduacion_dni
    //Debería validar que es un dni valido
    Array('alumnograduacion', 'alumnograduacion_dni', 21, 'Tamaño != 10', false, 'El tamaño debe ser 10'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'Solo numeros', false, 'Falta la letra'),
    Array('alumnograduacion', 'alumnograduacion_dni', 23, 'Letra invalida', 'Formato incorrecto, letra y numnero no se corresponden')
    Array('alumnograduacion', 'alumnograduacion_dni', 24, 'Tamaño entre 6 y 50 y alfabético sin acentos o espacio en blanco', true, 'Éxito'),
    
    //campo alumnograduacion_telefono
    Array('alumnograduacion','alumnograduacion_telefono', 25, 'Tamaño != 9', false, 'El tamaño debe ser de 9'),
    Array('alumnograduacion','alumnograduacion_telefono', 27, 'No dígitos', false, 'Solo puede contener dígitos'),
    Array('alumnograduacion','alumnograduacion_telefono', 28, 'Tamaño = 4, año no superior al actual y solo dígitos', true, 'Éxito'),

    //campo alumnograduacion_direccion
    Array('alumnograduacion','alumnograduacion_email', 34, 'Tamaño > 300', false, 'El tamaño debe ser de máximo 300'),
    Array('alumnograduacion','alumnograduacion_email', 35, 'No alfabético ni espacio en blanco ni signo de puntuación', false, 'Solo puede contener caracteres alfabéticos, espacios en blanco y signos de puntuación'),
    Array('alumnograduacion','alumnograduacion_email', 36, 'Tamaño entre 0 y 300 y es alfabético, signo de puntuación o espacio en blanco', true, 'Éxito'),
    Array('alumnograduacion','alumnograduacion_direccion', 30, 'Tamaño >0', false, 'El campo no puede estar vacío'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 17, 'No alfabetico', false, 'Solo puede contener caracteres alfabéticos'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 18, 'Tamaño entre 0 y 299 y alfabético o espacios en blanco', true, 'Éxito'),
    //campo alumnograduacion_email
    //falta ver si @ si punto...
Array('alumnograduacion','alumnograduacion_email', 1, 'Correo vacío', false, 'El campo correo electrónico no puede estar vacío'),
Array('alumnograduacion','alumnograduacion_email', 2, 'Tamaño < 6', false, 'El tamaño debe ser de mínimo 6'),
Array('alumnograduacion','alumnograduacion_email', 3, 'Tamaño > 300', false, 'El tamaño debe ser de máximo 300'),
Array('alumnograduacion','alumnograduacion_email', 4, 'Formato incorrecto', false, 'El correo electrónico debe tener un formato válido'),
Array('alumnograduacion','alumnograduacion_email', 5, 'Caracteres no permitidos', false, 'Solo puede contener caracteres alfabéticos, números, signos de puntuación y espacios en blanco'),
Array('alumnograduacion','alumnograduacion_email', 6, 'Tamaño entre 6 y 300 y formato correcto', true, 'Éxito'),

    //campo alumnograduacion_fotoacto
    Array('publicacion', 'alumnograduacion_fotoacto', 99, 'Tamaño < 7', false, 'El tamaño debe ser de mínimo 7'),
    Array('publicacion', 'alumnograduacion_fotoacto', 100, 'Tamaño > 50', false, 'El tamaño debe ser de máximo 50'),
    Array('publicacion', 'alumnograduacion_fotoacto', 101, 'Contiene acentos o espacios en blanco', false, 'Solo puede contener caracteres alfabéticos sin acentos'),
    Array('publicacion', 'alumnograduacion_fotoacto', 102, 'La extensión no es .jpg o .jpeg', false, 'Sólo admite como extensiones .jpg o .jpeg'),
    Array('publicacion', 'alumnograduacion_fotoacto', 103, 'Alfabéticos sin acentos, tamaño entre 7 y 50 y es .jpg o .jpeg', true, 'Éxito'),
