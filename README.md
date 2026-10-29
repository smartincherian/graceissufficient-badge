# graceissufficient-badge

The **"Digital partner: [graceissufficient.net]"** footer credit, shared by
every project so the logo and link are kept in one place.

```
Digital partner:  ┌────────────────────────┐
                  │ graceissufficient.net  │  ← white chip, links to the site
                  └────────────────────────┘
```

- React component, inline-styled: no Tailwind or CSS setup needed.
- Text colour and font size come from the surrounding element.
- Logo is bundled with the package (10 KB WebP).
- Link opens in a new tab (`rel="noopener noreferrer"`).

---

## 1. React + Vite projects (recommended)

### Install

Pick **one** source.

**A. From this folder on your computer** (projects that sit next to it in
`AllGloryForGod_22052026/`):

```bash
# in the project folder, once:
echo "install-links=true" >> .npmrc
npm install ../graceissufficient-badge
```

The `.npmrc` line is **required**. Without it npm makes a symlink, and the
build then fails with `failed to resolve import "react/jsx-runtime"`. With it,
npm copies the package into `node_modules`, the same as an install from GitHub.

**B. From GitHub** (once this folder is pushed to a repo; works on any machine
and in CI/deploys):

```bash
npm install github:smartincherian/graceissufficient-badge
# or pin a release:
npm install github:smartincherian/graceissufficient-badge#v1.0.0
```

A private repo works too: npm uses your Git credentials.

### Use

```jsx
import PartnerBadge from 'graceissufficient-badge';

export default function Footer() {
  return (
    <footer style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>
      <PartnerBadge />
    </footer>
  );
}
```

### Props

| Prop        | Default              | Use                                          |
| ----------- | -------------------- | -------------------------------------------- |
| `label`     | `"Digital partner:"` | Text before the logo, e.g. a translated label |
| `className` | none                 | Extra classes on the outer `<span>` (e.g. Tailwind) |
| `style`     | none                 | Extra inline styles, merged over the defaults |

Examples:

```jsx
<PartnerBadge />                                   // default text
<PartnerBadge label={t('footer.madeBy')} />        // from your i18n files
<PartnerBadge label="Made with ❤️ by" />           // custom text
<PartnerBadge className="text-sm text-gray-500" /> // Tailwind on the wrapper
<PartnerBadge style={{ gap: '0.75rem' }} />        // tweak spacing
```

Light backgrounds: the logo sits on a white chip, so on a white page give the
footer a light grey background so the chip stays visible.

### Bundlers other than Vite

The package ships raw `.jsx` and imports a `.webp`. Vite handles both out of
the box. With Next.js, add it to `transpilePackages` in `next.config.js`:

```js
module.exports = { transpilePackages: ['graceissufficient-badge'] };
```

---

## 2. Projects without React (plain HTML, WordPress, Firebase static pages)

Copy `graceissufficient.webp` into the site (or host it once at
`https://graceissufficient.net/badge.webp`) and paste:

```html
<span lang="en" style="display:inline-flex;align-items:center;gap:.5rem">Digital partner:
  <a href="https://graceissufficient.net" target="_blank" rel="noopener noreferrer"
     style="display:inline-flex;background:#fff;border-radius:.375rem;padding:.375rem .5rem">
    <img src="/graceissufficient.webp" alt="graceissufficient.net" width="420" height="56"
         style="height:14px;width:auto">
  </a></span>
```

If you change the component, update this snippet to match.

---

## 3. React Native / Expo

Not supported by this package (it renders HTML elements). Copy the logo and
build the same layout with `<View>`, `<Text>`, `<Image>` and
`Linking.openURL('https://graceissufficient.net')`.

---

## Updating the badge everywhere

1. Edit `index.jsx` and/or replace `graceissufficient.webp`
   (keep the name, or update the import and `files` in `package.json`).
2. Bump `version` in `package.json` (e.g. `1.0.0` → `1.1.0`).
3. **GitHub installs:** commit, tag, push:
   ```bash
   git commit -am "Badge: <change>" && git tag v1.1.0 && git push --tags
   ```
   Then in each project: `npm update graceissufficient-badge`
   (or re-run the `#v1.1.0` install if pinned).
4. **Local-folder installs:** in each project re-run
   `npm install ../graceissufficient-badge`. The copy doesn't refresh by itself.
5. Rebuild and redeploy each project.

## Projects using it

- `catholicans`: `src/components/Footer.jsx` (GitHub install, `#v1.0.0`)
