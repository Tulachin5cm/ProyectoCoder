const btnAgregar = document.querySelector(".btnAgregar"),
    contenedor = document.getElementById("contenedorPrueba"),
    contenedorCarrito = document.getElementById('carrito');
    
//array vacio para carrito
const carrito = [];

//document.addEventListener('DOMContentLoaded',arrayAnidado =>{mostrarProductos(arrayAnidado)});
//array de componentes 
const ArrArmado =[
    {
        nombreTitulo: "Procesadores",
        productos: [
            {
                id: 1,
                img: "../Img/Procesador/Ryzen9.jpg",
                nombre: " AMD Ryzen 9 7950X",
                caracter1: "Nucleos: 16",
                caracter2: "Hilos: 32",
                caracter3: "Frecuencia de 5,5 GHz",
                caracter4: "Caché L3 de 64 MB",
                caracter5: "TDP: 170W",
                precio: "630.000"
            },
            {
                id: 2,
                nombre: "Intel Core i9-13900K",
                img: "../Img/Procesador/Intel.jfif",
                caracter1: "Nucleos: 16",
                caracter2: "Hilos: 24",
                caracter3: "Frecuencia de 5,5GHz",
                caracter4: "Caché L3 de 64 MB",
                caracter5: "TDP 125W",
                precio: "650.000"
            },
            {
                id: 3,
                nombre: "AMD Ryzen 9 7900X",
                img: "../Img/Procesador/ryzen97.jfif",
                caracter1: "Nucleos: 12",
                caracter2: "Hilos: 24",
                caracter3: "Frecuencia de 5,4 GHz",
                caracter4: "Caché L3 de 64 MB",
                caracter5: "TDP de 170W",
                precio: "530.000", 
            },
            {
                id: 4,
                nombre: "Intel Core i7-13700K",
                img: "../Img/Procesador/Intel7.jfif",
                caracter1: "Nucleos: 12",
                caracter2: "Hilos: 20",
                caracter3: "Frecuencia de 5,0 GHz",
                caracter4: "Caché L3 de 30 MB",
                caracter5: "TDP 125W",
                precio: "400.000"
            },
            {
                id: 5,
                nombre: "AMD Ryzen 7 7800X 3D" ,
                img: "../Img/Procesador/AMD Ryzen 7 7800X 3D.jpg",
                caracter1: "Nucleos: 8",
                caracter2: "Hilos: 16",
                caracter3: "Frecuencia de 5,2GHz",
                caracter4: "Caché L3 de 32 MB",
                caracter5: "TDP 105W",
                precio:  "450.000"
            },
            {
                id: 6,
                nombre: "Intel Core i5-13600K",
                img: "../Img/Procesador/Intel Core i5-13600K.jpg",
                caracter1: "Nucleos: 10",
                caracter2: "Hilos: 16",
                caracter3: "Frecuencia de 4,90 GHz",
                caracter4: "Caché L3 de 20 MB",
                caracter5: "TDP 125W",
                precio: "430.000"
            },
            {
                id: 7,
                nombre: "AMD Ryzen 5 7600X",
                img: "../Img/Procesador/AMD Ryzen 5 7600X.jpg",
                caracter1: "Nucleos: 6",
                caracter2: "Hilos: 12",
                caracter3: "Frecuencia de 4,7 GHz",
                caracter4: "Caché L3 de 32MB",
                caracter5: "TDP 105W",
                precio: "364.000"
            },
            {
                id: 8,
                nombre: "Intel Core i5-12400F",
                img: "../Img/Procesador/Intel Core i5-12400F.jpg",
                caracter1: "Nucleos: 6",
                caracter2: "Hilos: 12",
                caracter3: "Frecuencia de 4,4 GHz",
                caracter4: "Caché L3 de 20MB",
                caracter5: "TDP 65W",
                precio: "354.000"
            },
            {
                id: 9,
                nombre: "AMD Ryzen 3 7300X",
                img: "../Img/Procesador/AMD Ryzen 7 7800X 3D.jpg",
                caracter1: "Nucleos: 4",
                caracter2: "Hilos: 8",
                caracter3: "Frecuencia de 4,5 GHz",
                caracter4: "Caché L3 de 20MB",
                caracter5: "TDP 65W",
                precio: "295.000"
            },
            {
                id: 10,
                nombre: "Intel Core i3-12100F",
                img: "../Img/Procesador/Intel Core i3-12100F.webp",
                caracter1: "Nucleos: 4",
                caracter2: "Hilos: 8",
                caracter3: "Frecuencia de 4,3",
                caracter4: "Caché L3 de 12MB",
                caracter5: "TDP 55W",
                precio: "253.000"
            }
        ]
    },
    {
        nombreTitulo: "Placas Madre",
        productos: [
            {
                id: 1 ,
                img: "../Img/placas madres/Placa1.jfif",
                nombre: "ASUS ROG Strix Z790-E Gaming WiFi",
                caracter1: "Compatibilidad con: Intel",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "449.000",
            },
            {
                id: 2 ,
                img: "../Img/placas madres/MSI MEG Z790 Unify-X.jpg",
                nombre: "MSI MEG Z790 Unify-X",
                caracter1: "Compatibilidad con: Intel",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "399.000",
            },
            {
                id: 3,
                img: "../Img/placas madres/Gigabyte Z790 AORUS Master.jpg",
                nombre: "Gigabyte Z790 AORUS Master",
                caracter1: "Compatibilidad con: Intel",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "499.000"
            },
            {
                id: 4,
                img: "../Img/placas madres/ASRock X670E Taichi.jpg",
                nombre: "ASRock X670E Taichi",
                caracter1: "Compatibilidad con: AMD AM5",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "639.000"
            },
            {
                id: 5,
                img: "../Img/placas madres/ASUS ROG Strix X670E-A Gaming WiFi.jpg",
                nombre: "ASUS ROG Strix X670E-A Gaming WiFi",
                caracter1: "Compatibilidad con: AMD AM5",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "439.000"
            },
            {
                id: 6,
                img: "../Img/placas madres/MSI MEG X670E Unify-X.jpg",
                nombre: "MSI MEG X670E Unify-X",
                caracter1: "Compatibilidad con: AMD AM5",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "349.000"
            },
            { 
                id: 7,
                img: "../Img/placas madres/Gigabyte X670E AORUS Master.jpg",
                nombre: "Gigabyte X670E AORUS Master",
                caracter1: "Compatibilidad con: AMD AM5",
                caracter2: "Conectividad de red de alta velocidad",
                caracter3: "Soporte para: PCIe 5.0 y DDR5",
                caracter4: "Puede hacer overclocking: Sí",
                precio: "269.000"
            }, 
            {
                id: 8,
                img: "../Img/placas madres/ASRock B660M Steel Legend.webp",
                nombre: "ASRock B660M Steel Legend",
                caracter1: "Compatibilidad con: Intel",
                caracter2: "Conctividad Buena",
                caracter3: "Soporte para: PCIe 4.0 y DDR4",
                caracter4: "Puede hacer overclocking: Moderado",
                precio: "209.000"
            },
            {
                id: 9,
                img: "../Img/placas madres/MSI PRO B660M-A DDR4.jpg",
                nombre: "MSI PRO B660M-A DDR4",
                caracter1: "Compatibilidad con: Intel",
                caracter2: "Conctividad Decente",
                caracter3: "Soporte para: PCIe 4.0 y DDR4",
                caracter4: "Puede hacer overclocking: Básico",
                precio: "1590.000"
            },
            {
                id: 10,
                img: "../Img/placas madres/Gigabyte B660M DS3H DDR4.jpg",
                nombre: " Gigabyte B660M DS3H DDR4",
                caracter1: "Compatibilidad con: Intel",
                caracter2: "Conctividad Básica",
                caracter3: "Soporte para: PCIe 4.0 y DDR4",
                caracter4: "Puede hacer overclocking: Básico",
                precio: "109.000"
            }
        ]
    },
    {
        nombreTitulo: "Memorias Ram",
        productos: [
                {
                    id: 1,
                    nombre: "Corsair Dominator Platinum RGB",
                    caracter5: "GB",
                    img: "../Img/Ram/Corsair Dominator Platinum RGB.jpg" ,
                    caracter1: "Tipo de socked DDR5",
                    caracter2: "velocidad de: 6400 MHz",
                    caracter3: "latencia de:CL32",
                    caracter4: "Iluminación RGB: Sí",
                    precio: "125.000"
                },
                {
                    id: 2,
                    nombre: "G.Skill Trident Z5 RGB",
                    caracter5: "GB",
                    img: "../Img/Ram/G.Skill Trident Z5 RGB.webp" ,
                    caracter1: "Tipo de socked DRR5",
                    caracter2: "velocidad de: 6000 MHz",
                    caracter3: "latencia de: CL36",
                    caracter4: "Iluminación RGB: Sí",
                    precio:"100.000"
                },
                {
                    id: 3,
                    nombre: "Crucial Ballistix Max RGB",
                    caracter5: "GB",
                    img: "../Img/Ram/Crucial Ballistix Max RGB.webp" ,
                    caracter1: "Tipo de socked DDR5",
                    caracter2: "velocidad de: 5200 MHz",
                    caracter3: "latencia de: CL40",
                    caracter4: "Iluminación RGB: Sí",
                    precio:"94.000"
                },
                {
                    id: 4,
                    nombre: "G.Skill Trident Z Royal",
                    caracter5: "GB",
                    img: "../Img/Ram/G.Skill Trident Z Royal.jpg" ,
                    caracter1: "Tipo de socked DDR4",
                    caracter2: "velocidad de: 4800 MHz",
                    caracter3: "latencia de: Cl14",
                    caracter4: "Iluminación RGB: Sí",
                    precio:"83.0000"
                },
                {
                    id: 5,
                    nombre: "Corsair Vengeance RGB Pro",
                    caracter5: "GB",
                    img: "../Img/Ram/Corsair Vengeance RGB Pro.jpg" ,
                    caracter1: "Tipo de socked DDR4",
                    caracter2: "velocidad de: 3600 MHz",
                    caracter3: "latencia de: Cl16",
                    caracter4: "Iluminación RGB: Sí",
                    precio:"62.000"
                },
                {
                    id: 6,
                    nombre: "Crucial Ballistix",
                    caracter5: "GB",
                    img: "../Img/Ram/Crucial Ballistix.webp" ,
                    caracter1: "Tipo de socked DDR4",
                    caracter2: "velocidad de: 3200 MHz",
                    caracter3: "latencia de: Cl16",
                    caracter4: "Iluminación RGB: No",
                    precio:"74.044"
                },
                {
                    id: 7,
                    nombre: " Patriot Viper Steel",
                    caracter5: "8GB",
                    img: "../Img/Ram/Patriot Viper Steel.webp" ,
                    caracter1: "Tipo de socked DDR4",
                    caracter2: "velocidad de: 3200 MHz",
                    caracter3: "latencia de: Cl16",
                    caracter4: "Iluminación RGB: No",
                    precio:"54.000"
                },
                {
                    id: 8,
                    nombre: "Samsung",
                    caracter5: "8GB",
                    img: "../Img/Ram/Samsung.webp" ,
                    caracter1: "Tipo de socked DDR3",
                    caracter2: "velocidad de: 1866 MHz",
                    caracter3: "latencia de: CL11",
                    caracter4: "Iluminación RGB: No",
                    precio:"42.200"
                },
                {
                    id: 9,
                    nombre: "Crucial ",
                    caracter5: "4GB",
                    img: "../Img/Ram/Crucial.webp" ,
                    caracter1: "Tipo de socked DDR3",
                    caracter2: "velocidad de: 1600MHz",
                    caracter3: "latencia de: CL11",
                    caracter4: "Iluminación RGB: No",
                    precio:"35.300"
                },
                {
                    id: 10,
                    nombre: "Kingston",
                    caracter5: "2GB",
                    img: "../Img/Ram/Kingston.webp" ,
                    caracter1: "Tipo de socked DDR3",
                    caracter2: "velocidad de: 1333 MHz",
                    caracter3: "latencia de: CL9",
                    caracter4: "Iluminación RGB: No",
                    precio:"20.990"
                }

        ]
    },
    {
        nombreTitulo: "Almacenamiento SSD",
        productos: [
            {
                id: 1,
                nombre: " Samsung 990 Pro",
                img: "../Img/Discos Ssd/Samsung 980 Pro.webp",
                caracter1: "Lectura: 7400 MB/s",
                caracter2: "Escritura: 5500 MB/s",
                caracter3: "Factor: M.2 2280",
                caracter4: "Interfaz PCIe Gen4 NVMe",
                caracter5: "Capacidad 2TB",
                precio: "149.000"
            },
            {
                id: 2,
                nombre: " Western Digital Black SN850X",
                img: "../Img/Discos Ssd/Western Digital Black SN850X.webp",
                caracter1: "Lectura:7300 MB/s ",
                caracter2: "Escritura:6400 MB/s",
                caracter3: "Factor: M.2 2280",
                caracter4: "Interfaz PCIe Gen4 NVMe",
                caracter5: "Capacidad 4TB",
                precio: "159.000"
            },
            {
                id: 3,
                nombre: "Samsung 980 Pro",
                img: "../Img/Discos Ssd/Samsung 980 Pro.webp",
                caracter1: "Lectura: 7000 MB/s",
                caracter2: "Escritura: 5000 MB/s",
                caracter3: "Factor: M.2 2280",
                caracter4: "Interfaz   PCIe Gen4 NVMe",
                caracter5: "Capacidad  2TB",
                precio: "139.000"
            },
            {
                id: 4,
                nombre: " Western Digital Black SN750",
                img: "../Img/Discos Ssd/Western Digital Black SN750.jpg",
                caracter1: "Lectura: 3600 MB/s",
                caracter2: "Escritura: 3000 MB/s",
                caracter3: "Factor: M.2 2280",
                caracter4: "Interfaz: PCIe Gen3 NVMe",
                caracter5: "Capacidad: 2TB",
                precio: "90.000"
            },
            {
                id: 5,
                nombre: " Crucial MX500 SATA",
                img: "../Img/Discos Ssd/Crucial MX500 SATA.jpg",
                caracter1: "Lectura:560 MB/s",
                caracter2: "Escritura:510 MB/s",
                caracter3: "Factor:2,5 pulgadas",
                caracter4: "Interfaz SATA III",
                caracter5: "Capacidad 4TB",
                precio: "80.500"
            },
            {
                id: 6,
                nombre: "Samsung 870 QVO SATA",
                img: "../Img/Discos Ssd/Samsung 870 QVO SATA.webp",
                caracter1: "Lectura:560 MB/s",
                caracter2: "Escritura:530 MB/s",
                caracter3: "Factor:2,5 pulgadas",
                caracter4: "Interfaz SATA III",
                caracter5: "Capacidad 8TB",
                precio: "75.990"
            },
            {
                id: 7,
                nombre: "Crucial BX500 SATA",
                img: "../Img/Discos Ssd/Crucial BX500 SATA.jpg",
                caracter1: "Lectura: 540 MB/s",
                caracter2: "Escritura: 500 MB/s",
                caracter3: " Factor: 2,5 pulgadas",
                caracter4: "Interfaz  SATA III",
                caracter5: "Capacidad  4TB",
                precio: "64.900"
            },
            {
                id: 8,
                nombre: "Blue 3D NAND SATA",
                img: "../Img/Discos Ssd/Blue 3D NAND SATA.webp",
                caracter1: "Lectura:540 MB/s",
                caracter2: "Escritura:480 MB/s",
                caracter3: " Factor:2,5 pulgadas",
                caracter4: "Interfaz SATA III",
                caracter5: "Capacidad 4TB",
                precio: "53.990"
            },
            {
                id: 9,
                nombre: "SanDisk Ultra 3D NAND SATA",
                img: "../Img/Discos Ssd/SanDisk Ultra 3D NAND SATA.webp",
                caracter1: "Lectura:530 MB/s",
                caracter2: "Escritura:440 MB/s",
                caracter3: " Factor:2,5 pulgadas",
                caracter4: "Interfaz SATA III",
                caracter5: "Capacidad 4TB",
                precio: "43.990"
            }
        ]
    },
    {
        nombreTitulo: "Almacenamiento HDD",
        productos: [
            {
                id: 1,
                nombre: "Seagate Exos X18",
                img: "../Img/Disco duro/Seagate Exos X18.jpg",
                caracter1: "Capacidad 18TB",
                caracter2: "Velocida 7200 RPM",
                caracter3: "SATA III",
                caracter4: "Cache 256 MB",
                precio: "162.000"
            },
            {
                id: 2,
                nombre: "Western Digital UltraSMR",
                img: "../Img/Disco duro/Western Digital UltraSMR 18TB.jpg",
                caracter1: "Capacidad: 18TB",
                caracter2: "Velocida: 7200 RPM",
                caracter3: "SATA III",
                caracter4: "Cache: 256 MB",
                precio: "154.900"
            },
            {
                id: 3,
                nombre: "Seagate Barracuda Pro",
                img: "../Img/Disco duro/Seagate Barracuda Pro.webp",
                caracter5: "Capacidad: 7200 RPM",
                caracter2: "Velocida: 7200 RPM",
                caracter4: "SATA III",
                caracter4: "Cache: 256 MB",
                precio: "132.600"
            },
            {
                id: 4,
                nombre: "Western Digital Red Plus",
                img: "../Img/Disco duro/Western Digital Red Plus.webp",
                caracter1: "Capacidad: 14TB",
                caracter2: "Velocida: 5400 RPM",
                caracter3: "SATA III",
                caracter4: "Cache: 256 MB",
                precio: "119.990"
            },
            {
                id: 5,
                nombre: "Toshiba N300",
                img: "../Img/Disco duro/Toshiba N300.webp",
                caracter1: "Capacidad: 14TB",
                caracter2: "Velocida: 7200 RPM",
                caracter3: "SATA III",
                caracter4: "Cache: 128 MB",
                precio: "95.000"
            },
            {
                id: 6,
                nombre: "Seagate Barracuda",
                img: "../Img/Disco duro/Seagate Barracuda.jpg",
                caracter1: "Capacidad: 4TB",
                caracter2: "Velocida: 5400 RPM",
                caracter3: "SATA III",
                caracter4: "Cache: 64 MB",
                precio: "74.910"
            },
            {
                id: 7,
                nombre: " Western Digital Blue",
                img: "../Img/Disco duro/Western Digital Blue.jpg",
                caracter1: "Capacidad: 4 TB",
                caracter2: "Velocida: 5400 RPM",
                caracter3: "SATA III",
                caracter4: "Cache: 64 MB",
                precio: "60.841"
            },
            {
                id: 8,
                nombre: "Toshiba P300",
                img: "../Img/Disco duro/Toshiba P300.jpg",
                caracter1: "Capacidad: 4 TB",
                caracter2: "Velocida: 7200 RPM",
                caracter3: "SATA III",
                caracter4: "Cache: 64 MB",
                precio: "49.990"
            }

        ]
    },
    {
        nombreTitulo: "Tarjetas Graficas",
        productos: [
            {
                id: 1,
                nombre: "NVIDIA GeForce RTX 4090",
                img: "../Img/Graficas/NVIDIA GeForce RTX 4090.jpg",
                caracter1: "Nucleos: 16384 CUDA",
                caracter2: "Frecuencia: 2,5 GHz",
                caracter3: "Memoria 24 GB ",
                caracter4: "TGP 450W",
                precio: "2.399.990"
            },
            {
                id: 2,
                nombre: "AMD Radeon RX 7950 XTX",
                img: "../Img/Graficas/AMD Radeon RX 7950 XTX.jpg",
                caracter1: "Nucleos: 10752",
                caracter2: "Frecuencia: 2,3 GHz",
                caracter3: "Memoria 24 GB",
                caracter4: "TGP 450W",
                precio: "969.500"
            },
            {
                id: 3,
                nombre: "NVIDIA GeForce RTX 4080",
                img: "../Img/Graficas/NVIDIA GeForce RTX 4080.jpg",
                caracter1: "Nucleos: 9728",
                caracter2: "Frecuencia: 2,5 GHz",
                caracter3: "Memoria 16 GB",
                caracter4: "TGP 350W",
                precio: "1.515.090"
            },
            {
                id: 4,
                nombre: "AMD Radeon RX 7900 XT",
                img: "../Img/Graficas/AMD Radeon RX 7900 XT.png",
                caracter1: "Nucleos: 8096",
                caracter2: "Frecuencia: 2,3 GHz",
                caracter3: "Memoria 20 GB",
                caracter4: "TGP 350W",
                precio: "899.990"
            },
            {
                id: 5,
                nombre: "NVIDIA GeForce RTX 4070 Ti",
                img: "../Img/Graficas/NVIDIA GeForce RTX 4070 Ti.jpg",
                caracter1: "Nucleos: 7168",
                caracter2: "Frecuencia: 2,6 GHz",
                caracter3: "Memoria 12 GB",
                caracter4: "TGP 300W",
                precio: "792.890"
            },
            {
                id: 6,
                nombre: "AMD Radeon RX 7800 XT",
                img: "../Img/Graficas/AMD Radeon RX 7800 XTX.jpg",
                caracter1: "Nucleos: 6096",
                caracter2: "Frecuencia: 2,3 GHz",
                caracter3: "Memoria 16 GB",
                caracter4: "TGP 300 W",
                precio: "752.990"
            },
            {
                id: 7,
                nombre: "NVIDIA GeForce RTX 4060",
                img: "../Img/Graficas/NVIDIA GeForce RTX 4060.jpg",
                caracter1: "Nucleos: 5888",
                caracter2: "Frecuencia: 2,5 GHz",
                caracter3: "Memoria 8 GB",
                caracter4: "TGP 250 W",
                precio: "407.290"
            },
            {
                id: 8,
                nombre: "AMD Radeon RX 7700 XT",
                img: "../Img/Graficas/AMD Radeon RX 7700 XT.webp",
                caracter1: "Nucleos: 4096",
                caracter2: " Frecuencia: 2,2 GHz",
                caracter3: "Memoria 8 GB",
                caracter4: " TGP 200 W",
                precio: "387.900"
            },
            {
                id: 9,
                nombre: "NVIDIA GeForce RTX 4050",
                img: "../Img/Graficas/NVIDIA GeForce RTX 4050.jpg",
                caracter1: "Nucleos: 3072",
                caracter2: "Frecuencia: 2,3 GHz",
                caracter3: "Memoria 6 GB",
                caracter4: "TGP 150 W",
                precio: "360.590"
            },
            {
                id: 10,
                nombre: "AMD Radeon RX 7600 XT",
                img: "../Img/Graficas/AMD Radeon RX 7600 XT.webp",
                caracter1: "Nucleos: 2048",
                caracter2: "Frecuencia: 2,1 GHz",
                caracter3: "Memoria 4 GB",
                caracter4: "TGP 120 W",
                precio: "320.560"
            }
        ]
    },
    {
        nombreTitulo: "Fuentes de Poder",
        productos: [
            {
                id: 1,
                nombre: "Corsair RM1000x",
                img: "../Img/Fuente de poder/Corsair RM1000x.webp",
                caracter1: "Vatios: 1000W",
                caracter2: "Eficiencia 80 Plus Platinum",
                caracter3: "Tipo de diseño: Completamente modular",
                caracter4: "Ventilador: Levitación magnética",
                precio: "159.205"
            },
            {
                id: 2,
                nombre: "Seasonic Prime TX-1000",
                img: "../Img/Fuente de poder/Seasonic Prime TX-1000.jpg",
                caracter1: "Vatios: 1000W",
                caracter2: "Eficiencia 80 Plus Titanium",
                caracter3: "Tipo de diseño: Completamente modular",
                caracter4: "Ventilador: Alta calidad",
                precio: "139.990"
            },
            {
                id: 3,
                nombre: "Super Flower Leadex Platinum II 1000W",
                img: "../Img/Fuente de poder/Super Flower Leadex Platinum II 1000W.jpg",
                caracter1: "Vatios: 1000W",
                caracter2: "Eficiencia 80 Plus Platinum",
                caracter3: "Tipo de diseño: completamente modular",
                caracter4: "Ventilador: silencioso",
                precio: "125.890"
            },
            {
                id: 4,
                nombre: "EVGA SuperNOVA G6 1000W",
                img: "../Img/Fuente de poder/EVGA SuperNOVA G6 1000W.jpg",
                caracter1: "Vatios: 1000W",
                caracter2: "Eficiencia 80 Plus Gold",
                caracter3: "Tipo de diseño: Modular",
                caracter4: "Ventilador: Silencioso",
                precio: "100.334"
            },
            {
                id: 5,
                nombre: "Fractal Design Ion+ Platinum 860W",
                img: "../Img/Fuente de poder/Fractal Design Ion+ Platinum 860W.jpg",
                caracter1: "Vatios: 860W",
                caracter2: "Eficiencia 80 Plus Platinum",
                caracter3: "Tipo de diseño: Modular",
                caracter4: "Ventilador: Silensioso",
                precio: "96.934"
            },
            {
                id: 6,
                nombre: "be quiet! Straight Power 11 850W",
                img: "../Img/Fuente de poder/be quiet! Straight Power 11 850W.jpg",
                caracter1: "Vatios: 850W",
                caracter2: "Eficiencia 80 Plus Gold",
                caracter3: "Tipo de diseño: Modular",
                caracter4: "Ventilador: Silencioso",
                precio: "80.245"
            },
            {
                id: 7,
                nombre: "Cooler Master MasterWatt Maker 1200 V2",
                img: "../Img/Fuente de poder/Cooler Master MasterWatt Maker 1200 V2.jpg",
                caracter1: "Vatios: 1200W",
                caracter2: "Eficiencia 80 Plus Platinum",
                caracter3: "Tipo de diseño: Completamente modular",
                caracter4: "Ventilador: levitación magnética",
                precio: "74.245"
            },
            {
                id: 8,
                nombre: "Thermaltake Toughpower GF1 850W",
                img: "../Img/Fuente de poder/Thermaltake Toughpower GF1 850W.png",
                caracter1: "Vatios: 850W",
                caracter2: "Eficiencia 80 Plus Gold",
                caracter3: "Tipo de diseño: Modular",
                caracter4: "Ventilador: Silencioso",
                precio: "68.244"
            },
            {
                id: 9,
                nombre: "Gigabyte AORUS P850W",
                img: "../Img/Fuente de poder/Gigabyte AORUS P850W.webp",
                caracter1: "Vatios: 850W",
                caracter2: "Eficiencia 80 Plus Gold",
                caracter3: "Tipo de diseño: Modular",
                caracter4: "Ventilador: Con RGB",
                precio: "69.893"
            },
            {
                id: 10,
                nombre: "Corsair CX750M",
                img: "../Img/Fuente de poder/Corsair CX750M.jpg",
                caracter1: "Vatios: 750W",
                caracter2: "Eficiencia 80 Plus Bronze",
                caracter3: "Tipo de diseño: Semi-Modular",
                caracter4: "Ventilador: Silencioso",
                precio: "75.455"
            }
        ]
    },
    {
        nombreTitulo: "Gabinetes",
        productos: [
            {
                id: 1,
                nombre: " NZXT H510i",
                img: "../Img/Gabinetes/NZXT H510i.webp",
                caracter1: "Diseño elegante y minimalista",
                caracter2: "FLujo xcelente flujo de aire",
                caracter3: "Soporte Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "Dos ventiladores Aer RGB 2",
                precio: "156.000"
            },
            {
                id: 2,
                nombre: "Fractal Design Meshify C ATX Mid Tower Case",
                img: "../Img/Gabinetes/Fractal Design Meshify C ATX Mid Tower Case.webp",
                caracter1: "Diseño moderno y funcional",
                caracter2: "Excelente flujo de aire",
                caracter3: "Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "Amplio espacio para componentes",
                precio: "176.000"
            },
            {
                id: 3,
                nombre: "Lian Li O11 Dynamic XL",
                img: "../Img/Gabinetes/Lian Li O11 Dynamic XL.jpg",
                caracter1: "Diseño único y llamativo",
                caracter2: "Excelente flujo de aire",
                caracter3: "Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "Amplio espacio para componentes",
                precio: "130.000"
            },
            {
                id: 4,
                nombre: "Corsair 4000D Airflow",
                img: "../Img/Gabinetes/Corsair 4000D Airflow.webp",
                caracter1: "Diseño simple y efectivo",
                caracter2: "Excelente flujo de aire",
                caracter3: "Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "",
                precio: "120.000"
            },
            {
                id: 5,
                nombre: "Cooler Master MasterBox TD500 Mesh",
                img: "../Img/Gabinetes/Cooler Master MasterBox TD500 Mesh.png",
                caracter1: "Diseño elegante y minimalista",
                caracter2: "Buen flujo de aire",
                caracter3: "placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "",
                precio: "110.000"
            },
            {
                id: 6,
                nombre: "be quiet! Pure Base 500DX",
                img: "../Img/Gabinetes/be quiet! Pure Base 500DX.jpg",
                caracter1: "Diseño sobrio y elegante",
                caracter2: "Buen flujo de aire",
                caracter3: "Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "",
                precio: "99.000"
            },
            {
                id: 7,
                nombre: "Phanteks Eclipse P600S",
                img: "../Img/Gabinetes/Phanteks Eclipse P600S.webp",
                caracter1: "Diseño moderno y minimalista",
                caracter2: "Buen flujo de aire",
                caracter3: "Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "",
                precio: "85.000"
            },
            {
                id: 8,
                nombre: "Thermaltake Core V21",
                img: "../Img/Gabinetes/Thermaltake Core V21.jpg",
                caracter1: "Diseño simple y funcional",
                caracter2: "Buen flujo de aire",
                caracter3: "placas base ATX, Micro-ATX y Mini-IT",
                caracter4: "",
                precio: "76.000"
            },
            {
                id: 9,
                nombre: "NZXT H510",
                img: "../Img/Gabinetes/NZXT H510.jpg",
                caracter1: "Diseño similar al H510i",
                caracter2: "Buen flujo de aire",
                caracter3: "Placas base ATX, Micro-ATX y Mini-ITX",
                caracter4: "",
                precio: "60.990"
            },
            {
                id: 10,
                nombre: "Cooler Master MasterBox Q300L",
                img: "../Img/Gabinetes/Cooler Master MasterBox Q300L.webp",
                caracter1: "Diseño simple y funcional",
                caracter2: "Buen flujo de aire",
                caracter3: "Placas base Micro-ATX y Mini-ITX",
                caracter4: "",
                precio: ""
            }

        ]
    },
    {
        nombreTitulo: "Refrigeracion Liquida",
        productos: [
            {
                id: 1,
                nombre: "Corsair iCUE H150i Elite Capellix",
                img: "../Img/Refrigeracion liquida/Corsair iCUE H150i Elite Capellix.jpg", 
                caracter1: "Radiador: 360 mm",
                caracter2: "Ventilador: 3x ML120 RGB Elite",
                caracter3: "Bomba: Maglev RGB",
                caracter4: "Rendimiento de420W",
                precio: "250.000"
            },
            {
                id: 2,
                nombre: "NZXT Kraken Z73",
                img: "../Img/Refrigeracion liquida/NZXT Kraken Z73.png", 
                caracter1: "Radiador: 360 mm",
                caracter2: "Ventilador: 3x AER RGB 2",
                caracter3: "Bomba: Asetek Gen7",
                caracter4: "Rendimiento 420W",
                precio: "280.000"
            },
            {
                id: 3,
                nombre: "ASUS ROG Ryujin II 360",
                img: "../Img/Refrigeracion liquida/ASUS ROG Ryujin II 360.jpg", 
                caracter1: "Radiador: 360 mm",
                caracter2: "Ventilador: 3x Noctua NF-F12",
                caracter3: "Bomba: ROG Aura Sync",
                caracter4: "Rendimiento 550W",
                precio: "350.000"
            },
            {
                id: 4,
                nombre: "Cooler Master MasterLiquid ML360R RGB",
                img: "../Img/Refrigeracion liquida/Cooler Master MasterLiquid ML360R RGB.jpg", 
                caracter1: "Radiador: 360 mm",
                caracter2: "Ventilador: 3x SickleFlow 120 ARGB",
                caracter3: "Bomba: Dual Chamber",
                caracter4: "Rendimiento 550W",
                precio: "200.000"
            }

        ]
    },
    {
        nombreTitulo: "Refrigeracion por Aire",
        productos: [
            {
                id: 1,
                nombre: "Noctua NH-D15",
                img: "../Img/ventiladores/Noctua NH-D15.png", 
                caracter1: "Disipador Doble torre",
                caracter2: "Altura 165 mm",
                caracter3: "Ancho 150 mm",
                caracter4:"Peso 1320g",
                caracter5: "Rendimiento 250W",
                precio: "90.000"
            },
            {
                id: 2,
                nombre: "Be Quiet! Dark Rock Pro 4",
                img: "../Img/ventiladores/Be Quiet! Dark Rock Pro 4.jpg", 
                caracter1: "Disipador: Torre única",
                caracter2: "Altura: 163 mm",
                caracter3: "Ancho: 128 mm",
                caracter4:"Peso: 1035g",
                caracter5: "Rendimiento: 250W",
                precio: "92.000"
            },
            {
                id: 3,
                nombre: "Scythe Mugen 5 Rev.B",
                img: "../Img/ventiladores/Scythe Mugen 5 Rev.B.jpg", 
                caracter1: "Disipador: Torre única",
                caracter2: "Altura: 158 mm",
                caracter3: "Ancho: 127 mm",
                caracter4:"Peso: 990g",
                caracter5: "Rendimiento: 220W",
                precio: "60.000"
            },
            {
                id: 4,
                nombre: " Cooler Master Hyper 212 Evo V2",
                img: "../Img/ventiladores/Cooler Master Hyper 212 Evo V2.webp", 
                caracter1: "Disipador: Torre única",
                caracter2: "Altura: 160 mm",
                caracter3: "Ancho: 128 mm",
                caracter4:"Peso: 550g",
                caracter5: "Rendimiento: 150W",
                precio: "40.000"
            },
            {
                id: 5,
                nombre: "Arctic Freezer 34 eSports Duo",
                img: "../Img/ventiladores/Arctic Freezer 34 eSports Duo.webp", 
                caracter1: "Disipador: Torre única",
                caracter2: "Altura: 150 mm",
                caracter3: "Ancho: 128 mm",
                caracter4:"Peso: 580g",
                caracter5: "Rendimiento: 220W",
                precio: "50.000"
            },
            {
                id: 6,
                nombre: "Noctua NH-U12S",
                img: "../Img/ventiladores/Noctua NH-U12S.jpg", 
                caracter1: "Disipador: Torre única",
                caracter2: "Altura: 125 mm",
                caracter3: "Ancho: 112 mm",
                caracter4:"Peso: 530g",
                caracter5: "Rendimiento: 160W",
                precio: "60.000"
            }
        ]
    }

]

