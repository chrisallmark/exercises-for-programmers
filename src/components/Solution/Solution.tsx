"use client";

import { Button, Divider, Header, Icon, Modal } from "semantic-ui-react";
import { SolutionProps } from "./Solution.types";
import { PropsWithChildren, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { marked, Renderer } from "marked";

const Solution = ({
  category,
  children,
  markdown,
  exercise,
}: PropsWithChildren<SolutionProps>) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const html = useMemo(() => {
    if (!markdown) return "";
    const chapter = pathname?.split("/")[1] ?? "";
    const renderer = new Renderer();
    renderer.image = ({ href, title, text }) => {
      const src = href?.startsWith("http") ? href : `/exercises/${chapter}/${href}`;
      return `<img src="${src}" alt="${text ?? ""}"${title ? ` title="${title}"` : ""} style="max-width:100%">`;
    };
    return marked.parse(markdown, { renderer }) as string;
  }, [markdown, pathname]);

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
              dangerouslySetInnerHTML={{ __html: html }}
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
