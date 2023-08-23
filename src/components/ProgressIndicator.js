export default function ProgressIndicator({ progress }) {
  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="fixed left-0 top-0 h-[5px] w-full">
      <div
        className={`h-full rounded-br-md rounded-tr-md bg-primary shadow-md`}
        style={progressBarStyle}
      ></div>
    </div>
  );
}
