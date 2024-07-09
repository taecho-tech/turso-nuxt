import { logme } from "~/utils/logger";

export default defineEventHandler(async (event) => {
    const client = useTurso();

    const results = await client.execute("select * from people");

    logme("people.fetch.ts", results.rows);
    return results.rows;
});
