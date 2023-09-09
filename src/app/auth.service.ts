export class AuthService
{
    loggedIn:boolean=true;
    
    login()
    {
        this.loggedIn=true;
    }
    logout()
    {
        this.loggedIn=false;
    }
    isAutenticated()
    {
       return this.loggedIn;
    }
}