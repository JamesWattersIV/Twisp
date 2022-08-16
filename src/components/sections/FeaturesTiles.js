import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section center-content-mobile',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: '',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-01.svg')}
                        alt="Features tile icon 01"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      Flexibility
                    </h4>
                    <p className="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-02.svg')}
                        alt="Features tile icon 02"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Flexibility
                    </h4>
                    <p className="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-03.svg')}
                        alt="Features tile icon 03"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Flexibility
                    </h4>
                    <p className="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="400">
                      A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-04.svg')}
                        alt="Features tile icon 04"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      Flexibility
                    </h4>
                    <p className="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-05.svg')}
                        alt="Features tile icon 05"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Flexibility
                    </h4>
                    <p className="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-12 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-06.svg')}
                        alt="Features tile icon 06"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Flexibility
                    </h4>
                    <p className="m-0 text-sm reveal-from-right" data-reveal-container=".tiles-item" data-reveal-delay="400">
                      A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.
                    </p>
                  </div>
                </div>
              </div>              

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;