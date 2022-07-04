const $PAGE_INQUILINO = `
    <div class="body__inquilino">
        <h1>Gestión de Inquilino</h1>

        <p>Módulo para administrar los inquilinos que se registren en el sistema.</p>
        
        <div class="content__inquilino">
            <div>
                <div class="input__text">
                    <label>Buscar</label>
                    <input id="txtFiltroInquilino" type="text">
                </div>
                <button id="btnAddInquilino" class="button__primary">Nuevo</button>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <td>N°</td>
                            <td>Tipo documento</td>
                            <td>N° documento</td>
                            <td>Apellidos y Nombres</td>
                            <td>Correo electrónico</td>
                            <td>Nro de celular</td>
                            <td>Herramientas</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`

const $TEMPLATE_MODAL_INQUILINO = `
    <div class="content__inquilino-modal">
        <label id="lblIdInquilino" class="display__none" value="0"></label>
        <div class="input__text">
            <label>Tipo documento</label>
            <select id="cboTipoDocumento">
            <select>
        </div>
        <div class="input__text">
            <label>Nro documento</label>
            <input id="txtNdocumento" type="text">
        </div>
        <div class="input__text">
            <label>Ap. paterno</label>
            <input id="txtPaterno" type="text">
        </div>
        <div class="input__text">
            <label>Ap. materno</label>
            <input id="txtMaterno" type="text">
        </div>
        <div class="input__text">
            <label>Nombres</label>
            <input id="txtNombres" type="text">
        </div>
        <div class="input__text">
            <label>Nro de celular</label>
            <input id="txtCelular" type="text">
        </div>
        <div class="input__text col__1-3">
            <label>Correo</label>
            <input id="txtCorreo" type="text">
        </div>

        <div class="content__buttons">
            <button id="btnSavePersona" class="button__primary">Guardar</button>
            <button class="button__cancel button__secondary">Cancelar</button>
        </div>
    </div>
`
var $txtFiltroInquilino;
var dataInquilino;
var $btnAddInquilino;

function setFiltroInquilino() {
    $txtFiltroInquilino = document.getElementById('txtFiltroInquilino');
    $txtFiltroInquilino.addEventListener('keyup', filtroInquilino);
}

function filtroInquilino(e) {
    let filterValue = $txtFiltroInquilino.value;

    dataFilter = dataInquilino.filter((it) => it.paterno.toLowerCase().startsWith(filterValue.toLowerCase())
        || it.materno.toLowerCase().startsWith(filterValue.toLowerCase())
        || it.nombres.toLowerCase().startsWith(filterValue.toLowerCase())
        || it.ndocumento.toLowerCase().startsWith(filterValue.toLowerCase()));
    fillTableInquilino(dataFilter)
}

async function getTipoDocumento(_id) {
    return await fetch(`${GET_TIPODOCUMENTO}/${_id}`).then(resp => resp.json());
}

function fillTipoDocumento(_data) {
    let $options = _data.map(op => `<option value="${op.idtipodocumento}">${op.descorta} (${op.nombre})</option>`)
    document.getElementById('cboTipoDocumento').innerHTML = $options;
}

async function getPersona() {
    dataInquilino = await fetch(`${GET_PERSONA}/0`).then(resp => resp.json());
    fillTableInquilino(dataInquilino);

    $btnAddInquilino = document.getElementById('btnAddInquilino');
    $btnAddInquilino.addEventListener('click', addInquilino)
}

function fillTableInquilino(_data) {
    const $bodyTable = document.querySelector('.content__inquilino table tbody');
    $bodyTable.innerHTML = '';

    _data.map(function (item, i) {
        if (item.idestado !== 1) return;
        let row = `<tr>
                        <td><span>${i + 1}</span></td>
                        <td><span>${item.tipodocumento}</span></td>
                        <td><span>${item.ndocumento}</span></td>
                        <td><span>${item.paterno} ${item.materno}, ${item.nombres}</span></td>
                        <td><span>${item.email}</span></td>
                        <td><span>${item.celular}</span></td>
                        <td>
                            <div>
                                <span class="icon edt__inquilino" onclick="editInquilino(${item.idpersona});" title="Editar">
                                    <ion-icon name="create"></ion-icon>
                                </span>
                                <span class="icon del__inquilino" onclick="confirmInquilinoDelete(${item.idpersona});" title="Eliminar">
                                    <ion-icon name="trash"></ion-icon>
                                </span>
                            </div>
                        </td>
                    </tr>`;

        $bodyTable.insertAdjacentHTML('beforeend', row);
    });
}

