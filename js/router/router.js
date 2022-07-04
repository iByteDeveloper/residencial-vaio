const $app = document.querySelector('#app');

async function router(_route) {
    let htmlPage = '';
    console.log(`Ruta detectada: ${_route}`)
    switch (_route) {
        case '':
        case '#/':
        case '#/Home':
        case '#/Dashboard':
            htmlPage = $PAGE_DASHBOARD;
            break;


        case '#/Inquilinos':
            htmlPage = $PAGE_INQUILINO;
            getPersona();
            setTimeout(() => {
                setFiltroInquilino();
            }, 500);
            break;
    }


    $app.innerHTML = '';
    $app.insertAdjacentHTML('beforeend', `${htmlPage}`);
}