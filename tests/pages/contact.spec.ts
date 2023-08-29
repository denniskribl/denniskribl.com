import { expect, test } from '@playwright/test';

test.describe('contact page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/contact');
	});

	test('has title', async ({ page }) => {
		await expect(page).toHaveTitle('Contact');
	});

	test('has header', async ({ page }) => {
		await expect(page.getByTestId('contact').locator('h1')).toHaveText('Contact');
	});

	test('has contact buttons with correct link', async ({ page }) => {
		const expectedLinks = [
			'mailto:denniskribl@gmail.com',
			'https://twitter.com/denniskrb_',
			'https://github.com/denniskribl',
			'https://www.linkedin.com/in/denniskribl/'
		];

		const links = page.getByTestId('contact').getByRole('link');
		await expect(links).toHaveCount(expectedLinks.length);
		for (let i = 0; i < (await links.count()); i++) {
			await expect(links.nth(i)).toHaveAttribute('href', expectedLinks[i]);
		}
	});
});
