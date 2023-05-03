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
                name: "Mod " + i + " App " + app.id,
                description: "Descripción Mod " + i + " App " + app.id,
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
                name: "Sub " + i + "Mod " + module.id + " App " + app.id,
                description: "Descripción Sub " + i + "Mod " + module.id + " App " + app.id,
                keywords: []
            })
        }
        return submodules
    }


}
