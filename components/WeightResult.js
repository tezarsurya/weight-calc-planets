function WeightResult({ name, weight }) {
  let resultMass = (weight / 9.8).toFixed(2);
  return (
    <div className="flex flex-col items-center py-8 px-16 rounded-md font-sans text-gray-200 bg-slate-600 bg-opacity-40">
      <h2 className="text-center">
        The weight of the object on{" "}
        <span className="font-semibold">{name}</span>
      </h2>
      <div className="flex flex-col items-center justify-center sm:items-stretch sm:flex-row space-y-4 sm:space-x-2 sm:space-y-0 mt-4">
        <div className="flex justify-center items-center rounded-full min-w-[120px] min-h-[120px] p-4 text-lg font-bold bg-slate-600 bg-opacity-80">
          {weight} N
        </div>
        <div className="flex justify-center items-center rounded-full min-w-[120px] min-h-[120px] p-4 text-lg font-bold bg-slate-600 bg-opacity-80">
          {resultMass} kg
        </div>
      </div>
    </div>
  );
}

export default WeightResult;
