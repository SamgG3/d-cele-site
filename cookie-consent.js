(() => {
  const NOTICE_KEY = "dc_cookie_notice_ack_v2";
  const notice = document.querySelector(".cookie-notice");
  if (!notice) return;

  const accepted = localStorage.getItem(NOTICE_KEY) === "1";
  if (accepted) {
    notice.classList.add("cookie-hidden");
    return;
  }

  const acceptButton = notice.querySelector(".cookie-accept");
  if (!acceptButton) return;

  acceptButton.addEventListener("click", () => {
    localStorage.setItem(NOTICE_KEY, "1");
    notice.classList.add("cookie-hidden");
  });
})();
