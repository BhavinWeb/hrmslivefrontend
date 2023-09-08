import Image from "next/image";
import MainNavBar from "./MainNavBar";
import { cookies } from "next/headers";

const NavBar = () => {
  const cookie = cookies().get("jwt_token")?.value;
  const role = cookies().get("role")?.value;

  

  return (
    <div>
      <div className="flex h-16 items-center px-4 gap-16">
        <Image src={'/logo.svg'} alt="logo" width={145} height={34} />
        <MainNavBar cookies={cookie || ""} role={role || ""} />
      </div>
    </div>
  );
};

export default NavBar;
