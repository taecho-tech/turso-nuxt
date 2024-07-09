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

    // At the time of writing, mutliple statements are not supported - client.batch returns an error
    const statements = [
        "DROP TABLE IF EXISTS people;",
        "CREATE TABLE people (ID INTEGER PRIMARY KEY AUTOINCREMENT, dataSource TEXT, name TEXT, title TEXT, email TEXT);",
        {
            sql: "insert into people(dataSource, name, title, email) values(?, ?, ?, ?)",
            args: fakePerson,
        },
    ];

    const results: any[] = [];
    for (const statement of statements) {
        let result = await client.execute(statement);
        results.push(result);
    }

    await client.execute("select * from people");

    logme("people.seed.ts", results);
    return results;
});
