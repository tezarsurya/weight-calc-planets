import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Planet from "../components/Planet";
import WeightResult from "../components/WeightResult";

const planets = require("../public/data/planets.json");

export default function Home() {
  const [mass, setMass] = useState("");
  const selectRef = useRef(null);
  const [invalids, setInvalid] = useState({ mass: false, planet: false });
  const [initial, setInitial] = useState(true);
  const [result, setResult] = useState({ planet: "", weight: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitial(false);
    if (mass == "") {
      setInvalid({ mass: true });
    } else if (selectRef.current.value == "") {
      setInvalid({ planet: true });
    } else {
      setInvalid({ mass: false, planet: false });
      let selectedPlanet = planets.filter(
        (planet) => planet.id === selectRef.current.value
      );

      let weight = (selectedPlanet[0].gforce * mass).toFixed(2);
      let name = selectedPlanet[0].name;

      setResult({ planet: name, weight });
    }
  };

  return (
    <main className="Home flex flex-col relative items-center min-h-screen p-3 bg-contain bg-repeat py-8">
      <Head>
        <title>Calculate object weight on planets</title>
      </Head>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/img/stars_poster.png"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
      >
        <source src="/img/stars.mp4" />
      </video>
      <h1 className="font-sans font-semibold text-xl sm:text-3xl text-center text-gray-300">
        Calculate weight of an object on a planet
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-stretch space-y-4 sm:space-x-2 sm:space-y-0 mt-8"
      >
        <input
          type="number"
          name="mass"
          id="mass"
          placeholder="Mass in Kilogram"
          value={mass}
          onChange={(e) => setMass(e.currentTarget.value)}
          className="form-input"
        />
        <select
          name="planet"
          id="planet"
          className="form-input"
          ref={selectRef}
        >
          <option value="">🌑 select planet 🌏</option>
          {planets.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="btn text-gray-200 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 active:text-gray-300"
        >
          Calculate Weight
        </button>
      </form>
      <div className="flex justify-center rounded-md w-11/12 lg:w-3/4 mt-8 py-8 px-6 space-x-4 bg-blue-900 bg-opacity-30">
        {initial ? (
          <Planet name="earth" />
        ) : invalids.mass ? (
          <div className="flex justify-center py-4 px-16 rounded-md font-sans text-gray-200 bg-blue-900 bg-opacity-60">
            Mass is required
          </div>
        ) : invalids.planet ? (
          <div className="flex justify-center py-4 px-16 rounded-md font-sans text-gray-200 bg-blue-900 bg-opacity-60">
            You did not choose a planet yet
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 md:space-y-0">
            <Planet name={result.planet} />
            <WeightResult name={result.planet} weight={result.weight} />
          </div>
        )}
      </div>
    </main>
  );
}
