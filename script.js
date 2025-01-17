document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const btns = document.querySelectorAll('.btn');
    const imglist = ["img_1", "img_2", "img_3", "img_4"];
    let index = 0;
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('btn-left')) {
                index--;
                if (index < 0) {
                    index = imglist.length - 1;
                }
            } else if (button.classList.contains('btn-right')) {
                index++;
                if (index >= imglist.length) {
                    index = 0;
                }
            }
            container.style.background = `url("${imglist[index]}.jpg") center/cover`;
        });
    });
});