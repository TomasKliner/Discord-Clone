import logo from "./logo.svg";

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

        <section className="">

        <div className="flex hover:bg-neutral-600 p-1 rounded-md m-2">
          <img src={logo} alt="profile" className="w-12 h-12 cursor-pointer mx-2"></img>
          <div className="ml-2">
            <h4 className="text-cyan-400 font-bold text-md cursor-pointer flex items-end">
              <figure>Tomáš Kliner</figure>
              <date className="text-gray-300 text-sm font-normal ml-2">Today v 19:13</date>
            </h4>
            <p className="text-sm">Lorem ipsum dolor sit amets, consectetuer adipiscing elit. Nullam justo enim,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Curabitur bibendum justo non orci</p>
          </div>
        </div>

        </section>


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
  