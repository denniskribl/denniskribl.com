import type { SSTConfig } from 'sst';
import { SvelteKitSite } from 'sst/constructs';

export default {
	config() {
		return {
			name: 'denniskriblcom',
			region: 'us-east-1'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site', {
				customDomain: {
					hostedZone: 'denniskribl.com',
					domainName: stack.stage === 'prod' ? 'denniskribl.com' : `${stack.stage}.denniskribl.com`
				}
			});
			stack.addOutputs({
				url: site.customDomainUrl ?? site.url
			});
		});
	}
} satisfies SSTConfig;
