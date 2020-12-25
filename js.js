let a = 10

for (i = 1; i <= a; i++) {

    let ism = prompt(' Foydalanuvchining ismi ')
    let yosh = +prompt(' Foydalanuvchining yoshi ')

    let foydalanuvchila = {
        Ismi: ism,
        Yoshi: yosh,
        Soni: a

    }

    console.log(i + (' inchi foydalanuvchi'));
    console.log(' Foydalanuvchining Ismi ' + foydalanuvchila.Ismi, ' Foydalanuvchining Yoshi ' + foydalanuvchila.Yoshi);
}

alert('Ism ' + foydalanuvchila.Ismi, ' yosh ' + foydalanuvchila.Yoshi + 'Если что Konsoldayam bor')