async function addInquilino() {
    switchModal(true, 500, 60, 'Agregar inquilino');
    $modalBody.innerHTML = $TEMPLATE_MODAL_INQUILINO;
    fillTipoDocumento(await getTipoDocumento(0));

    document.getElementById('btnSavePersona').addEventListener('click', saveInquilino);
    document.querySelector('.button__cancel').addEventListener('click', () => { $modal.classList.add('display__none'); });
}

async function editInquilino(_id) {
    const data = await fetch(`${GET_PERSONA}/${_id}`).then(resp => resp.json());
    if (data === undefined) return;
    if (data === null) return;

    const oPersona = data[0];
    switchModal(true, 500, 60, 'Editar inquilino');
    $modalBody.innerHTML = $TEMPLATE_MODAL_INQUILINO;

    fillTipoDocumento(await getTipoDocumento(0));

    document.getElementById('lblIdInquilino').value = oPersona.idpersona;
    document.getElementById('cboTipoDocumento').value = oPersona.idtipodocumento;
    document.getElementById('txtNdocumento').value = oPersona.ndocumento;
    document.getElementById('txtPaterno').value = oPersona.paterno;
    document.getElementById('txtMaterno').value = oPersona.materno;
    document.getElementById('txtNombres').value = oPersona.nombres;
    document.getElementById('txtCorreo').value = oPersona.email;
    document.getElementById('txtCelular').value = oPersona.celular;

    document.getElementById('btnSavePersona').addEventListener('click', saveInquilino);
    document.querySelector('.button__cancel').addEventListener('click', () => { $modal.classList.add('display__none'); });
}

async function saveInquilino() {

    const $lblIdInquilino = document.getElementById('lblIdInquilino');

    let fData = new FormData();
    fData.append('_idusua', $VAL);
    fData.append('_idpe', $lblIdInquilino.value);
    fData.append('_idtipe', 2);
    fData.append('_pate', document.getElementById('txtPaterno').value);
    fData.append('_mate', document.getElementById('txtMaterno').value);
    fData.append('_nomb', document.getElementById('txtNombres').value);
    fData.append('_idtido', document.getElementById('cboTipoDocumento').value);
    fData.append('_ndoc', document.getElementById('txtNdocumento').value);
    fData.append('_celu', document.getElementById('txtCelular').value);
    fData.append('_mail', document.getElementById('txtCorreo').value);

    let { verbHTTP, urlHTTP } = evalFnInquilino($lblIdInquilino.value);
    const resp = await fetch(urlHTTP, { method: verbHTTP, body: fData }).then(resp => resp.json());

    if (resp === undefined) {
        alert('No se pudo guardar el registro.');
        return;
    }

    if (resp === null) {
        alert('No se pudo guardar el registro.');
        return;
    }

    let oResp = resp[0];
    if (oResp.status_response === 1) {
        switchModal(false);
        getPersona(0);
    }

    alert(oResp.description_response);
}

function evalFnInquilino(_id) {
    let verbHTTP, urlHTTP;
    if (parseInt(_id)) {
        verbHTTP = 'PATCH';
        urlHTTP = EDT_PERSONA;
    } else {
        verbHTTP = 'PUT';
        urlHTTP = ADD_PERSONA;
    }

    return { verbHTTP, urlHTTP }
}

function confirmInquilinoDelete(_id) {
    clearModalContentClass();
    switchModal(true, 200, 30, 'Eliminar inquilino');
    $modalBody.innerHTML = `
        <span>Recuerde que eliminar un registro es irreversible. ¿Desea continuar?</span>
        <label id="lblDeleteIdInquilinoD" class="display__none" value="0"></label>
        <div class="content__buttons">
            <button id="btnDeletePersona" class="button__primary">Eliminar</button>
            <button class="button__cancel button__secondary">Cancelar</button>
        </div>
    `;

    document.querySelector('#lblDeleteIdInquilinoD').value = _id;
    document.querySelector('#btnDeletePersona').addEventListener('click', deleteInquilino);
    document.querySelector('.button__cancel').addEventListener('click', () => { $modal.classList.add('display__none'); });
}

async function deleteInquilino(_id) {
    let fData = new FormData();
    fData.append('_idusua', $VAL);
    fData.append('_idpe', document.querySelector('#lblDeleteIdInquilinoD').value);
    const resp = await fetch(DEL_PERSONA, { method: 'DELETE', body: fData }).then(resp => resp.json());

    if (resp === undefined) return;
    if (resp === null) return;
    if (resp.length === 0) return;

    const oResp = resp[0];

    if (oResp.status_response > 0) {
        switchModal(false);
        getPersona(0);
    }

    alert(oResp.description_response)

}
