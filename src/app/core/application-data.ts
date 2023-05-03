import { AppApplication } from "./models";




let AppData: AppApplication[] = [
    {
        id: 0,
        name: "Aplicación 1",
        description: "Descripción de la aplicación 1",
        keywords: [],
        img_filename: '/assets/application.png',
        modules: [
            {
                id: 0,
                name: "Mod 1 Applicación 1",
                description: "Desc Mod 1 App 1",
                img_filename: '/assets/module.png',
                keywords: [],
                submodules: [
                    {
                        id: 0,
                        name: "SubMod 1 Mod 1 App 1",
                        description: "Desc Mod 1 App 1",
                        img_filename: '/assets/module.png',
                        keywords: [],
                        url: 'https://url.com/'
                    }
                ]
            }
        ]
    }
]
