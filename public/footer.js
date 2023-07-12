const btn = document.getElementById("toggle")
console.log(btn)

var styles = `
  .uppercase {
    font-weight: bold;
    font-size: 1.7rem;
  }
  `

function toggle() {
 btn.innerHTML = "<span style='font-weight: bold; font-size: 1.7rem'>نحن نحبك. لكننا نحب طرح الأسئلة أيضًا. SWLF هي مساحة لطرح أي شيء بشكل علني على الإنترنت ، فلماذا لا تسأل؟ نحن سهل الاستخدام ونركز على الخصوصية ونبذل قصارى جهدنا للمساهمة في هذا الكوكب بالكثير من الحب. ~ &#128151;</span>"
}

function eng() {
  btn.innerHTML =  "WE LOVE YOU. But we love doughnuts too. We don't want to pick and choose, so why not come to our store to buy a doughnut? We're gluten free, cruelty free, and bake'm with lots of love. Try one of our doughnuts today! &#128151;"
}

// btn.addEventListener("click", Toggle);
