/* ALUVA - Eventos web
   Eventos usados: click, input, blur, submit, scroll, DOMContentLoaded. */

// Número de WhatsApp de ALUVA, solo dígitos con código de país (ej. '569XXXXXXXX').
// Mientras esté vacío, las consultas se envían por correo.
const NUMERO_WHATSAPP = '56967012846';
const CORREO = 'aluva.seguridad@gmail.com';

/** Enlace de contacto: WhatsApp si hay número, si no correo. */
function enlaceContacto(texto) {
    if (NUMERO_WHATSAPP) return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    return `mailto:${CORREO}?subject=${encodeURIComponent('Consulta desde el sitio web')}&body=${encodeURIComponent(texto)}`;
}

const canal = NUMERO_WHATSAPP ? 'WhatsApp' : 'correo';
const peso = n => '$' + n.toLocaleString('es-CL');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('anio').textContent = new Date().getFullYear();

    /* ---- 1. Catálogo: filtro por categoría + búsqueda (click, input) ---- */
    const lista = document.getElementById('lista-productos');
    const filtros = document.getElementById('filtros');
    const buscar = document.getElementById('buscar');
    const contador = document.getElementById('contador');
    const sinResultados = document.getElementById('sin-resultados');
    let categoria = 'todos';

    const norm = t => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

    lista.innerHTML = PRODUCTOS.map((p, i) => `
        <div class="col-6 col-md-4 col-xl-3" data-i="${i}">
            <article class="card h-100 tarjeta producto">
                <div class="producto-img"><img src="img/productos/${p.img}.jpg" alt="${p.nombre}" loading="lazy" width="640" height="640"></div>
                <div class="card-body d-flex flex-column p-3">
                    <h3>${p.nombre}</h3>
                    <p class="producto-meta mb-2">${[p.ref && 'Ref. ' + p.ref, p.tallas && 'Tallas ' + p.tallas].filter(Boolean).join(' · ') || '&nbsp;'}</p>
                    <div class="mt-auto d-flex flex-wrap justify-content-between align-items-center gap-2">
                        <span class="${p.precio ? 'precio' : 'precio-consulta'}">${p.precio ? peso(p.precio) : 'Consultar precio'}</span>
                        <button type="button" class="btn btn-marca btn-sm" data-cotizar-producto="${i}">Cotizar</button>
                    </div>
                </div>
            </article>
        </div>`).join('');
    const tarjetas = [...lista.children];

    filtros.innerHTML = [['todos', 'Todos'], ...Object.entries(CATEGORIAS)].map(([id, nombre]) =>
        `<button type="button" class="btn btn-filtro${id === 'todos' ? ' activo' : ''}" data-filtro="${id}" aria-pressed="${id === 'todos'}">${nombre}</button>`).join('');

    function aplicar() {
        const q = norm(buscar.value.trim());
        let visibles = 0;
        tarjetas.forEach(t => {
            const p = PRODUCTOS[t.dataset.i];
            const ok = (categoria === 'todos' || p.cat === categoria) &&
                (!q || norm(`${p.nombre} ${p.ref} ${CATEGORIAS[p.cat]}`).includes(q));
            t.hidden = !ok;
            if (ok) visibles++;
        });
        sinResultados.hidden = visibles > 0;
        contador.textContent = `Mostrando ${visibles} de ${PRODUCTOS.length} productos`;
    }

    filtros.addEventListener('click', e => {
        const b = e.target.closest('.btn-filtro');
        if (!b) return;
        categoria = b.dataset.filtro;
        filtros.querySelectorAll('.btn-filtro').forEach(o => {
            o.classList.toggle('activo', o === b);
            o.setAttribute('aria-pressed', o === b);
        });
        aplicar();
    });
    buscar.addEventListener('input', aplicar);
    aplicar();

    // Cotizar un producto concreto: abre el canal de contacto con el mensaje armado
    lista.addEventListener('click', e => {
        const b = e.target.closest('[data-cotizar-producto]');
        if (!b) return;
        const p = PRODUCTOS[b.dataset.cotizarProducto];
        const texto = `Hola, quiero cotizar: ${p.nombre}${p.ref ? ' (Ref. ' + p.ref + ')' : ''}. ¿Tienen disponibilidad?`;
        window.open(enlaceContacto(texto), '_blank', 'noopener');
    });

    if (NUMERO_WHATSAPP) document.getElementById('cta-final').textContent = 'Escríbenos por WhatsApp';

    // Botones generales de cotización (portada, menú, llamado a la acción)
    document.querySelectorAll('[data-cotizar]').forEach(a => a.addEventListener('click', e => {
        if (NUMERO_WHATSAPP && a.classList.contains('btn-lg')) {
            e.preventDefault();
            window.open(enlaceContacto('Hola, quiero diseñar o personalizar una prenda.'), '_blank', 'noopener');
        }
    }));

    /* ---- 2. Formulario de contacto (input, blur, submit) ---- */
    const form = document.getElementById('form-contacto');
    const mensaje = document.getElementById('mensaje');
    const cuenta = document.getElementById('cuenta-mensaje');
    const estado = document.getElementById('estado-form');
    document.getElementById('btn-enviar').textContent = `Enviar consulta por ${canal}`;

    mensaje.addEventListener('input', () => {
        cuenta.textContent = `${mensaje.value.length} / ${mensaje.maxLength}`;
    });

    form.querySelectorAll('input, textarea').forEach(campo => {
        campo.addEventListener('blur', () => marcar(campo));
        campo.addEventListener('input', () => {
            if (campo.classList.contains('is-invalid')) marcar(campo);
        });
    });

    function marcar(campo) {
        const ok = campo.value.trim() !== '' && campo.checkValidity();
        campo.classList.toggle('is-invalid', !ok);
        campo.classList.toggle('is-valid', ok);
        return ok;
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const campos = [...form.querySelectorAll('input, textarea')];
        if (!campos.map(marcar).every(Boolean)) {
            estado.textContent = 'Revisa los campos marcados en rojo.';
            form.querySelector('.is-invalid').focus();
            return;
        }
        const texto = `Hola, soy ${form.nombre.value.trim()} (${form.correo.value.trim()}). ${form.mensaje.value.trim()}`;
        window.open(enlaceContacto(texto), '_blank', 'noopener');
        estado.textContent = `Abrimos tu ${canal} con el mensaje listo para enviar. ¡Gracias por contactarnos!`;
        form.reset();
        campos.forEach(c => c.classList.remove('is-valid', 'is-invalid'));
        cuenta.textContent = `0 / ${mensaje.maxLength}`;
    });

    /* ---- 3. Scroll: botón volver arriba y enlace activo del menú ---- */
    const subir = document.getElementById('subir');
    const enlaces = [...document.querySelectorAll('.cabecera .nav-link')];
    const secciones = enlaces.map(a => document.querySelector(a.getAttribute('href')));

    subir.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    function alDesplazar() {
        subir.hidden = window.scrollY < 400;
        const y = window.scrollY + 120;
        let actual = 0;
        secciones.forEach((s, i) => { if (s && s.offsetTop <= y) actual = i; });
        enlaces.forEach((a, i) => a.classList.toggle('active', i === actual));
    }
    window.addEventListener('scroll', alDesplazar, { passive: true });
    alDesplazar();

    const menu = document.getElementById('menu');
    document.querySelectorAll('.cabecera a[href^="#"]').forEach(a => a.addEventListener('click', () => {
        if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }));

    /* ---- 4. Aparición de secciones al entrar en pantalla ---- */
    const secc = document.querySelectorAll('.aparece');
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        secc.forEach(s => s.classList.add('oculta'));
        const obs = new IntersectionObserver(entradas => entradas.forEach(en => {
            if (en.isIntersecting) { en.target.classList.remove('oculta'); obs.unobserve(en.target); }
        }), { threshold: 0.05 });
        secc.forEach(s => obs.observe(s));
    }
});
