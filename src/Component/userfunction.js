import axios from 'axios'

export const signup = regUser => {
    debugger
return axios
.post('signup', {
Firstname: regUser.Firstname,
Lastname: regUser.Lastname,
Email: regUser.email,
Password: regUser.Password,
ConfirmPassword: regUser.ConfirmPassword,
Mobilenumber: regUser.Mobilenumber,
})
.then(res => {
console.log(res)
})
}


// export const login = user => {
// return axios
// .post('users/login', {
// email: user.email,
// password: user.password
// })
// .then(res => {
// console.log('login')
// localStorage.setItem('usertoken', res.data)
// return res.data
// })
// .catch(err => {
// console.log(err)
// })
// }

// export const studentProfile = profileuser => {
// return axios
// .post('users/studentProfile', {
// studentname: profileuser. studentname,
// address: profileuser. address,
// email: profileuser.email,
// mobileNumber: profileuser. mobileNumber
// })
// .catch(err => {
// console.log(err)
// })
// }
