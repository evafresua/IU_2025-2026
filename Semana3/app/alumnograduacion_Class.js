class alumnograduacion extends Validations {
    // --- EDIT Validations ---
    EDIT_alumnograduacion_login_validation() { return this.ADD_alumnograduacion_login_validation(); }
    EDIT_alumnograduacion_password_validation() { return this.ADD_alumnograduacion_password_validation(); }
    EDIT_alumnograduacion_nombre_validation() { return this.ADD_alumnograduacion_nombre_validation(); }
    EDIT_alumnograduacion_apellidos_validation() { return this.ADD_alumnograduacion_apellidos_validation(); }
    EDIT_alumnograduacion_titulacion_validation() { return this.ADD_alumnograduacion_titulacion_validation(); }
    EDIT_alumnograduacion_dni_validation() { return this.ADD_alumnograduacion_dni_validation(); }
    EDIT_alumnograduacion_telefono_validation() { return this.ADD_alumnograduacion_telefono_validation(); }
    EDIT_alumnograduacion_direccion_validation() { return this.ADD_alumnograduacion_direccion_validation(); }
    EDIT_alumnograduacion_email_validation() { return this.ADD_alumnograduacion_email_validation(); }
    EDIT_alumnograduacion_fotoacto_validation() { return this.ADD_alumnograduacion_fotoacto_validation(); }

    // --- SEARCH Validations ---
    SEARCH_alumnograduacion_login_validation() {
        let value = document.getElementById('alumnograduacion_login').value;
        if (value.length === 0) return true;
        if (/[^A-Za-z]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return 'alumnograduacion_login_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_password_validation() {
        let value = document.getElementById('alumnograduacion_password').value;
        if (value.length === 0) return true;
        if (/[^A-Za-z ]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return 'alumnograduacion_password_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_nombre_validation() {
        let value = document.getElementById('alumnograduacion_nombre').value;
        if (value.length === 0) return true;
        if (/[^A-Za-záéíóúÁÉÍÓÚñÑ ]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
            return 'alumnograduacion_nombre_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_apellidos_validation() {
        let value = document.getElementById('alumnograduacion_apellidos').value;
        if (value.length === 0) return true;
        if (/[^A-Za-záéíóúÁÉÍÓÚñÑ \-]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
            return 'alumnograduacion_apellidos_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_titulacion_validation() {
        let value = document.getElementById('alumnograduacion_titulacion').value;
        if (value.length === 0) return true;
        const valid = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        if (!valid.includes(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return 'alumnograduacion_titulacion_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_dni_validation() {
        let value = document.getElementById('alumnograduacion_dni').value;
        if (value.length === 0) return true;
        if (!this.format('alumnograduacion_dni', '^[0-9]{8}[A-Za-z]$') && !this.format('alumnograduacion_dni', '^[XYZ][0-9]{7}[A-Za-z]$')) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
            return 'alumnograduacion_dni_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_telefono_validation() {
        let value = document.getElementById('alumnograduacion_telefono').value;
        if (value.length === 0) return true;
        if (!this.format('alumnograduacion_telefono', '^[0-9]{9}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return 'alumnograduacion_telefono_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_direccion_validation() {
        let value = document.getElementById('alumnograduacion_direccion').value;
        if (value.length === 0) return true;
        if (!this.format('alumnograduacion_direccion', "^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ ,]+$")) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
            return 'alumnograduacion_direccion_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_email_validation() {
        let value = document.getElementById('alumnograduacion_email').value;
        if (value.length === 0) return true;
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return 'alumnograduacion_email_format_KO';
        }
        return true;
    }
    SEARCH_alumnograduacion_fotoacto_validation() {
        let value = document.getElementById('alumnograduacion_fotoacto').value;
        if (value.length === 0) return true;
        if (!this.format('alumnograduacion_fotoacto', '^[^\s]+\.(jpg|png)$')) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO');
            return 'alumnograduacion_fotoacto_format_KO';
        }
        return true;
    }
    constructor(esTest) {
        super();
        this.dom = new dom();
        this.nombreentidad = 'alumnograduacion';

        if (esTest == 'test') {
            // Test mode, do not render form
        } else {
            this.dom.fillform(this.manual_form_creation(), 'IU_form');
        }
    }

    manual_form_creation() {
        var form_content = `
            <form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

            <label class="label_login">Login</label>
            <input type='text' id='alumnograduacion_login' name='alumnograduacion_login' onblur="return entidad.ADD_alumnograduacion_login_validation();"></input>
            <span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
            <br>

            <label class="label_password">Password</label>
            <input type='text' id='alumnograduacion_password' name='alumnograduacion_password' onblur="return entidad.ADD_alumnograduacion_password_validation();"></input>
            <span id="span_error_alumnograduacion_password"><a id="error_alumnograduacion_password"></a></span>
            <br>

            <label class="label_nombre">Nombre</label>
            <input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' onblur="return entidad.ADD_alumnograduacion_nombre_validation();"></input>
            <span id="span_error_alumnograduacion_nombre"><a id="error_alumnograduacion_nombre"></a></span>
            <br>

            <label class="label_apellidos">Apellidos</label>
            <input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos' onblur="return entidad.ADD_alumnograduacion_apellidos_validation();"></input>
            <span id="span_error_alumnograduacion_apellidos"><a id="error_alumnograduacion_apellidos"></a></span>
            <br>

            <label class="label_titulacion">Titulación</label>
            <select id='alumnograduacion_titulacion' name='alumnograduacion_titulacion' onblur="return entidad.ADD_alumnograduacion_titulacion_validation();">
                <option value="">Seleccione...</option>
                <option value="GREI">GREI</option>
                <option value="GRIA">GRIA</option>
                <option value="MEI">MEI</option>
                <option value="MIA">MIA</option>
                <option value="PCEO">PCEO</option>
            </select>
            <span id="span_error_alumnograduacion_titulacion"><a id="error_alumnograduacion_titulacion"></a></span>
            <br>

            <label class="label_dni">DNI/NIE</label>
            <input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni' onblur="return entidad.ADD_alumnograduacion_dni_validation();"></input>
            <span id="span_error_alumnograduacion_dni"><a id="error_alumnograduacion_dni"></a></span>
            <br>

            <label class="label_telefono">Teléfono</label>
            <input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono' onblur="return entidad.ADD_alumnograduacion_telefono_validation();"></input>
            <span id="span_error_alumnograduacion_telefono"><a id="error_alumnograduacion_telefono"></a></span>
            <br>

            <label class="label_direccion">Dirección</label>
            <input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion' onblur="return entidad.ADD_alumnograduacion_direccion_validation();"></input>
            <span id="span_error_alumnograduacion_direccion"><a id="error_alumnograduacion_direccion"></a></span>
            <br>

            <label class="label_email">Email</label>
            <input type='text' id='alumnograduacion_email' name='alumnograduacion_email' onblur="return entidad.ADD_alumnograduacion_email_validation();"></input>
            <span id="span_error_alumnograduacion_email"><a id="error_alumnograduacion_email"></a></span>
            <br>

            <label class="label_fotoacto">Foto Acto (opcional)</label>
            <input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto' onblur="return entidad.ADD_alumnograduacion_fotoacto_validation();"></input>
            <span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
            <br>

            <input id="submit_button" type="submit" value="Submit">
            </form>
        `;
        return form_content;
    }

    // --- ADD Validations ---
    ADD_alumnograduacion_login_validation() {
        let value = document.getElementById('alumnograduacion_login').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_only_spaces_KO');
            return 'alumnograduacion_login_only_spaces_KO';
        }
        if (/^\s+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_only_spaces_KO');
            return 'alumnograduacion_login_only_spaces_KO';
        }
        if (/\s/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_spaces_KO');
            return 'alumnograduacion_login_spaces_KO';
        }
        if (/[^A-Za-z]/.test(value)) {
            if (/[0-9]/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_numbers_KO');
                return 'alumnograduacion_login_numbers_KO';
            }
            // Symbols: anything not a-z, A-Z, not including accented letters
            if (/[áéíóúÁÉÍÓÚñÑüÜ]/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_symbols_KO');
                return 'alumnograduacion_login_tilde_KO';
            }
            if (/[^A-Za-z0-9\s]/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_symbols_KO');
                return 'alumnograduacion_login_symbols_KO';
            }

            
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
            return 'alumnograduacion_login_format_KO';
        }
        if (value.length < 4) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
            return 'alumnograduacion_login_min_size_KO';
        }
        if (value.length > 15) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
            return 'alumnograduacion_login_max_size_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    ADD_alumnograduacion_password_validation() {
        let value = document.getElementById('alumnograduacion_password').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_only_spaces_KO');
            return 'alumnograduacion_password_only_spaces_KO';
        }
        if (/^\s+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_only_spaces_KO');
            return 'alumnograduacion_password_only_spaces_KO';
        }
        if (/[0-9]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_numbers_KO');
            return 'alumnograduacion_password_numbers_KO';
        }
        // Symbols: anything not a-z, A-Z, space (including accented letters and other symbols)
        if (/[^A-Za-z \s]/.test(value) || /[áéíóúÁÉÍÓÚñÑüÜ@#\$%&\*\(\)\[\]\{\}\.,;:<>\/?\\|]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_symbols_KO');
            return 'alumnograduacion_password_symbols_KO';
        }
        if (/[^A-Za-z ]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
            return 'alumnograduacion_password_format_KO';
        }
        if (value.length < 8) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
            return 'alumnograduacion_password_min_size_KO';
        }
        if (value.length > 64) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
            return 'alumnograduacion_password_max_size_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    ADD_alumnograduacion_nombre_validation() {
        let value = document.getElementById('alumnograduacion_nombre').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_only_spaces_KO');
            return 'alumnograduacion_nombre_only_spaces_KO';
        }
        if (/^\s+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_only_spaces_KO');
            return 'alumnograduacion_nombre_only_spaces_KO';
        }
        if (/[^A-Za-záéíóúÁÉÍÓÚñÑ ]/.test(value)) {
            if (/[0-9]/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_numbers_KO');
                return 'alumnograduacion_nombre_numbers_KO';
            }
            if (/[^A-Za-záéíóúÁÉÍÓÚñÑ0-9\s]/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_symbols_KO');
                return 'alumnograduacion_nombre_symbols_KO';
            }
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
            return 'alumnograduacion_nombre_format_KO';
        }
        if (value.length < 2) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO');
            return 'alumnograduacion_nombre_min_size_KO';
        }
        if (value.length > 25) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
            return 'alumnograduacion_nombre_max_size_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    ADD_alumnograduacion_apellidos_validation() {
        let value = document.getElementById('alumnograduacion_apellidos').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_only_spaces_KO');
            return 'alumnograduacion_apellidos_only_spaces_KO';
        }
        if (/^\s+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_only_spaces_KO');
            return 'alumnograduacion_apellidos_only_spaces_KO';
        }
        if (/[0-9]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_numbers_KO');
            return 'alumnograduacion_apellidos_numbers_KO';
        }
        if (/[^A-Za-záéíóúÁÉÍÓÚñÑ \-0-9]/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_symbols_KO');
            return 'alumnograduacion_apellidos_symbols_KO';
        }
        if (value.length < 2) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO');
            return 'alumnograduacion_apellidos_min_size_KO';
        }
        if (value.length > 35) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
            return 'alumnograduacion_apellidos_max_size_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }

    ADD_alumnograduacion_titulacion_validation() {
        let value = document.getElementById('alumnograduacion_titulacion').value;
        if (value === "" || value === undefined || value === null) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_empty_KO');
            return 'alumnograduacion_titulacion_empty_KO';
        }
        const valid = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        if (!valid.includes(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
            return 'alumnograduacion_titulacion_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;
    }

    ADD_alumnograduacion_dni_validation() {
        let value = document.getElementById('alumnograduacion_dni').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_min_size_KO');
            return 'alumnograduacion_dni_min_size_KO';
        }
        if (/\s/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_spaces_KO');
            return 'alumnograduacion_dni_spaces_KO';
        }
        if (value.length < 9) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_min_size_KO');
            return 'alumnograduacion_dni_min_size_KO';
        }
        if (value.length > 9) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO');
            return 'alumnograduacion_dni_max_size_KO';
        }
        if (/^[0-9]{9}$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_no_letter_KO');
            return 'alumnograduacion_dni_no_letter_KO';
        }
        if (/^[0-9]{8}Z$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
            return 'alumnograduacion_dni_format_KO';
        }
        if (!this.format('alumnograduacion_dni', '^[0-9]{8}[A-Za-z]$') && !this.format('alumnograduacion_dni', '^[XYZ][0-9]{7}[A-Za-z]$')) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO');
            return 'alumnograduacion_dni_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    ADD_alumnograduacion_telefono_validation() {
        let value = document.getElementById('alumnograduacion_telefono').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
            return 'alumnograduacion_telefono_min_size_KO';
        }
        if (/\s/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_spaces_KO');
            return 'alumnograduacion_telefono_spaces_KO';
        }
        if (/-/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_hyphens_KO');
            return 'alumnograduacion_telefono_hyphens_KO';
        }
        if (value.length < 9) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
            return 'alumnograduacion_telefono_min_size_KO';
        }
        if (value.length > 9) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
            return 'alumnograduacion_telefono_max_size_KO';
        }
        if (!this.format('alumnograduacion_telefono', '^[0-9]{9}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
            return 'alumnograduacion_telefono_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    ADD_alumnograduacion_direccion_validation() {
        let value = document.getElementById('alumnograduacion_direccion').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_empty_KO');
            return 'alumnograduacion_direccion_empty_KO';
        }
        if (/^\s+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_only_spaces_KO');
            return 'alumnograduacion_direccion_only_spaces_KO';
        }
        if (!this.max_size('alumnograduacion_direccion', 100)) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
            return 'alumnograduacion_direccion_max_size_KO';
        }
        if (!this.format('alumnograduacion_direccion', "^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ ,.]")) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
            return 'alumnograduacion_direccion_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    ADD_alumnograduacion_email_validation() {
        let value = document.getElementById('alumnograduacion_email').value;
        if (value.length === 0) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_empty_KO');
            return 'alumnograduacion_email_empty_KO';
        }
        if (value.length < 5) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO');
            return 'alumnograduacion_email_min_size_KO';
        }
        if (value.length > 40) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
            return 'alumnograduacion_email_max_size_KO';
        }
        if ((value.match(/@/g) || []).length > 1) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_multiple_at_KO');
            return 'alumnograduacion_email_multiple_at_KO';
        }
        if (!/@/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_no_at_KO');
            return 'alumnograduacion_email_no_at_KO';
        }
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
            if (/^[^@]+@$/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_no_domain_KO');
                return 'alumnograduacion_email_no_domain_KO';
            }
            this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
            return 'alumnograduacion_email_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    ADD_alumnograduacion_fotoacto_validation() {
        let value = document.getElementById('alumnograduacion_fotoacto').value;
        if (value.length === 0) {
            this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
            return true;
        }
        if (/^\s+$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_only_spaces_KO');
            return 'alumnograduacion_fotoacto_only_spaces_KO';
        }
        if (/\s/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_spaces_KO');
            return 'alumnograduacion_fotoacto_spaces_KO';
        }
        if (!/\.(jpg|png)$/.test(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_no_extension_KO');
            return 'alumnograduacion_fotoacto_no_extension_KO';
        }
        if (!this.format('alumnograduacion_fotoacto', '^[^\s]+\.(jpg|png)$')) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO');
            return 'alumnograduacion_fotoacto_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    ADD_submit_alumnograduacion() {
        let result = (
            this.ADD_alumnograduacion_login_validation() &
            this.ADD_alumnograduacion_password_validation() &
            this.ADD_alumnograduacion_nombre_validation() &
            this.ADD_alumnograduacion_apellidos_validation() &
            this.ADD_alumnograduacion_titulacion_validation() &
            this.ADD_alumnograduacion_dni_validation() &
            this.ADD_alumnograduacion_telefono_validation() &
            this.ADD_alumnograduacion_direccion_validation() &
            this.ADD_alumnograduacion_email_validation() &
            this.ADD_alumnograduacion_fotoacto_validation()
        );
        return Boolean(result);
    }
}