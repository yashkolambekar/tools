const ConversionRateDisplay = ({rate}: {rate: number}) => {
    return (
        <div className="bg-[rgb(30,30,30)] p-4 rounded">
          Today's conversion Rate: 1 USD = {rate.toFixed(2)} INR
        </div>
    )

}

export default ConversionRateDisplay;