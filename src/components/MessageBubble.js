export default function MessageBubble({ time, text, own }) {
  return (
    <div
      className={`w-fit max-w-[75%] rounded-2xl bg-primary my-2 px-4 py-2 ${
        own
          ? "self-end rounded-br-none bg-opacity-95"
          : "rounded-bl-none bg-opacity-75"
      }`}
    >
      <div className="text-[1.2rem] leading-tight">{text}</div>
      <div
        className={`text-sm text-black text-opacity-95 ${
          own ? "text-right" : ""
        }`}
      >
        {time}
      </div>
    </div>
  );
}
