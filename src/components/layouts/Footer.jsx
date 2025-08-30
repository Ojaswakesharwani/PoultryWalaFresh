import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-900 text-white py-8 relative">
      {/* Yellow top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("footer_contact_us")}</h3>
          <p className="font-medium">{t("footer_registered_office")}</p>
          <p>{t("footer_company_name")}</p>
          <p>{t("footer_address")}</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("footer_get_in_touch")}</h3>
          <p>📞 {t("footer_phone")}: <a href="tel:+919834512510" className="hover:underline">+91-9834512510</a></p>
          <p>📧 {t("footer_email")}: <a href="mailto:support@ninjafarm.in" className="hover:underline">support@ninjafarm.in</a></p>
          <p>🌐 {t("footer_website")}: <a href="https://www.poultrywala.in" target="_blank" rel="noopener noreferrer" className="hover:underline">www.poultrywala.in</a></p>
        </div>

        {/* Enquiry Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("footer_enquiry_section")}</h3>
          <p>{t("footer_traders_contract")}</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 border-t border-green-950 pt-4 text-center text-sm">
        <p>{t("footer_rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
