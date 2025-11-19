title: Recent & Upcoming Talks
cms_exclude: true
#url: talk
draft: true
_build:
  render: never
  list: never

# View
view: card

# Optional cover image (relative to `assets/media/` folder).
image:
  caption: ''
  filename: ''

cascade:
  - target:
      path: '{/events/*/**}'
    draft: true
    _build:
      render: never
      list: never
---
