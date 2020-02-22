import React from 'react';

const Calendar = ({datePickerStyle}) => {

    let myDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0);

    const computeNumberOfDays = () => {
        /*
        * The following will give the last day in the previous month
        * considering that month are zero based.
        * */
        let days = [];
        for (let i = 0; i < myDate.getDate(); i++) {
            days[i] = i + 1;
        }
        return days;
    };

    const determineMonth = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
        return months[myDate.getMonth()];
    };

    const computeWeeks = () => {
        let weeks;
        weeks = [];
        for (let i = 0; i < Math.ceil(computeNumberOfDays().length / 7); i++) {
            weeks[i] = i+1;
        }
        return weeks;
    };

    return (
        <div className={`ui-date-picker ${datePickerStyle}`} >
            <div className="month">
                {determineMonth()}
                <span>{(new Date()).getFullYear()}</span>
            </div>
            <table>
                <thead>
                    <tr className="days">
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th className="ui-date-picker-week-end">Sa</th>
                        <th className="ui-date-picker-week-end">Su</th>
                    </tr>
                </thead>
                <tbody>
                    {computeWeeks().map(week => {
                        let min;
                        let max;
                        if (week === 1){
                            min = 1;
                            max = 7;
                        } else if (week === 2) {
                            min = 8;
                            max = 14;
                        } else if (week === 3) {
                            min = 15;
                            max = 21;
                        } else if (week === 4) {
                            min = 22;
                            max = 28;
                        } else if (week === 5) {
                            min = 28;
                            max = 31;
                        }
                        return <tr key={`week${week}`}>{computeNumberOfDays()
                            .filter(date => date >= min && date <= max).map(date => <td key={`day${date}`}>{date}</td>)}
                            </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
