const panel = document.getElementById("contentPanel");
const content = document.getElementById("content");
const toast = document.getElementById("toast");
let toastTimer;

const views = {
  letter: `
    <h2>Your Love Letter 💌</h2>
    <div class="letter-paper">
      <p class="letter-greeting">My Baby,</p>
      <p>Happy Monthsary, love! 💗 Thank you for being part of my life and for filling my days with little moments that mean so much to me.</p>
      <p>I love the way you make me smile, the comfort I feel with you, and the memories we keep making together. Even when life gets difficult, I hope we continue to understand each other, support each other, and choose each other every day.</p>
      <p>You are so special to me, Baby. I may not always have the perfect words, but I will always have a heart full of love for you. Here's to more laughs, more hugs, more memories, and many more months together.</p>
      <p>I love you so much. Please take care of yourself for me, okay? ♡</p>
      <p class="signature">Always yours, ♥</p>
    </div>`,
  reasons: `
    <h2>Reasons Why I Love You 🌷</h2>
    <p style="text-align:center">It's the little things that make you so special to me.</p>
    <ul class="reasons">
      <li><span>😊</span><strong>Your smile</strong><br>Because it can make my day better.</li>
      <li><span>🫶</span><strong>Your care</strong><br>You make me feel loved and important.</li>
      <li><span>😂</span><strong>Your silly side</strong><br>You give me reasons to laugh and be happy.</li>
      <li><span>💗</span><strong>Your heart</strong><br>I love the person you are, inside and out.</li>
      <li><span>🌙</span><strong>Our little moments</strong><br>Even ordinary days feel special with you.</li>
      <li><span>♾️</span><strong>Being us</strong><br>I love learning, growing, and making memories with you.</li>
    </ul>`,
  surprise: `
    <div class="gift-wrap">
      <h2>A Little Surprise for You 🎁</h2>
      <p>Baby, tap the gift to open a message made just for you.</p>
      <button class="gift-box" id="giftBox" aria-label="Open your surprise gift">🎁</button>
      <p style="font-size:12px;color:#a77b8f">Psst... go on, tap it! ♡</p>
      <div id="giftMessage" class="gift-message" hidden>
        If I could make one wish right now, it would be to keep making beautiful memories with you. You're my favorite notification, my comfort person, and one of the sweetest parts of my life. I love you, Baby! Happy Monthsary! 💗
      </div>
    </div>`
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function openView(name) {
  content.innerHTML = views[name];
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
  if (name === "surprise") {
    const giftBox = document.getElementById("giftBox");
    giftBox.addEventListener("click", () => {
      document.getElementById("giftMessage").hidden = false;
      giftBox.textContent = "💝";
      showToast("A big hug and a kiss for you, Baby! 💋");
    });
  }
}

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => openView(button.dataset.open));
});

document.getElementById("startBtn").addEventListener("click", () => {
  openView("surprise");
  showToast("Your little surprise is waiting below! 💗");
});

document.getElementById("closePanel").addEventListener("click", () => {
  panel.hidden = true;
  document.querySelector(".grid").scrollIntoView({ behavior: "smooth", block: "center" });
});
