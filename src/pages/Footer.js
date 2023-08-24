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
      text: "Email",
      url: "mailto:ashenafi.debella101@gmail.com",
    },
  ];

  return (
    <div className="flex h-1/6 w-full snap-end snap-always flex-col items-center justify-center bg-primary px-4 text-lg text-white md:flex-row md:justify-between md:px-32 lg:px-64 xl:px-96">
      <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-0">
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
      <div className="my-2 text-sm md:my-0 md:text-lg">
        Made with ♥️ by{" "}
        <a href="https://github.com/ashenafidl" className="underline">
          ashenafiDL
        </a>
        .
      </div>
    </div>
  );
}
