const Keyboard  = {
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

        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.main.classList.add("keyboard", "1keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());


        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

    },


    _createKeys() {
        const fragment = document.createDocumentFragment();
        const KeyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "d", "o", "n", "e", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", 
            "space"
        ];

        const createIconHTML = (icon_name)=> {
            return `<i class="material-icons">${icon.name}</1>`;
        }

        KeyLayout.forEach(key => {
            const keyElement = document.createElement('button');
            const insertLineBreak = ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;

            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard__key');

            switch (key) {
                case 'backspace':
                    keyElement.Element.classList.add('keyboard__key--wide')
                    keyElement.innerHTML = createIconHTML('backspace');
                    keyElement.addEventListener('click', () => {
this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
this._triggerEvent('oninput');
                    });
                    
                    break;
                case 'caps':
                        keyElement.Element.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
                        keyElement.innerHTML = createIconHTML('keyboard_capslock');
                        keyElement.addEventListener('click', () => {
    this._toggleCapsLock();
    keyElement.classList.toggle('keyboard__key--active', this.properties.capslock);
});                
    break;

                case 'enter':
                        keyElement.Element.classList.add('keyboard__key--wide');
                        keyElement.innerHTML = createIconHTML('keyboard_return');
                        keyElement.addEventListener('click', () => {
    this.properties.value += "\n";
    this._triggerEvent('oninput');
});
                        
                        break;

                        case 'space':
                                keyElement.Element.classList.add('keyboard__key--extra-wide');
                                keyElement.innerHTML = createIconHTML('space_bar');
                                keyElement.addEventListener('click', () => {
            this.properties.value += " ";
            this._triggerEvent('oninput');
                                });
                                break;

                                case 'done':
                                        keyElement.Element.classList.add('keyboard__key--wide', 'keyboard__key--dark');
                                        keyElement.innerHTML = createIconHTML('check_circle');
                                        keyElement.addEventListener('click', () => {
                    this.close();
                    this._triggerEvent('onclose');
                                        });
                                        break;

                                        default:
                                                keyElement.textContent = key.toLowerCase();                                                keyElement.addEventListener('click', () => {
                            this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLowerCase();
                            this._triggerEvent('oninput');
                                                });
                                                break;
            }
            fragment.appendChild(keyElement);
            if(insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        });

        return fragment;

    },

    _triggerEvent(handlerName) {
        console.log('Event triggered! Event Name: ' + handlerName);
    },

    _toggleCapsLock() {
        console.log('Caps Lock Toggled!');
    },

    open(initualValue, oninput, onclose) {

    },

    close() {

    },


};

window.addEventListener('DOMContentLoaded', function() {
    Keyboard.init();
})