on("click", function (event) {
  var t = event.target,
    tagName = t.tagName.toUpperCase(),
    scrollPoint;
  switch (tagName) {
    case "IMG":
    case "SVG":
    case "USE":
    case "U":
    case "STRONG":
    case "EM":
    case "CODE":
    case "S":
    case "MARK":
    case "SPAN":
      while (!!(t = t.parentElement)) if (t.tagName == "A") break;
      if (!t) return;
      break;
    default:
      break;
  }
  if (t.tagName == "A" && t.getAttribute("href").substr(0, 1) == "#") {
    if (
      !!(scrollPoint = $(
        '[data-scroll-id="' + t.hash.substr(1) + '"][data-scroll-invisible="1"]'
      ))
    ) {
      event.preventDefault();
      scrollToElement(scrollPoint);
    } else if (t.hash == window.location.hash) {
      event.preventDefault();
      history.replaceState(undefined, undefined, "#");
      location.replace(t.hash);
    }
  }
});
