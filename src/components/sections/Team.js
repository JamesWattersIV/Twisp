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

class Team extends React.Component {

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
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Our story - Lorem ipsum is placeholder text.',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-left" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-scale-up">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/team-member-01.jpg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-07">
                      <Image
                        src={require('./../../assets/images/team-member-02.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/team-member-03.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/team-member-04.jpg')}
                        alt="Team member 04"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-07">
                      <Image
                        src={require('./../../assets/images/team-member-05.jpg')}
                        alt="Team member 05"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-scale-up" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/team-member-06.jpg')}
                        alt="Team member 06"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Markus Hasinika
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Founder & CEO
                    </div>
                    <p className="m-0 text-sm">
                      Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
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

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;