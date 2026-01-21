import { SVG, Path, Rect } from '@wordpress/components';

// Flex Direction Icons
export const rowIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M4 11h16v2H4z" /><Path d="M16 7l4 5-4 5z" /></SVG>;
export const rowReverseIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M4 11h16v2H4z" /><Path d="M8 7L4 12l4 5z" /></SVG>;
export const columnIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M11 4v16h2V4z" /><Path d="M7 16l5 4 5-4z" /></SVG>;
export const columnReverseIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M11 4v16h2V4z" /><Path d="M7 8l5-4 5 4z" /></SVG>;

// Flex Align Icons
export const alignStartIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="16" height="2" /><Rect x="7" y="9" width="10" height="10" fillOpacity="0.3" /></SVG>;
export const alignCenterIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="11" width="16" height="2" /><Rect x="7" y="7" width="10" height="10" fillOpacity="0.3" /></SVG>;
export const alignEndIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="18" width="16" height="2" /><Rect x="7" y="5" width="10" height="10" fillOpacity="0.3" /></SVG>;
export const alignStretchIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="16" height="2" /><Rect x="4" y="18" width="16" height="2" /><Rect x="7" y="8" width="10" height="8" fillOpacity="0.3" /></SVG>;

// Flex Justify Icons
export const justifyStartIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="2" height="16" /><Rect x="9" y="7" width="4" height="10" fillOpacity="0.3" /><Rect x="15" y="7" width="4" height="10" fillOpacity="0.3" /></SVG>;
export const justifyCenterIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="11" y="4" width="2" height="16" /><Rect x="5" y="7" width="4" height="10" fillOpacity="0.3" /><Rect x="15" y="7" width="4" height="10" fillOpacity="0.3" /></SVG>;
export const justifyEndIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="18" y="4" width="2" height="16" /><Rect x="5" y="7" width="4" height="10" fillOpacity="0.3" /><Rect x="11" y="7" width="4" height="10" fillOpacity="0.3" /></SVG>;
export const justifySpaceBetweenIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="2" height="16" /><Rect x="18" y="4" width="2" height="16" /><Rect x="8" y="7" width="3" height="10" fillOpacity="0.3" /><Rect x="13" y="7" width="3" height="10" fillOpacity="0.3" /></SVG>;
export const justifySpaceAroundIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="5" y="7" width="5" height="10" fillOpacity="0.3" /><Rect x="14" y="7" width="5" height="10" fillOpacity="0.3" /></SVG>;

// Flex Wrap Icons
export const noWrapIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="10" width="16" height="4" fillOpacity="0.3" /></SVG>;
export const wrapIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="6" width="8" height="4" fillOpacity="0.3" /><Rect x="4" y="14" width="6" height="4" fillOpacity="0.3" /><Path d="M16 8h4v2h-4z" /><Path d="M18 6l3 4-3 4z" /></SVG>;
