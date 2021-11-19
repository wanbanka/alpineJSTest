document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({

    open: false,

    init() {

        console.log("Page initialized");

    },

    toggle() {
        this.open = !this.open;
    },

    consoleLog(value) {
        console.log(value);
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