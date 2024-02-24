
import '../animation.css'
import useOnScreen from "../hooks/useOnScreen";

const AnimatedElement = ({ imageUrl, text }: { imageUrl: string, text: string }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={setRef}
      className={`techstack-container group p-4 bg-white shadow-lg rounded-3xl flex items-center justifty-center sm:min-w-48  ${visible ? "appear" : "disappear"}`}
    >
      <div className="tooltip flex items-center">
        <img className="techstack-icon w-12 group-hover:animate-spin " src={imageUrl} alt={text} />
        <span className="tooltiptext text-md ml-4 hidden sm:block">{text}</span>
      </div>
    </div>
  );
};

export default AnimatedElement;