
export interface AppApplication {

    id: number
    name: string
    description: string
    keywords: string[]
    modules: AppModule[]
}

export interface AppModule {
    id: number
    name: string
    description: string
    keywords: string[]
    submodules?: AppModule[]
}

export interface AppState {
    app: AppApplication | null
    module: AppModule | null
    submodule: AppModule | null
}
