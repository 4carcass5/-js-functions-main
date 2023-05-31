const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];
//BEGIN
const getFreeDomainsCount = (emails) => {
    return emails.reduce((old_value, el) => {
        const [, domain] = el.split("@");
        if (freeEmailDomains.includes(domain)) {
            old_value[domain] = (old_value[domain] || 0) + 1;
        }
        return old_value;
    }, {});
}

export default getFreeDomainsCount;
//END