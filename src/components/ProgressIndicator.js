import { useState , useEffect} from "react";

export default function ProgressIndicator() {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    setWidth(percent)
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    console.log("width", width);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  return (
    <div
      className={`fixed -left-[1px] w-[${width}%] rounded-md top-0 h-2 bg-black`}
    ></div>
  );
}
