const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-secondary text-center">
      <p className="text-secondary-foreground/60 text-sm">
        © {currentYear} João Lima Lampanche. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
