import { AppApplication } from "./models";




let AppData: AppApplication[] = [
    {
        id: 0,
        name: "Aplicación 1",
        description: "Descripción de la aplicación 1",
        keywords: [],
        modules: [
            {
                id: 0,
                name: "Mod 1 Applicación 1",
                description: "Desc Mod 1 App 1",
                keywords: [],
                submodules: [
                    {
                        id: 0,
                        name: "SubMod 1 Mod 1 App 1",
                        description: "Desc Mod 1 App 1",
                        keywords: []
                    }
                ]
            },
            {
                id: 1,
                name: "Mod 2 Applicación 1",
                description: "Desc Mod 2 App 1",
                keywords: [],
                submodules: [
                    {
                        id: 0,
                        name: "SubMod 1 Mod 2 App 1",
                        description: "Desc Mod 2 App 1",
                        keywords: []
                    },
                    {
                        id: 1,
                        name: "SubMod 2 Mod 2 App 1",
                        description: "Desc Mod 2 App 1",
                        keywords: []
                    }

                ]
            },
            {
                id: 2,
                name: "Mod 3 Applicación 1",
                description: "Desc Mod 3 App 1",
                keywords: [],
                submodules: [
                    {
                        id: 0,
                        name: "SubMod 1 Mod 3 App 1",
                        description: "Desc Mod 3 App 1",
                        keywords: []
                    }
                ]
            }


        ]


    }
]
