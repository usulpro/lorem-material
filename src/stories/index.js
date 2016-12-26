/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { WithNotes } from '@kadira/storybook-addon-notes';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Card from '../blankMaterialAppExampleCard';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */


const stories = storiesOf('React App', module)
    .addDecorator((story) => {
        const storyKind = story();
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 20,
            }}
            className="centered-decorator"
          >
            {storyKind}
          </div>);
    })
    .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/

const lorems = require.context('../', true, /Material\w*.jsx/);
lorems.keys().forEach((filename) => {
    const Ipsum = lorems(filename).default;
    stories.add(
        filename.replace(/^.\//, '').replace(/.jsx$/, ''),
        () => <Ipsum />
    );
});


function withNote(note, child) {
    return (
      <WithNotes notes={note}>{child || null}</WithNotes>
    );
}
