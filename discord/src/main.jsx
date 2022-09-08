import logo from "./logo.svg";
import Rooms from "./rooms";
import Chat from "./chat";
import Users from "./users";

export default function Main() {
  return (
    <div className="flex flex-col text-white bg-red-200 w-full">
      <div className="w-full bg-neutral-500 text-white border-b-2 border-neutral-800 shadow flex">
        <div className="flex justify-between p-4 w-[20rem] bg-neutral-600">
          <h2 className="font-bold">Server Name</h2>
          <p className=" font-black rotate-90" > > </p>
        </div>
        <div className="w-2/3 flex justify-between items-center">
          <div className="flex ml-4 items-center">
            <span className="text-4xl text-neutral-300 font-light">#</span>
            <h2 className="font-bold ml-2">Chat-Room</h2>
            <span className="text-xl font-thin mx-2">|</span>
            <p className="text-sm">random popisek roomky</p>
          </div>
          <div className="flex">icons, search and more...</div>
        </div>
      </div>
      <div className="flex bg-neutral-500 w-full h-full">
        <div className="flex flex-col w-[20rem]">
          <div className="bg-neutral-600 w-[20rem] h-full">
            <Rooms />
          </div>
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
            <div className="flex">
              <svg
                className="hover:bg-neutral-500 p-2 rounded-sm cursor-pointer w-8 fill-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z" />
              </svg>
              <svg
                className="hover:bg-neutral-500 p-2 rounded-sm cursor-pointer w-8 fill-white"
                enable-background="new 0 0 30.51 30.51"
                version="1.1"
                viewBox="0 0 30.51 30.51"
              >
                <path d="m30.51 18.256c0-0.77-0.586-1.39-1.318-1.429l2e-3 -0.039c0.016-0.231 0.033-0.469 0.033-0.707 0-4.501-1.516-8.364-4.373-11.184-2.717-2.674-5.508-4.143-9.596-4.143-4.084 0-6.875 1.469-9.592 4.144-2.859 2.816-4.375 6.682-4.375 11.184 0 0.173 0.012 0.348 0.018 0.522l6e-3 0.224c-0.731 0.043-1.315 0.658-1.315 1.428v9.586c0 0.799 0.619 1.449 1.387 1.449h0.473c0.271 0.296 0.645 0.466 1.039 0.466h1.414c0.805 0 1.463-0.68 1.463-1.521v-10.37c0-0.842-0.658-1.522-1.463-1.522h-0.952c0.088-7.165 4.371-13.514 12.188-13.514 6.998 0 11.494 6.325 11.602 13.513h-0.951c-0.805 0-1.461 0.681-1.461 1.522v10.37c0 0.841 0.656 1.521 1.461 1.521h1.416c0.393 0 0.762-0.166 1.029-0.466h0.48c0.766 0 1.385-0.65 1.385-1.449v-9.585z" />
              </svg>

              <svg
                x="0px"
                y="0px"
                className="hover:bg-neutral-500 p-2 rounded-sm cursor-pointer w-8 fill-white"
                viewBox="0 0 489.802 489.802"
              >
                <path
                  d="M20.701,281.901l32.1,0.2c4.8,24.7,14.3,48.7,28.7,70.5l-22.8,22.6c-8.2,8.1-8.2,21.2-0.2,29.4l24.6,24.9
		c8.1,8.2,21.2,8.2,29.4,0.2l22.8-22.6c21.6,14.6,45.5,24.5,70.2,29.5l-0.2,32.1c-0.1,11.5,9.2,20.8,20.7,20.9l35,0.2
		c11.5,0.1,20.8-9.2,20.9-20.7l0.2-32.1c24.7-4.8,48.7-14.3,70.5-28.7l22.6,22.8c8.1,8.2,21.2,8.2,29.4,0.2l24.9-24.6
		c8.2-8.1,8.2-21.2,0.2-29.4l-22.6-22.8c14.6-21.6,24.5-45.5,29.5-70.2l32.1,0.2c11.5,0.1,20.8-9.2,20.9-20.7l0.2-35
		c0.1-11.5-9.2-20.8-20.7-20.9l-32.1-0.2c-4.8-24.7-14.3-48.7-28.7-70.5l22.8-22.6c8.2-8.1,8.2-21.2,0.2-29.4l-24.6-24.9
		c-8.1-8.2-21.2-8.2-29.4-0.2l-22.8,22.6c-21.6-14.6-45.5-24.5-70.2-29.5l0.2-32.1c0.1-11.5-9.2-20.8-20.7-20.9l-35-0.2
		c-11.5-0.1-20.8,9.2-20.9,20.7l-0.3,32.1c-24.8,4.8-48.8,14.3-70.5,28.7l-22.6-22.8c-8.1-8.2-21.2-8.2-29.4-0.2l-24.8,24.6
		c-8.2,8.1-8.2,21.2-0.2,29.4l22.6,22.8c-14.6,21.6-24.5,45.5-29.5,70.2l-32.1-0.2c-11.5-0.1-20.8,9.2-20.9,20.7l-0.2,35
		C-0.099,272.401,9.201,281.801,20.701,281.901z M179.301,178.601c36.6-36.2,95.5-35.9,131.7,0.7s35.9,95.5-0.7,131.7
		s-95.5,35.9-131.7-0.7S142.701,214.801,179.301,178.601z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full"><Chat /></div>
        <div className="min-w-[20rem] bg-neutral-600"><Users /></div>
      </div>
    </div>
  );
}
