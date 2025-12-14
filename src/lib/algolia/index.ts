import { algoliasearch } from "algoliasearch";

if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
  throw new Error("Please add your Algolia App ID to .env.local");
}

if (!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY) {
  throw new Error("Please add your Algolia Search API Key to .env.local");
}

// Client-side search client (v5 API)
export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

// Index names
export const INDICES = {
  ARTICLES: "articles",
  TOPICS: "topics",
} as const;

// Search options interface
export interface SearchOptions {
  hitsPerPage?: number;
  page?: number;
  filters?: string;
  facetFilters?: string | string[];
  attributesToRetrieve?: string[];
  attributesToHighlight?: string[];
  highlightPreTag?: string;
  highlightPostTag?: string;
}

// Indexable article type
export interface IndexableArticle extends Record<string, unknown> {
  objectID: string;
  title: string;
  summary: string;
  imageUrl?: string;
  topics?: string[];
  publishedDate?: string;
  featured?: boolean;
}

// Indexable topic type
export interface IndexableTopic extends Record<string, unknown> {
  objectID: string;
  title: string;
  description: string;
  slug?: string;
  icon?: string;
  color?: string;
}

// Search function for articles
export async function searchArticles(query: string, options?: SearchOptions) {
  return await searchClient.searchSingleIndex({
    indexName: INDICES.ARTICLES,
    searchParams: {
      query,
      hitsPerPage: 20,
      ...options,
    },
  });
}

// Search function for topics
export async function searchTopics(query: string, options?: SearchOptions) {
  return await searchClient.searchSingleIndex({
    indexName: INDICES.TOPICS,
    searchParams: {
      query,
      hitsPerPage: 20,
      ...options,
    },
  });
}

// Server-side admin client (for indexing)
let adminClient: ReturnType<typeof algoliasearch> | null = null;

export function getAdminClient() {
  if (!process.env.ALGOLIA_ADMIN_API_KEY) {
    throw new Error("Please add your Algolia Admin API Key to .env.local");
  }

  if (!adminClient) {
    adminClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
      process.env.ALGOLIA_ADMIN_API_KEY
    );
  }

  return adminClient;
}

// Save/update a single article
export async function indexArticle(article: IndexableArticle) {
  const client = getAdminClient();
  return await client.saveObject({
    indexName: INDICES.ARTICLES,
    body: article,
  });
}

// Save/update a single topic
export async function indexTopic(topic: IndexableTopic) {
  const client = getAdminClient();
  return await client.saveObject({
    indexName: INDICES.TOPICS,
    body: topic,
  });
}

// Save multiple articles at once
export async function indexArticles(articles: IndexableArticle[]) {
  const client = getAdminClient();
  return await client.saveObjects({
    indexName: INDICES.ARTICLES,
    objects: articles,
  });
}

// Delete an article from index
export async function deleteArticleFromIndex(objectID: string) {
  const client = getAdminClient();
  return await client.deleteObject({
    indexName: INDICES.ARTICLES,
    objectID,
  });
}

// Delete a topic from index
export async function deleteTopicFromIndex(objectID: string) {
  const client = getAdminClient();
  return await client.deleteObject({
    indexName: INDICES.TOPICS,
    objectID,
  });
}
