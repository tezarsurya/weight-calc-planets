import Image from "next/image";
import { useEffect, useState } from "react";

function Planet({ name }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [name]);

  return (
    <div className="flex relative justify-center items-center min-w-[200px] min-h-[200px] lg:min-w-[300px] lg:min-h-[300px]">
      <Image
        src={`/img/${name.toLowerCase()}.png`}
        layout="fill"
        alt={name}
        priority
        onLoadingComplete={() => setLoading(false)}
      />
      {loading && (
        <svg
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex items-center justify-center animate-spin"
        >
          <path
            d="M16 16L19 19M18 12H22M8 8L5 5M16 8L19 5M8 16L5 19M2 12H6M12 2V6M12 18V22"
            stroke="#9ca3af"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default Planet;
