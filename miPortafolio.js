const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});


window.addEventListener('load', () => {
    grid.filter(`[data-categoria="contact"]`)
    // document.getElementById('grid').style.display = 'block';
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase()
            grid.filter(`[data-categoria="${categoria}"]`)
        })
    })
})
