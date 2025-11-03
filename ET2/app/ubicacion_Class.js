/* Copia local para Semana6 de ubicacion_Class.js */
/* ubicacion_Class.js */
function ubicacion(){
    this.nombreentidad = 'ubicacion';
    this.columnasamostrar = ['id_site','site_locality','site_latitud','site_longitud','site_altitude'];
    this.mostrarespecial = [];
    try{ this.validations = new Validations(); }catch(e){ this.validations = null; }
    try{ this.access_functions = new ExternalAccess(); }catch(e){ this.access_functions = null; }
    try{ this.dom = new dom(); }catch(e){ this.dom = null; }
    // mostrar UI y preparar formulario al instanciar
    try{
        document.getElementById('text_title_page').classList.add('text_titulo_page_'+this.nombreentidad);
        document.getElementById('text_title_page').setAttribute('onclick','entidad = new ubicacion();');
        if (this.dom) this.dom.show_element('IU_manage_entity', 'block');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        if (this.SEARCH) this.SEARCH();
    }catch(e){}
}

ubicacion.prototype.manual_form_creation = function(){
    var form = "";
    form += `<form id='form_iu' action='' method='POST' enctype='multipart/form-data' class='formulario'>`;
    form += `\n<label class='label_id_site' for='id_site'></label>`;
    form += `\n<input type='number' id='id_site' name='id_site' />`;
    form += `\n<span id='span_error_id_site'><a id='error_id_site'></a></span><br/>`;
    form += `\n<label class='label_site_latitud' for='site_latitud'></label>`;
    form += `\n<input type='text' id='site_latitud' name='site_latitud' />`;
    form += `\n<span id='span_error_site_latitud'><a id='error_site_latitud'></a></span><br/>`;
    form += `\n<label class='label_site_longitud' for='site_longitud'></label>`;
    form += `\n<input type='text' id='site_longitud' name='site_longitud' />`;
    form += `\n<span id='span_error_site_longitud'><a id='error_site_longitud'></a></span><br/>`;
    form += `\n<label class='label_site_altitude' for='site_altitude'></label>`;
    form += `\n<input type='number' id='site_altitude' name='site_altitude' />`;
    form += `\n<span id='span_error_site_altitude'><a id='error_site_altitude'></a></span><br/>`;
    form += `\n<label class='label_site_locality' for='site_locality'></label>`;
    form += `\n<input type='text' id='site_locality' name='site_locality' />`;
    form += `\n<span id='span_error_site_locality'><a id='error_site_locality'></a></span><br/>`;
    form += `\n<label class='label_site_provider_login' for='site_provider_login'></label>`;
    form += `\n<input type='text' id='site_provider_login' name='site_provider_login' />`;
    form += `\n<span id='span_error_site_provider_login'><a id='error_site_provider_login'></a></span><br/>`;
    ['north','south','east','west'].forEach(dir=>{
        var field = 'site_'+dir+'_photo';
        form += `\n<label id='label_${field}' class='${field}'></label>`;
        form += `\n<input type='text' id='${field}' name='${field}' />`;
        form += `\n<a id='link_${field}' href='#'><img src='./iconos/FILE.png' /></a><br/>`;
        form += `\n<label id='label_nuevo_${field}' class='nuevo_${field}'></label>`;
        form += `\n<input type='file' id='nuevo_${field}' name='nuevo_${field}' />`;
        form += `\n<span id='span_error_nuevo_${field}'><a id='error_nuevo_${field}'></a></span><br/>`;
    });
    form += `\n</form>`;
    return form;
};

ubicacion.prototype.createForm_ADD = function(){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    // file fields: hide text/label and show file input in ADD
    ['north','south','east','west'].forEach(dir=>{
        var field = 'site_'+dir+'_photo';
        if (this.dom) this.dom.setFileFieldState(field,'','ADD');
    });
    var form = document.getElementById('form_iu');
    if (form){ form.action = 'javascript:entidad.ADD();' }
    this.colocarboton('ADD');
};

ubicacion.prototype.createForm_EDIT = function(fila){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    var form = document.getElementById('form_iu'); if (form) form.action = 'javascript:entidad.EDIT();';
    this.rellenarvaloresform(fila);
    ['north','south','east','west'].forEach(dir=>{
        var field = 'site_'+dir+'_photo';
        if (this.dom) this.dom.setFileFieldState(field, (fila?fila[field]:''), 'EDIT');
    });
    this.colocarboton('EDIT');
};

