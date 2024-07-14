import { logme } from "~/utils/logger";

export default defineEventHandler(async (event) => {
    const client = useTurso();

    let results;

    const transaction = await client.transaction("read");
    try {
        results = await transaction.execute("select * from people");

        await transaction.commit();
    } catch (error: any) {
        logme("ERROR on people.add.ts", error);
        return [];
    } finally {
        if (results) {
            logme("people.fetch.ts", results.rows || []);
            return results.rows;
        }
        transaction.close();
    }
});
