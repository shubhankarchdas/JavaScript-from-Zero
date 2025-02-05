const books = [
    {title:'Occupy The Web', genre:'hacking',publish:2000,edition:2022},
    {title:'SUPER INTELLIGENCE', genre:'ai',publish:2011,edition:2024},
    {title:'Linux Basics', genre:'linux',publish:2000,edition:2022},
    {title:'Book One', genre:'science',publish:2000,edition:2022},
    {title:'Book Two', genre:'science',publish:2000,edition:2022},
    {title:'Book Three', genre:'science',publish:2000,edition:2022},
    {title:'Book Four', genre:'science',publish:2000,edition:2022},
    {title:'Book Five', genre:'programming',publish:2000,edition:2022},
    {title:'Book Six', genre:'BCA',publish:2000,edition:2022},
]

let userBooks = books.filter((bk) => bk.genre==='science')
userBooks = books.filter((bk) => bk.publish >='2000')

// userBooks = books.filter((bk) => {return bk.publish >='2000'})
userBooks = books.filter((bk) => {
    return bk.publish >='2000' && bk.genre==='hacking'})
console.log(userBooks);
