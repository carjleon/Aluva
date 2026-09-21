/* Productos del catálogo ALUVA 2026 (docs/catalogo-aluva-2026.pdf).
   Precio vacío = sin precio en el catálogo: se muestra "Consultar precio". */
const CATEGORIAS = {
    polerones: 'Polerones y chaquetas',
    camisas: 'Camisas, blusas y poleras',
    pantalones: 'Pantalones',
    capa: 'Primera capa',
    altavis: 'Alta visibilidad',
    accesorios: 'Accesorios',
};

const PRODUCTOS = [
    // Polerones
    { cat: 'polerones', img: 'poleron-full-zip', nombre: 'Polerón Full Zip Unisex', ref: '09048', tallas: 'S – XXL', precio: 14990 },
    { cat: 'polerones', img: 'poleron-medio-cierre', nombre: 'Polerón Medio Cierre Unisex', ref: '09028', tallas: 'XXS – XXL', precio: 14990 },
    { cat: 'polerones', img: 'poleron-hoodie-canguro', nombre: 'Polerón Hoodie Canguro Unisex', ref: '09038', tallas: 'S – XXL', precio: 15990 },
    { cat: 'polerones', img: 'poleron-basic', nombre: 'Polerón Basic 65% Algodón Unisex', ref: '09018', tallas: 'S – XXL', precio: 15990 },
    { cat: 'polerones', img: 'chaqueta-softshell-1', nombre: 'Chaqueta Softshell', ref: '', tallas: '', precio: null },

    // Camisas y blusas
    { cat: 'camisas', img: 'camisa-jubae-hombre-06004', nombre: 'Camisa Ripstop Jubae Hombre', ref: '06004', tallas: 'S – XXXL', precio: 25990 },
    { cat: 'camisas', img: 'blusa-jubae-mujer-06005', nombre: 'Blusa Ripstop Jubae Mujer', ref: '06005', tallas: 'S – XXXL', precio: 25990 },
    { cat: 'camisas', img: 'camisa-jubae-hombre-06351', nombre: 'Camisa Ripstop Jubae Hombre', ref: '06351', tallas: 'S – XXXL', precio: 13990 },
    { cat: 'camisas', img: 'blusa-jubae-mujer-06052', nombre: 'Blusa Ripstop Jubae Mujer', ref: '06052', tallas: 'S – XXXL', precio: 12990 },
    { cat: 'camisas', img: 'polera-negra', nombre: 'Polera Negra', ref: '', tallas: '', precio: null },

    // Pantalones
    { cat: 'pantalones', img: 'pantalon-cargo-classic-mujer', nombre: 'Pantalón Cargo Classic Mujer', ref: '10127', tallas: '', precio: 13990 },
    { cat: 'pantalones', img: 'pantalon-cargo-classic-hombre', nombre: 'Pantalón Cargo Classic Hombre', ref: '10057', tallas: '40 al 62', precio: 14990 },
    { cat: 'pantalones', img: 'pantalon-gabardina-hombre', nombre: 'Pantalón Cargo Gabardina Hombre', ref: '10581', tallas: 'S – 4XL', precio: 9990 },
    { cat: 'pantalones', img: 'pantalon-gabardina-bicolor', nombre: 'Pantalón Cargo Gabardina Bi-Color con Cinta Hombre', ref: '10631', tallas: 'S – XXXL', precio: 10990 },
    { cat: 'pantalones', img: 'pantalon-alerce-mujer', nombre: 'Pantalón Cargo Alerce Mujer', ref: '30048', tallas: '36 al 56', precio: 19990 },
    { cat: 'pantalones', img: 'pantalon-rodillas-reforzadas', nombre: 'Pantalón Cargo Rodillas Reforzadas Hombre', ref: '30058', tallas: '40 al 60', precio: 21990 },
    { cat: 'pantalones', img: 'pantalon-mollen-mujer', nombre: 'Pantalón Ripstop Mollen Mujer', ref: '10671', tallas: '36 al 56', precio: 29990 },
    { cat: 'pantalones', img: 'pantalon-mollen-hombre', nombre: 'Pantalón Ripstop Mollen Hombre', ref: '10661', tallas: '40 al 60', precio: 29990 },
    { cat: 'pantalones', img: 'pantalon-rauli-mujer', nombre: 'Pantalón Raulí Mujer', ref: '10016', tallas: '38 al 52', precio: 31990 },
    { cat: 'pantalones', img: 'pantalon-rauli-hombre', nombre: 'Pantalón Raulí Hombre', ref: '10015', tallas: '42 al 56', precio: 32990 },
    { cat: 'pantalones', img: 'pantalon-sauco-mujer', nombre: 'Pantalón Sauco Mujer', ref: '10011', tallas: '38 al 52', precio: 34990 },
    { cat: 'pantalones', img: 'pantalon-sauco-hombre', nombre: 'Pantalón Sauco Hombre', ref: '10010', tallas: '42 al 56', precio: 34990 },

    // Primera capa
    { cat: 'capa', img: 'primera-capa-outwork-mujer', nombre: 'Primera Capa Outwork Mujer', ref: '13099', tallas: 'S – XXXL', precio: 19990 },
    { cat: 'capa', img: 'primera-capa-outwork-hombre', nombre: 'Primera Capa Outwork Hombre', ref: '13089', tallas: 'S – XXXL', precio: 19990 },
    { cat: 'capa', img: 'primera-capa-advance-mujer', nombre: 'Primera Capa Advance Line Mujer', ref: '', tallas: 'S – XXXL', precio: 23990 },
    { cat: 'capa', img: 'primera-capa-advance-hombre', nombre: 'Primera Capa Advance Line Hombre', ref: '', tallas: 'S – XXXL', precio: 23990 },

    // Alta visibilidad
    { cat: 'altavis', img: 'chaleco-geologo-amarillo-1', nombre: 'Chaleco Geólogo Minero Amarillo', ref: '', tallas: '', precio: null },
    { cat: 'altavis', img: 'chaleco-geologo-naranjo', nombre: 'Chaleco Geólogo Minero Naranjo', ref: '', tallas: '', precio: null },
    { cat: 'altavis', img: 'bandana-hivis', nombre: 'Bandana Hi-Vis Unisex', ref: '55151', tallas: '', precio: 3500 },
    { cat: 'altavis', img: 'gorro-hivis', nombre: 'Gorro Hi-Vis Micropolar Unisex (naranjo / amarillo)', ref: '04189', tallas: '', precio: 6990 },

    // Accesorios
    { cat: 'accesorios', img: 'bandana-practical', nombre: 'Bandana Practical Line Unisex', ref: '55141', tallas: '', precio: 3500 },
    { cat: 'accesorios', img: 'gorro-reflex', nombre: 'Gorro Reflex Unisex', ref: '04209', tallas: '', precio: 7990 },
];
