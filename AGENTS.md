<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Course content lives as data in src/content (course.ts + types.ts); screens render any lesson from that data, so new lessons are added there without touching UI.
- Modules 5–8 use dedicated lesson-data files and existing section renderers; keep the original ordered lesson IDs even when titles change so stored progress and links remain valid.
- Lesson navigation follows availableLessons and keys each quiz by lesson ID so adjacent route changes cannot reuse answers or checked state.
- Module 4 lessons use the existing section types, including supervised sections and a bundled original schematic in a parts section; this keeps electrical teaching data-driven without changing shared rendering or progression.
- Module 4 photographs use existing gallery sections with CDN asset pointers and lesson-scoped uncropped image styles; source attribution stays with each image so shared rendering and other modules remain unchanged.
- Student progress is stored in browser localStorage via src/lib/progress.ts (no backend yet, by request).
- A lesson is enabled only when it has sections (isAvailable in src/content/course.ts); progress must be counted with countCompleted so pending lessons never add progress. Why: pending classes must show "Próximamente" and not be completable.
- Educational diagrams are selected by typed content sections and rendered by the shared refrigerant-diagrams module; optional audiovisual metadata lives in lesson data. Why: pilot resources remain scoped to their lesson without changing completion or quiz logic.
- The inverter lesson visual pilot uses an ID-scoped article and a presentation-only section renderer; lesson data and shared lesson behavior stay unchanged so the trial cannot restyle other lessons.
- Shared CourseProgress and courseOverview derive counts and the first unfinished available lesson from existing curriculum helpers; an exhausted course links to progress instead of restarting or opening a pending lesson. Why: home and academy must agree without changing stored progress.
- Global academy styling uses semantic tokens and shared lesson-article classes while retaining specialized inverter and electrical media rendering. Why: all screens share an identity without changing educational data.
- The supplied split reference is a CDN pointer selected through existing parts/gallery data and a dedicated image viewer; only that asset gains zoom controls. Why: preserve original labels and other course media while allowing mobile inspection.
- Immersive presentation uses existing CSS tokens, a collapsible AppShell sidebar and a library-backed SplitExplorer; no 3D engine or new storage is introduced, to preserve curriculum and keep the first stage lightweight.
