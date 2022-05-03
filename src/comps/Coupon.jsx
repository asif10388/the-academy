const Coupon = () => {
  return (
    <div className="lg:px-2 lg:w-1/2">
      <div className="p-4 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
      </div>
      <div className="p-4">
        <p className="mb-4 italic">If you have a coupon code, please enter it in the box below</p>
        <div className="md:flex">
          <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
            <input type="coupon" name="code" placeholder="Apply coupon" className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none" />
            <button type="submit" className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="font-medium">Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
