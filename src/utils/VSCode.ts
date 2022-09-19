// Original https://github.com/pawelgrzybek/snippet-generator/blob/master/src/components/VSCode.js
export default function VSCode({
  title,
  snippet,
  prefix,
  description,
  scope,
}: {
  title: string;
  snippet: string;
  prefix: string;
  description: string;
  scope: string;
}) {
  const VS_SNIPPET: SnippetType = {
    [title]: {
      prefix,
      description,
      scope,
      body: snippet.replaceAll(" ${", " \\${").split(/\r?\n/),
    },
  };
  return VS_SNIPPET;
}

interface SnippetData {
  prefix: string;
  description: string;
  scope: string;
  body: string[];
}

interface SnippetType {
  [key: string]: SnippetData;
}

export { SnippetType };
