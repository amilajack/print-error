import chai from 'chai'
chai.should()

const stack_trace = 
`Testing error
    at Context.<anonymous> (parse.js:7:17)
    at callFn (/Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runnable.js:326:21)
    at Test.Runnable.run (/Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runnable.js:319:7)
    at Runner.runTest (/Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runner.js:422:10)
    at /Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runner.js:528:12
    at next (/Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runner.js:342:14)
    at /Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runner.js:352:7
    at next (/Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runner.js:284:14)
    at Immediate._onImmediate (/Users/kuchumovn/projects/print-error/node_modules/mocha/lib/runner.js:320:5)
    at tryOnImmediate (timers.js:543:15)
    at processImmediate [as _immediateCallback] (timers.js:523:5)
From previous event:
    at server.js:153:124
    at /Users/kuchumovn/projects/qlean-client/node_modules/react-router/lib/match.js:65:5`

global.error = new Error("Testing error")
global.error.stack = stack_trace

require('./helpers')
require('./parse')

require('./text')
require('./terminal')
require('./markdown')
require('./html')