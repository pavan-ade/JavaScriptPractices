"use strict";

const giftBoxes = document.querySelectorAll(".giftBox");
const lucklyBtn = document.querySelector(".lucklyBtn");
const popup = document.getElementById("popupCard");
const popupImg = popupCard.querySelector("img");
const popupText = popupCard.querySelector("p");

let hoverTimeOut;
function handleMouseEnter(e) {
  cardPopUp(e.currentTarget, e);
}
giftBoxes.forEach((box, index) => {
  box.addEventListener("mouseenter", handleMouseEnter);
  box.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeOut);
    popupCard.classList.add("hidden");
  });
  if (
    box.hasAttribute("data-uid") &&
    box.getAttribute("data-uid").trim !== ""
  ) {
    localStorage.setItem("isLotturyOver", false);
  } else {
    localStorage.setItem("isLotturyOver", true);
  }
});

giftBoxes.forEach((box) => {
  lucklyBtn.addEventListener("click", () => {
    maskElement(box, "mask", "img", "add");
    maskElement(box, "mask", "p", "add");
    popup.style.display = "none";
    box.removeEventListener("mouseenter", handleMouseEnter);
  });
});

function cardPopUp(Element, eventTarget = null) {
  let cardRendering = eventTarget === null ? 100 : 1000;
  const img = Element.querySelector("img");
  const label = Element.querySelector("p");
  hoverTimeOut = setTimeout(() => {
    popupImg.src = img.src;
    popupImg.alt = img.alt;
    popupText.textContent = label.textContent;

    popupCard.classList.remove("hidden");
    if (eventTarget !== null) {
      let left = eventTarget.pageX + 15;
      let top = eventTarget.pageY + 15;

      const popupRect = popup.getBoundingClientRect();
      const rightBoundary = window.pageXOffset + window.innerWidth;
      const bottomBoundary = window.pageYOffset + window.innerHeight;

      if (left + popupRect.width > rightBoundary) {
        left = eventTarget.pageX - popupRect.width - 15;
      }
      if (top + popupRect.height > bottomBoundary) {
        top = eventTarget.pageY - popupRect.height - 15;
      }

      if (left < window.pageXOffset + 5) {
        left = window.pageXOffset + 5;
      }
      if (top < window.pageYOffset + 5) {
        top = window.pageYOffset + 5;
      }

      popup.style.left = left + "px";
      popup.style.top = top + "px";
    }
  }, cardRendering);
}

lucklyBtn.addEventListener("click", () => {
  selectWinner();
});

function selectWinner() {
  let value = Math.round(Math.random() * 50);
  const uidKey = `lottery_uid_${value}`;
  console.log(`Value : ${value}, uidKey : ${uidKey}`);
  let storedUid = localStorage.getItem(uidKey);
  pickLottoryWinnerAsync(uidKey, storedUid);
}

function lotteryTicketNum() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

async function highlightRandomGiftboxes(rounds = 10, interval = 200) {
  for (let i = 0; i < rounds; i++) {
    const randomIndex = Math.floor(Math.random() * (giftBoxes.length - 1));
    const box = giftBoxes[randomIndex];
    box.classList.add("round-highlight");

    maskElement(box, "mask", "img", "remove");
    maskElement(box, "mask", "p", "remove");
    await sleep(interval);
    maskElement(box, "mask", "img", "add");
    maskElement(box, "mask", "p", "add");
    box.classList.remove("round-highlight");
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function pickLottoryWinnerAsync(uidKey, storedUid) {
  await highlightRandomGiftboxes(10, 400);

  const winnerElement = document.querySelector(`[data-uid="${storedUid}"]`);

  if (!winnerElement) return;

  maskElement(winnerElement, "mask", "img", "remove");
  maskElement(winnerElement, "mask", "p", "remove");
  cardPopUp(winnerElement);
  popupImg.src = "";
  popupImg.alt = "";
  popupText.textContent = "";
  popup.style.display = "block";

  await sleep(5000);

  winnerElement.classList.add("hidden");
  popup.style.display = "none";
  winnerElement.setAttribute("data-uid", null);
  console.log("uidkey : ",uidKey, "Uidkey Value ", localStorage.getItem(uidKey));
  // Optionally clear localStorage key
  localStorage.setItem(uidKey, null);
  console.log("uidkey : ",uidKey, "Uidkey Value ", localStorage.getItem(uidKey));

}

function maskElement(ParentElement, className, childElement, action) {
  const img = ParentElement.querySelector(childElement);
  img.classList[action](className);
}

giftBoxes.forEach((box, index) => {
  const uidKey = `lottery_uid_${index}`;
  let storedUid = localStorage.getItem(uidKey);
  console.log("UidKey",uidKey,"StoredUid",storedUid);
  if (storedUid !== null && storedUid === "") {
    let storedUid = lotteryTicketNum();
    localStorage.setItem(uidKey, storedUid);
  }
  box.setAttribute("data-uid", storedUid);
});
