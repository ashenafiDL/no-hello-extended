export default function Page({ background, children }) {
  return (
    //   TODO - find a way to enable snap feature
    <div
      className={`flex h-screen w-full ${background} flex-col justify-center px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96`}
    >
      {children}
    </div>
  );
}