ubicacion.prototype.rellenarvaloresform = function(parametros){
    if (!parametros) return;
    var form = document.forms['form_iu']; if (!form) return;
    var campos = form.elements;
    for (var i=0;i<campos.length;i++){
        var id = campos[i].id; if (!id) continue;
        var el = document.getElementById(id); if (!el) continue;
        if (el.type=='file' || el.type=='submit') continue;
        if (el.tagName=='TEXTAREA') el.innerHTML = parametros[id] || '';
        else el.value = parametros[id] || '';
    }
};

ubicacion.prototype.colocarboton = function(accion){
    var form = document.getElementById('form_iu'); if (!form) return;
    var divboton = document.createElement('div'); divboton.id='div_boton'; form.appendChild(divboton);
    var boton = document.createElement('button'); boton.id='submit_button'; boton.type='submit';
    var img = document.createElement('img'); img.src='./iconos/'+accion+'.png'; boton.appendChild(img); divboton.appendChild(boton);
};

ubicacion.prototype.ADD = async function(){
    if (!this.access_functions) return;
    await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'ADD')
    .then((respuesta)=>{
        if (respuesta.ok){ document.getElementById('contenedor_IU_form').innerHTML=''; if (this.dom) this.dom.hide_element('Div_IU_form'); if (this.SEARCH) this.SEARCH(); }
        else { if (this.dom) this.dom.abrirModalError(respuesta.code); }
    });
};

/* --------- Validations for ubicacion (fields + files) --------- */
ubicacion.prototype.ADD_id_site_validation = function(){('id_site','id_site_format_KO');
        return 'id_site_format_KO';('id_site','id_site_format_KO');
        return 'id_site_format_KO';
    }
    this.dom.mostrar_exito_campo('id_site');
    return true;
};

ubicacion.prototype.ADD_site_latitud_validation = function(){
    var v = document.getElementById('site_latitud').value;
    if (v === '' || !(this.validations.format('site_latitud','^[-+]?[0-9]+(\\.[0-9]+)?$'))){
        this.dom.mostrar_error_campo('site_latitud','site_latitud_format_KO');
        return 'site_latitud_format_KO';
    }
    var num = parseFloat(v);
    if (isNaN(num) || num < -90 || num > 90){
        this.dom.mostrar_error_campo('site_latitud','site_latitud_format_KO');
        return 'site_latitud_format_KO';
    }
    this.dom.mostrar_exito_campo('site_latitud');
    return true;
};

ubicacion.prototype.ADD_site_longitud_validation = function(){
    var v = document.getElementById('site_longitud').value;
    if (v === '' || !(this.validations.format('site_longitud','^[-+]?[0-9]+(\\.[0-9]+)?$'))){
        this.dom.mostrar_error_campo('site_longitud','site_longitud_format_KO');
        return 'site_longitud_format_KO';
    }
    var num = parseFloat(v);
    if (isNaN(num) || num < -180 || num > 180){
        this.dom.mostrar_error_campo('site_longitud','site_longitud_format_KO');
        return 'site_longitud_format_KO';
    }
    this.dom.mostrar_exito_campo('site_longitud');
    return true;
};

ubicacion.prototype.ADD_site_altitude_validation = function(){
    var v = document.getElementById('site_altitude').value;
    if (v === ''){ this.dom.mostrar_exito_campo('site_altitude'); return true; }
    if (isNaN(v)){
        this.dom.mostrar_error_campo('site_altitude','site_altitude_format_KO');
        return 'site_altitude_format_KO';
    }
    this.dom.mostrar_exito_campo('site_altitude');
    return true;
};

ubicacion.prototype.ADD_site_locality_validation = function(){
    if (!(this.validations.min_size('site_locality',1))){
        this.dom.mostrar_error_campo('site_locality','site_locality_min_size_KO');
        return 'site_locality_min_size_KO';
    }
    this.dom.mostrar_exito_campo('site_locality');
    return true;
};

ubicacion.prototype.ADD_site_provider_login_validation = function(){
    if (!(this.validations.min_size('site_provider_login',1))){
        this.dom.mostrar_error_campo('site_provider_login','site_provider_login_min_size_KO');
        return 'site_provider_login_min_size_KO';
    }
    this.dom.mostrar_exito_campo('site_provider_login');
    return true;
};

