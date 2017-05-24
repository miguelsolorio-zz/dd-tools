import React from 'react'
import spells from '../../data/spells'

export default class Spells extends React.Component {
  render() {
    return (
      <div>
        <ul id="spells">
          {spells.map(spellData =>
            <li className="card">
              <p className="title">{spellData.title}</p>
              <p className="type">
                <span className="label">type</span>{('\n')}
                {spellData.type}
              </p>
              <p className="description">
                <span className="label">description</span>{('\n')}
                {spellData.description}
              </p>
            </li>)}
        </ul>
      </div>
    );
  }
}