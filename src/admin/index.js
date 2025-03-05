/**
 * Import Style
 */
import './style.scss';
import './welcome.scss';
import './settings.scss';

/**
 * External dependencies
 */
import { createRoot } from 'react-dom/client';

import Dashboard from './dashboard';

document.addEventListener('DOMContentLoaded', () => {
    const dashboardHandler = document.getElementById('zolo-dashboard');

    if (dashboardHandler) {
        createRoot(dashboardHandler).render(<Dashboard />);
    }
});
