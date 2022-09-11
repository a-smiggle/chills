import ButtonTS from "@snippets/Button/ButtonTS";
import ModalTS from "@snippets/Modal/ModalTS";
import React, { useState } from "react";

import Layout from "../../components/Layout";

export default function modal() {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Modal</h1>
        <p className="pb-4">Creates an easy to use modal component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-modal</li>
          <li>ch-modalTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Modal takes the following props:</p>
        <ul>
          <li>open: boolean</li>
          <li>toggle: {`Dispatch<SetStateAction<boolean>>`}</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <ButtonTS onClick={() => setOpen(true)}>Open</ButtonTS>
      </div>
      <ModalTS open={open} toggle={setOpen} />
    </Layout>
  );
}
