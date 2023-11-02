// destructuring
// object destructuring
const user = {
  id: 123,
  name: {
    firstName: "Rayhan",
    lastName: "Mojumdar",
  },
  contactNo: "01780532466",
  address: "Hajigonj,chandpur",
};

const {
  contactNo , // { contactNo:string } not allowed to destructuring
  name: { firstName: fName,lastName: lName }, // name alias
} = user;

// array destructuring
const myFriends = ['chandler','joey','ross','rachel','monica','phoebe']

const [,,bestFriend,...rest] = myFriends





