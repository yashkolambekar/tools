const PerTimeCard = ({
  time,
  rate,
  title,
  hours,
}: {
  time: number;
  rate: number;
  title: string;
  hours: number;
}) => {
  return (
    <div className="bg-[rgb(25,25,25)] p-4 rounded-md mt-4">
      <div className="text-[1.3em] flex items-end">
        <p className="text-[1.3em]">₹{(time * rate * hours).toFixed(2)}</p>
        <p className="ml-1 opacity-[0.5]">/{title}</p>
      </div>
    </div>
  );
};

export default PerTimeCard;
