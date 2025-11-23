function calcularPropina(cuenta, porcentaje) {
    if (typeof cuenta !== 'number' || cuenta <= 0) {
        throw new TypeError('cuenta invalida');
    }

    if (typeof porcentaje !== 'number' || porcentaje < 0 || porcentaje > 100) {
        throw new TypeError('porcentaje invalido');
    }

    const propina = cuenta * (porcentaje / 100);
    const totalPagar = cuenta + propina;

    return { cuenta, propina, totalPagar };
}

module.exports = { calcularPropina };
