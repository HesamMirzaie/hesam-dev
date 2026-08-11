# Developer Resume and Learning Blog

## Summary

Build a recruiter-focused Next.js portfolio with a restrained terminal aesthetic, fast static pages, an MDX technical blog, a web resume with a downloadable PDF, a small shadcn/ui component layer, responsive accessibility, and automated self-hosted deployment.

Use the Next.js App Router with TypeScript. Every route will be generated at build time so the production site can be served as static files without a running Next.js server.

## Implementation

- Create `/`, `/resume`, `/projects`, `/blog`, and `/blog/[slug]`.
- Build a home page containing an introduction, availability status, key skills, selected projects, recent posts, a short about section, and email/social calls to action.
- Initialize shadcn/ui for the existing Next.js + Tailwind v4 project and keep generated components source-owned in the repository.
- Use shadcn/ui components where they fit: `Button` for actions, `Badge` for status and metadata, `Card` for projects and post previews, `Separator` for section boundaries, `NavigationMenu` or `Sheet` for responsive navigation, and `Switch` for the theme toggle.
- Use CSS variables and shadcn semantic tokens for dark and light themes, follow the system preference by default, persist a visitor's manual choice, respect reduced-motion settings, and provide visible focus states and semantic HTML.
- Use component variants before custom styles, `cn()` for conditional classes, `gap-*` rather than `space-*`, `size-*` for equal dimensions, and semantic colors such as `bg-background` and `text-muted-foreground`.
- Apply terminal styling through monospace accents, prompt-like headings, command/status details, and subtle transitions while keeping long-form text highly readable. Keep layout in Tailwind classes and put shared theme tokens in the existing global CSS file.
- Store resume, project, social-link, and site metadata in typed local data modules.
- Keep a curated resume PDF under public assets and update it alongside the web resume whenever experience changes.
- Store posts as `content/blog/<slug>.mdx`. A build-time content loader will parse and validate frontmatter, sort posts newest-first, exclude drafts, calculate reading time, and provide static route parameters.
- Render trusted local MDX with reusable components for headings, links, `Alert` callouts, images, tables, and syntax-highlighted code. Reuse shadcn primitives before creating custom markup.
- Generate canonical metadata, post-specific title and description metadata, a shared Open Graph image, `sitemap.xml`, `robots.txt`, favicon assets, and a custom 404 page.
- Configure a static export and static-compatible image handling.

## Interfaces and Publishing

Each post will use this frontmatter shape:

```yaml
title: string
description: string
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD # optional
draft: boolean        # default false
```

Core local types will be `SiteConfig`, `ResumeData`, `Project`, and `PostMetadata`. Version one will not have a database, authentication, contact API, or other public application API.

Publishing workflow:

1. Add an MDX file with valid frontmatter.
2. Preview it locally and check links and code blocks.
3. Commit and push to `main`.
4. Let CI validate and deploy the new static build.

## Quality and Deployment

- Verify metadata validation, draft exclusion, date ordering, reading-time calculation, and unknown-post handling with a focused automated test suite.
- Run formatting checks, linting, type checking, tests, and the production build in CI.
- Test navigation, theme persistence, keyboard use, mobile layouts, print behavior, PDF download, metadata, and representative MDX elements.
- Target Lighthouse scores of at least 90 for performance, accessibility, best practices, and SEO on primary routes.
- Use a multi-stage Docker build and serve the exported site from an unprivileged Nginx container on port 8080.
- Use GitHub Actions to build an immutable commit-tagged image, publish it to GitHub Container Registry, and deploy it over SSH after pushes to `main`.
- Let the existing reverse proxy handle the eventual domain and TLS.
- Keep the previous image tag available for rollback and document the required repository secrets, server setup, health check, deployment, and rollback commands.

## Assumptions

- Use pnpm, TypeScript, the App Router, ESLint, Tailwind CSS v4, and shadcn/ui without an additional component library or state-management package.
- Treat shadcn components as editable application source, not a runtime dependency; inspect component APIs and preserve their accessibility structure when customizing them.
- Publish English-only content in version one.
- Configure the public domain through one site URL setting before launch.
- Create the repository and resume content from scratch.
- Defer search, tags, comments, newsletter signup, analytics, CMS/admin UI, RSS, dynamic Open Graph images, and Hyperframes video/animation skills until usage justifies them.
- The Hyperframes repository does not contain a `tailwind` skill; no Hyperframes skill is assumed by this plan.
