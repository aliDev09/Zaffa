
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("active");
    $(this).addClass("active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});



$('ul.tabs li').last().addClass("tab_last");

var accordionBlocks = document.querySelectorAll('.accordion__block');
var accordionTxts = document.querySelectorAll('.accordion__txt');

accordionBlocks.forEach(function (accordionBlock, index) {
    accordionBlock.addEventListener('click', function () {
        var txt = accordionTxts[index];
        var isActive = txt.classList.toggle('active'); // Переключаем класс

        // Если текст активен, устанавливаем max-height в его scrollHeight
        if (isActive) {
            txt.style.maxHeight = txt.scrollHeight + 'px'; // Устанавливаем max-height в высоту текста
        } else {
            txt.style.maxHeight = '0'; // Скрываем текст
        }
    });
});

let accordionBlock = document.querySelectorAll('.accordion__block');
let accordionImg = document.querySelectorAll('.accordion__img');

// Обходим каждый блок аккордеона
accordionBlock.forEach((block, index) => {
    block.addEventListener('click', () => {
        // Переключаем класс 'active' для блока
        block.classList.toggle('active');

        // Получаем текущее состояние аккордеона (открыт или закрыт)
        let isActive = block.classList.contains('active');

        if (isActive) {
            accordionImg[index].style.transform = 'rotate(-180deg)';
        } else {
            accordionImg[index].style.transform = 'rotate(0deg)';
        }
    });
});

window.onload = function() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "block";
    }
};

function closeModal() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}