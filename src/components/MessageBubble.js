export default function MessageBubble({ time, text, own }) {
  return (
    <div class={`my-1 sm:my-4 w-fit max-w-xl ${own ? "self-end" : "self-start"}`}>
      <div
        class={`flex flex-col gap-1 rounded-2xl  p-4 text-lg font-medium text-white ${
          own ? "rounded-br-none bg-primary" : "rounded-bl-none bg-black dark:bg-gray-800 dark:text-gray-300"
        }`}
      >
        <p className="text-[2vh] leading-5 sm:leading-normal">{text}</p>
        <span className={`text-sm sm:text-lg ${own ? "text-gray-700" : "text-gray-400"}`}>
          {time}
        </span>
      </div>
    </div>
  );
}
