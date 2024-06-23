"use client";
import { giveFeedBack } from "@/actions/feedback";
import { getAuthInfo } from "@/actions/get-auth-info";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { MessageSquare } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "../loading";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { FeedbackAuth } from "./feedback-auth";
import { useQuerySetter } from "@/utils/query-setter";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export function Feedback() {
    const ref = useRef<HTMLButtonElement>(null);
    const feedbackDialog = useSearchParams().get("feedbackDialog");
    const [user, setUser] = useState<null | any>(null);
 

    const { removeQueryParams } = useQuerySetter();
    function removeFeedbackQuery() {
        removeQueryParams("feedbackDialog");
    }

    const validateForm = z.object({
        comment: z.string({message: "Insira um commentário"})
    })

    type validateFormProps = z.infer< typeof validateForm>
   
    const form = useForm<validateFormProps>({
        resolver: zodResolver(validateForm)
    });
    const {
        setValue,
        formState: { isSubmitting, isSubmitSuccessful },
    } = form;

    async function handleFeedBack(data: any) {

        const feedbackData = {
            userName: user?.name,
            userEmail: user?.email,
            userAvatar: user?.image,
            comment: data?.comment
        }

        try {
            toast.success("O seu feedback foi enviado com sucesso. Obrigado!")
        }catch(err){

        }


    }

    useEffect(() => {
        (async () => {
            const session = await getAuthInfo();
            setUser(session?.user);

            if(isSubmitSuccessful){
                setValue("comment","")
            }
        })();

        if (feedbackDialog) {
            ref?.current?.click();
        }

        return () => {};
    }, [feedbackDialog, isSubmitSuccessful, setValue]);

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button
                    ref={ref}
                    className='fixed right-8 bottom-36 size-12 rounded-full bg-slate-50 shadow-xl border border-slate-100 flex items-center justify-center text-black'
                >
                    <MessageSquare className='text-dark' />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm'>
                    <DrawerHeader>
                        <DrawerTitle className='text-center'>
                            Deixe o seu FeedBack
                        </DrawerTitle>
                        <DrawerDescription>
                            {/* Set your daily activity goal. */}
                        </DrawerDescription>
                    </DrawerHeader>
                    <div>
                        {user ? (
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(handleFeedBack)}
                                >
                                    <FormField
                                        control={form.control}
                                        name='comment'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel />
                                                <FormControl>
                                                    <Textarea
                                                        placeholder='type what you think about us'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='w-full'>
                                        <DrawerFooter className='w-full mx-0 px-0'>
                                            <Button
                                                disabled={isSubmitting}
                                                className='py-2 px-4 text-blue-50 rounded-lg mt-4 flex items-center justify-center gap-2 w-full'
                                            >
                                                {isSubmitting && <Loading />}
                                                Enviar mensagem
                                            </Button>
                                            <DrawerClose asChild>
                                                <Button
                                                    variant='outline'
                                                    onClick={
                                                        removeFeedbackQuery
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </form>
                            </Form>
                        ) : (
                            <FeedbackAuth/>
                        )}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