// File validations for photos: north/south/east/west
['north','south','east','west'].forEach(dir=>{
    var field = 'nuevo_site_'+dir+'_photo';
    ubicacion.prototype['ADD_'+field+'_validation'] = function(){
        var id = field;
        var obj = document.getElementById(id);
        // in ADD for ubicacion photos are OPTIONAL -> if not provided, OK
        if (!obj || obj.files.length == 0){ this.dom.mostrar_exito_campo(id); return true; }
        if (!(this.validations.type_file(id,['image/jpeg','image/png']))){ this.dom.mostrar_error_campo(id,'ERR_FILE_TYPE'); return 'ERR_FILE_TYPE'; }
        if (!(this.validations.max_size_file(id,3145728))){ this.dom.mostrar_error_campo(id,'ERR_FILE_TOO_LARGE'); return 'ERR_FILE_TOO_LARGE'; }
        this.dom.mostrar_exito_campo(id); return true;
    };
    ubicacion.prototype['EDIT_'+field+'_validation'] = ubicacion.prototype['ADD_'+field+'_validation'];
});

// Submit checkers
ubicacion.prototype.ADD_submit_ubicacion = function(){
    var r = (
        (this.ADD_id_site_validation() === true) &
        (this.ADD_site_latitud_validation() === true) &
        (this.ADD_site_longitud_validation() === true) &
        (this.ADD_site_altitude_validation() === true) &
        (this.ADD_site_locality_validation() === true) &
        (this.ADD_site_provider_login_validation() === true)
    );
    // files optional validated separately when provided
    return Boolean(r);
};

ubicacion.prototype.EDIT_submit_ubicacion = function(){
    var r = (
        (this.ADD_site_latitud_validation() === true) &
        (this.ADD_site_longitud_validation() === true) &
        (this.ADD_site_altitude_validation() === true) &
        (this.ADD_site_locality_validation() === true) &
        (this.ADD_site_provider_login_validation() === true)
    );
    return Boolean(r);
};

// Si se desea mostrar un formato especial para un atributo, implementar aquí
// mostrarcambioatributo(atributo, valorentrada) que devuelve el valor formateado.
ubicacion.prototype.mostrarcambioatributo = function(atributo, valorentrada){
    // Si no hay reglas especiales, devolver valor tal cual
    if (!this.mostrarespecial || this.mostrarespecial.indexOf(atributo) === -1) return valorentrada;

    // Implementaciones de ejemplo para tipos comunes
    try{
        switch(atributo){
            case 'site_latitud':
            case 'site_longitud':
                var n = parseFloat(valorentrada);
                if (isNaN(n)) return valorentrada;
                return n.toFixed(6);
            case 'site_altitude':
                if (valorentrada === null || valorentrada === undefined || valorentrada === '') return '';
                return String(valorentrada) + ' m';
            case 'site_locality':
                // ejemplo: capitalizar
                return String(valorentrada).replace(/(^|\s)\S/g,function(t){return t.toUpperCase();});
            default:
                return valorentrada;
        }
    }catch(e){ return valorentrada; }
};

// Para cumplir la convención requerida, añadimos wrappers "personalize_atributo" que delegan
// a las validaciones existentes. Esto permite detectar fácilmente validaciones personalizadas.
ubicacion.prototype.personalize_id_site_ADD = function(){ return this.ADD_id_site_validation(); };
ubicacion.prototype.personalize_site_latitud_ADD = function(){ return this.ADD_site_latitud_validation(); };
ubicacion.prototype.personalize_site_longitud_ADD = function(){ return this.ADD_site_longitud_validation(); };
ubicacion.prototype.personalize_site_altitude_ADD = function(){ return this.ADD_site_altitude_validation(); };
ubicacion.prototype.personalize_site_locality_ADD = function(){ return this.ADD_site_locality_validation(); };
ubicacion.prototype.personalize_site_provider_login_ADD = function(){ return this.ADD_site_provider_login_validation(); };

// Wrappers para validaciones de ficheros (north/south/east/west)
['north','south','east','west'].forEach(dir=>{
    var field = 'nuevo_site_'+dir+'_photo';
    ubicacion.prototype['personalize_'+field+'_ADD'] = function(){ return this['ADD_'+field+'_validation'](); };
    ubicacion.prototype['personalize_'+field+'_EDIT'] = function(){ return this['EDIT_'+field+'_validation'](); };
});

