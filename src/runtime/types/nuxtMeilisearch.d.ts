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
  // meilisearchConfig?: {
  //   placeholderSearch?: boolean,
  //   paginationTotalHits?: number,
  //   finitePagination?: boolean,
  //   primaryKey?: string,
  //   keepZeroFacets?: boolean
  // }
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

// Ensure this is treated as a module
export {}

// https://github.com/meilisearch/instant-meilisearch/blob/main/packages/instant-meilisearch/src/types/types.ts
