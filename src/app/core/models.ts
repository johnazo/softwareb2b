
export interface AppApplication {

    id: number
    name: string
    description: string
    img_filename?: string
    keywords: string[]
    modules: AppModule[]
}

export interface AppModule {
    id: number
    name: string
    description: string
    img_filename?: string
    keywords: string[]
    submodules?: AppModule[]
    url?: string
}

export interface AppState {
    app: AppApplication | null
    module: AppModule | null
    submodule: AppModule | null
}
