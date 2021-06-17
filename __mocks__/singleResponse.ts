import { RepositoryQueryResponse } from 'types';

interface Response {
	data: RepositoryQueryResponse;
}

export const singleResponse: Response = {
	data: {
		repository: {
			__typename: 'Repository',
			issue: {
				__typename: 'Issue',
				number: 21636,
				title:
					'[DevTools Bug] Cannot add node "476" because a node with that id is already in the Store.',
				createdAt: '2021-06-07T06:52:01Z',
				state: 'OPEN',
				bodyHTML:
					'<h3>Website or app</h3>\n<p><a rel="nofollow" href="https://zhivika.ru/product/26406103_plastyr_perc_bperf_10smh18sm_n">https://zhivika.ru/product/26406103_plastyr_perc_bperf_10smh18sm_n</a></p>\n<h3>Repro steps</h3>\n<ol>\n<li>Load page.</li>\n<li>Open react components.</li>\n<li>Click button "Смотреть все аптеки" for unfold all list.</li>\n</ol>\n<h3>How often does this bug happen?</h3>\n<p>Every time</p>\n<h3>DevTools package (automated)</h3>\n<p>react-devtools-extensions</p>\n<h3>DevTools version (automated)</h3>\n<p>4.13.5-0ae5290b54</p>\n<h3>Error message (automated)</h3>\n<p>Cannot add node "476" because a node with that id is already in the Store.</p>\n<h3>Error call stack (automated)</h3>\n<p><em>No response</em></p>\n<h3>Error component stack (automated)</h3>\n<p><em>No response</em></p>\n<h3>GitHub query string (automated)</h3>\n<div class="snippet-clipboard-content position-relative" data-snippet-clipboard-copy-content="https://api.github.com/search/issues?q=Cannot add node  because a node with that id is already in the Store. in:title is:issue is:open is:public label:&quot;Component: Developer Tools&quot; repo:facebook/react\n"><pre lang="text"><code>https://api.github.com/search/issues?q=Cannot add node  because a node with that id is already in the Store. in:title is:issue is:open is:public label:"Component: Developer Tools" repo:facebook/react\n</code></pre></div>',
				author: {
					__typename: 'User',
					avatarUrl:
						'https://avatars.githubusercontent.com/u/7447214?u=ab95174ef2cd1fb8163a463bd3f9d8b86cb5ad60&v=4',
					login: 'Bodyhealer'
				},
				comments: {
					__typename: 'IssueCommentConnection',
					totalCount: 8,
					nodes: [
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg1NTkwMTc1Nw==',
							bodyHTML:
								'<p>Hi <a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/Bodyhealer/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Bodyhealer">@Bodyhealer</a>. I\'m no table to reproduce the error following the steps you\'ve described.</p>\n<details open="" class="details-reset border rounded-2">\n  <summary class="px-3 py-2 border-bottom">\n    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-device-camera-video">\n    <path fill-rule="evenodd" d="M16 3.75a.75.75 0 00-1.136-.643L11 5.425V4.75A1.75 1.75 0 009.25 3h-7.5A1.75 1.75 0 000 4.75v6.5C0 12.216.784 13 1.75 13h7.5A1.75 1.75 0 0011 11.25v-.675l3.864 2.318A.75.75 0 0016 12.25v-8.5zm-5 5.075l3.5 2.1v-5.85l-3.5 2.1v1.65zM9.5 6.75v-2a.25.25 0 00-.25-.25h-7.5a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-4.5z"></path>\n</svg>\n    <span aria-label="Video description bug-21636-repro-Kapture.2021-06-07.at.08.56.19.mp4" class="m-1">bug-21636-repro-Kapture.2021-06-07.at.08.56.19.mp4</span>\n    <span class="dropdown-caret"></span>\n  </summary>\n\n  <video src="https://user-images.githubusercontent.com/29597/121020334-47ced780-c76e-11eb-8004-093dddedea3b.mp4" data-canonical-src="https://user-images.githubusercontent.com/29597/121020334-47ced780-c76e-11eb-8004-093dddedea3b.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 width-fit" style="max-height:640px;">\n\n  </video>\n</details>\n\n<p>Any suggestions?</p>',
							createdAt: '2021-06-07T12:57:06Z',
							author: {
								__typename: 'User',
								avatarUrl:
									'https://avatars.githubusercontent.com/u/29597?u=417a1ec63c2396239beb9453aafdd54275c94765&v=4',
								login: 'bvaughn'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MDE0ODMxOQ==',
							bodyHTML:
								'<p>I\'ve got this error today as well on Firefox 89.<br>\nAdding to OP\'s report, this happens when refreshing the page while the dev console is open with the <code>Components</code> tab shown (see screenshot). Not sure if it happens in other scenarios too.</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/15946186/121795165-8cca9200-cbe4-11eb-9f71-972ae97ee0b7.png"><img src="https://user-images.githubusercontent.com/15946186/121795165-8cca9200-cbe4-11eb-9f71-972ae97ee0b7.png" alt="image" style="max-width:100%;"></a></p>\n<p>P.S.: Clicking on <code>Dismiss</code> gets rid of the error and seems to show the components correctly again, but it shows up again if the page is refreshed.</p>',
							createdAt: '2021-06-13T04:13:47Z',
							author: {
								__typename: 'User',
								avatarUrl: 'https://avatars.githubusercontent.com/u/15946186?v=4',
								login: 'rdcavanha'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MDgzMDUxNQ==',
							bodyHTML:
								'<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/rdcavanha/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/rdcavanha">@rdcavanha</a> You\'re seeing this bug using OP\'s codebase? Or a different app?</p>',
							createdAt: '2021-06-14T16:44:12Z',
							author: {
								__typename: 'User',
								avatarUrl:
									'https://avatars.githubusercontent.com/u/29597?u=417a1ec63c2396239beb9453aafdd54275c94765&v=4',
								login: 'bvaughn'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MTA1NTQ2Mg==',
							bodyHTML:
								'<blockquote>\n<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/rdcavanha/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/rdcavanha">@rdcavanha</a> You\'re seeing this bug using OP\'s codebase? Or a different app?</p>\n</blockquote>\n<p>Completely different app.</p>',
							createdAt: '2021-06-14T23:20:38Z',
							author: {
								__typename: 'User',
								avatarUrl: 'https://avatars.githubusercontent.com/u/15946186?v=4',
								login: 'rdcavanha'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MTU1MTg3Nw==',
							bodyHTML:
								'<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/rdcavanha/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/rdcavanha">@rdcavanha</a> Could you share your code then? <em>I\'m</em> still looking for a way to repro this issue.</p>',
							createdAt: '2021-06-15T14:33:15Z',
							author: {
								__typename: 'User',
								avatarUrl:
									'https://avatars.githubusercontent.com/u/29597?u=417a1ec63c2396239beb9453aafdd54275c94765&v=4',
								login: 'bvaughn'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MTkxMzU2NA==',
							bodyHTML:
								'<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/bvaughn/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/bvaughn">@bvaughn</a> Sorry, I can\'t share the code as it is a private repo.</p>\n<p>However, I\'ve noticed that after I refreshed my Firefox profile the issue seems to be gone. I\'ve tried using the React extension on the same app as before and was unable to reproduce the bug again.</p>\n<p>This leads me to believe that it\'s probably some sort of conflict with another extension (just a guess). Unfortunately I can\'t say which one exactly as I no longer have all the extensions installed due to the profile refresh. The fact that this has very low occurrence seems to support this idea of extension conflict as well.</p>',
							createdAt: '2021-06-16T00:08:50Z',
							author: {
								__typename: 'User',
								avatarUrl: 'https://avatars.githubusercontent.com/u/15946186?v=4',
								login: 'rdcavanha'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MjUzMzU2Mg==',
							bodyHTML: '<p>Thanks for the extra info.</p>',
							createdAt: '2021-06-16T16:39:31Z',
							author: {
								__typename: 'User',
								avatarUrl:
									'https://avatars.githubusercontent.com/u/29597?u=417a1ec63c2396239beb9453aafdd54275c94765&v=4',
								login: 'bvaughn'
							}
						},
						{
							__typename: 'IssueComment',
							id: 'MDEyOklzc3VlQ29tbWVudDg2MjU3MTUzOQ==',
							bodyHTML:
								'<p>[Win10 64-bit] [Firefox 89.0]<br>\nGot the issue today, you may be able to replicate it with the following steps :</p>\n<ol>\n<li>If the React devtools extension is installed, uninstall it</li>\n<li>Go on a web page that uses React and open the Firefox devtools</li>\n<li>In a new/different tab, install the React devtools extension</li>\n<li>Keep the Firefox devtools opened and refresh your page (CTRL + F5)</li>\n<li>Go to the Components tab</li>\n</ol>',
							createdAt: '2021-06-16T17:30:01Z',
							author: {
								__typename: 'User',
								avatarUrl:
									'https://avatars.githubusercontent.com/u/41510224?u=1f9529391466592d46e9c71b7a2141dd9cded5b9&v=4',
								login: 'Romej'
							}
						}
					]
				}
			}
		}
	}
};
