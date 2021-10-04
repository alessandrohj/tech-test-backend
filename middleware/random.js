import random from 'random'
import {users} from '../data/data.js'


function generateRandomNumber (req, res, next) {
    const person = users.forEach(user => user.score = random.int(0,100))

    next();
}


export default generateRandomNumber