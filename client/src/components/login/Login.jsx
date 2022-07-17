import React from "react";
import LoginMain from '../../images/logo/login_main.svg';
import Wave from '../../images/footer/wave.svg';

const Login = () => {
  return (
    <>
      <section className="lg:overflow-hidden h-screen">
        <div className="h-full text-gray-800">
          <div className="h-4/5 flex xl:justify-center lg:flex-col lg:justify-between justify-center items-center flex-wrap g-6">
            <div className="w-52 h-12 relative block">
              <img alt="" />
            </div>
            <p className="mb-8 font-bold text-[#0b1e40] text-lg">Controle sua empresa de um jeito mais simples</p>
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-1/4 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src={LoginMain}
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                {/* <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign in with</p>
                  <RedesSociais />
                </div> */}

                <div className="mb-6">
                  <label className="">Email</label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                <label className="">Senha</label>
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="exampleCheck2">
                      Salvar
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    Esqueceu a senha?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-[#0b1e40] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Acessar
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="absolute z-[-1] bottom-0 w-full">
            <img src={Wave}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
