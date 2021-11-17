document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({

    open: false,
    title: "Start here",

    toggle() {
        this.open = !this.open;
        console.log(this.open);
    }

}));

});

