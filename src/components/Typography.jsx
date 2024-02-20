const Typography = () => {
  // dans tailwind.config.js
  //  voici comment on peut définir des polices personnalisées\
  // cela permet de les utiliser dans les classes de tailwind
  // c'est une bonne pratique pour éviter de répéter les polices dans les classes
  // fontFamily: {
  //   sans: ["Inter", "sans-serif"],
  //   serif: ["Merriweather", "serif"],
  //   mono: ["Menlo", "monospace"],
  // },

  return (
    <>
      <div className="flex items-baseline p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg mt-12 w-full mb-10 flex-row">
        <p className="font-sans text-xs mx-auto">Tailwind</p>
        <p className="font-serif text-xl mx-auto">Tailwind</p>
        <p className="font-extrabold text-lg mx-auto">Tailwind</p>
        <p className="font-mono font-light text-sm mx-auto">Tailwind</p>
      </div>
      {/*  */}
      <div className="flex justify-between items-center">
        <p className=" text-left px-14 text-red-600">la vie est belle</p>
        <p className=" text-center px-14 text-blue-600">la vie est belle</p>
        <p className=" text-right px-14 text-green-600">la vie est belle</p>
      </div>
      {/* decorations */}

      <div className="flex justify-between items-center">
        <p className=" text-left px-14 text-red-600 underline">
          la vie est belle
        </p>
        <p className=" text-center px-14 text-blue-600 line-through">
          la vie est belle
        </p>
        <p className=" text-right px-14 text-green-600 underline decoration-double">
          la vie est belle
        </p>
      </div>
    </>
  );
};
export default Typography;
