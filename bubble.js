document.getElementById("grand-parent").addEventListener("click", function (e) {
    console.log("Grandparent Clicked");
    e.stopPropagation();
},
    // false
);
document.getElementById("parent").addEventListener("click",function (e) {
        console.log("Parent Clicked");
        // e.stopPropagation();
    },
    // false
);
document.getElementById("child").addEventListener("click",function (e) {
        console.log("Child Clicked");
        e.stopPropagation();
    },
    // false
);
