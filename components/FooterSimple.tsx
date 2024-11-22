const Footer = () => {
  return (
    <footer className="bg-ppal">
      <div className="padding-container flex flex-col pt-6 xs:pt-16 pb-1">
        <p className="text-color-p w-full text-center ">
          &copy; 2024 TecniCo | Todos los derechos reservados | Developed by
          <a className="hover:underline underline-offset-4 decoration-verde-10 decoration-4">
            {"  <Lucas /> "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
