let guest_list = ["Musk", "Arnault", "Adani", "Gates"];
//listed names have positions like 0 and 1 and 2 and so on

let not_coming = guest_list[0];

console.log(not_coming, "isn't coming.");

guest_list.splice(0, 1, "Zucki");
// first digit is for adding and positioning the new name, second digit is
// for the number of names to be removed

guest_list.forEach(guest_list => console.log(`Hi ${guest_list}, I would be honoured to invite you for dinner.`));