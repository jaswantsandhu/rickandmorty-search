import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Rick and Morty Portal"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Explore Characters of the Rick and Morty Universe
            </h1>
            <p className="mb-8 leading-relaxed">
              Dive into the vast universe of Rick and Morty with our Character
              Explorer. Discover the backgrounds, stories, and secrets of your
              favorite characters - from the genius of Rick Sanchez to the
              countless citizens of the multiverse. Each character profile
              offers detailed insights, including species, status, and pivotal
              episodes.
            </p>
            <div className="justify-center w-full mb-10">
              <p className="text-sm text-gray-500">
                Data provided by
                <a
                  href="https://rickandmortyapi.com"
                  target="_blank"
                  className="text-indigo-600"
                  rel="noreferrer"
                >
                  The Rick and Morty API
                </a>
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/characters"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
