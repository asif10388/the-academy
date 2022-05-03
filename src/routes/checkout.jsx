import CheckoutItems from "../comps/CheckoutItems";
import CheckoutDetails from "../comps/CheckoutDetails";
import Coupon from "../comps/Coupon";

const Checkout = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-8 bg-white shadow-lg md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <CheckoutItems />
          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 md:flex">
            <Coupon />
            <CheckoutDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
