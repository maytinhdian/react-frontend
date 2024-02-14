import { Outlet } from "react-router-dom";

function GuestLayout() {
  return (
    <>
      <div className="text-white">
        <h1 className="w-full text-3xl font-bold text-[#0a1018] text-center"></h1>
      </div>
      <Outlet/>
    </>
  );
}

export default GuestLayout;
