import logo from '../assets/logo.png';

function highlight(strings, value) {
  return `${strings[0]}${value}${strings[1]}`;
}

const description = 'artists and art-lovers';
const outputText = highlight`A community of ${description}.`;

export default function Header() {
  return (
    <header className="text-center px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <img
        src={logo}
        alt="A canvas"
        className="w-[120px] h-auto mx-auto rounded-xl transition-transform duration-300 hover:rotate-6 hover:scale-105 md:w-[90px]"
      />

      <h1 className="text-white text-5xl md:text-4xl sm:text-3xl mt-4 mb-2 tracking-[2px] transition-colors duration-300 hover:text-purple-400">
        ReactArt
      </h1>

      <p className="text-gray-300 text-lg md:text-base">
        {outputText}
      </p>
    </header>
  );
}