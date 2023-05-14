for (let index = 0; index < 6; index++) {
  var x = document.createElement("div");
  x.className = "col-md-4 pb-4";
  var z = document.createElement("div");
  z.className = "bot-card";
  x.prepend(z);
  var u = document.createElement("div");
  u.className = "icon mb-3";
  z.prepend(u);
  var i = document.createElement("img");
  i.src = "/assets/imgs/" + index + ".png";
  u.prepend(i);
  var g = document.createElement("div");
  g.className = "title pb-4";
  g.innerText = "الاكثر تنويعا";
  z.append(g);
  var f = document.createElement("div");
  f.className = "subtitle pb-3";

  var toTruncate =
    "من خلال هذه الخدمة تتيح شركة دراية المالية للعميل الاستثمار في مجموعة واسعة من الصناديق الاستثمارية (ما يقارب (60) ستين صندوق استثماري)، تدار هذه الصناديق من قبل عشرة مدراء مختلفين";
  var cardBtn = document.createElement("button");
  cardBtn.className = "pill purple w-25 my-2";
  cardBtn.innerText = "إقرأ المزيد";

  cardBtn.addEventListener("click", function (e) {
    document.getElementById("modal01").classList.replace("d-none", "d-block");
    document.body.style.overflow = "hidden";
    header.innerText = g.innerText;
    header = modalContainer.append(header);
    body.innerText = f.innerText;
    modalContainer.append(body);
  });

  if (toTruncate.length <= 120) {
    f.innerText = toTruncate;
    z.append(f);
  } else {
    f.classList.add("truncated");
    f.innerText = toTruncate.substring(0, 120 - 3) + "...";
    console.log("Text length after truncation: " + f.innerText.length);
    z.append(f);
    z.append(cardBtn);
  }

  var y = document.getElementsByClassName("js-parent");
  y[0].append(x);
}

var btn = document.createElement("button");
btn.className = "pill purple w-25 my-2";
btn.innerText = "إقرأ المزيد";

var introHeader = " نبذة عن صندوق دراية الخليجي لأسهم النمو و الدخل";

var introText =
  "من خلال هذه الخدمة تتيح شركة دراية المالية للعميل الاستثمار في مجموعة واسعة من الصناديق الاستثمارية (ما يقارب (60) ستين صندوق استثماري)، تدار هذه الصناديق من قبل (10) عشرة مدراء مختلفين، وتستثمر في معظم الفئات الاستثمارية كالأسهم والصكوك والمرابحة، والاستثمار العقاري، والسلع، عن طريق موقع الكتروني واحد ومنصة الكترونية واحدة، كافة المنتجات الاستثمارية متاحة بنفس التكلفة المتاحة عند الاستثمار مع الجهة الاستثمارية مباشرة وتشمل هذه الصناديق ما يلي، مصنفة بحسب الشركة التي تقوم بإدارة الصندوق";

document.getElementsByClassName("intro-text")[1].innerText = introText;

var elements = document.getElementsByClassName("intro-text");

for (let i = 0; i < elements.length; i++) {
  var element = elements[i];

  if (element.innerText.length > 300) {
    element.classList.add("truncated");
    element.innerText = element.innerText.substring(0, 300 - 3) + "...";
    console.log("Text length after truncation: " + element.innerText.length);
    element.parentElement.append(btn);
  }
}

// modal infrastructure
var modal = document.createElement("div");
modal.className = "modalx d-none";
modal.setAttribute("id", "modal01");

var modalContent = document.createElement("div");
modalContent.className = "modalx-content";
modal.prepend(modalContent);

var modalContainer = document.createElement("div");
modalContainer.className = "modalx-container d-flex flex-column gap-2 m-5";
modalContent.prepend(modalContainer);

// modal structure
var header = document.createElement("h3");
header.className = "intro-heading";

var body = document.createElement("p");
body.className = "intro-text";

var closeBtn = document.createElement("div");
closeBtn.className = "close-btn top-right";
closeBtn.innerText = "X";
modalContainer.prepend(closeBtn);

document.body.appendChild(modal);

// open modal
btn.addEventListener("click", function (e) {
  document.getElementById("modal01").classList.replace("d-none", "d-block");
  document.body.style.overflow = "hidden";
  header.innerText = introHeader;
  header = modalContainer.append(header);
  body.innerText = introText;
  modalContainer.append(body);
});

// close modal
closeBtn.addEventListener("click", function (e) {
  document.body.style.overflow = "scroll";
  e.target.parentElement.parentElement.parentElement.className =
    "modalx d-none";
});
