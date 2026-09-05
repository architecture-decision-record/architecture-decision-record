<script lang="ts">
	// TextSizePicker — Lily's own text-size-picker helper (an icon button
	// that opens a WAI-ARIA APG listbox), matching ThemePicker's pattern.
	// The slug the visitor picks is applied by the helper as
	// data-text-size="{slug}" on <html>; theme.css maps each slug to a
	// --user-font-scale value, which the base html rule multiplies into the
	// root font size. Choice persists to localStorage under "adr-text-size";
	// app.html applies it before paint to avoid a flash of unscaled text.
	import TextSizePicker from 'lily-design-system-svelte-text-size-picker';

	const STORAGE_KEY = 'adr-text-size';
	const SIZES = ['small', 'default', 'large', 'larger', 'largest'];
	const DEFAULT_SIZE = 'default';
</script>

<TextSizePicker label="Text size" sizes={SIZES} storageKey={STORAGE_KEY} defaultValue={DEFAULT_SIZE} name="text-size" />
