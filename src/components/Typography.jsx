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
      <div className="flex flex-col items-baseline p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg mt-12 w-full mb-10">
        <p className="font-sans">salut</p>
        <p className="font-serif">salut</p>
        <p className="font-extrabold">salut</p>
        <p className="font-mono">salut</p>
      </div>
    </>
  );
};
export default Typography;
