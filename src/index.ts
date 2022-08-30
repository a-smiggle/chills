import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { Components } from "./Components";
import VSCode, { SnippetType } from "./utils/VSCode";

// ✅ read file
function ReadFile(filename: string) {
  return readFileSync(join(__dirname, filename), "utf-8");
}

interface SnippetsType {
  [key: string]: SnippetType[];
}

// ✅ Write file
function WriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  writeFileSync(join(__dirname, filename), data, {
    flag: "w",
  });

  const contents = readFileSync(join(__dirname, filename), "utf-8");

  return contents;
}

function main() {
  const SNIPPETS: SnippetsType = {};
  Object.keys(Components).forEach((component) => {
    if (!SNIPPETS[component]) SNIPPETS[component] = [];
    Components[component].forEach((c) => {
      let BODY = "";
      if (c.file) BODY = ReadFile(c.file);
      else if (c.body) BODY = c.body;
      SNIPPETS[component].push(
        VSCode({
          title: c.title,
          snippet: BODY,
          prefix: c.prefix,
          description: c.description,
          scope: c.scope,
        })
      );
    });
  });
  let toWrite = {};
  Object.keys(SNIPPETS).forEach((item) => {
    toWrite = Object.assign(toWrite, ...SNIPPETS[item]);
  });
  WriteFile(
    `./snippets/generated.code-snippets`,
    JSON.stringify(toWrite, null, 2)
  );
}

main();
