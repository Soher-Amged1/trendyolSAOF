
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function onClick(event) {
    btn.style.backgroundColor = '#BB2600';

    confirm("تم النسخ بنجاح تسوق الان من trendyol واستخدم كود الخصم");
    navigator.clipboard.writeText("SAOF");

   
  });