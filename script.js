function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var clutter = "";

  console.log(h1);
  console.log(h1Text);
  console.log(splittedText);

  const halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach((e, index) => {
    // console.log(e)
    // clutter=clutter+e
    if (index < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    }else{
        clutter += `<span class="b">${e}</span>`
    }
    // console.log(clutter)
  });

  console.log(clutter);
  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  // span is inline
  y: 40,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
  yoyo:true,
  repeat:-1,
  ease:'power2.Out'
});
gsap.from("h1 .b", {
  // span is inline
  y: 40,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
  yoyo:true,
  repeat:-1,
  ease:'power2.Out'
});
