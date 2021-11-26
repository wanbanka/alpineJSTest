document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({

    open: false,
    title: "Start here",
    red: false,
    statuses: ["open", "closed", "archived"],

    toggle() {
        this.open = !this.open;
    },

    pressEnter() {
        console.log("Enter pressed");
    },

    pressShiftEnter() {
        console.log("Shift + enter pressed");
    },

    validForm() {
        console.log("Value of search: " + document.querySelector("input[name='search']").value);
    },

    displayFoo() {
        console.log("Foo was dispatched");
    }

}));

});

