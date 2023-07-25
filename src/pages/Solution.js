import Page from "../components/Page";

export default function Solution() {
  return (
    <Page background={"bg-white dark:bg-black"}>
      <h4 className="text-3xl font-bold">Please do this instead</h4>
      <div className="flex flex-col">
        <div className="flex w-fit flex-col self-end rounded-3xl rounded-br-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:32:12</span>
          <span className="text-3xl">Hi -- I am working on [this...]</span>
        </div>
        <div className="flex w-fit flex-col self-start rounded-3xl rounded-bl-none bg-gray-600 px-4 py-2">
          <span className="text-gray-400">2010-07-19 12:32:15</span>
          <span className="text-3xl">[Answers question...]</span>
        </div>
      </div>
    </Page>
  );
}
