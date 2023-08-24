import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('has title', async ({ page }) => {
	await expect(page).toHaveTitle('Home');
});

test('has greeting', async ({ page }) => {
	await expect(page.getByTestId('home').locator('h1')).toHaveText("Hey, I'm Dennis 👋🏻");
});

test('has description', async ({ page }) => {
	await expect(page.getByTestId('home').locator('p')).toHaveText(
		'Cloud Site Reliability Engineer based in Nuremberg, Germany.'
	);
});
