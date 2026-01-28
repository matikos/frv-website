
# Blueprint: Interactive Digital Lab

## Overview

This document outlines the design and features of the Interactive Digital Lab, a single-page web application built with modern HTML, CSS, and JavaScript. The goal is to create a visually engaging and responsive experience that showcases the lab's capabilities.

## Style, Design, and Features

### Implemented

*   **Responsive Design:** Adapts to different screen sizes.
*   **Modern Aesthetics:** Dark theme, grid background, and modern typography.
*   **Component-based Structure:** Organized into logical sections.
*   **Robust Animations:** Page-load, hover, scroll, and touch-specific effects are managed by JavaScript.

### Current Plan: Unified "Focus" Interaction for Capabilities

*   **Goal:** Unify the focus interaction across all devices. Clicking (on desktop) or tapping (on mobile) a capability item will now cause all *other* capability items to blur, leaving the selected one in focus. Clicking/tapping the item again resets the view.
*   **Implementation Steps:**
    1.  **JavaScript (`main.js`):**
        *   **Refactor Logic:** The `click` event listener for the `.cap-item` elements will be moved out of the `if (isTouchDevice())` block.
        *   **Universal Application:** This makes the blur/focus toggle behavior available for both mouse clicks on desktop and taps on touch devices, creating a consistent user experience.
