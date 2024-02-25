import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';

export default function Results({ input }) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear -
        resultData[0].interest - resultData[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Intrest (Year)</th>
                    <th>Total Intrest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    resultData.map(yearDate => {
                        const totalIntrest = yearDate.valueEndOfYear -
                            yearDate.annualInvestment * yearDate.year - initialInvestment;
                        const totalAmountInvested = yearDate.valueEndOfYear -totalIntrest;
                        return <tr key={yearDate.year}>
                            <td>{yearDate.year}</td>
                            <td>{formatter.format(yearDate.valueEndOfYear)}</td>
                            <td>{formatter.format(yearDate.interest)}</td>
                            <td>{formatter.format(totalIntrest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    )
}