"use client";

import { Button, Divider, Header, Icon, Modal } from "semantic-ui-react";
import { SolutionProps } from "./Solution.types";
import { PropsWithChildren, useState } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";

const Solution = ({
  category,
  children,
  markdown,
  exercise,
}: PropsWithChildren<SolutionProps>) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        {category}
        <Header.Subheader>
          {exercise}
          {markdown && (
            <Icon
              name="info circle"
              style={{
                marginLeft: "0.5em",
                cursor: "pointer",
                color: "#2185d0",
              }}
              onClick={() => setOpen(true)}
            />
          )}
        </Header.Subheader>
      </Header>
      <Divider />
      {children}
      <Divider />
      <Button color="blue" onClick={() => router.back()}>
        <Icon name="angle left" /> Go Back
      </Button>

      {markdown && (
        <Modal open={open} onClose={() => setOpen(false)} size="small">
          <Modal.Content scrolling>
            <div
              style={{ lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{
                __html: marked.parse(markdown) as string,
              }}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
};

export default Solution;
