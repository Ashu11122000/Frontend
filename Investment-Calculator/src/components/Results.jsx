import React from "react";

export default function Results({ input }) {
    const resultsData = [];

    let investmentValue = input.initialInvestment;

    for (let i = 0; i < input.duration; i++) {
        const year = i + 1;
        const interestEarned =
        investmentValue * (input.expectedReturn / 100);

        investmentValue += interestEarned + input.annualInvestment;

    resultsData.push({
        year: year,
        interest: interestEarned,
        valueEndOfYear: investmentValue,
        annualInvestment: input.annualInvestment,
        });
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {resultsData.map((yearData) => {
                const totalInterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    input.initialInvestment;

                const totalAmountInvested =
                    input.initialInvestment +
                    yearData.annualInvestment * yearData.year;

            return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{yearData.valueEndOfYear.toFixed(2)}</td>
                    <td>{yearData.interest.toFixed(2)}</td>
                    <td>{totalInterest.toFixed(2)}</td>
                    <td>{totalAmountInvested.toFixed(2)}</td>
                </tr>
                );
            })}
        </tbody>
    </table>
    );
}