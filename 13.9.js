// var num = 1;
// if (num == 2) {
//   console.log(num * 2);
// } else if (num == 5) {
//   console.log(num * 5);
// } else if (num == 7) {
//   console.log(num * 7);
// } else if (num == 10) {
//   console.log(num * 10);
// } else {
//   console.log(num);
// }
// switch (num) {
//   case 2:
//     console.log(num * 2);
//     break;
//   case 5:
//     console.log(num * 5);
//     break;
//   case 7:
//     console.log(num * 7);
//     break;
//   case 10:
//     console.log(num * 10);
//     break;
//   default:
//     console.log("none of the above");
//     break;
// }
// var num = 1;
// switch (num) {
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("thuesday");
//     break;
//   case 4:
//     console.log("wednsday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//   default:
//     console.log("sunday");
//     break;
// }

var user = { name: "dan", email: "dani@gmail.com", userType: "admin" };
switch (user.userType) {
  case "admin":
    console.log("you are admin");
    break;
  case "super admin":
    console.log("you are super admin");
    break;
  default:
    console.log("our client");
    break;
}
