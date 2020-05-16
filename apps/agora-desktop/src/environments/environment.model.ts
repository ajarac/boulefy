interface PlatformConfig {
    api: string
}

export interface Environment {
    production: boolean
    browser: PlatformConfig
    server: PlatformConfig
}
