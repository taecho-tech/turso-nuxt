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

    const transaction = await client.transaction("write");
    try {
        await transaction.execute({
            sql: "CREATE TABLE IF NOT EXISTS people ( ID INTEGER PRIMARY KEY AUTOINCREMENT, dataSource TEXT, name TEXT, title TEXT, email TEXT);",
            args: [],
        });
        await transaction.execute({
            sql: "DELETE FROM people",
            args: [],
        });
        await transaction.execute({
            sql: "insert into people(dataSource, name, title, email) values(?, ?, ?, ?)",
            args: fakePerson,
        });
        await transaction.commit();
    } catch (error: any) {
        logme("ERROR on people.seed.ts", error);
        return [];
    } finally {
        logme("people.seed.ts", transaction);
        transaction.close();
    }
});
