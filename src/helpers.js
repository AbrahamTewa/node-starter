// ============================================================
// Import packages
import console from 'better-console';

// ============================================================
// Functions
/**
 * Return hello message
 * @param {string} [name] - Name of the person to say hello to
 * @returns {string}
 * @public
 */
function getHelloMessage(name) {
    if (name) {
        return `Hello ${name} !`;
    }

    return 'Hello you !';
}

/**
 * Display hello message
 * @param {string} [name] - Name of the person to say hello to
 * @returns {string}
 */
function sayHello(name) {
    const message = getHelloMessage(name);
    console.log(message);
}

// ============================================================
// Exports
export {
    getHelloMessage,
    sayHello,
};
