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

        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <div class="rent__expiration">
            <div class="card__header">
                <h2>Vencimiento de servicios</h2>
                <a href="#" class="btn">Ver todos</a>
            </div>
            <table class="table-responsive">
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
                    <tr>
                        <td>L1</td>
                        <td>Jessica Cohaila</td>
                        <td>S/ 0.00</td>
                        <td>31/01/2022</td>
                        <td><span class="status emitido">Emitido</span></td>
                    </tr>
                    <tr>
                        <td>L2</td>
                        <td>Leonardo Yshiy Requena</td>
                        <td>S/ 500.00</td>
                        <td>25/01/2022</td>
                        <td><span class="status emitido">Emitido</span></td>
                    </tr>
                    <tr>
                        <td>2B</td>
                        <td>Ivette Bejerano Baeza</td>
                        <td>S/ 550.00</td>
                        <td>31/12/2021</td>
                        <td><span class="status vencido">Vencido</span></td>
                    </tr>
                    <tr>
                        <td>3A</td>
                        <td>-</td>
                        <td>S/ 250.00</td>
                        <td>31/01/2022</td>
                        <td><span class="status pendiente">Pendiente</span></td>
                    </tr>
                    <tr>
                        <td>3B</td>
                        <td>César Martínez Saavedra</td>
                        <td>S/ 250.00</td>
                        <td>31/01/2022</td>
                        <td><span class="status emitido">Emitido</span></td>
                    </tr>
                    <tr>
                        <td>3C</td>
                        <td>Julio Díaz Toribio</td>
                        <td>S/ 250.00</td>
                        <td>31/01/2022</td>
                        <td><span class="status emitido">Emitido</span></td>
                    </tr>
                    <tr>
                        <td>3D</td>
                        <td>Gabriel Yañez Henriquez</td>
                        <td>S/ 250.00</td>
                        <td>31/01/2022</td>
                        <td><span class="status emitido">Emitido</span></td>
                    </tr>
                </tbody>
            </table>
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