export default function Footer() {
  const footerLinks = [
    {
      text: "GitHub",
      url: "https://github.com/ashenafidl",
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/ashenafidl",
    },
    {
      text: "email: ashenafi.debella101@gmail.com",
      url: "email://ashenafi.debella101@gmail.com",
    },
  ];

  return (
    <div className="flex h-1/6 w-full snap-end snap-always items-center justify-between bg-primary px-4 text-lg text-white md:px-32 lg:px-64 xl:px-96">
      <div className="flex flex-col">
        {footerLinks.map((link) => {
          return (
            <span key={link.text}>
              ↗{" "}
              <a className="duration-200 hover:underline " href={link.url}>
                {link.text}
              </a>
            </span>
          );
        })}
      </div>
      <div>
        Made with ♥️ by{" "}
        <a href="https://github.com/ashenafidl" className="underline">
          ashenafiDL
        </a>
        .
      </div>
    </div>
  );
}
