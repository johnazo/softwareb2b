
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppApplication, AppState, AppModule } from './models'

@Injectable()
export class ApplicationService {
    private state = new Observable<AppState>()
    private appState: BehaviorSubject<AppState>;

    constructor() {
        this.appState = new BehaviorSubject<AppState>({
            app: null, module: null, submodule: null
        });
        this.state = this.appState.asObservable()
    }

    get appStateValue() {
        return this.appState.value
    }

    // Service message commands
    changeState(_appState: AppState) {
        this.appState.next(_appState)
    }

    setApp(_app: AppApplication | null) {
        this.appState.next({
            app: _app, module: null, submodule: null
        })
    }

    setModule(_module: AppModule | null) {
        this.appState.next({
            app: this.appStateValue.app, module: _module, submodule: null
        })
    }

    setSubmodule(_submodule: AppModule | null) {
        this.appState.next({
            app: this.appStateValue.app, module: this.appStateValue.module, submodule: _submodule
        })
    }

}
