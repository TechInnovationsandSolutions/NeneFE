const Footer = () => {
  return (
    <footer className="bg-black  text-white px-[8%]  lg:px-[3%] flex flex-col gap-5  pt-5 pb-2 ">
      <div>
        {" "}
        <p className="text-center text-3xl font-alegreya "> Nene</p>{" "}
      </div>
      <div className="flex flex-col md:grid font-sans md:grid-cols-4 sm:grid sm:grid-cols-2 text-left justify-between lg:justify-items-center gap-y-8  md:w-full">
        <ul className="flex flex-col flex-wrap  w-fit gap-2 ">
          <li className={pStyle}>ABOUT US</li>
          <li>
            <a href="#" className={aStyle}>
              {" "}
              About Nene
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              Corporate Responsibility{" "}
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              Become an Affiliate{" "}
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              {" "}
              Careers
            </a>
          </li>
        </ul>

        <ul className="flex flex-col w-fit gap-2">
          <li className={pStyle}> QUICK LINKS</li>
          <li>
            <a href="#" className={aStyle}>
              {" "}
              Glamour & Luxury
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              New Products{" "}
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              Brands{" "}
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              {" "}
              Fashion & Style
            </a>
          </li>
        </ul>
        <ul className="flex flex-col w-fit gap-2">
          <li className={pStyle}>SHOPPING</li>
          <li>
            <a href="#" className={aStyle}>
              {" "}
              Track Your Order
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              Delivery & Returns{" "}
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              Help{" "}
            </a>
          </li>
        </ul>
        <ul className="flex flex-col w-fit gap-2">
          <li className={pStyle}>FEATURED</li>
          <li>
            <a href="#" className={aStyle}>
              {" "}
              Featured Icons
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              New In{" "}
            </a>
          </li>
          <li>
            <a href="#" className={aStyle}>
              Top Picks this week
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col  items-center gap-5 md:flex-row justify-center py-5 ">
        <p>Get informed when new products come in</p>
        <div className="flex w-full md:w-auto ">
          <input
            className="w-full py-2 px-4  text-black bg-[#F8F8F8] rounded-l-md border-r-2"
            type="email"
            placeholder="Your Email Address"
            id=""
          />
          <button className="cursor-pointer py-2 px-4 rounded-r-md bg-[#F8F8F8]">
            {" "}
            <img src="/assets/svgs/sendBtn.svg" alt="send-Email" />
          </button>
        </div>
      </div>

      <hr className="bg opacity-50  w-[88.5%] m-auto " />

      <div className="md:grid grid-cols-3 w-[94.5%] ml-auto flex flex-col gap-2 items-center lg:text-sm">
        <section className="">
          <a href="" className=" hover:text-blue-500 ">
            Acessibility{" "}
          </a>{" "}
          |
          <a href="" className=" hover:text-blue-500 ">
            {" "}
            Terms and Conditions
          </a>{" "}
          |
          <a href="" className=" hover:text-blue-500 ">
            {" "}
            Privacy and Cookies
          </a>
        </section>
        <section className="flex  justify-center">
          <span className="opacity-[.7]">© 2020 Nene. All Rights Reserved</span>
        </section>
        <section className="flex gap-4 justify-center items-center">
          <span className="">FOLLOW US</span>
          <div className="flex gap-3 ">
            <a href="">
              {" "}
              <img src="/assets/svgs/fb.svg" alt="" />
            </a>
            <a href="">
              {" "}
              <img src="/assets/svgs/insta.svg" alt="" />
            </a>
            <a href="">
              {" "}
              <img src="/assets/svgs/twt.svg" alt="" />
            </a>
            <a href="">
              {" "}
              <img src="/assets/svgs/linkdin.svg" alt="" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const pStyle = `text-lg font-[700] mb-4 text-[#F7F7F7] leading-[22px]`;
const aStyle = ` hover:text-blue-500`;
