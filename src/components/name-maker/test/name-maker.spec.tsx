import { newSpecPage } from '@stencil/core/testing';
import { NameMaker } from '../name-maker';

describe('name-maker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NameMaker],
      html: `<name-maker></name-maker>`,
    });
    expect(page.root).toEqualHtml(`
      <name-maker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </name-maker>
    `);
  });
});
