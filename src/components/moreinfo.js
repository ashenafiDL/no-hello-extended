export default function MoreInfo() {
  return (
    <div className="flex h-screen w-full snap-start snap-always flex-col justify-center bg-purple-700 px-96 text-justify text-2xl">
      If you feel it's brusque to simply say "Hi" and ask the question, you can
      do something like this:
      <div className="flex flex-col">
        <div className="flex w-fit flex-col self-end rounded-3xl rounded-br-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:32:12</span>
          <span className="text-3xl">
            Hi -- if you're not busy I was wondering if I could ask a question.
            I'm working on [something] and I'm trying to do [etc...]
          </span>
        </div>
        Additionally, asking your question before getting a reply allows
        asynchronous communication. If the other party is away, and you leave
        before they come back, they can still answer your question, instead of
        just staring at a "Hello" and wondering what they missed.
      </div>
    </div>
  );
}
