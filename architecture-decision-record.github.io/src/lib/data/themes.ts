// All 45 ready-made Lily Design System themes. Each theme is a standalone
// CSS file (static/themes/<id>.css) that styles every one of Lily's 492
// component class hooks — see Header.svelte's PickerBar, which lazy-loads
// exactly one of these per selection rather than bundling all 45 up front.
//
// Order: alphabetical by label, with UK & US national (government/NHS)
// themes sorted to the end, after all the non-national themes.
export interface ThemeOption {
	id: string;
	label: string;
	group: 'General' | 'National';
}

export const DEFAULT_THEME_ID = 'light';

export const themes: ThemeOption[] = [
	{ id: 'abyss', label: 'Abyss', group: 'General' },
	{ id: 'acid', label: 'Acid', group: 'General' },
	{ id: 'adobe-spectrum', label: 'Adobe Spectrum', group: 'General' },
	{ id: 'aqua', label: 'Aqua', group: 'General' },
	{ id: 'autumn', label: 'Autumn', group: 'General' },
	{ id: 'black', label: 'Black', group: 'General' },
	{ id: 'bumblebee', label: 'Bumblebee', group: 'General' },
	{ id: 'business', label: 'Business', group: 'General' },
	{ id: 'caramellatte', label: 'Caramel Latte', group: 'General' },
	{ id: 'cmyk', label: 'CMYK', group: 'General' },
	{ id: 'coffee', label: 'Coffee', group: 'General' },
	{ id: 'corporate', label: 'Corporate', group: 'General' },
	{ id: 'cupcake', label: 'Cupcake', group: 'General' },
	{ id: 'cyberpunk', label: 'Cyberpunk', group: 'General' },
	{ id: 'dark', label: 'Dark', group: 'General' },
	{ id: 'dim', label: 'Dim', group: 'General' },
	{ id: 'dracula', label: 'Dracula', group: 'General' },
	{ id: 'emerald', label: 'Emerald', group: 'General' },
	{ id: 'fantasy', label: 'Fantasy', group: 'General' },
	{ id: 'forest', label: 'Forest', group: 'General' },
	{ id: 'garden', label: 'Garden', group: 'General' },
	{ id: 'halloween', label: 'Halloween', group: 'General' },
	{ id: 'lemonade', label: 'Lemonade', group: 'General' },
	{ id: 'light', label: 'Light', group: 'General' },
	{ id: 'lofi', label: 'Lo-Fi', group: 'General' },
	{ id: 'luxury', label: 'Luxury', group: 'General' },
	{ id: 'mozilla-protocol', label: 'Mozilla Protocol', group: 'General' },
	{ id: 'night', label: 'Night', group: 'General' },
	{ id: 'nord', label: 'Nord', group: 'General' },
	{ id: 'pastel', label: 'Pastel', group: 'General' },
	{ id: 'retro', label: 'Retro', group: 'General' },
	{ id: 'silk', label: 'Silk', group: 'General' },
	{ id: 'sunset', label: 'Sunset', group: 'General' },
	{ id: 'synthwave', label: 'Synthwave', group: 'General' },
	{ id: 'valentine', label: 'Valentine', group: 'General' },
	{ id: 'winter', label: 'Winter', group: 'General' },
	{ id: 'wireframe', label: 'Wireframe', group: 'General' },

	// UK & US national themes — sorted last, alphabetically among themselves.
	{ id: 'united-kingdom-government-digital-service', label: 'GOV.UK', group: 'National' },
	{ id: 'united-kingdom-national-health-service-england-for-patients', label: 'NHS England — patients', group: 'National' },
	{ id: 'united-kingdom-national-health-service-england-for-practitioners', label: 'NHS England — practitioners', group: 'National' },
	{ id: 'united-kingdom-national-health-service-scotland-for-patients', label: 'NHS Scotland — patients', group: 'National' },
	{ id: 'united-kingdom-national-health-service-scotland-for-practitioners', label: 'NHS Scotland — practitioners', group: 'National' },
	{ id: 'united-kingdom-national-health-service-wales-for-patients', label: 'NHS Wales — patients', group: 'National' },
	{ id: 'united-kingdom-national-health-service-wales-for-practitioners', label: 'NHS Wales — practitioners', group: 'National' },
	{ id: 'united-states-web-design-system', label: 'USWDS (US government)', group: 'National' }
];
