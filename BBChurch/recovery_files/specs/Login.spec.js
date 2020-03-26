import { loginPage } from '../pages/Login.page';
import { loginValidation } from '../validation/Login.validation';


describe.only('Authentication page.', () => {
   
       it('Login Page opened successfully.', () => {
        LoginPage.open(context.logins.user);
        LoginValidation.checkUserLoggedMessage();
    });

   
});
