function formatPhoneNumber(number) {
    const phoneNumber = String(number)
    switch (phoneNumber.length) {
        case 1:
            return `${phoneNumber}`;
        case 2:
            return `${phoneNumber}`;
        case 3:
            return `${phoneNumber}`;
        case 4:
            return phoneNumber.replace(/^(\d{1})(\d{3})$/, '+$1 $2');
        case 5:
            return phoneNumber.replace(/^(\d{1})(\d{2})(\d{2})$/, '+$1 $2 $3');
        case 6:
            return phoneNumber.replace(/^(\d{2})(\d{2})(\d{2})$/, '$1 $2 $3');
        case 7:
            return phoneNumber.replace(/^(\d{1})(\d{3})(\d{3})$/, '+$1 $2 $3');
        case 8:
            return phoneNumber.replace(/^(\d{0,})(\d{3})(\d{2})(\d{2})$/, '+$1 $2 $3 $4');
        case 9:
            return phoneNumber.replace(/^(\d{0,})(\d{3})(\d{3})(\d{2})$/, '+$1 $2 $3 $4');
        case 10:
            return phoneNumber.replace(/^(\d{0,})(\d{3})(\d{3})(\d{2})$/, '+$1 $2 $3 $4');
       
        default:
            return phoneNumber.replace(/^(\d{0,})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 $2 $3 $4 $5');
    }
}

console.log(formatPhoneNumber(1234567891));