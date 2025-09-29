Definición Entrega ET1  
Interfaces de Usuario  
Curso 2025-2026

**Competencias a evaluar**

**A2 Que los estudiantes sepan aplicar sus conocimientos a su trabajo o vocación de una forma profesional y posean las competencias que suelen demostrarse por medio de la elaboración y defensa de argumentos y la resolución de problemas dentro de su área de estudio.**  
A4 Que los estudiantes puedan transmitir información, ideas, problemas y soluciones a un público tanto especializado como no especializado.  
**B3 Capacidad para diseñar, desarrollar, evaluar y asegurar la accesibilidad, ergonomía, usabilidad y seguridad de los sistemas, servicios y aplicaciones informáticas, así como de la información que gestionan.**  
B8 Conocimiento de las materias básicas y tecnologías, que capaciten para el aprendizaje y desarrollo de nuevos métodos y tecnologías, así como las que les doten de una gran versatilidad para adaptarse a nuevas situaciones.  
**B9 Capacidad para resolver problemas con iniciativa, toma de decisiones, autonomía y creatividad. Capacidad para saber comunicar y transmitir los conocimientos, habilidades y destrezas de la profesión de Ingeniero Técnico en Informática.**  
**C4 Conocimientos básicos sobre el uso y programación de los ordenadores, sistemas operativos, bases de datos y programas informáticos con aplicación en ingeniería**  
**C23 Capacidad para diseñar y evaluar interfaces persona computador que garanticen la accesibilidad y usabilidad a los sistemas, servicios y aplicaciones informáticas**  
**C25 Capacidad para desarrollar, mantener y evaluar servicios y sistemas software que satisfagan todos los requisitos del usuario y se comporten de forma fiable y eficiente, sean asequibles de desarrollar y mantener y cumplan normas de calidad, aplicando las teorías, principios, métodos y prácticas de la Ingeniería del Software**  
**C26 Capacidad para valorar las necesidades del cliente y especificar los requisitos software para satisfacer estas necesidades, reconciliando objetivos en conflicto mediante la búsqueda de compromisos aceptables dentro de las limitaciones derivadas del coste, del tiempo, de la existencia de sistemas ya desarrollados y de las propias organizaciones**  
C28 Capacidad de identificar y analizar problemas y diseñar, desarrollar, implementar, verificar y documentar soluciones software sobre la base de un conocimiento adecuado de las teorías, modelos y técnicas actuales  
C33 Capacidad para emplear metodologías centradas en el usuario y la organización para el desarrollo, evaluación y gestión de aplicaciones y sistemas basados en tecnologías de la información que aseguren la accesibilidad, ergonomía y usabilidad de los sistemas  
**D4 Capacidad de análisis, síntesis y evaluación**  
**D5 Capacidad de organización y planificación**  
**D6 Capacidad de abstracción: capacidad de crear y utilizar modelos que reflejen situaciones reales**  
D8 Capacidad de trabajar en situaciones de falta de información y/o bajo presión  
D9 Capacidad de integrarse rápidamente y trabajar eficientemente en equipos unidisciplinares y de colaborar en un entorno multidisciplinar  
D10 Capacidad de relación interpersonal.  
**D11 Razonamiento crítico**  
D12 Liderazgo

**Tipología**

Entrega individual de realización individual.

**Definición**

Dada la tabla que se proporciona en este punto y la definición de los formatos correctos de entrada de datos para cada uno de los atributos, se solicitan los ficheros de definición de los test posibles a realizar para cada campo y la batería de pruebas que verifica la prueba de los test definidos anteriormente

