let lan = document.getElementById('lan')


// check language 
lan.addEventListener('click', () => {
    if (lan.innerText == 'AR') {
        ar()
    }
    else {
        en()
    }
})

// add rtl + bootstrap
const ar = () =>{
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')
    lan.innerText = "EN"
    document.getElementsByTagName('head')[0].append(`<link rel="stylesheet" href="bootstrap-5.1.1-dist/css/bootstrap.rtl.min.css"> `)
}
// removw rtl + bootstrap
const en = () =>{
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')
    lan.innerText = "AR"
    document.getElementsByTagName('head')[0].removeAttribute(`<link rel="stylesheet" href="bootstrap-5.1.1-dist/css/bootstrap.rtl.min.css"> `)
}