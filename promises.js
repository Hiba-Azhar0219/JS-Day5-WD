console.log('"Welcome to the new concept: Promises')
var input = prompt('Enter resolve or reject')

//a promise is there that contaons two params, resolve and reject. In case, it resolves, it goes to then. In case it is rejected, it goes to the catch
let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2 is fulfilled')
  }, 6000)
  // reject('Promise2 not fulfilled')
})
let prom2 = new Promise((resolve, reject) => {
  switch (input) {
    case 'resolve':
      setTimeout(() => {
        resolve(prom1)
      }, 3000)
      break
    case 'reject':
      reject(prom1)
      break
  }
})

prom1
  .then((a) => {
    console.log(a)
  })
  .catch((err) => {
    console.log(err)
  })

//the above promises worked quite well
