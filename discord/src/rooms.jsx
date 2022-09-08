

export default function Rooms(){
    return(
    <div className="flex flex-col justify-start">
        <div className="flex items-center bg-neutral-400 px-2 rounded mt-1 mx-4 pointer py-1"><div className="mr-2 font-light">#</div>Chat-Room</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light">#</div>Chat-Room2</div>
        <div className="my-2">
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk1</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk2</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk3</div>
         </div>

         <div className="my-2">
             <div className="flex items-center text-sm relative hover:text-white"><div className="rotate-180 mx-2">^</div>Games<div className="absolute right-4 text-xl text-neutral-400 font-medium top-0">+</div></div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1">
          <div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk1</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk2</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk3</div>
        </div>

        <div className="my-2">
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk1</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk2</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light"><img src="./Speaker_Icon.svg.png" alt="speak" className="w-5 filter brightness-[10]"/></div>Talk3</div>
         
         </div></div>
    );
}