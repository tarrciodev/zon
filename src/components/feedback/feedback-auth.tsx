import { socialLogin } from "@/actions/social-login";
import { useQuerySetter } from "@/utils/query-setter";
import { GoogleIcon } from "../svg-icons/google";
import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";

export function FeedbackAuth() {
    const { removeQueryParams } = useQuerySetter();
    function removeFeedbackQuery() {
        removeQueryParams("feedbackDialog");
    }
    return (
        <form className='py-12 flex flex-col gap-3' action={socialLogin}>
            <p>Para Dar o seu Feedback você precisa estar autenticado</p>
            <Button className='flex items-center gap-3' type='submit'>
                <GoogleIcon />
                Continuar com Google
            </Button>
            <DrawerClose asChild>
                <Button variant='outline' onClick={removeFeedbackQuery}>
                    Cancel
                </Button>
            </DrawerClose>
        </form>
    );
}
