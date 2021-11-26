document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({
    
    title: "Alpine Test",
    open: false,
    red: false,
    statuses: ["Open", "Close", "Busy"],
    test: "",
    colors: ["rouge"],
    answer: "yes",
    places: ["Paris", "London", "LA", "Chicago", "San Francisco"],
    placeSelected: "",
    selectNumber: "",

    init() {

        console.log("Page initialized");

    },

    toggle() {
        this.open = !this.open;
    },

    consoleLog(value) {
        console.log("Valeur du x-effect " + value);
    },

    toggleMenu: {
        ['@click']() {
            this.toggle()
        }
    },

    optionsMenu : {
        ['x-show']() {
            return this.open
        },

        ['@click.outside']() {
            this.open = false
        },

        ["x-transition:enter"]() {
            return "transition-ease-out"
        },

        ["x-transition:enter-start"]() {
            return "start-animation"
        },

        ["x-transition:enter-end"]() {
            return "end-animation"
        },

        ["x-transition:leave"]() {
            return "transition-ease-in"
        },

        ["x-transition:leave-end"]() {
            return "start-animation"
        },

        ["x-transition:leave-start"]() {
            return "end-animation"
        }
    },

    btnError : {
        ['@click']() {
            this.red = !this.red
        },
    },

    formValidation : {
        ["@submit.prevent"]() {
            console.log(this.test)
        }
    }

}));

Alpine.store('tabs', {

    current: "first",
    items: ["first", "second", "third"]

});

});

document.addEventListener("alpine:initialized", () => {

    console.log("App initialized");

});