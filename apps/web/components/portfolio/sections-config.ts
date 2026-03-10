import type { SectionId } from "./section"

// Static IDs required for anchor navigation — useId() would produce
// random values that break hash links.
export const S: Record<SectionId, SectionId> = {
    about: "about",
    work: "work",
    experience: "experience",
    writing: "writing",
    contact: "contact",
}
