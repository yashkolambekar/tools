import { tools } from "../../tools";
import ToolCard from "./ToolCard";

const Home = () => {

    return (
        <>
        <div className="flex w-full items-center flex-wrap ">
            {
                tools.map((tool, index) => <ToolCard key={index} data={tool} />)
            }
        </div>
        </>
    )
}

export default Home;