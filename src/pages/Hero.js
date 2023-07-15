import Page from "../components/Page";

export default function Hero() {
  return (
    <Page background="bg-primary">
      <div className="ml-2 w-fit rounded-xl bg-black px-2 py-0.5 text-white">
        Inspired by ↗
      </div>

      <div>
        <h1 className="text-9xl font-bold text-white">No Hello</h1>
        <p className="pl-2 text-3xl text-white">
          Don't Say Just "Hello" in Chat.
        </p>
        <p className="my-8 ml-2">{`${new Date().toDateString()}`}</p>
      </div>

      <p className="absolute bottom-8 bottom-8 mx-auto text-3xl">↓</p>
    </Page>
  );
}
