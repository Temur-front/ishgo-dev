import ishgo_logo from "@/public/icons/ishgo-logo.png";
import users from "@/public/icons/sidebar/users.png";
import Icons from "@/public/svg";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="w-[340px] h-full bg-slate-100 p-4 shadow-main rounded-main">
      <Image className="pb-3" src={ishgo_logo} alt="" />
      <ul className="">
        <li className="flex items-center gap-2 bg-active text-white px-3 py-4 rounded-main">
          <Image src={users} alt="" />
          Vacancies
        </li>
        <li className="flex items-center gap-2 px-3 py-4 rounded-main cursor-pointer">
          <Icons.Categories />
          Categories
        </li>
        <li className="flex items-center gap-2 px-3 py-4 rounded-main cursor-pointer">
          <Icons.Building />
          Industries
        </li>
        <li className="flex items-center gap-2 px-3 py-4 rounded-main cursor-pointer">
          <Icons.Building2 />
          Compainies
        </li>
        <li className="flex items-center gap-2 px-3 py-4 rounded-main cursor-pointer">
          <Icons.Love />
          Favorite
        </li>
      </ul>
      <div className="flex gap-2 border-t border-gray-300 py-5 items-center">
        <Icons.Telegram />
        Login with telegram
      </div>
    </div>
  );
};
