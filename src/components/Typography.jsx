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
        <p className="font-mono text-sm mx-auto">Tailwind</p>
      </div>
    </>
  );
};
export default Typography;
