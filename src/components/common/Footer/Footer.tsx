const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="xl:flex xl:justify-between">
          <div className="mb-6 xl:mb-0 flex flex-col space-y-4">
            <a href="/" className="text-2xl font-bold">
              Rick and Morty search
            </a>
            <p className="text-gray-400 text-sm">© {currentYear}</p>
            <p className="text-sm text-gray-500">
              Data provided by&nbsp;
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
