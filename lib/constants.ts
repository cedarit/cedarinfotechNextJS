export const COMPANY = {
  name: "Cedar Information Technology",
  shortName: "Cedar Infotech",
  tagline: "Transform Legacy Systems into AI-Driven Platforms — Without Replacing Your Team",
  email: "contact@cedarinfotech.com",
  location: "Hyderabad, India",
  domain: "cedarinfotech.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Transformation Model", href: "#transformation" },
  { label: "Industries", href: "#industries" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  pankajLinkedIn: "https://linkedin.com/in/ADD_PANKAJ_LINKEDIN",
  roshniLinkedIn: "https://linkedin.com/in/ADD_ROSHNI_LINKEDIN",
  companyLinkedIn: "https://linkedin.com/company/ADD_COMPANY_LINKEDIN",
  pankajInstagram: "https://instagram.com/ADD_PANKAJ_INSTAGRAM",
  roshniInstagram: "https://instagram.com/ADD_ROSHNI_INSTAGRAM",
  companyInstagram: "https://instagram.com/ADD_COMPANY_INSTAGRAM",
};

export const CONTACT_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "/api/contact";
