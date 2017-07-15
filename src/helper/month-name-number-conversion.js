const months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
];

export function monthNumToName(monthnum) {
    return months[monthnum - 1] || ''
}
export function monthNameToNum(monthname) {
    const month = months.indexOf(monthname)
    return month ? month + 1 : 0
}
