"use client";

const Navbar = ({ setLanguage, setCurrency }) => {
  return (
    <div className="p-8 flex justify-between items-center">
      <div>
        <p className="text-3xl font-semibold">COUNTRIES</p>
      </div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="language" className="block mb-2">
            Language
          </label>
          <input
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-violet-600 border-gray-300 text-gray-900 p-1"
            type="text"
            id="language"
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="curren">
            Currency
          </label>
          <select onChange={(e) => setCurrency(e.target.value)} name="Currency" id="curren">
            <option value="ALLCURREN">ALL</option>
            <option value="AUD">AUD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
