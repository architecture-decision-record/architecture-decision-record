<script lang="ts">
	// SharePicker — Lily's own share-picker helper: opens the native share
	// sheet where the platform has one (strategy="auto", the default),
	// otherwise a disclosure of the targets below plus copy-to-clipboard.
	// The package ships no social-network URLs by design — a share list is
	// an editorial/privacy decision for the consumer, not the library — so
	// every destination href is supplied here.
	import SharePicker, { type ShareTarget } from 'lily-design-system-svelte-share-picker';

	let { title = 'Architecture Decision Record (ADR)' }: { title?: string } = $props();

	const targets: ShareTarget[] = [
		{
			id: 'email',
			label: 'Share on Email',
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
			newTab: false
		},
		{
			id: 'linkedin',
			label: 'Share on LinkedIn',
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'bluesky',
			label: 'Share on Bluesky',
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: 'Share on Mastodon',
			href: (url, title) => `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: 'Share on Reddit',
			href: (url, title) => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		}
	];
</script>

<SharePicker
	label="Share Picker"
	{title}
	{targets}
	copyLabel="Copy link"
	copiedLabel="Link copied to clipboard"
	copyFailedLabel="Could not copy — copy it from the address bar"
/>
