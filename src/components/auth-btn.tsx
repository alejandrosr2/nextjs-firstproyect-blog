

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default  function AuthBtn() {


    return (
        <div>
            <LoginLink className="text-zinc-900 font-bold p-2 mr-10 md:p-0 ">
                In 
            </LoginLink>
            <LogoutLink className="text-zinc-900 font-bold p-2 md:p-0">
                Out
            </LogoutLink>
        </div>
    );
};
