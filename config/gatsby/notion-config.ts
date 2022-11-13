import * as dotenv from 'dotenv';

export function getNotionPluginConfig() {
    const envFileName = `.env.${process.env.NODE_ENV}`;
    console.info(`Reading environment variables from ${envFileName}...`);

    dotenv.config({ path: envFileName });

    const notionDatabaseId = process.env.NOTION_DATABASE_ID;
    const notionToken = process.env.NOTION_TOKEN;

    console.info(`Notion database ID successfully read from environment: ${!!notionDatabaseId}.`);
    console.info(`Notion integration token successfully read from environment: ${!!notionToken}.`);

    return {
        token: notionToken,
        databaseId: notionDatabaseId,
        propsToFrontmatter: false,
        lowerTitleLevel: true
    };
}
