const materias = [
    { año: 0, semestre: 1, codigo: 'D1001', nombre: 'Matemática para Ing.', correlativas: [] }, 
    { año: 0, semestre: 1, codigo: 'I1001', nombre: 'Intro a la Informática', correlativas: [] }, 
    { año: 0, semestre: 2, codigo: 'INFIN', nombre: 'Inglés (Suficiencia)', correlativas: [] }, 
    { año: 1, semestre: 1, codigo: 'F1301', nombre: 'Matemática A', correlativas: ['D1001'] }, 
    { año: 1, semestre: 1, codigo: 'I1101', nombre: 'Programación I', correlativas: ['I1001'] }, 
    { año: 1, semestre: 1, codigo: 'I1166', nombre: 'Fund. de Arq. de Comp.', correlativas: ['I1001'] }, 
    { año: 1, semestre: 2, codigo: 'F1302', nombre: 'Matemática B', correlativas: ['F1301'] }, 
    { año: 1, semestre: 2, codigo: 'F1303', nombre: 'Física I', correlativas: ['F1301'] }, 
    { año: 1, semestre: 2, codigo: 'I1102', nombre: 'Programación II', correlativas: ['I1101'] }, 
    { año: 2, semestre: 1, codigo: 'F1304', nombre: 'Matemática C', correlativas: ['F1302'] }, 
    { año: 2, semestre: 1, codigo: 'I1103', nombre: 'Programación III', correlativas: ['I1102'] }, 
    { año: 2, semestre: 1, codigo: 'I1104', nombre: 'Taller de Lenguajes I', correlativas: ['I1102'] }, 
    { año: 2, semestre: 1, codigo: 'I1105', nombre: 'Arq. de Computadoras', correlativas: ['I1166'] }, 
    { año: 2, semestre: 2, codigo: 'F1305', nombre: 'Física II', correlativas: ['F1302', 'F1303'] }, 
    { año: 2, semestre: 2, codigo: 'F1306', nombre: 'Matemática D', correlativas: ['F1304'] }, 
    { año: 2, semestre: 2, codigo: 'I1106', nombre: 'Sist. Operativos', correlativas: ['I1102', 'I1105'] }, 
    { año: 2, semestre: 2, codigo: 'I1107', nombre: 'Taller de Lenguajes II', correlativas: ['I1104'] }, 
    { año: 3, semestre: 1, codigo: 'E1282', nombre: 'Electrotecnia y Electrónica', correlativas: ['F1304', 'F1305']}, 
    { año: 3, semestre: 1, codigo: 'E1301', nombre: 'Intro al Diseño Lógico', correlativas: ['I1105']}, 
    { año: 3, semestre: 1, codigo: 'F1315', nombre: 'Prob. y Estadística', correlativas: ['F1302']}, 
    { año: 3, semestre: 1, codigo: 'I1108', nombre: 'Conceptos de Bases de Datos', correlativas: ['I1102']}, 
    { año: 3, semestre: 2, codigo: 'E1302', nombre: 'Intro al Proc. de Señales', correlativas: ['F1306']}, 
    { año: 3, semestre: 2, codigo: 'E1303', nombre: 'Redes de Datos I', correlativas: ['I1106']}, 
    { año: 3, semestre: 2, codigo: 'I1109', nombre: 'Taller de Arquitectura', correlativas: ['E1301']}, 
    { año: 3, semestre: 2, codigo: 'I1110', nombre: 'Ingeniería de Software', correlativas: ['I1102']}, 
    { año: 4, semestre: 1, codigo: 'E1304', nombre: 'Instrumentación y Control', correlativas: ['E1282', 'E1302']}, 
    { año: 4, semestre: 1, codigo: 'E1305', nombre: 'Circuitos Digitales y Microc.', correlativas: ['I1109']}, 
    { año: 4, semestre: 1, codigo: 'I1111', nombre: 'Concurrencia y Paralelismo', correlativas: ['I1106', 'I1107']}, 
    { año: 4, semestre: 1, codigo: 'I1113', nombre: 'Economía y Emprendedorismo', correlativas: ['F1304']}, 
    { año: 4, semestre: 2, codigo: 'E1306', nombre: 'Taller de Proyecto I', correlativas: ['E1305', 'I1110']}, 
    { año: 4, semestre: 2, codigo: 'I1112', nombre: 'Bases de Datos', correlativas: ['I1108']}, 
    { año: 4, semestre: 2, codigo: 'I1114', nombre: 'Redes de Datos II', correlativas: ['E1303']}, 
    { año: 4, semestre: 2, codigo: 'I1115', nombre: 'Sistemas de Tiempo Real', correlativas: ['I1110', 'I1111']}, 
    { año: 5, semestre: 1, codigo: 'E1307', nombre: 'Intro Arq. Comp. Cuánticas', correlativas: ['E1306']}, 
    { año: 5, semestre: 1, codigo: 'I1116', nombre: 'Sist. Distribuidos y Paralelos', correlativas: ['I1111']}, 
    { año: 5, semestre: 1, codigo: 'I1117', nombre: 'Aspectos Legales', correlativas: ['I1113']}, 
    { año: 5, semestre: 1, codigo: 'OPTATIVA1', nombre: 'Optativa', correlativas: [] }, 
    { año: 5, semestre: 2, codigo: 'I1118', nombre: 'Taller de Proyecto II', correlativas: ['I1110']}, 
    { año: 5, semestre: 2, codigo: 'I1167', nombre: 'Intro Prog. Cuántica', correlativas: ['I1105', 'I1110']}, 
    { año: 5, semestre: 2, codigo: 'OPTATIVA2', nombre: 'Optativa', correlativas: [] }, 
    { año: 5, semestre: 2, codigo: 'ELECTIVA1', nombre: 'Electiva Humanística', correlativas: [] }, 
    { año: 6, semestre: 1, codigo: 'E1100', nombre: 'Práctica Profesional Sup. (PPS)', correlativas: [] }
];

