import Page from "../components/Page";

export default function Problem() {
  return (
    <Page>
      <h4 className="text-3xl">Please Don't Say Just Hello In Chat</h4>
      <div className="flex flex-col">
        <div className="flex w-fit flex-col self-end rounded-3xl rounded-br-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:32:12</span>
          <span className="text-3xl">Hi</span>
        </div>
        <div className="flex w-fit flex-col self-start rounded-3xl rounded-bl-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:32:15</span>
          <span className="text-3xl">Hello.</span>
        </div>
        <div className="self-center">
          Co-worker waits while you phrase your question{" "}
        </div>
        <div className="flex w-fit flex-col self-end rounded-3xl rounded-br-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:34:01</span>
          <span className="text-3xl">I am working on [something...]</span>
        </div>
        <div className="flex w-fit flex-col self-start rounded-3xl rounded-bl-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:35:21</span>
          <span className="text-3xl">Oh thats [answer]....</span>
        </div>
      </div>
      <p>
        It's as if you called someone on the phone and said "Hi!" and then put
        them on hold!
      </p>
    </Page>
  );
}
