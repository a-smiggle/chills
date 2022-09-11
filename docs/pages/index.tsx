import AvatarClipTS from "@snippets/Avatar/AvatarClipTS";
import AvatarPlaceholderTS from "@snippets/Avatar/AvatarPlaceholderTS";
import AvatarTS from "@snippets/Avatar/AvatarTS";
import ButtonIconTS from "@snippets/Button/ButtonIconTS";
import ButtonTS from "@snippets/Button/ButtonTS";
import ButtonWithIconTS from "@snippets/Button/ButtonWithIconTS";
import DropdownTS from "@snippets/Dropdown/DropdownTS";
import DropdownWithIconTS from "@snippets/Dropdown/DropdownWithIconTS";
import ModalLoginTS from "@snippets/Modal/ModalLoginTS";
import ModalTS from "@snippets/Modal/ModalTS";
import ProgressTS from "@snippets/Progress/ProgressTS";
import SpinnerTS from "@snippets/Spinner/SpinnerTS";
import StepsX from "@snippets/Steps/StepsXTS";
import StepsY from "@snippets/Steps/StepsYTS";
import TooltipTS from "@snippets/Tooltip/TooltipTS";
import Link from "next/link";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";

import Layout from "../components/Layout";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modal, setModal] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loginModal, setLoginModal] = useState(false);
  return (
    <Layout>
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center p-4">
        <div className="pb-20">
          <h1 className="text-4xl font-bold">Chills</h1>
          <p className="pt-4 text-lg font-medium">
            When there is a cold tailwind and you react to it you get the
            chills.
          </p>
          <p className="pt-4 text-lg font-medium">
            Chills is a VS-Code snippet extension that provides functional React
            components, styled with TailwindCSS. Each components is ready to be
            fully customized.
          </p>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-bounce"
        >
          <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
        </svg>
      </div>
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col p-4">
        <h1 className="pb-4 text-3xl font-bold">Components</h1>
        <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-4">
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="my-auto flex flex-wrap justify-between gap-2">
              <ButtonTS>Add</ButtonTS>

              <ButtonIconTS>
                <GrAdd />
              </ButtonIconTS>

              <ButtonWithIconTS>
                <GrAdd /> Add
              </ButtonWithIconTS>
            </div>
            <h1 className="text-center">Buttons</h1>
          </div>
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="my-auto flex justify-between">
              <ButtonTS type="button" onClick={() => setModal(true)}>
                Modal
              </ButtonTS>
              <ButtonTS onClick={() => setLoginModal(true)}>Login</ButtonTS>
            </div>
            <h1 className="text-center">Modals</h1>
          </div>
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="flex flex-col items-center gap-4">
              <div className="relative z-20">
                <DropdownTS
                  title="Dropdown"
                  data={[
                    {
                      title: "Item 1",
                      link: "/",
                    },
                    {
                      title: "Item 2",
                      link: "/",
                    },
                  ]}
                />
              </div>

              <div>
                <DropdownWithIconTS
                  title="With Icons"
                  data={[
                    {
                      title: "Item 1",
                      link: "/",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                      ),
                    },
                    {
                      title: "Item 2",
                      link: "/",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            <h1 className="text-center">Dropdowns</h1>
          </div>
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <ProgressTS progress={10} />
            <ProgressTS progress={10} showPercent />
            <ProgressTS progress={10} showPercent title="Loading" />
            <h1 className="text-center">Progress</h1>
          </div>
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="my-auto flex flex-wrap justify-between gap-2">
              <SpinnerTS />
              <SpinnerTS closed />
              <SpinnerTS dashed />
            </div>
            <h1 className="text-center">Spinners</h1>
          </div>
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="my-auto flex flex-wrap justify-between gap-2">
              <AvatarClipTS
                variant="triangle"
                image="https://api.lorem.space/image/face?w=150&h=150"
              />
              <AvatarPlaceholderTS placeholder="AS" />
              <AvatarTS image="https://api.lorem.space/image/face?w=150&h=150" />
            </div>
            <h1 className="text-center">Avatars</h1>
          </div>
          <div className="flex h-full min-h-[12rem] w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="my-auto">
              <StepsX
                steps={[
                  { title: "Start", completed: true },
                  { title: "Working", completed: false },
                  { title: "End", completed: false },
                ]}
              />
            </div>
            <h1 className="text-center">Steps</h1>
          </div>
          <div className="row-span-2 flex h-full w-full flex-col justify-center rounded border-2 border-white p-4 transition-all hover:scale-110">
            <div className="flex h-full justify-center">
              <StepsY
                steps={[
                  { title: "Start", completed: true },
                  { title: "Working", completed: false },
                  { title: "End", completed: false },
                ]}
              />
            </div>
            <h1 className="text-center">Steps</h1>
          </div>
          <Link href="/snippets/tooltips">
            <div className="flex h-full w-full flex-col justify-between rounded border-2 border-white p-4 transition-all hover:scale-110">
              <div className="flex flex-wrap justify-between gap-2">
                <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
                  Top
                  <TooltipTS>Yay you hovered over me.</TooltipTS>
                </div>
                <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
                  Bottom
                  <TooltipTS position="bottom">
                    Yay you hovered over me.
                  </TooltipTS>
                </div>
                <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
                  Left
                  <TooltipTS position="left">
                    Yay you hovered over me.
                  </TooltipTS>
                </div>
                <div className="group relative inline-block w-fit rounded bg-red-500 p-2 text-white">
                  Right
                  <TooltipTS position="right">
                    Yay you hovered over me.
                  </TooltipTS>
                </div>
              </div>

              <h1 className="pt-4 text-center">Tooltips</h1>
            </div>
          </Link>

          <Link href="/snippets">
            <div className="col-span-2 flex h-full w-full flex-col justify-center rounded border-2 border-white p-4 transition-all hover:scale-y-110 hover:cursor-pointer">
              <h1 className="text-center text-3xl font-bold">More ....</h1>
            </div>
          </Link>
        </div>
      </div>
      <ModalTS open={modal} toggle={setModal} />
      <ModalLoginTS open={loginModal} toggle={setLoginModal} />
    </Layout>
  );
}