let estadosMaterias = JSON.parse(localStorage.getItem('estadosMateriasV4.3')) || {}; 
function playSound(soundFile) {
    const audio = new Audio('sonidos/' + soundFile);
    audio.play().catch(error => console.log("No se pudo reproducir el sonido:", error));
    if (soundFile === 'aprobado.wav') {
        audio.volume = 0.2 ; 
    } else {
        audio.volume = 1.0;
    }
}

function getEstado(codigo) { return estadosMaterias[codigo] || { cursada: false, notas: [] }; }
function setEstado(codigo, nuevoEstado) {
    estadosMaterias[codigo] = { ...getEstado(codigo), ...nuevoEstado };
    if (!estadosMaterias[codigo].cursada) estadosMaterias[codigo].notas = [];
    localStorage.setItem('estadosMateriasV4.3', JSON.stringify(estadosMaterias));
    actualizarPlan();
    calcularYMostrarPromedios();
}

function tieneFinalAprobado(codigo) {
    const notas = getEstado(codigo).notas;
    return notas.length > 0 && notas[notas.length - 1] >= 4;
}

function sePuedeCursar(codigo) {
    const materiaData = materias.find(m => m.codigo === codigo);
    if (!materiaData) return false;
    if (materiaData.correlativas.length === 0) return true;
    const correlativasDeCursada = materiaData.correlativas.every(corrCodigo => getEstado(corrCodigo).cursada);
    if (!correlativasDeCursada) return false;
    for (const corrCodigo of materiaData.correlativas) {
        const corrData = materias.find(m => m.codigo === corrCodigo);
        if (corrData && corrData.correlativas.length > 0) {
            const abuelasCumplidas = corrData.correlativas.every(abuelaCodigo => tieneFinalAprobado(abuelaCodigo));
            if (!abuelasCumplidas) return false;
        }
    }
    return true;
}

function calcularYMostrarPromedios() {
    const notasAprobadas = [];
    const notasHistoricas = [];
    for (const codigo in estadosMaterias) {
        const estado = getEstado(codigo);
        if (estado.notas && estado.notas.length > 0) {
            notasHistoricas.push(...estado.notas);
            if (tieneFinalAprobado(codigo)) {
                notasAprobadas.push(estado.notas[estado.notas.length - 1]);
            }
        }
    }
    const promAprobadasDiv = document.querySelector('#promedio-aprobadas .promedio-valor');
    if (notasAprobadas.length > 0) {
        promAprobadasDiv.textContent = (notasAprobadas.reduce((a, b) => a + b, 0) / notasAprobadas.length).toFixed(2);
    } else { promAprobadasDiv.textContent = 'N/A'; }
    const promHistoricoDiv = document.querySelector('#promedio-historico .promedio-valor');
    if (notasHistoricas.length > 0) {
        promHistoricoDiv.textContent = (notasHistoricas.reduce((a, b) => a + b, 0) / notasHistoricas.length).toFixed(2);
    } else { promHistoricoDiv.textContent = 'N/A'; }
}

