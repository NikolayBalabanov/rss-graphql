import Logo from "../assets/rs_school.svg";

function Footer() {
  return (
    <div className=" py-4 bg-BGcolor1 md:px-9 px-2 rounded-t-lg">
      <div className="flex justify-between flex-wrap">
        <a className="hover:scale-110 duration-500" href="https://rs.school/js/"><img className="md:w-5/6 w-4/6" src={Logo} alt="RSSchool" /></a>
        <ul className="flex md:gap-1 gap-1">
          <li className="flex items-center text-textColor"><a className="hover:text-textColorHover duration-500 md:text-base text-xs" href="https://github.com/viktorykings">Viktoryia Karalenia</a></li>
          <li className="flex items-center text-textColor">|</li>
          <li className="flex items-center text-textColor"><a className="hover:text-textColorHover duration-500 md:text-base text-xs" href="https://github.com/NikolayBalabanov">Nikolay Balabanov</a></li>
          <li className="flex items-center text-textColor">|</li>
          <li className="flex items-center text-textColor"><a className="hover:text-textColorHover duration-500 md:text-base text-xs" href="https://github.com/VEKozlov111">Vladislav Kozlov</a></li>
        </ul>
        <div className="flex items-center">
          <h3 className="md:text-base text-x text-textColor">
            ©2023
            <span className="md:inline hidden text-textColor">RS School. All rights reserved.</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;