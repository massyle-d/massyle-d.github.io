# Academic contemporary design

The English and French home, research, experience and teaching pages use the `academic` layout. Other existing Hugo Blox pages keep their original layouts. GitHub Pages deployment and the Hugo version in `.github/workflows/deploy.yml` are unchanged.

## Edit content

- Biography, affiliations, social profiles, education and professional experience: `content/authors/admin/_index.md` and `content/fr/authors/admin/_index.md`.
- Research description and acknowledgements: the markdown section of `content/_index.md` and `content/fr/_index.md`.
- Publications and talks: `data/research.yaml`. The research page displays publications first, then talks in reverse chronological order. Empty publications show "Coming soon" / "À venir". Talk titles, locations and descriptions have `en` and `fr` values; dates use `YYYY-MM-DD`. Use `event_url` for a shared link or `event_urls` with `en` and `fr` values for language-specific links.
- Teaching: `content/teaching/_index.md` and `content/fr/teaching/_index.md`.
- Navigation labels, introductory text and CV file paths: `data/academic.yaml`.
- CV: `static/uploads/CV_Massyle_DENDENE.pdf`, shared by both site languages. The older `CV_mass_eng.pdf` and `CV_mass_fr.pdf` URLs serve identical copies to preserve existing links. Replace all three together when updating the CV.
- Education links: `institution_url` in each author's `education` list. IMT Atlantique uses `/en` for the English site and `/fr` for the French site.
- Portrait: `content/authors/admin/avatar.png`. Hugo creates a smaller WebP image shared by both languages.

## Edit presentation

`layouts/_partials/academic/page.html` contains the shared page structure. `assets/css/academic.css` contains the responsive styles and color palette. There are no new runtime JavaScript dependencies.

The existing Blox section settings remain in the content files, so the original pages can be restored by changing their type back to `landing` and removing the custom homepage layout files.

## Preview

Install dependencies with the package manager specified in `package.json`, then run `hugo server --disableFastRender`. Use Hugo **0.152.2 extended**, matching the deployment workflow. Visit `/`, `/fr/`, `/research/`, `/fr/research/`, `/teaching/`, `/fr/teaching/`, `/experience/` and `/fr/experience/`.
