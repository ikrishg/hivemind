'use client';

import { remarkPlugins } from '@workspace/remark-config';
import Markdown from 'react-markdown';

function MarkdownProse({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert prose-headings:font-medium prose-a:underline-offset-4 prose-a:transition-colors hover:prose-a:text-muted-foreground max-w-none">
      <Markdown remarkPlugins={[...remarkPlugins]}>{content}</Markdown>
    </div>
  );
}

export { MarkdownProse };
