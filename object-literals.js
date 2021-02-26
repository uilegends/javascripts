const profileDetails = {
    name: 'Ghanshyam',
    'details show'() {
        return `This is ${this.name}`
    }
}

// console.log(profileDetails.details()); // Type 1 calling if no space between function name
console.log(profileDetails['details show']()); // Type 2 calling in ES6 with space