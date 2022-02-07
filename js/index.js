
window.addEventListener('hashchange', () => router(window.location.hash));

(function () {
    console.log(window.location.hash)
    router(window.location.hash);

})();
