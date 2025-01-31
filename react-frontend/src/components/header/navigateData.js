export const NavbarData = [
  {
    id: 1,
    name: "Home",
    dataIndex: "Home",
    link: "home",
    URL: "",
    customStyle: "",
    // childMenu: [],
    subMenu: false,
  },
  {
    id: 2,
    name: "Product",
    dataIndex: "Product",
    link: "Product",
    URL: "",
    customStyle: "",
    subMenu: true,
    childMenu: [
      {
        id: 1,
        name: "Analytics",
        dataIndex: "Analytics",
        link: "Analytics",
        title: "Get a better understanding of your traffic",
        URL: "#",
        customStyle: "",
        titleLogo: (
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        ),
      },
      {
        id: 2,
        name: "Engagement",
        dataIndex: "Engagement",
        link: "Engagement",
        title: "Speak directly to your customers",
        URL: "#",
        customStyle: "",
        titleLogo: (
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
            />
          </svg>
        ),
      },
      {
        id: 3,
        name: "Security",
        dataIndex: "Security",
        link: "Security",
        title: " Your customers’ data will be safe and secure",
        URL: "#",
        customStyle: "",
        titleLogo: (
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
            />
          </svg>
        ),
      },
      // {
      //     id: 1,
      //     name: "Analytics",
      //     dataIndex: "Analytics",
      //     link: "Analytics",
      //     title: "Get a better understanding of your traffic",
      //     URL: "#",
      //     customStyle: "",
      //     titleLogo: (""),
      // },
    ],
  },
  {
    id: 3,
    name: "FAQ",
    dataIndex: "faq",
    link: "faq",
    URL: "#",
    customStyle: "",
    subMenu: false,
    // childMenu: [],
  },
  {
    id: 4,
    name: "Features",
    dataIndex: "Features",
    link: "features",
    URL: "#",
    customStyle: "",
    subMenu: false,
    // childMenu: [],
  },
  {
    id: 5,
    name: "Marketplace",
    dataIndex: "Marketplace",
    link: "marketplace",
    URL: "#",
    customStyle: "",
    subMenu: false,
    // childMenu: [],
  },
];

export const MobileNavbarData = [
  {
    id: 1,
    name: "Home",
    dataIndex: "Home",
    link: "home",
    URL: "",
    customStyle: "",
    // childMenu: [],
    subMenu: false,
  },
  {
    id: 3,
    name: "Product",
    dataIndex: "Product",
    link: "Product",
    URL: "",
    customStyle: "",
    subMenu: true,
    childMenu: [
      {
        id: 1,
        name: "Analytics",
        dataIndex: "Analytics",
        link: "Analytics",
        title: "Get a better understanding of your traffic",
        URL: "#",
        customStyle: "",
      },
      {
        id: 2,
        name: "Engagement",
        dataIndex: "Engagement",
        link: "Engagement",
        title: "Speak directly to your customers",
        URL: "#",
        customStyle: "",
      },
      {
        id: 3,
        name: "Security",
        dataIndex: "Security",
        link: "Security",
        title: " Your customers’ data will be safe and secure",
        URL: "#",
        customStyle: "",
      },
      // {
      //     id: 1,
      //     name: "Analytics",
      //     dataIndex: "Analytics",
      //     link: "Analytics",
      //     title: "Get a better understanding of your traffic",
      //     URL: "#",
      //     customStyle: "",
      //     titleLogo: (""),
      // },
    ],
  },
  {
    id: 4,
    name: "FAQ",
    dataIndex: "faq",
    link: "faq",
    URL: "#",
    customStyle: "",
    subMenu: false,
    // childMenu: [],
  },
  {
    id: 5,
    name: "Features",
    dataIndex: "Features",
    link: "features",
    URL: "#",
    customStyle: "",
    subMenu: false,
    // childMenu: [],
  },
  {
    id: 6,
    name: "Marketplace",
    dataIndex: "Marketplace",
    link: "marketplace",
    URL: "#",
    customStyle: "",
    subMenu: false,
    // childMenu: [],
  },
];
