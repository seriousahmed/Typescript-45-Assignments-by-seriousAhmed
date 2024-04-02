var personName = "John Doe";
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
