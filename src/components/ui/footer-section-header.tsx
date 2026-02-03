interface FooterSectionHeaderProps {
  children: React.ReactNode;
}

export const FooterSectionHeader = ({ children }: FooterSectionHeaderProps) => {
  return <h4 className="footer-section-header">{children}</h4>;
};
