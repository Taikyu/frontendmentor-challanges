import arcadeSVG from "../assets/images/icon-arcade.svg";
import advancedSVG from "../assets/images/icon-advanced.svg";
import proSVG from "../assets/images/icon-pro.svg";

export const user = {
  pageNumber: 1,
  rate: true,
  info: {
    name: "",
    email: "",
    phone: "",
  },
  paymentPlans: [
    {
      id: "Arcade",
      img: arcadeSVG,
      amount: 9,
      status: true,
    },
    {
      id: "Advanced",
      img: advancedSVG,
      amount: 12,
      status: false,
    },
    {
      id: "Pro",
      img: proSVG,
      amount: 15,
      status: false,
    },
  ],
  addons: [
    {
      id: "Online service",
      description: "Access to multiplayer games",
      amount: 1,
      status: true,
    },
    {
      id: "Larger storage",
      description: "Extra 1TB of storage",
      amount: 2,
      status: false,
    },
    {
      id: "Customizable profile",
      description: "Custom theme on your profile",
      amount: 2,
      status: false,
    },
  ],
};