//funcion para mostrar los productos 
function mostrarProductos(arrayAnidado) {
    const contenedor = document.getElementById("contenedorPrueba");

    arrayAnidado.forEach(categoria => {
        // Crear un div para la categoría
        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('categoria');

        // Agregar el título de la categoría
        const tituloCategoria = document.createElement('h1');
        tituloCategoria.classList.add('titulo');
        tituloCategoria.textContent = categoria.nombreTitulo;
        categoriaDiv.appendChild(tituloCategoria);

        // Crear un div para mostrar los productos horizontalmente
        const productosDiv = document.createElement('div');
        productosDiv.classList.add('productos');

        // Agregar los productos de la categoría
        categoria.productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');

            // Crear la estructura HTML para el producto
            const productoHTML = `
                <img src="${producto.img}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.caracter1}</p>
                <p>${producto.caracter2}</p>
                ${producto.caracter3 ? `<p>${producto.caracter3}</p>` : ''}
                ${producto.caracter4 ? `<p>${producto.caracter4}</p>` : ''}
                ${producto.caracter5 ? `<p>${producto.caracter5}</p>` : ''}
                <p>Precio: $${producto.precio}</p>
                <button class="btnAgregar" data-id="${producto.id}">Agregar</button>
            `;
            productoDiv.innerHTML = productoHTML;

            // Agregar el evento click al botón de agregar
            const btnAgregar = productoDiv.querySelector('.btnAgregar');
            btnAgregar.addEventListener('click', () => {
                
                agregarAlLocalStorage(producto);

                Toastify({
                    text: "El Producto se agrego correctamente",
                    duration: 3000,
                    //destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            });

            // Agregar el producto al contenedor de productos
            productosDiv.appendChild(productoDiv);
        });

        // Agregar los productos al contenedor de categoría
        categoriaDiv.appendChild(productosDiv);

        // Agregar la categoría completa al contenedor principal
        contenedor.appendChild(categoriaDiv);
    });
}

// Funcion para mostrar los productos del array 
mostrarProductos(ArrArmado);

// Función para agregar al carrito
function agregarAlLocalStorage(producto) {
    // Obtener el carrito del localStorage o crear uno nuevo si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar su cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo con una cantidad de 1
        producto.cantidad = 1;
        carrito.push(producto);
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la visualización del carrito
    visualizarCarritoEnDOM();
}

// Función para actualizar el carrito en el localStorage
function actualizarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function visualizarCarritoEnDOM() {
    const contenedor = document.getElementById('carrito');
    contenedor.innerHTML = '';

    // Obtener el carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        contenedor.innerHTML = '<h3>El carrito está vacío</h3>';
        return;
    }

    const listaCarrito = document.createElement('ul');
    //variable total 
    let totalCarrito = 0;

    carrito.forEach(item => {
    const li = document.createElement('li');
    
    //
    li.innerHTML = `
        <span>${item.nombre} - Precio: $${item.precio}</span>
        <span>Cantidad: ${item.cantidad}</span>
        <button class="btnAumentar" data-id="${item.id}">+</button>
        <button class="btnDisminuir" data-id="${item.id}">-</button>
    `;

    // Calcular y mostrar el precio total del producto
    const precioTotalProducto = item.precio * item.cantidad;
    li.innerHTML += `<span>Total: $${precioTotalProducto.toFixed(3)}</span>`;

    // Agregar eventos click para los botones de aumento y disminución de cantidad
    const btnAumentar = li.querySelector('.btnAumentar');
    btnAumentar.addEventListener('click', () => aumentarCantidad(item.id));

    const btnDisminuir = li.querySelector('.btnDisminuir');
    btnDisminuir.addEventListener('click', () => disminuirCantidad(item.id));

    // Agregar el precio total del producto al total del carrito
    totalCarrito += precioTotalProducto;

    // Agregar el elemento de lista al contenedor
    listaCarrito.appendChild(li);
    
    });
    
    // Mostrar el total del carrito al final de la lista de productos
    const totalLi = document.createElement('h5');

    listaCarrito.appendChild(totalLi);
    totalLi.textContent = `Total del carrito: $${totalCarrito.toFixed(3)}`;
    const btnPagar = document.createElement('button');
    btnPagar.textContent = 'Pagar';
    btnPagar.setAttribute('id', 'btn-pagar');

    btnPagar.addEventListener('click', () => {
      
      window.location.href = '../Html/Pagos.html'; 
  });

contenedor.appendChild(listaCarrito);
contenedor.appendChild(btnPagar);
}

// Llamar a la función de visualización del carrito al cargar la página
visualizarCarritoEnDOM();


// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(productoId) {
    Toastify({
        text: "!Aumento la cantidad!",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        //close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar el producto en el carrito por su ID
    const productoIndex = carrito.findIndex(item => item.id === productoId);

    // Si el producto está en el carrito, aumentar su cantidad en 1
    if (productoIndex !== -1) {
        carrito[productoIndex].cantidad += 1;
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la visualización del carrito
    visualizarCarritoEnDOM();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(productoId) {
    Toastify({
        text: "!Disminuyo la cantidad!",
        duration: 1500,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        //close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #fa4242, #ff2600)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar el producto en el carrito por su ID
    const productoIndex = carrito.findIndex(item => item.id === productoId);

    // Si el producto está en el carrito y su cantidad es mayor que 1, disminuir su cantidad en 1
    if (productoIndex !== -1 && carrito[productoIndex].cantidad > 1) {
        carrito[productoIndex].cantidad -= 1;
    } else {
        // Si la cantidad es 1, eliminar el producto del carrito
        carrito.splice(productoIndex, 1);
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la visualización del carrito
    visualizarCarritoEnDOM();
}
//funcion para buscar componenetes por el nombre
function buscarComponente() {
    const inputBusqueda = document.getElementById("inputBusqueda");
    const textoBusqueda = inputBusqueda.value.toLowerCase().trim();

    // Validar si el campo de búsqueda está vacío
    if (textoBusqueda === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Deberias tener algo relevante escrito!",
            //footer: '<a href="#">Why do I have this issue?</a>'
          });
        return; // Salir de la función si no hay texto de búsqueda
    }
    if (textoBusqueda.length < 3){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tiene que haber escrito mas de 3 caracteres!",
            //footer: '<a href="#">Why do I have this issue?</a>'
          });
          return;
    }

    // Obtener todos los elementos con la clase 'categoria'
    const categorias = document.querySelectorAll('.categoria');

    // Variable para verificar si se encontraron coincidencias
    let coincidenciasEncontradas = false;

    categorias.forEach(categoria => {
        // Obtener el título de la categoría
        const tituloCategoria = categoria.querySelector('.titulo');
        
        // Obtener todos los productos dentro de la categoría
        const productos = categoria.querySelectorAll('.producto');

        // Variable para verificar si hay al menos una coincidencia en esta categoría
        let coincidenciaEnCategoria = false;

        // Iterar sobre los productos de la categoría y comprobar si alguno coincide
        productos.forEach(producto => {
            const nombreProducto = producto.querySelector('h3').textContent.toLowerCase();
            if (nombreProducto.includes(textoBusqueda)) {
                coincidenciaEnCategoria = true;
                producto.style.display = 'block'; // Mostrar el producto
            } else {
                producto.style.display = 'none'; // Ocultar el producto si no coincide
            }
        });

        // Mostrar u ocultar el título de la categoría según haya coincidencias
        if (coincidenciaEnCategoria) {
            tituloCategoria.style.display = 'block'; // Mostrar el título si hay coincidencias
            coincidenciasEncontradas = true;
        } else {
            tituloCategoria.style.display = 'none'; // Ocultar el título si no hay coincidencias
        }
    });

    // Mostrar un mensaje si no se encontraron coincidencias
    if (!coincidenciasEncontradas) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontraron coicidencias :( !",
            //footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
}


