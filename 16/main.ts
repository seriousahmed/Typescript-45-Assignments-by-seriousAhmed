let guest_list = ["Musk", "Adani", "Gates", "Zucki"];
let not_coming = guest_list[2];
console.log(not_coming, "isn't coming");
guest_list.splice(2, 0, "Arnault");
console.log("We have arranged a bigger table now!");

guest_list.unshift("Arnault");
//  to add a name at the beginning index of array

guest_list.push("Kalanick");
//  to adda a name at the end index of array

let middle_index: number = Math.floor(guest_list.length / 2);
//  making a new variable to add a name in the centre index of array

guest_list.splice(middle_index, 0, "MBS");
//  the using middle_index variable to add the name in the centre index

console.log("Updated list of guests");

guest_list.forEach(guest => console.log(`Hi! ${guest}, I'm honoured to invite you to a dinner.`))
