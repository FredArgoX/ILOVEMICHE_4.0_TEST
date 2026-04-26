// Trigger Buttons (Set)
modalButtons = document.querySelectorAll('.btnx');

// Trigger Buttons (Individual)
const BTN_p01aguachiles       = document.getElementById('p01aguachiles');
const BTN_p02ceviches         = document.getElementById('p02ceviches');      
const BTN_p03botaneando       = document.getElementById('p03botaneando');      
const BTN_p04hamburguesas     = document.getElementById('p04hamburguesas');          
const BTN_p05jochos           = document.getElementById('p05jochos');  
const BTN_p06gonzalitas       = document.getElementById('p06gonzalitas');      
const BTN_p07                 = document.getElementById('p07');
const BTN_p08                 = document.getElementById('p08');
const BTN_p09chamoyadas       = document.getElementById('p09chamoyadas');  
const BTN_p10cerveza          = document.getElementById('p10cerveza');      
const BTN_p11mojitos          = document.getElementById('p11mojitos');      
const BTN_p12pinacoladafrappe = document.getElementById('p12pinacoladafrappe');              
const BTN_p13cuba             = document.getElementById('p13cuba');  
const BTN_p14whisky           = document.getElementById('p14whisky');  
const BTN_p15mentirosa        = document.getElementById('p15mentirosa');      
const BTN_p16jacaranda        = document.getElementById('p16jacaranda');      
const BTN_p17diablito         = document.getElementById('p17diablito');     
const BTN_p18bluelove         = document.getElementById('p18bluelove');     
const BTN_p19bicolor          = document.getElementById('p19bicolor');     
const BTN_p20cielorosa        = document.getElementById('p20cielorosa');     
const BTN_p21consentida       = document.getElementById('p21consentida');     
const BTN_p22margaritasfrappe = document.getElementById('p22margaritasfrappe');             
const BTN_p23paloma           = document.getElementById('p23paloma'); 
const BTN_p24frappevino       = document.getElementById('p24frappevino');     
const BTN_p25tintodeverano    = document.getElementById('p25tintodeverano');         
const BTN_p26copadevino       = document.getElementById('p26copadevino');     
const BTN_p27caribenas        = document.getElementById('p27caribenas');     
const BTN_p28sirena           = document.getElementById('p28sirena'); 
const BTN_p29mezcal           = document.getElementById('p29mezcal'); 
const BTN_p30carajillos       = document.getElementById('p30carajillos');     
const BTN_p31cubetas          = document.getElementById('p31cubetas');     
const BTN_p32tablas           = document.getElementById('p32tablas'); 
const BTN_p33varios           = document.getElementById('p33varios'); 
const BTN_p34frappes          = document.getElementById('p34frappes');     
const BTN_p35legos            = document.getElementById('p35legos'); 
const BTN_p36topping          = document.getElementById('p36topping');     

// Modal Elements
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const modalArea = document.getElementById('modal-area');

// Swiper Area Elements
const contentX = document.getElementById('s01');
const navBullets = document.getElementById('sw-nav');

// Save original states
let originalBodyOverflow = '';
let wasSwiperEnabled = true;

// Reusable function to open modal
function openModal() {
    // Prevent background scrolling
    originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Fade out main content and navigation
    contentX.style.opacity = '0';
    navBullets.style.opacity = '0';
    // Disable Swiper mousewheel and touch swiping
    if (swiper && swiper.mousewheel) {
        wasSwiperEnabled = swiper.mousewheel.enabled;
        swiper.mousewheel.disable();
    }
    if (swiper) {
        swiper.alowwTouchMove = false;
    }
    // Reset scroll and show modal
    modalArea.scrollTop = 0;
    modal.style.display = 'flex';
};

BTN_p01aguachiles.addEventListener('click', openModal);
BTN_p02ceviches.addEventListener('click', openModal);
BTN_p03botaneando.addEventListener('click', openModal);
BTN_p04hamburguesas.addEventListener('click', openModal);
BTN_p05jochos.addEventListener('click', openModal);
BTN_p06gonzalitas.addEventListener('click', openModal);
// BTN_p07.addEventListener('click', openModal); 
// BTN_p08.addEventListener('click', openModal);
BTN_p09chamoyadas.addEventListener('click', openModal);
BTN_p10cerveza.addEventListener('click', openModal);
BTN_p11mojitos.addEventListener('click', openModal);
BTN_p12pinacoladafrappe.addEventListener('click', openModal);
BTN_p13cuba.addEventListener('click', openModal);
BTN_p14whisky.addEventListener('click', openModal);
BTN_p15mentirosa.addEventListener('click', openModal);
BTN_p16jacaranda.addEventListener('click', openModal);
BTN_p17diablito.addEventListener('click', openModal);
BTN_p18bluelove.addEventListener('click', openModal);
BTN_p19bicolor.addEventListener('click', openModal);
BTN_p20cielorosa.addEventListener('click', openModal);
BTN_p21consentida.addEventListener('click', openModal);
BTN_p22margaritasfrappe.addEventListener('click', openModal);
BTN_p23paloma.addEventListener('click', openModal);
BTN_p24frappevino.addEventListener('click', openModal);
BTN_p25tintodeverano.addEventListener('click', openModal);
BTN_p26copadevino.addEventListener('click', openModal);
BTN_p27caribenas.addEventListener('click', openModal);
BTN_p28sirena.addEventListener('click', openModal);
BTN_p29mezcal.addEventListener('click', openModal);
BTN_p30carajillos.addEventListener('click', openModal);
BTN_p31cubetas.addEventListener('click', openModal);
BTN_p32tablas.addEventListener('click', openModal);
BTN_p33varios.addEventListener('click', openModal);
BTN_p34frappes.addEventListener('click', openModal);
BTN_p35legos.addEventListener('click', openModal);
BTN_p36topping.addEventListener('click', openModal);

