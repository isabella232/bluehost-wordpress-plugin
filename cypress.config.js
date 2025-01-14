const { defineConfig } = require('cypress')
const cypressReplay = require("@replayio/cypress");
const { phpVersion, core } = require('./.wp-env.json')
const wpVersion = /[^/]*$/.exec(core)[0]

module.exports = defineConfig({
	projectId: "h78f39",
	env: {
		wpUsername: 'admin',
		wpPassword: 'password',
		wpVersion,
		phpVersion,
	},
	downloadsFolder: 'tests/cypress/downloads',
	fixturesFolder: 'tests/cypress/fixtures',
	screenshotsFolder: 'tests/cypress/screenshots',
	video: true,
	videosFolder: 'tests/cypress/videos',
	videoUploadOnPasses: false,
	experimentalFetchPolyfill: true,
	chromeWebSecurity: false,
	viewportWidth: 1024,
	viewportHeight: 768,
	blockHosts: [
		'*doubleclick.net',
		'*jnn-pa.googleapis.com',
		'*youtube.com',
	],
	e2e: {
		setupNodeEvents(on, config) {
			const semver = require('semver');

			// Setup Replay
			cypressReplay.default(on, config);

			// Ensure that the base URL is always properly set.
			if (config.env && config.env.baseUrl) {
				config.baseUrl = config.env.baseUrl;
			}

			// Ensure that we have a semantically correct WordPress version number for comparisons.
			if (config.env.wpVersion) {
				if (config.env.wpVersion.split('.').length !== 3) {
					config.env.wpSemverVersion = `${config.env.wpVersion}.0`;
				} else {
					config.env.wpSemverVersion = config.env.wpVersion;
				}
			}

			if (config.env.phpVersion) {
				if (config.env.phpVersion.split('.').length !== 3) {
					config.env.phpSemverVersion = `${config.env.phpVersion}.0`;
				} else {
					config.env.phpSemverVersion = config.env.phpVersion;
				}
			}

			// Exclude onboarding tests for WordPress lower than 6.1
			if (semver.satisfies(config.env.wpSemverVersion, '<6.1.0')) {
				config.excludeSpecPattern = config.excludeSpecPattern.concat(
					[
						"tests/cypress/integration/z-newfold-labs/wp-module-onboarding/**",
						"tests/cypress/integration/z-onboarding-phase-2-rudimentary.cy.js"
					]
				);
			}

			/*
				Exclude onboarding/ecommerce tests for PHP lower than 7.3 (7.1 and 7.2).
				Woocommerce does not support PHP versions below 7.3.0.
			*/
			if (semver.satisfies(config.env.phpSemverVersion, '<7.3.0')) {
				config.excludeSpecPattern = config.excludeSpecPattern.concat(
					[
						"tests/cypress/integration/z-newfold-labs/wp-module-onboarding/steps/ecommerce/**",
					]
				);
			}

			return config;
		},
		baseUrl: 'http://localhost:8882',
		specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'tests/cypress/support/index.js',
		testIsolation: false,
		excludeSpecPattern: [
			"tests/cypress/integration/z-newfold-labs/wp-module-onboarding/steps/design/**",
			"tests/cypress/integration/z-newfold-labs/wp-module-onboarding/wp-module-support/"
		]
	},
})
