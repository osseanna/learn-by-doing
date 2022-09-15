const faqCards = document.querySelectorAll('.question');
faqCards.forEach((card) => card.addEventListener('click', openFaqCard));

function openFaqCard(e) {
    console.log(this.children)
    this.parentNode.classList.toggle('open')
    this.children[1].classList.toggle('fa-angle-down')
    this.children[1].classList.toggle('fa-xmark')
}