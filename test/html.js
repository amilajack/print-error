import { html } from '../index.es6'

describe(`html`, function()
{
	it(`should generate correct html markup`, function()
	{
		const markup =
		`
<html>
	<head>
		<title>Error</title>
		<style>
			html
			{
				font-family : Monospace, Arial;
				font-size   : undefined;
			}
			body
			{
				margin-top    : 1.6em;
				margin-bottom : 1.6em;
				margin-left   : 2.3em;
				margin-right  : 2.3em;
			}
			h1
			{
				font-size : 1.4rem;
				color     : #C44100;
			}
			h1.secondary
			{
				font-weight : normal;
				color       : #7f7f7f;
			}
			ul
			{
				margin-top : 2em;
			}
			ul li 
			{
				margin-bottom   : 1.5em;
				list-style-type : none;
				font-size       : 1.2rem;
			}
			.file-path
			{
				color         : #7f7f7f;
				margin-top    : 0.8em;
				font-size     : 1rem;
			}
			.file-path-separator
			{
				color : #c0c0c0;
			}
			.file-name
			{
				font-weight : bold;
			}
			.line-number
			{
			}
			.colon
			{
				color: #9f9f9f;
			}
			.method
			{
				color: #0091C2;
				font-weight: bold;
			}
		</style>
	</head>
	<body>
		<h1>Testing error</h1>
		<ul>
			<li>
				<span class="file-name">parse.js</span><span class="colon">:</span><span class="line-number">7</span> <span class="method">Context.&lt;anonymous&gt;</span>
				<div class="file-path">
					parse.js
				</div>
			</li>
			<li>
				<span class="file-name">runnable.js</span><span class="colon">:</span><span class="line-number">326</span> <span class="method">callFn</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runnable.js
				</div>
			</li>
			<li>
				<span class="file-name">runnable.js</span><span class="colon">:</span><span class="line-number">319</span> <span class="method">Test.Runnable.run</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runnable.js
				</div>
			</li>
			<li>
				<span class="file-name">runner.js</span><span class="colon">:</span><span class="line-number">422</span> <span class="method">Runner.runTest</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runner.js
				</div>
			</li>
			<li>
				<span class="file-name">runner.js</span><span class="colon">:</span><span class="line-number">528</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runner.js
				</div>
			</li>
			<li>
				<span class="file-name">runner.js</span><span class="colon">:</span><span class="line-number">342</span> <span class="method">next</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runner.js
				</div>
			</li>
			<li>
				<span class="file-name">runner.js</span><span class="colon">:</span><span class="line-number">352</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runner.js
				</div>
			</li>
			<li>
				<span class="file-name">runner.js</span><span class="colon">:</span><span class="line-number">284</span> <span class="method">next</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runner.js
				</div>
			</li>
			<li>
				<span class="file-name">runner.js</span><span class="colon">:</span><span class="line-number">320</span> <span class="method">Immediate._onImmediate</span>
				<div class="file-path">
					[print-error]<span class="file-path-separator">/</span>[mocha]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>runner.js
				</div>
			</li>
			<li>
				<span class="file-name">timers.js</span><span class="colon">:</span><span class="line-number">543</span> <span class="method">tryOnImmediate</span>
				<div class="file-path">
					timers.js
				</div>
			</li>
			<li>
				<span class="file-name">timers.js</span><span class="colon">:</span><span class="line-number">523</span> <span class="method">processImmediate [as _immediateCallback]</span>
				<div class="file-path">
					timers.js
				</div>
			</li>
		</ul>
		
		<h1 class="secondary">From previous event</h1>
		<ul>
			<li>
				<span class="file-name">server.js</span><span class="colon">:</span><span class="line-number">153</span>
				<div class="file-path">
					server.js
				</div>
			</li>
			<li>
				<span class="file-name">match.js</span><span class="colon">:</span><span class="line-number">65</span>
				<div class="file-path">
					[qlean-client]<span class="file-path-separator">/</span>[react-router]<span class="file-path-separator">/</span>lib<span class="file-path-separator">/</span>match.js
				</div>
			</li>
		</ul>
	</body>
</html>
`
		// console.log(html(global.error))
		html(global.error).should.equal(markup)
	})
})