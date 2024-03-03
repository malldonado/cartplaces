import React from 'react';
import Image from '../../images/product/image.png'

function Description() {
  return (
    <div className='max-w-[1200px] mx-auto flex'>
      <div className='w-[50%]'>
        <img className='h-[500px] w-[500px]' src={Image} alt="" />
      </div>
      <div className='w-[50%]'>
        <span className='text-left font-bold mb-2 text-[24px]'>Kit para Vinho Xadrex 4 peças</span>
        <span className='text-left font-normal mb-2 block mt-5'>Para você que é amante de Vinho e curte um bom jogo de xadrez esse kit é ideal. Sem contar que seu designer diferenciado traz beleza e design impecável para a sua mesa. É muita diversão acompanhada de um bom vinho.</span>
        <span className='mt-10 block'>Aproveite! Possuímos apenas 8 unidades em estoque!</span>
        <span>Formas de pagamento</span>
        <butto className="text-white font-bold bg-[#2144e1] mt-10 w-[120px] flex justify-center items-center h-[45px] rounded-[8px] text-[14px] outline-none">TO ADD</butto>
      </div>
    </div>
  )
}

export default Description