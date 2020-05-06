const accordian = document.querySelector('.accordion').children;
// console.log(accordian)

for (let i = 0; i < accordian.length; i++) {
    const heading = accordian[i].querySelector('.heading');
    if (accordian[i].classList.contains('active')) {
        accordian[i].querySelector('.body').style.maxHeight = accordian[i].querySelector('.body').scrollHeight + 'px';
        accordian[i].querySelector('.heading span').classList.remove('fa-plus')
        accordian[i].querySelector('.heading span').classList.add('fa-minus')
    }
    heading.onclick = function () {
        // console.log(this.innerHTML)

        for (let j = 0; j < accordian.length; j++) {
            accordian[j].querySelector('.body').style.maxHeight = '0px';
            accordian[j].querySelector('.heading span').classList.remove('fa-minus')
            accordian[j].querySelector('.heading span').classList.add('fa-plus')
        }
        accordian[i].querySelector('.body').style.maxHeight = accordian[i].querySelector('.body').scrollHeight + 'px';
        accordian[i].querySelector('.heading span').classList.remove('fa-plus')
        accordian[i].querySelector('.heading span').classList.add('fa-minus')
        // console.log(maxHeight)
    }
}