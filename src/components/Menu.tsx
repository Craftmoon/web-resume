import { LinkButton } from "./LinkButton";
import { useTranslation } from "react-i18next";
import menuIcon from "../assets/menu-icon.svg";
import { LanguageSelector } from "./LanguageSelector";
import { langs } from "../i18n";
import { useState } from "react";
import closeIcon from "../assets/close-icon.svg";
import clsx from "clsx";

interface MenuProps {
  languageSelector?: boolean;
}

export const Menu = ({ languageSelector }: MenuProps) => {
  const { t } = useTranslation();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleExpandMobileMenu = () => {
    setIsMenuExpanded(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMenuExpanded(false);
  };

  //  When you have what's going inside the onClick for the likbuttons below,
  //  think about refactoring their render into a map
  return (
    <>
      <div className="flex hidden items-center md:block">
        <div className="mr-20">
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
        <div>
          {languageSelector && (
            <div className=" flex justify-end">
              <LanguageSelector langs={langs} />
            </div>
          )}
        </div>
      </div>
      <div onClick={handleExpandMobileMenu} className="pb-[10px] md:hidden">
        <img
          className="h-6 w-6 cursor-pointer"
          src={menuIcon}
          alt="Menu icon"
          onClick={handleExpandMobileMenu}
        />
      </div>
      <div
        className={clsx(
          "absolute right-0 top-0 h-screen w-screen transform bg-blue-600 transition-transform duration-300",
          {
            "translate-y-0": isMenuExpanded,
            "-translate-y-full": !isMenuExpanded,
          },
        )}
      >
        <div className="m-6 flex cursor-pointer justify-end">
          <img
            src={closeIcon}
            alt="Close icon"
            className="h-5 w-5 "
            onClick={handleCloseMobileMenu}
          />
        </div>
        <div className="flex flex-col items-center text-white">
          <LinkButton
            label={t("menu.profile")}
            onClick={() => {
              console.log("scroll to profile");
              handleCloseMobileMenu();
            }}
            className="mb-8 text-white hover:text-white"
          />
          <LinkButton
            label={t("menu.skills")}
            onClick={() => {
              console.log("scroll to Skills");
              handleCloseMobileMenu();
            }}
            className="mb-8 text-white hover:text-white"
          />
          <LinkButton
            label={t("menu.experience")}
            onClick={() => {
              console.log("scroll to Experience");
              handleCloseMobileMenu();
            }}
            className="mb-8 text-white hover:text-white"
          />
          <LinkButton
            label={t("menu.education")}
            onClick={() => {
              console.log("scroll to Education");
              handleCloseMobileMenu();
            }}
            className="mb-8 text-white hover:text-white"
          />
          <LinkButton
            label={t("menu.contact")}
            onClick={() => {
              console.log("scroll to Contact");
              handleCloseMobileMenu();
            }}
            className="mb-8 text-white hover:text-white"
          />
        </div>
      </div>
    </>
  );
};
