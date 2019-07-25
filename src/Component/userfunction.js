import axios from 'axios'

export const signup = regUser => {
    
return axios
.post('signup', {
Firstname: regUser.Firstname,
Lastname: regUser.Lastname,
Email: regUser.Email,
Password: regUser.Password,
ConfirmPassword: regUser.ConfirmPassword,
Mobilenumber: regUser.Mobilenumber,
})
.then(res => {
console.log(res)
})
}


export const login = user => {
return axios
.post('login', {
Email: user.Email,
Password: user.Password
})
.then(res => {
console.log('login')
localStorage.setItem('usertoken', res.data)
return res.data
})
.catch(err => {
console.log(err)
})
}

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
