const { calcularPropina } = require('./calcularPropina');

describe('Calculo de Propina', () => {

    test('Happy path: calculo correcto', () => {
        const r = calcularPropina(100, 10);

        expect(r.propina).toBe(10);
        expect(r.totalPagar).toBe(110);
    });

    test('Sad path: cuenta invalida', () => {
        expect(() => calcularPropina(0, 10))
            .toThrow('cuenta invalida');
    });

    test('Sad path: porcentaje invalido', () => {
        expect(() => calcularPropina(100, 200))
            .toThrow('porcentaje invalido');
    });

});
