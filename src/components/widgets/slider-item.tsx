import Image from 'next/image';
import { cn } from '@/utils/utilerias';

interface SliderItemProps{
    itemActive: number;
    id: number;
    image: String;
    brand: String;
    name: String;
    desc: String;
}

export const SliderItem = ({ 
    itemActive, 
    id, 
    brand, 
    name, 
    image, 
    desc
}: SliderItemProps) => {
  return (
  <li className={cn(`absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full 
    after:left-0 after:bottom-0 after:bg-slider transition-all duration-500`
    )}
    >
        <div className='relative w-full h-full'>
            <Image src={"/imagenes/fondo.jpg"} alt='Image' fill className='object-cover' />
        </div>
        <div className='space-y-4 absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10'>
            <h2 className={cn(`text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0 
                animate-show-content`)}>
                Flor de azúcar
            </h2>
            <p className={cn("uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0 animate-show-content animation-delay-4")}>
                Arreglos para todo tipo de eventos
            </p>
            <p className='text-gray-200 translate-y-[30px] blur-[20px] opacity-0 animate-show-content animation-delay-5'>
                En flor de azúcar encontraras todo tipo de arreglos para todo tipo de eventos,
                contamos con entregas a domicilio
            </p>
            
        </div>
    </li>
  );
};
