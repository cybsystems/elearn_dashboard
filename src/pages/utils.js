import { showToast } from "../helpers/toasts";

export const getCardItems = async () => {
  try {
    window.scrollTo(0, 0);
    const cardItems = {
      Students: { icon: "fa fa-graduation-cap", color: "#01c0ef" },
      Videos: { icon: "fa fa-video-camera", color: "#dd4c3a" },
      Requests: {
        icon: "fa fa-paper-plane ",
        color: "#f39c13",
      },
    };
    cardItems["PDF Notes"] = {
      icon: "fa fa-sticky-note-o",
      color: "#01a65b",
    };
    const cardResponse = await fetch("http://localhost/getDashboardInfo.php")
      .then(res => res.json())
      .then(res => res);
    const cards = cardResponse.res;
    const cardsForDashBoard = cards.map(cardItem => {
      const newCardItem = { ...cardItem, ...cardItems[cardItem.title] };
      return newCardItem;
    });
    return cardsForDashBoard;
  } catch (err) {
    showToast("Something went wrong !", { type: "error" });
  }
};
