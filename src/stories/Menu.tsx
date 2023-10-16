import { LinkButton } from "./LinkButton";

export const Menu = () => {
  return (
    <div>
      <LinkButton
        label="Profile"
        onClick={() => {
          console.log("scroll to profile");
        }}
        className="ml-8"
      />
      <LinkButton
        label="Skills"
        onClick={() => {
          console.log("scroll to Skills");
        }}
        className="ml-8"
      />
      <LinkButton
        label="Experience"
        onClick={() => {
          console.log("scroll to Experience");
        }}
        className="ml-8"
      />
      <LinkButton
        label="Education"
        onClick={() => {
          console.log("scroll to Education");
        }}
        className="ml-8"
      />
      <LinkButton
        label="Contact"
        onClick={() => {
          console.log("scroll to Contact");
        }}
        className="mx-8"
      />
    </div>
  );
};
