import MessageBubble from "../components/MessageBubble";
import Page from "../components/Page";
import SectionText from "../components/SectionText";

export default function Explanation2() {
  return (
    <Page background={"bg-white dark:bg-black"}>
      <div className="flex flex-col">
        <SectionText
          text={`If you feel it's brusque to simply say "Hi" and ask the question, you can do something like this:`}
        />
        <MessageBubble
          time="2010-07-19 12:32:12"
          text="Hi -- if you're not busy I was wondering if I could ask a question. I'm working on [something] and I'm trying to do [etc...]"
          own
        />
        <SectionText
          text={`Additionally, asking your question before getting a reply allows asynchronous communication. If the other party is away, and you leave before they come back, they can still answer your question, instead of just staring at a "Hello" and wondering what they missed.`}
        />
      </div>
    </Page>
  );
}
