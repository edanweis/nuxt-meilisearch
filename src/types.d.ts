declare enum InstantSearchThemes {
  reset = 'reset',
  algolia = 'algolia',
  satellite = 'satellite',
}

export interface ModuleOptions {
  hostUrl: string
  searchApiKey: string
  adminApiKey?: string
  serverSideUsage?: boolean
  instantSearch?: boolean | { theme: keyof typeof InstantSearchThemes }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    meilisearch?: Partial<ModuleOptions>
  }
  interface NuxtOptions {
    meilisearch?: Partial<ModuleOptions>
  }
  interface RuntimeConfig {
    serverMeilisearchClient: {
      hostUrl: string
      searchApiKey: string
      adminApiKey?: string
      serverSideUsage?: boolean
      instantSearch?: boolean | { theme: keyof typeof InstantSearchThemes }
    }
  }
  interface PublicRuntimeConfig {
    meilisearchClient: {
      hostUrl: string
      searchApiKey: string
      serverSideUsage?: boolean
      instantSearch?: boolean | { theme: keyof typeof InstantSearchThemes }
    }
  }
}

export {}