CREATE TABLE \`alumnograduacion\` (

\`alumnograduacion\_login\` varchar(15) NOT NULL DEFAULT '',  
\`alumnograduacion\_password\` varchar(64) NOT NULL DEFAULT '',  
\`alumnograduacion\_nombre\` varchar(25) NOT NULL DEFAULT '',  
\`alumnograduacion\_apellidos\` varchar(35) NOT NULL DEFAULT '',  
\`alumnograduacion\_titulacion\` enum('GREI','GRIA','MEI','MIA','PCEO') NOT NULL DEFAULT 'GREI',  
\`alumnograduacion\_dni\` varchar(9) NOT NULL DEFAULT '',  
\`alumnograduacion\_telefono\` varchar(9) NOT NULL DEFAULT '',  
\`alumnograduacion\_direccion\` varchar(100) NOT NULL DEFAULT '',  
\`alumnograduacion\_email\` varchar(40) NOT NULL DEFAULT '',  
\`alumnograduacion\_fotoacto\` varchar(40) NOT NULL DEFAULT ''

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE \`alumnograduacion\`  
  ADD PRIMARY KEY (\`alumnograduacion\_dni\`),  
  ADD UNIQUE KEY \`alumnograduacion\_login\` (\`alumnograduacion\_login\`);

Formatos permitidos

| alumnograduacion\_login | alfabéticos sin acentos ni ñ, min 4 max 15 |
| :---- | :---- |
| alumnograduacion\_password | alfabéticos y espacios sin acentos ni ñ, min 8 max 100 |
| alumnograduacion\_nombre | alfabéticos con acentos, ñ y espacios, min 2 max 25 |
| alumnograduacion\_apellidos | alfabéticos con acentos, ñ y espacios, min 2 max 35 |
| alumnograduacion\_titulacion | valores posibles: 'GREI','GRIA','MEI','MIA','PCEO' |
| alumnograduacion\_dni | formato nif o nie con letras válidas para los números |
| alumnograduacion\_telefono | 9 dígitos (0-9) |
| alumnograduacion\_direccion | alfanuméricos con acentos y ñ y espacios |
| alumnograduacion\_email | formato email |
| alumnograduacion\_fotoacto | alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min 7 max 100\. Sólo jpg y tamaño de fichero menor de 2.000.000 bytes. |

**Objetivos**

a) Determinar la definición de los test que son necesarios para establecer la validez de los datos introducidos en el formularios y sus mensajes correspondientes, que el usuario debe recibir como respuesta a la introducción de los mismos. 

b) Determinar el conjunto de pruebas que se deben realizar para verificar el correcto funcionamiento de los test definidos tanto en su respuesta positiva como negativa.

**Propósito**

1\) Realizar la entrega de un un fichero texto ascii con el nombre ET1\_NombreApellidosAlumno.js para la indicación de los datos de entrega en una variable json.

Debe contener el nombre del alumno la entrega, y las horas dedicadas en el total de la entrega con el siguiente formato:

datosgenerales \= Array(Apellido1 Apellido2 Nombre (del Alumno), entrega, horasdedicadas);

2\) Realizar la entrega de un fichero texto ascii con el nombre ET1\_nombreentidad\_infotest.js para la definición de los test de formato de campo.

Cada definición de test debe contener la siguiente información en variable json:

Las definiciones de tests se crearán, para los campos del formulario, mediante un array de nombre ‘nombreentidad\_def\_tests’ que contenga:

la entidad,   
el campo,   
el número de definición de test (secuencial desde 1 hasta el final)  
la descripción del test   
la acción a realizar  
el resultado esperado para este test (boolean/string)  
el mensaje de respuesta asociado al resultado. (en el mismo idioma para todos los tests)

Las pruebas se crearán, para los campos del formulario que no sean input tipo file, mediante un array de nombre ‘nombreentidad\_tests\_fields’ que contenga:

la entidad,   
el campo,   
el número de definición de test,   
el número de prueba (secuencial desde 1 hasta el final)  
la acción a realizar  
valor/es a probar en array \[\[atributo, valor\]\]  
el código asociado de error/valor true de éxito

Las pruebas para tipo file se crearán mediante un array de nombre ‘nombrentidad\_tests\_files’ que contenga:

la entidad,   
el campo,   
el número de definición de test,   
el número de prueba (secuencial desde 1 hasta el final)  
la acción a realizar  
el parámetro a probar (max\_size\_file, type\_file, format\_name\_file)   
valor/es de parámetro a probar \[\[parámetro, valor\]\]  
el código asociado de error/valor true de éxito

**Historias de usuario a cumplir**

| Particulares de entrega (Obligatorio. Si se incumple alguno de estos criterios la nota será 0\) 1\. Los ficheros tienen el nombre, formato y tipo indicado en la entrega 2\. El directorio a entregar existe y tiene el nombre indicado en la entrega 3\. El alumno evaluado ha indicado el número de horas utilizadas en la realización de la entrega Por cada error en la definición de test a realizar 0,1 Por cada error en la definición de pruebas de test a realizar 0,1  |
| :---- |

**Forma de entrega**

1\) Para entregar el ejercicio ET1 de moovi de la asignatura se procederá de la siguiente forma: 

a) Introducir los dos ficheros solicitados en un directorio con nombre ET1\_NombreApellidosAlumno.

b) Comprimir el directorio en formato rar y darle el nombre ET1\_NombreApellidosAlumno.rar

(SE ENTREGA ANTES DEL VIERNES DÍA 10 DE OCTUBRE A LAS 23:59 HORAS)

