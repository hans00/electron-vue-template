<template>
	<div>
		<div class=empty>
			<p class="empty-title h5">
				Welcome to your new project!
				<p class=empty-subtitle>
					Get qwdqwd now and take advantage of the great documentation at hand.
					<div class=empty-action>
						<button @click="$root.open('https://webpack.electron.build')" class="btn btn-primary">Documentation</button>
						<button @click="$root.open('https://electron.atom.io/docs/')" class="btn btn-primary">Electron</button>
						<br>
						<ul class=breadcrumb>
							<li class=breadcrumb-item>
								electron-webpack v{{ versions.electronWebpack }}
							</li>
							<li class=breadcrumb-item>
								electron v{{ versions.electron }}
							</li>
						</ul>
					</div>
					<p class=footer>
						This intitial landing page can be easily removed from <code>src/renderer/index.js</code>.
					</p>
				</p>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				versions: {
					electron: process.versions.electron,
					electronWebpack: require('electron-webpack/package.json').version
				}
			}
		},
	}
</script>

<style>
	@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);
	.empty {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		position: relative;
	}
	.footer {
		bottom: 0;
		font-size: 13px;
		left: 50%;
		opacity: .9;
		position: absolute;
		transform: translateX(-50%);
		width: 100%;
	}
</style>
