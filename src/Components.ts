import { BASE_SCOPE, TS_SCOPE } from "./types";

interface ComponentData {
  title: string;
  prefix: string;
  file?: string;
  body?: string; // Body can be manually entered. If so file is ignored when processing.
  description: string;
  scope: string;
}

interface ComponentType {
  [key: string]: ComponentData[];
}

const Components: ComponentType = {
  accordions: [
    {
      title: "Accordion",
      prefix: "ch-accordion",
      file: "../docs/snippets/Accordion/Accordion.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Accordion",
      prefix: "ch-accordionTS",
      file: "../docs/snippets/Accordion/AccordionTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  alerts: [
    {
      title: "Alert",
      prefix: "ch-alert",
      file: "../docs/snippets/Alert/Alert.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Alert TS",
      prefix: "ch-alertTS",
      file: "../docs/snippets/Alert/AlertTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Error Alert",
      prefix: "ch-errorAlert",
      file: "../docs/snippets/Alert/ErrorAlert.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Error Alert TS",
      prefix: "ch-errorAlertTS",
      file: "../docs/snippets/Alert/ErrorAlertTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Info Alert",
      prefix: "ch-infoAlert",
      file: "../docs/snippets/Alert/InfoAlert.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Info Alert TS",
      prefix: "ch-infoAlertTS",
      file: "../docs/snippets/Alert/InfoAlertTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Success Alert",
      prefix: "ch-successAlert",
      file: "../docs/snippets/Alert/SuccessAlert.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Success Alert TS",
      prefix: "ch-successAlertTS",
      file: "../docs/snippets/Alert/SuccessAlertTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Warning Alert",
      prefix: "ch-warningAlert",
      file: "../docs/snippets/Alert/WarningAlert.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "WarningAlert TS",
      prefix: "ch-warningAlertTS",
      file: "../docs/snippets/Alert/WarningAlertTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  avatars: [
    {
      title: "Avatar",
      prefix: "ch-avatar",
      file: "../docs/snippets/Avatar/Avatar.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Avatar TS",
      prefix: "ch-avatarTS",
      file: "../docs/snippets/Avatar/AvatarTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Avatar Clip",
      prefix: "ch-avatarClip",
      file: "../docs/snippets/Avatar/AvatarClip.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Avatar Clip TS",
      prefix: "ch-avatarClipTS",
      file: "../docs/snippets/Avatar/AvatarClipTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Avatar Placeholder",
      prefix: "ch-avatarPlaceholder",
      file: "../docs/snippets/Avatar/AvatarPlaceholder.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Avatar Placeholder TS",
      prefix: "ch-avatarPlaceholderTS",
      file: "../docs/snippets/Avatar/AvatarPlaceholderTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  breadcrumbs: [
    {
      title: "Breadcrumb",
      prefix: "ch-breadcrumb",
      file: "../docs/snippets/Breadcrumb/Breadcrumb.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Breadcrumb TS",
      prefix: "ch-breadcrumbTS",
      file: "../docs/snippets/Breadcrumb/BreadcrumbTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  buttons: [
    {
      title: "Button",
      prefix: "ch-button",
      file: "../docs/snippets/Button/Button.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "ButtonTS",
      prefix: "ch-buttonTS",
      file: "../docs/snippets/Button/ButtonTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Icon Button",
      prefix: "ch-iconButton",
      file: "../docs/snippets/Button/ButtonIcon.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Icon Button TS",
      prefix: "ch-iconButtonTS",
      file: "../docs/snippets/Button/ButtonIconTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Button with Icon",
      prefix: "ch-buttonIcon",
      file: "../docs/snippets/Button/ButtonWithIcon.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Button with Icon TS",
      prefix: "ch-buttonIconTS",
      file: "../docs/snippets/Button/ButtonWithIconTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  dropdowns: [
    {
      title: "Dropdown",
      prefix: "ch-dropdown",
      file: "../docs/snippets/Dropdown/Dropdown.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Dropdown TS",
      prefix: "ch-dropdownTS",
      file: "../docs/snippets/Dropdown/DropdownTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Dropdown with Icon",
      prefix: "ch-dropdownIcon",
      file: "../docs/snippets/Dropdown/DropdownWithIcon.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Dropdown with Icon TS",
      prefix: "ch-dropdownTS",
      file: "../docs/snippets/Dropdown/DropdownWithIconTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  footers: [
    {
      title: "Footer V1",
      prefix: "ch-footerV1",
      file: "../docs/snippets/Footer/v1.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Footer V2",
      prefix: "ch-footerV2",
      file: "../docs/snippets/Footer/v2.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Footer V3",
      prefix: "ch-footerV3",
      file: "../docs/snippets/Footer/v3.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Footer V4",
      prefix: "ch-footerV4",
      file: "../docs/snippets/Footer/v4.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Footer V5",
      prefix: "ch-footerV5",
      file: "../docs/snippets/Footer/v5.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Footer V6",
      prefix: "ch-footerV6",
      file: "../docs/snippets/Footer/v6.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
  ],
  heros: [
    {
      title: "Hero V1",
      prefix: "ch-heroV1",
      file: "../docs/snippets/Hero/v1.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Hero V2",
      prefix: "ch-heroV2",
      file: "../docs/snippets/Hero/v2.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Hero V3",
      prefix: "ch-heroV3",
      file: "../docs/snippets/Hero/v3.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Hero V4",
      prefix: "ch-heroV4",
      file: "../docs/snippets/Hero/v4.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
  ],
  mockups: [
    {
      title: "Code Mockup",
      prefix: "ch-code",
      file: "../docs/snippets/Mockup/Code.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Code Mockup",
      prefix: "ch-codeTS",
      file: "../docs/snippets/Mockup/CodeTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Phone Mockup",
      prefix: "ch-phone",
      file: "../docs/snippets/Mockup/Phone.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Window Mockup",
      prefix: "ch-window",
      file: "../docs/snippets/Mockup/Window.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Window (MAC) Mockup",
      prefix: "ch-windowMac",
      file: "../docs/snippets/Mockup/WindowMac.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
  ],
  modals: [
    {
      title: "Modal",
      prefix: "ch-modal",
      file: "../docs/snippets/Modal/Modal.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Modal TS",
      prefix: "ch-modalTS",
      file: "../docs/snippets/Modal/ModalTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Login Modal",
      prefix: "ch-modalLogin",
      file: "../docs/snippets/Modal/ModalLogin.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Login Modal TS",
      prefix: "ch-windowMac",
      file: "../docs/snippets/Modal/ModalLoginTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  navbars: [
    {
      title: "Navbar V1 (Next.Js)",
      prefix: "ch-navbarV1Next",
      file: "../docs/snippets/Navbar/v1_next.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Navbar V1 (React)",
      prefix: "ch-navbarV1React",
      file: "../docs/snippets/Navbar/v1_react.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Navbar V2 (Next.Js)",
      prefix: "ch-navbarV2Next",
      file: "../docs/snippets/Navbar/v2_next.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Navbar V2 (React)",
      prefix: "ch-navbarV2React",
      file: "../docs/snippets/Navbar/v2_react.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Navbar V3 (Next.Js)",
      prefix: "ch-navbarV3Next",
      file: "../docs/snippets/Navbar/v3_next.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Navbar V3 (React)",
      prefix: "ch-navbarV3React",
      file: "../docs/snippets/Navbar/v3_react.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
  ],
  progress: [
    {
      title: "Progress",
      prefix: "ch-progress",
      file: "../docs/snippets/Progress/Progress.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Progress TS",
      prefix: "ch-progressTS",
      file: "../docs/snippets/Progress/ProgressTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  sidenavs: [
    {
      title: "Sidenav V1 (Next.Js)",
      prefix: "ch-sidenavV1Next",
      file: "../docs/snippets/Sidenav/v1_next.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Sidenav V1 (React)",
      prefix: "ch-sidenavV1React",
      file: "../docs/snippets/Sidenav/v1_react.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
  ],
  spinners: [
    {
      title: "Spinner",
      prefix: "ch-spinner",
      file: "../docs/snippets/Spinner/Spinner.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Spinner TS",
      prefix: "ch-spinnerTS",
      file: "../docs/snippets/Spinner/SpinnerTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  steps: [
    {
      title: "Steps X (Horizontal)",
      prefix: "ch-stepsX",
      file: "../docs/snippets/Steps/StepsX.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Steps X (Horizontal) TS",
      prefix: "ch-stepsXTS",
      file: "../docs/snippets/Steps/StepsXTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Steps Y (Vertical)",
      prefix: "ch-stepsY",
      file: "../docs/snippets/Steps/StepsY.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Steps Y (Vertical) TS",
      prefix: "ch-stepsYTS",
      file: "../docs/snippets/Steps/StepsYTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  tabs: [
    {
      title: "Tabs",
      prefix: "ch-tabs",
      file: "../docs/snippets/Tabs/Tabs.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Tabs TS",
      prefix: "ch-tabsTS",
      file: "../docs/snippets/Tabs/TabsTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
    {
      title: "Tabs Vertical",
      prefix: "ch-tabsVertical",
      file: "../docs/snippets/Tabs/TabsVertical.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Tabs Vertical TS",
      prefix: "ch-tabsVerticalTS",
      file: "../docs/snippets/Tabs/TabsVerticalTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
  tooltips: [
    {
      title: "Tooltip",
      prefix: "ch-tooltip",
      file: "../docs/snippets/Tooltip/Tooltip.jsx",
      body: undefined,
      description: "",
      scope: BASE_SCOPE,
    },
    {
      title: "Tooltip TS",
      prefix: "ch-tooltipTS",
      file: "../docs/snippets/Tooltip/TooltipTS.tsx",
      body: undefined,
      description: "",
      scope: TS_SCOPE,
    },
  ],
};

export { Components };
export { ComponentType };
