import React, { useEffect, useState } from 'react';
import {
    Page,
    Navbar,
    List,
    ListInput,
    Row,
    Button,
    Block, BlockTitle, Card, CardContent, ListItem,
} from 'framework7-react';
import { calculateInterest, getDays, setInHistory } from '../utils/functions';
import store from '../js/store';

const InterestCalculator = () => {

    const [amount, setAmount] = useState('');
    const [irate, setIrate] = useState('');
    const [fdate, setFdate] = useState('');
    const [todate, setTodate] = useState('');
    const [days, setDays] = useState('');

    const [interest, setInterest] = useState('0.00');
    const [total, setTotal] = useState('0.00')
    
    useEffect(() => {
        let days = getDays(fdate, todate);
        setDays(days);
    }, [todate]);

    useEffect(() => {
        if(todate !== '') {
            let days = getDays(fdate, todate);
            setDays(days);
        }
    }, [fdate]);

    const handleToDate = (date) => {
        setTodate(date);
    }

    const handleFromDate = (date) => {
        setFdate(date);
    }

    const handleInterestRate = (event) => {
        setIrate(event.target.value);
    }

    const handleAmountInput = (event) => {
        let num = event.target.value;
        num = num.replaceAll(',', '');
        let x = Number(num)
        setAmount(x.toLocaleString('en-IN'));
    }

    const handleCalculate = () => {
        console.log(amount, irate, fdate, todate);
        let res = calculateInterest(amount, irate, fdate, todate);
        console.log(res);
        if(res.total !== "₹0.00") {
            //setting in local state
            setInterest(res.interest);
            setTotal(res.total);
            
            //setting in redux store
            //console.log("Res", res);
            store.dispatch('addHistory', res);
        }
    }

    const handleClear = () => {
        window.location.reload();
    }

    return (
        <Page name="settings">
            <Navbar title="Interest Calculator" />
            <List noHairlinesMd>
                <ListInput
                    id="amount"
                    name="amount"
                    value={amount}
                    label="Amount"
                    floatingLabel
                    type="text"
                    inputmode="decimal"
                    inputStyle={{ fontWeight: "bold" }}
                    clearButton
                    autofocus={true}
                    onInput={handleAmountInput}
                />

                <ListInput
                    id="irate"
                    name="irate"
                    label="Interest Rate"
                    floatingLabel
                    type="text"
                    value={irate}
                    inputmode="decimal"
                    inputStyle={{ fontWeight: "bold" }}
                    clearButton
                    onInput={handleInterestRate}
                />

                <ListInput
                    id="days"
                    name="days"
                    label="Days"
                    floatingLabel
                    type="text"
                    value={days}
                    inputmode="decimal"
                    readonly
                    inputStyle={{ fontWeight: "bold" }}
                />

                <ListInput
                    id="fdate"
                    name="fdate"
                    label="From Date"
                    type="datepicker"
                    floatingLabel
                    defaultValue=""
                    clearButton
                    inputStyle={{ fontWeight: "bold" }}
                    calendarParams={{ closeOnSelect: true }}
                    value={fdate}
                    onCalendarChange={handleFromDate}
                />

                <ListInput
                    label="To Date"
                    type="datepicker"
                    floatingLabel
                    defaultValue=""
                    clearButton
                    inputStyle={{ fontWeight: "bold" }}
                    calendarParams={{ closeOnSelect: true }}
                    value={todate}
                    onCalendarChange={handleToDate}
                />
                <Block>
                    <Row tag="p">
                        <Button className="col" onClick={handleCalculate} large fill raised color="">Calculate</Button>
                        <Button className="col" onClick={handleClear} large outline raised color="red">Clear</Button>
                    </Row>
                </Block>
            </List>

            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <h3 style={{margin: 0}}>Interest <span style={{position: "absolute", right: "14px"}}>{interest}</span></h3>
                        </ListItem>
                        <ListItem>
                        <h3 style={{margin: 0}}>Total <span style={{position: "absolute", right: "14px"}}>{total}</span></h3>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Page>
    )
};

export default InterestCalculator;
