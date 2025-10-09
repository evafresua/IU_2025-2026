class Validations {

    constructor() {
        
    }
    
    /**
     * Validates minimum size of an element's value
     * @param {string} id - ID of the HTML element
     * @param {number} minsize - Minimum size required
     * @return {boolean} true if meets minimum size, false otherwise
     */
    min_size(id, minsize) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return false;
        }
        
        switch (elemento.tagName) {
            case 'INPUT':
                return this._validateInputMinSize(elemento, minsize);
            case 'SELECT':
                return elemento.value !== "" && elemento.value.length >= minsize;
            case 'TEXTAREA':
                return elemento.value.trim().length >= minsize;
            default:
                console.warn(`Unsupported element type: ${elemento.tagName}`);
                return false;
        }
    }

    /**
     * Validates maximum size of an element's value
     * @param {string} id - ID of the HTML element
     * @param {number} maxsize - Maximum size allowed
     * @return {boolean} true if meets maximum size, false otherwise
     */
    max_size(id, maxsize) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return false;
        }
        
        switch (elemento.tagName) {
            case 'INPUT':
                return this._validateInputMaxSize(elemento, maxsize);
            case 'SELECT':
                return elemento.value.length <= maxsize;
            case 'TEXTAREA':
                return elemento.value.length <= maxsize;
            default:
                console.warn(`Unsupported element type: ${elemento.tagName}`);
                return false;
        }
    }

    /**
     * Validates format using regular expression
     * @param {string} id - ID of the HTML element
     * @param {string} exprreg - Regular expression pattern
     * @return {boolean} true if format matches, false otherwise
     */
    format(id, exprreg) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return false;
        }
        
        try {
            const regex = new RegExp(exprreg);
            const valor = elemento.value || '';
            return regex.test(valor);
        } catch (error) {
            console.error(`Invalid regular expression: ${exprreg}`, error);
            return false;
        }
    }

    /**
     * Checks if a file input has a file selected
     * @param {string} id - ID of the file input element
     * @return {boolean} true if file exists, false if no file selected
     */
    has_file(id) {
        const fileInput = this._getFileInput(id);
        if (!fileInput) return false;
        
        return fileInput.files.length > 0;
    }

    /**
     * Legacy method - kept for backwards compatibility
     * @deprecated Use has_file() instead
     */
    not_exist_file(id) {
        return this.has_file(id);
    }

    /**
     * Validates file size
     * @param {string} id - ID of the file input element
     * @param {number} maxsize - Maximum size allowed in bytes
     * @return {boolean} true if file size is within limit, false otherwise
     */
    max_size_file(id, maxsize) {
        const fileInput = this._getFileInput(id);
        if (!fileInput) return false;
        
        if (fileInput.files.length === 0) {
            console.warn(`No file selected in element '${id}'`);
            return false;
        }
        
        return fileInput.files[0].size <= maxsize;
    }

    /**
     * Validates file type against allowed types
     * @param {string} id - ID of the file input element
     * @param {Array} allowedTypes - Array of allowed MIME types
     * @return {boolean} true if file type is allowed, false otherwise
     */
    type_file(id, allowedTypes) {
        const fileInput = this._getFileInput(id);
        if (!fileInput) return false;
        
        if (!Array.isArray(allowedTypes)) {
            console.error('allowedTypes must be an array');
            return false;
        }
        
        if (fileInput.files.length === 0) {
            console.warn(`No file selected in element '${id}'`);
            return false;
        }
        
        return allowedTypes.includes(fileInput.files[0].type);
    }

    /**
     * Validates file name format using regular expression
     * @param {string} id - ID of the file input element
     * @param {string} exprreg - Regular expression pattern
     * @return {boolean} true if filename matches pattern, false otherwise
     */
    format_name_file(id, exprreg) {
        const fileInput = this._getFileInput(id);
        if (!fileInput) return false;
        
        if (fileInput.files.length === 0) {
            console.warn(`No file selected in element '${id}'`);
            return false;
        }
        
        try {
            const regex = new RegExp(exprreg);
            return regex.test(fileInput.files[0].name);
        } catch (error) {
            console.error(`Invalid regular expression: ${exprreg}`, error);
            return false;
        }
    }

    /**
     * Checks if element is empty
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if element is empty, false otherwise
     */
    is_empty(id) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return true;
        }
        
        switch (elemento.tagName) {
            case 'INPUT':
                return this._isInputEmpty(elemento);
            case 'SELECT':
                return elemento.value === '' || elemento.selectedIndex <= 0;
            case 'TEXTAREA':
                return elemento.value.trim() === '';
            default:
                console.warn(`Unsupported element type: ${elemento.tagName}`);
                return true;
        }
    }

    /**
     * Validates if value contains only alphabetic characters and spaces
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if only contains letters and spaces, false otherwise
     */
    is_alphabetic(id) {
        return this.format(id, '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$');
    }

    /**
     * Validates if value contains only numeric characters
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if only contains numbers, false otherwise
     */
    is_numeric(id) {
        return this.format(id, '^[0-9]+$');
    }

    /**
     * Validates if value contains only alphanumeric characters
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if only contains letters and numbers, false otherwise
     */
    is_alphanumeric(id) {
        return this.format(id, '^[a-zA-Z0-9]+$');
    }

    /**
     * Validates email format
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if valid email format, false otherwise
     */
    is_email(id) {
        return this.format(id, '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    }

    /**
     * Validates URL format
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if valid URL format, false otherwise
     */
    is_url(id) {
        return this.format(id, '^(https?|ftp)://[^\\s/$.?#].[^\\s]*$');
    }

    /**
     * Validates Spanish DNI format and control letter
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if valid DNI, false otherwise
     */
    is_dni(id) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return false;
        }
        
        const dni = elemento.value.trim().toUpperCase();
        
        // Basic format check
        if (!/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(dni)) {
            return false;
        }
        
        // Control letter validation
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const number = parseInt(dni.substring(0, 8));
        const expectedLetter = letters[number % 23];
        
        return expectedLetter === dni.charAt(8);
    }

    /**
     * Validates Spanish NIE format and control letter
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if valid NIE, false otherwise
     */
    is_nie(id) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return false;
        }
        
        const nie = elemento.value.trim().toUpperCase();
        
        // Basic format check
        if (!/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(nie)) {
            return false;
        }
        
        // Convert first letter to number
        const firstLetter = nie.charAt(0);
        const numberPrefix = firstLetter === 'X' ? '0' : firstLetter === 'Y' ? '1' : '2';
        const number = parseInt(numberPrefix + nie.substring(1, 8));
        
        // Control letter validation
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const expectedLetter = letters[number % 23];
        
        return expectedLetter === nie.charAt(8);
    }

    /**
     * Validates Spanish phone number format
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if valid phone number, false otherwise
     */
    is_spanish_phone(id) {
        return this.format(id, '^(\\+34|0034|34)?[6789][0-9]{8}$');
    }

    /**
     * Validates date format (DD/MM/YYYY or DD-MM-YYYY)
     * @param {string} id - ID of the HTML element
     * @return {boolean} true if valid date format, false otherwise
     */
    is_date(id) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return false;
        }
        
        const dateValue = elemento.value.trim();
        
        // Check format
        if (!/^[0-9]{1,2}[\/\-][0-9]{1,2}[\/\-][0-9]{4}$/.test(dateValue)) {
            return false;
        }
        
        // Parse and validate actual date
        const parts = dateValue.split(/[\/\-]/);
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        
        const date = new Date(year, month - 1, day);
        
        return date.getFullYear() === year &&
               date.getMonth() === month - 1 &&
               date.getDate() === day;
    }

    // ========== PRIVATE HELPER METHODS ==========

    /**
     * Validates minimum size for input elements
     * @private
     */
    _validateInputMinSize(elemento, minsize) {
        switch (elemento.type) {
            case 'text':
            case 'email':
            case 'password':
            case 'search':
            case 'tel':
            case 'url':
                return elemento.value.trim().length >= minsize;
            case 'number':
                const numValue = elemento.value.toString();
                return numValue.length >= minsize;
            case 'file':
                return elemento.files.length > 0;
            default:
                console.warn(`Unsupported input type: ${elemento.type}`);
                return false;
        }
    }

    /**
     * Validates maximum size for input elements
     * @private
     */
    _validateInputMaxSize(elemento, maxsize) {
        switch (elemento.type) {
            case 'text':
            case 'email':
            case 'password':
            case 'search':
            case 'tel':
            case 'url':
                return elemento.value.length <= maxsize;
            case 'number':
                const numValue = elemento.value.toString();
                return numValue.length <= maxsize;
            case 'file':
                return elemento.files.length > 0 ? 
                       elemento.files[0].name.length <= maxsize : true;
            default:
                console.warn(`Unsupported input type: ${elemento.type}`);
                return false;
        }
    }

    /**
     * Checks if input element is empty
     * @private
     */
    _isInputEmpty(elemento) {
        switch (elemento.type) {
            case 'text':
            case 'email':
            case 'password':
            case 'search':
            case 'tel':
            case 'url':
                return elemento.value.trim() === '';
            case 'number':
                return elemento.value === '' || elemento.value === null;
            case 'file':
                return elemento.files.length === 0;
            case 'checkbox':
            case 'radio':
                return !elemento.checked;
            default:
                return elemento.value === '';
        }
    }

    /**
     * Gets and validates file input element
     * @private
     */
    _getFileInput(id) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id '${id}' not found`);
            return null;
        }
        
        if (elemento.tagName !== 'INPUT' || elemento.type !== 'file') {
            console.error(`Element with id '${id}' is not a file input`);
            return null;
        }
        
        return elemento;
    }
}