// Close modal
const closeModal = () => {
    contentX.style.opacity = 1.0;
    navBullets.style.opacity = 1.0;
    modalArea.scrollTop = 0;
    modal.style.display = 'none';
    // Restore body scroll
    document.body.style.overflow = originalBodyOverflow;
    // Re-enable Swiper mousewheel
    if (swiper && swiper.mousewheel) {
        if (wasSwiperEnabled) {
            swiper.mousewheel.enable();
        }
    }
    // If you disabled touch move, re-enable it:
    swiper.allowTouchMove = true;
};

// Close button
closeBtn.addEventListener('click', closeModal);

// Click outside modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});


/* ================================================
   COMPLETE NORMALIZED MENU DATA STRUCTURE
   ================================================ */

const menuData = [
    {
        id: "aguachiles",
        title: "Aguachiles",
        description: "Camaron fresco preparado con nuestras salsas especiales",
        items: [
            {
                subtitle: "Aguachile Clasico ILOVEMICHE",
                description: "Camaron crudo, deliciosas salsas negras, salsa de aguachile verde, cebolla y pepino",
                options: [
                    { name: "Chico", price: 190 },
                    { name: "Mediano", price: 290 },
                    { name: "Familiar", price: 490 },
                    { name: "Como Topping", price: 185 }
                ]
            },
            {
                subtitle: "Aguachile Verde",
                description: "Camaron crudo, salsa de aguachile verde, cebolla y pepino",
                options: [
                    { name: "Chico", price: 190 },
                    { name: "Mediano", price: 290 },
                    { name: "Familiar", price: 490 },
                    { name: "Como Topping", price: 185 }
                ]
            },
            {
                subtitle: "Aguachile Mango (Temporada)",
                description: "Camaron crudo, salsa de aguachile verde con mango, cebolla, pepino y mango",
                options: [
                    { name: "Chico", price: 190 },
                    { name: "Mediano", price: 290 },
                    { name: "Familiar", price: 490 },
                    { name: "Como Topping", price: 195 }
                ]
            },
            {
                subtitle: "Torre Taxco",
                description: "Camaron cristal, camaron coctelero, cebolla morada y pepino",
                options: [{ name: "", price: 280 }]
            },
            {
                subtitle: "Culichi",
                description: "Camaron cristal, camaron coctelero, pulpo, cebolla morada y pepino",
                options: [{ name: "", price: 280 }]
            }
        ]
    },
    {
        id: "ceviches",
        title: "Ceviches",
        description: "",
        items: [
            {
                subtitle: "Ceviche Clasico ILOVEMICHE",
                description: "Camaron crudo, clamato, deliciosas salsas negras, jitomate, cebolla, pepino y cilantro",
                options: [
                    { name: "Chico", price: 190 },
                    { name: "Mediano", price: 290 },
                    { name: "Familiar", price: 490 },
                    { name: "Como Topping", price: 185 }
                ]
            },
            {
                subtitle: "Ceviche Pulpo",
                description: "Camaron crudo, pulpo, clamato, deliciosas salsas negras, jitomate, cebolla, pepino y cilantro",
                options: [
                    { name: "Chico", price: 210 },
                    { name: "Mediano", price: 310 },
                    { name: "Familiar", price: 510 },
                    { name: "Como Topping", price: 220 }
                ]
            },
            {
                subtitle: "Torre ILOVEMICHE",
                description: "Camaron cristal, camaron coctelero, pulpo, cebolla morada, pepino y jitomate",
                options: [{ name: "", price: 280 }]
            }
        ]
    },
    {
        id: "botaneando",
        title: "Botaneando",
        description: "",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Bowl de 5 topping", price: 50 },
                    { name: "Palomitas", price: 50 },
                    { name: "Nachos", price: 50 },
                    { name: "Guacamole", price: 80 },
                    { name: "Nachos de topping papas", price: 60 },
                    { name: "30 camarones cocteleros", price: 150 },
                    { name: "Tenders de pollo (8 pzas)", price: 90 },
                    { name: "Papas a la francesa", price: 60 },
                    { name: "Papas a la francesa con Queso", price: 70 },
                    { name: "Sopa maruchan", price: 50 },
                    { name: "Dedos de queso (8 pzas)", price: 100 },
                    { name: "Salchi-papas", price: 90 },
                    { name: "Burrote", price: 40 }
                ]
            }
        ]
    },
    {
        id: "hamburguesas",
        title: "Hamburguesas",
        description: "Toda hamburguesa contiene: Pan / Mayonesa / Jamón / Queso amarillo / Jitomate / Cebolla / Lechuga / Orden de papas",
        items: [
            {
                subtitle: "Sencilla",
                description: "Carne de res",
                options: [{ name: "", price: 110 }]
            },
            {
                subtitle: "Hawaiana",
                description: "Carne de res / Piña",
                options: [{ name: "", price: 120 }]
            },
            {
                subtitle: "Arrachera",
                description: "Carne arrachera",
                options: [{ name: "", price: 160 }]
            }
        ]
    },
    {
        id: "jochos",
        title: "Jochos",
        description: "",
        items: [
            {
                subtitle: "Hot Dog Sencillo",
                description: "Pan con mayonesa / Salchicha / Jitomate / Cebolla",
                options: [{ name: "", price: 49 }]
            },
            {
                subtitle: "Hot Dog con Tocino",
                description: "Pan con mayonesa / Salchicha con tocino / Jamón / Jitomate / Cebolla",
                options: [{ name: "", price: 57 }]
            },
            {
                subtitle: "Pizza Dog",
                description: "Pan con mayonesa / Salchicha / Costra de queso / Salami / Salsa de pizza / Hierbas finas",
                options: [{ name: "", price: 99 }]
            },
            {
                subtitle: "Queso Dog",
                description: "Quesote empanizado / Salchicha con tocino / Jitomate / Cebolla",
                options: [{ name: "", price: 90 }]
            }
        ]
    },
    {
        id: "gonzalitas",
        title: "Gonzalitas",
        description: "",
        items: [
            {
                subtitle: "Alitas Sencillas",
                description: "(6pzas) Con verdura y aderezo",
                options: [{ name: "", price: 130 }]
            },
            {
                subtitle: "Alitas DUO",
                description: "(6pzas) Con una pequeña porción de papas, verdura y aderezo",
                options: [{ name: "", price: 150 }]
            },
            {
                subtitle: "Alitas Combo 1",
                description: "(12pzas) Acompañadas de nachos con queso, verdura y aderezo",
                options: [{ name: "", price: 250 }]
            },
            {
                subtitle: "Alitas Combo 2",
                description: "(20pzas) Acompañadas de nachos con queso, verdura y aderezo",
                options: [{ name: "", price: 345 }]
            },
            {
                subtitle: "Alitas Combo 3",
                description: "(30pzas) Acompañadas de nachos con queso/chorizo, verdura y aderezo",
                options: [{ name: "", price: 535 }]
            },
            {
                subtitle: "Alitas Combo 4",
                description: "(50pzas) Acompañadas de nachos con queso/chorizo, verdura y aderezo",
                options: [{ name: "", price: 860 }]
            },
            {
                subtitle: "Hamburguesas - Sencilla",
                description: "Carne mixta / lechuga / jitomate / cebolla caramelizada / queso manchego",
                options: [{ name: "", price: 130 }]
            },
            {
                subtitle: "Hamburguesas - Hawaiana",
                description: "Carne mixta / lechuga / jitomate / piña / tocino / cebolla caramelizada / queso manchego / jamón",
                options: [{ name: "", price: 140 }]
            },
            {
                subtitle: "Hamburguesas - Canadiense",
                description: "Pechuga empanizada / lechuga / jitomate / cebolla caramelizada / queso manchego / tocino / salsa BBQ",
                options: [{ name: "", price: 140 }]
            },
            {
                subtitle: "Hamburguesas - Taxqueña",
                description: "Carne al pastor / chile morrón / piña / queso manchego / cebolla caramelizada",
                options: [{ name: "", price: 140 }]
            },
            {
                subtitle: "Hamburguesas - Mexicana",
                description: "Carne arrachera / lechuga / jitomate / cebolla caramelizada / queso manchego / guacamole",
                options: [{ name: "", price: 150 }]
            },
            {
                subtitle: "Hamburguesas - Mamalona",
                description: "Combinación de SENCILLA / HAWAIANA / CANADIENSE",
                options: [{ name: "", price: 330 }]
            },
            {
                subtitle: "Costillas",
                description: "",
                options: [
                    { name: "300 g", price: 165 },
                    { name: "500 g", price: 270 },
                    { name: "1 kg", price: 520 }
                ]
            },
            {
                subtitle: "Salsas",
                description: "",
                options: [
                    { name: "BBQ"},
                    { name: "Mango"},
                    { name: "Mango habanero"},
                    { name: "Original"},
                    { name: "Mango sriracha"},
                    { name: "Picositas"},
                    { name: "Pelon pelo rico"},
                ]
            },
            {
                subtitle: "Extra",
                description: "",
                options: [
                    { name: "Piña", price: 20 },
                    { name: "Queso manchego", price: 35 },
                    { name: "Jamon", price: 15 },
                    { name: "Tocino", price: 20 },
                    { name: "Salsa", price: 20 },
                    { name: "Alita", price: 23 },
                    { name: "Carne (Mixta, Can, Tax)", price: 85 },
                    { name: "Carne (Mexicana)", price: 95 }
                ]
            }
        ]
    },
    {
        id: "chamoyadas",
        title: "Chamoyadas",
        description: "Pulpa natural, azúcar, con chamoy",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Limon"},
                    { name: "Mango"},
                    { name: "Maracuya"},
                    { name: "Pepinocon limon"},
                    { name: "Fresa"},
                    { name: "Frutos rojos"},
                    { name: "Cereza"},
                    { name: "Tamarindo"},
                    { name: "Nanche"},
                    { name: "Guayaba"},
                    { name: "Grosella"},
                    { name: "Mandarina (temporada)"}
                ]
            },
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "(L) - Sin alcohol", price: 70, note: "Litro" },
                    { name: "(LCT) - Sin alcohol", price: 110, note: "Con Topping" },
                    { name: "(L) - Con Ron Bacardi", price: 110, note: "Litro" },
                    { name: "(LCT) - Con Ron Bacardi", price: 150, note: "Con Topping" },
                    { name: "(L) - Con Tequila Jose Cuervo Especial", price: 130, note: "Litro" },
                    { name: "(LCT) - Con Tequila Jose Cuervo Especial", price: 170, note: "Con Topping" },
                    { name: "(L) - Con Vodka Smirnoff", price: 120, note: "Litro" },
                    { name: "(LCT) - Con Vodka Smirnoff", price: 160, note: "Con Topping" },
                    { name: "(L) - Con Mezcal Moskalti", price: 120, note: "Litro" },
                    { name: "(LCT) - Con Mezcal Moskalti", price: 170, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "cerveza",
        title: "Cerveza",
        description: "",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Cubana (Limon, sal, y escarchada con sal)" },
                    { name: "Michelada (Limon, sal, y salsa de la casa)" },
                    { name: "Clamochela (Limon, sal, salsa de la casa, y clamato de 80mL)" },
                ]
            },
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "(L) - Corona / Victoria", price: 105, note: "Litro" },
                    { name: "(LCT) - Corona / Victoria", price: 150, note: "Con Topping" },
                    { name: "(LCT) de aguachile", price: 195 },
                    { name: "(L) con Banderilla de camaron", price: 145 }
                ]
            },
            {
                subtitle: "Cerveza de 1/2",
                description: "",
                options: [
                    { name: "Corona / Victoria / Corona Cero / Corona light", price: 45 },
                    { name: "Vaso Preparado", price: 25 },
                    { name: "Cubeta de Cerveza de 1/2 (6 pzas)", price: 250 },
                    { name: "Cubeta de Cerveza de 1/2 (12 pzas)", price: 500 }
                ]
            },
            {
                subtitle: "Clamato Preparado",
                description: "Clamato, Limón, salsas, sal y agua mineral",
                options: [
                    { name: "L", price: 80, note: "Litro" },
                    { name: "LCT", price: 130, note: "Con Topping" },
                    { name: "Banderilla de aceitunas", price: 20 }
                ]
            }
        ]
    },
    {
        id: "mojitos",
        title: "Mojitos",
        description: "Hierbabuena, limon, azucar, pulpa, Licor Ron Bacardi",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Limon" },
                    { name: "Mora azul" },
                    { name: "Maracuya" },
                    { name: "Pepino" },
                    { name: "Mango (temporada)" },
                    { name: "L", price: 110, note: "Litro" },
                    { name: "LCT", price: 150, note: "Con Topping" }
                ]
            },
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Fresa" },
                    { name: "Frutos rojos" },
                    { name: "Vino" },
                    { name: "Cereza" },
                    { name: "L", price: 120, note: "Litro" },
                    { name: "LCT", price: 170, note: "Con Topping" }
                ]
            },
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Mandarina" },
                    { name: "L", price: 135, note: "Litro" },
                    { name: "LCT", price: 175, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "pinacoladafrappe",
        title: "Piña Colada Frappe",
        description: "Jugo de piña, crema de coco, azucar, Licor Ron Bacardi",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 110, note: "Litro" },
                    { name: "LCT", price: 150, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "cuba",
        title: "Cuba",
        description: "Ron Bacardi, agua mineral, coca, toque de limon",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Campechano (agua mineral y coca)" },
                    { name: "Pintado (poca coca cola)" },
                    { name: "L", price: 110, note: "Litro" },
                    { name: "LCT", price: 160, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "whisky",
        title: "Whisky",
        description: "Acompañado con agua mineral y manzanita",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "(L) - Passport", price: 170, note: "Litro" },
                    { name: "(LCT) - Passport", price: 220, note: "Con Topping" },
                    { name: "(L) - Black & White", price: 180, note: "Litro" },
                    { name: "(LCT) - Black & White", price: 230, note: "Con Topping" },
                    { name: "(L) - Red Label", price: 190, note: "Litro" },
                    { name: "(LCT) - Red Label", price: 240, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "mentirosa",
        title: "Mentirosa",
        description: "Vodka, manzana verde, refresco de lima, perlas explosivas de manzana verde",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 150, note: "Litro" },
                    { name: "LCT", price: 190, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "jacaranda",
        title: "Jacaranda",
        description: "Vodka Smirnoff, infusion floral, endulzante, agua mineral, limon. Cambia de color",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 120, note: "Litro" },
                    { name: "LCT", price: 170, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "diablito",
        title: "Diablito",
        description: "Vodka Smirnoff tamarindo, refresco de lima, refresco de toronja, pulpa de tamarindo",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 130, note: "Litro" },
                    { name: "LCT", price: 180, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "bluelove",
        title: "Blue Love",
        description: "Vodka Smirnoff, bebida energetica, refresco de lima",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 110, note: "Litro" },
                    { name: "LCT", price: 160, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "bicolor",
        title: "Bicolor",
        description: "Vodka Smirnoff, bebida energetica, jugo de arandano, refresco de lima",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 110, note: "Litro" },
                    { name: "LCT", price: 160, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "cielorosa",
        title: "Cielo Rosa",
        description: "Vodka Smirnoff, Algodon de azucar, refresco de lima",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 120, note: "Litro" },
                    { name: "LCT", price: 160, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "consentida",
        title: "Consentida",
        description: "Vodka, Limón, Jugo de sandía arizona, Refresco de lima",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 130, note: "Litro" },
                    { name: "LCT", price: 180, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "margaritasfrappe",
        title: "Margaritas Frappe",
        description: "Tequila Jose Cuervo Especial o Mezcal Moskalti, Licor Controy, Limon, azucar y pulpa natural",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Limon" },
                    { name: "Mango" },
                    { name: "Maracuya" },
                    { name: "Pepino con limon" },
                    { name: "Fresa" },
                    { name: "Frutos rojos" },
                    { name: "Cereza" },
                    { name: "Tamarindo" },
                    { name: "Nanche" },
                    { name: "Guayaba" },
                    { name: "Mandarina (temporada)" },
                    { name: "L", price: 130, note: "Litro" },
                    { name: "LCT", price: 170, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "paloma",
        title: "Paloma",
        description: "Tequila Jose Cuervo Especial o Mezcal Moskalti, limon, sal, refresco de toronja",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Limon" },
                    { name: "Fresa" },
                    { name: "Maracuya" },
                    { name: "Frutos rojos" },
                    { name: "Mango" },
                    { name: "Jamaica" },
                    { name: "Cereza" },
                    { name: "Mandarina (temporada)" },
                    { name: "L", price: 130, note: "Litro" },
                    { name: "LCT", price: 170, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "frappevino",
        title: "Frappe Vino",
        description: "Vino tinto, jugo de arandano, azucar, toque de limon",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 90, note: "Litro" },
                    { name: "LCT", price: 140, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "tintodeverano",
        title: "Tinto de Verano",
        description: "Limón, endulzante, vino, refresco de lima",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 100, note: "Litro" },
                    { name: "LCT", price: 140, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "copadevino",
        title: "Copa de Vino",
        description: "",
        items: [
            {
                subtitle: "",
                description: "",
                options: [{ name: "Lambrusco", price: 60 }]
            }
        ]
    },
    {
        id: "caribenas",
        title: "Caribeñas",
        description: "Pulpa de chamoy, limon, salsas, sal",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Mango-Piña" },
                    { name: "Tinto" },
                    { name: "Durazno" },
                    { name: "Manzana verde" },
                    { name: "Fresa" },
                    { name: "L", price: 100, note: "Litro" },
                    { name: "LCT", price: 140, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "sirena",
        title: "Sirena",
        description: "Mezcal Tobala, Concentrado de Jamaica, Limon",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "L", price: 120, note: "Litro" },
                    { name: "LCT", price: 160, note: "Con Topping" }
                ]
            }
        ]
    },
    {
        id: "mezcal",
        title: "Mezcal",
        description: "",
        items: [
            {
                subtitle: "Blanco Joven",
                description: "",
                options: [
                    { name: "Cupreata" },
                    { name: "Espadin" },
                    { name: "Tobala" },
                    { name: "Shot", price: 40, note: "Shot" },
                    { name: "Botella", price: 400, note: "Shot" }
                ]
            },
            {
                subtitle: "Mezcales Amarak",
                description: "",
                options: [
                    { name: "Licor de Agave/Pechuga" },
                    { name: "Shot", price: 40, note: "Shot" },
                    { name: "Botella", price: 400, note: "Shot" }
                ]
            },
            {
                subtitle: "Mezcales de fruta",
                description: "",
                options: [
                    { name: "Maracuya" },
                    { name: "Jamaica" },
                    { name: "Tamarindo" },
                    { name: "Shot", price: 30, note: "Shot" },
                    { name: "Botella", price: 300, note: "Shot" }
                ]
            },
            {
                subtitle: "Crema de Mezcal",
                description: "",
                options: [
                    { name: "Cafe" },
                    { name: "Shot", price: 30, note: "Shot" },
                    { name: "Botella", price: 300, note: "Shot" }
                ]
            }
        ]
    },
    {
        id: "carajillos",
        title: "Carajillos",
        description: "Cafe expresso, Licor 43",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Shakeado", price: 150 },
                    { name: "Directo", price: 150 },
                    { name: "Baileys", price: 150 },
                    { name: "Turin", price: 170 }
                ]
            }
        ]
    },
    {
        id: "cubetas",
        title: "Cubetas",
        description: "",
        items: [
            {
                subtitle: "Cubeta de Mojito",
                description: "",
                options: [
                    { name: "Frutos Rojos" },
                    { name: "Vino" },
                    { name: "Fresa" },
                    { name: "Cereza" },
                    { name: "Mandarina" },
                    { name: "Local", price: 600, note: "Local" },
                    { name: "Domicilio", price: 720, note: "Domicilio" }
                ]
            },
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Mango" },
                    { name: "Pepino" },
                    { name: "Mora azul" },
                    { name: "Maracuya" },
                    { name: "Limon" },
                    { name: "Local", price: 500, note: "Local" },
                    { name: "Domicilio", price: 620, note: "Domicilio" }
                ]
            },
            {
                subtitle: "Cubeta de Paloma",
                description: "",
                options: [
                    { name: "Local", price: 600, note: "Local" },
                    { name: "Domicilio", price: 700, note: "Domicilio" }
                ]
            },
            {
                subtitle: "Cubeta de Blue Love o Bicolor",
                description: "",
                options: [
                    { name: "Local", price: 550, note: "Local" },
                    { name: "Domicilio", price: 670, note: "Domicilio" }
                ]
            }
        ]
    },
    {
        id: "tablas",
        title: "Tablas",
        description: "",
        items: [
            {
                subtitle: "Tabla de Shot",
                description: "",
                options: [
                    { name: "Mezcal de Sabor", price: 120 },
                    { name: "Mezcal Blanco", price: 160 },
                    { name: "Mezcal Pechuga", price: 200 },
                    { name: "Perla Negra", price: 180 }
                ]
            }
        ]
    },
    {
        id: "varios",
        title: "Varios",
        description: "",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Caribe Cooler", price: 45 },
                    { name: "Agua Natural", price: 20 },
                    { name: "Agua Mineral", price: 35 },
                    { name: "Refresco", price: 35 },
                    { name: "Powerade", price: 42 },
                    { name: "Cafe", price: 40 },
                    { name: "Te", price: 40 }
                ]
            },
            {
                subtitle: "Limonada",
                description: "",
                options: [
                    { name: "L", price: 60, note: "Litro" },
                    { name: "LCT", price: 100, note: "Con Topping" },
                    { name: "Ch", price: 40, note: "Chica" },
                    { name: "ChCT", price: 60, note: "Chica con Topping" },
                    { name: "Chamoyada (sin alcohol)", price: 45, note: "Chica" },
                    { name: "Chamoyada (sin alcohol)", price: 70, note: "Chica con Topping" }
                ]
            },
            {
                subtitle: "Chamoyada (sin alcohol)",
                description: "",
                options: [
                    { name: "Ch", price: 45, note: "Chica" },
                    { name: "ChCT", price: 70, note: "Chica con Topping" }
                ]
            }
        ]
    },
    {
        id: "frappes",
        title: "Frappes",
        description: "Leche entera por default. Cambio a leche deslactosada / coco / almendra: +$15",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Galleta oreo" },
                    { name: "Moka" },
                    { name: "Capuchino original" },
                    { name: "Chocomenta" },
                    { name: "Hot cocoa" },
                    { name: "Mazapan" },
                    { name: "Taro" },
                    { name: "Matcha" },
                    { name: "Ch", price: 95, note: "Chica" },
                    { name: "ChCT", price: 125, note: "Chica con Topping" },
                    { name: "G", price: 110, note: "Grande" },
                    { name: "GCT", price: 145, note: "Grande con Topping" }
                ]
            },
            {
                subtitle: "Toppings para frappes",
                description: "",
                options: [
                    { name: "Palito de chocolate" },
                    { name: "Bocadin" },
                    { name: "Bocadin" },
                    { name: "Bocadin" },
                    { name: "Huesitos de chocolate" },
                    { name: "Chocoretas" },
                    { name: "Mini lunetas" },
                    { name: "Huevitos" },
                    { name: "Chocofresky's" },
                    { name: "Galleta waffle" },
                    { name: "Mini bubulubu" },
                    { name: "Durazno en almíbar" },
                    { name: "Piña en almíbar" },
                    { name: "Fresa" },
                    { name: "Trufa de lunetas" },
                    { name: "Trufa de ferrero" },
                    { name: "Trufa de algodón de azúcar" },
                    { name: "Trufa de mazapan" },
                    { name: "Trufa de chocoretas" }
                ]
            },
            {
                subtitle: "",
                description: "Puedes agregar a tu frappe lo siguiente:",
                options: [
                    { name: "Paleta congelada e chocolate", price: 30 },
                    { name: "Panquesito de chocolate", price: 11 },
                    { name: "Gansito", price: 15 },
                    { name: "Pingüino", price: 15 }
                ]
            }
        ]
    },
    {
        id: "legos",
        title: "LEGOs",
        description: "",
        items: [
            {
                subtitle: "",
                description: "",
                options: [
                    { name: "Azul (Curazao)" },
                    { name: "Rojo (Fresa)" },
                    { name: "Verde (Manzana)" },
                    { name: "Amarillo (Mango)" },
                    { name: "Rosa (Frambuesa)" },
                    { name: "Azul-Amarillo" },
                    { name: "Azul-Rojo" },
                    { name: "Azul-Verde" },
                    { name: "Rosa-Azul" },
                    { name: "Ch", price: 85, note: "Chica" },
                    { name: "ChCT", price: 120, note: "Chica con Topping" },
                    { name: "G", price: 110, note: "Grande" },
                    { name: "GCT", price: 150, note: "Grande con Topping" }
                ]
            }
        ]
    },
    {
        id: "topping",
        title: "Topping (Elije 5)",
        description: "Elige 5 toppings para tu bebida",
        items: [
            {
                subtitle: "Fruta",
                options: [
                    { name: "Mango", id: 1 },
                    { name: "Pepino", id: 2 },
                    { name: "Jicama", id: 3 }
                ]
            },
            {
                subtitle: "Cacahuates",
                options: [
                    { name: "Tipo hot nuts", id: 4 },
                    { name: "Japones", id: 5 },
                    { name: "Ajo y chile", id: 6 },
                    { name: "Español", id: 7 },
                    { name: "Habanero", id: 8 },
                    { name: "Salado", id: 9 },
                    { name: "Enchilado", id: 10 },
                    { name: "Haba", id: 11 },
                    { name: "Garbanzo enchilado", id: 12 }
                ]
            },
            {
                subtitle: "Papas",
                options: [
                    { name: "Churrumais", id: 14 },
                    { name: "Cheetos", id: 16 },
                    { name: "Doritos", id: 17 },
                    { name: "Ruffles", id: 18 },
                    { name: "Rancheritos", id: 19 },
                    { name: "Sabritas", id: 20 },
                    { name: "Tostachos", id: 21 },
                    { name: "Tipo Taki", id: 22 },
                    { name: "Churritos de ajonjoli", id: 23 },
                    { name: "Cheetos Flamin Hot", id: 49 }
                ]
            },
            {
                subtitle: "Gomitas y Dulces",
                options: [
                    { name: "Bolitas de tamarindo", id: 24 },
                    { name: "Banderilla", id: 25 },
                    { name: "Tarugo", id: 26 },
                    { name: "Skwinkles Salsagheti", id: 27 },
                    { name: "Paleta de goma sandia", id: 28 },
                    { name: "Manguitos", id: 29 },
                    { name: "Pelon", id: 30 },
                    { name: "Pulparindo", id: 31 },
                    { name: "Lombriz enchilada", id: 32 },
                    { name: "Tamborcitos", id: 33 },
                    { name: "Rockaleta", id: 34 },
                    { name: "Picafresa", id: 35 },
                    { name: "Gomifruta enchilada", id: 36 },
                    { name: "Gomitas mini tajin", id: 37 },
                    { name: "Skwinkles Clasico", id: 38 },
                    { name: "Raqueta", id: 39 },
                    { name: "Ricaleta", id: 40 },
                    { name: "Lombriz dulce", id: 41 },
                    { name: "Tira Xtremes", id: 42 },
                    { name: "Bolitas aciditas de cereza", id: 43 },
                    { name: "Pandita", id: 44 }
                ]
            },
            {
                subtitle: "Carnes Frias",
                options: [
                    { name: "Camaron", id: 46 },
                    { name: "Cueritos", id: 47 },
                    { name: "Aceitunas", id: 51 }
                ]
            }
        ]
    }
];

