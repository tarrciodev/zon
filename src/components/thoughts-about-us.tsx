import React from 'react'
import { Separator } from './ui/separator';
import { CommentsContainer } from './comments/coments-container';

export function ThoughtsAboutUs() {
  return (
      <div className='mt-12'>
          <div>
              <Separator className='w-24 bg-green-700 h-1 rounded' />
              <p className='text-blue-950 text-4xl font-semibold pt-4'>
                  Oque Outros <span className='block'>Acham de Nos?</span>
              </p>
              <p className='py-4'>
                  Oiça de Primeira Mao, a Opnião de Quem Ja se
                  <span className='block'>Beneficiou de Nossos Servicos.</span>
              </p>
          </div>
          <CommentsContainer />
      </div>
  );
}
