document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({

    open: false,
    title: "Start here",
    red: false,
    statuses: ["open", "closed", "archived"],

    toggle() {
        this.open = !this.open;
    }

}));

});