// Make it available globally
window.menuData = menuData;

console.log('%c✅ Menu data loaded successfully! Total categories: ' + menuData.length, 'color: #e67e22; font-weight: bold;');

























// js/modal-populate.js

function createMenuHTML(category) {
    let html = `<h1 class="modal-title">${category.title}</h1>`;
    
    if (category.description) {
        html += `<p class="modal-desc">${category.description}</p>`;
    }

    category.items.forEach(item => {
        html += `<div class="menu-section">`;
        
        if (item.subtitle) {
            html += `<h3 class="section-title">${item.subtitle.replace(/_/g, ' ')}</h3>`;
        }
        
        if (item.description) {
            html += `<p class="section-desc">${item.description}</p>`;
        }

        if (item.options && item.options.length > 0) {
            html += `<div class="price-list">`;
            
            item.options.forEach(opt => {
                const priceText = opt.price ? `$${opt.price}` : '';
                html += `
                    <div class="price-row">
                        <span class="option-name">${opt.name}</span>
                        <span class="price">${priceText}</span>
                    </div>
                `;
            });
            
            html += `</div>`;
        }
        
        html += `</div>`;
    });

    return html;
}

// Function to open modal with specific category
function openMenuModal(categoryId) {
    const category = window.menuData.find(cat => cat.id === categoryId);
    
    if (!category) {
        console.error(`Category ${categoryId} not found`);
        return;
    }

    const modalArea = document.getElementById('modal-area');
    modalArea.innerHTML = createMenuHTML(category);

    // ---------------------------------------------------------------------
    if (swiper && swiper.mousewheel) {
        wasSwiperEnabled = swiper.mousewheel.enabled;
        swiper.mousewheel.disable();
    }

    // Optional: also disable touch swiping on the swiper while modal is open
    swiper.allowTouchMove = false;
    // ---------------------------------------------------------------------

    // Show modal (assuming you already have modal logic)
    document.getElementById('modal').style.display = 'flex';
}

