import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "custom",
    contentSources: [
        {
            name: "filesystem",
            type: "filesystem",
            path: "./src/content"
        }
    ],
    postInstallCommand: "npm i --no-save @stackbit/types",
    devCommand: "npm start"
});
