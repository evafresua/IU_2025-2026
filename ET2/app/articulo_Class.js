/* Copia local para Semana6 de articulo_Class.js */
/* articulo_Class.js
 * Clase cliente para gestionar la entidad 'articulo' en la IU.
 */

function articulo(){
    this.nombreentidad = 'articulo';
    this.columnasamostrar = ['CodigoA','TituloA','AutoresA','ISSN','FechaPublicacionR','EstadoA'];
    this.mostrarespecial = [];
    try{ this.validations = new Validations(); }catch(e){ this.validations = null; }
    try{ this.access_functions = new ExternalAccess(); }catch(e){ this.access_functions = null; }
    try{ this.dom = new dom(); }catch(e){ this.dom = null; }

    try{
        document.getElementById('text_title_page').classList.add('text_titulo_page_'+this.nombreentidad);
        document.getElementById('text_title_page').setAttribute('onclick','entidad = new articulo();');
        if (this.dom) this.dom.show_element('IU_manage_entity', 'block');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

        if (this.SEARCH) this.SEARCH();
    }catch(e){}
}

articulo.prototype.manual_form_creation = function(){
    var form = "";
    form += `<form id='form_iu' action='' method='POST' enctype='multipart/form-data' class='formulario'>`;
     form += `\n<input type='text' id='CodigoA' name='CodigoA' />`;
    form += `\n<span id='span_error_CodigoA'><a id='error_CodigoA'></a></span><br/>`;
    form += `\n<label class='label_AutoresA' for='AutoresA'></label>`;
    form += `\n<input type='text' id='AutoresA' name='AutoresA' />`;
    form += `\n<span id='span_error_AutoresA'><a id='error_AutoresA'></a></span><br/>`;
    form += `\n<label class='label_TituloA' for='TituloA'></label>`;
    form += `\n<input type='text' id='TituloA' name='TituloA' />`;
    form += `\n<span id='span_error_TituloA'><a id='error_TituloA'></a></span><br/>`;
    form += `\n<label class='label_TituloR' for='TituloR'></label>`;
    form += `\n<input type='text' id='TituloR' name='TituloR' />`;
    form += `\n<span id='span_error_TituloR'><a id='error_TituloR'></a></span><br/>`;
    form += `\n<label class='label_ISSN' for='ISSN'></label>`;
    form += `\n<input type='text' id='ISSN' name='ISSN' />`;
    form += `\n<span id='span_error_ISSN'><a id='error_ISSN'></a></span><br/>`;
    form += `\n<label class='label_VolumenR' for='VolumenR'></label>`;
    form += `\n<input type='text' id='VolumenR' name='VolumenR' />`;
    form += `\n<span id='span_error_VolumenR'><a id='error_VolumenR'></a></span><br/>`;
    form += `\n<label class='label_PagIniA' for='PagIniA'></label>`;
    form += `\n<input type='number' id='PagIniA' name='PagIniA' />`;
    form += `\n<span id='span_error_PagIniA'><a id='error_PagIniA'></a></span><br/>`;
    form += `\n<label class='label_PagFinA' for='PagFinA'></label>`;
    form += `\n<input type='number' id='PagFinA' name='PagFinA' />`;
    form += `\n<span id='span_error_PagFinA'><a id='error_PagFinA'></a></span><br/>`;
    form += `\n<label class='label_FechaPublicacionR' for='FechaPublicacionR'></label>`;
    form += `\n<input type='date' id='FechaPublicacionR' name='FechaPublicacionR' />`;
    form += `\n<span id='span_error_FechaPublicacionR'><a id='error_FechaPublicacionR'></a></span><br/>`;
    form += `\n<label id='label_FicheropdfA' class='FicheropdfA'></label>`;
    form += `\n<input type='text' id='FicheropdfA' name='FicheropdfA' />`;
    form += `\n<a id='link_FicheropdfA' href='#'><img src='./iconos/FILE.png' /></a><br/>`;
    form += `\n<label id='label_nuevo_FicheropdfA' class='nuevo_FicheropdfA'></label>`;
    form += `\n<input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA' />`;
    form += `\n<span id='span_error_nuevo_FicheropdfA'><a id='error_nuevo_FicheropdfA'></a></span><br/>`;
    form += `\n<label class='label_EstadoA' for='EstadoA'></label>`;
    form += `\n<select id='EstadoA' name='EstadoA'><option value='Enviado'>Enviado</option><option value='Revision'>Revision</option><option value='Publicado'>Publicado</option></select>`;
    form += `\n<span id='span_error_EstadoA'><a id='error_EstadoA'></a></span><br/>`;
    form += `\n</form>`;
    return form;
};

