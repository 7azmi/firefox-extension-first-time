# FX Example Background Changer

Minimal WebExtension for Firefox.

**Target:** Senior devs exploring extensions.

## What it does

-   Changes `example.com` background (lightblue on load, lightcoral from popup).
-   Uses: Content script, Browser Action (Popup), Messaging, `activeTab`, `host_permissions`.

## Get Started (Dev)

1.  `git clone ...` (or download).
2.  Firefox: `about:debugging` -> `This Firefox` -> `Load Temporary Add-on...` -> Select *any* project file.

## Structure

-   `manifest.json`: Configuration (MV3).
-   `content-scripts/`: JS injecting into page.
-   `popup/`: Browser action UI (`.html`, `.js`).
-   `icons/`: (Optional) Action icons.

## Debugging

-   **Content Scripts:** Page DevTools (F12 on `example.com`).
-   **Popup/Other:** Extension DevTools (`about:debugging` -> Inspect, then right-click popup -> Inspect Popup).

## Workflow

Edit -> Save -> `about:debugging` Reload -> Refresh page/UI.

## Docs

[MDN WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
