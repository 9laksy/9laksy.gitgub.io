import moment from 'moment';

export function formatDate(date: Date | null): String {
    if (date === null) {
        return "";
    }
    return moment(date).format("DD-MM-YYYY");
}

export function getFromDate(): Date {
    return new Date(new Date().setFullYear(new Date().getFullYear() - 1))
}


export function getDays(fromdate: Date | null, todate: Date | null): number {
    if (fromdate !== null && todate !== null) {
        if (typeof todate !== 'string' && typeof fromdate !== 'string') {
            let DiffInTime = todate.getTime() - fromdate.getTime();
            let DiffInDays = DiffInTime / (1000 * 3600 * 24);
            return Math.round(DiffInDays);
        }
        return 0;
    }
    return 0;
}


interface FormData {
    [key: string]: any
}
export function calculateInterest(data: FormData) {
    let amount = Number(data.amount);
    let interestRate = Number(data.interestRate);
    let days = getDays(data.fromdate, data.todate);

    let R = (interestRate / 100) / 30;
    let SI = round(((amount * R) * days));
    let Amount = amount + SI;

    let result = {
        interest: getINRFormat(SI),
        amount: getINRFormat(Amount),
    }
    return result;
}


function round(num: number): number {
    return Math.ceil(num * 100) / 100;
}

function getINRFormat(arg: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(arg);
}



export function convertToSlug(val: String): string {
    return val.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}