import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export const CTAButton = ({ href, children, external = false }: CTAButtonProps) => {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="cta-button btn-primary"
    >
      {children}
      <span style={{ marginLeft: "1rem" }}></span>
    </Link>
  );
};
