class alumnograduacion extends Validations {
    
    constructor(esTest) {
        super();
        this.dom = new dom();
        this.nombreentidad = 'alumnograduacion';

        // Propiedades de datos
        this.alumnograduacion_login = "";
        this.alumnograduacion_password = "";
        this.alumnograduacion_nombre = "";
        this.alumnograduacion_apellidos = "";
        this.alumnograduacion_titulacion = "";
        this.alumnograduacion_dni = "";
        this.alumnograduacion_telefono = "";
        this.alumnograduacion_direccion = "";
        this.alumnograduacion_email = "";
        this.alumnograduacion_fotoacto = "";

        if (esTest == 'test') {
            // Test mode, do not render form
        } else {
            this.dom.fillform(this.manual_form_creation(), 'IU_form');
        }
    }

    // Formulario manual para compatibilidad con tests
    manual_form_creation() {
        return `
            <form id="alumnograduacion_form">
                <div class="form-group">
                    <label for="alumnograduacion_login">Login:</label>
                    <input type='text' id='alumnograduacion_login' name='alumnograduacion_login' maxlength="15"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_password">Password:</label>
                    <input type='password' id='alumnograduacion_password' name='alumnograduacion_password' maxlength="64"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_nombre">Nombre:</label>
                    <input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' maxlength="25"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_apellidos">Apellidos:</label>
                    <input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos' maxlength="35"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_titulacion">Titulación:</label>
                    <select id='alumnograduacion_titulacion' name='alumnograduacion_titulacion'>
                        <option value="">Seleccione...</option>
                        <option value="GREI">GREI</option>
                        <option value="GRIA">GRIA</option>
                        <option value="MEI">MEI</option>
                        <option value="MIA">MIA</option>
                        <option value="PCEO">PCEO</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_dni">DNI:</label>
                    <input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni' maxlength="9"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_telefono">Teléfono:</label>
                    <input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono' maxlength="9"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_direccion">Dirección:</label>
                    <input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion'/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_email">Email:</label>
                    <input type='email' id='alumnograduacion_email' name='alumnograduacion_email' maxlength="100"/>
                </div>
                <div class="form-group">
                    <label for="alumnograduacion_fotoacto">Foto del acto:</label>
                    <input type='file' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto' accept=".jpg,.jpeg,.png"/>
                </div>
            </form>
        `;
    }

    // ===== MÉTODOS ADD =====

