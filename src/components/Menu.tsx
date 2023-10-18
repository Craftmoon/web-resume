import { LinkButton } from "./LinkButton";
import { useTranslation } from "react-i18next";

export const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <LinkButton
        label={t("menu.profile")}
        onClick={() => {
          console.log("scroll to profile");
        }}
        className="ml-8"
      />
      <LinkButton
        label={t("menu.skills")}
        onClick={() => {
          console.log("scroll to Skills");
        }}
        className="ml-8"
      />
      <LinkButton
        label={t("menu.experience")}
        onClick={() => {
          console.log("scroll to Experience");
        }}
        className="ml-8"
      />
      <LinkButton
        label={t("menu.education")}
        onClick={() => {
          console.log("scroll to Education");
        }}
        className="ml-8"
      />
      <LinkButton
        label={t("menu.contact")}
        onClick={() => {
          console.log("scroll to Contact");
        }}
        className="ml-8"
      />
    </div>
  );
};
