export function setupStorage() {

    const hasVisited =
        localStorage.getItem("codehouseVisited");

    if (!hasVisited) {

        localStorage.setItem(
            "codehouseVisited",
            "true"
        );

        console.log(
            "Welcome to CodeHouse! This is your first visit."
        );

    } else {

        console.log(
            "Welcome back to CodeHouse!"
        );

    }

}