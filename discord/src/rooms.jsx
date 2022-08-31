import logo from "./logo.svg"

export default function Rooms() {
  return (
    <div className="flex flex-col text-white bg-red-200 w-full">
      <div className="w-full bg-neutral-500 text-white border-b-2 border-black">
        <div className="flex justify-between p-4 w-1/3 bg-neutral-600">
          <h2>Server Name</h2>
          <p>Arrow</p>
        </div>
      </div>
      <div className="flex bg-neutral-500 w-full h-full">
        <div className="flex flex-col w-1/3">
          <div className="bg-neutral-600 w-full h-full">Rooms</div>
          <div className="bg-neutral-700 w-full flex items-center justify-between p-4">
            <img src={logo} alt="profile" className="w-10"></img>
            <name>Tomáš Kliner</name>
          </div>
        </div>
        <div className="w-1/3">s</div>
        <div className="w-1/3 bg-neutral-600">s</div>
      </div>
    </div>
  );
}