articulo.prototype.createForm_ADD = function(){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    // file-field UI according to spec: hide text/label and show file input in ADD
    if (this.dom) this.dom.setFileFieldState('FicheropdfA','', 'ADD');

    // onsubmit -> run ADD_submit_articulo; action executes ADD()
    if (this.dom) this.dom.assign_property_value('form_iu','onsubmit','return entidad.ADD_submit_'+this.nombreentidad+'();');
    if (this.dom) this.dom.assign_property_value('form_iu','action','javascript:entidad.ADD();');

    // place inline validations (onblur/onchange)
    if (this.dom) this.dom.colocarvalidaciones('form_iu','ADD');

    this.colocarboton('ADD');
};

articulo.prototype.createForm_EDIT = function(fila){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');

    // onsubmit -> run EDIT_submit_articulo; action executes EDIT()
    if (this.dom) this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad+'();');
    if (this.dom) this.dom.assign_property_value('form_iu','action','javascript:entidad.EDIT();');

    this.rellenarvaloresform(fila);
    // file-field UI according to spec: show text readonly, show file input to allow replacement
    if (this.dom) this.dom.setFileFieldState('FicheropdfA', (fila?fila.FicheropdfA:''), 'EDIT');

    // place inline validations
    if (this.dom) this.dom.colocarvalidaciones('form_iu','EDIT');

    this.colocarboton('EDIT');
};

articulo.prototype.createForm_DELETE = function(fila){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    this.rellenarvaloresform(fila);
    // file-field: show text readonly, hide file input
    if (this.dom) this.dom.setFileFieldState('FicheropdfA', (fila?fila.FicheropdfA:''), 'DELETE');
    // delete action
    var form = document.getElementById('form_iu'); if (form) form.action = 'javascript:entidad.DELETE();';
    this.colocarboton('DELETE');
};

articulo.prototype.createForm_SHOWCURRENT = function(fila){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    this.rellenarvaloresform(fila);
    if (this.dom) this.dom.setFileFieldState('FicheropdfA', (fila?fila.FicheropdfA:''), 'SHOWCURRENT');
    // no submit for SHOWCURRENT; just close button provided by UI
};

articulo.prototype.createForm_SEARCH = function(){
    var cont = document.getElementById('contenedor_IU_form') || document.getElementById('IU_form');
    if (!cont) return;
    cont.innerHTML = this.manual_form_creation();
    if (this.dom) this.dom.show_element('Div_IU_form','block');
    // search: show text field editable, hide file input
    if (this.dom) this.dom.setFileFieldState('FicheropdfA','', 'SEARCH');
    // onsubmit -> SEARCH
    if (this.dom) this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad+'();');
    if (this.dom) this.dom.assign_property_value('form_iu','action','javascript:entidad.SEARCH();');
    if (this.dom) this.dom.colocarvalidaciones('form_iu','SEARCH');
    this.colocarboton('SEARCH');
};

// submisssions stubs
articulo.prototype.DELETE_submit_articulo = function(){ return true; };
articulo.prototype.SEARCH_submit_articulo = function(){ return true; };

articulo.prototype.rellenarvaloresform = function(parametros){
    if (!parametros) return;
    var form = document.forms['form_iu'];
    if (!form) return;
    var campos = form.elements;
    for (var i=0;i<campos.length;i++){
        var id = campos[i].id;
        if (!id) continue;
        var el = document.getElementById(id);
        if (!el) continue;
        if (el.type == 'file' || el.type=='submit') continue;
        if (el.tagName == 'TEXTAREA') el.innerHTML = parametros[id] || '';
        else el.value = parametros[id] || '';
    }
};

