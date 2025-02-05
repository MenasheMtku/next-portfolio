import Social from "../Social";

const Footer = () => {
  const year = new Date().getFullYear();
  const name = "Menashe Mtku";
  const footerTitle = `${year} - All Rights Reserved To ${name}`;

  return (
    <footer className="h-28 w-full bg-foreground p-4 text-center text-background">
      <div className="flex md:flex-col h-full items-center justify-center">
        <p className="text-lg">
          &copy; {footerTitle}
        </p>
        <div className="md:block hidden max-w-max mx-auto">
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
