import './style.sass'

import setElement from './setElement'

document.setElement = setElement

console.log(new URL(location.href))

document.querySelector('form').addEventListener('submit', e=>{
    document.querySelector('#properties').innerHTML = '<li>Protocol: <span></span></li><li>Domain: <span></span></li><li>Path: <span></span></li><li>Search: <span></span></li>'
    document.querySelector('#properties').hidden = true
    document.querySelector('.alinha').style.display = ''
    e.preventDefault()
    const url = e.target.querySelector('input').value
     
    // const protocol = url.match(/^(\w+?:\/\/)/g)
    // document.setElement('#properties li:nth-child(1) span', protocol[0].replace('://', '').toUpperCase() || '')
    // const domain = url.match(/^\w+?:\/\/((www\.)?[\w\-]+\.\w{2,6}(\.\w{2,6})?)\/?/)
    // document.setElement('#properties li:nth-child(2) span', domain[1] || '')
    // const path = url.match(/www\.?[\w\-]+\.\w{2,6}\.\w{2,6}?(\/\w+)/)

    // let a = document.createElement('a')
    // a.setAttribute('href', url)
    // document.setElement('#properties li:nth-child(1) span', a.protocol.replace(':', ''))
    // document.setElement('#properties li:nth-child(2) span', a.hostname)
    // document.setElement('#properties li:nth-child(3) span', a.pathname)
    // document.setElement('#properties li:nth-child(4) span', a.search)

    const a = new URL(url)

    document.setElement('#properties li:nth-child(1) span', a.protocol.replace(':', ''))
    document.setElement('#properties li:nth-child(2) span', a.hostname)
    document.setElement('#properties li:nth-child(3) span', a.pathname)
    document.setElement('#properties li:nth-child(4) span', a.search)
    let arr = [...a.searchParams]
    for(let k =0; k < arr.length; k++){
        document.setElement('#properties', `<li>Param ${arr[k][0]}: <span></span></li>`)  
        document.setElement(`#properties li:nth-child(${(4+k)+1}) span`, arr[k][1])  
    }
    setTimeout(()=>{
        document.querySelector('.alinha').style.display = 'none'
        document.querySelector('#properties').hidden = false
    },3000)
})