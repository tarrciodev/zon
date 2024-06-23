
import { getDeeds } from '@/actions/get-deeds';
import Reac from 'react'
import { Deed } from './deed';

export async function CheckTheNumbers() {

    const deeds = await getDeeds()
    
  return (
      <div className='bg-blue-950 flex-1 flex flex-col p-8'>
          <div>
              <p className='text-green-400 opacity-45 text-4xl font-bold'>
                  THE
              </p>
          </div>
          <div className='flex flex-1'>
              <div className='space-y-4 py-4'>
                  {deeds?.map((deed) => (
                      <Deed deed={deed} key={deed.title}/>
                  ))}
              </div>
          </div>
          <div className='flex justify-end'>
              <p className='text-green-400 opacity-45 text-4xl font-bold'>
                  BESTS
              </p>
          </div>
      </div>
  );
}
