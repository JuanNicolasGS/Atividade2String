let toAbbrev = (string) => {
    const [firstName, lastName] = string.split(' ');
    return `${firstName} ${lastName.at(0)}.`;
};

console.log(toAbbrev('Round Hood'))