import { action } from '@storybook/addon-actions';
import { CplaceButtonComponent } from './../../projects/cplace/design/src/lib/button';
const markdown = require('./../../projects/cplace/design/src/lib/button/README.md');
import { withA11y } from '@storybook/addon-a11y';
// import { Welcome } from '@storybook/angular/demo'

export default {
    title: 'Button',
    decorators: [withA11y]
};

export const ButtonStorybook = () => ({
    component: CplaceButtonComponent,
    props: {
        text: 'OK',
        click: action('ButtonPrimary')
    },
});

ButtonStorybook.story = {
    name: 'Primary',
    parameters: {
        notes: { markdown }
    }
};
