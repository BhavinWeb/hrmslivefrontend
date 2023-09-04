import "../globals.css";
import NavBar from "@/components/shared/NavBar";
import RoleModal from "@/components/modal/editrole";
import EditUserModal from "@/components/modal/edituser";
import ManSidebar from "@/components/shared/manSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <RoleModal />
      <EditUserModal />
      <main className="flex flex-row">
        <ManSidebar />
        <div className="w-[100%] max-w-[99rem] m-auto ">
          <div className="pl-[65px] py-[1rem] min-h-screen">{children}</div>
        </div>
      </main>
    </>
  );
}
