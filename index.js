const body = document.querySelector('body')
const container = document.querySelector('#container')
const btn = document.querySelector('.btn')



const facts = [
    {
        info: 'You make me feel handsome, even when I dont feel so great.'
    },
    {
        info: 'Your beauty is captivating on a daily basis.'
    },
    {
        info: 'You look cute in your glasses <3'
    },
    {
        info: 'The perfect day is anywhere you are and food.'
    },
    {
        info: 'You always look sexy to me, even when youre not trying.'
    },
    {
        info: 'I cant wait to travel with you and see the world one day <3'
    },
    {
        info: 'I love how silly you are, you make me laugh even when i get frustrated about trivial things.'
    },
    {
        info: 'Your fashion sense is attractive. Always looking great <3'
    },
    {
        info: 'Sometimes I feel happy just thinking about holding you<3'
    },
    {
        info: 'I love how adventurous you are, i cant wait to try new things with you forever<3.'
    },
    {
        info: 'I dont need to be doing anything at all to have fun with you <3'
    },
    {
        info: 'Lets play cats<3'
    },
    {
        info: 'Without you my life would feel like a meaningless void (mad emo).'
    },
    {
        info: 'Even though Ive been so busy lately, all I want to do is make you happy, Im sorry I get caught up in my work :('
    },
    {
        info: 'I cant wait to live with you and just come home to you and my cats <3'
    },
    {
        info: 'I love how passionate you are, one day you will be a big time fashion designer, I just know it<3'
    },
    {
        info: 'Im your lifelong personal chef (even if Im a little bit of a tough critic sometimes)'
    },
    {
        info: 'Your tattoos are hot.'
    },
    {
        info: 'Your body is so elegant and beautiful.'
    },
    {
        info: 'We still need to have a crusty night one of these days.'
    },
    {
        info: 'When I gaze into you eyes, I feel harmony, peace'
    },
    {
        info: 'Thank you for putting up with my grumpiness in the morning and making me coffee, I love you.'
    },
    {
        info: 'I look forward to awkwardly dancing with you again in the future'
    },
    {
        info: 'One day, I want to make a little family with you <3'
    },
    {
        info: 'Ill always rub your feet when they are sore after a long day.'
    },
    {
        info: 'You are so supportive of the things I enjoy, even if I know some of them annoy you a little, and I appreciate that more than you know.'
    },
    {
        info: 'Heres to more crazy tequila nights in the future xD'
    },
    {
        info: 'I love seeing you smile <3'
    },
    {
        info: 'When im staying far away in Oakville, I sometimes lay down to bed and wish you could be there, I always miss you<3'
    },
    {
        info: 'Lets touch eyeballs<3 (you cant eat my eyes)'
    },
    {
        info: 'You make everything better<3'
    },
    {
        info: 'You give excellent head.'
    },
    {
        info: 'I love our little late night cooking experiments :)'
    },
    {
        info: 'You. Jojos. Bed. Thor. Snacks (but not too many)'
    },
    {
        info: 'You are just fucking gorgeous.'
    },
    {
        info: 'I love how you make sometimes being awkward fucking cute<3'
    },
]

const myFunction = function(){
    console.log('click')
    let card = document.createElement('div')
    card.innerText = facts[Math.floor(Math.random()*facts.length)].info
    card.classList.add('card')
    let newBtn = document.createElement('button')
    newBtn.classList.add('btn')
    newBtn.innerText = "Another? <3"
    newBtn.addEventListener('click', function(){
        card.innerText=facts[Math.floor(Math.random()*facts.length)].info
    })
    container.removeChild(btn)
    container.appendChild(newBtn)
    container.appendChild(card)
}

btn.addEventListener('click', myFunction)