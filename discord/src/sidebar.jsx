

export default function Sidebar(){
    return(
        <div className="h-screen w-16 p-2 bg-neutral-800 flex flex-col shadow">

            <div className="relative mb-4">
            <img className="relative shadow rounded-full bg-neutral-700 p-2 hover:bg-indigo-600 hover:rounded-2xl" src="./icons8-discord-new-150.png" alt="logo"></img>
            <span className="border-neutral-800 bg-red-500 text-center text-white border-4
            rounded-full w-contain absolute -bottom-[4px] -right-[4px] p-[0.2rem] text-[0.5rem] font-bold px-1.5">10</span>
            </div>
            <hr className="border-neutral-600 mb-4"></hr>


            <img className="shadow rounded-full mb-4 hover:rounded-2xl" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="logo"></img>

            <img className="shadow rounded-full mb-4 hover:rounded-2xl" src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="logo"></img>



            <svg className="mb-4 shadow fill-green-400 rounded-full w-auto aspect-square bg-neutral-700 p-2 hover:fill-white hover:bg-green-500 hover:rounded-2xl" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
            <svg className="mb-4 shadow fill-green-400 rounded-full w-auto aspect-square bg-neutral-700 p-2 hover:fill-white hover:bg-green-500 hover:rounded-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>19.Compass</title><g id="_19.Compass" data-name="19.Compass"><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"/><path d="M7.591,16.41,9.8,9.8l6.614-2.2-2.2,6.615Zm3.786-5.034-.624,1.871,1.87-.623.624-1.871Z"/></g></svg>
        
        </div>
    )
}