articulo.prototype.colocarboton = function(accion){
    var form = document.getElementById('form_iu');
    if (!form) return;
    var divboton = document.createElement('div'); divboton.id='div_boton';
    form.appendChild(divboton);
    var boton = document.createElement('button'); boton.id='submit_button'; boton.type='submit';
    var img = document.createElement('img'); img.src = './iconos/'+accion+'.png';
    boton.appendChild(img);
    divboton.appendChild(boton);
};

articulo.prototype.ADD = async function(){
    if (!this.access_functions) return;
    await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'ADD')
    .then((respuesta) => {
        if (respuesta.ok){
            document.getElementById('contenedor_IU_form').innerHTML = '';
            if (this.dom) this.dom.hide_element('Div_IU_form');
            if (this.SEARCH) this.SEARCH();
        } else {
            if (this.dom) this.dom.abrirModalError(respuesta.code);
        }
    });
};

/* ----------------- Validations and submit checks ----------------- */
articulo.prototype.ADD_CodigoA_validation = function(){
    if (!(this.validations.format('CodigoA','^[0-9]+$'))){
        this.dom.mostrar_error_campo('CodigoA','CodigoA_format_KO');
        return 'CodigoA_format_KO';
    }
    this.dom.mostrar_exito_campo('CodigoA');
    return true;
};

articulo.prototype.ADD_TituloA_validation = function(){
    if (!(this.validations.min_size('TituloA',1))){
        this.dom.mostrar_error_campo('TituloA','TituloA_min_size_KO');
        return 'TituloA_min_size_KO';
    }
    this.dom.mostrar_exito_campo('TituloA');
    return true;
};

articulo.prototype.ADD_ISSN_validation = function(){
    var val = document.getElementById('ISSN').value;
    if (val === ''){ this.dom.mostrar_exito_campo('ISSN'); return true; }
    if (!(this.validations.format('ISSN','^\\d{4}-\\d{3}[\\dX]$'))){
        this.dom.mostrar_error_campo('ISSN','ISSN_format_KO');
        return 'ISSN_format_KO';
    }
    this.dom.mostrar_exito_campo('ISSN');
    return true;
};

articulo.prototype.ADD_PagIniA_validation = function(){
    var v = document.getElementById('PagIniA').value;
    if (v === '' || isNaN(v)){
        this.dom.mostrar_error_campo('PagIniA','PagIniA_format_KO');
        return 'PagIniA_format_KO';
    }
    this.dom.mostrar_exito_campo('PagIniA');
    return true;
};

articulo.prototype.ADD_PagFinA_validation = function(){
    var v = document.getElementById('PagFinA').value;
    var start = document.getElementById('PagIniA').value;
    if (v === '' || isNaN(v)){
        this.dom.mostrar_error_campo('PagFinA','PagFinA_format_KO');
        return 'PagFinA_format_KO';
    }
    if (start !== '' && !isNaN(start) && (parseInt(v) < parseInt(start))){
        this.dom.mostrar_error_campo('PagFinA','PagFinA_range_KO');
        return 'PagFinA_range_KO';
    }
    this.dom.mostrar_exito_campo('PagFinA');
    return true;
};

articulo.prototype.ADD_nuevo_FicheropdfA_validation = function(){
    var id = 'nuevo_FicheropdfA';
    // require file in ADD
    if (!(this.validations.not_exist_file(id))){
        this.dom.mostrar_error_campo(id,'ERR_FILE_REQUIRED');
        return 'ERR_FILE_REQUIRED';
    }
    if (!(this.validations.type_file(id,['application/pdf']))){
        this.dom.mostrar_error_campo(id,'ERR_FILE_TYPE');
        return 'ERR_FILE_TYPE';
    }
    if (!(this.validations.max_size_file(id,5242880))){
        this.dom.mostrar_error_campo(id,'ERR_FILE_TOO_LARGE');
        return 'ERR_FILE_TOO_LARGE';
    }
    this.dom.mostrar_exito_campo(id);
    return true;
};

