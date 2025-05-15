let toAbbrev = (string) => {
    const [firstName, lastName] = string.split(' ');
    return `${firstName} ${lastName.at(0)}.`;
};

export default toAbbrev;