import { postData } from "@/lib/fetch-util";
import type { SignUpFormData } from "@/routes/routes/auth/sign-up";
import SignUp from "@/routes/routes/auth/sign-up";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: (data: SignUpFormData) => postData("/auth/register", data),
    });
};