---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: 'About me'
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium
        shape: circle

  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        My current work explores optimal control of intensity of Hawkes processes with Bayesian learning, with applications to cyber risk in finance. My supervisors are [Roxana Dumitrescu](https://www.roxanadumitrescu.fr/?lang=en), [Nicolas Baradel](https://www.nicolasbaradel.fr/?lang=en), and [Caroline Hillairet](https://sites.google.com/site/carolinehillairet). I'm truly grateful for the support of the chair "[Stress Test, Risk Management and Financial Steering](http://www.cmap.polytechnique.fr/~stresstest/)" founded by [École Polytechnique](https://www.polytechnique.edu/), [Fondation de l'École polytechnique](https://www.polytechnique.edu/fondation/) and [BNP Paribas](https://group.bnpparibas/).

    design:
      columns: '1'
---
