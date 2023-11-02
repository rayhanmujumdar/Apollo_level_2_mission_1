"use strict";
{
    //
    // spread operator
    // rest operator
    // destructuring
    //Learn spread operator
    const bros1 = ["Mir", "Firoz", "Rahat"];
    const bros2 = ["Tanmoy", "Nahid", "Mizan"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Miraz",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorList = {
        ...mentors1,
        ...mentors2,
    };
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("abul", "kabul", "babul");
    //
}
