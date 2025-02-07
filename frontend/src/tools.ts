import RupeeIcon from "../public/icons/rupee-sign-svgrepo-com.svg";
import ServerRatesInINR from "./tools/ServerRatesInINR/ServerRatesInINR";

const tools = [
    {
        title: "Server Rates in INR",
        description: "Convert USD/hour to INR/hour, month, year, etc",
        icon: RupeeIcon,
        link: "/server-rates-in-inr",
        component: ServerRatesInINR
    }
]

export {tools};