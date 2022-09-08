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
        <div className="m-auto w-11/12 rounded-xl bg-neutral-600 mb-4 flex justify-between items-center">
            <div className="bg-neutral-200 hover:bg-neutral-100 text-neutral-600 font-bold rounded-full aspect-square w-8 flex items-center justify-center text-xl ml-2 cursor-pointer">+</div>
            <input type="test" className="bg-transparent outline-none w-full p-3" placeholder="Message # Chat-Room "  />
        </div>
      </div>
    </div>
  );
}
