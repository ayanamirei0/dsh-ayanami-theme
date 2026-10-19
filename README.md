# dsh-ayanami-theme

A personal DeepSeek Harness theme built around the supplied Rei Ayanami artwork.
It changes **color and backdrop only** — the stock layout, spacing, control
geometry and button shapes are untouched.

## What it does

- Paints a fixed, full-window backdrop using the bundled image.
- Overrides the `--dsw-*` surface, text, border and accent tokens with a
  translucent ice-blue palette for both light and dark appearance.
- Leaves menus, dialogs and inputs opaque enough to stay readable.
- Adds no sidebar item, no settings page and no host route.

## Install (already done for the `desktop` profile)

```powershell
$env:ELECTRON_RUN_AS_NODE='1'
& "D:\software\dsh\DeepSeek Harness.exe" --expose-internals `
  "D:\software\dsh\resources\app.asar\dsh\node_modules\@deepseek-ai\dsh-desktop-host\lib\cli.js" `
  plugin --profile desktop add "link:C:/Users/L2006/.dsh/plugin-src/dsh-ayanami-theme"
```

Restart DSH afterwards so the client bundle is composed. The theme is active
immediately; there is no toggle in Settings.

## Tweak

- **Backdrop position / darkness**: edit the two `background-image` blocks in
  `lib/client.js` (the `linear-gradient(...)` layers and `center 28%`).
- **Surface transparency**: in the `TOKENS` table, adjust the alpha values of
  `--dsw-alias-bg-base`, `--dsw-alias-bg-layer-1/2/3` and
  `--dsw-specific-sidebar-fill`. Lower alpha shows more artwork but reduces
  text contrast.
- **Accent color**: `--dsw-alias-brand-primary` / `--dsw-alias-link`.
- **Different image**: replace `assets/background.jpg`, then re-embed it:

```powershell
$b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes("assets/background.jpg"))
$js  = [IO.File]::ReadAllText("lib/client.js")
# Replace the existing data:image/jpeg;base64,... payload with the new one.
```

The client bundle is served with an immutable cache header. After editing,
restart DSH and hard-refresh with **Ctrl+Shift+R**.

## Uninstall

```powershell
$env:ELECTRON_RUN_AS_NODE='1'
& "D:\software\dsh\DeepSeek Harness.exe" --expose-internals `
  "D:\software\dsh\resources\app.asar\dsh\node_modules\@deepseek-ai\dsh-desktop-host\lib\cli.js" `
  plugin --profile desktop remove dsh-ayanami-theme
```

Then delete this directory and restart DSH.

## Artwork

The bundled image was supplied by the user for personal use. *Neon Genesis
Evangelion* and its characters are the property of khara / the respective
rights holders. This package is a private, non-commercial local theme; do not
redistribute the artwork.
