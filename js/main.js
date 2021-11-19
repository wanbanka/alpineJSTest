document.addEventListener("alpine:init", () => {

    Alpine.data("dropdown", () => ({

    open: false,

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

Alpine.store('tabs', {

    current: "first",
    items: ["first", "second", "third"]

});

});