// Attach click listeners to all buttons
function initMenuButtons() {
    const buttons = {
        'p01aguachiles': 'aguachiles',
        'p02ceviches': 'ceviches',
        'p03botaneando': 'botaneando',
        'p04hamburguesas': 'hamburguesas',
        'p05jochos': 'jochos',
        'p06gonzalitas': 'gonzalitas',
        'p09chamoyadas': 'chamoyadas',
        'p10cerveza': 'cerveza',
        'p11mojitos': 'mojitos',
        'p12pinacoladafrappe': 'pinacoladafrappe', 
        'p13cuba': 'cuba',
        'p14whisky': 'whisky',
        'p15mentirosa': 'mentirosa',
        'p16jacaranda': 'jacaranda',
        'p17diablito': 'diablito',
        'p18bluelove': 'bluelove',
        'p19bicolor': 'bicolor',
        'p20cielorosa': 'cielorosa',
        'p21consentida': 'consentida',
        'p22margaritasfrappe': 'margaritasfrappe',
        'p23paloma': 'paloma',
        'p24frappevino': 'frappevino',
        'p25tintodeverano': 'tintodeverano',
        'p26copadevino': 'copadevino',
        'p27caribenas': 'caribenas',
        'p28sirena': 'sirena',
        'p29mezcal': 'mezcal',
        'p30carajillos': 'carajillos',
        'p31cubetas': 'cubetas',
        'p32tablas': 'tablas',
        'p33varios': 'varios',
        'p34frappes': 'frappes',
        'p35legos': 'legos',
        'p36topping': 'topping'
        // Add the rest
    };

    Object.keys(buttons).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                openMenuModal(buttons[btnId]);
            });
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initMenuButtons);

































