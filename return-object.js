let firstName = 'Ghanshyam';
let lastName = 'Pandey';

function fullName(fname, lname) {
    return { fname, lname };
}

let n = fullName(firstName, lastName);
console.log(n.fname);
console.log(n.lname);