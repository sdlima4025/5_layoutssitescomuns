openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    
    
    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'

        openMenu.style.display = 'none'
    }, 10)
   

})

/* Ação de eventos sobre o botão X da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
closeMenu.addEventListener('click', () => {
menu.style.opacity = '0'

menu.style.right = (menu.offsetWidth * -1) + 'px'

setTimeout(() => {
    menu.removeAttribute ('style') 
    openMenu.removeAttribute('style')
}, 200)
    

})
