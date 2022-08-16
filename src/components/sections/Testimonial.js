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

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-06',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Testimonials - Lorem ipsum is placeholder text commonly used.',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content invert-color" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-scale-up">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-01.png')}
                        alt="Testimonial 01"
                        width={56}
                        height={56} />
                    </div>
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                    </div>
                    <div className="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                      <span className="testimonial-item-name">
                        Erika Muliawan
                      </span>
                      <span className="text-color-low"> - </span>
                      <span className="testimonial-item-link text-xs">
                        <a href="#0">AppName</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-02.png')}
                        alt="Testimonial 02"
                        width={56}
                        height={56} />
                    </div>
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                    </div>
                    <div className="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                      <span className="testimonial-item-name">
                        Erika Muliawan
                      </span>
                      <span className="text-color-low"> - </span>
                      <span className="testimonial-item-link text-xs">
                        <a href="#0">AppName</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-03.png')}
                        alt="Testimonial 03"
                        width={56}
                        height={56} />
                    </div>
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                    </div>
                    <div className="testimonial-item-footer h6 mt-32 mb-0 pt-24 has-top-divider">
                      <span className="testimonial-item-name">
                        Erika Muliawan
                      </span>
                      <span className="text-color-low"> - </span>
                      <span className="testimonial-item-link text-xs">
                        <a href="#0">AppName</a>
                      </span>
                    </div>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;
    
export default Testimonial;