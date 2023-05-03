import { Injectable } from "@angular/core";
import { AppApplication, AppModule } from "./models";

@Injectable({
    providedIn: 'root',
})
export class AppDataService {

    constructor() {

    }


    getApplications() {
        let apps: AppApplication[] = []
        let rand = Math.floor(Math.random() * 15 + 5)
        for (let i = 1; i < rand; i++) {
            apps.push({
                id: i - 1,
                name: "Applicación " + i,
                description: "Descripción App " + i,
                img_filename: "/assets/img/application.png",
                keywords: [],
                modules: []
            })
        }
        return apps
    }

    getAppModules(app: AppApplication) {
        let modules: AppModule[] = []
        let rand = Math.floor(Math.random() * 15 + 5)
        for (let i = 1; i < rand; i++) {
            modules.push({
                id: i - 1,
                name: "Mod " + i + " App " + (app.id + 1),
                description: "Descripción Mod " + i + " App " + (app.id + 1),
                img_filename: "/assets/img/module.png",
                keywords: [],
                submodules: []
            })
        }
        return modules
    }

    getAppSubModules(app: AppApplication, module: AppModule) {
        let submodules: AppModule[] = []
        let rand = Math.floor(Math.random() * 15 + 5)
        for (let i = 1; i < rand; i++) {
            submodules.push({
                id: i - 1,
                name: "Sub " + i + " Mod " + (module.id + 1) + " App " + (app.id + 1),
                description: "Descripción Sub " + i + " Mod " + (module.id + 1) + " App " + (app.id + 1),
                keywords: [],
                url: 'http://demourl.submodule.softwareb2b.johncruz.co/app/' + app.id + '/mod/' + module.id + '/submod/' + (i - 1)
            })
        }
        return submodules
    }


}
