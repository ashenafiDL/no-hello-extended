export default function Page({ background, children }) {
  return (
    <div
      className={`flex h-screen w-full snap-start snap-always flex-col justify-center px-4 md:px-32 lg:px-64 xl:px-96 ${background}`}
    >
      {children}
    </div>
  );
}
