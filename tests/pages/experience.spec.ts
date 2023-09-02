import { test, expect } from '@playwright/test';

test.describe('experience page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/experience');
	});

	test('has title', async ({ page }) => {
		await expect(page).toHaveTitle('Experience');
	});

	test('has header', async ({ page }) => {
		await expect(page.getByTestId('experience').locator('h1')).toHaveText('Experience');
	});

	test('has experience items', async ({ page }) => {
		const expectedItems = [
			{
				at: 'Scalable Capital',
				title: 'Cloud Site Reliability Engineer',
				duration: '(2023 - present)'
			},
			{
				at: 'immowelt / AVIV Group',
				title: 'DevOps Engineer / Full Stack Engineer',
				duration: '(2018 - 2023)'
			},
			{
				at: 'immowelt',
				title: 'Linux System Administrator',
				duration: '(2017 - 2018)'
			},
			{
				at: 'immowelt',
				title: 'IT specialist/systems integration apprentice',
				duration: '(2014 - 2017)'
			}
		];

		const list = page.getByTestId('experience').getByRole('listitem');
		await expect(list).toHaveCount(expectedItems.length);
		for (let i = 0; i < (await list.count()); i++) {
			await expect(list.nth(i).getByTestId('exp-at')).toHaveText(expectedItems[i].at);
			await expect(list.nth(i).getByTestId('exp-title')).toHaveText(expectedItems[i].title);
			await expect(list.nth(i).getByTestId('exp-duration')).toHaveText(expectedItems[i].duration);
		}
	});
});
