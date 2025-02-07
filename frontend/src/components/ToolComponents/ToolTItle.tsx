import { IToolInfo } from "../../types";

const ToolTitle = ({ data }: { data: IToolInfo }) => {
  return (
    <>
      <div className="mb-4">
        <div className="flex items-center">
          <div>
            <img src={data.icon} className="h-[1.5em]" alt="" />
          </div>
          <p className="text-[1.5em]">{data.title}</p>
        </div>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default ToolTitle;
