// personalize wrappers for alumnograduacion entity
(function(){
    var fields = ['login','password','nombre','apellidos','titulacion','dni','telefono','email','direccion','fotoacto'];
    for (var i=0;i<fields.length;i++){
        (function(suffix){
            var field = 'alumnograduacion_' + suffix;

            // ADD
            alumnograduacion.prototype['personalize_' + field + '_ADD'] = function(){
                var cand1 = 'ADD_' + field + '_validation';
                if (typeof this[cand1] === 'function') return this[cand1]();

                var alt1 = 'ADD_' + suffix + '_validation';
                if (typeof this[alt1] === 'function') return this[alt1]();
                var alt2 = 'ADD_' + suffix + '_persona_validation';
                if (typeof this[alt2] === 'function') return this[alt2]();

                var altMap = {
                    'nombre': 'nombre_persona',
                    'apellidos': 'apellidos_persona',
                    'email': 'email_persona',
                    'direccion': 'direccion_persona',
                    'telefono': 'telefono_persona',
                    'dni': 'dni'
                };
                if (altMap[suffix]){
                    var alt3 = 'ADD_' + altMap[suffix] + '_validation';
                    if (typeof this[alt3] === 'function') return this[alt3]();
                }

                if (suffix === 'fotoacto'){
                    if (typeof this['ADD_nuevo_foto_persona_validation'] === 'function') return this['ADD_nuevo_foto_persona_validation']();
                    if (typeof this['ADD_foto_persona_validation'] === 'function') return this['ADD_foto_persona_validation']();
                }

                return true;
            };

            // EDIT
            alumnograduacion.prototype['personalize_' + field + '_EDIT'] = function(){
                var cand1 = 'EDIT_' + field + '_validation';
                if (typeof this[cand1] === 'function') return this[cand1]();

                var alt1 = 'EDIT_' + suffix + '_validation';
                if (typeof this[alt1] === 'function') return this[alt1]();
                var alt2 = 'EDIT_' + suffix + '_persona_validation';
                if (typeof this[alt2] === 'function') return this[alt2]();

                var altMap = {
                    'nombre': 'nombre_persona',
                    'apellidos': 'apellidos_persona',
                    'email': 'email_persona',
                    'direccion': 'direccion_persona',
                    'telefono': 'telefono_persona',
                    'dni': 'dni'
                };
                if (altMap[suffix]){
                    var alt3 = 'EDIT_' + altMap[suffix] + '_validation';
                    if (typeof this[alt3] === 'function') return this[alt3]();
                }

                if (suffix === 'fotoacto'){
                    if (typeof this['EDIT_nuevo_foto_persona_validation'] === 'function') return this['EDIT_nuevo_foto_persona_validation']();
                    if (typeof this['EDIT_foto_persona_validation'] === 'function') return this['EDIT_foto_persona_validation']();
                }

                return true;
            };

            // SEARCH
            alumnograduacion.prototype['personalize_' + field + '_SEARCH'] = function(){
                var cand1 = 'SEARCH_' + field + '_validation';
                if (typeof this[cand1] === 'function') return this[cand1]();

                var alt1 = 'SEARCH_' + suffix + '_validation';
                if (typeof this[alt1] === 'function') return this[alt1]();
                var alt2 = 'SEARCH_' + suffix + '_persona_validation';
                if (typeof this[alt2] === 'function') return this[alt2]();

                var altMap = {
                    'nombre': 'nombre_persona',
                    'apellidos': 'apellidos_persona',
                    'email': 'email_persona',
                    'direccion': 'direccion_persona',
                    'telefono': 'telefono_persona',
                    'dni': 'dni'
                };
                if (altMap[suffix]){
                    var alt3 = 'SEARCH_' + altMap[suffix] + '_validation';
                    if (typeof this[alt3] === 'function') return this[alt3]();
                }

                return true;
            };

        })(fields[i]);
    }
})();
