

export default function Rooms(){
    return(
    <div className="flex flex-col justify-start">
        <div className="flex items-center bg-neutral-400 px-2 rounded mt-1 mx-4 pointer py-1"><div className="mr-2 font-light">#</div>Chat-Room</div>
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light">#</div>Chat-Room2</div>
        
        <div className="flex items-center hover:bg-neutral-400 px-2 rounded mt-1 mx-4 cursor-pointer py-1"><div className="mr-2 font-light">🔊</div>Talk</div>
         </div>
    );
}