import { readFileSync } from "fs"
import { join } from "path"

/**
 * Read the markdown content for an experience entry.
 * Files live at apps/web/content/experience/[id].md
 * Returns an empty string if the file doesn't exist.
 */
export function readExperienceContent(id: string): string {
    try {
        const filePath = join(process.cwd(), "content", "experience", `${id}.md`)
        return readFileSync(filePath, "utf-8")
    } catch {
        return ""
    }
}
