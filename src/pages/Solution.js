import MessageBubble from "../components/MessageBubble";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";

export default function Solution() {
  return (
    <Page background={"bg-white dark:bg-black"}>
      <SectionHeader text="Please do this instead" />
      <div className="flex flex-col">
        <MessageBubble
          text="Hi -- I am working on [this...]"
          time="2010-07-19 12:32:12"
          own
        />

        <MessageBubble
          text="[Answers question...]"
          time="2010-07-19 12:32:15"
        />
      </div>
    </Page>
  );
}
