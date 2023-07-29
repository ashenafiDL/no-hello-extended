import MessageBubble from "../components/MessageBubble";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import SectionText from "../components/SectionText";

export default function Problem() {
  return (
    <Page background="bg-white dark:bg-black">
      <SectionHeader text="Please Don't Say Just Hello In Chat" />
      <div className="flex flex-col">
        <MessageBubble time="2010-07-19 12:32:12" text="Hi" own />
        <MessageBubble time="2010-07-19 12:32:15" text="Hello." />

        <SectionText text={`Co-worker waits while you phrase your question`} />

        <MessageBubble
          time="2010-07-19 12:34:01"
          text="I am working on [something...]"
          own
        />
        <MessageBubble
          time="2010-07-19 12:35:21"
          text="Oh thats [answer]...."
        />
      </div>

      <SectionText
        text={`It's as if you called someone on the phone and said "Hi!" and then put them on hold!`}
      />
    </Page>
  );
}
