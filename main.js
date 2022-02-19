const Keyboard {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: '',
        capslock: false
    },

    init() {

    },

    _createKeys() {

    },

    triggerEvent(handlerName) {
        console.log('Event triggered! Event Name: ' + handlerName);
    }
}