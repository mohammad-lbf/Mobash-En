const newCoursesSec = document.querySelector(".newest-courses");
const newArticlesSec = document.querySelector(".newest-articles")
const newCoursesArray = [{
    id:1,
    name:" Past Perfect آموزش",
    time:"۱۴",
    image:"../assets/images/language-translate-4730502-3934026.png"
},
{
    id:2,
    name:"آموزش زبان به کودکان",
    time:"۱۰",
    image:"../assets/images/english-class-5831864-4884527.webp"
},
{
    id:3,
    name:"speaking آموزش",
    time:"۲۰",
    image:"../assets/images/guys-discussion-about-work-6762819-5588515.png"
},
{
    id:4,
    name:"موفقیت در آیلتس",
    time:"۲۰",
    image:"../assets/images/online-test-time-4033995-3337507.png"
}];


const newArticlesArray = [{
    id:1,
    name:"!یادگیری زبان انگلیسی در یک ماه",
    image:"../assets/images/calendar-3981416-3297354.png"
},
{
    id:2,
    name:"مکالمه ی صحیح",
    image:"../assets/images/chat.png"
},
{
    id:3,
    name:"vocabulary یادگیری صحیح ",
    image:"../assets/images/notebook-4048699-3369781.png"
},
{
    id:4,
    name:"!Google ترجمه بدون کمک",
    image:"../assets/images/translate-without-google.png"
}];
newCoursesArray.forEach(item => {
    const newCourse = document.createElement("div");
    newCourse.classList.add("col-12");
    newCourse.classList.add("col-md-6")
    newCourse.classList.add("col-xl-3");
    // newCourse.classList.add("p-0");
   newCourse.innerHTML = `
        <div style="cursor:pointer;" class="d-flex flex-column align-items-center border w-100 rounded shadow my-2 my-xl-0">
            <div class="border-bottom w-100 text-center">
            <img class="mx-auto " style="width:200px;" src=${item.image} />
            </div>
            <p class="text-center fw-bold mt-2 fs-5">
                ${item.name}
            </p>
            <div class="d-flex mt-3" dir="rtl">
            <i class="bi bi-stopwatch-fill text-main-color-1 mt-1 ms-1"></i>
                <p class="ms-1">
                    مدت زمان:
                </p>
                <p>
                   ${item.time} دقیقه 
                </p>
            </div>
            <p class="d-flex align-items-center">
            مدرس: امیرحسین مبشری
            <i class="bi bi-pencil-square text-main-color-1 mt-1 ms-1"></i>
            </p>
            <button class="btn-main-2 d-flex align-items-center justify-content-center mb-3 py-2 mt-4" style="width:240px;">
            <i class="bi bi-chevron-left me-1 mt-1"></i>
                مشاهده ویدیو
            </button>
        </div>
`;
newCoursesSec.appendChild(newCourse)
});

newArticlesArray.forEach(item => {
    const newArticle = document.createElement("div");
    newArticle.classList.add("col-12");
    newArticle.classList.add("col-md-6")
    newArticle.classList.add("col-xl-3");
    // newCourse.classList.add("p-0");
   newArticle.innerHTML = `
        <div style="cursor:pointer;" class="d-flex flex-column align-items-center border w-100 rounded shadow my-2 my-xl-0">
            <div class="border-bottom w-100 text-center">
            <img class="mx-auto " style="width:200px;" src=${item.image} />
            </div>
            <p class="text-center fw-bold mt-2 fs-5">
                ${item.name}
            </p>
            <p class="d-flex align-items-center mt-5">
            نویسنده: امیرحسین مبشری
            <i class="bi bi-pencil-square text-main-color-1 mt-1 ms-1"></i>
            </p>
            <button class="btn-main-2 d-flex align-items-center justify-content-center mb-3 py-2" style="width:240px;">
            <i class="bi bi-chevron-left me-1 mt-1"></i>
                مطالعه مقاله
            </button>
        </div>
`;
    newArticlesSec.appendChild(newArticle)
}) 