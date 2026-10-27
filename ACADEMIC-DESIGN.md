# Academic contemporary design

The English and French home, research, experience and teaching pages use the `academic` layout. Other existing Hugo Blox pages keep their original layouts. GitHub Pages deployment and the Hugo version in `.github/workflows/deploy.yml` are unchanged.

## Edit content

- Kabyle songs (French page only): `content/fr/chansons-kabyles/index.md` and `data/kabyle_songs.json`, linked from the French heritage page. The song partial preserves the supplied Kabyle transcription, French translation, stanza grouping and verse numbers. Original `doubt` flags remain in the source data only; the page displays neither markers nor a note about transcription uncertainties. Both YouTube links were matched to the track titles using YouTube oEmbed metadata. The songs page is indexable (`indexable: true`) and is explicitly added to the French sitemap by `layouts/sitemap.xml`, while staying out of navigation/feed collections. Both language sitemaps are advertised by `layouts/robots.txt`. Its visible heading/intro, description, Open Graph/Twitter metadata and JSON-LD collection describe the real songs and translations; no hidden keyword text or meta-keyword tag is used. Keywords live in the page front matter and JSON-LD. The browser tab keeps the requested name-only title. The page has no English translation; heritage pages remain unlisted/noindex.

- Biography, affiliations, social profiles, education and professional experience: `content/authors/admin/_index.md` and `content/fr/authors/admin/_index.md`.
- Research description and acknowledgements: the markdown section of `content/_index.md` and `content/fr/_index.md`.
- Publications and talks: `data/research.yaml`. The research page displays publications first, then talks in reverse chronological order. Empty publications show "Coming soon" / "À venir". Talk titles, locations and descriptions have `en` and `fr` values; dates use `YYYY-MM-DD`. Use `event_url` for a shared link or `event_urls` with `en` and `fr` values for language-specific links.
- Teaching: `content/teaching/_index.md` and `content/fr/teaching/_index.md`.
- Navigation labels, introductory text and CV file paths: `data/academic.yaml`.
- CV: `static/uploads/CV_Massyle_DENDENE.pdf`, shared by both site languages. The older `CV_mass_eng.pdf` and `CV_mass_fr.pdf` URLs serve identical copies to preserve existing links. Replace all three together when updating the CV. Update the `?v=` suffix in both `cv_path` values in `data/academic.yaml` with the first 12 characters of the new PDF's SHA-256 hash so browsers fetch the latest version.
- Education links: `institution_url` in each author's `education` list. IMT Atlantique uses `/en` for the English site and `/fr` for the French site.
- Portrait: `content/authors/admin/avatar.png`. Hugo creates a smaller WebP image shared by both languages.
- Personal heritage pages: `content/fr/origines/index.md` and `content/origins/index.md`, reached from the linked word Kabyle in each experience page. Both share `translationKey: heritage` for the language switcher. Diagram, timeline and map labels are in `data/heritage.yaml`; English Wikipedia links point to English articles. Keep it out of menus, page lists, feeds and sitemaps with `build.list: never`; the layout adds `noindex`. The language diagram, map and timeline use the `heritage-*` shortcodes. The local SVG map uses Natural Earth 1:50m country geometry (public domain); the Kabylie halo and ancient names are approximate locators, not territorial boundaries. `assets/js/heritage.js` switches its two views without external requests.

## Edit presentation

`assets/js/external-links.js` opens external HTTP(S) links in a new tab with `noopener noreferrer`, preserving existing `rel` values. The shared `external-links.html` partial loads it on academic pages and through the theme's head hook on other pages. Relative links, same-site absolute URLs, anchors, local downloads and mail links keep their existing behavior. The click handler also covers dynamically inserted links. The canonical site origin and current preview origin are both considered internal.

Song translations may include `french_parts`, a sequence of plain `text` segments with an optional `url`, rendered by `academic/song-translation.html`. Keep the complete, unchanged translation in `french`; concatenating the segment texts must reproduce it exactly. This supports contextual Wikipedia links without raw HTML in the lyrics. Artist links at the top are collected from the songs, so adding a performer automatically updates the introduction links. Identical title/subtitle values display once.

The heritage photo carousel uses `data/heritage_photos.yaml` and the shared `heritage-gallery` shortcode in both languages. Its five photos are resized WebP copies in `assets/images/heritage-photos/`, oriented correctly with EXIF metadata removed; original files are unchanged. Hugo builds smaller responsive versions. Labels are in `data/heritage.yaml`. The carousel supports native touch scrolling, buttons, photo indicators and arrow/Home/End keys; it does not autoplay. `assets/js/heritage-gallery.js` updates the counter and respects reduced motion. Without JavaScript, photos remain horizontally scrollable.

`layouts/_partials/academic/page.html` contains the shared page structure. `assets/css/academic.css` contains the responsive styles and color palette. The small, dependency-free `assets/js/chiz.js` reveals a cheese surprise when visitors type `CHIZ` outside editable fields, or visit a page with `#chiz`. Escape dismisses it; otherwise it closes automatically. The cheese icons live in `static/favicon.ico`, `static/favicon-32x32.png` and `static/apple-touch-icon.png`.

The existing Blox section settings remain in the content files, so the original pages can be restored by changing their type back to `landing` and removing the custom homepage layout files.

## Preview

Install dependencies with the package manager specified in `package.json`, then run `hugo server --disableFastRender`. Use Hugo **0.152.2 extended**, matching the deployment workflow. Visit `/`, `/fr/`, `/research/`, `/fr/research/`, `/teaching/`, `/fr/teaching/`, `/experience/` and `/fr/experience/`.
