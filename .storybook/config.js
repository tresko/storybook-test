import { configure } from '@storybook/react';
import { configure as configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
};

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  },
  defaultViewport: 'responsive',
});

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context('../src', true, /\.stories\.js$/);
  importAll(req);
}

const req = require.context("../src", true, /.stories.js$/);

configure(loadStories, module);
