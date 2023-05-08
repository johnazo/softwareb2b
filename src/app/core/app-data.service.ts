import { Injectable } from "@angular/core";
import { AppApplication, AppModule } from "./models";
import { AppData } from "./application-data";

@Injectable({
    providedIn: 'root',
})
export class AppDataService {

    private appData: AppApplication[]

    constructor() {
        this.appData = AppData
    }

    getApplications() {
        let apps: AppApplication[] = []
        this.appData.forEach(app => {
            apps.push({
                id: app.id,
                name: app.name,
                description: app.description,
                img_filename: app.img_filename || '',
                keywords: app.keywords,
                modules: []
            })
        })
        return apps
    }

    getAppModules(_app: AppApplication) {
        let modules: AppModule[] = []
        let apps = this.appData.filter(app => app.id == _app.id)
        let app = apps.at(0) || null
        if (app) {
            app.modules.forEach(module => {
                modules.push({
                    id: module.id,
                    name: module.name,
                    description: module.description,
                    img_filename: module.img_filename || '',
                    keywords: module.keywords,
                    url: module.url || '',
                    submodules: []
                })
            });
        }
        console.log(modules)
        console.log(this.appData)
        return modules
    }

    getAppSubModules(_app: AppApplication, _module: AppModule) {
        let submodules: AppModule[] = []
        let apps = this.appData.filter(app => app.id == _app.id)
        let app = apps.at(0) || null
        if (app) {
            let modules = app.modules.filter(module => module.id = _module.id)
            let module = modules.at(0) || null
            if (module != undefined) {
                module.submodules?.forEach(submodule => {
                    submodules.push({
                        id: submodule.id,
                        name: submodule.name,
                        description: submodule.description,
                        img_filename: submodule.img_filename,
                        keywords: submodule.keywords,
                        url: submodule.url
                    })
                })
            }
        }
        return submodules
    }


    /*
    getApplications() {
        let apps: AppApplication[] = []
        let rand = Math.floor(Math.random() * 15 + 5)
        for (let i = 1; i < rand; i++) {
            apps.push({
                id: i - 1,
                name: "Applicación " + i,
                description: "Aplicación " + i,
                img_filename: "/static/assets/img/application.png",
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
                name: "Módulo " + i,
                description: "Módulo " + i + " de la Aplicación " + (app.id + 1),
                img_filename: "/static/assets/img/module.png",
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
                name: "Submódulo " + i,
                description: "Submódulo " + i + " del Módulo " + (module.id + 1) + " de la Aplicación " + (app.id + 1),
                img_filename: "/static/assets/img/module.png",
                keywords: [],
                url: 'http://demourl.submodule.softwareb2b.johncruz.co/app/' + app.id + '/mod/' + module.id + '/submod/' + (i - 1)
            })
        }
        return submodules
    }
    */

}
