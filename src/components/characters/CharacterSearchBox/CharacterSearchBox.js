import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Downshift from 'downshift';

import { typeHeroName, cleanHeroName, selectHero } from '../../../actions';
import { NAME as HERO_SEARCH } from '../../../reducers/hero-search';
import { HeroSearchSection, HeroForm, HeroInput, HeroSuggestion, HeroSuggestionList, RemoveTextButton } from './styles';

export class CharacterSearchBox extends Component {
  constructor(props) {
    super(props);
    this.onDownShiftStateChange = this.onDownShiftStateChange.bind(this);
    this.onDownShiftClear = this.onDownShiftClear.bind(this);
    this.onSelectHero = this.onSelectHero.bind(this);
  }

  onDownShiftStateChange(downshiftStateChange) {
    if (downshiftStateChange.hasOwnProperty('inputValue')) { // eslint-disable-line no-prototype-builtins
      const { inputValue } = downshiftStateChange;
      this.props.typeHeroName(inputValue);
    }
  }

  onDownShiftClear() {
    this.downshift.clearSelection();
    this.props.cleanHeroName();
  }

  onSelectHero(selectedItem) {
    if (selectedItem) {
      const targetedHero = this.props.heroes.find(hero => hero.name === selectedItem);
      this.props.selectHero(targetedHero);
      this.props.history.push(`/detail/${targetedHero.id}`);
      this.downshift.clearSelection();
      this.props.cleanHeroName();
    }
  }

  renderSuggestions({
    getItemProps, isOpen, highlightedIndex,
  }) {
    const { heroes, searchTerm } = this.props;

    return (
      isOpen ? (
        <HeroSuggestionList>
          {
            heroes
              .filter(hero => !searchTerm || hero.name.includes(searchTerm))
              .map((hero, index) => (
                <HeroSuggestion
                  {
                    ...getItemProps({
                      key: hero.id,
                      index,
                      item: hero.name,
                      style: {
                        color: highlightedIndex === index ? '#F41A12' : 'black',
                      },
                    })
                  }
                >
                  {hero.name}
                </HeroSuggestion>
              ))
          }
        </HeroSuggestionList>
      ) : undefined
    );
  }

  render() {
    const { searchTerm, heroes } = this.props;

    return (
      <HeroSearchSection>
        <HeroForm>
          <Downshift
            ref={(downshift) => { this.downshift = downshift; }}
            onStateChange={this.onDownShiftStateChange}
            onSelect={this.onSelectHero}
            render={({
                getInputProps, getItemProps, getLabelProps, isOpen, inputValue, highlightedIndex, selectedItem,
              }) => ((
                <div style={{ position: 'relative' }}>
                  <label {...getLabelProps()} htmlFor="hero-name" hidden>
                    Enter a Hero name
                  </label>
                  <HeroInput
                    {...getInputProps()}
                    placeholder="Search"
                    id="hero-name"
                    value={searchTerm}
                    disabled={!heroes.length}
                  />
                  <RemoveTextButton type="button" onClick={this.onDownShiftClear} />
                  {
                    this.renderSuggestions({
                      getItemProps, isOpen, inputValue, highlightedIndex, selectedItem,
                    })
                  }
                </div>
              ))
            }
          />
        </HeroForm>
      </HeroSearchSection>
    );
  }
}

CharacterSearchBox.propTypes = {
  cleanHeroName: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
  selectHero: PropTypes.func.isRequired,
  typeHeroName: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  typeHeroName,
  cleanHeroName,
  selectHero,
}, dispatch);

const mapStateToProps = state => ({
  heroes: state[HERO_SEARCH].heroes,
  searchTerm: state[HERO_SEARCH].searchTerm,
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearchBox);
