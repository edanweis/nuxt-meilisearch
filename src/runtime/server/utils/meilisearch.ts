import { MeiliSearch } from 'meilisearch'

let meilisearchInstance: MeiliSearch | null = null

function createMeilisearchInstance() {
  // Import useRuntimeConfig only when needed
  const { useRuntimeConfig } = require('#imports')
  const { serverMeilisearchClient: { hostUrl, adminApiKey } } = useRuntimeConfig()
  return new MeiliSearch({
    host: hostUrl,
    apiKey: adminApiKey,
  })
}

export function getMeilisearchInstance() {
  if (!meilisearchInstance) {
    meilisearchInstance = createMeilisearchInstance()
  }
  return meilisearchInstance
}

// Export a function instead of the instance directly
export function useMeilisearch() {
  return getMeilisearchInstance()
}

// For backward compatibility, but users should migrate to useMeilisearch()
export function $meilisearch() {
  return getMeilisearchInstance()
}
