import { test, expect } from '@playwright/test';

test.describe('about page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/about');
	});

	test('has title', async ({ page }) => {
		await expect(page).toHaveTitle('About');
	});

	test('has header', async ({ page }) => {
		await expect(page.getByTestId('about').locator('h1')).toHaveText('About me');
	});

	test('has description', async ({ page }) => {
		const expectedDescriptionItems = [
			'26 years old',
			'From Nuremberg, Germany',
			'Cloud & serverless enthusiast',
			'Developer at heart',
			'DevOps evangelist',
			'Gaming',
			'Anime & TV shows',
			'Languages'
		];

		const list = page.getByTestId('about').getByRole('listitem');
		await expect(list).toHaveCount(expectedDescriptionItems.length);
		await expect(await list.allTextContents()).toEqual(expectedDescriptionItems);
	});

	test('has badges', async ({ page }) => {
		const expectedBadges = [
			'Amazon Web Services',
			'TypeScript',
			'Terraform',
			'Datadog',
			'Serverless',
			'Angular',
			'React',
			'Python',
			'Docker',
			'GitHub Actions',
			'GitLab CI',
			'Cypress',
			'Jest'
		];
		const badges = page.getByTestId('about').locator('.badge');
		await expect(badges).toHaveCount(expectedBadges.length);
		await expect(await badges.allTextContents()).toEqual(expectedBadges);
	});
});
