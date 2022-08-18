import React from 'react';
import './Welcome.scss';

import Text from '../../atoms/text/Text';

import CinnySvg from '../../../../public/res/svg/cinny.svg';

function Welcome() {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img className="app-welcome__logo noselect" src={CinnySvg} alt="Drop logo" />
        <Text className="app-welcome__heading" variant="h1" weight="medium" primary>Welcome to Drop</Text>
      </div>
    </div>
  );
}

export default Welcome;
