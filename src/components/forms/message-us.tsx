"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { toast } from "sonner";
import { Loading } from "../loading";

export function MessageUs() {

    const form = useForm()
    const { setValue, formState: {isSubmitting} } = form

    async function handleEmail (data: any){
        const resend = await sendEmail({
            friendlyName: data.name,
            message: data.message,
            replayTo: data.email,
            subject: data.subject
        })

        if(resend.status == "ok"){
            setValue("name", "")
            setValue("email", "")
            setValue("subject", "")
            setValue("message", "")
            toast.success(resend.message)
            return
        }

        toast.error(resend.message)
    }
    
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleEmail)}>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input
                                        placeholder='your name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input
                                        placeholder='your email'
                                        type='email'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='subject'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input placeholder='subject' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Textarea
                                        placeholder='your message'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                    disabled={isSubmitting}
                    className='py-2 px-4 bg-blue-950 text-blue-50 rounded-lg mt-4 flex items-center justify-center gap-2'>
                        {isSubmitting && <Loading/>}Enviar mensagem
                    </Button>
                </form>
            </Form>
        </div>
    );
}
