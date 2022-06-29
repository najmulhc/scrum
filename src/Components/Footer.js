import Dribbble from "./Icons/Dribbble";
import Facebook from "./Icons/Facebook";
import Figma from "./Icons/Figma";
import Mail from "./Icons/Mail";
import Mail2 from "./Icons/Mail2";
import Phone from "./Icons/Phone";
import WhatsApp from "./Icons/WhatsApp";
import Youtube from "./Icons/Youtube";
const Footer = () => {
  const downItems = [
    "About us",
    "Jobs",
    "Blog",
    "Press",
    "FAQ",
    "Career",
    "Contact",
    "Privacy policy",
    "Sitemap",
    "Terms of use",
  ];
  const icons = [
    <Facebook />,
    <Youtube />,
    <Dribbble />,
    <Figma />,
    <WhatsApp />,
  ];
  return (
    <footer className="text-white bg-[#27282B]  ">
      {/* footer inner container  */}
      <div className="container mx-auto grid grid-cols-2">
        <div className=" border-r border-white border-opacity-30 p-16 ">
          <h1 className="text-4xl font-bold mb-8">Logo</h1>
          <p className="text-thin leading-6 opacity-70">
            This is where you can write something about your brand. You may want
            to add your motto or mission over here.
          </p>
          <div className="grid grid-cols-2 mt-8">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl p-4 rounded-full bg-white bg-opacity-10 inline-block">
                <Phone />
              </h1>
              <div>
                <h3 className="text-thin leading-6 opacity-70">
                  Have a question?
                </h3>
                <h2 className="text-2xl font-semibold">310-437-2766</h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl p-4 rounded-full bg-white bg-opacity-10 inline-block">
                <Mail />
              </h1>
              <div>
                <h3 className="text-thin leading-6 opacity-70">
                  Contact us at
                </h3>
                <h2 className="text-2xl font-semibold">unreal@outlook.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="p-16 ">
          <h1 className="text-4xl font-bold mb-8">Newsletter</h1>
          <p className="text-thin leading-6 opacity-70">
            Be the first one to know about discounts, offers and event weekly in
            your mailbox. You can unsubscribe whenever you like with one click.
          </p>
          <form
            action=""
            className="flex w-full bg-white p-2 rounded-full bg-opacity-20 mt-12"
          >
            <h5 className="my-auto text-md ml-4">
              <Mail2 />
            </h5>
            <input
              type="email"
              className="text-lg text-white bg-white bg-opacity-0 w-full p-2 opacity-100"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-cyan-700 text-white   text-lg px-4 py-2 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="border border-opacity-30 border-white" />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-10">
          {downItems.map((item) => (
            <p className="text-thin leading-6 opacity-70">{item}</p>
          ))}
        </div>
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex gap-4 my-4 mt-12">
            {icons.map((icon) => (
              <h2 className="text-3xl p-4 rounded-full bg-white bg-opacity-10 ">
                {icon}
              </h2>
            ))}
          </div>
          <h3 className="opacity-70 font-thin text-right mr-16 mt-20">
            Ⓒ 2000-2022,All Rights Reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
