import logo from "./logo.svg";

export default function Rooms() {
  return (
    <div className="flex flex-col text-white bg-red-200 w-full">
      <div className="w-full bg-neutral-500 text-white border-b-2 border-neutral-800 shadow flex">
        <div className="flex justify-between p-4 w-1/3 bg-neutral-600">
          <h2 className="font-bold">Server Name</h2>
          <p className=" font-black rotate-90"> > </p>
        </div>
        <div className="w-2/3 flex justify-between items-center">
          <div className="flex ml-4 items-center">
            <span className="text-4xl">#</span>
            <h2 className="font-bold ml-2">Chat-Room</h2>
            <span className="text-xl font-thin mx-2">|</span>
            <p className="text-sm">random popisek roomky</p>
          </div>
          <div className="flex">
            icons, search and more...
          </div>
        </div>
      </div>
      <div className="flex bg-neutral-500 w-full h-full">
        <div className="flex flex-col w-1/3">
          <div className="bg-neutral-600 w-full h-full">Rooms</div>
          <div className="bg-neutral-700 w-full flex items-center justify-between p-2">
            <div className="flex hover:bg-neutral-500 p-1 rounded-md">
              <img
                src={logo}
                alt="profile"
                className="w-10 cursor-pointer"
              ></img>
              <div className="ml-2">
                <h4 className="font-bold text-sm cursor-pointer">
                  Tomáš Kliner
                </h4>
                <p className="text-sm">#Status </p>
              </div>
            </div>
            <p className="hover:bg-neutral-500 p-1 rounded-sm cursor-pointer">
              Mic
            </p>
            <p className="hover:bg-neutral-500 p-1 rounded-sm cursor-pointer">
              Head
            </p>
            <p className="hover:bg-neutral-500 p-1 rounded-sm cursor-pointer">
              Set
            </p>
          </div>
        </div>
        <div className="w-1/3">Chat</div>
        <div className="w-1/3 bg-neutral-600">Names</div>
      </div>
    </div>
  );
}