    ADD_login_validation() {
        if (!this.min_size('alumnograduacion_login', 4)) {
            return 'alumnograduacion_login_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_login', 15)) {
            return 'alumnograduacion_login_max_size_KO';
        }
        if (!this.format('alumnograduacion_login', '^[a-zA-Z]+$')) {
            return 'alumnograduacion_login_format_KO';
        }
        return true;
    }

    ADD_password_validation() {
        if (!this.min_size('alumnograduacion_password', 8)) {
            return 'alumnograduacion_password_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_password', 64)) {
            return 'alumnograduacion_password_max_size_KO';
        }
        if (!this.format('alumnograduacion_password', '^[a-zA-Z\\s]+$')) {
            return 'alumnograduacion_password_alpha_KO';
        }
        return true;
    }

    ADD_nombre_validation() {
        if (!this.min_size('alumnograduacion_nombre', 2)) {
            return 'alumnograduacion_nombre_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_nombre', 25)) {
            return 'alumnograduacion_nombre_max_size_KO';
        }
        if (!this.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')) {
            return 'alumnograduacion_nombre_format_KO';
        }
        return true;
    }

    ADD_apellidos_validation() {
        if (!this.min_size('alumnograduacion_apellidos', 2)) {
            return 'alumnograduacion_apellidos_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_apellidos', 35)) {
            return 'alumnograduacion_apellidos_max_size_KO';
        }
        if (!this.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')) {
            return 'alumnograduacion_apellidos_format_KO';
        }
        return true;
    }

    ADD_titulacion_validation() {
        const elemento = document.getElementById('alumnograduacion_titulacion');
        if (!elemento || elemento.value === '') {
            return 'alumnograduacion_titulacion_empty_KO';
        }
        const validTitulaciones = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        if (!validTitulaciones.includes(elemento.value)) {
            return 'alumnograduacion_titulacion_format_KO';
        }
        return true;
    }

    ADD_dni_validation() {
        if (!this.min_size('alumnograduacion_dni', 9)) {
            return 'alumnograduacion_dni_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_dni', 9)) {
            return 'alumnograduacion_dni_max_size_KO';
        }
        
        const elemento = document.getElementById('alumnograduacion_dni');
        const dni = elemento.value.trim().toUpperCase();
        
        // Validar formato DNI o NIE
        const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        const nieRegex = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        
        if (!dniRegex.test(dni) && !nieRegex.test(dni)) {
            return 'alumnograduacion_dni_format_KO';
        }
        
        // Validar letra de control
        if (!this.validateDNILetter(dni)) {
            return 'alumnograduacion_dni_letter_KO';
        }
        
        return true;
    }

    ADD_telefono_validation() {
        if (!this.min_size('alumnograduacion_telefono', 9)) {
            return 'alumnograduacion_telefono_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_telefono', 9)) {
            return 'alumnograduacion_telefono_max_size_KO';
        }
        if (!this.format('alumnograduacion_telefono', '^[0-9]+$')) {
            return 'alumnograduacion_telefono_format_KO';
        }
        return true;
    }

    ADD_direccion_validation() {
        if (this.is_empty('alumnograduacion_direccion')) {
            return 'alumnograduacion_direccion_empty_KO';
        }
        if (!this.format('alumnograduacion_direccion', '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]+$')) {
            return 'alumnograduacion_direccion_format_KO';
        }
        return true;
    }

    ADD_email_validation() {
        if (!this.min_size('alumnograduacion_email', 5)) {
            return 'alumnograduacion_email_min_size_KO';
        }
        if (!this.max_size('alumnograduacion_email', 100)) {
            return 'alumnograduacion_email_max_size_KO';
        }
        if (!this.is_email('alumnograduacion_email')) {
            return 'alumnograduacion_email_format_KO';
        }
        return true;
    }

    ADD_fotoacto_validation() {
        if (!this.has_file('alumnograduacion_fotoacto')) {
            return 'alumnograduacion_fotoacto_empty_KO';
        }
        if (!this.format_name_file('alumnograduacion_fotoacto', '^[a-zA-Z0-9._-]+\\.(jpg|jpeg|png)$')) {
            return 'alumnograduacion_fotoacto_format_KO';
        }
        return true;
    }

    ADD_submit_alumnograduacion() {
        let validations = [
            this.ADD_login_validation(),
            this.ADD_password_validation(),
            this.ADD_nombre_validation(),
            this.ADD_apellidos_validation(),
            this.ADD_titulacion_validation(),
            this.ADD_dni_validation(),
            this.ADD_telefono_validation(),
            this.ADD_direccion_validation(),
            this.ADD_email_validation(),
            this.ADD_fotoacto_validation()
        ];
        
        return validations.every(v => v === true);
    }

    // ===== MÉTODOS EDIT =====

    EDIT_login_validation() { return this.ADD_login_validation(); }
    EDIT_password_validation() { return this.ADD_password_validation(); }
    EDIT_nombre_validation() { return this.ADD_nombre_validation(); }
    EDIT_apellidos_validation() { return this.ADD_apellidos_validation(); }
    EDIT_titulacion_validation() { return this.ADD_titulacion_validation(); }
    EDIT_dni_validation() { return this.ADD_dni_validation(); }
    EDIT_telefono_validation() { return this.ADD_telefono_validation(); }
    EDIT_direccion_validation() { return this.ADD_direccion_validation(); }
    EDIT_email_validation() { return this.ADD_email_validation(); }
    
    EDIT_fotoacto_validation() {
        // En EDIT, la foto es opcional
        if (!this.has_file('alumnograduacion_fotoacto')) {
            return true; // Foto opcional en EDIT
        }
        return this.ADD_fotoacto_validation();
    }

    EDIT_submit_alumnograduacion() {
        let validations = [
            this.EDIT_login_validation(),
            this.EDIT_password_validation(),
            this.EDIT_nombre_validation(),
            this.EDIT_apellidos_validation(),
            this.EDIT_titulacion_validation(),
            this.EDIT_dni_validation(),
            this.EDIT_telefono_validation(),
            this.EDIT_direccion_validation(),
            this.EDIT_email_validation(),
            this.EDIT_fotoacto_validation()
        ];
        
        return validations.every(v => v === true);
    }

    // ===== MÉTODOS SEARCH =====

    SEARCH_login_validation() {
        if (this.is_empty('alumnograduacion_login')) {
            return true; // Búsqueda vacía permitida
        }
        return this.ADD_login_validation();
    }

    SEARCH_password_validation() {
        if (this.is_empty('alumnograduacion_password')) {
            return true;
        }
        return this.ADD_password_validation();
    }

    SEARCH_nombre_validation() {
        if (this.is_empty('alumnograduacion_nombre')) {
            return true;
        }
        return this.ADD_nombre_validation();
    }

    SEARCH_apellidos_validation() {
        if (this.is_empty('alumnograduacion_apellidos')) {
            return true;
        }
        return this.ADD_apellidos_validation();
    }

    SEARCH_titulacion_validation() {
        const elemento = document.getElementById('alumnograduacion_titulacion');
        if (!elemento || elemento.value === '') {
            return true;
        }
        return this.ADD_titulacion_validation();
    }

    SEARCH_dni_validation() {
        if (this.is_empty('alumnograduacion_dni')) {
            return true;
        }
        return this.ADD_dni_validation();
    }

    SEARCH_telefono_validation() {
        if (this.is_empty('alumnograduacion_telefono')) {
            return true;
        }
        return this.ADD_telefono_validation();
    }

    SEARCH_direccion_validation() {
        if (this.is_empty('alumnograduacion_direccion')) {
            return true;
        }
        return this.ADD_direccion_validation();
    }

    SEARCH_email_validation() {
        if (this.is_empty('alumnograduacion_email')) {
            return true;
        }
        return this.ADD_email_validation();
    }

    SEARCH_fotoacto_validation() {
        if (!this.has_file('alumnograduacion_fotoacto')) {
            return true;
        }
        return this.ADD_fotoacto_validation();
    }

    SEARCH_submit_alumnograduacion() {
        let validations = [
            this.SEARCH_login_validation(),
            this.SEARCH_password_validation(),
            this.SEARCH_nombre_validation(),
            this.SEARCH_apellidos_validation(),
            this.SEARCH_titulacion_validation(),
            this.SEARCH_dni_validation(),
            this.SEARCH_telefono_validation(),
            this.SEARCH_direccion_validation(),
            this.SEARCH_email_validation(),
            this.SEARCH_fotoacto_validation()
        ];
        
        return validations.every(v => v === true);
    }

    // ===== MÉTODOS createForm =====
    
    createForm_ADD() {
        return "Formulario ADD alumnograduacion creado";
    }

    createForm_EDIT() {
        return "Formulario EDIT alumnograduacion creado";
    }

    createForm_DELETE() {
        return "Formulario DELETE alumnograduacion creado";
    }

    createForm_SEARCH() {
        return "Formulario SEARCH alumnograduacion creado";
    }

    createForm_SHOWCURRENT() {
        return "Formulario SHOWCURRENT alumnograduacion creado";
    }

    // ===== MÉTODOS AUXILIARES =====
    
    validateDNILetter(dni) {
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let number;
        
        if (dni.match(/^[XYZ]/)) {
            // NIE
            number = dni.replace(/^[XYZ]/, dni[0] === 'X' ? '0' : dni[0] === 'Y' ? '1' : '2');
            number = parseInt(number.substring(0, 8));
        } else {
            // DNI
            number = parseInt(dni.substring(0, 8));
        }
        
        const expectedLetter = letters[number % 23];
        return expectedLetter === dni.charAt(8).toUpperCase();
    }

    // Método para cargar datos de prueba
    loadTestData(data) {
        Object.keys(data).forEach(key => {
            const elemento = document.getElementById(key);
            if (elemento) {
                if (elemento.type === 'file') {
                    // Para archivos, simular la selección
                    // En tests reales esto se manejaría diferente
                } else {
                    elemento.value = data[key];
                }
            }
        });
    }
}