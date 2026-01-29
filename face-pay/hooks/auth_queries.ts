import { login, singup } from "@/lib/api/auth_api";
import { LoginDatatype, Singupdatatype } from "@/lib/types/auth_types";
import { useMutation } from "@tanstack/react-query";

export const useSignupMutation = () => {
    return useMutation({
        mutationKey: ["signup"],
        mutationFn: (FormData:Singupdatatype) => {
            return singup(FormData);
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};

export const useLoginMutation = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data:LoginDatatype) => {
            return login(data);
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};