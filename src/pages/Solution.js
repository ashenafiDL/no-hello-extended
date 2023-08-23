import MessageBubble from "../components/MessageBubble";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";

export default function Solution() {
  return (
    <Page background={"bg-white dark:bg-black"}>
      <SectionHeader text="Please do this instead" />
      <div className="flex flex-col">
        <MessageBubble
          text="Hi -- I am working on an algorithm to compute factorials, but I've heard there are ways to optimize it. Any suggestions?"
          time="2010-07-19 12:32:12"
          own
        />

        <MessageBubble
          text="Absolutely! When calculating factorials, you can optimize by using memoization or dynamic programming. This means storing previously computed factorials in an array or a dictionary, so you don't need to recalculate them every time. Additionally, you can explore Stirling's approximation for large factorials, which provides an efficient approximation formula."
          time="2010-07-19 12:32:15"
        />
      </div>
    </Page>
  );
}
