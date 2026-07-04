const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('file:///C:/Users/27618/Documents/Codecademy/PersonalPortfolio/index.html');
});

// Test 1: Nav links scroll to correct sections
test('nav links point to correct sections', async ({ page }) => {
  const nav = page.locator('.nav');
  await expect(nav.locator('a[href="#work"]')).toBeVisible();
  await expect(nav.locator('a[href="#about"]')).toBeVisible();
  await expect(nav.locator('a[href="#contact"]')).toBeVisible();
  await expect(page.locator('#work')).toBeAttached();
  await expect(page.locator('#about')).toBeAttached();
  await expect(page.locator('#contact')).toBeAttached();
});

// Test 2: Hero section displays correct tagline and name
test('hero section displays name and tagline', async ({ page }) => {
  await expect(page.locator('#hero')).toBeVisible();
  await expect(page.locator('#hero')).toContainText('Destiny');
  await expect(page.locator('#hero')).toContainText('Mabwe');
  await expect(page.locator('#hero')).toContainText('I make teams move.');
});

// Test 3: CV download link points to the right file
test('CV download link points to correct file', async ({ page }) => {
  const cvLink = page.locator('.nav a[href="resources/Destiny-SM-CV.pdf"]');
  await expect(cvLink).toBeVisible();
});

// Test 4: Project cards render (4 cards visible — Sprint Facilitation and This Portfolio commented out until further notice)
test('work section renders 4 project cards', async ({ page }) => {
  const cards = page.locator('.project-card');
  await expect(cards).toHaveCount(4);
});

// Test 5: Project card hover overlay appears on hover
test('project card overlay appears on hover', async ({ page }) => {
  const firstCard = page.locator('.project-card').first();
  const overlay = firstCard.locator('.card-overlay');
  await expect(overlay).toHaveCSS('opacity', '0');
  await firstCard.hover();
  await expect(overlay).toHaveCSS('opacity', '1');
});

// Test 6: About section displays portrait photo and bio
test('about section displays photo and bio', async ({ page }) => {
  const about = page.locator('#about');
  await expect(about).toBeVisible();
  await expect(about.locator('img[src="resources/destiny.jpeg"]')).toBeVisible();
  await expect(about).toContainText('Scrum Master');
});

// Test 7: Contact email link opens correct mailto address
test('contact email link has correct mailto', async ({ page }) => {
  const emailLink = page.locator('a[href="mailto:mabwedestiny@gmail.com"]');
  await expect(emailLink).toBeVisible();
});
