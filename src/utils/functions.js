import moment from 'moment';




export function getDays(f, t) {

    console.log(f);

    let fromdate = f !== '' ? f[0] : '';
    let todate = t !== '' ? t[0] : '';

    if (fromdate !== null && todate !== null) {
        if (typeof todate !== 'string' && typeof fromdate !== 'string') {
            let DiffInTime = todate.getTime() - fromdate.getTime();
            let DiffInDays = DiffInTime / (1000 * 3600 * 24);
            return Math.round(DiffInDays);
        }
        return '';
    }
    return '';
}

export function calculateInterest(amount, irate, fromdate, todate) {

    let strAmount = amount.replaceAll(',', '');
    let numAmount = Number(strAmount);
    let InterestRate = Number(irate);


    let days = getDays(fromdate, todate);
    let R = (InterestRate / 100) / 30;
    let SI = round(((numAmount * R) * days));
    let Amount = numAmount + SI;
    let result = {
        timestamp: new Date(),
        amount: amount,
        days: days,
        irate: irate,
        fdate: fromdate,
        todate: todate,
        interest: getINRFormat(SI),
        total: getINRFormat(Amount),
    }
    return result;
}

function round(num) {
    return Math.ceil(num * 100) / 100;
}
function getINRFormat(arg) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(arg);
}


export function setInHistory(res) {
    let his = localStorage.getItem("history");

    if(his !== null && his !== '') {
        let jsonHis = JSON.parse(his);
        jsonHis.push(res);
        localStorage.setItem("history", JSON.stringify(jsonHis));
    } else {
        localStorage.setItem("history", JSON.stringify([]));
        setInHistory(res);
    }
    //alert("Saved in history");
}

export function removeInHistory(index) {
    let his = localStorage.getItem("history");

    if(his !== null && his !== '') {
        let jsonHis = JSON.parse(his);
        jsonHis.splice(index, 1);
        localStorage.setItem("history", JSON.stringify(jsonHis));
    }
}

export function resetAllHistory() {
    localStorage.setItem("history", []);
}

export function formatDate(date) {
    if (date === null) {
        return "";
    }
    let objDate = new Date(date);
    return moment(objDate).format("DD/MM/YYYY");
}


export function formatDateTitle(datetime) {
    if(datetime === null) {
        return "No Title";
    }

    let dateObj = new Date(datetime);
    return moment(dateObj).format("MMMM Do YYYY, h:mm:ss");
}