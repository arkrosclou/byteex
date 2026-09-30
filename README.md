# Byteex

One long product landing page, rebuilt from a Figma file. Next.js App
Router, Tailwind CSS 4, and Keystatic as the CMS — every word and every
photo on the page comes out of `content/`, nothing is hard-coded in a
component.

The CMS uses Keystatic's `local` storage: the admin runs alongside the
dev server and writes straight into the working tree, so an edit shows
up as a normal file change in git.

## Running it

```bash
npm install
npm run dev
```

The page is at `http://localhost:3000`, the editor at
`http://localhost:3000/keystatic`.

| Script           | What it does                                        |
| ---------------- | --------------------------------------------------- |
| `npm run dev`    | dev server                                          |
| `npm run build`  | production build                                    |
| `npm run images` | re-reads the pixel size of every upload (see below) |
| `npm run lint`   | eslint                                              |
| `npm run format` | prettier, including the Tailwind class sorter       |

`predev` and `prebuild` run `npm run images` on their own, so the sizes
are never stale.

## Layout

```
keystatic.config.ts      thin index: storage, brand, singletons
src/schema/singletons/   one file per singleton
src/schema/fields/       factories for the field shapes that repeat
content/                 global.json, home.json
public/images/           uploads, in folders Keystatic names itself
src/app/                 the page, and the admin route
src/components/sections/ one file per band of the page
src/components/collages/ the three photo arrangements
src/lib/                 the content reader, the image size manifest
```

The content is split into two singletons. `global` holds what is not
part of any one section — the logo, the announcement bar, the payment
strip. `home` holds the sections in the order they appear.
