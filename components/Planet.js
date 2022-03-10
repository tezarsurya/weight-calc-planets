import Image from "next/image";

function Planet({ name }) {
  return (
    <div className="block relative min-w-[200px] min-h-[200px] sm:min-w-[300px] sm:min-h-[300px]">
      <Image src={`/img/${name.toLowerCase()}.png`} layout="fill" alt={name} />
    </div>
  );
}

export default Planet;
