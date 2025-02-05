

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold text-center w-full pb-[0.3rem] mt-16">
      {children}
    </h2>
  );
};

export default Title;


