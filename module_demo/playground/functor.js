
import { Container } from '../lib/es6-func.js'
let container = Container.of("Hello world")
console.log(container)

let result = container.map((x) => x.split(' ')[0])
console.log(result)