function actualizarPlan() {
    document.querySelectorAll('.materia').forEach(div => {
        const codigo = div.dataset.codigo;
        const estado = getEstado(codigo);
        const notaFinalDiv = div.querySelector('.nota-final-display');
        const notasAnterioresDiv = div.querySelector('.notas-anteriores-display');
        div.className = 'materia';
        if (notaFinalDiv) notaFinalDiv.style.display = 'none';
        if (notasAnterioresDiv) notasAnterioresDiv.style.display = 'none';
        if (tieneFinalAprobado(codigo)) {
            div.classList.add('final-aprobado');
            const notaFinal = estado.notas[estado.notas.length - 1];
            const notasAnteriores = estado.notas.slice(0, -1);
            if (notaFinalDiv) {
                notaFinalDiv.textContent = `Nota Final: ${notaFinal}`;
                notaFinalDiv.style.display = 'block';
            }
            if (notasAnterioresDiv && notasAnteriores.length > 0) {
                notasAnterioresDiv.innerHTML = `Anteriores: <span>${notasAnteriores.join(' ')}</span>`;
                notasAnterioresDiv.style.display = 'block';
            }
        } else if (estado.cursada) {
            div.classList.add('cursada');
            if (estado.notas.length > 0 && notasAnterioresDiv) {
                 notasAnterioresDiv.innerHTML = `Anteriores: <span>${estado.notas.join(' ')}</span>`;
                 notasAnterioresDiv.style.display = 'block';
            }
        } else {
            if (sePuedeCursar(codigo)) {
                div.classList.add('habilitada');
                if (codigo.startsWith('I')) div.classList.add('tipo-i'); else div.classList.add('tipo-general');
            } else { div.classList.add('bloqueada'); }
        }
    });
}

function renderizarPlan() {
    const planBody = document.getElementById('plan-body');
    planBody.innerHTML = '';
    const materiasPorAño = materias.reduce((acc, materia) => { (acc[materia.año] = acc[materia.año] || []).push(materia); return acc; }, {});
    Object.keys(materiasPorAño).sort((a,b) => a-b).forEach(añoNum => {
        const añoRow = document.createElement('div');
        let label = `${añoNum}° Año`; if(añoNum === '0') label = 'Nivelación y Req.'; if(añoNum === '6') label = 'Final';
        añoRow.className = 'año-row';
        añoRow.innerHTML = `<div class="año-label">${label}</div><div class="semestre-container semestre-1"></div><div class="semestre-container semestre-2"></div>`;
        materiasPorAño[añoNum].forEach(materia => {
            const materiaDiv = document.createElement('div');
            materiaDiv.className = 'materia';
            materiaDiv.dataset.codigo = materia.codigo;
            materiaDiv.innerHTML = 
                `<div class="materia-info">
                    <div class="codigo">${materia.codigo}</div><div class="nombre">${materia.nombre}</div>
                </div>
                <div class="materia-footer">
                    <div class="nota-final-container">
                        <div class="nota-final-display"></div>
                        <div class="notas-anteriores-display"></div>
                    </div>
                    <div class="nota-form">
                        <input type="number" min="1" max="10" step="1" placeholder="Nota" data-codigo="${materia.codigo}">
                        <button class="guardar-nota-btn" data-codigo="${materia.codigo}">Guardar</button>
                    </div>
                </div>`;
            const container = añoRow.querySelector(`.semestre-${materia.semestre}`);
            if(container) container.appendChild(materiaDiv);
        });
        planBody.appendChild(añoRow);
    });
    actualizarPlan();
    calcularYMostrarPromedios();
}

document.addEventListener('DOMContentLoaded', () => {
    const planBody = document.getElementById('plan-body');
    planBody.addEventListener('click', (e) => {
        const infoClickeada = e.target.closest('.materia-info');
        if (infoClickeada) {
            const materiaDiv = infoClickeada.parentElement;
            const codigo = materiaDiv.dataset.codigo;
            if (materiaDiv.classList.contains('bloqueada')) {
                playSound('desaprobado.wav');
                return;
            }
            if (tieneFinalAprobado(codigo)) return;
            
            const estadoActual = getEstado(codigo);
            setEstado(codigo, { cursada: !estadoActual.cursada });
            if (!estadoActual.cursada) playSound('toque.wav');
            else playSound('toque.wav');
        }
        const botonGuardarClickeado = e.target.closest('.guardar-nota-btn');
        if (botonGuardarClickeado) {
            const codigo = botonGuardarClickeado.dataset.codigo;
            const inputNota = planBody.querySelector(`input[data-codigo="${codigo}"]`);
            const notaValue = inputNota.value;
            if (notaValue === '') return;
            const notaNumerica = parseInt(notaValue, 10);
            if (!isNaN(notaNumerica) && notaNumerica >= 1 && notaNumerica <= 10) {
                if (notaNumerica >= 4) playSound('aprobado.wav');
                else playSound('desaprobado.wav');

                const estadoActual = getEstado(codigo);
                const nuevasNotas = [...estadoActual.notas, notaNumerica];
                setEstado(codigo, { notas: nuevasNotas });
                inputNota.value = '';
            } else {
                alert('Flaco, esa nota no existe');
            }
        }
    });

    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro que querés borrar todo tu progreso?')) {
            playSound('reset.wav');
            setTimeout(() => {
                localStorage.removeItem('estadosMateriasV4.3');
                location.reload();
            }, 300);
        }
    });

    renderizarPlan();
});