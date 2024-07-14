import AddWidget from "./components/add-widget/add-widget";
import Gallery from "./components/gallery/gallery";

document.addEventListener("DOMContentLoaded", () => {
  const gallery = new Gallery(".gallery");

  new AddWidget(".add-widget", gallery._renderImage);
});
