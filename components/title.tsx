const titleStyle = "";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-[2.5rem] md:text-[3rem] font-semibold text-center w-full pb-[0.3rem] mt-16">
      {children}
    </h2>
  );
};

export default Title;

{
  /* <div className="relative mx-auto w-max">
<div className="absolute bottom-0 left-0 right-0 mx-auto mt-4 h-[3px] w-[85%] rounded-full bg-gradient-to-r from-primary/90 to-primary/20"></div>
</div> */
}
