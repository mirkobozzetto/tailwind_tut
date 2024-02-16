const Colors = () => {
  return (
    <>
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
        </div>

        <p className=" outline outline-blue-100 w-full">
          outline outline-blue-100
        </p>
        <br />
        <p className="shadow-lg bg-cyan-100 shadow-cyan-700 w-full">
          shadow-lg bg-cyan-100 shadow-cyan-700
        </p>
        <br />
        <p className="shadow-lg bg-cyan-100 shadow-cyan-700/60 w-full">
          shadow-lg bg-cyan-100 shadow-cyan-700/60
        </p>
        <br />
        <input type="checkbox" checked className="accent-orange-400" />
        <p>accent-orange-400</p>
        <br />
      </div>
    </>
  );
};
export default Colors;
