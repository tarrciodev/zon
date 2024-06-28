import { Quote } from "lucide-react";
import { BluredImage } from "../blured-image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

interface IFeedback {
    feedbacks: {
        userName: string;
        userEmail: string;
        userAvatar?: string;
        comment: string;
    }[];
}

export function UsersComments({ feedbacks }: IFeedback) {
    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className='w-full'
        >
            <CarouselContent>
                {feedbacks?.map((feedback) => (
                    <CarouselItem
                        className='flex flex-col gap-12  py-6 px-8 sm:flex-row'
                        key={feedback.userEmail}
                    >
                        <div className='flex gap-2 items-center'>
                            <BluredImage
                                src={feedback.userAvatar as string}
                                alt='user image'
                                className='size-12 xl:size-40 rounded-full border-2'
                            />
                            <div>
                                <p className='text-xl xl:text-3xl font-semibold'>
                                    {feedback.userName}
                                </p>
                                <span>{feedback.userEmail}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 flex-1 px-12 relative'>
                            <Quote className='size-8 text-green-700 rotate-180' />
                            <p className='text-2xl font-medium'>
                                {feedback.comment}
                            </p>
                            <Quote className='size-8 text-blue-900 ml-auto' />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
