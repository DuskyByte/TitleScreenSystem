# My Local App Component: Title Screen System

This component is the **initial interface** for my set of local web application systems. It runs first, manages the crucial user interaction needed to enable future multimedia (audio, video), and provides a clean transition to the main application menu or options panel.

It operates entirely within the main application's body, dynamically clearing and rebuilding the UI for each screen change (Splash Screen, Main Menu, Options Menu).

---

## Component Structure

This system maintains the logic/style separation across two different folders.

| File Name | Location | Purpose |
| :--- | :--- | :--- |
| **title-screen-system.js** | `modules/` | Contains all the logic: drawing the UI, handling button clicks, managing the screen flow, and clearing the DOM. |
| **title-screen-system.css** | `styles/` | Contains all dedicated styling, including screen centering, button looks, and animations (fade-in and title pulse). |

---

## Key Functionality

### 1. Dynamic Naming
The title text (`<h1>`) is automatically pulled from the main `index.html`'s `<title>` tag, so the app name only needs to be updated in one place.

### 2. Splash Screen Handling
This component starts with a simple "Click to Begin" splash screen. This is crucial as it provides the necessary **user interaction** required by modern browsers to allow future components to play audio or video media.

### 3. Options Menu Extensibility
The **Options Screen** is pre-built with a dedicated empty container (`<div id="modular-settings-panel">`). This is the designated **injection point** for future Options Modules (e.g., volume sliders, graphics toggles) to place their UI elements.

### 4. Visual Feedback
After pressing the **Save** button in the Options Menu, the system displays a brief **"Settings Saved!"** flash message before seamlessly fading back into the main Title Screen.

---

## Integration (How to Use)

To activate this component in the main **`DuskyByte/LocalWebAppLauncher`** application:

1.  Place the `title-screen-system.js` file into the **`modules/`** directory of the `LocalWebAppLauncher` repository.
2.  Place the `title-screen-system.css` file into the **`styles/`** directory of the `LocalWebAppLauncher` repository.
3.  Ensure the component's name is the **first entry** in the `SYSTEM_MODULES` array within the `launcher.js` file to guarantee it initializes the screen before any other module runs.

```javascript
const SYSTEM_MODULES = [
    "title-screen-system", // MUST BE FIRST
    "demo-module"
];