import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const FooterLink = ({ href, children, external = false }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="footer-link footer-link-styled"
    >
      {children}
    </Link>
  );
};
