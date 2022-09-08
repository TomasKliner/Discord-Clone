export default function Chat() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" overflow-y-auto overflow-x-hidden">
        {/* Chat messages section*/}
        <div className="flex w-full items-center p-4">
          <span className="bg-neutral-400 h-[1px] w-full"></span>
          <p className="text-sm mx-4 whitespace-nowrap">5. srpna</p>
          <span className="bg-neutral-400 h-[1px] w-full"></span>
        </div>
      </div>

      <div className="w-full">
        {/* Input section*/}
        <div className="m-auto w-11/12 rounded bg-neutral-700 mb-4">
            <input type="test" className="bg-transparent outline-none w-full p-3" placeholder="Message # Chat-Room "  />
        </div>
      </div>
    </div>
  );
}
