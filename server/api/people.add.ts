import { logme } from "~/utils/logger";

import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
    const client = useTurso();

    const fakePerson = [
        "remote",
        faker.person.fullName(),
        faker.person.jobTitle(),
        faker.internet.email({
            provider: "taecho.tech",
        }),
    ];

    let results;

    const transaction = await client.transaction("write");
    try {
        await transaction.execute({
            sql: "insert into people(dataSource, name, title, email) values(?, ?, ?, ?)",
            args: fakePerson,
        });

        results = await transaction.execute("select * from people");

        await transaction.commit();
    } catch (error: any) {
        logme("ERROR on people.add.ts", error);
        return [];
    } finally {
        if (results) {
            logme("people.add.ts", results || []);
            return results.rows;
        }
        transaction.close();
    }
});
