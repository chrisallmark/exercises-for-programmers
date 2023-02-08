import { Header, Divider, Button, Icon } from "semantic-ui-react";
import { SolutionProps } from "./Solution.types";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

const Solution = ({
  category,
  children,
  exercise,
}: PropsWithChildren<SolutionProps>) => {
  const router = useRouter();
  return (
    <>
      <Header>{category}</Header>
      <Header.Subheader>{exercise}</Header.Subheader>
      <Divider />
      {children}
      <Divider />
      <Button color="blue" onClick={() => router.back()}>
        <Icon name="angle left" /> Go Back
      </Button>
    </>
  );
};

export default Solution;
