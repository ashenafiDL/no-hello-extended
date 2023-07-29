import Page from "../components/Page";

export default function Warning() {
  return (
    <Page background={"bg-white dark:bg-black"}>
      <div className="text-[1.2rem] leading-snug">
        Short link to <span className="line-through">this</span> the original
        page:{" "}
        <a className="text-blue-500 underline" href="https://nohello.com">
          https://www.nohello.com/
        </a>
        . (If you see that as someone's status, please be prepared to be ignored
        if you only say "Hello!".)
      </div>
    </Page>
  );
}
