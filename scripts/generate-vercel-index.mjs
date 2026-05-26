import { promises as fs } from "node:fs";
import path from "node:path";

const clientDir = path.resolve("dist/client");
const assetsDir = path.join(clientDir, "assets");

async function pickLargestFile(names) {
  let largestName = null;
  let largestSize = -1;

  for (const name of names) {
    const filePath = path.join(assetsDir, name);
    const stats = await fs.stat(filePath);

    if (stats.size > largestSize) {
      largestSize = stats.size;
      largestName = name;
    }
  }

  return largestName;
}

async function main() {
  const assetNames = await fs.readdir(assetsDir);
  const entryCandidates = assetNames.filter((name) => /^index-.*\.js$/.test(name));
  const cssCandidates = assetNames.filter((name) => name.endsWith(".css"));

  if (entryCandidates.length === 0) {
    throw new Error("No client entry bundle was found in dist/client/assets.");
  }

  const entryFile = await pickLargestFile(entryCandidates);
  const cssFile = cssCandidates.find((name) => /^styles-.*\.css$/.test(name)) ?? cssCandidates[0];

  const stylesTag = cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : "";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0f172a">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="/favicon.ico">
    ${stylesTag}
    <title>Secure Life Enterprise | Insurance · Finance · Grow</title>
    <script>
      window.$_TSR = window.$_TSR || {
        hydrated: true,
        streamEnded: true,
        initialized: false,
        buffer: [],
        h() {
          this.hydrated = true;
          this.c();
        },
        e() {
          this.streamEnded = true;
          this.c();
        },
        c() {
          if (this.hydrated && this.streamEnded) {
            delete window.$_TSR;
          }
        },
        p(script) {
          this.initialized ? script() : this.buffer.push(script);
        },
        router: {
          manifest: {},
          dehydratedData: undefined,
          lastMatchId: undefined,
          matches: [],
        },
      };
      window.__TSS_START_OPTIONS__ = window.__TSS_START_OPTIONS__ || {};
    </script>
  </head>
  <body>
    <div id="root"></div>
    <div id="__root__"></div>
    <script type="module" crossorigin src="/assets/${entryFile}"></script>
  </body>
</html>
`;

  await fs.writeFile(path.join(clientDir, "index.html"), html);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});