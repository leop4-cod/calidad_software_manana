function contarPalabras(texto) {
    if (typeof texto !== 'string' || !texto.trim()) {
        throw new TypeError("frase invalida");
    }
    const textoTrimed = texto.trim();
    if (textoTrimed === '')
        throw new TypeError("frase invalida");
    return textoTrimed.split(/\s+/).length;
}
module.exports = { contarPalabras }