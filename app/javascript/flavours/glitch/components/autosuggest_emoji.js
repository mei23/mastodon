import React from 'react';
import PropTypes from 'prop-types';
import unicodeMapping from 'flavours/glitch/util/emoji/emoji_unicode_mapping_light';

const twemojiBase = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.1/2/svg';

export default class AutosuggestEmoji extends React.PureComponent {

  static propTypes = {
    emoji: PropTypes.object.isRequired,
  };

  render () {
    const { emoji } = this.props;
    let url;

    if (emoji.custom) {
      url = emoji.imageUrl;
    } else {
      const mapping = unicodeMapping[emoji.native] || unicodeMapping[emoji.native.replace(/\uFE0F$/, '')];

      if (!mapping) {
        return null;
      }

      url = `${twemojiBase}/${mapping.filename}.svg`;
    }

    return (
      <div className='emoji'>
        <img
          className='emojione'
          src={url}
          alt={emoji.native || emoji.colons}
        />

        {emoji.colons}
      </div>
    );
  }

}
