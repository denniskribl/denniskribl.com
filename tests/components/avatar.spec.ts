import { expect, test } from '@playwright/test';

test.describe('avatar component', () => {
	test('matches screenshot', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByTestId('avatar')).toHaveScreenshot();
	});
});
