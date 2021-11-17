document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({

    open: false,

    toggle() {
        this.open = !this.open;
    }

}));

Alpine.store('tabs', {

    current: "first",
    items: ["first", "second", "third"]

});

});

