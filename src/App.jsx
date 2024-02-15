function App() {
  return (
    <>
      <div className="flex items-center justify-center text-6xl w-[50vw] h-20 bg-slate-900 mx-auto rounded-full mt-6">
        <h1 className="text-white align-middle">Tailwind Tut with React!</h1>
      </div>

      {/* 02 Working with colors */}
      <div className="flex flex-col items-baseline p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg mt-12 w-full">
        <h2 className="mb-12 text-3xl">Colors</h2>
        <p className=" bg-yellow-300 w-full">bg-yellow-300</p>
        <p className=" underline decoration-orange-600 w-full">
          underline decoration-orange-600
        </p>
        <input
          type="text"
          className="border border-emerald-400 w-full"
          defaultValue="border border-emerald-400"
        />
        <div className=" divide-y divide-orange-500 w-full">
          <p>divide-y divide-orange-500 1</p>
          <p>divide-y divide-orange-500 2</p>
          <p>divide-y divide-orange-500 3</p>
          <p>divide-y divide-orange-500 4</p>
          <p>divide-y divide-orange-500 5</p>
        </div>
      </div>
    </>
  );
  // <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
  //   <svg
  //     className="w-12 h-12 text-red-600"
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="28"
  //     height="32"
  //     viewBox="0 0 448 512"
  //   >
  //     <path
  //       fill="currentColor"
  //       d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416h400c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6c-28.3-35.5-43.8-79.6-43.8-125V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32m0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3c25.8-40 39.7-86.7 39.7-134.6V208c0-61.9 50.1-112 112-112m64 352H160c0 17 6.7 33.3 18.7 45.3S207 512 224 512s33.3-6.7 45.3-18.7S288 465 288 448"
  //     />
  //   </svg>
  //   <div className="">
  //     <h1 className=" text-xl text-black font-medium">Are you sure ?</h1>
  //     <p className=" text-slate-500 ">You are about to delete a post</p>
  //   </div>
  // </div>
}

export default App;
