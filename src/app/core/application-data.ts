import { AppApplication } from "./models";




let AppData: AppApplication[] = [
    {
        id: 0,
        name: "Poseidón",
        description: "Aplicación de Poseidón",
        keywords: [],
        img_filename: '/static/assets/application.png',
        modules: [
            {
                id: 0,
                name: "Módulo Configuración",
                description: "Módulo de Configuración",
                img_filename: '/static/assets/module.png',
                keywords: ['configuración'],
                url: 'http://www.poseidon.com.co/configuracion',
                submodules: []
            },
            {
                id: 1,
                name: "Módulo Pedidos",
                description: "Módulo de Pedidos",
                img_filename: '/static/assets/module.png',
                keywords: ['pedidos'],
                url: 'http://www.poseidon.com.co/pedidos',
                submodules: []
            },
            {
                id: 2,
                name: "Módulo Inventario",
                description: "Módulo de Inventario",
                img_filename: '/static/assets/module.png',
                keywords: ['inventario'],
                url: 'http://www.poseidon.com.co/inventario',
                submodules: []
            },
            {
                id: 3,
                name: "Módulo Facturas",
                description: "Módulo de Facturas",
                img_filename: '/static/assets/module.png',
                keywords: ['facturas'],
                url: 'http://www.poseidon.com.co/facturacion',
                submodules: []
            },
            {
                id: 4,
                name: "Módulo Cotizaciones",
                description: "Módulo de Cotizaciones",
                img_filename: '/static/assets/module.png',
                keywords: ['cotizaciones'],
                url: 'http://www.poseidon.com.co/cotizaciones',
                submodules: []
            },
            {
                id: 5,
                name: "Módulo Notas Crédito",
                description: "Módulo de Notas Crédito",
                img_filename: '/static/assets/module.png',
                keywords: ['notas_credito'],
                url: 'http://www.poseidon.com.co/notas_credito',
                submodules: []
            },
            {
                id: 6,
                name: "Módulo Contabilidad",
                description: "Módulo de Contabilidad",
                img_filename: '/static/assets/module.png',
                keywords: ['contabilidad'],
                url: 'http://www.poseidon.com.co/contabilidad',
                submodules: []
            },
            {
                id: 7,
                name: "Módulo Informes",
                description: "Módulo de Informes",
                img_filename: '/static/assets/module.png',
                keywords: ['informes'],
                url: 'http://www.poseidon.com.co/informes',
                submodules: []
            },
            {
                id: 8,
                name: "Módulo Remisión",
                description: "Módulo de Remisión",
                img_filename: '/static/assets/module.png',
                keywords: ['remisión'],
                url: 'http://www.poseidon.com.co/remision',
                submodules: []
            },
            {
                id: 9,
                name: "Módulo Clientes",
                description: "Módulo de Clientes",
                img_filename: '/static/assets/module.png',
                keywords: ['clientes'],
                url: 'http://www.poseidon.com.co/terceros',
                submodules: []
            },
        ]
    }
]

export { AppData }



