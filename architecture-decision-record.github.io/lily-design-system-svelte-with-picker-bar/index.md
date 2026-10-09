# Lily Design System Svelte with PickerBar

For each Svelte app subdirectory...

Use PNPM and Lily dependencies (not vendored):
- https://www.npmjs.com/package/@lilydesignsystem/svelte-headless
- https://www.npmjs.com/package/@lilydesignsystem/svelte-theme-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-text-size-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-locale-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-share-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-picker-bar

In global top header navigation area use:
  - svelte-picker-bar

In Lily ThemePicker use:
- all Lily default themes (not any application-specific custom themes)
- sort themes alphabetetically
- sort UK & US themes at the end, after all the non-national themes

In Lily SharePicker use:
  - Copy Link
  - Email Link
  - Share on LinkedIn
  - Share on Reddit
  - Share on Bluesky
  - Share on Mastodon (link to mastodonshare.com)

In Lily TextSizePicker use:
- all Lily default text sizes (not any application-specific custom text sizes)
  
Retire:
  - If any Lily Design System components are vendored, such as in `./src/lib`, and are unneeded, then delete them.
  - If any Lily custom CSS themes exist (not Lily theme defaults), then delete them.

After Lily updates:
1. commit, merge into main, delete old branches
2. publish to GitHub pages
3. verify public GitHub pages site uses PickerBar, and has all Lily themes
