import { CommentsContainer } from "./comments/coments-container";
import { Separator } from "./ui/separator";

export function ThoughtsAboutUs() {
    return (
        <div className='mt-12'>
            <div>
                <Separator className='w-24 bg-green-700 h-1 rounded' />
                <p className='text-blue-950 text-4xl font-semibold pt-4'>
                    Oque Outros <span className='block'>Acham de Nos?</span>
                </p>
            </div>
            <CommentsContainer />
        </div>
    );
}
