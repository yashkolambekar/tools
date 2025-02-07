import { IToolInfo } from "../../types";
import { useNavigate } from "react-router-dom"

const ToolCard = ({data} : {data: IToolInfo}) => {

  const navigate = useNavigate();

  return (
    <>
      <div
      onClick={() => {
        navigate(data.link);
      }}
      className="cursor-pointer opacity-[0.7] hover:opacity-[1] transition-all duration-[300ms] ease min-w-[18em] flex-1 min-h-[5em] p-4 border border-[rgb(100,100,100)] hover:border-[rgb(150,150,150)] m-4 rounded-lg ">
        <div className="flex items-center mb-2">
            <img src={data.icon} className="w-[1.4em]" alt="" />
        <p className="text-[1.2em] font-medium">{data.title}</p>
        </div>
        <p className="text-[rgb(150,150,150)]">{data.description}</p>
      </div>
    </>
  );
};

export default ToolCard;
