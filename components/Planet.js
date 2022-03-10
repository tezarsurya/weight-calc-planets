import Image from "next/image";

function Planet({ name }) {
  return (
    <div className="block relative min-w-[200px] min-h-[200px] lg:min-w-[300px] lg:min-h-[300px]">
      <Image
        src={`/img/${name.toLowerCase()}.png`}
        layout="fill"
        alt={name}
        priority
      />
    </div>
  );
}

export default Planet;
