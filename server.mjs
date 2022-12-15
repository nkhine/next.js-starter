import NextServer from "next-server";
import serverless from "serverless-http";
import path from "path"
import { fileURLToPath } from 'url';
import config from "./.next/required-server-files.json"  assert {type: 'json'};
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextServer = new NextServer({
    hostname: "localhost",
    port: 3000,
    dir: __dirname,
    dev: false,
    conf: {
        ...config.config,
    },
});

export const handler = serverless(nextServer.getRequestHandler(), {
    binary: ['image/*', 'application/*', 'video/*', 'audio/*', "font/*"],
    provider: 'aws'
});