// import { doSocialLogin } from "@/app/actions";

// const LoginForm = () => {
//     return (
//         <form action={doSocialLogin}>
//             <button className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="google">
//                 Sign In With Google
//             </button>

//         </form>
//     );
// };

// export default LoginForm;

import Image from "next/image";
import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <div className="w-1/2 flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="flex items-center bg-white shadow-lg rounded-2xl p-1 max-w-md w-full border border-primary-2">
        
        <div className="w-[30%] pr-4 flex justify-center">
          <Image
            src="/bee.png" 
            alt="Company Demo"
            width={150}
            height={150}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Google Login Button */}
        <div className="w-[70%] flex justify-center">
          <form action={doSocialLogin}>
            <button
              type="submit"
              name="action"
              value="google"
              className="flex items-center gap-2 bg-primary-1 text-white font-bold px-4 py-2 rounded-lg shadow transition cursor-pointer"
            >
            <div className="bg-slate-200 p-2 rounded-full">
                <Image
                src="/google.png" 
                alt="Google"
                width={30}
                height={30}
              />
            </div>
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