/*



// Modal Contents
const modalContents = {
  p01aguachiles: `
    <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `,

  p02ceviches: `
    <h2>Create Account</h2>
    <form>
      <input type="text" placeholder="Full Name" required>
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  `,

  p03botaneando: `
    <h2>Forgot Password</h2>
    <p>Enter your email to reset password</p>
    <form>
      <input type="email" placeholder="Email" required>
      <button type="submit">Send Reset Link</button>
    </form>
  `
};


// Click listeners
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const idx = button.id;
        if (modalContents[idx]) {
            modalArea.innerHTML = modalContents[idx];
            modal.style.display = 'flex';
        }
        else {
            console.warn(`No content for modal ${idx}`);
        }
    });
});






*/












/*
const chamoyadas = {
    'product':'chamoyadas',
    'description':'Pulpa natural, azúcar, con chamoy',
    'content':Array(
        {'subtitle':'',
        'description':'',
        'flavors':['Limón', 'Mango', 'Maracuya', 'Pepino con Limón', 'Fresa', 'Frutos Rojos', 'Cereza', 'Tamarindo', 'Nanche', 'Guayaba', 'Grosella', 'Mandarina (temporada)'],
        'table':[
            {'option':'Sin alcohol',                      'price_litro': 70,  'price_top': 110},
            {'option':'Con Ron Bacardi',                  'price_litro': 110, 'price_top': 150},
            {'option':'Con Tequila Jose Cuervo Especial', 'price_litro': 130, 'price_top': 170},
            {'option':'Con Vodka Smirnoff',               'price_litro': 120, 'price_top': 160},
            {'option':'Con Mezcal Moskalti',              'price_litro': 120, 'price_top': 170},
        ]},
    ),
};
const cerveza = {
    'product':'cerveza',
    'description':'',
    'content':Array(
        {'subtitle':'',
        'description':'',
        'flavors':['Cubana (Limón, sal y escarcada con sal)', 'Michelada (Limón, sal y salsa de la casa)', 'Clamochela (Limón, sal, salsa de la casa y clamato 80mL)'],
        'table':[
            {'option':'Corona / Victoria',               'price_litro':105,  'price_top':150},
            {'option':'Litro con Topping de aguachile',  'price_unique':195},
            {'option':'Litro con Banderilla de camaron', 'price_unique':145},
        ]},
        {'subtitle':'Cerveza de 1/2',
        'description':'',
        'flavors':['Corona', 'Victoria', 'Corona Cero', 'Corona light'],
        'table':[
            {'option':' ',              'price_unique':45},
            {'option':'Vaso Preparado',           'price_unique':25},
            {'option':'Cubeta de Cerveza de 1/2', 'price_6pzas' :250, 'price_12pzas':500},
        ]},
        {'subtitle':'Clamato Preparado',
        'description':'Clamato, Limón, salsas, sal y agua mineral',
        'flavors':[],
        'table':[
            {'option':' ', 'price_litro':80,  'price_top':130},
            {'option':'Banderilla de aceitunas', 'price_unique':20},
        ]},
    ),
};





/*



const products_iterable = Array(
    chamoyadas,
    cerveza
);



products_iterable.forEach(product => {
    //
    //const html_title     = document.getElementById(`title_${product.product}`);
    //
    //
    const html_title = document.createElement('h1');
    html_title.id = `title_${product.product}`;
    html_title.className = 'product-title';
    html_title.innerText = product.product;
    //
    const html_description = document.createElement('p');
    html_description.id = `description_${product.product}`;
    html_description.className = 'product-description';
    html_description.innerText = product.description;
    //

    //

    html_title.innerText = product.product;
    const html_description     = document.getElementById(`description_${product.product}`);
    html_description.innerText = product.description;

});



*/
































