articulo.prototype.ADD_submit_articulo = function(){
    // run all ADD validations; return true only if all pass
    var r = (
        (this.ADD_CodigoA_validation() === true) &
        (this.ADD_TituloA_validation() === true) &
        (this.ADD_ISSN_validation() === true) &
        (this.ADD_PagIniA_validation() === true) &
        (this.ADD_PagFinA_validation() === true) &
        (this.ADD_nuevo_FicheropdfA_validation() === true)
    );
    return Boolean(r);
};

// Método para formatear atributos cuando se quieran mostrar de forma especial
articulo.prototype.mostrarcambioatributo = function(atributo, valorentrada){
    // Si no hay reglas especiales, devolver valor tal cual
    if (!this.mostrarespecial || this.mostrarespecial.indexOf(atributo) === -1) return valorentrada;
    try{
        switch(atributo){
            case 'FechaPublicacionR':
                if (!valorentrada) return valorentrada;
                // valor entrada YYYY-MM-DD -> DD/MM/YYYY
                var parts = String(valorentrada).split('-');
                if (parts.length === 3) return parts[2] + '/' + parts[1] + '/' + parts[0];
                return valorentrada;
            default:
                return valorentrada;
        }
    }catch(e){ return valorentrada; }
};

// Wrappers 'personalize_' delegando a las validaciones existentes (convención requerida)
articulo.prototype.personalize_CodigoA_ADD = function(){ return this.ADD_CodigoA_validation(); };
articulo.prototype.personalize_TituloA_ADD = function(){ return this.ADD_TituloA_validation(); };
articulo.prototype.personalize_ISSN_ADD = function(){ return this.ADD_ISSN_validation(); };
articulo.prototype.personalize_PagIniA_ADD = function(){ return this.ADD_PagIniA_validation(); };
articulo.prototype.personalize_PagFinA_ADD = function(){ return this.ADD_PagFinA_validation(); };
articulo.prototype.personalize_nuevo_FicheropdfA_ADD = function(){ return this.ADD_nuevo_FicheropdfA_validation(); };
articulo.prototype.personalize_nuevo_FicheropdfA_EDIT = function(){ return this.EDIT_nuevo_FicheropdfA_validation(); };


// EDIT validations: reuse or slightly relax ADD checks
articulo.prototype.EDIT_TituloA_validation = articulo.prototype.ADD_TituloA_validation;
articulo.prototype.EDIT_ISSN_validation = articulo.prototype.ADD_ISSN_validation;
articulo.prototype.EDIT_PagIniA_validation = articulo.prototype.ADD_PagIniA_validation;
articulo.prototype.EDIT_PagFinA_validation = articulo.prototype.ADD_PagFinA_validation;
articulo.prototype.EDIT_nuevo_FicheropdfA_validation = function(){
    var id = 'nuevo_FicheropdfA';
    var obj = document.getElementById(id);
    if (!obj || obj.files.length == 0){ this.dom.mostrar_exito_campo(id); return true; }
    if (!(this.validations.type_file(id,['application/pdf']))){ this.dom.mostrar_error_campo(id,'ERR_FILE_TYPE'); return 'ERR_FILE_TYPE'; }
    if (!(this.validations.max_size_file(id,5242880))){ this.dom.mostrar_error_campo(id,'ERR_FILE_TOO_LARGE'); return 'ERR_FILE_TOO_LARGE'; }
    this.dom.mostrar_exito_campo(id); return true;
};

articulo.prototype.EDIT_submit_articulo = function(){
    var r = (
        (this.EDIT_TituloA_validation() === true) &
        (this.EDIT_ISSN_validation() === true) &
        (this.EDIT_PagIniA_validation() === true) &
        (this.EDIT_PagFinA_validation() === true) &
        (this.EDIT_nuevo_FicheropdfA_validation() === true)
    );
    return Boolean(r);
};

