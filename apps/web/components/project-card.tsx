import type { Project } from '@workspace/content';
import { Badge } from '@workspace/ui/components/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { ProjectMedia } from './project-media';

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Card
      size="default"
      className="transition-transform duration-200 hover:scale-[1.01] hover:shadow-sm"
    >
      <CardHeader>
        <CardTitle className="mb-2">
          <span className="flex w-full items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="text-base">{p.name}</span>
              <ProjectMedia p={p} />
            </span>
            {p.notice && <Badge variant="outline">{p.notice}</Badge>}
          </span>
        </CardTitle>
        <CardDescription>{p.shortDescription}</CardDescription>
      </CardHeader>
    </Card>
  );
}
