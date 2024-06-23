import { Quote } from "lucide-react";
import Image from "next/image";

interface IComment {
    comment: {
        text: string
        user: {
            avatarUrl: string
            name: string
            job: string
        }
    }
}

export function UserComment({comment}: IComment) {
    return (
        <div
            className='flex flex-col gap-6 bg-gradient-to-r from-blue-200 to-blue-400 border-t-4 border-blue-950 py-6 px-8'
        >
            <div className='flex items-center gap-2'>
                <p>
                    {comment.text}
                </p>

                <Image
                    src={comment.user.avatarUrl}
                    width={50}
                    height={50}
                    alt='user image'
                    className='size-20 rounded-full border-2 border-green-700'
                />
            </div>
            <div className='flex justify-between'>
                <p className='font-semibold text-blue-950'>{comment?.user?.name}</p>
                <p className='font-semibold text-green-700'>{comment?.user?.job}</p>
                <span>
                    <Quote />
                </span>
            </div>
        </div>
    );
}