/*




// Get elements
const trigger = document.getElementById('trigger');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const contentX = document.getElementById('s01');
const navBullets = document.getElementById('sw-nav');
const modalArea = document.getElementById('modal-area');

// Save original states
let originalBodyOverflow = '';
let wasSwiperEnabled = true;

// Open modal
trigger.addEventListener('click', () => {
    originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';   // Prevent any background scroll
    contentX.style.opacity = 0.0;
    navBullets.style.opacity = 0.0;

    // Disable Swiper mousewheel (and touch if you want)
    if (swiper && swiper.mousewheel) {
        wasSwiperEnabled = swiper.mousewheel.enabled;
        swiper.mousewheel.disable();
    }

    // Optional: also disable touch swiping on the swiper while modal is open
    swiper.allowTouchMove = false;

    modalArea.scrollTop = 0;
    modal.style.display = 'flex';
    
});

// Close modal
const closeModal = () => {
    contentX.style.opacity = 1.0;
    navBullets.style.opacity = 1.0;
    modalArea.scrollTop = 0;
    modal.style.display = 'none';

    // Restore body scroll
    document.body.style.overflow = originalBodyOverflow;

    // Re-enable Swiper mousewheel
    if (swiper && swiper.mousewheel) {
        if (wasSwiperEnabled) {
            swiper.mousewheel.enable();
        }
    }

    // If you disabled touch move, re-enable it:
    swiper.allowTouchMove = true;
};

// Close button
closeBtn.addEventListener('click', closeModal);

// Click outside modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

*/