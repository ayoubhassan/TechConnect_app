document.getElementById('login-form').addEventListener('submit', function(event) {
   // event.preventDefault(); // لمنع إعادة تحميل الصفحة
    const username = document.getElementById('username').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.getElementById('user-password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const countryCode = document.getElementById('countryCode').value;

    let isValid = false; // متغير لتأكيد صحة المدخلات

    // تحقق من المدخلات
    if (email && password) {
        isValid = true; // تم إدخال الإيميل وكلمة السر
    } else if (phoneNumber && countryCode) {
        isValid = true; // تم إدخال رقم الهاتف ورمز الدولة
    } else if (username) {
        isValid = true; // تم إدخال اسم المستخدم
    }

    if (!isValid) {
        alert("يرجى إدخال حقل واحد على الأقل (اسم المستخدم أو الإيميل أو رقم الهاتف).");
    } else {
        alert("تم تسجيل الدخول بنجاح!");
        // يمكنك إضافة المزيد من الإجراءات هنا (مثل تخزين البيانات)
    }
});

function animateText() {
    const title = document.querySelector('.moving-header');
    let position = 0;

    const interval = setInterval(() => {
        position += 5; // زيادة الموضع
        title.style.transform = `translateX(${position}px)`; // تعبير الحركة الصحيح
        if (position > window.innerWidth) { // إذا تجاوز الحدود
            clearInterval(interval); // إيقاف الحركة
        }
    }, 30);

    // لإيقاف الحركة بعد فترة معينة (اختياري)
    setTimeout(() => clearInterval(interval), 2000); // توقف بعد 2000 مللي ثانية
}

animateText();

document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('result').innerText = 'لقد ضغطت على الزر!';
});

const menuIcon = document.getElementById('menu-icon');
const submenu = document.getElementById('submenu');

menuIcon.addEventListener('click', () => {
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none'; // إغلاق القائمة
    } else {
        submenu.style.display = 'block'; // فتح القائمة
    }
});
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.with_raw_response.create(
    messages=[{
        "role": "user",
        "content": "Say this is a test",
    }],
    model="gpt-4o-mini",
)
print(response.headers.get('x-ratelimit-limit-tokens'))

# get the object that `chat.completions.create()` would have returned
completion = response.parse()
print(completion)
import OpenAI from 'openai';
const client = new OpenAI();
const response = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o-mini'
}).asResponse();

// access the underlying Response object
console.log(response.headers.get('x-ratelimit-limit-tokens'));
import OpenAI from 'openai';
const client = new OpenAI();

const response = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o-mini'
});

console.log(response._request_id);import OpenAI from 'openai';
const client = new OpenAI();

const response = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o-mini'
}).asResponse();

// access the underlying Response object
console.log(response.headers.get('x-ratelimit-limit-tokens'));
<script>
window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');
    s.type = "module"
    s.async = true;
    s.addEventListener('load', function() {
      var myLandbot = new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2744726-BBIWPHQ73I9X7PGC/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
</script>
