import { newE2EPage } from '@stencil/core/testing';

describe('name-maker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<name-maker></name-maker>');

    const element = await page.find('name-maker');
    expect(element).toHaveClass('hydrated');
  });
});
