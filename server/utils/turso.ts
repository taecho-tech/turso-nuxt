import { createClient } from "@libsql/client";

export function useTurso() {
    const tursoConfig = useRuntimeConfig().turso;

    if (
        !tursoConfig.NUXT_TURSO_DATABASE_URL ||
        !tursoConfig.NUXT_TURSO_AUTH_TOKEN
    ) {
        throw new Error(
            "Please fill the NUXT_TURSO_DATABASE_URL and NUXT_TURSO_DB_AUTH_TOKEN env variables"
        );
    }
    return createClient({
        url:'file:./db/turso-nuxt.db',
        syncUrl: tursoConfig.NUXT_TURSO_DATABASE_URL,
        authToken: tursoConfig.NUXT_TURSO_AUTH_TOKEN,
        syncInterval: 60
    });
    
}
