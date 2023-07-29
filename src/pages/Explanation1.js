import Page from "../components/Page";
import SectionText from "../components/SectionText";

export default function Explanation1() {
  return (
    <Page background="bg-white dark:bg-black">
      <SectionText
        text={` Note that you get help minutes sooner, and you don't make them wait. Instead the coworker can start thinking about your question right away.`}
      />
      <SectionText
        text={`You're trying to be polite by not jumping right into the request, like you would on person or on the phone. But chat is neither of those things. Typing is much slower than talking. Instead of being polite, you are just making the other person wait for you to phrase your question, which is lost productivity.`}
      />
      <SectionText
        text={`The same goes for "Hello -- are you there?", "hi bob - quick question", "do you have a sec?", "yt?", and "ping". Just ask the question`}
      />
    </Page>
  );
}
