const messageLoader = document.getElementById("messageLoader");
const clock = document.getElementById("clock");
const chatMain = document.getElementById("chatMain");
const userMessage = document.getElementById("userMessage");
const messageFirst = document.getElementById("messageMain");
const message = document.querySelectorAll("#message");
const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const agreeButton = document.getElementById("agreeButton");
const footer = document.getElementById("footer");

const show_messageLoader = () => {
  messageLoader.classList.add("show");
};
const remove_messageLoader = () => {
  messageLoader.classList.remove("show");
};

// Page Mounting

const mounted = new Promise((resolve) => {
  resolve(document.getElementById("pageLoading").classList.add("show"));
})
  .then(() => {
    setTimeout(() => {
      document.getElementById("pageLoading").classList.remove("show"),
        document.getElementById("chat").classList.add("show");
    }, 1500);
  })
  .then(() => {
    setTimeout(() => {
      startButton.classList.add("activeStartBtn");
    }, 1600);
  });

//Start

startButton.addEventListener("click", () => {
  new Promise((resolve) => {
    resolve(
      messageFirst.classList.add("remove"),
      footer.classList.add("remove"),
      clock.classList.add("invisible"),
      chatMain.classList.add("invisible")
    );
  })
    .then(() => {
      setTimeout(() => {
        chatMain.classList.remove("invisible");
      }, 1500);
    })
    .then(() => {
      for (let i = 0; i < 3; i++) {
        (function (index) {
          setTimeout(() => {
            show_messageLoader(), this.message[index].classList.add("show");
          }, 1500 * (index + 1));
          // "Да"
          setTimeout(() => {
            agreeButton.classList.add("show"),
              messageLoader.classList.remove("show");
          }, 1500 * 3);
        })(i);
      }
    });
});

// Agree

agreeButton.addEventListener("click", () => {
  new Promise((resolve) => {
    resolve(
      userMessage.classList.add("show_userMessage"),
      agreeButton.classList.remove("show"),
      show_messageLoader()
    );
  }).then(() => {
    for (let i = 2; i < 6; i++) {
      (function (index) {
        setTimeout(() => {
          this.message[index].classList.add("show");
        }, 1200 * (index + 1));
        setTimeout(() => {
          this.message[6].classList.add("show"),
            remove_messageLoader(),
            clock.classList.remove("invisible");
        }, 1700 * 6);
      })(i);
    }
  });
});

//Clock

const clockFunction = () => {
  let date = new Date();
  (h = date.getHours()), (m = date.getMinutes());
  h = h < 10 ? "0" + h : h;
  (m = m < 10 ? "0" + m : m),
    (document.getElementById("clock").innerHTML = h + ":" + m);
};

clockFunction();
