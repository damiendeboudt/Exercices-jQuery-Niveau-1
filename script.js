$( "#myDiv" ).text("Hello World!");

let link = $( "<a/>", {
    html: "This is a new link= Go Youtube",
    "class": "newLink",
    href: "https://www.youtube.com/"
});

link.insertAfter("#myDiv")

let myNewDiv = $("<div/>", {
    "class": "newDiv",
    width: "100px",
    height: "80px",
})

myNewDiv.insertAfter(".newLink")

$(".newDiv").append("<div/>", "<div/>", "<div/>", "<div/>")