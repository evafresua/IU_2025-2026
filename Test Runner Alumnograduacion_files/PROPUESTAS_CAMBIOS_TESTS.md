# Propuestas de mejora para los tests de alumnograduacion (ADD, EDIT, SEARCH)

## 1. Estructura y nomenclatura
- Unificar la nomenclatura de los códigos de error y los nombres de los tests para que sean consistentes entre ADD, EDIT y SEARCH.
- Usar nombres de error claros y homogéneos (ejemplo: `*_min_size_KO`, `*_max_size_KO`, `*_format_KO`, `*_empty_KO`).
- Separar los tests por operación (ADD, EDIT, SEARCH) en bloques bien definidos y documentados.

## 2. Cobertura de casos
- Revisar que todos los campos tengan tests equivalentes para ADD, EDIT y SEARCH (por ejemplo, si hay un test de tamaño mínimo en ADD, debe existir en EDIT).
- Añadir tests para casos límite y valores extremos en todos los campos (ejemplo: tamaño exacto, valores vacíos, valores con caracteres especiales).
- Incluir tests negativos y positivos para cada validación.

## 3. Consistencia entre definiciones y tests
- Asegurarse de que los tests de definición (`alumnograduacion_def_tests`) y los de ejecución (`alumnograduacion_tests_fields`) cubren los mismos escenarios y usan los mismos códigos de error.
- Revisar que los mensajes de error sean claros y útiles para el usuario final.

## 4. Mejoras específicas
- Revisar los tests de email para incluir más variantes de formato incorrecto y correcto.
- Añadir tests para campos opcionales (como `fotoacto`) en todas las operaciones.
- Verificar que los tests de DNI/NIE cubren todos los formatos válidos e inválidos.
- Añadir tests para espacios y símbolos en todos los campos relevantes.

## 5. Documentación y comentarios
- Añadir comentarios explicativos en el código de los tests para facilitar el mantenimiento y la comprensión.
- Documentar los criterios de validación de cada campo en el propio archivo de tests.

## 6. Ejemplo de nomenclatura recomendada
```js
// Ejemplo para el campo login
Array('alumnograduacion', 'alumnograduacion_login', 1, 'ADD', 'Tamaño < 4', 'alumnograduacion_login_min_size_KO', 'El tamaño debe ser como min 4'),
Array('alumnograduacion', 'alumnograduacion_login', 2, 'ADD', 'Tamaño > 15', 'alumnograduacion_login_max_size_KO', 'El tamaño debe ser de máximo 15'),
Array('alumnograduacion', 'alumnograduacion_login', 3, 'ADD', 'No alfabético', 'alumnograduacion_login_format_KO', 'Solo puede contener caracteres alfabéticos sin acentos ni ñ'),
Array('alumnograduacion', 'alumnograduacion_login', 4, 'ADD', 'Solo espacios', 'alumnograduacion_login_only_spaces_KO', 'No puede contener solo espacios'),
Array('alumnograduacion', 'alumnograduacion_login', 5, 'ADD', 'Login válido', true, 'Éxito'),
```

---
**Resumen:**
- Unificar nomenclatura y estructura
- Mejorar cobertura y consistencia
- Documentar criterios y casos
- Añadir comentarios y ejemplos
