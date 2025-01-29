import { MeiliSearch } from 'meilisearch'
import { useRuntimeConfig } from '#imports'

let meilisearchInstance: MeiliSearch | null = null

export function getMeilisearchInstance() {
  if (!meilisearchInstance) {
    const { serverMeilisearchClient: { hostUrl, adminApiKey } } = useRuntimeConfig()
    meilisearchInstance = new MeiliSearch({
      host: hostUrl,
      apiKey: adminApiKey,
    })
  }
  return meilisearchInstance
}

// Export a function instead of the instance directly
export function useMeilisearch() {
  return getMeilisearchInstance()
}

// For backward compatibility, but users should migrate to useMeilisearch()
export const $meilisearch = getMeilisearchInstance
