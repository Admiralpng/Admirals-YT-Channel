// Video previews

document.querySelectorAll(".videoupload").forEach((videoCard) => {
  const thumbnail = videoCard.querySelector(".thumbnail");
  const video = videoCard.querySelector(".videopreview");
  const preview = videoCard.querySelector(".hoverimg");
  const buttons = videoCard.querySelector(".hovericons");

  if (!thumbnail || !video || !preview || !buttons) return;

  // let togglemute = if(video.querySelector(".hovericons button")=onclick) return true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  thumbnail.addEventListener("mouseenter", () => {
    preview.classList.add("active");
    buttons.classList.add("active");
    video.classList.remove("active");
    video.currentTime = 0;
    video.play().catch(() => {});
  });
  thumbnail.addEventListener("mouseleave", () => {
    preview.classList.remove("active");
    buttons.classList.remove("active");
    video.classList.add("active");
    video.pause();
  });
});

// Navbar scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolling", window.scrollY > 0);
  }
});
