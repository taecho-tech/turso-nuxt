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

    await client.execute({
        sql: "insert into people(dataSource, name, title, email) values(?, ?, ?, ?)",
        args: fakePerson,
    });

    const results = await client.execute("select * from people");

    logme("people.add.ts", results.rows);
    return results;
});
