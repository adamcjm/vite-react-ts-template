/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE_API_URL: string
  // More environment Variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
