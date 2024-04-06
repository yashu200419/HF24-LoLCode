import React, { useState } from 'react';
import axios from 'axios';

export function Login ()  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            localStorage.setItem('token', response.data.access_token);
            // Redirect or perform desired action upon successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;












// // import React from 'react'
// import { ArrowRight } from 'lucide-react'
// // import { Navigate, Link} from "react-router-dom";
// // import { doSignInWithEmailAndPassword, doSignInWithGoogle }from "../../../firebase/auth"
// // import { useAuth } from "../../../contexts/authContext/index"
// import React, { useState } from 'react'
// import { Navigate, Link } from 'react-router-dom'
// import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSendEmailVerification } from '../../../firebase/auth'
// import { useAuth } from '../../../contexts/authContext'



// export function Login() {

  
//     const { userLoggedIn } = useAuth()

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [isSigningIn, setIsSigningIn] = useState(false)
//     const [errorMessage, setErrorMessage] = useState('')

//     const onSubmit = async (e) => {
//       e.preventDefault()
//       if(!isSigningIn) {
//         setIsSigningIn(true)
//         await doSignInWithEmailAndPassword(email, password)
//         doSendEmailVerification()
//       }
//     }

//     const onGoogleSignIn = (e) => {
//       e.preventDefault()
//       if(!isSigningIn) {
//         setIsSigningIn(true)
//         doSignInWithGoogle().catch(err => {
//           setIsSigningIn(false)
//         })
//       }
//     }

//     return (
//       <div>
//           {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

//           <main className="w-full h-screen flex self-center place-content-center place-items-center">
//               <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
//                   <div className="text-center">
//                       <div className="mt-2">
//                           <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
//                       </div>
//                   </div>
//                   <form
//                       onSubmit={onSubmit}
//                       className="space-y-5"
//                   >
//                       <div>
//                           <label className="text-sm text-gray-600 font-bold">
//                               Email
//                           </label>
//                           <input
//                               type="email"
//                               autoComplete='email'
//                               required
//                               value={email} onChange={(e) => { setEmail(e.target.value) }}
//                               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//                           />
//                       </div>


//                       <div>
//                           <label className="text-sm text-gray-600 font-bold">
//                               Password
//                           </label>
//                           <input
//                               type="password"
//                               autoComplete='current-password'
//                               required
//                               value={password} onChange={(e) => { setPassword(e.target.value) }}
//                               className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//                           />
//                       </div>

//                       {errorMessage && (
//                           <span className='text-red-600 font-bold'>{errorMessage}</span>
//                       )}

//                       <button
//                           type="submit"
//                           disabled={isSigningIn}
//                           className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
//                       >
//                           {isSigningIn ? 'Signing In...' : 'Sign In'}
//                       </button>
//                   </form>
//                   <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
//                   <div className='flex flex-row text-center w-full'>
//                       <div className='border-b-2 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-2 mb-2.5 ml-2 w-full'></div>
//                   </div>
//                   <button
//                       disabled={isSigningIn}
//                       onClick={(e) => { onGoogleSignIn(e) }}
//                       className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
//                       <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <g clipPath="url(#clip0_17_40)">
//                               <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
//                               <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
//                               <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
//                               <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
//                           </g>
//                           <defs>
//                               <clipPath id="clip0_17_40">
//                                   <rect width="48" height="48" fill="white" />
//                               </clipPath>
//                           </defs>
//                       </svg>
//                       {isSigningIn ? 'Signing In...' : 'Continue with Google'}
//                   </button>
//               </div>
//           </main>
//       </div>
//   )


//   // return (
//   //   <>
//   //   {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
//   //     <div className="grid grid-cols-1 lg:grid-cols-2">
//   //       <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//   //         <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//   //           <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
//   //           <p className="mt-2 text-sm text-gray-600">
//   //             Don't have an account?
//   //             <a
//   //               href="#"
//   //               title=""
//   //               className="font-semibold text-black transition-all duration-200 hover:underline"
//   //             >
//   //               Create a free account
//   //             </a>
//   //           </p>
//   //           <form method="POST" className="mt-8">
//   //             <div className="space-y-5">
//   //               <div>
//   //                 <label htmlFor="username" className="text-base font-medium text-gray-900">
//   //                   Email address
//   //                 </label>
//   //                 <div className="mt-2">
//   //                   <input
//   //                     className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//   //                     type="email"
//   //                     required
//   //                     value={email} onChange={(e)=>{setEmail(e.target.value)}}
//   //                     id="username"
//   //                     placeholder="Email"
//   //                   ></input>
//   //                 </div>
//   //               </div>
//   //               <div>
//   //                 <div className="flex items-center justify-between">
//   //                   <label htmlFor="password" className="text-base font-medium text-gray-900">
//   //                     Password
//   //                   </label>
//   //                   <a
//   //                     href="#"
//   //                     title=""
//   //                     className="text-sm font-semibold text-black hover:underline"
//   //                   >
//   //                     Forgot password?
//   //                   </a>
//   //                 </div>
//   //                 <div className="mt-2">
//   //                   <input
//   //                     className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//   //                     type="password"
//   //                     required
//   //                     id="password"
//   //                     value = {password} onChange = {(e)=>{setPassword(e.target.value)}}
//   //                     placeholder="Password"/>
//   //                 </div>
//   //                 {errorMessage && (<span className='text-red-600 font-bold'></span>)}
//   //               </div>
//   //               {/* <div> */}
//   //                 <button
//   //                   type="submit"
//   //                   disabled = {isSigningIn}
//   //                   className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
//   //                 >
//   //                   Get started <ArrowRight className="ml-2" size={16} />
//   //                 </button>
//   //               {/* </div> */}
//   //             </div>
            
//   //           <div className="mt-3 space-y-3">
//   //             <button
//   //               type="button"
//   //               onSubmit = {(e) => {onGoogleSignIn(e)}}
//   //               disabled={isSigningIn}
//   //               className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
//   //             >
//   //               <span className="mr-2 inline-block">
//   //                 <svg
//   //                   className="h-6 w-6 text-rose-500"
//   //                   xmlns="http://www.w3.org/2000/svg"
//   //                   viewBox="0 0 24 24"
//   //                   fill="currentColor"
//   //                 >
//   //                   <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
//   //                 </svg>
//   //               </span>
//   //              {isSigningIn ?"Signing In..." : "Sign in with Google"}
//   //             </button>
              
//   //           </div>
            
//   //         </div>
//   //       </div>
//   //       </form>
//   //       <div className="h-full w-full">
//   //         <img
//   //           className="mx-auto h-full w-full rounded-md object-cover"
//   //           src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//   //           alt=""
//   //         />
//   //       </div>
//   //     </div>
//   //   </>
//   // )
// }
