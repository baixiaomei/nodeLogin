import { mock } from 'mockjs'

import List from './list'

mock('/', 'get', () => List)
console.log(List)
