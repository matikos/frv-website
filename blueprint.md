
# Blueprint: Interactive Digital Lab

## Overview

This document outlines the design and features of the Interactive Digital Lab, a single-page web application built with modern HTML, CSS, and JavaScript. The goal is to create a visually engaging and responsive experience that showcases the lab's capabilities.

## Style, Design, and Features

### Implemented

*   **Responsive Design:** Adapts to different screen sizes.
*   **Modern Aesthetics:** Dark theme, grid background, and modern typography.
*   **Component-based Structure:** Organized into logical sections.
*   **Robust Animations:** Page-load, hover, and scroll effects are managed by JavaScript.

### Current Plan: Bug Fixes and Interaction Polish

*   **Goal:** Address bugs reported from the last deployment and improve user interactions based on feedback.
*   **Implementation Steps:**
    1.  **Fix Universal Blur Effect:**
        *   **JavaScript (`main.js`):** The `click` listener for blurring capability items will be maintained for universal desktop/mobile use. 
        *   **Add "Click Outside" Reset:** A new event listener will be added to the main content area. If the user clicks outside of a capability item, any active blur effect will be reset. This improves usability and prevents items from getting "stuck" in a blurred state.

    2.  **Fix Mobile Scaling Effect:**
        *   **JavaScript (`main.js`):** The `touchstart` event listener for the press-and-hold scaling effect will be modified. The `{ passive: true }` option will be removed to ensure the event is handled correctly for all capability items, especially those at the bottom of the viewport.

    3.  **Remove Persistent Glow Effect:**
        *   **JavaScript (`main.js`):** The `touchstart` and `touchend` event listeners that add/remove the `.glow-hold` class from the logo will be deleted.
        *   **CSS (`index.html`):** The `.logo-main.glow-hold` CSS rule will be deleted.
