import { createContext, useReducer } from "react";

import { user } from "./USER_DATA";

export const userContext = createContext({
  user: {},
  updateUserInfo: () => {},
  updatePaymentPlan: () => {},
  updateAddons: () => {},
  updateRate: () => {},
  navigateNext: () => {},
  navigatePrev: () => {},
});

function userReducer(state, action) {
  if (action.type === "ADD_INFO") {
    return {
      ...state,
      info: action.payload,
    };
  }
  if (action.type === "NEXT") {
    const page = state.pageNumber + 1;
    return {
      ...state,
      pageNumber: page,
    };
  }
  if (action.type === "PREV") {
    if (action.payload) {
      const page = action.payload;
      return {
        ...state,
        pageNumber: page,
      };
    } else {
      const page = state.pageNumber - 1;
      return {
        ...state,
        pageNumber: page,
      };
    }
  }
  if (action.type === "PAYMENT_PLAN") {
    const inactivePlans = state.paymentPlans.map((plan) => {
      return { ...plan, status: false };
    });
    const selectedPlanIndex = inactivePlans.findIndex(
      (plan) => plan.id === action.payload
    );
    inactivePlans[selectedPlanIndex].status = true;
    return {
      ...state,
      paymentPlans: [...inactivePlans],
    };
  }
  if (action.type === "ADDON") {
    const addonList = [...state.addons];
    const selectedAddonIndex = addonList.findIndex(
      (addon) => addon.id === action.payload
    );

    addonList[selectedAddonIndex].status =
      !addonList[selectedAddonIndex].status;
    return {
      ...state,
      addons: [...addonList],
    };
  }

  if (action.type === "RATE") {
    const newRate = !state.rate;
    return {
      ...state,
      rate: newRate,
    };
  }

  return state;
}

export default function UserContextProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, user);

  function handleNavigateNext() {
    userDispatch({
      type: "NEXT",
    });
  }
  function handleNavigatePrev(page) {
    if (page) {
      userDispatch({
        type: "PREV",
        payload: page,
      });
    } else {
      userDispatch({
        type: "PREV",
      });
    }
  }

  function handleUserUpdate(DATA) {
    userDispatch({
      type: "ADD_INFO",
      payload: DATA,
    });
  }

  function handlePaymentUpdate(id) {
    userDispatch({
      type: "PAYMENT_PLAN",
      payload: id,
    });
  }

  function handleAddonUpdate(id) {
    userDispatch({
      type: "ADDON",
      payload: id,
    });
  }

  function handleToggleRate() {
    userDispatch({
      type: "RATE",
    });
  }

  const ctxValue = {
    user: userState,
    updateUserInfo: handleUserUpdate,
    updatePaymentPlan: handlePaymentUpdate,
    updateAddons: handleAddonUpdate,
    updateRate: handleToggleRate,
    navigateNext: handleNavigateNext,
    navigatePrev: handleNavigatePrev,
  };

  return (
    <userContext.Provider value={ctxValue}>{children}</userContext.Provider>
  );
}
