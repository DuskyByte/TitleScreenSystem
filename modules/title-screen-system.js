const EventBus = {
    listeners: {},

    /**
     * Registers a callback function to run when an event is published.
     * @param {string} eventName - The name of the event (e.g., 'options:screen_shown').
     * @param {function} callback - The function to execute when the event fires.
     */
    subscribe: function(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    },
    
    /**
     * Removes a specific callback function from an event's listener list.
     */
    unsubscribe: function(eventName, callback) {
        if (this.listeners[eventName]) {
            this.listeners[eventName] = this.listeners[eventName].filter(
                listener => listener !== callback
            );
        }
    },

    /**
     * Executes all functions subscribed to the given event.
     * @param {string} eventName - The name of the event to fire.
     * @param {any} data - Optional data to pass to the subscribed functions.
     */
    publish: function(eventName, data) {
        if (this.listeners[eventName]) {
            console.log(`[EventBus] Publishing: ${eventName}`);
            this.listeners[eventName].forEach(callback => {
                try {
                    callback(data);
                } catch (e) {
                    console.error(`[EventBus] Error in ${eventName} listener:`, e);
                }
            });
        }
    }
};

/**
 * The SYSTEM_MODULES array contains the filenames (without the .js extension) of systems located in the 'modules/' folder.
 * To enable a system, just add its filename string to this array!
 */
const SYSTEM_MODULES = [
    "title-screen-system",
    "audio-system"
];

/**
 * Loads a JavaScript module dynamically by creating and appending a script tag.
 * @param {string} moduleName - The filename of the module (e.g., "combat-system").
 */
function loadModule(moduleName) {
    console.log(`Loading ${moduleName} module...`);
    const script = document.createElement('script');
    script.src = `./modules/${moduleName}.js`;
    script.onload = () => {
        console.log(`Module Loaded: ${moduleName}`);
    };
    script.onerror = () => {
        console.error(`Failed to load module: ${moduleName}. Check the filename and path.`);
    };
    document.head.appendChild(script);
}

window.EventBus = EventBus;
console.log(`TTRPG Web Launcher Initializing...`);
console.log(`Loading ${SYSTEM_MODULES.length} system modules...`);
SYSTEM_MODULES.forEach(loadModule);