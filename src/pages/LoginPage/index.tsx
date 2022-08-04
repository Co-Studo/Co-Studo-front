import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@components/common/Button';

const LoginPage: React.FC = () => (
  <div>
    <h1>Login Page !</h1>
    <hr />
    <Button width="large" height="medium" color="github">
      <span>Github Login</span>
      <FontAwesomeIcon icon={brands('github')} />
    </Button>
  </div>
);

export default LoginPage;
