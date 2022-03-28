const $PAGE_DASHBOARD = `

    <!-- cards -->
    <div class="card__box">
        <div class="card">
            <div>
                <div class="card__number">15</div>
                <div class="card__name">Inquilinos</div>
            </div>
            <div class="card__icon">
                <ion-icon name="eye"></ion-icon>
            </div>
        </div>
        <div class="card">
            <div>
                <div class="card__number">S/.842.10</div>
                <div class="card__name">Servicios</div>
            </div>
            <div class="card__icon">
                <ion-icon name="calculator"></ion-icon>
            </div>
        </div>
        <div class="card">
            <div>
                <div class="card__number"> 85</div>
                <div class="card__name">Inspecciones</div>
            </div>
            <div class="card__icon">
                <ion-icon name="clipboard"></ion-icon>
            </div>
        </div>
        <div class="card">
            <div>
                <div class="card__number">S/2750</div>
                <div class="card__name">Facturado Mensual</div>
            </div>
            <div class="card__icon">
                <ion-icon name="cash"></ion-icon>
            </div>
        </div>
    </div>

    <!-- data -->
    <div class="detail">

        <!-- Vencimiento de alquileres -->
        <div class="rent__expiration">
            <div class="card__header">
                <h2>Vencimiento de alquileres</h2>
                <a href="#" class="btn">Ver todos</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Fecha Venc.</td>
                        <td>Estado</td>
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

        <!-- Inquilinos -->
        <div class="recent__inquilino">
            <div class="card__header">
                <h2>Todos los inquilinos</h2>
            </div>
            <table>
                <tr>
                    <td>
                        <div class="row__inquilino">
                            <div class="inquilino__img"><img src="./images/general/user.png" alt=""></div>
                            <div class="inquilino__data">
                                <h4>Inquilino 1</h4>
                                <span>2A</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="row__inquilino">
                            <div class="inquilino__img"><img src="./images/general/user.png" alt=""></div>
                            <div class="inquilino__data">
                                <h4>Inquilino 1</h4>
                                <span>2A</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="row__inquilino">
                            <div class="inquilino__img"><img src="./images/general/user.png" alt=""></div>
                            <div class="inquilino__data">
                                <h4>Inquilino 1</h4>
                                <span>2A</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="row__inquilino">
                            <div class="inquilino__img"><img src="./images/general/user.png" alt=""></div>
                            <div class="inquilino__data">
                                <h4>Inquilino 1</h4>
                                <span>2A</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="row__inquilino">
                            <div class="inquilino__img"><img src="./images/general/user.png" alt=""></div>
                            <div class="inquilino__data">
                                <h4>Inquilino 1</h4>
                                <span>2A</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>

`

// // Menu toggle
// let $toggle = document.querySelector('.toggle');
// let $navigation = document.querySelector('.navigation');
// let $main = document.querySelector('.main');

// $toggle.onclick = function () {
//     $navigation.classList.toggle('active');
//     $main.classList.toggle('active');
// }


// // Add hovered class in selected list item
// let $list = document.querySelectorAll('.navigation li');

// function activeLink() {
//     $list.forEach(($item) =>
//         $item.classList.remove('hovered'));
//     this.classList.add('hovered');
// }

// $list.forEach(($item) => $item.addEventListener('mouseover', activeLink));