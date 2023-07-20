export default function Page({ background, children }) {
  return (
    <div
      className={`flex h-screen w-full snap-start snap-always flex-col justify-center px-4 md:px-16 lg:px-32 xl:px-64 ${background}`}
    >
      {children}
    </div>
  );
}
