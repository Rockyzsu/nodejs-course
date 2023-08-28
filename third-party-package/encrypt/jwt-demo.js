const jwt = require('jsonwebtoken')
secretKey = '1234567890'
const genToken = (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        secretKey,
        // { expiresIn: '1h' }
    )
    console.log(token);

}

const user = {
    id: '123',
    username: 'rocky'
}

genToken(user)