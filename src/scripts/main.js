AOS.init();

const dataDoEvento = new Date("jan 13, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteOEvendo = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvendo / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvendo % diaEmMs / horaEmMs)
    const minutosAteOEvento = Math.floor(distanciaAteOEvendo % horaEmMs / minutoEmMs);
    const secundosAteOEvento = Math.floor((distanciaAteOEvendo % minutoEmMs) / 1000)
    

    document.getElementById('contador').innerHTML = `Você está convidado para meu aniversário que começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${secundosAteOEvento}s`;
    if (distanciaAteOEvendo < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = ' Lamento mas você perdeu o maior evento do universo talvez na próxima'
    }
}, 1000)

function confirmarPresenca() {
    alert("Você acaba de confirmar sua presença, aguardo você lá");
}

window.onload = function() {
    document.getElementById("confirmarBtn").onclick = confirmarPresenca;
}
