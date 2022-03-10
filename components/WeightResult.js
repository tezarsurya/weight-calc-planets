function WeightResult({ name, weight }) {
  return (
    <div className="flex flex-col items-center py-8 px-16 rounded-md font-sans text-gray-200 bg-slate-600 bg-opacity-60">
      <h2 className="text-center">
        The weight of the object on{" "}
        <span className="font-semibold">{name}</span>
      </h2>
      <div className="flex justify-center items-center rounded-full min-w-[120px] min-h-[120px] p-4 mt-4 text-lg font-bold bg-slate-600 bg-opacity-90">
        {weight} N
      </div>
    </div>
  );
}

export default WeightResult;
