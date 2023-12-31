import { useEffect } from "react";
import Page from "../components/Page";

export default function Hero() {
  class TextType {
    constructor(el, duration) {
      this.words = [
        "Hello",
        "ሀሎ",
        "Hola",
        "Bonjour",
        "مرحبًا",
        "你好",
        "Ciao",
        "Salve",
        "Olá",
        "Привет",
        "Sawubona",
      ];
      this.el = document.getElementById("typewrite");
      this.loopNum = 0;
      this.duration = 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    }
  }

  TextType.prototype.tick = function (words, el, isDeleting) {
    var i = this.loopNum % this.words.length;
    var fullTxt = this.words[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.duration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    new TextType();
  });

  return (
    <Page background="bg-primary">
      <div className="my-auto">
        <div className="mb-2 w-fit rounded-full bg-black px-2.5 py-0.5 text-sm text-white md:mb-0 md:text-base">
          <a href="https://www.nohello.com" target="_blank" rel="noreferrer">
            Inspired by ↗
          </a>
        </div>

        <div>
          <h1 className="text-[min(19vw,_8rem)] font-bold leading-tight text-white">
            <span className="mr-4">No</span>
            <span className="animate-blink border-r-2" id="typewrite"></span>
          </h1>

          <p className="text-xl text-white md:text-3xl">
            Don't Say Just "Hello" in Chat.
          </p>

          <p className="my-8 ">Thu Aug 24 2023</p>
        </div>
      </div>

      <div className="mb-12 w-fit animate-bounce text-4xl font-bold text-black">
        <span>↓</span>
      </div>
    </Page>
  );
}
