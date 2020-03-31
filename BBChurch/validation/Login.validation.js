import { assert } from 'chai';
import { loginPage } from '../pages/Login.page';


class LoginValidation {
    checkUserLoggedMessage() {
        assert.equal(
            LoginPage.sp-block-content.getText(),
            systemMessages.FEEDBACK_USER_LOGGED,
        );
    }

    
}

export const loginValidation = new LoginValidation();