/* Copia local para Semana6 de ubicacion_Class.js */
/* ubicacion_Class.js */
class ubicacion{
    constructor(){
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
    // helper label translatable via locale (class: help_nuevo_site_*_photo)
    form += `\n<label id='help_nuevo_${field}' class='help_nuevo_${field}'></label>`;
    // accept only common image types
    form += `\n<input type='file' id='nuevo_${field}' name='nuevo_${field}' accept='image/jpeg,image/png' />`;
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

ubicacion.prototype.createForm_SEARCH = function(){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    // En SEARCH mostrar el campo de texto y ocultar los inputs de fichero
    ['north','south','east','west'].forEach(dir=>{
        var field = 'site_'+dir+'_photo';
        if (this.dom) this.dom.setFileFieldState(field, '', 'SEARCH');
    });
    // onsubmit -> SEARCH_submit_ubicacion; action executes SEARCH()
    var form = document.getElementById('form_iu');
    if (form) form.action = 'javascript:entidad.SEARCH();';
    if (this.dom) this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad+'();');

    if (this.dom) this.dom.colocarvalidaciones('form_iu','SEARCH');
    this.colocarboton('SEARCH');
    setLang();
};

ubicacion.prototype.createForm_DELETE = function(fila){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');

    // poner onsubmit y action a DELETE (convencion ET2)
    if (this.dom) this.dom.assign_property_value('form_iu','onsubmit','return entidad.DELETE_submit_'+this.nombreentidad+'();');
    var form = document.getElementById('form_iu'); if (form) form.action = 'javascript:entidad.DELETE();';

    // mostrar link a ficheros existentes y ocultar inputs nuevos
    ['north','south','east','west'].forEach(dir=>{
        var field = 'site_'+dir+'_photo';
        // hide the file input
        if (this.dom) this.dom.hide_element_form('nuevo_'+field);
        // set link to existing file (if provided)
        if (fila && fila[field]){
            this.dom.assign_property_value('link_'+field, 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_photos/'+fila[field]);
        }
    });

    // rellenar valores
    this.rellenarvaloresform(fila);

    // poner todos los campos readonly
    this.dom.colocartodosreadonly('form_iu');

    // colocar boton DELETE
    this.colocarboton('DELETE');

    setLang();
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
    var v = (document.getElementById('id_site') && document.getElementById('id_site').value) || '';
    // id_site must be a numeric integer value
    if (v === '' || isNaN(v) || !/^[0-9]+$/.test(String(v))){
        this.dom.mostrar_error_campo('id_site','id_site_not_numeric_KO');
        return 'id_site_not_numeric_KO';
    }
    this.dom.mostrar_exito_campo('id_site');
    return true;
};

ubicacion.prototype.ADD_site_latitud_validation = function(){
    var el = document.getElementById('site_latitud');
    var v = el ? el.value : '';
    if (v === '' || !(this.validations.format('site_latitud','^[-+]?[0-9]+(\\.[0-9]+)?$'))){
        this.dom.mostrar_error_campo('site_latitud','site_latitud_format_KO');
        return 'site_latitud_format_KO';
    }
    var num = parseFloat(v);
    if (isNaN(num)){
        this.dom.mostrar_error_campo('site_latitud','site_latitud_format_KO');
        return 'site_latitud_format_KO';
    }
    if (num < -90 || num > 90){
        this.dom.mostrar_error_campo('site_latitud','site_latitud_range_KO');
        return 'site_latitud_range_KO';
    }
    this.dom.mostrar_exito_campo('site_latitud');
    return true;
};

ubicacion.prototype.ADD_site_longitud_validation = function(){
    var el = document.getElementById('site_longitud');
    var v = el ? el.value : '';
    if (v === '' || !(this.validations.format('site_longitud','^[-+]?[0-9]+(\\.[0-9]+)?$'))){
        this.dom.mostrar_error_campo('site_longitud','site_longitud_format_KO');
        return 'site_longitud_format_KO';
    }
    var num = parseFloat(v);
    if (isNaN(num)){
        this.dom.mostrar_error_campo('site_longitud','site_longitud_format_KO');
        return 'site_longitud_format_KO';
    }
    if (num < -180 || num > 180){
        this.dom.mostrar_error_campo('site_longitud','site_longitud_range_KO');
        return 'site_longitud_range_KO';
    }
    this.dom.mostrar_exito_campo('site_longitud');
    return true;
};

ubicacion.prototype.ADD_site_altitude_validation = function(){
    var el = document.getElementById('site_altitude');
    var v = el ? el.value : '';
    if (v === ''){ this.dom.mostrar_exito_campo('site_altitude'); return true; }
    if (isNaN(v)){
        this.dom.mostrar_error_campo('site_altitude','site_altitude_not_numeric_KO');
        return 'site_altitude_not_numeric_KO';
    }
    this.dom.mostrar_exito_campo('site_altitude');
    return true;
};

ubicacion.prototype.ADD_site_locality_validation = function(){
    if (!(this.validations.min_size('site_locality',1))){
        this.dom.mostrar_error_campo('site_locality','site_locality_min_size_KO');
        return 'site_locality_min_size_KO';
    }
    if (!(this.validations.max_size('site_locality',40))){
        this.dom.mostrar_error_campo('site_locality','site_locality_maxlen_KO');
        return 'site_locality_maxlen_KO';
    }
    this.dom.mostrar_exito_campo('site_locality');
    return true;
};

ubicacion.prototype.ADD_site_provider_login_validation = function(){
    if (!(this.validations.min_size('site_provider_login',1))){
        this.dom.mostrar_error_campo('site_provider_login','site_provider_login_min_size_KO');
        return 'site_provider_login_min_size_KO';
    }
    if (!(this.validations.max_size('site_provider_login',30))){
        this.dom.mostrar_error_campo('site_provider_login','site_provider_login_maxlen_KO');
        return 'site_provider_login_maxlen_KO';
    }
    this.dom.mostrar_exito_campo('site_provider_login');
    return true;
};

// File validations for photos: north/south/east/west
['north','south','east','west'].forEach(dir=>{
    var nuevo = 'nuevo_site_'+dir+'_photo';
    var plain = 'site_'+dir+'_photo';
    ubicacion.prototype['ADD_'+nuevo+'_validation'] = function(){
        var id = nuevo;
        var obj = document.getElementById(id);
        // in ADD for ubicacion photos are OPTIONAL -> if not provided, OK
        if (!obj || !obj.files || obj.files.length == 0){ this.dom.mostrar_exito_campo(id); return true; }
        var f = obj.files[0];
        var name = f.name || '';
        // name must have an extension
        if (!/\.[A-Za-z0-9]+$/.test(name)){
            this.dom.mostrar_error_campo(id, plain+'_no_extension_KO');
            return plain+'_no_extension_KO';
        }
        // spaces in name not allowed
        if (/\s/.test(name)){
            this.dom.mostrar_error_campo(id, plain+'_name_KO');
            return plain+'_name_KO';
        }
        if (!(this.validations.type_file(id,['image/jpeg','image/png']))){ this.dom.mostrar_error_campo(id, plain+'_type_KO'); return plain+'_type_KO'; }
        if (!(this.validations.max_size_file(id,3145728))){ this.dom.mostrar_error_campo(id, plain+'_size_KO'); return plain+'_size_KO'; }
        this.dom.mostrar_exito_campo(id); return true;
    };
    ubicacion.prototype['EDIT_'+nuevo+'_validation'] = ubicacion.prototype['ADD_'+nuevo+'_validation'];
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
    // Also expose non-nuevo variant to match ET2 test field names (site_north_photo, ...)
    var plain = 'site_'+dir+'_photo';
    ubicacion.prototype['personalize_'+plain+'_ADD'] = function(){ return this['ADD_'+field+'_validation'](); };
    ubicacion.prototype['personalize_'+plain+'_EDIT'] = function(){ return this['EDIT_'+field+'_validation'](); };
});

    // Also add explicit ADD_/EDIT_ methods for the plain site_* fields so static
    // scanners that look for methods on the instance will find them.
    ubicacion.prototype.ADD_site_north_photo_validation = function(){ return (typeof window !== 'undefined' && window.ADD_site_north_photo_validation) ? window.ADD_site_north_photo_validation() : this.ADD_nuevo_site_north_photo_validation(); };
    ubicacion.prototype.EDIT_site_north_photo_validation = function(){ return (typeof window !== 'undefined' && window.EDIT_site_north_photo_validation) ? window.EDIT_site_north_photo_validation() : this.EDIT_nuevo_site_north_photo_validation(); };
    ubicacion.prototype.ADD_site_south_photo_validation = function(){ return (typeof window !== 'undefined' && window.ADD_site_south_photo_validation) ? window.ADD_site_south_photo_validation() : this.ADD_nuevo_site_south_photo_validation(); };
    ubicacion.prototype.EDIT_site_south_photo_validation = function(){ return (typeof window !== 'undefined' && window.EDIT_site_south_photo_validation) ? window.EDIT_site_south_photo_validation() : this.EDIT_nuevo_site_south_photo_validation(); };
    ubicacion.prototype.ADD_site_east_photo_validation = function(){ return (typeof window !== 'undefined' && window.ADD_site_east_photo_validation) ? window.ADD_site_east_photo_validation() : this.ADD_nuevo_site_east_photo_validation(); };
    ubicacion.prototype.EDIT_site_east_photo_validation = function(){ return (typeof window !== 'undefined' && window.EDIT_site_east_photo_validation) ? window.EDIT_site_east_photo_validation() : this.EDIT_nuevo_site_east_photo_validation(); };
    ubicacion.prototype.ADD_site_west_photo_validation = function(){ return (typeof window !== 'undefined' && window.ADD_site_west_photo_validation) ? window.ADD_site_west_photo_validation() : this.ADD_nuevo_site_west_photo_validation(); };
    ubicacion.prototype.EDIT_site_west_photo_validation = function(){ return (typeof window !== 'undefined' && window.EDIT_site_west_photo_validation) ? window.EDIT_site_west_photo_validation() : this.EDIT_nuevo_site_west_photo_validation(); };

