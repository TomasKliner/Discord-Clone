import logo from "./logo.svg";

export default function Users() {
  return (
    <div className="flex flex-col justify-start bg-neutral-700">
      <div className="my-2">
        <div className="mx-2 flex items-center text-xs relative hover:text-white">
          Admin - 1
        </div>

        <div className="flex hover:bg-neutral-500 p-1 rounded-md m-2">
          <img src={logo} alt="profile" className="w-10 cursor-pointer"></img>
          <div className="ml-2">
            <h4 className="text-cyan-400 font-bold text-sm cursor-pointer">
              Tomáš Kliner
            </h4>
            <p className="text-sm">#Status </p>
          </div>
        </div>

        <div className="mx-2 flex items-center text-xs relative hover:text-white ">
          Offline - 1
        </div>
        <div className="flex hover:bg-neutral-500 p-1 rounded-md m-2  filter brightness-[0.5] hover:brightness-[1]">
          <img src={logo} alt="profile" className="w-10 cursor-pointer"></img>
          <div className="ml-2">
            <h4 className="font-bold text-sm cursor-pointer">Tomáš Kliner 2</h4>
            <p className="text-sm">#Status :)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
