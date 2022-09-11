import ButtonTS from "@snippets/Button/ButtonTS";
import ModalLoginTS from "@snippets/Modal/ModalLoginTS";
import React, { useState } from "react";

import Layout from "../../components/Layout";

export default function loginModal() {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <h1 className="pb-4 text-2xl font-semibold">Modal Login</h1>
        <p className="pb-4">Creates an easy to use login modal component.</p>
        <p className="pb-4">
          Once imported it can be modified the way you want.
        </p>
        <p className="pb-4">Just add your custom logic.</p>
        <h2 className="pb-4 text-xl font-medium">Prefixes</h2>
        <ul>
          <li>ch-modalLogin</li>
          <li>ch-modalLoginTS</li>
        </ul>
        <h2 className="py-4 text-xl font-medium">Props</h2>
        <p>Modal Login takes the following props:</p>
        <ul>
          <li>open: boolean</li>
          <li>toggle: {`Dispatch<SetStateAction<boolean>>`}</li>
        </ul>
        <br />
        Example: An example of the usage is provided in the snippet.
        <h2 className="py-4 text-xl font-medium">Preview</h2>
        <ButtonTS onClick={() => setOpen(true)}>Login</ButtonTS>
      </div>
      <ModalLoginTS open={open} toggle={setOpen} />
    </Layout>
  );
}
