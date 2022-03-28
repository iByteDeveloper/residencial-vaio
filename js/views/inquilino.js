const $PAGE_INQUILINO = `
    <div class="body__inquilino">
        <h1>Gestión de Inquilino</h1>

        <p>Módulo para administrar los inquilinos que se registren en el sistema.</p>
        
        <div class="table__container">
            <button id="btnAddInquilino" class="button__primary">Agregar</button>
            <div class="table__inquilino">
                <div class="table__inquilino--head">
                    <div>N°</div>
                    <div>Tipo doc.</div>
                    <div>Nro doc.</div>
                    <div>Apellidos y Nombres</div>
                    <div>Correo electrónico</div>
                    <div>Nro teléfono</div>
                    <div>Nro celular</div>
                    <div>Herramientas</div>
                </div>
                <div class="table__inquilino--body">

                </div>
            </div>
        </div>
    </div>
`

const $TEMPLATE_MODAL_INQUILINO = `
    <div class="content__inquilino">
        <label id="lblIdPersona" class="display__none"></label>
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
            <label>Correo</label>
            <input id="txtCorreo" type="text">
        </div>
        <div class="input__text">
            <label>Nro de teléfono</label>
            <input id="txtTelefono" type="text">
        </div>
        <div class="input__text">
            <label>Nro de celular</label>
            <input id="txtCelular" type="text">
        </div>

        <div class="content__buttons">
            <button id="btnSavePersona" class="button__primary">Guardar</button>
            <button id="btnCancelPersona" class="button__secondary">Cancelar</button>
        </div>
    </div>
`