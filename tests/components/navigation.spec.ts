import { expect, test } from '@playwright/test';

test.describe('navigation component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('has navigation with correct links', async ({ page }) => {
		const expectedLinks = ['/', '/about', '/experience', '/contact'];

		const links = page.getByTestId('navigation').getByRole('link');
		await expect(links).toHaveCount(expectedLinks.length);
		for (let i = 0; i < (await links.count()); i++) {
			await expect(links.nth(i)).toHaveAttribute('href', expectedLinks[i]);
		}
	});
	test('has correct active tab', async ({ page }) => {
		const activeTabLocator = page.getByTestId('navigation').locator('.tab-active');
		const navLinkLocator = page.getByTestId('navigation').getByRole('link');

		await expect(activeTabLocator).toHaveText('Home');
		await navLinkLocator.nth(1).click();
		await expect(activeTabLocator).toHaveText('About');
		await navLinkLocator.nth(2).click();
		await expect(activeTabLocator).toHaveText('Experience');
		await navLinkLocator.nth(3).click();
		await expect(activeTabLocator).toHaveText('Contact');
	});
});
