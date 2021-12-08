document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({
    
    title: "Alpine Test",
    open: false,
    red: false,
    statuses: [
        {id: 1, status: "Open"},
        {id: 2, status: "Closed"},
        {id: 4, status: "Pending"}
    ],
    test: "",
    colors: ["rouge"],
    answer: "yes",
    places: ["Paris", "London", "LA", "Chicago", "San Francisco"],
    placeSelected: "",
    selectNumber: "",
    movie: null,

    init() {

        console.log("Page initialized");
        this.$watch("open", (value) => {
            console.log("Valeur du $watch: " + value);
        });
        this.movie().then((response) => {

            this.movie = response;

        });

    },

    async movie() {

        let response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=91cf00f8");

        return await response.json();

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

Alpine.store("darkMode", {

    on: false,

    init() {
        this.on = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log(this.on);
    },

    toggle() {
        this.on = !this.on;
    }

});

});

document.addEventListener("alpine:initialized", () => {

    console.log("App initialized");

});