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
          text="I'm working on a programming assignment and need to calculate factorials. Could you explain how to calculate them efficiently?"
          own
        />
        <MessageBubble
          time="2010-07-19 12:35:21"
          text="Of course! Calculating factorials involves multiplying a number by all positive integers less than itself. To do this programmatically, you can use a loop, starting from 1 and multiplying each number up to your desired value. Alternatively, you can use recursion, where the factorial of n is n times the factorial of n-1, with a base case of factorial(0) being 1."
        />
      </div>

      <SectionText
        text={`It's as if you called someone on the phone and said "Hi!" and then put them on hold!`}
      />
    </Page>
  );
}
