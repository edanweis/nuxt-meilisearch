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

export const $meilisearch = getMeilisearchInstance()
