export default function MessageBubble({ time, text, own }) {
  return (
    // <section class="container w-fit p-4">
    <div class={`my-4 w-fit max-w-xl ${own ? "self-end" : "self-start"}`}>
      {/* Message content */}
      <div
        class={`flex flex-col gap-1 rounded-2xl  p-4 text-lg font-medium text-white ${
          own ? "rounded-br-none bg-primary" : "rounded-bl-none bg-black"
        }`}
      >
        <p>{text}</p>
        <span className={`${own ? "text-gray-700" : "text-gray-400"}`}>
          {time}
        </span>
      </div>
    </div>
  );
}
