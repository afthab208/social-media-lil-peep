function getname(value) {
    const github  = "https://github.com/" + value
    const gitimg = "https://image.thum.io/get/" + github
    document.getElementById("gitimage").src = gitimg

    const wattpad  = "https://www.wattpad.com/user/" + value
    const wattimage = "https://image.thum.io/get/" + wattpad
    document.getElementById("wattpadimage").src = wattimage

    const devto  = "https://dev.to/" + value
    const devimage = "https://image.thum.io/get/" + devto
    document.getElementById("devimg").src = devimage

    const blogger = "https://" + value + ".blogspot.com"
    const bmg = "https://image.thum.io/get/" + blogger
    document.getElementById("bloggerimg").src = bmg

   

    const itch = "https://" + value + ".itch.io"
    const chori = "https://image.thum.io/get/" + itch
    document.getElementById("choriyan").src = chori

    const med  = "https://medium.com/" + value
    const medimage = "https://image.thum.io/get/" + med
    document.getElementById("median").src = medimage

    const mci  = "https://namemc.com/profile/" + value
    const mcimage = "https://image.thum.io/get/" + mci
    document.getElementById("mc").src = mcimage

    const pb  = "https://pastebin.com/u/" + value
    const pbimage = "https://image.thum.io/get/" + pb
    document.getElementById("pb").src = pbimage

    const rd  = "https://reddit.com/user/" + value
    const rdimage = "https://image.thum.io/get/" + rd
    document.getElementById("rd").src = rdimage






}