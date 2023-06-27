import Button from "@/components/button/button";

const NoPaymentMethods = () => {
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-xl lg:text-2xl font-medium text-black pb-5">
        Saved payment methods
      </h3>
      <p className="text-base lg:text-lg text-black pb-9 max-w-full lg:max-w-[55%]">
        You currently do not have any saved payment method. Add your payment
        details and enjoy hassle-free transactions.
      </p>
    </div>
  );
};

export default NoPaymentMethods;
